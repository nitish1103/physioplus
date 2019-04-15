webpackJsonp([11],{

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientPageModule", function() { return AddPatientPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_patient__ = __webpack_require__(554);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPatientPageModule = (function () {
    function AddPatientPageModule() {
    }
    AddPatientPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_patient__["a" /* AddPatientPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_patient__["a" /* AddPatientPage */]),
            ],
        })
    ], AddPatientPageModule);
    return AddPatientPageModule;
}());

//# sourceMappingURL=add-patient.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPatientPage; });
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
 * Generated class for the AddPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPatientPage = (function () {
    function AddPatientPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddPatientPage.prototype.goToPatient = function () {
        this.navCtrl.setRoot('PatientListPage');
    };
    AddPatientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPatientPage');
    };
    AddPatientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-patient',template:/*ion-inline-start:"/home/nitish/physiotherapy/src/pages/add-patient/add-patient.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-icon name="arrow-round-back" (click)="goToPatient()" style="margin-right: 10px;"></ion-icon>\n      Physio Plus Tech\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <form>\n      <div class="form-group">\n        <input type="email" class="form-control"  placeholder="Full Name" autocomplete="off" autofocus="off">\n      </div>\n      <div class="form-group">\n        <input type="password" class="form-control" placeholder="Mobile" autocomplete="off" autofocus="off">\n      </div>\n      <div class="form-group">\n        <input type="password" class="form-control" placeholder="Email" autocomplete="off" autofocus="off">\n      </div>\n      <div class="form-group" style="margin: 17px;">\n        <input type="radio"> Male\n        <input type="radio"> Female\n      </div>\n      <div class="form-group" style="margin: 17px;">\n        <input type="radio"> Clinic Visit\n        <input type="radio"> Home Visit\n      </div>\n    </form>\n    <ion-grid>\n      <button ion-button color="dark" round style="height: 45px;">Register</button>\n    </ion-grid>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/nitish/physiotherapy/src/pages/add-patient/add-patient.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddPatientPage);
    return AddPatientPage;
}());

//# sourceMappingURL=add-patient.js.map

/***/ })

});
//# sourceMappingURL=11.js.map