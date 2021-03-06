import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { SettingPage } from '../pages/setting/setting';
import { SettingPageModule } from '../pages/setting/setting.module';
import { ReimbursementPageModule } from '../pages/reimbursement/reimbursement.module';
import { ApplyreimbursementPage } from '../pages/applyreimbursement/applyreimbursement';
import { ReimdetailsPage } from '../pages/reimdetails/reimdetails';
import { ReviewersDetailsPage } from '../pages/reviewersDetails/reviewersDetails';
import { MailingPage } from '../pages/mailing/mailing';
import { SendDetails } from '../pages/sendDetails/sendDetails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//借款
import { BorrowManagePage } from '../pages/borrowmanage/borrowmanage';
import { BorrowManagePageModule } from '../pages/borrowmanage/borrowmanage.module';
import { ApplyborrowmoneyPage } from '../pages/applyborrowmoney/applyborrowmoney';
import { ApplyborrowmoneyPageModule } from '../pages/applyborrowmoney/applyborrowmoney.module';
import { BorrowDetailPageModule } from '../pages/borrow-detail/borrow-detail.module';
import { BorrowReturnPageModule } from '../pages/borrow-return/borrow-return.module';

@NgModule({
  declarations: [
    MyApp,
    Home,
    ApplyreimbursementPage,
    ReimdetailsPage,
    BorrowManagePageModule,
    BorrowDetailPageModule,
    ApplyborrowmoneyPageModule,
    ReviewersDetailsPage

    ReviewersDetailsPage,
    MailingPage,
    SendDetails

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:''
    }),
    SettingPageModule,
    ReimbursementPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    SettingPage,
    ApplyreimbursementPage,
    ReimdetailsPage,
    ReviewersDetailsPage,
    MailingPage,
    SendDetails
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
