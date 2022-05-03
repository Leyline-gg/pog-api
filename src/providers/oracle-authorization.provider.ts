import {
  AuthorizationContext,
  AuthorizationDecision,
  AuthorizationMetadata,
  Authorizer,
} from '@loopback/authorization';
import {Provider} from '@loopback/core';
import e from 'express';
import {GoodOracle} from '../models';

// Class level authorizer
export class OracleAuthorizationProvider implements Provider<Authorizer> {
  constructor() {}

  value(): Authorizer {
    return this.authorize.bind(this);
  }

  // prettier-ignore
  #authorizationChecksByResource = {
    oracle: ({
      request,
      context,
      oracle,
    }: {
      request: e.Request;
      context: AuthorizationContext;
      oracle: GoodOracle;
    }): AuthorizationDecision => {
      //@ts-expect-error
      return ({
        'POST': () => {
          if (request.body?.id != oracle.id) return AuthorizationDecision.DENY;
        },
        'PUT': () => {
          if (context.invocationContext.args[0] != oracle.id) return AuthorizationDecision.DENY;
        },
      })[request.method]() ?? AuthorizationDecision.ALLOW;
    },
  };

  async authorize(
    context: AuthorizationContext,
    metadata: AuthorizationMetadata,
  ): Promise<AuthorizationDecision> {
    const oracle = context.principals[0] as GoodOracle;

    if (oracle === undefined) return AuthorizationDecision.ABSTAIN;
    // SYSTEM account
    if (oracle.id == 0) return AuthorizationDecision.ALLOW;

    //@ts-expect-error
    const {request}: {request: e.Request} = context.invocationContext.parent;

    const resource = metadata.resource;
    if (!resource) {
      throw new Error(
        'Please provide an authorization resource in the @authorize annotation',
      );
    }
    const authCheck =
      //@ts-expect-error I don't feel like typing this
      this.#authorizationChecksByResource[resource] ??
      (() => AuthorizationDecision.ABSTAIN);
    return authCheck({request, context, oracle});
  }
}
