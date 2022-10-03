import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

export interface IOrder {
  email: string;
  name: string;
  phone: string;
  cart: string;
  total: string;
  date: string;
}
@Injectable({
  providedIn: 'root',
})

export class OrderService {
  email = localStorage.getItem('email');
  url: string = `https://shielded-depths-40144.herokuapp.com/orders/${this.email}`;
  urlPost: string = 'https://shielded-depths-40144.herokuapp.com/orders';
  current: Date = new Date();
  date: string = `${this.current.getMonth() + 1}/${this.current.getDate()}/${this.current.getFullYear()}`;
  constructor(private http: HttpClient) { }

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.url);
  }

  addOrder(name: string, phone: string, cart: string, total: string): Observable<IOrder> {
    return this.http.post<IOrder>(this.urlPost, {
      email: this.email,
      name: name,
      phone: phone,
      cart: cart,
      total: total,
      date: this.date
    });
  }
}
