import {Injectable} from '@angular/core';

@Injectable()
export class NesAuthService {

  logging = JSON.parse(localStorage.getItem('logging') || 'false');

  constructor() {
  }

  isLogging(): boolean {
    console.log(this.logging);
    return this.logging;
  }

  changLoggingStatus(remember: boolean) {
    this.logging = !this.logging;
    if (remember) {
      localStorage.setItem('logging', this.logging.toString());
    }
  }
}
