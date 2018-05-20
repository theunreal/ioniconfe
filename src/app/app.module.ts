import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import { AuthService } from '../providers/auth/auth';
import {LoginPage} from "../pages/login/login";

const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD4IFY4vZ52tRcNFWV4mgUuVU2wuCqwHFs",
    authDomain: "meetings-df4aa.firebaseapp.com",
    databaseURL: "https://meetings-df4aa.firebaseio.com",
    projectId: "meetings-df4aa",
    storageBucket: "meetings-df4aa.appspot.com",
    messagingSenderId: "657139783347"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
