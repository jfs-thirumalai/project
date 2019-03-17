import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  invalidLogin = false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) {

  }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
    });
}
 get formControls() {
   return this.loginForm.controls;
 }

login() {
  console.log(this.loginForm.value);
  this.isSubmitted = true;
  if (this.loginForm.invalid) {
    return;
  }
  if (this.authService.login(this.loginForm.value)) {
    this.router.navigateByUrl('/viewAll');
  } else {
    this.invalidLogin = true;
    return;
  }

}

}
