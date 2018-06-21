import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NesNotificationService} from '../../service/nes-notification.service';
import {NesAuthService} from '../../service/auth/nes-auth.service';

@Component({
  selector: 'app-nes-horizontal-menu',
  templateUrl: './nes-horizontal-menu.component.html',
  styleUrls: ['./nes-horizontal-menu.component.css']
})
export class NesHorizontalMenuComponent implements OnInit, AfterViewInit {
  menu = [{
    name: '通讯录管理',
    class: 'anticon anticon-mobile',
    url: 'addressList'
  }, {
    name: '应用管理',
    class: 'anticon anticon-appstore',
    url: 'appStore'
  }, {
    name: '素材管理',
    class: 'anticon anticon-cloud-upload-o',
    url: 'material'
  }, {
    name: '接口管理',
    class: 'anticon anticon-laptop',
    url: 'interface'
  }, {
    name: '文档管理',
    class: 'anticon anticon-folder',
    url: 'document'
  }, {
    name: 'XX地铁接口文档',
    class: 'anticon anticon-book',
    url: 'metroLineDoc'
  }];

  userInfo = {username: 'M'};
  color = '#f56a00';

  constructor(private router: Router, private nesNotification: NesNotificationService, private nesAuth: NesAuthService) {
  }

  ngOnInit() {
  }

  toggle(item: any) {
    console.log(item);
    this.router.navigate(['/emcs/' + item.url]);
  }

  ngAfterViewInit(): void {
    if (this.menu.length > 0) {
      // this.toggle(this.menu[0]);
    }
  }

  logout() {
    this.nesAuth.changLoggingStatus(false);
    localStorage.removeItem('logging');
    this.router.navigate(['/login']);
  }
}
