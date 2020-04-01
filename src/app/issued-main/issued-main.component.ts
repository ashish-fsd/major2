import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issued-main',
  templateUrl: './issued-main.component.html',
  styleUrls: ['./issued-main.component.css']
})
export class IssuedMainComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  issuedData : any = []

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.issuedData = data.data;
      console.log(data)
    });
  }

}
