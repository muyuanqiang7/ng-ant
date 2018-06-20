import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nes-horizontal-menu',
  templateUrl: './nes-horizontal-menu.component.html',
  styleUrls: ['./nes-horizontal-menu.component.css']
})
export class NesHorizontalMenuComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  toggle() {
    this.router.navigate(['/emcs/application']);
  }
}
