import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorrowDetailPage } from './borrow-detail';

@NgModule({
  declarations: [
    BorrowDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BorrowDetailPage),
  ],
  exports: [
    BorrowDetailPage
  ]
})
export class BorrowDetailPageModule {}
