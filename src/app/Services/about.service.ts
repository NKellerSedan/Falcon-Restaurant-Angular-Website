import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface IAbout {
  title: string;
  name: string;
  image: string;
};

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  url: string = "https://shielded-depths-40144.herokuapp.com/about";

  constructor(private http: HttpClient) {
   }

   getAbout(): Observable<IAbout[]>{
    return this.http.get<IAbout[]>(this.url);
  }

}
