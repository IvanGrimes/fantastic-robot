export class SSRError extends Error {
  statusCode: number;

  constructor({ statusCode }: { statusCode: number }) {
    super('SSR Error');

    this.statusCode = statusCode;
  }
}
