import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscricaotarefasPage } from './discricaotarefas.page';

const routes: Routes = [
  {
    path: '',
    component: DiscricaotarefasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscricaotarefasPageRoutingModule {}
