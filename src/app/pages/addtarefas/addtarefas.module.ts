import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtarefasPageRoutingModule } from './addtarefas-routing.module';

import { AddtarefasPage } from './addtarefas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtarefasPageRoutingModule
  ],
  declarations: [AddtarefasPage]
})
export class AddtarefasPageModule {}
