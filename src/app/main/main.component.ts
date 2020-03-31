import { Component, OnInit } from '@angular/core';
import { ConnectorService } from 'src/app/connector.service';
import { Policy } from 'src/app/policy.model';
import { AuthService } from '../auth.service'
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  policies: Policy[];
  IssueForm: FormGroup;
  constructor(private policyService: ConnectorService,private authService : AuthService,private afStorage : AngularFireStorage,private activatedRoute: ActivatedRoute,private fb: FormBuilder) { }
  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.policies = data.data;
    });
    this.IssueForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });
  }

  get f() {
    return this.IssueForm.controls;
  }

  create(policy: Policy){
      this.policyService.createPolicy(policy);
  }

  update(policy: Policy) {
    this.policyService.updatePolicy(policy);
  }

  delete(id: string) {
    this.policyService.deletePolicy(id);
  }
 
  onIssue(plant){
    console.log(plant)
  }
}
