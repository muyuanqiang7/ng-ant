import {Injectable} from '@angular/core';

@Injectable()
export class NesAuthService {

  logging = false;

  constructor() {
  }

  isLogging(): boolean {
    return this.logging;
  }

  changLogginStatus() {
    this.logging = !this.logging;
  }
}
