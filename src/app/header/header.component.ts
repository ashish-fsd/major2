import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AuthService} from '../auth.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  constructor(private authService : AuthService,public  router:  Router,public route:ActivatedRoute) { }
  username : string
  @ViewChild('mynav', {static: false}) myRef: ElementRef;
  ngOnInit() {
    if(localStorage.getItem("username")){
      this.username = localStorage.getItem("username")
    }
  }
  ngAfterViewInit(){
    if(this.route.snapshot['_routerState'].url == "/main"){
      this.myRef.nativeElement.children[0].children[0].classList.add("active")
    }
    if(this.route.snapshot['_routerState'].url == "/main/issuedCerificate"){
      this.myRef.nativeElement.children[1].children[0].classList.add("active")
    }
  }
  onlogout(){
    this.router.navigate(['']);
    this.authService.logout();
  }

}
