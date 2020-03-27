import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricotarefasPage } from './historicotarefas.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricotarefasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricotarefasPageRoutingModule {}
