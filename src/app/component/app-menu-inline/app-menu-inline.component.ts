import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-menu-inline',
  templateUrl: './app-menu-inline.component.html',
  styleUrls: ['./app-menu-inline.component.css']
})
export class AppMenuInlineComponent implements OnInit {
  isCollapsed = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

}
