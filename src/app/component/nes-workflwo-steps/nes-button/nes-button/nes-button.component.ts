import {Component, OnInit} from '@angular/core';
import {NesNotificationService} from '../../../../service/nes-notification.service';

@Component({
  selector: 'app-nes-button',
  templateUrl: './nes-button.component.html',
  styleUrls: ['./nes-button.component.css']
})
export class NesButtonComponent implements OnInit {

  constructor(private notification: NesNotificationService) {
  }

  ngOnInit() {
  }

  createBasicNotification() {
    this.notification.showMessage('请检查您的网络连接');
  }

}
