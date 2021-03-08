import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewListPage } from './add-new-list.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewListPageRoutingModule {}
