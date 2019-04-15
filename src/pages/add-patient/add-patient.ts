import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'AddPatientPage'})
@Component({
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html',
})
export class AddPatientPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToPatient() {
    this.navCtrl.setRoot('PatientListPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPatientPage');
  }


}
