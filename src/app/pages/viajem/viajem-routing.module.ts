import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajemPage } from './viajem.page';

const routes: Routes = [
  {
    path: '',
    component: ViajemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajemPageRoutingModule {}
