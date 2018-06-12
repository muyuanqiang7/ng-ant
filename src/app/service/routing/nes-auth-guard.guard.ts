import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {NesAuthService} from '../auth/nes-auth.service';

@Injectable()
export class NesAuthGuardGuard implements CanActivate {

  constructor(private router: Router, private nesAuth: NesAuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.nesAuth.isLogging()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
