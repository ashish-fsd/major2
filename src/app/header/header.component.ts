import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService,public  router:  Router,public route:ActivatedRoute) { }
  username : string
  ngOnInit() {
    if(localStorage.getItem("username")){
      this.username = localStorage.getItem("username")
    }
    console.log(this.route.snapshot)
  }
  onlogout(){
    this.router.navigate(['']);
    this.authService.logout();
  }

}
