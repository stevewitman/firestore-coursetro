import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyCQ1s5nFwNQBcehfKL4-17fVRNo-m5ai7s",
  authDomain: "sw-try-firestore.firebaseapp.com",
  databaseURL: "https://sw-try-firestore.firebaseio.com",
  projectId: "sw-try-firestore",
  storageBucket: "",
  messagingSenderId: "244809922621"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
