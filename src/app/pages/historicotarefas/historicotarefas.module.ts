import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricotarefasPageRoutingModule } from './historicotarefas-routing.module';

import { HistoricotarefasPage } from './historicotarefas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricotarefasPageRoutingModule
  ],
  declarations: [HistoricotarefasPage]
})
export class HistoricotarefasPageModule {}
