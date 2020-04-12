import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { IssuedCertificatesService} from './issued-certificates.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Policy } from './policy.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersideresolveService implements Resolve<any>{
  issuedPlants: any = [];

  constructor(private issueService: IssuedCertificatesService,private afStorage : AngularFireStorage,private activated : ActivatedRoute,private firestore: AngularFirestore) {
    // const varid = this.activated.params.subscribe(ans=>console.log(ans))
    // console.log(varid)
    // const varId = this.activatedRoute.params.subscribe(id => {
    //   console.log(id)
    // });
    // const id = route.params
    // console.log(id)
    // this.activatedRoute.subscribe(res=> {console.log(res)})
    // this.issueService.getIssuedplants().snapshotChanges().subscribe(data => {
    //   data.forEach(e => {
    //     let item = e.payload.doc.data() as Policy
    //     item.id = e.payload.doc.id
    //     const task = this.afStorage.ref('pictures/' + item.Image).getDownloadURL()
        // task.subscribe(url => {
        //   if (url) {
        //     item.address = url
        //   }
        // })
    //     this.issuedPlants.push(item)
    //   })
    // })
   }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params.id
    var item : any
    // return this.firestore.collection('issuedPlants').doc(id).ref.get().then(doc=>{
    //   item = doc.data()
    //   const task = this.afStorage.ref('pictures/' + item.Image).getDownloadURL()
    //   task.subscribe(url => {
    //     if (url) {
    //       item.address = url;
    //       console.log(item)
    //       return item
    //     }
    //   })
      
    // }).catch(function (error) {
    //   console.log("There was an error getting your document:", error);
    // });

  return this.issueService.getparticularDoc(id)
  }
}
