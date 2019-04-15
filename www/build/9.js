webpackJsonp([9],{

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyRegisterPageModule", function() { return DailyRegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daily_register__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DailyRegisterPageModule = (function () {
    function DailyRegisterPageModule() {
    }
    DailyRegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__daily_register__["a" /* DailyRegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__daily_register__["a" /* DailyRegisterPage */]),
            ],
        })
    ], DailyRegisterPageModule);
    return DailyRegisterPageModule;
}());

//# sourceMappingURL=daily-register.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyRegisterPage; });
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
 * Generated class for the DailyRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DailyRegisterPage = (function () {
    function DailyRegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DailyRegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DailyRegisterPage');
    };
    DailyRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-daily-register',template:/*ion-inline-start:"/home/nitish/physiotherapy/src/pages/daily-register/daily-register.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-icon name="arrow-round-back" (click)="goToDashboard()" style="margin-right: 10px;"></ion-icon>\n      Physio Plus Tech\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <img [src]="eventLogo" class="user">\n        </ion-col>\n        <ion-col col-9>\n          <strong>Event Number 1</strong>\n          <p>12/03/2019</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <img [src]="eventLogo" class="user">\n        </ion-col>\n        <ion-col col-9>\n          <strong>Event Number 1</strong>\n          <p>12/03/2019</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <img [src]="eventLogo" class="user">\n        </ion-col>\n        <ion-col col-9>\n          <strong>Event Number 1</strong>\n          <p>12/03/2019</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/nitish/physiotherapy/src/pages/daily-register/daily-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DailyRegisterPage);
    return DailyRegisterPage;
}());

//# sourceMappingURL=daily-register.js.map

/***/ })

});
//# sourceMappingURL=9.js.map