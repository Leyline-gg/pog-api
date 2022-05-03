import {
  AuthenticationBindings,
  AuthenticationComponent,
} from '@loopback/authentication';
import {BootMixin} from '@loopback/boot';
import {addExtension, ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {AuthenticationSequence} from './authentication.sequence';
import {OracleProfileFactory} from './models/oracleprofile.factory';
import {PassportBearerAuthProvider} from './providers/passport-bearer-auth.provider';
import {VerifyFunctionProvider} from './providers/verifyFn.provider';

export {ApplicationConfig};

export class PogApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(AuthenticationSequence);

    // implement API authentication
    this.component(AuthenticationComponent);
    this.bind('authentication.bearer.verify').toProvider(
      VerifyFunctionProvider,
    );
    this.bind('authentication.userProfileFactory').to(OracleProfileFactory);
    addExtension(
      this,
      AuthenticationBindings.AUTHENTICATION_STRATEGY_EXTENSION_POINT_NAME,
      PassportBearerAuthProvider,
      {
        namespace:
          AuthenticationBindings.AUTHENTICATION_STRATEGY_EXTENSION_POINT_NAME,
      },
    );

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
