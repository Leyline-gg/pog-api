import {FieldValue, Firestore, Timestamp} from '@google-cloud/firestore';
import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {utils, Wallet} from 'ethers';
import {nanoid} from 'nanoid';
import {FirestoreDataSource} from '../datasources';
import {PogProfile, PogProfileRelations} from '../models';

export type PogProfileParams = {
  userId: string;
  email: string;
  doGooder: string;
};

export class PogProfileRepository extends DefaultCrudRepository<
  PogProfile,
  typeof PogProfile.prototype.userId,
  PogProfileRelations
> {
  db: Firestore;
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(PogProfile, dataSource);
    this.db = dataSource.connector?.db;
  }

  async createPogProfile(
    pogProfile: Partial<PogProfile>,
  ): Promise<Partial<PogProfile> | undefined> {
    const profileId = utils.formatBytes32String(nanoid());
    console.log('Creating new profile with userId:', profileId);
    Object.assign(pogProfile, {userId: profileId});
    const pogProfileRef = this.db.doc(`pogprofiles/${profileId}`);

    // if email was provided but not email hash, generate email hash
    if (!!pogProfile.email && !pogProfile.emailHash) {
      Object.assign(pogProfile, {emailHash: this.hashEmail(pogProfile.email)});
    }

    await pogProfileRef.set(pogProfile);

    // if wallet was provided and doesn't exist in firestore, add to user's profile
    if (pogProfile.doGooder) {
      await this.addWalletAddressToProfile(
        profileId,
        pogProfile.doGooder.toLowerCase(),
      );
    }
    // if user is found with matching email, add wallet addresses to pog profile
    if (pogProfile.email) {
      const pogUserSnapshotQuery = await this.db
        .collection('users')
        .where('email', '==', pogProfile.email)
        .get();
      if (pogUserSnapshotQuery.docs.length) {
        const pogUserRef = pogUserSnapshotQuery.docs[0].ref;
        console.log('Email found associated to user:', pogUserRef.id);
        const userAddressesQuerySnapshot = await this.db
          .collectionGroup('addresses')
          .where('uid', '==', pogUserRef.id)
          .get();
        const userAddresses = userAddressesQuerySnapshot.docs.map(
          (addressDocSnapshot: FirebaseFirestore.DocumentSnapshot) =>
            addressDocSnapshot.data()?.address,
        );
        for (const address of userAddresses) {
          await this.addWalletAddressToProfile(profileId, address);
        }
      } else if (!pogProfile.doGooder) {
        // generate wallet and add to pog profile
        const newWallet = await this.generateWallet();
        const newWalletAddress = newWallet!.address;
        await this.addWalletAddressToProfile(profileId, newWalletAddress);
      }
    }

    const pogProfileSnapshot = await pogProfileRef.get();
    const pogProfileData = pogProfileSnapshot.data();

    const pogProfileAddressesSnapshot = await this.db
      .collection(`pogprofiles/${profileId}/walletAddresses`)
      .get();
    console.log('Profile created in firestore for', pogProfileData);

    // set doGooder to provided doGooder or the first wallet address in profile's walletAddresses subcollection
    if (pogProfile.doGooder) {
      Object.assign(pogProfileData as PogProfile, {
        doGooder: pogProfile.doGooder,
      });
    } else if (pogProfileAddressesSnapshot.docs.length) {
      Object.assign(pogProfileData as PogProfile, {
        doGooder: pogProfileAddressesSnapshot.docs[0].data().walletAddress,
      });
    }
    console.log('pogProfileData:', pogProfileData);
    return pogProfileData;
  }

  async updatePogProfile(
    pogProfileId: string,
    data: PogProfile,
  ): Promise<PogProfile | null> {
    try {
      console.log('Updating Pog Profile', pogProfileId);
      console.log('Updated properties:', data);

      if (data.doGooder) {
        await this.addWalletAddressToProfile(
          pogProfileId,
          data.doGooder.toLowerCase(),
        );
      }
      delete data.doGooder;
      await this.db.collection('pogprofiles').doc(pogProfileId).update(data);

      const updatedPogProfileSnapshot: FirebaseFirestore.DocumentSnapshot =
        await this.db.collection('pogprofiles').doc(pogProfileId).get();

      const updatedPogProfile = updatedPogProfileSnapshot.data();

      console.log('Updated Pog Profile:', updatedPogProfile);
      return updatedPogProfile as PogProfile;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getPogProfileByUserId(
    userId: string,
  ): Promise<Partial<PogProfile> | undefined> {
    try {
      const pogProfileSnapshot: FirebaseFirestore.DocumentSnapshot =
        await this.db.doc(`pogprofiles/${userId}`).get();
      const pogProfileData = pogProfileSnapshot.data();

      if (pogProfileData) {
        const walletAddresses = await this.getWalletAddressesForProfile(
          pogProfileData.userId,
        );
        const pogProfile: Partial<PogProfile> = {
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
  ): Promise<Partial<PogProfile> | undefined> {
    const profileQuerySnapshot: FirebaseFirestore.QuerySnapshot = await this.db
      .collection('pogprofiles')
      .where('emailHash', '==', emailHash)
      .get();

    if (profileQuerySnapshot.docs.length > 1) {
      throw new Error('Found multiple profiles with the same email.');
    }

    if (profileQuerySnapshot.docs.length) {
      const pogProfileData = profileQuerySnapshot.docs[0].data() as PogProfile;
      if (pogProfileData.userId) {
        const walletAddresses = await this.getWalletAddressesForProfile(
          pogProfileData.userId,
        );

        const pogProfile = {
          ...pogProfileData,
          walletAddresses,
        };
        return pogProfile;
      }
    }
    return undefined;
  }

  async addEmailToProfile(userId: string, email: string) {
    const emailHash = this.hashEmail(email);
    const emailQuerySnapshot = await this.db
      .collection('pogprofiles')
      .where('emailHash', '==', emailHash)
      .get();
    if (!!emailQuerySnapshot.docs.length) {
      throw new Error('Email already exists in a profile.');
    }

    await this.db.doc(`pogprofiles/${userId}`).update({email, emailHash});
  }

  async getPogProfileByWalletAddress(
    walletAddress: string,
  ): Promise<Partial<PogProfile> | undefined> {
    const lowerCasedWalletAddress = walletAddress.toLowerCase();
    const addressSnapshot: FirebaseFirestore.QuerySnapshot = await this.db
      .collectionGroup('walletAddresses')
      .where('walletAddress', '==', lowerCasedWalletAddress)
      .get();

    if (addressSnapshot.docs.length > 1) {
      throw new Error(
        `There are multiple profiles associated to the wallet address: ${lowerCasedWalletAddress}`,
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
        const pogProfile = pogProfileQuerySnapshot.docs[0].data() as PogProfile;
        if (pogProfile.userId) {
          const walletAddresses = await this.getWalletAddressesForProfile(
            pogProfile.userId,
          );
          return {...pogProfile, walletAddresses};
        }
      }
      return undefined;
    }
  }

  async addWalletAddressToProfile(userId: string, walletAddress: string) {
    const lowerCasedWalletAddress = walletAddress.toLowerCase();
    const walletQuerySnapshot = await this.db
      .collectionGroup('walletAddresses')
      .where('walletAddress', '==', lowerCasedWalletAddress)
      .get();
    if (walletQuerySnapshot.docs.length) {
      throw new Error('Wallet address already exists');
    }
    const newWalletRef = this.db.doc(
      `pogprofiles/${userId}/walletAddresses/${lowerCasedWalletAddress}`,
    );
    await newWalletRef.set({
      userId,
      walletAddress: lowerCasedWalletAddress,
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
    const baseDerivativePath = "m/44'/60'";
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

  async generateWallet(): Promise<Wallet | undefined> {
    const mnemonicId = process.env.MNEMONIC_ID ?? '';
    const walletGenerationDocRef = this.db.doc(
      `walletgeneration/${mnemonicId}`,
    );
    return this.db.runTransaction(
      async (
        transaction: FirebaseFirestore.Transaction,
      ): Promise<Wallet | undefined> => {
        try {
          const walletGenerationDoc: FirebaseFirestore.DocumentSnapshot =
            await transaction.get(walletGenerationDocRef);
          if (walletGenerationDoc.exists) {
            console.log(
              'walletGenerationDoc fetched:',
              walletGenerationDoc.data(),
            );
            const generatedCount = walletGenerationDoc.data()?.generatedCount;
            const derivativePath = this.generateDerivativePath(generatedCount);
            console.log(
              'generated derivation path for new wallet:',
              derivativePath,
            );
            const mnemonic: string =
              process.env[`MNEMONIC_${mnemonicId}`] ?? '';
            const newWallet = Wallet.fromMnemonic(mnemonic, derivativePath);
            transaction.update(walletGenerationDocRef, {
              generatedCount: FieldValue.increment(1),
              currentIndex: FieldValue.increment(1),
            });
            console.log('New wallet address created:', newWallet.address);
            return newWallet;
          } else {
            return await Promise.reject(
              'The wallet generation doc does not exist',
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    );
  }

  async findOrCreatePogProfile(data: PogProfileParams) {
    let emailHash;
    let pogProfileFromUserId;
    let pogProfileFromEmailHash;
    let pogProfileFromWalletAddress;
    let pogProfile;

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
        console.log('Profile not found from UserId:', userId);
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

    switch (true) {
      // if userId was provided in request, and profiles were found from email and doGooder match
      // check if the userId from profiles returned matches the userId provided
      case !!pogProfileFromEmailHash &&
        !!pogProfileFromWalletAddress &&
        !!userId:
        if (
          pogProfileFromEmailHash?.userId === userId &&
          pogProfileFromWalletAddress?.userId === userId
        ) {
          pogProfile = pogProfileFromEmailHash;
        }
        break;
      // if profiles were returned from email and doGooder, check the profile userIds match
      case !!pogProfileFromEmailHash && !!pogProfileFromWalletAddress:
        if (
          pogProfileFromEmailHash?.userId ===
          pogProfileFromWalletAddress?.userId
        ) {
          pogProfile = pogProfileFromEmailHash;
        }
        break;
      // if userId and email is provided, check the userId returned from email matches
      case !!pogProfileFromEmailHash && !!userId:
        if (pogProfileFromEmailHash?.userId === userId) {
          pogProfile = pogProfileFromEmailHash;
        }
        break;
      // if userId and doGooder is provided, check the userId returned from doGooder matches
      case !!pogProfileFromWalletAddress && !!userId:
        if (pogProfileFromWalletAddress?.userId === userId) {
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

    // if profile was found, return it along with doGooder wallet provided, or pull the first wallet associated to the profile
    if (pogProfile?.userId) {
      if (doGooder && !pogProfileFromWalletAddress) {
        await this.addWalletAddressToProfile(pogProfile.userId, doGooder);
        Object.assign(pogProfile, {doGooder});
      } else if (pogProfile.walletAddresses?.length) {
        Object.assign(pogProfile, {doGooder: pogProfile.walletAddresses[0]});
      }
      return pogProfile;
    } else {
      console.log(
        'No profile found matching data entered, generating new profile',
      );

      const pogProfileParams: Partial<PogProfile> = {
        created: Timestamp.now().toMillis(),
      };

      // if email is provided, use emailHash
      if (emailHash) {
        Object.assign(pogProfileParams, {emailHash, email});
      }

      // create the new pog profile doc in firestore
      const createdPogProfile = await this.createPogProfile(pogProfileParams);

      return createdPogProfile;
    }
  }
}
