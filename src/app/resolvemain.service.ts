import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ConnectorService } from './connector.service';
import { AuthService } from './auth.service'
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Policy } from './policy.model';
import { mergeMap, switchMap } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolvemainService implements Resolve<any> {

  constructor(private policyService: ConnectorService,private authService : AuthService,private afStorage : AngularFireStorage) {
    this.policyService.getPolicies().snapshotChanges().subscribe(data => {
      data.forEach(e => {
        let item = e.payload.doc.data() as Policy
        const task = this.afStorage.ref('/' + item.images.im.path.segments[7] + '/' + item.images.im.path.segments[8]).getDownloadURL()
        task.subscribe(url => {
          if (url) {
            item.address = url
          }
        })
        this.policies.push(item)
      })
    })
   }

  policies: Policy[] = []
  downloadURL = [];
  item$;

  resolve() {
    return this.policies
  }
}
