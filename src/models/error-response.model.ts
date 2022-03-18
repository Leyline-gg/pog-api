import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - ErrorResponse
 * Standard error object to be sent in the HTTP response body
 */
@model({name: 'ErrorResponse'})
export class ErrorResponse {
  constructor(data?: Partial<ErrorResponse>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The HTTP status code for the error
   */
  @property({required: true, jsonSchema: {
  type: 'integer',
  description: 'The HTTP status code for the error',
  minimum: 400,
  maximum: 599,
}})
  status: number;

  /**
   * A brief description of the cause of the error
   */
  @property({required: true, jsonSchema: {
  type: 'string',
  description: 'A brief description of the cause of the error',
}})
  message: string;

}

export interface ErrorResponseRelations {
  // describe navigational properties here
}

export type ErrorResponseWithRelations = ErrorResponse & ErrorResponseRelations;


