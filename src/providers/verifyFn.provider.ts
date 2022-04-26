import {Provider} from '@loopback/core';
import {repository} from '@loopback/repository';
import {VerifyFunction} from 'passport-http-bearer';
import {GoodOracleRepository} from '../repositories';

export class VerifyFunctionProvider implements Provider<VerifyFunction> {
  constructor(
    @repository(GoodOracleRepository)
    private goodOracleRepository: GoodOracleRepository,
  ) {}

  value(): VerifyFunction {
    const self = this;

    return async function (token: string, cb: Function) {
      console.log('in value! token:', token);
      //let oracle: GoodOracle;

      cb(null, await self.goodOracleRepository.findById(Number(token)));
      /*

      try {
        //find user with specific username
        const users: MyUser[] = await myThis.userRepo.find({
          where: {username: token},
        });

        // if no user found with this username, throw an error.
        if (users.length < 1) {
          let error = new Error(INVALID_USER_CREDENTIALS_MESSAGE); //assign 401 in sequence
          throw error;
        }

        //verify given password matches the user's password
        oracle = users[0];
        if (oracle.password !== password) {
          let error = new Error(INVALID_USER_CREDENTIALS_MESSAGE); //assign 401 in sequence
          throw error;
        }

        //return null for error, and the valid user
        cb(null, oracle);
      } catch (error) {
        //return the error, and null for the user
        cb(error, null);
      }
      */
    };
  }
}
