webpackJsonp([4],{

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile__ = __webpack_require__(563);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyProfilePageModule = (function () {
    function MyProfilePageModule() {
    }
    MyProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */]),
            ],
        })
    ], MyProfilePageModule);
    return MyProfilePageModule;
}());

//# sourceMappingURL=my-profile.module.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
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
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyProfilePage = (function () {
    function MyProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userLogo = 'data:image/png;base64,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';
    }
    MyProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyProfilePage');
    };
    MyProfilePage.prototype.goToDashboard = function () {
        this.navCtrl.setRoot('DashboardPage');
    };
    MyProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-profile',template:/*ion-inline-start:"/home/nitish/physiotherapy/src/pages/my-profile/my-profile.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-icon name="arrow-round-back" (click)="goToDashboard()" style="margin-right: 10px;"></ion-icon>\n      Physio Plus Tech\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item> User Profile</ion-item>\n  <ion-card>\n    <img [src]="userLogo" height="179" style="margin: auto;width: 70%;"/>\n    <ion-card-content>\n      <ion-card-title>\n        Demo User\n      </ion-card-title>\n      <p>\n        Male\n      </p>\n    </ion-card-content>\n      <ion-grid>\n        <button ion-button>Edit Profile</button>\n      </ion-grid>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/nitish/physiotherapy/src/pages/my-profile/my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], MyProfilePage);
    return MyProfilePage;
    var _a, _b;
}());

//# sourceMappingURL=my-profile.js.map

/***/ })

});
//# sourceMappingURL=4.js.map