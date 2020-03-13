import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaladdperfilPageRoutingModule } from './modaladdperfil-routing.module';

import { ModaladdperfilPage } from './modaladdperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaladdperfilPageRoutingModule
  ],
  declarations: [ModaladdperfilPage]
})
export class ModaladdperfilPageModule {}
