import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certicate',
  templateUrl: './certicate.component.html',
  styleUrls: ['./certicate.component.css']
})
export class CerticateComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  info : any
  myname : string = "Ashish Kumar Bansal"
  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.info = data.data;
      console.log(this.info)
    });
  }

public convetToPDF()
{
var data = document.getElementById('contentToConvert');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('l', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('new-file.pdf'); // Generated PDF
});
}

}
