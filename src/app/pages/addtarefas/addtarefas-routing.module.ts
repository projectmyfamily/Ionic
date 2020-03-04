import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtarefasPage } from './addtarefas.page';

const routes: Routes = [
  {
    path: '',
    component: AddtarefasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtarefasPageRoutingModule {}
