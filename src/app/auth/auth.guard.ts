import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let isLogged = false
      this.authService._isLoggedIn$.subscribe(data=>{
        isLogged = data
        console.log(data)
      })
      if (!isLogged) {
        //console.log(this.authService.isLoggedIn$)
        this.router.navigateByUrl('/login');
        return false;
      }
  
      return true;

    
  }
  
}
