import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
//import { AngularFireAuthModule } from '@angular/fire/auth';
//import { AngularFireStorageModule } from '@angular/fire/storage';

export const firebaseConfig = {
  apiKey: '****************************************',
  authDomain: 'todolist-*******.firebaseapp.com',
  databaseURL: 'https://todolist-*******.firebaseio.com',
  projectId: 'todolist-*******',
  storageBucket: 'todolist-*******.appspot.com',
  messagingSenderId: '**************',
  appId: '1:**************:web:**************'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    //AngularFireAuthModule,
    //AngularFireStorageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
