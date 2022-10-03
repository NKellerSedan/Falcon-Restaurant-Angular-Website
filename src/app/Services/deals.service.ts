import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IDeals {
  _id: string;
  image_id: string;
  image: string;
};

@Injectable({
  providedIn: 'root'
})
export class DealsService {
  url: string = "https://shielded-depths-40144.herokuapp.com/images";
  constructor(private http: HttpClient) { }

  getGallery() : Observable<IDeals[]>{
    return this.http.get<IDeals[]>(this.url);
  }
}
