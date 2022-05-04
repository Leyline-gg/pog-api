import {BindingScope, inject, injectable} from '@loopback/core';
import {utils, Wallet} from 'ethers';
import {nanoid} from 'nanoid';
import {FirestoreDataSource} from '../datasources';

export type PogProfile = {
  userId: string;
  walletAddresses?: string[];
  email?: string;
  doGooder?: string;
  isOnPogLedger?: boolean;
  created?: FirebaseFirestore.Timestamp;
};

export type PogProfileParams = {
  userId: string;
  email: string;
  doGooder: string;
};

@injectable({scope: BindingScope.TRANSIENT})
export class PogProfileService {
  db: any;
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    this.db = dataSource.connector?.db;
  }

  async createPogProfile(pogProfile: PogProfile): Promise<PogProfile | null> {
    try {
      await this.db
        .collection('pogprofiles')
        .doc(`${pogProfile.userId}`)
        .set(pogProfile);

      console.log('Profile created in firestore for', pogProfile);
      return pogProfile;
    } catch (error: any) {
      console.log(error);
      return null;
    }
  }

  async updatePogProfile(
    pogProfileId: string,
    data: PogProfile,
  ): Promise<PogProfile | null> {
    try {
      console.log('Updating Pog Profile', pogProfileId);
      console.log('Updated properties:', data);
      await this.db.collection('pogprofiles').doc(pogProfileId).update(data);

      const updatedPogProfileSnapshot: FirebaseFirestore.DocumentSnapshot =
        await this.db.collection('pogprofiles').doc(pogProfileId).get();

      const updatedPogProfile = updatedPogProfileSnapshot.data();

      console.log('Updated Pog Profile:', updatedPogProfile);
      return updatedPogProfile as PogProfile;
    } catch (error: any) {
      console.log(error);
      return null;
    }
  }

  async getPogProfileByUserId(userId: string): Promise<PogProfile | undefined> {
    try {
      const pogProfileSnapshot: FirebaseFirestore.DocumentSnapshot =
        await this.db.doc(`pogprofiles/${userId}`).get();
      const pogProfileData = pogProfileSnapshot.data();

      if (pogProfileData) {
        const walletAddresses = await this.getWalletAddressesForProfile(
          pogProfileData.userId,
        );
        const pogProfile: PogProfile = {
          userId: pogProfileData.userId,
          ...pogProfileData,
          walletAddresses,
        };
        return pogProfile;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  hashEmail(email: string) {
    return utils.id(email);
  }

  async getPogProfileByEmail(
    emailHash: string,
  ): Promise<PogProfile | undefined> {
    try {
      const profileQuerySnapshot: FirebaseFirestore.QuerySnapshot =
        await this.db
          .collection('pogprofiles')
          .where('email', '==', emailHash)
          .get();

      if (profileQuerySnapshot.docs.length > 1) {
        throw new Error('Found multiple profiles with the same email.');
      }

      if (profileQuerySnapshot.docs.length) {
        const pogProfileData = profileQuerySnapshot.docs[0].data();
        const walletAddresses = await this.getWalletAddressesForProfile(
          pogProfileData.userId,
        );

        const pogProfile: PogProfile = {
          userId: pogProfileData.userId,
          ...pogProfileData,
          walletAddresses,
        };

        return pogProfile;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  async getPogProfileByWalletAddress(
    walletAddress: string,
  ): Promise<PogProfile | undefined> {
    try {
      const addressSnapshot: FirebaseFirestore.QuerySnapshot = await this.db
        .collectionGroup('walletAddresses')
        .where('walletAddress', '==', walletAddress)
        .get();

      if (addressSnapshot.docs.length > 1) {
        throw new Error(
          `There are multiple profiles associated to the wallet address: ${walletAddress}`,
        );
      }

      if (addressSnapshot.docs.length) {
        const pogProfileUserId = addressSnapshot.docs[0].data().userId;
        const pogProfileQuerySnapshot = await this.db
          .collection('pogprofiles')
          .where('userId', '==', pogProfileUserId)
          .get();

        if (pogProfileQuerySnapshot.docs.length > 1) {
          throw new Error(
            `There are multiple profiles associated to the same userId: ${pogProfileUserId}`,
          );
        }

        if (pogProfileQuerySnapshot.docs.length) {
          const pogProfile = pogProfileQuerySnapshot.docs[0].data();
          const walletAddresses = await this.getWalletAddressesForProfile(
            pogProfile.userId,
          );
          return {...pogProfile, walletAddresses};
        } else {
          return undefined;
        }
      }
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  async addWalletAddressToProfile(userId: string, walletAddress: string) {
    const walletQuerySnapshot = await this.db
      .collectionGroup('walletAddresses')
      .where('walletAddress', '==', walletAddress)
      .get();
    if (walletQuerySnapshot.docs.length) {
      throw new Error('Wallet address already exists');
    }
    const newWalletRef = this.db.doc(
      `pogprofiles/${userId}/walletAddresses/${walletAddress}`,
    );
    await newWalletRef.set({
      userId,
      walletAddress,
    });
  }

  async getWalletAddressesForProfile(userId: string): Promise<string[]> {
    const walletAddressesSnapshot: FirebaseFirestore.QuerySnapshot =
      await this.db.collection(`pogprofiles/${userId}/walletAddresses`).get();
    if (walletAddressesSnapshot.docs.length) {
      return walletAddressesSnapshot.docs.map(doc => doc.data().walletAddress);
    } else {
      return [];
    }
  }

  generateDerivativePath(highestGeneratedCount: number) {
    const baseDerivativePath = "m/44'/60'/";
    const newGeneratedCount = highestGeneratedCount + 1;
    const maxDerivativePathOffset = parseInt(
      process.env.MAX_DERIVATIVE_PATH_OFFSET as string,
    );
    const derivativePathAccount = Math.floor(
      newGeneratedCount / maxDerivativePathOffset,
    );
    const derivativePathIndex = newGeneratedCount % maxDerivativePathOffset;
    return `${baseDerivativePath}/${derivativePathAccount}'/0/${derivativePathIndex}`;
  }

  async generateWallet(): Promise<Wallet> {
    const mnemonicId = process.env.MNEMONIC_ID;
    const walletGenerationDocRef = await this.db.doc(
      `walletgeneration/${mnemonicId}`,
    );
    return this.db.runTransaction((transaction: any) => {
      return transaction
        .get(walletGenerationDocRef)
        .then((walletGenerationDoc: FirebaseFirestore.DocumentSnapshot) => {
          if (walletGenerationDoc.exists) {
            const generatedCount = walletGenerationDoc?.data()?.generatedCount;
            const derivativePath = this.generateDerivativePath(generatedCount);
            const mnemonic: any = process.env[`MNEMONIC_${mnemonicId}`];
            const newWallet = Wallet.fromMnemonic(mnemonic, derivativePath);
            transaction.update(walletGenerationDocRef, {
              generatedCount: FirebaseFirestore.FieldValue.increment(1),
              currentIndex: FirebaseFirestore.FieldValue.increment(1),
            });
            return newWallet;
          } else {
            return Promise.reject('The wallet generation doc does not exist');
          }
        })
        .then((newWallet: Wallet) => {
          console.log('New wallet address created:', newWallet.address);
        })
        .catch((error: any) => {
          console.log(error);
        });
    });
  }

  async findOrCreatePogProfile(data: PogProfileParams) {
    let emailHash;
    let pogProfileFromUserId;
    let pogProfileFromEmailHash;
    let pogProfileFromWalletAddress;
    let pogProfile;
    let profileId;
    let walletAddress;

    const {userId, email, doGooder} = data;

    if (!userId && !email && !doGooder) {
      // fail request
      throw new Error('UserId or Email or Wallet Address required');
    }

    // if a userId is provided, search for profile
    if (userId) {
      pogProfileFromUserId = await this.getPogProfileByUserId(userId);
      if (pogProfileFromUserId) {
        console.log('Profile found:', pogProfileFromUserId);
      } else {
        console.log('Profile not found, it will be created');
      }
    }

    // if email is provided, find userId (profileId) from the contract's userByEmailHash mapping
    if (email) {
      emailHash = this.hashEmail(email);
      pogProfileFromEmailHash = await this.getPogProfileByEmail(emailHash);
      if (pogProfileFromEmailHash) {
        console.log('Profile ID from userByEmailHash', pogProfileFromEmailHash);
      } else {
        console.log('Profile not found from email address:', email);
      }
    }

    // if doGooder address is provided, find userId (profileId) from the contract's walletUser mapping
    if (doGooder) {
      pogProfileFromWalletAddress = await this.getPogProfileByWalletAddress(
        doGooder,
      );
      if (pogProfileFromWalletAddress) {
        console.log(
          'Profile ID from walletAddress',
          pogProfileFromWalletAddress,
        );
      } else {
        console.log(
          'Profile not found from doGooder wallet address:',
          doGooder,
        );
      }
    }

    // if profiles were found from the email and doGooder wallets entered
    // - check that the userIds returned match
    // - throw an error if they don't
    if (pogProfileFromEmailHash && pogProfileFromUserId && pogProfile) {
      if (pogProfileFromEmailHash.userId != pogProfileFromUserId.userId) {
        throw new Error('User ID found for email and wallet do not match');
      } else {
        console.log('User ID from email and wallet matches');
        console.log('Setting Profile ID to', pogProfileFromEmailHash);
        profileId = pogProfileFromEmailHash;
      }
      // if a userId was only returned from userByEmailHash, set it as profileId
    } else if (pogProfileFromEmailHash) {
      profileId = pogProfileFromEmailHash;
      // if a userId was only returned from walletUser, set it as profileId
    } else if (pogProfileFromUserId) {
      profileId = pogProfileFromUserId;
    }

    switch (true) {
      // if userId was provided in request, and profiles were found from email and doGooder match
      // check if the userId from profiles returned matches the userId provided
      case !!pogProfileFromEmailHash &&
        !!pogProfileFromWalletAddress &&
        !!userId:
        if (
          pogProfileFromEmailHash?.userId == userId &&
          pogProfileFromWalletAddress?.userId == userId
        ) {
          pogProfile = pogProfileFromEmailHash;
        }
        break;
      // if profiles were returned from email and doGooder, check the profile userIds match
      case !!pogProfileFromEmailHash && !!pogProfileFromWalletAddress:
        if (
          pogProfileFromEmailHash?.userId == pogProfileFromWalletAddress?.userId
        ) {
          pogProfile = pogProfileFromEmailHash;
        }
        break;
      // if userId and email is provided, check the userId returned from email matches
      case !!pogProfileFromEmailHash && !!userId:
        if (pogProfileFromEmailHash?.userId == userId) {
          pogProfile = pogProfileFromEmailHash;
        }
        break;
      // if userId and doGooder is provided, check the userId returned from doGooder matches
      case !!pogProfileFromWalletAddress && !!userId:
        if (pogProfileFromWalletAddress?.userId == userId) {
          pogProfile = pogProfileFromEmailHash;
        }
        break;
      // if only userId returns a profile, set as pogProfile
      case !!pogProfileFromUserId:
        pogProfile = pogProfileFromUserId;
        break;
      // if only email returns a profile, set as pogProfile
      case !!pogProfileFromEmailHash:
        pogProfile = pogProfileFromEmailHash;
        break;
      // if only walletAddress returns a profile, set as pogProfile
      case !!pogProfileFromWalletAddress:
        pogProfile = pogProfileFromWalletAddress;
        break;
    }

    // if no userId was found, generate a new one
    if (pogProfile) {
      if (doGooder) {
        if (!pogProfileFromWalletAddress) {
          await this.addWalletAddressToProfile(pogProfile.userId, doGooder);
        }
      }
      return pogProfile;
    } else {
      console.log(
        'No profile found matching data entered, generating new profile',
      );
      profileId = utils.formatBytes32String(nanoid());
      console.log('Creating new profile with userId:', profileId);

      const pogProfileParams = {
        userId: profileId,
        isOnPogLedger: false,
        created: FirebaseFirestore.Timestamp.now(),
      };

      // if email is provided, use emailHash
      if (emailHash) {
        Object.assign(pogProfileParams, {emailHash});
      }

      // create the new pog profile doc in firestore
      const profileRef = this.db.doc(`pogprofiles/${profileId}`);
      await profileRef.set(pogProfileParams);

      // if wallet was provided and doesn't exist in firestore, add to user's profile
      if (doGooder) {
        walletAddress = doGooder;
        if (!pogProfileFromWalletAddress) {
          await this.addWalletAddressToProfile(profileId, doGooder);
        }
      } else {
        // generate wallet and add to pog profile
        const newWallet = await this.generateWallet();
        walletAddress = newWallet.address;
        await this.addWalletAddressToProfile(profileId, walletAddress);
      }
      // get newly created pog profile and return
      const createdPogProfile = await this.getPogProfileByUserId(profileId);
      Object.assign(createdPogProfile, {doGooder: walletAddress});
      return createdPogProfile;
    }
  }
}
