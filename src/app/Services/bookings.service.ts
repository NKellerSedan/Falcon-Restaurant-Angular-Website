import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IBooking  {
  date: string,
  time_slot: string,
  name: string,
  email: string,
  phoneno: string,
};
@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http: HttpClient) { }

  url = 'https://shielded-depths-40144.herokuapp.com/bookings';
  getBokingd():Observable<IBooking>{
    return this.http.get<IBooking>(this.url,{ 
})
}

addBooking(booking : IBooking): Observable<IBooking>{
  return this.http.post<IBooking>(this.url,{ 
   date: booking.date,
   time_slot: booking.time_slot,
  name: booking.name,
  email: booking.email,
  phoneno: booking.phoneno,
})
}
}
