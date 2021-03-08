import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowItemsPageRoutingModule } from './show-items-routing.module';

import { ShowItemsPage } from './show-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowItemsPageRoutingModule
  ],
  declarations: [ShowItemsPage]
})
export class ShowItemsPageModule {}
