import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscricaotarefasPageRoutingModule } from './discricaotarefas-routing.module';

import { DiscricaotarefasPage } from './discricaotarefas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscricaotarefasPageRoutingModule
  ],
  declarations: [DiscricaotarefasPage]
})
export class DiscricaotarefasPageModule {}
