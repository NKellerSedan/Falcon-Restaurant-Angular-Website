import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IGallery {
  _id: string;
  image_id: string;
  image: string;
};

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  url: string = "https://shielded-depths-40144.herokuapp.com/images";
  constructor(private http: HttpClient) { }

  getGallery() : Observable<IGallery[]>{
    return this.http.get<IGallery[]>(this.url);
  }
}
