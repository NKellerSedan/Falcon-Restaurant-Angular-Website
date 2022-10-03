import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  imagePath = '../../../assets/images/logo.png'
  constructor(public aut:AuthService) { }

  ngOnInit(): void {
  }

}
