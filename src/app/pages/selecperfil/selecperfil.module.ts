import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecperfilPageRoutingModule } from './selecperfil-routing.module';

import { SelecperfilPage } from './selecperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecperfilPageRoutingModule
  ],
  declarations: [SelecperfilPage]
})
export class SelecperfilPageModule {}
