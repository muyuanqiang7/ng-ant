import {EventEmitter, Injectable} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';

@Injectable()
export class NesNotificationService {
  menuEmitter = new EventEmitter();

  constructor(private notification: NzNotificationService) {
    this.notification.config({nzPlacement: 'bottomLeft', nzDuration: 2000, nzPauseOnHover: true});
  }

  showMessage(message: string) {
    this.notification.blank('通知', message);
  }
}
