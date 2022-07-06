import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'firebase/auth';
import { LoginService } from './services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private loginService:LoginService){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise<boolean>((resolve) => {
      this.loginService.auth.authState.subscribe(user => {
        if (!user) {
          this.router.navigate(["/login"]);
          resolve(false);
        }else{
          localStorage.setItem('brauerei_current_user', JSON.stringify(user));
          user.getIdToken().then(token => {
            localStorage.setItem('brauerei_current_token', token);
          })
          resolve(true);
        }
      });
    });
  }
}
