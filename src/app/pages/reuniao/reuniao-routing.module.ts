import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReuniaoPage } from './reuniao.page';

const routes: Routes = [
  {
    path: '',
    component: ReuniaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReuniaoPageRoutingModule {}
