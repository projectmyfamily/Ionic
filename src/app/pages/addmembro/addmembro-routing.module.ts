import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmembroPage } from './addmembro.page';

const routes: Routes = [
  {
    path: '',
    component: AddmembroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmembroPageRoutingModule {}
