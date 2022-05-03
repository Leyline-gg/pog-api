import {AuthenticateFn, AuthenticationBindings} from '@loopback/authentication';
import {Context, inject} from '@loopback/core';
import {
  FindRoute,
  InvokeMethod,
  InvokeMiddleware,
  ParseParams,
  Reject,
  RequestContext,
  ResolvedRoute,
  RestBindings,
  Send,
  SequenceHandler,
} from '@loopback/rest';
import e from 'express';
import {GoodOracle} from './models';
import AuthError from './providers/auth-error';

const SequenceActions = RestBindings.SequenceActions;

export class AuthenticationSequence implements SequenceHandler {
  /**
   * Optional invoker for registered middleware in a chain.
   * To be injected via SequenceActions.INVOKE_MIDDLEWARE.
   */
  @inject(SequenceActions.INVOKE_MIDDLEWARE, {optional: true})
  protected invokeMiddleware: InvokeMiddleware = () => false;

  constructor(
    @inject(RestBindings.Http.CONTEXT) public ctx: Context,
    @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(SequenceActions.SEND) public send: Send,
    @inject(SequenceActions.REJECT) public reject: Reject,
    @inject(AuthenticationBindings.AUTH_ACTION)
    protected authenticateRequest: AuthenticateFn,
  ) {}

  // extra auth checks per route
  #routeAuthorization = {
    oracle: ({
      request,
      route,
      oracle,
    }: {
      request: e.Request;
      route: ResolvedRoute;
      oracle: GoodOracle;
    }) => {
      //only owners can POST requests
      if (request.method === 'POST' && request.body?.id != oracle.id) {
        throw new AuthError(403);
      }
      //only owners can PUT requests
      if (route.pathParams.id != oracle.id) throw new AuthError(403);

      return;
    },
  };

  async handle(context: RequestContext) {
    try {
      const {request, response} = context;
      const finished = await this.invokeMiddleware(context);
      if (finished) return;

      const next = async () =>
        this.send(
          response,
          await this.invoke(route, await this.parseParams(request, route)),
        );

      const route = this.findRoute(request);

      //@ts-expect-error
      //the GoodOracle attempting to make the request
      const oracle: GoodOracle = await this.authenticateRequest(request);
      // oracle is undefined only when @authenticate.skip() is used
      if (oracle === undefined) return await next();
      // SYSTEM account
      if (oracle.id == 0) return await next();

      //@ts-expect-error
      //Perform additional authorization checks
      const routeAuth = this.#routeAuthorization[route.path.split('/')[1]];
      !!routeAuth &&
        routeAuth({
          request,
          route,
          oracle,
        });

      return next();
    } catch (error) {
      console.error(error.message);
      if (!isNaN(error.message))
        Object.assign(error, {statusCode: error.message});
      this.reject(context, error);
    }
  }
}