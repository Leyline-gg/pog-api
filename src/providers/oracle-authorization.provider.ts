import {
  AuthorizationContext,
  AuthorizationDecision,
  AuthorizationMetadata,
  Authorizer,
} from '@loopback/authorization';
import {Provider} from '@loopback/core';
import {RequestContext} from '@loopback/rest';
import {Request} from 'express';
import {GoodOracle} from '../models';

interface AuthorizationCheckParams {
  request: Request;
  context: AuthorizationContext;
  oracle: GoodOracle;
}

// Class level authorizer
export class OracleAuthorizationProvider implements Provider<Authorizer> {
  constructor() {}

  value(): Authorizer {
    return this.authorize.bind(this);
  }

  #authorizationChecksByResource: {
    [resource: string]: (
      params: AuthorizationCheckParams,
    ) => AuthorizationDecision;
  } = {
    oracle: ({
      request,
      context,
      oracle,
    }: AuthorizationCheckParams): AuthorizationDecision => {
      const rules: {[method: string]: () => AuthorizationDecision | undefined} =
        {
          POST: () => {
            if (request.body?.id !== oracle.id)
              return AuthorizationDecision.DENY;
          },
          PUT: () => {
            if (context.invocationContext.args[0] !== oracle.id)
              return AuthorizationDecision.DENY;
          },
        };
      return rules[request.method]() ?? AuthorizationDecision.ALLOW;
    },
  };

  async authorize(
    context: AuthorizationContext,
    metadata: AuthorizationMetadata,
  ): Promise<AuthorizationDecision> {
    const oracle = context.principals[0] as GoodOracle;

    if (oracle === undefined) return AuthorizationDecision.ABSTAIN;
    // SYSTEM account
    if (oracle.id === 1) return AuthorizationDecision.ALLOW;

    const resource = metadata.resource;
    if (!resource) {
      throw new Error(
        'Please provide an authorization resource in the @authorize annotation',
      );
    }

    const {request}: {request: Request} = context.invocationContext
      .parent as RequestContext;

    const authCheck =
      this.#authorizationChecksByResource[resource] ??
      (() => AuthorizationDecision.ABSTAIN);
    return authCheck({request, context, oracle});
  }
}
