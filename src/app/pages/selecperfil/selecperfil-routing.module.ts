import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecperfilPage } from './selecperfil.page';

const routes: Routes = [
  {
    path: '',
    component: SelecperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecperfilPageRoutingModule {}
