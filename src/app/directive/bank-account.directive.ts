import {Directive, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[appBankAccount]',
})
export class BankAccountDirective {
  @Output() everySecond = new EventEmitter();
  @Output() five5Secs = new EventEmitter();

  constructor() {
    setInterval(() => this.everySecond.emit('event'), 1000);
    setInterval(() => this.five5Secs.emit('event'), 5000);
  }

}
