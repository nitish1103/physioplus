import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PatientlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'PatientListPage'})
@Component({
  selector: 'page-patientlist',
  templateUrl: 'patientlist.html',
})
export class PatientlistPage {
  userLogo : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userLogo = 'http://www.wpseeds.com/wp-user/files/2016/03/user-128.png';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientlistPage');
  }
  goToDashboard() {
    this.navCtrl.setRoot('DashboardPage');
  }
  addPatient() {
    this.navCtrl.setRoot('AddPatientPage');
  }

}
