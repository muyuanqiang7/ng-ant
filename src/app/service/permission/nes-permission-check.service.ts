import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NesPermissionCheckService {
  data: Array<string> = ['dashboard', ''];

  constructor(private  httpClient: HttpClient) {
  }


  canAccess(resource: string): boolean {
    return this.data.includes(resource);
  }
}
