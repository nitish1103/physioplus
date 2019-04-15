webpackJsonp([12],{

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAppointmentPageModule", function() { return AddAppointmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_appointment__ = __webpack_require__(553);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddAppointmentPageModule = (function () {
    function AddAppointmentPageModule() {
    }
    AddAppointmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_appointment__["a" /* AddAppointmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_appointment__["a" /* AddAppointmentPage */]),
            ],
        })
    ], AddAppointmentPageModule);
    return AddAppointmentPageModule;
}());

//# sourceMappingURL=add-appointment.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAppointmentPage; });
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
 * Generated class for the AddAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddAppointmentPage = (function () {
    function AddAppointmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddAppointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddAppointmentPage');
    };
    AddAppointmentPage.prototype.goToAppointmentPage = function () {
        this.navCtrl.setRoot('AppointmentPage');
    };
    AddAppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-appointment',template:/*ion-inline-start:"/home/nitish/physiotherapy/src/pages/add-appointment/add-appointment.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-icon name="arrow-round-back" (click)="goToAppointmentPage()" style="margin-right: 10px;"></ion-icon>\n      Physio Plus Tech\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <form>\n      <div class="form-group">\n        <input type="email" class="form-control"  placeholder="Select Patient" autocomplete="off" autofocus="off">\n      </div>\n      <div class="form-group">\n        <input type="password" class="form-control" placeholder="Date Of Appointment" autocomplete="off" autofocus="off">\n      </div>\n      <div class="form-group">\n        <input type="password" class="form-control" placeholder="Time Of Appointment" autocomplete="off" autofocus="off">\n      </div>\n    </form>\n    <ion-grid>\n      <button ion-button color="dark" round style="height: 45px;">Submit</button>\n    </ion-grid>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/nitish/physiotherapy/src/pages/add-appointment/add-appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddAppointmentPage);
    return AddAppointmentPage;
}());

//# sourceMappingURL=add-appointment.js.map

/***/ })

});
//# sourceMappingURL=12.js.map