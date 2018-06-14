import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NesNotificationService} from '../../service/nes-notification.service';
import {NesPermissionCheckService} from '../../service/permission/nes-permission-check.service';
import {NesButtonComponent} from './nes-button/nes-button/nes-button.component';

@Component({
  selector: 'app-nes-workflwo-steps',
  templateUrl: './nes-workflwo-steps.component.html',
  styleUrls: ['./nes-workflwo-steps.component.css']
})
export class NesWorkflwoStepsComponent implements OnInit {
  count = -1;
  index = '下单';
  // Where to insert the cloned content
  @ViewChild('targetDiv', {read: ViewContainerRef}) container;

  constructor(private notification: NesNotificationService, public permissionCheck: NesPermissionCheckService,
              private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  nzStepClick(event) {
    console.log(event);
  }

  createBasicNotification(event) {
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

  cloneDiv() {
    const factory = this.resolver.resolveComponentFactory(NesButtonComponent);
    this.container.createComponent(factory);
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
