import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loading = true;

  antButtonClick(event) {
    this.loading = !this.loading;
    console.log(event);
  }
}

