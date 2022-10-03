import { Component, OnInit } from '@angular/core';
import { AboutService, IAbout } from 'src/app/Services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: IAbout[] =[];

  constructor(private myAboutService: AboutService) { }

  ngOnInit(): void {
    this.myAboutService.getAbout().subscribe((data) => {
      this.about = data;
    })
  }

}
