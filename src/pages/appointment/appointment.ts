import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'AppointmentPage'})
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {
  userLogo : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userLogo = 'http://www.wpseeds.com/wp-user/files/2016/03/user-128.png';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }
  goToDashboard() {
    this.navCtrl.setRoot('DashboardPage');
  }
  addAppointment() {
    this.navCtrl.setRoot('AddAppointmentPage');
  }
}
