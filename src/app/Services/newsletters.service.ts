import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface INewsletter {
  first_name: string,
  email: string
}
@Injectable({
  providedIn: 'root'
})
export class NewslettersService {

  url: string = "https://shielded-depths-40144.herokuapp.com/newsletter"
  constructor(private http : HttpClient) { }

  addSubscriber(firstname: string, email: string):Observable<INewsletter>{
    return this.http.post<INewsletter>(this.url, {
      first_name: firstname,
      email: email
    })
  }
}
