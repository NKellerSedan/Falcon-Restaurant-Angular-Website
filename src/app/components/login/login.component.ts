import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl<string | null>('', Validators.required),
    password: new FormControl<string | null>('', Validators.required),
  });



  onSubmit() {
    this.authService
      .login(this.loginForm.value.email!, this.loginForm.value.password!)
      .subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('email', this.loginForm.value.email!);
          //localStorage.setItem('authtoken', res.token);
          this.router.navigateByUrl('/');
        },
        error: (e) => {
          console.log(e);
          this.errorMessage = e.error.errors;
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

}
