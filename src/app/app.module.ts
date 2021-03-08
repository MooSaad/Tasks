import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAIu58En-r0VJ3or5KqiJMngP9RnkTaBN4",
  authDomain: "tasks-1cd6a.firebaseapp.com",
  databaseURL: "https://tasks-1cd6a-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "tasks-1cd6a",
  storageBucket: "tasks-1cd6a.appspot.com",
  messagingSenderId: "564505707032",
  appId: "1:564505707032:web:162e84bfdadc4f4f81b96d",
  measurementId: "G-7P1M3C20W0"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFireDatabaseModule, AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
