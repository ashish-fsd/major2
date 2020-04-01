import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class IssuedCertificatesService {

  constructor(private firestore: AngularFirestore, private afStorage: AngularFireStorage) { }

  getIssuedplants() {
    return this.firestore.collection('issuedPlants')
  }

  createCertificate(data) {
    return this.firestore.collection('issuedPlants').doc(data.id).set(data);
  }
}
