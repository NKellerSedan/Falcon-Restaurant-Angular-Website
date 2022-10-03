import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  constructor(private aut:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  LogOut(){

    this.aut.logOut()
    this.router.navigateByUrl('/login');

  }

}
