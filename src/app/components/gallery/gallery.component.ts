import { Component, OnInit } from '@angular/core';
import { GalleryService, IGallery } from 'src/app/Services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: IGallery[] = [];

  constructor(private myGalleryService: GalleryService) { }

  chefs = 'These are our chefs that prepare our delicious menu!';
  kitchen = 'A view of our spacious kitchen our chefs use to prepare your meal!';
  patio = 'Ask about dining on our beautiful outdoor patio!';
  customerService = 'Our staff are always delivering excellent service to all tables directly!';


  ngOnInit(): void {
      this.myGalleryService.getGallery().subscribe((data) => {
        this.gallery = data;
      });
    }

}
