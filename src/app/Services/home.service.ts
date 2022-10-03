import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IHome {
  _id: string;
  image_id: string;
  image: string;
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url: string = "https://shielded-depths-40144.herokuapp.com/images/";
  constructor(private http: HttpClient) { }

  getHome() : Observable<IHome[]>{
    return this.http.get<IHome[]>(this.url);
  }
}