import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  errorName:string = '';
  errorEmail:string = '';
  errorPassword:string = '';
  errorCPassword:string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUpForm = new FormGroup({
    name: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(3),
      
    ]),
    email: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(3),
      
    ]),
    password: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(3),
      
    ]),
    cpassword: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(3),
      
    ]),
   
  });


  onSubmit() {

    var isFormValid = true
    let name = this.signUpForm.value.name!
    let email = this.signUpForm.value.email!
    let password = this.signUpForm.value.password!
    let cpassword = this.signUpForm.value.cpassword!
    let emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(emailPattern)){
      this.errorEmail = "Please enter email in valid format"
      isFormValid = false
    }else{
      this.errorEmail = ""
    }

    if(password !== cpassword ){
      this.errorPassword = "password does not match!"
      isFormValid = false
    }else{
      this.errorPassword = ""
    }

    if(isFormValid){



    this.authService
      .signUp(this.signUpForm.value.name!,this.signUpForm.value.email!, this.signUpForm.value.password!)
      .subscribe({
        next: (res) => {
          console.log(res);
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

}
