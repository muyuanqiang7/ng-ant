import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  loading = true; // bug
  loadingMore = false;
  showLoadingMore = true;
  data = [];

  constructor(private http: HttpClient, private msg: NzMessageService) {
  }

  ngOnInit(): void {
    this.getData((res: any) => {
      this.data = res.results;
      this.loading = false;
    });
  }

  getData(callback: (res: any) => void): void {
    this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.http.get(fakeDataUrl).subscribe((res: any) => {
      console.log(res);
      this.data = this.data.concat(res.results);
      this.loadingMore = false;
    });
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }

}
