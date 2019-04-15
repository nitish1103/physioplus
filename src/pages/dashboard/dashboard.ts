import {Component, OnDestroy} from '@angular/core';
import {App, IonicPage, NavController, NavParams, PopoverController, ToastController} from 'ionic-angular';
import {HcService} from "../../shared/HcService";
import {isUndefined} from "ionic-angular/util/util";
import 'rxjs/add/operator/takeUntil';
import {Subscription} from "rxjs/Subscription";
import {MultiViewControlService} from "../../shared/MultiViewControlService";
import {ProductDetailPage} from "../product-detail/product-detail";
import {WebAuthService} from "../../shared/web.auth.service";
import {NativeAuthService} from "../../shared/native.auth.service";

@IonicPage({name : 'DashboardPage'})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage{

  productImage:string = '../../assets/imgs/notfound.png';
  sliderImage:string = '../../assets/imgs/sliderimage';
  cakeImage:string = '../../assets/imgs/cakedemo.jpeg';
  flowerImage:string = '../../assets/imgs/banner-2.png';
  giftImage:string = '../../assets/imgs/slider.jpg';

  selectedFacility : string = '';
  facilityList : Array<Object> = [];
  subscriptions = new Subscription();
  userData : any = '';
  inventoryList : Array<Object> = [];
  showSearchSpinner: boolean = false;
  keywordText: string;
  paramsData : Object = {};
  paramsDataAvailable : boolean;
  companyLogo: string;


  constructor(public navCtrl: NavController, public app: App, public navParams: NavParams, private hcService : HcService, private popOverCtrl: PopoverController, private navProxy: MultiViewControlService, private toastCtrl: ToastController) {
    this.companyLogo =  'assets/imgs/physiologo.jpeg';
  }

  ionViewDidLoad(){
    localStorage.setItem('selectedFacility', this.selectedFacility);
    if (localStorage.getItem('profile') != null) {
      this.userData = JSON.parse(localStorage.getItem('profile'));
      this.facilityList = JSON.parse(localStorage.getItem('profile')).facilities;
      if (this.facilityList.length){
        this.getSelectedFacility();
        localStorage.setItem('selectedFacility', JSON.stringify(this.facilityList[0]));
      }
    }
    if (localStorage.getItem('inventoryItems') != null) {
      this.inventoryList = JSON.parse(localStorage.getItem('inventoryItems'));
    }
  }

  importInventory(){
    this.hcService.importInventoryCount(localStorage.getItem('baseUrl'), {
        facilityId : this.facilityList[0]['facilityId'],
        inventoryCountRegister : this.inventoryList
      }).subscribe((result) => {
      this.showToast('Imported Successfully', 'success-toast');
       localStorage.removeItem('inventoryItems');
      this.app.getRootNav().setRoot('DashboardPage');
      }, (error) => {
      this.showToast(error.error._ERROR_MESSAGE_, 'success-toast');
        console.log('-----------------', error);
      });
  }


  getSelectedFacility(){
    if (this.facilityList.length >= 1){
      if (isUndefined(localStorage.getItem('selectedFacility')) || localStorage.getItem('selectedFacility') == null){
        this.selectedFacility = this.facilityList[0]['facilityId'];
      }else {
        this.selectedFacility = localStorage.getItem('selectedFacility');
      }
    }
  }

  logout() {
    localStorage.clear();
    this.navCtrl.setRoot('LoginPage');
  }

  addCount() {
    this.navCtrl.push('ProductDetailPage');
  }


  deleteItem(item) {
    console.log(item);
    let inventoryItems = JSON.parse(localStorage.getItem('inventoryItems'));
    inventoryItems = inventoryItems.filter(inventory => (inventory.skuId != item.sku && inventory.quantity != item.quantity && inventory.locationId != item.location));
    localStorage.setItem('inventoryItems', JSON.stringify(inventoryItems));
    this.ionViewDidLoad();
  }


  ionViewWillUnload(){
    this.subscriptions.unsubscribe();
  }

  goToPatientListPage() {
    this.navCtrl.setRoot('PatientListPage')
  }
  goToEventListPage() {
    this.navCtrl.setRoot('EventListPage');
  }
  goToExpensePage() {
    this.navCtrl.setRoot('ExpensePage');
  }
  goToAppointmentPage() {
    this.navCtrl.setRoot('AppointmentPage');
  }
  goToOfficesPage() {
    this.navCtrl.setRoot('OfficesPage');
  }
  goToForumPage() {
    this.navCtrl.setRoot('ForumPage');
  }
  goToDailyRegisterPage() {
    this.navCtrl.setRoot('DailyRegisterPage');
  }
  goToMyProfilePage() {
    this.navCtrl.setRoot('MyProfilePage');
  }

  showToast(message, cssClass) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      cssClass: cssClass,
    });
    toast.present();
  }

  login() {
    this.navCtrl.setRoot('LoginPage');
  }

}
