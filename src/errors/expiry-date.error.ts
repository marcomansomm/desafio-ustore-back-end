import { HttpException, HttpStatus } from '@nestjs/common';

export class ExpiryDate extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
    this.name = 'ExpiryDate';
  }
}
