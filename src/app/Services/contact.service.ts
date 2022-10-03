import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IContact {
  fname: String,
  lname: String,
  email: String,
  subject: String,
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url: string = "https://shielded-depths-40144.herokuapp.com/contact"
  constructor(private http: HttpClient) { }

  sendMessage(details: IContact):Observable<IContact>{
      return this.http.post<IContact>(this.url, {
        fname: details.fname,
        lname: details.lname,
        email: details.email,
        subject: details.subject
      })
  }
}
