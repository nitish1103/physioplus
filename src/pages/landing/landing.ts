import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DashboardPage} from "../dashboard/dashboard";

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'LandingPage'})
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  companyLogo : string;
  doctorLogo: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.companyLogo =  'assets/imgs/physiologo.jpeg';
    this.doctorLogo = 'https://us.123rf.com/450wm/stefanamer/stefanamer1504/stefanamer150400163/39120432-stock-vector-doctor-with-medical-icons-in-a-circle-.jpg?ver=6';
  }

  goToDashboard() {
    this.navCtrl.setRoot(DashboardPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

}
