import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  constructor(private aut:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  LogOut(){

    this.aut.logOut()
    this.router.navigateByUrl('/login');

  }

}
