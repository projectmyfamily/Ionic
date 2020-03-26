import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalajudaPage } from './modalajuda.page';

const routes: Routes = [
  {
    path: '',
    component: ModalajudaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalajudaPageRoutingModule {}
