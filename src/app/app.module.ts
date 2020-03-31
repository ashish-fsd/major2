import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeLeftComponent } from './home-left/home-left.component';
import { HomeRightComponent } from './home-right/home-right.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CerticateComponent } from './certicate/certicate.component';
import { MainComponent } from './main/main.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { ResolvemainService } from './resolvemain.service';
import { MainwindowComponent } from './mainwindow/mainwindow.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "main",
    component: MainwindowComponent,
    resolve : { data: ResolvemainService }
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeLeftComponent,
    HomeRightComponent,
    CerticateComponent,
    MainComponent,
    HomeComponent,
    MainwindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFirestore,AuthService,AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
