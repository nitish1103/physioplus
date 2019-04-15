webpackJsonp([13],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_config__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_widget_util__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HcService__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import AUTH_CONFIG, Auth0Cordova, and auth0.js




var WebAuthService = (function () {
    function WebAuthService(zone, storage, hcService, widgetUtil) {
        var _this = this;
        this.zone = zone;
        this.storage = storage;
        this.hcService = hcService;
        this.widgetUtil = widgetUtil;
        this.authConfig = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */];
        this.Auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"](this.authConfig);
        this.loading = true;
        this.storage.get('profile').then(function (user) { return _this.user = user; });
        this.storage.get('access_token').then(function (token) { return _this.accessToken = token; });
        this.storage.get('expires_at').then(function (exp) {
            _this.loggedIn = Date.now() < JSON.parse(exp);
            _this.loading = false;
        });
    }
    WebAuthService.prototype.loginWeb = function () {
        var _this = this;
        this.hcService.getAuth0Config(localStorage.getItem('baseUrl')).subscribe(function (result) {
            _this.authConfig.clientID = result.config.clientId;
            _this.authConfig.clientId = result.config.clientId;
            _this.authConfig.audience = result.config.audience;
            _this.authConfig.domain = result.config.domain.split('//')[1];
            _this.authConfig.scope = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */].scope;
            _this.authConfig.redirectUri = window.location.protocol + '//' + window.location.host + '/';
            _this.authConfig.responseType = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */].responseType;
            _this.Auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"](_this.authConfig);
            _this.Auth0.authorize();
        }, function (error) {
            console.log(error);
        });
    };
    WebAuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.Auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
            }
            else if (err) {
                _this.widgetUtil.showToast('Something Went Wrong! Please try again');
                console.log(err);
            }
        });
    };
    WebAuthService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    WebAuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.clear();
        // Go back to the home route
    };
    WebAuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    };
    WebAuthService.prototype.getProfile = function () {
        this.hcService.userProfile(localStorage.getItem('baseUrl')).subscribe(function (result) {
            localStorage.setItem('profile', JSON.stringify(result));
        });
    };
    WebAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__HcService__["a" /* HcService */], __WEBPACK_IMPORTED_MODULE_4__shared_widget_util__["a" /* WidgetUtils */]])
    ], WebAuthService);
    return WebAuthService;
}());

//# sourceMappingURL=web.auth.service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiViewControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_DetailPage__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MultiViewControlService = (function () {
    function MultiViewControlService() {
        this._masterNav = null;
        this._detailNav = null;
        this._isOn = false;
    }
    Object.defineProperty(MultiViewControlService.prototype, "masterNav", {
        get: function () {
            return this._masterNav;
        },
        set: function (value) {
            this._masterNav = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiViewControlService.prototype, "detailNav", {
        get: function () {
            return this._detailNav;
        },
        set: function (value) {
            this._detailNav = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiViewControlService.prototype, "isOn", {
        get: function () {
            return this._isOn;
        },
        set: function (value) {
            this._isOn = value;
        },
        enumerable: true,
        configurable: true
    });
    MultiViewControlService.prototype.pushDetail = function (page, params) {
        if (this.isOn) {
            this.detailNav.setRoot(page, params);
        }
        else {
            this.masterNav.push(page, params);
        }
    };
    MultiViewControlService.prototype.pushMaster = function (page, params) {
        this.masterNav.push(page, params);
    };
    MultiViewControlService.prototype.onSplitPaneChanged = function (isOn) {
        // set local 'isOn' flag...
        this.isOn = isOn;
        // if the nav controllers have been instantiated...
        if (this.masterNav && this.detailNav) {
            (isOn) ? this.activateSplitView() :
                this.deactivateSplitView();
        }
    };
    MultiViewControlService.prototype.activateSplitView = function () {
        var currentView = this.masterNav.getActive();
        if (currentView != null) {
            if (currentView.component.prototype instanceof __WEBPACK_IMPORTED_MODULE_1__pages_DetailPage__["a" /* _DetailPage */]) {
                // if the current view is a 'Detail' page...
                // - remove it from the 'master' nav stack...
                this.masterNav.pop();
                // - and add it to the 'detail' nav stack...
                this.detailNav.setRoot(currentView.component, currentView.data);
            }
        }
    };
    MultiViewControlService.prototype.deactivateSplitView = function () {
        var detailView = this.detailNav.getActive();
        var masterView = this.masterNav.getActive();
        if (Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__["p" /* isUndefined */])(detailView.data.paramsData) || detailView.data.paramsData == null) {
            var index = this.masterNav.getViews().length;
            this.masterNav.setRoot(masterView.component, masterView.data);
        }
        else {
            this.detailNav.setRoot('ListProductsPage');
            if (detailView.component.prototype instanceof __WEBPACK_IMPORTED_MODULE_1__pages_DetailPage__["a" /* _DetailPage */]) {
                // if the current detail view is a 'Detail' page...
                var index = this.masterNav.getViews().length;
                // add it to the master view...
                this.masterNav.insert(index, detailView.component, detailView.data);
            }
        }
    };
    MultiViewControlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MultiViewControlService);
    return MultiViewControlService;
}());

//# sourceMappingURL=MultiViewControlService.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-appointment/add-appointment.module": [
		540,
		12
	],
	"../pages/add-patient/add-patient.module": [
		541,
		11
	],
	"../pages/appointment/appointment.module": [
		542,
		10
	],
	"../pages/daily-register/daily-register.module": [
		543,
		9
	],
	"../pages/dashboard/dashboard.module": [
		216
	],
	"../pages/event-list/event-list.module": [
		544,
		8
	],
	"../pages/expense/expense.module": [
		545,
		7
	],
	"../pages/forum/forum.module": [
		546,
		6
	],
	"../pages/landing/landing.module": [
		547,
		5
	],
	"../pages/list-products/list-products.module": [
		548,
		0
	],
	"../pages/login/login.module": [
		218
	],
	"../pages/my-profile/my-profile.module": [
		549,
		4
	],
	"../pages/offices/offices.module": [
		550,
		3
	],
	"../pages/patientlist/patientlist.module": [
		551,
		2
	],
	"../pages/product-detail/product-detail.module": [
		552,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_widget_util__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_HcService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_native_auth_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_web_auth_service__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, dialog, hcService, translate, platform, nativeAuth, webAuthService, widgetUtil) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dialog = dialog;
        this.hcService = hcService;
        this.translate = translate;
        this.platform = platform;
        this.nativeAuth = nativeAuth;
        this.webAuthService = webAuthService;
        this.widgetUtil = widgetUtil;
        this.tokenChecked = false;
        this.tokenChecked = false;
        this.companyLogo = 'assets/imgs/physiologo.jpeg';
        setTimeout(function () {
            if (localStorage.getItem('id_token') === null) {
                localStorage.clear();
                _this.tokenChecked = true;
            }
            else {
                _this.hcService.getHcTokenFromSsoToken(localStorage.getItem('baseUrl'), localStorage.getItem('id_token')).subscribe(function (result) {
                    if (result.token) {
                        localStorage.setItem('token', result.token);
                        _this.tokenChecked = true;
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
                        _this.getProfile();
                    }
                    else {
                        _this.tokenChecked = true;
                        _this.retryLogin();
                    }
                }, function (error) {
                    _this.tokenChecked = true;
                    _this.retryLogin();
                });
            }
        }, 1500);
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.retryLogin = function () {
        this.widgetUtil.showToast('Please try again');
        localStorage.clear();
        this.navCtrl.setRoot(LoginPage_1);
    };
    LoginPage.prototype.login = function (username, password) {
        var _this = this;
        if (localStorage.getItem('baseUrl') == null) {
            this.dialog.showToast(this.translate.instant('tenantUrlRequired'));
        }
        else {
            this.dialog.showLoading('Loading');
            this.hcService.login(localStorage.getItem('baseUrl'), username, password)
                .subscribe(function (data) {
                localStorage.setItem('token', data.body.token);
                var httpRequest = JSON.parse(sessionStorage.getItem('_PREVIOUS_REQUEST_'));
                if (httpRequest != null) {
                    _this.hcService.processRequest(httpRequest).subscribe(function (data) {
                        var targetScreen = sessionStorage.getItem('_PREVIOUS_SCREEN_');
                        _this.dialog.hideLoading();
                        _this.navCtrl.push(targetScreen, { data: data });
                        sessionStorage.removeItem('_PREVIOUS_REQUEST_');
                        sessionStorage.removeItem('_PREVIOUS_SCREEN_');
                    }, function (err) {
                        _this.dialog.hideLoading();
                        _this.dialog.showToast(err.message);
                    });
                }
                else {
                    _this.getProfile();
                    console.log('No Cached request to fire ');
                    _this.dialog.hideLoading();
                }
            }, function (err) {
                _this.dialog.hideLoading();
                console.log(err.error._ERROR_MESSAGE_);
                _this.dialog.showToast(err.error._ERROR_MESSAGE_);
                console.log(err);
            });
        }
    };
    LoginPage.prototype.loginSSO = function () {
        if (localStorage.getItem('baseUrl') === null) {
            this.dialog.showToast(this.translate.instant('tenantUrlRequired'));
        }
        else {
            if (this.platform.is('core') || this.platform.is('mobileweb')) {
                this.webAuthService.loginWeb();
            }
            else {
                this.nativeAuth.login();
            }
        }
    };
    LoginPage.prototype.showPrompt = function () {
        this.dialog.showPrompt();
    };
    LoginPage.prototype.goToDasboard = function () {
        this.navCtrl.setRoot('DashboardPage');
    };
    LoginPage.prototype.getProfile = function () {
        var _this = this;
        this.hcService.userProfile(localStorage.getItem('baseUrl')).subscribe(function (result) {
            localStorage.setItem('profile', JSON.stringify(result));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
        });
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/nitish/physiotherapy/src/pages/login/login.html"*/'<ion-content>\n  <img [src]="companyLogo" class="sliderImage">\n  <div class="message"><strong>Welcome to</strong> Physio Plus</div>\n  <div style="margin: 22px;">\n  <form>\n    <div class="form-group">\n      <input type="email" class="form-control"  placeholder="Username" autocomplete="off" autofocus="off">\n    </div>\n    <div class="form-group">\n      <input type="password" class="form-control" placeholder="Password" autocomplete="off" autofocus="off">\n    </div>\n  </form>\n  <ion-grid>\n    <button ion-button color="dark" round style="height: 51px;">Login</button>\n  </ion-grid>\n  </div>\n  <div class="message">Don\'t have an account? <span style="color:#048cef;"><strong>Sign Up</strong></span></div>\n</ion-content>\n'/*ion-inline-end:"/home/nitish/physiotherapy/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__shared_widget_util__["a" /* WidgetUtils */], __WEBPACK_IMPORTED_MODULE_3__shared_HcService__["a" /* HcService */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__shared_native_auth_service__["a" /* NativeAuthService */], __WEBPACK_IMPORTED_MODULE_7__shared_web_auth_service__["a" /* WebAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_widget_util__["a" /* WidgetUtils */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_config__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth0_cordova__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth0_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__auth0_cordova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_widget_util__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HcService__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import AUTH_CONFIG, Auth0Cordova, and auth0.js





var NativeAuthService = (function () {
    function NativeAuthService(zone, storage, hcService, widgetUtil) {
        var _this = this;
        this.zone = zone;
        this.storage = storage;
        this.hcService = hcService;
        this.widgetUtil = widgetUtil;
        this.authConfig = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */];
        this.Auth0 = new __WEBPACK_IMPORTED_MODULE_4_auth0_js__["WebAuth"](this.authConfig);
        this.Client = new __WEBPACK_IMPORTED_MODULE_3__auth0_cordova___default.a(this.authConfig);
        this.loading = true;
        this.storage.get('profile').then(function (user) { return _this.user = user; });
        this.storage.get('access_token').then(function (token) { return _this.accessToken = token; });
        this.storage.get('expires_at').then(function (exp) {
            _this.loggedIn = Date.now() < JSON.parse(exp);
            _this.loading = false;
        });
    }
    NativeAuthService.prototype.login = function () {
        var _this = this;
        this.loading = true;
        var options = {
            scope: 'openid profile offline_access'
        };
        // Authorize login request with Auth0: open login page and get auth results
        this.hcService.getAuth0Config(localStorage.getItem('baseUrl')).subscribe(function (result) {
            _this.authConfig.clientID = result.config.clientId;
            _this.authConfig.clientId = result.config.clientId;
            _this.authConfig.audience = result.config.audience;
            _this.authConfig.domain = result.config.domain.split('//')[1];
            _this.authConfig.scope = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */].scope;
            _this.authConfig.redirectUri = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */].redirectUri;
            _this.authConfig.responseType = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */].responseType;
            _this.Client = new __WEBPACK_IMPORTED_MODULE_3__auth0_cordova___default.a(_this.authConfig);
            _this.Auth0 = new __WEBPACK_IMPORTED_MODULE_4_auth0_js__["WebAuth"](_this.authConfig);
            _this.Client.authorize(options, function (err, authResult) {
                if (err) {
                    throw err;
                }
                // Set access token
                _this.storage.set('access_token', authResult.accessToken);
                _this.accessToken = authResult.accessToken;
                _this.hcService.getHcTokenFromSsoToken(localStorage.getItem('baseUrl'), authResult.idToken).subscribe(function (result) {
                    localStorage.setItem('token', result.token);
                }, function (error) {
                    _this.widgetUtil.showToast('Please try again');
                });
                // Set access token expiration
                var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
                _this.storage.set('expires_at', expiresAt);
                // Set logged in
                _this.loading = false;
                _this.loggedIn = true;
                // Fetch user's profile info
                _this.Auth0.client.userInfo(_this.accessToken, function (err, profile) {
                    if (err) {
                        throw err;
                    }
                    _this.storage.set('profile', profile).then(function (val) {
                        return _this.zone.run(function () { return _this.user = profile; });
                    });
                });
            });
        }, function (error) {
            console.log(error);
        });
        // Authorize login request with Auth0: open login page and get auth results
    };
    NativeAuthService.prototype.logout = function () {
        this.storage.remove('profile');
        this.storage.remove('access_token');
        this.storage.remove('expires_at');
        localStorage.clear();
        this.accessToken = null;
        this.user = null;
        this.loggedIn = false;
    };
    NativeAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__HcService__["a" /* HcService */], __WEBPACK_IMPORTED_MODULE_5__shared_widget_util__["a" /* WidgetUtils */]])
    ], NativeAuthService);
    return NativeAuthService;
}());

//# sourceMappingURL=native.auth.service.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
// Change this filename to auth.config.ts
var AUTH_CONFIG = {
    // Needed for Auth0 (capitalization: ID):
    clientID: 'Wx25ZebBNgyCUsGvyoyCCSO1krDnbGZY',
    // Needed for Auth0Cordova (capitalization: Id):
    clientId: 'Wx25ZebBNgyCUsGvyoyCCSO1krDnbGZY',
    domain: 'qa-ware2goproject.auth0.com',
    packageIdentifier: 'co.hotwax.picking',
    responseType: 'token id_token',
    redirectUri: 'https://ware2go.hotwaxsystems.com/stockmove/',
    audience: 'urn:ware2go-api',
    scope: 'openid profile name email'
};
//# sourceMappingURL=auth.config.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _DetailPage; });
//TODO: Need to be discuss with team
var _DetailPage = (function () {
    function _DetailPage() {
    }
    return _DetailPage;
}());

//# sourceMappingURL=_DetailPage.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(336);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export createTranslateLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login_module__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_widget_util__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_HcService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__interceptor_auth_interceptor__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_CollectFailedRequestService__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_MultiViewControlService__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_native_auth_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_web_auth_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_storage__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_dashboard__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-appointment/add-appointment.module#AddAppointmentPageModule', name: 'AddAppointmentPage', segment: 'add-appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-patient/add-patient.module#AddPatientPageModule', name: 'AddPatientPage', segment: 'add-patient', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appointment/appointment.module#AppointmentPageModule', name: 'AppointmentPage', segment: 'appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/daily-register/daily-register.module#DailyRegisterPageModule', name: 'DailyRegisterPage', segment: 'daily-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-list/event-list.module#EventListPageModule', name: 'EventListPage', segment: 'event-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense/expense.module#ExpensePageModule', name: 'ExpensePage', segment: 'expense', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forum/forum.module#ForumPageModule', name: 'ForumPage', segment: 'forum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-products/list-products.module#ListProductsPageModule', name: 'ListProductsPage', segment: 'list-products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offices/offices.module#OfficesPageModule', name: 'OfficesPage', segment: 'offices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patientlist/patientlist.module#PatientlistPageModule', name: 'PatientListPage', segment: 'patientlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-detail/product-detail.module#ProductDetailPageModule', name: 'ProductDetailPage', segment: 'product-detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_19__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_dashboard__["a" /* DashboardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__shared_HcService__["a" /* HcService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_MultiViewControlService__["a" /* MultiViewControlService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_CollectFailedRequestService__["a" /* CollectFailedRequestService */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_10__interceptor_auth_interceptor__["a" /* AuthInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__shared_widget_util__["a" /* WidgetUtils */],
                __WEBPACK_IMPORTED_MODULE_17__shared_native_auth_service__["a" /* NativeAuthService */],
                __WEBPACK_IMPORTED_MODULE_18__shared_web_auth_service__["a" /* WebAuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

function createTranslateLoader(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, './assets/i18n/', '.json');
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HcService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HcService = (function () {
    function HcService(http) {
        this.http = http;
        this.baseUrlPrefix = 'https://';
        this.baseUrlSuffix = '/hcapi/';
        this.loginServiceRoute = 'getAuthenticationToken';
    }
    HcService.prototype.login = function (url, username, password) {
        return this.http.post(this.baseUrlPrefix + url + this.baseUrlSuffix + this.loginServiceRoute, {}, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('USERNAME', username).append('PASSWORD', password),
            observe: 'response' });
    };
    HcService.prototype.getHcTokenFromSsoToken = function (url, ssoToken) {
        if (url.startsWith('https://')) {
            this.url = url;
            localStorage.setItem('baseUrl', this.url);
        }
        else {
            this.url = this.baseUrlPrefix + url + this.baseUrlSuffix;
            localStorage.setItem('baseUrl', this.url);
        }
        return this.http.post(this.url + '/getHcTokenFromSsoToken', {}, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('accessToken', ssoToken) });
    };
    HcService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        sessionStorage.clear();
    };
    HcService.prototype.processRequest = function (request) {
        var body = request.body;
        var url = request.url;
        var parmas = request.params;
        // TODO: We should use 'request' method instead of 'GET' or 'POST'. At present we are getting some internal error in http.js method ((method.toUpperCase))
        return this.http.post(url, body, parmas);
    };
    HcService.prototype.updateUserPassword = function (url, currentPassword, newPassword, newPasswordVerify) {
        return this.http.post(url + 'updateUserPassword', {}, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('currentPassword', currentPassword).append('newPassword', newPassword).append('newPasswordVerify', newPasswordVerify),
            observe: 'response' });
    };
    HcService.prototype.userProfile = function (url) {
        return this.http.get(url + 'user-profile');
    };
    HcService.prototype.getAuth0Config = function (url) {
        if (url.startsWith('https://')) {
            this.url = url;
            localStorage.setItem('baseUrl', this.url);
        }
        else {
            this.url = this.baseUrlPrefix + url + this.baseUrlSuffix;
            localStorage.setItem('baseUrl', this.url);
        }
        return this.http.post(this.url + 'getAuth0ClientConfig', {});
    };
    HcService.prototype.getRecievingBayProducts = function (url, facilityId) {
        return this.http.post(url + 'findStockMovesFromReceiving', { facilityId: facilityId });
    };
    HcService.prototype.getBulkToPickProducts = function (url, facilityId) {
        return this.http.post(url + 'findStockMovesRecommended', { facilityId: facilityId });
    };
    HcService.prototype.getAllProducts = function (url, facilityId) {
        return this.http.post(url + 'findStockMovesForAllLocation', { facilityId: facilityId });
    };
    HcService.prototype.getStockMoveNeededProducts = function (url, facilityId) {
        return this.http.post(url + 'findStockMovesNeeded', { facilityId: facilityId });
    };
    HcService.prototype.importInventoryCount = function (url, body) {
        return this.http.post(url + 'importInventoryCount', body);
    };
    HcService.prototype.processStockMove = function (url, body) {
        return this.http.post(url + 'processPhysicalStockMove', body);
    };
    HcService.prototype.searchProducts = function (url, body) {
        return this.http.post(url + 'searchproducts', body);
    };
    HcService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], HcService);
    return HcService;
}());

//# sourceMappingURL=HcService.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_web_auth_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth0_cordova__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth0_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__auth0_cordova__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translate, webAuthService) {
        var _this = this;
        this.translate = translate;
        this.webAuthService = webAuthService;
        this.rootPage = 'LandingPage';
        this.webAuthService.handleAuthentication();
        if (localStorage.getItem('token') != null) {
            this.rootPage = 'DashboardPage';
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.localizeApplication();
            window.handleOpenURL = function (url) {
                __WEBPACK_IMPORTED_MODULE_6__auth0_cordova___default.a.onRedirectUri(url);
            };
        });
    }
    //This function is used to localization/internationalization
    MyApp.prototype.localizeApplication = function () {
        var browserLanguage = this.translate.getBrowserLang();
        if (browserLanguage) {
            this.translate.setDefaultLang(browserLanguage);
        }
        else {
            this.translate.use('en');
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nitish/physiotherapy/src/app/app.html"*/'<ion-nav #masterNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/nitish/physiotherapy/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_web_auth_service__["a" /* WebAuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_HttpStatusCode__ = __webpack_require__(536);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthInterceptor = (function () {
    function AuthInterceptor(app, toastCtrl) {
        this.app = app;
        this.toastCtrl = toastCtrl;
    }
    ;
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var cloneRequest = req.clone();
        var authenticationToken = localStorage.getItem('token');
        if (authenticationToken != null) {
            cloneRequest = cloneRequest.clone({
                headers: req.headers.set('Bearer', authenticationToken).append('Content-Type', 'application/json')
            });
        }
        return next.handle(cloneRequest).do(function (event) { }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === __WEBPACK_IMPORTED_MODULE_4__shared_HttpStatusCode__["a" /* HttpStatusCode */].UNAUTHORIZED) {
                    localStorage.removeItem('token');
                    console.log('Token cleared successfully ');
                    //Store failed request and component name in session storgae
                    sessionStorage.setItem('_PREVIOUS_REQUEST_', JSON.stringify(cloneRequest));
                    sessionStorage.setItem('_PREVIOUS_SCREEN_', _this.app.getActiveNavs().pop().getActive().name);
                    console.log('Request cached successfully');
                    //Redirect user to login screen
                    _this.app.getRootNav().push('LoginPage');
                }
                if (err.status === __WEBPACK_IMPORTED_MODULE_4__shared_HttpStatusCode__["a" /* HttpStatusCode */].INTERNET_ERROR) {
                    var toast = _this.toastCtrl.create({
                        //TODO: It should be internationalized
                        message: 'There is some problem with internet',
                        duration: 3000
                    });
                    toast.present();
                }
            }
        });
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpStatusCode; });
// Need of this file: Use of Hardcoded status code is not a good practice instead of this we should define each status code with its significance
// http-status-codes module is also available https://www.npmjs.com/package/http-status-codes
// Angular core lib doesn't contain such module (Reason: keeping the sizing on the minimum as possible because Angular runs on browser)
// Reference: https://gitter.im/angular/angular?at=5a951144888332ee3ad93465
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["INTERNET_ERROR"] = 0] = "INTERNET_ERROR";
    HttpStatusCode[HttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
})(HttpStatusCode || (HttpStatusCode = {}));
//# sourceMappingURL=HttpStatusCode.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectFailedRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CollectFailedRequestService = (function () {
    function CollectFailedRequestService() {
        // We should not follow the cached request pattern.
        this.cachedRequest = null;
        this.targetScreen = null;
    }
    CollectFailedRequestService.prototype.collectFailedRequest = function (request) {
        this.cachedRequest = request;
        console.log('Request Cached successfully');
    };
    CollectFailedRequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        // I don't see this class doing anything with collected failed request.
        //@Lalit:
        // @todo:
        /*@lalit: Function of this file is to collect the failed request and we are making it as a service according to the
        * best practice of angular so that if we require this file, we can inject it and use accordingly*/
        //we are processing failed request in HcService.ts because it is the only point in our SDK which is responsible for http request
    ], CollectFailedRequestService);
    return CollectFailedRequestService;
}());

//# sourceMappingURL=CollectFailedRequestService.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetUtils = (function () {
    function WidgetUtils(loadingCtrl, toastCtrl, alertCtrl, translate) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
    }
    WidgetUtils.prototype.showLoading = function (message) {
        this.loader = this.loadingCtrl.create({
            content: message
        });
        this.loader.present();
    };
    WidgetUtils.prototype.hideLoading = function () {
        this.loader.dismiss();
    };
    WidgetUtils.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
        });
        toast.present();
    };
    WidgetUtils.prototype.showPrompt = function () {
        // Internationalisation is table feature of enterprise sdk. Cannot move forward without it.
        // @Lalit: Resolved
        var prompt = this.alertCtrl.create({
            title: this.translate.instant('promptTitle'),
            message: this.translate.instant('promptMessage'),
            inputs: [
                {
                    name: this.translate.instant('url'),
                    placeholder: this.translate.instant('promptTitle'),
                    value: localStorage.getItem('baseUrl')
                },
            ],
            buttons: [
                {
                    text: this.translate.instant('cancel'),
                    handler: function (data) {
                    }
                },
                {
                    text: this.translate.instant('save'),
                    handler: function (data) {
                        localStorage.setItem('baseUrl', data.url);
                    }
                }
            ]
        });
        prompt.present();
    };
    WidgetUtils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], WidgetUtils);
    return WidgetUtils;
}());

//# sourceMappingURL=widget.util.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_HcService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_MultiViewControlService__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardPage = (function () {
    function DashboardPage(navCtrl, app, navParams, hcService, popOverCtrl, navProxy, toastCtrl) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.navParams = navParams;
        this.hcService = hcService;
        this.popOverCtrl = popOverCtrl;
        this.navProxy = navProxy;
        this.toastCtrl = toastCtrl;
        this.productImage = '../../assets/imgs/notfound.png';
        this.sliderImage = '../../assets/imgs/sliderimage';
        this.cakeImage = '../../assets/imgs/cakedemo.jpeg';
        this.flowerImage = '../../assets/imgs/banner-2.png';
        this.giftImage = '../../assets/imgs/slider.jpg';
        this.selectedFacility = '';
        this.facilityList = [];
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this.userData = '';
        this.inventoryList = [];
        this.showSearchSpinner = false;
        this.paramsData = {};
        this.companyLogo = 'assets/imgs/physiologo.jpeg';
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        localStorage.setItem('selectedFacility', this.selectedFacility);
        if (localStorage.getItem('profile') != null) {
            this.userData = JSON.parse(localStorage.getItem('profile'));
            this.facilityList = JSON.parse(localStorage.getItem('profile')).facilities;
            if (this.facilityList.length) {
                this.getSelectedFacility();
                localStorage.setItem('selectedFacility', JSON.stringify(this.facilityList[0]));
            }
        }
        if (localStorage.getItem('inventoryItems') != null) {
            this.inventoryList = JSON.parse(localStorage.getItem('inventoryItems'));
        }
    };
    DashboardPage.prototype.importInventory = function () {
        var _this = this;
        this.hcService.importInventoryCount(localStorage.getItem('baseUrl'), {
            facilityId: this.facilityList[0]['facilityId'],
            inventoryCountRegister: this.inventoryList
        }).subscribe(function (result) {
            _this.showToast('Imported Successfully', 'success-toast');
            localStorage.removeItem('inventoryItems');
            _this.app.getRootNav().setRoot('DashboardPage');
        }, function (error) {
            _this.showToast(error.error._ERROR_MESSAGE_, 'success-toast');
            console.log('-----------------', error);
        });
    };
    DashboardPage.prototype.getSelectedFacility = function () {
        if (this.facilityList.length >= 1) {
            if (Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["p" /* isUndefined */])(localStorage.getItem('selectedFacility')) || localStorage.getItem('selectedFacility') == null) {
                this.selectedFacility = this.facilityList[0]['facilityId'];
            }
            else {
                this.selectedFacility = localStorage.getItem('selectedFacility');
            }
        }
    };
    DashboardPage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.setRoot('LoginPage');
    };
    DashboardPage.prototype.addCount = function () {
        this.navCtrl.push('ProductDetailPage');
    };
    DashboardPage.prototype.deleteItem = function (item) {
        console.log(item);
        var inventoryItems = JSON.parse(localStorage.getItem('inventoryItems'));
        inventoryItems = inventoryItems.filter(function (inventory) { return (inventory.skuId != item.sku && inventory.quantity != item.quantity && inventory.locationId != item.location); });
        localStorage.setItem('inventoryItems', JSON.stringify(inventoryItems));
        this.ionViewDidLoad();
    };
    DashboardPage.prototype.ionViewWillUnload = function () {
        this.subscriptions.unsubscribe();
    };
    DashboardPage.prototype.goToPatientListPage = function () {
        this.navCtrl.setRoot('PatientListPage');
    };
    DashboardPage.prototype.goToEventListPage = function () {
        this.navCtrl.setRoot('EventListPage');
    };
    DashboardPage.prototype.goToExpensePage = function () {
        this.navCtrl.setRoot('ExpensePage');
    };
    DashboardPage.prototype.goToAppointmentPage = function () {
        this.navCtrl.setRoot('AppointmentPage');
    };
    DashboardPage.prototype.goToOfficesPage = function () {
        this.navCtrl.setRoot('OfficesPage');
    };
    DashboardPage.prototype.goToForumPage = function () {
        this.navCtrl.setRoot('ForumPage');
    };
    DashboardPage.prototype.goToDailyRegisterPage = function () {
        this.navCtrl.setRoot('DailyRegisterPage');
    };
    DashboardPage.prototype.goToMyProfilePage = function () {
        this.navCtrl.setRoot('MyProfilePage');
    };
    DashboardPage.prototype.showToast = function (message, cssClass) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            cssClass: cssClass,
        });
        toast.present();
    };
    DashboardPage.prototype.login = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/nitish/physiotherapy/src/pages/dashboard/dashboard.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="custom">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Physio Plus Tech\n    </ion-title>\n  </ion-navbar>\n  <!--<div class="search-bar-wrapper">\n    <ion-searchbar\n      #productQuery\n      [(ngModel)]="productId"\n      placeholder="Search"\n    >\n    </ion-searchbar>\n  </div>-->\n</ion-header>\n\n<ion-menu [content]="mycontent">\n  <ion-content>\n    <ion-list>\n      <button></button>\n      <img [src]="companyLogo" style="padding: 30px;padding-top: 10px;">\n      <button ion-item (click)="addCount()">\n        <ion-icon name="apps"></ion-icon>\n        <span style="font-size: 19px;">Home</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="locate"></ion-icon>\n        <span style="font-size: 19px;">Multi-Locations</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="people"></ion-icon>\n        <span style="font-size: 19px;">Patients</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="calendar"></ion-icon>\n        <span style="font-size: 19px;">Appointments</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="cash"></ion-icon>\n        <span style="font-size: 19px;">Finance</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="person-add"></ion-icon>\n        <span style="font-size: 19px;">Daily Register</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="people"></ion-icon>\n        <span style="font-size: 19px;">Staffs</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="walk"></ion-icon>\n        <span style="font-size: 19px;">Exercise Prescription</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="settings"></ion-icon>\n        <span style="font-size: 19px;">Settings</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="contact"></ion-icon>\n        <span style="font-size: 19px;">My Accounts</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="notifications"></ion-icon>\n        <span style="font-size: 19px;">Notification</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="globe"></ion-icon>\n        <span style="font-size: 19px;">Physio Events</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="cash"></ion-icon>\n        <span style="font-size: 19px;">Physio Wallet</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="videocam"></ion-icon>\n        <span style="font-size: 19px;">Physio Videos</span>\n      </button>\n      <button ion-item (click)="login()">\n        <ion-icon name="log-in"></ion-icon>\n        <span style="font-size: 19px;">Login</span>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="log-out"></ion-icon>\n        <span style="font-size: 19px;">Logout</span>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]=""></ion-nav>\n\n<ion-content>\n  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" style="margin: 15px;">\n    <div class="carousel-inner">\n      <div class="carousel-item active">\n        <img src="https://www.kevinmd.com/blog/wp-content/uploads/shutterstock_168773126.jpg" class="d-block w-100" alt="...">\n      </div>\n      <div class="carousel-item">\n        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrP8vl8odsC4NWKTW7KH6vqrgb717rerwzIF71pGqAie0VXL2y" class="d-block w-100" alt="...">\n      </div>\n      <div class="carousel-item">\n        <img src="http://www.royalberkshire.nhs.uk/Images/Staff/Junior%20doctors%20on%20rounds%20with%20consultant.JPG" class="d-block w-100" alt="...">\n      </div>\n    </div>\n  </div>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button color="dark" round style="height: 55px;margin-left: 15px;" (click)="goToPatientListPage()" outline>Patient\'s List</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button color="dark" round style="height: 55px;margin-left: 15px;" (click)="goToEventListPage()" outline>Physio Event</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button color="dark" round style="height: 55px;margin-left: 15px;" (click)="goToAppointmentPage()" outline>Todays Appointments</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button color="dark" round style="height: 55px;margin-left: 15px;" (click)="goToExpensePage()" outline>Expense</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button color="dark" round style="height: 55px;margin-left: 15px;" (click)="goToOfficesPage()" outline>Offices</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button color="dark" round style="height: 55px;margin-left: 15px;" (click)="goToForumPage()" outline>Forum</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button color="dark" round style="height: 55px;margin-left: 15px;" (click)="goToDailyRegisterPage()" outline>Daily Register</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button color="dark" round style="height: 55px;margin-left: 15px;" (click)="goToMyProfilePage()" outline>My Profile</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/nitish/physiotherapy/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_HcService__["a" /* HcService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_HcService__["a" /* HcService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_MultiViewControlService__["a" /* MultiViewControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_MultiViewControlService__["a" /* MultiViewControlService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _g || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

},[316]);
//# sourceMappingURL=main.js.map