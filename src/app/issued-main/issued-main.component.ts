import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { IssuedCertificatesService  } from "../issued-certificates.service";

@Component({
  selector: 'app-issued-main',
  templateUrl: './issued-main.component.html',
  styleUrls: ['./issued-main.component.css']
})
export class IssuedMainComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private connect : ConnectorService,private issuedCetificate : IssuedCertificatesService) { }

  issuedData : any = []

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.issuedData = data.data;
      console.log(data)
    });
  }

  moveBack(data){
    const info = {
      "Name" : data.Name,
      "Location" : data.Location,
      "Latitude" : data.Latitude,
      "Longitude" : data.Longitude,
      "Image" : data.Image
    }
    this.connect.createPlant(info,data.id);
    this.issuedCetificate.deleteCertificate(data.id);
    console.log(info)
  }

}
