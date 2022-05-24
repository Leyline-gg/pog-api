import {ApplicationConfig} from '@loopback/core';
import {OpenApiSpec} from '@loopback/rest';
import {PogApiApplication} from './application';

export const spec: OpenApiSpec = {
  openapi: '3.0.0',
  info: {
    title: 'pog-api',
    version: '0.0.1',
    description:
      'API for the Proof Of Good interactions with the backend and the blockchain',
    contact: {
      name: 'Kharaone',
      email: 'kharaone@gmail.com',
    },
  },
  paths: {},
  components: {
    securitySchemes: {
      pog_api_key: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'Bearer',
        in: 'header',
      },
    },
  },
};

/**
 * Export the OpenAPI spec from the application
 */
async function exportOpenApiSpec(): Promise<void> {
  const config: ApplicationConfig = {
    rest: {
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST ?? 'localhost',
    },
  };

  const outFile = process.argv[2] ?? '';
  const app = new PogApiApplication(config);
  app.api(spec);
  await app.boot();
  await app.exportOpenApiSpec(outFile);
}
if (require.main === module) {
  exportOpenApiSpec().catch(err => {
    console.error('Fail to export OpenAPI spec from the application.', err);
    process.exit(1);
  });
}
