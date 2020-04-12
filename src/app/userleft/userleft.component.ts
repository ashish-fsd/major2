import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-userleft',
  templateUrl: './userleft.component.html',
  styleUrls: ['./userleft.component.css']
})
export class UserleftComponent implements OnInit {
  mydata : any
  constructor(private activatedRoute: ActivatedRoute,private afStorage : AngularFireStorage,private firestore: AngularFirestore) {
    
   }
  publish : any
  ngOnInit() {
    console.log(this.mydata)
  
  }

}
