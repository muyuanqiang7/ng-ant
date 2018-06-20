import {AfterViewInit, Component, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-menu-inline',
  templateUrl: './app-menu-inline.component.html',
  styleUrls: ['./app-menu-inline.component.css']
})
export class AppMenuInlineComponent implements OnInit, AfterViewInit {

  isCollapsed = false;
  nzClick = new EventEmitter();
  menu = [{
    name: '用户管理',
    class: 'anticon anticon-user',
    open: true,
    children: [{name: '用户管理', url: '/app'}, {name: '角色管理', url: '/index'}, {name: '权限管理', url: '/steps'}]
  }, {
    name: '系统参数设置',
    open: false,
    class: 'anticon anticon-laptop',
    children: [{name: '参数配置', url: '/dataTable'}, {name: '系统日志', url: '/app'}, {name: '系统消息', url: '/dashboard'}]
  }, {
    name: '交易产权与登记',
    open: false,
    class: 'anticon anticon-notification',
    children: [{name: '登记受理', url: '/dashboard'}, {name: '代办件', url: '/app'}, {name: '以办件', url: '/dashboard'}]
  }, {
    name: '不动产登记',
    open: false,
    class: 'anticon anticon-mail',
    children: [{name: '登记受理', url: '/dashboard'}, {name: '代办件', url: '/app'}, {name: '以办件', url: '/dashboard'}]
  }, {
    name: '网签系统',
    open: false,
    class: 'anticon anticon-appstore',
    children: [{name: '登记受理', url: '/dashboard'}, {name: '代办件', url: '/app'}, {name: '以办件', url: '/dashboard'}]
  }];
  add: (x: number, y: number) => number = function (x, y) {
    return x + y;
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.nzClick.subscribe((item: any) => console.log(item));
  }

  ngAfterViewInit(): void {
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  nzItemDirect(item) {
    // typeof add
    this.nzClick.emit('bitch click');
  }


  nzItemClick(item) {
    if (item.url) {
      this.toggle(item);
    }
  }

  toggle(item) {
    if (!item.url.startsWith('/')) {
      item.url = '/' + item.url;
    }
    this.router.navigate(['/emcs/application' + item.url]);

  }

  openHandler(item: any): void {
    item.open = !item.open;
    this.menu.forEach(entry => {
      if (entry.name !== item.name) {
        entry.open = false;
      }
    });
    console.log(item);
    console.log(this.menu);
  }
}
