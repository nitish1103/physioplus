webpackJsonp([2],{

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientlistPageModule", function() { return PatientlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patientlist__ = __webpack_require__(565);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatientlistPageModule = (function () {
    function PatientlistPageModule() {
    }
    PatientlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patientlist__["a" /* PatientlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patientlist__["a" /* PatientlistPage */]),
            ],
        })
    ], PatientlistPageModule);
    return PatientlistPageModule;
}());

//# sourceMappingURL=patientlist.module.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PatientlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatientlistPage = (function () {
    function PatientlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userLogo = 'http://www.wpseeds.com/wp-user/files/2016/03/user-128.png';
    }
    PatientlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatientlistPage');
    };
    PatientlistPage.prototype.goToDashboard = function () {
        this.navCtrl.setRoot('DashboardPage');
    };
    PatientlistPage.prototype.addPatient = function () {
        this.navCtrl.setRoot('AddPatientPage');
    };
    PatientlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patientlist',template:/*ion-inline-start:"/home/nitish/physiotherapy/src/pages/patientlist/patientlist.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-icon name="arrow-round-back" (click)="goToDashboard()" style="margin-right: 10px;"></ion-icon>\n      Physio Plus Tech\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>\n          <img [src]="userLogo" class="user">\n        </ion-col>\n        <ion-col col-9>\n          <strong>Nitish Mishra</strong>\n          <p>RA1555</p>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>\n          <img [src]="userLogo" class="user">\n        </ion-col>\n        <ion-col col-9>\n          <strong>Rahul Shukla</strong>\n          <p>RA1555</p>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>\n          <img [src]="userLogo" class="user">\n        </ion-col>\n        <ion-col col-9>\n          <strong>Sheetal Ji</strong>\n          <p>RA1555</p>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <button ion-button (click)="addPatient()">ADD PATIENT</button>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/home/nitish/physiotherapy/src/pages/patientlist/patientlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PatientlistPage);
    return PatientlistPage;
}());

//# sourceMappingURL=patientlist.js.map

/***/ })

});
//# sourceMappingURL=2.js.map