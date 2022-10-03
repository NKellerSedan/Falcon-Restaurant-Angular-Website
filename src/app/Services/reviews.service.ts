import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

export interface IReviews {
  name: string;
  rating: string;
  review: string;
};

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  reviews: IReviews[] = [];
  url: string = "https://shielded-depths-40144.herokuapp.com/reviews";




  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };


  getReviews(): Observable<IReviews[]> {
    return this.http.get<IReviews[]>(this.url);
  }

  addReview(data: NgForm): Observable<IReviews> {
    const params = new HttpParams()
      .set('name', data.value.name)
      .set('rating', data.value.rating)
      .set('review', data.value.review);

    console.log(params);

    console.log("name: " + data.value.name);
    console.log("rating: " + data.value.rating);
    console.log("review: " + data.value.review);

    return this.http.post<IReviews>(this.url, params, this.httpOptions);
  }
}