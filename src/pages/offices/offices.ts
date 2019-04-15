import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OfficesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'OfficesPage'})
@Component({
  selector: 'page-offices',
  templateUrl: 'offices.html',
})
export class OfficesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficesPage');
  }

  goToDashboard() {
    this.navCtrl.setRoot('DashboardPage');
  }

}
