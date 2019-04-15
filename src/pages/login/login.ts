import { Component } from '@angular/core';
import {IonicPage, NavController, Platform} from 'ionic-angular';
import { LoginModel } from "../../models/login.model";
import { WidgetUtils } from "../../shared/widget.util";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {HcService} from "../../shared/HcService";
import {TranslateService} from "@ngx-translate/core";
import {DashboardPage} from "../dashboard/dashboard";
import {NativeAuthService} from "../../shared/native.auth.service";
import {WebAuthService} from "../../shared/web.auth.service";


@IonicPage({name:'LoginPage'})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  companyLogo: string;
  tokenChecked = false;
  constructor(private navCtrl: NavController, private dialog: WidgetUtils, private hcService: HcService,private translate:TranslateService
  , private platform: Platform, private nativeAuth : NativeAuthService, private webAuthService: WebAuthService
  , private widgetUtil: WidgetUtils) {
    this.tokenChecked = false;
    this.companyLogo =  'assets/imgs/physiologo.jpeg';
    setTimeout(() => {
      if (localStorage.getItem('id_token') === null) {
        localStorage.clear();
        this.tokenChecked = true;
      } else {
        this.hcService.getHcTokenFromSsoToken(localStorage.getItem('baseUrl'), localStorage.getItem('id_token')).subscribe((result: any) => {

          if(result.token) {
            localStorage.setItem('token', result.token);
            this.tokenChecked = true;
            this.navCtrl.setRoot(DashboardPage);
            this.getProfile();
          } else {
            this.tokenChecked = true;
            this.retryLogin();
          }
        }, (error) => {
          this.tokenChecked = true;
          this.retryLogin();
        });
      }
    }, 1500);
  }

  retryLogin() {
    this.widgetUtil.showToast('Please try again');
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

  login(username, password){
    if(localStorage.getItem('baseUrl') == null) {
      this.dialog.showToast(this.translate.instant('tenantUrlRequired'));
    }
    else {
      this.dialog.showLoading('Loading');
      this.hcService.login(localStorage.getItem('baseUrl'), username, password)
        .subscribe((data: HttpResponse<LoginModel>) => {
            localStorage.setItem('token', data.body.token);
            let httpRequest = JSON.parse(sessionStorage.getItem('_PREVIOUS_REQUEST_'));
            if (httpRequest != null) {
              this.hcService.processRequest(httpRequest).subscribe(
                (data: any) => {
                  let targetScreen = sessionStorage.getItem('_PREVIOUS_SCREEN_');
                  this.dialog.hideLoading();
                  this.navCtrl.push(targetScreen,{ data : data } );
                  sessionStorage.removeItem('_PREVIOUS_REQUEST_');
                  sessionStorage.removeItem('_PREVIOUS_SCREEN_');
                },
                (err:HttpErrorResponse)=>{
                  this.dialog.hideLoading();
                  this.dialog.showToast(err.message);
                });
            }
            else {
              this.getProfile();
              console.log('No Cached request to fire ');
              this.dialog.hideLoading();
            }
        },
          (err) => {
            this.dialog.hideLoading();
            console.log(err.error._ERROR_MESSAGE_);
            this.dialog.showToast(err.error._ERROR_MESSAGE_);
            console.log(err);
          }
        );
    }
  }

  loginSSO() {
    if (localStorage.getItem('baseUrl') === null) {
      this.dialog.showToast(this.translate.instant('tenantUrlRequired'));
    } else {
      if (this.platform.is('core') || this.platform.is('mobileweb')) {
        this.webAuthService.loginWeb();
      } else {
        this.nativeAuth.login();
      }
    }
  }


  showPrompt() {
    this.dialog.showPrompt();
  }

  goToDasboard () {
    this.navCtrl.setRoot('DashboardPage');
  }

  getProfile(){
    this.hcService.userProfile(localStorage.getItem('baseUrl')).subscribe((result: any) => {
      localStorage.setItem('profile', JSON.stringify(result));
      this.navCtrl.setRoot(DashboardPage);
    });
  }

}
