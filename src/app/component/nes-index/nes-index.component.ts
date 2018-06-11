import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nes-index',
  templateUrl: './nes-index.component.html',
  styleUrls: ['./nes-index.component.css']
})
export class NesIndexComponent implements OnInit {

  data = [
    {color: '#f50', label: '权', data: {name: '所有权'}},
    {color: '#2db7f5', label: '售', data: {name: '销售'}},
    {color: '#87d068', label: '抵', data: {name: '抵押'}},
    {color: '#108ee9', label: '封', data: {name: '查封'}},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  nzClose(event, param) {
    console.log(param);
    console.log(event);
  }

  nzAfterClose() {
    console.log('nzCloseAfter');
  }
}
