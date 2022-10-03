import { Component, OnInit } from '@angular/core';
import { HomeService, IHome } from 'src/app/Services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: IHome[] =[];

  constructor(private myHomeService: HomeService) { }

  ngOnInit(): void {
    this.myHomeService.getHome().subscribe((data) => {
      this.home = data;
    })
  }

}
