export default class AuthError extends Error {
  code: number;

  constructor(code: number) {
    super(code.toString());
    this.name = 'AuthError';
    this.code = code;
  }
}
