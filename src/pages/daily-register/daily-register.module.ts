import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyRegisterPage } from './daily-register';

@NgModule({
  declarations: [
    DailyRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyRegisterPage),
  ],
})
export class DailyRegisterPageModule {}
