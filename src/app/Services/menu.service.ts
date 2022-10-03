import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MenuType {
  _id: string;
  food_id: string;
  food_name: string;
  price: number;
  description: string;
  category: string;
  active: string;
  image: string;
  quantity: number;
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url: string = "https://shielded-depths-40144.herokuapp.com/foods";
  constructor(private http: HttpClient) { }

  getMenu() : Observable<MenuType[]>{
    return this.http.get<MenuType[]>(this.url);
  }
  
}
