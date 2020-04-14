import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-right',
  templateUrl: './home-right.component.html',
  styleUrls: ['./home-right.component.css']
})
export class HomeRightComponent implements OnInit {
  loginform: FormGroup;
  error: any;
  constructor(private fb: FormBuilder,private authService : AuthService,public  router:  Router) {
    
   }

  ngOnInit() {
    this.loginform = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.pattern(/\d/)]]
    });
  }

  get f() {
    return this.loginform.controls;
  }

  onSubmit(){
    if (this.loginform.invalid) {
      console.log("me")
      return;
    } else {
      const username = this.loginform.controls.username.value;
      const password = this.loginform.controls.password.value;
      this.authService.login(username,password).then(value => {
        console.log(value.user.uid)
        localStorage.setItem('uid', value.user.uid);
        this.router.navigate(['main']);
      })
      .catch(err => {
        this.error = err.message;
      });
    }

}
}
