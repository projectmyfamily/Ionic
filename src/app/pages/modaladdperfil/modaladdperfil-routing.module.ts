import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaladdperfilPage } from './modaladdperfil.page';

const routes: Routes = [
  {
    path: '',
    component: ModaladdperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaladdperfilPageRoutingModule {}
