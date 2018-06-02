import { Component } from '@angular/core';
import {User} from "firebase";
import {AuthService} from "../../providers/auth/auth";
import {HomePage} from "../home/home";
import {NavController} from "ionic-angular";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  constructor(private navCtrl: NavController, private authService: AuthService) {
  }

  login() {
    this.authService.signInWithFacebook()
      .then((user: User) => {
        this.navCtrl.setRoot(HomePage);
      });
  }

}
