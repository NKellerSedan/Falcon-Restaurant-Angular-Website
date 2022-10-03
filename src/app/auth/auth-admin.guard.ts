import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let isAdminLogged = false
      // this.authService.isAdminLoggedIn$.subscribe(data=>{
      //   isAdminLogged = data
      //   console.log(data)
      // })


       this.authService._isAdminLoggedIn$.subscribe(data =>
        isAdminLogged = data
        )

      if (!isAdminLogged) {
        //console.log(this.authService.isLoggedIn$)
        this.router.navigateByUrl('/login');
        return false;
      }
  
      return true;
  }
  
}
