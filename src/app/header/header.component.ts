import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService,public  router:  Router) { }
  username : string
  ngOnInit() {
    if(localStorage.getItem("username")){
      this.username = localStorage.getItem("username")
    }
  }
  onlogout(){
    this.router.navigate(['']);
    this.authService.logout();
  }

}
