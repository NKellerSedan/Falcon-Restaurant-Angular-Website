import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IFaq {
  faq_id: string,
  question: string,
  answer: string
};

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  url: string = "https://shielded-depths-40144.herokuapp.com/faq";

  constructor(private http: HttpClient) { }

  getFaq(): Observable<IFaq[]>{
    return this.http.get<IFaq[]>(this.url);
  }
}
