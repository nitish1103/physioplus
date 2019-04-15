webpackJsonp([8],{

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListPageModule", function() { return EventListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_list__ = __webpack_require__(557);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventListPageModule = (function () {
    function EventListPageModule() {
    }
    EventListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_list__["a" /* EventListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_list__["a" /* EventListPage */]),
            ],
        })
    ], EventListPageModule);
    return EventListPageModule;
}());

//# sourceMappingURL=event-list.module.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListPage; });
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
 * Generated class for the EventListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventListPage = (function () {
    function EventListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventLogo = 'data:image/png;base64,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';
    }
    EventListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventListPage');
    };
    EventListPage.prototype.goToDashboard = function () {
        this.navCtrl.setRoot('DashboardPage');
    };
    EventListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-list',template:/*ion-inline-start:"/home/nitish/physiotherapy/src/pages/event-list/event-list.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-icon name="arrow-round-back" (click)="goToDashboard()" style="margin-right: 10px;"></ion-icon>\n      Physio Plus Tech\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <img [src]="eventLogo" class="user">\n        </ion-col>\n        <ion-col col-9>\n          <strong>Event Number 1</strong>\n          <p>12/03/2019</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <img [src]="eventLogo" class="user">\n        </ion-col>\n        <ion-col col-9>\n          <strong>Event Number 1</strong>\n          <p>12/03/2019</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <img [src]="eventLogo" class="user">\n        </ion-col>\n        <ion-col col-9>\n          <strong>Event Number 1</strong>\n          <p>12/03/2019</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <button ion-button>ADD EVENT</button>\n  </ion-grid>\n\n'/*ion-inline-end:"/home/nitish/physiotherapy/src/pages/event-list/event-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EventListPage);
    return EventListPage;
}());

//# sourceMappingURL=event-list.js.map

/***/ })

});
//# sourceMappingURL=8.js.map