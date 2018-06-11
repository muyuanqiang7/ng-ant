import {Component, OnInit} from '@angular/core';
import {NesNotificationService} from '../../service/nes-notification.service';
import {NesPermissionCheckService} from '../../service/permission/nes-permission-check.service';

@Component({
  selector: 'app-nes-workflwo-steps',
  templateUrl: './nes-workflwo-steps.component.html',
  styleUrls: ['./nes-workflwo-steps.component.css']
})
export class NesWorkflwoStepsComponent implements OnInit {
  count = -1;
  index = '下单';

  constructor(private notification: NesNotificationService, public permissionCheck: NesPermissionCheckService) {
  }

  ngOnInit() {
  }

  nzStepClick(event) {
    console.log(event);
  }

  createBasicNotification() {
    this.notification.showMessage('请检查您的网络连接');
  }

  previousStep() {
    --this.count;
    this.changaeContent();
  }

  nextStep() {
    ++this.count;
    this.changaeContent();
  }

  changaeContent() {
    switch (this.count) {
      case -1:
        this.index = '下单';
        break;
      case 0:
        this.index = 'First content';
        break;
      case 1:
        this.index = 'Second content';
        break;
      case 2:
        this.index = 'Third content';
        break;
      case 3:
        this.index = 'Fourth content';
        break;
      default:
        this.index = 'error';

    }
  }
}
