import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConselhoPage } from './conselho.page';

const routes: Routes = [
  {
    path: '',
    component: ConselhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConselhoPageRoutingModule {}
