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

  changLoggingStatus() {
    this.logging = !this.logging;
    localStorage.setItem('logging', this.logging.toString());
  }
}
