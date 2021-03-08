import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewListPageRoutingModule } from './add-new-list-routing.module';

import { AddNewListPage } from './add-new-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewListPageRoutingModule
  ],
  declarations: [AddNewListPage]
})
export class AddNewListPageModule {}
