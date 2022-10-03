import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';


export interface IAuth {
  token: string;
}

export interface ITodo {
  email: string;
  password: string;

}



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private decodeddata = {
    user: {
      email: "",
      accountType: ""
    }
  }

  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  //isLoggedIn$ = this._isLoggedIn$.asObservable();

  //isLoggedIn = new BehaviorSubject(false)

  public _isAdminLoggedIn$ = new BehaviorSubject<boolean>(false);
 // isAdminLoggedIn$ = this._isAdminLoggedIn$.asObservable();
 //isAdminLoggedIn = new BehaviorSubject(false)




  private urlForLogin: string = 'https://shielded-depths-40144.herokuapp.com/login';

  private urlForSignUp: string =  'https://shielded-depths-40144.herokuapp.com/registration'



  constructor(private http: HttpClient) {
    const mytoken = localStorage.getItem('authtoken');
    this._isLoggedIn$.next(!!mytoken);

    
   }

   getUserLogIn(){

    //let u = false
    this._isLoggedIn$.subscribe(data =>{
      return data
    })

   }

   login(email: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.urlForLogin, {
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem('authToken', response.token);
          this.decodeddata = jwt_decode(response.token)
          let accountType = this.decodeddata.user.accountType
          if (accountType === 'admin') {
            console.log("account is admin")
            this._isAdminLoggedIn$.next(true)
      
          }



          console.log(jwt_decode(response.token))
        })
      );
  }

  signUp(name:string,email: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.urlForSignUp, {
        name: name,
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem('authToken', response.token);
        })
      );
  }


  logOut(){
    this._isAdminLoggedIn$.next(false)
    this._isLoggedIn$.next(false);
    //localStorage.setItem('authToken', '');
    localStorage.removeItem('authToken')

  }


}
