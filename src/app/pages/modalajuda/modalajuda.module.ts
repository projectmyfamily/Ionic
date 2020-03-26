import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalajudaPageRoutingModule } from './modalajuda-routing.module';

import { ModalajudaPage } from './modalajuda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalajudaPageRoutingModule
  ],
  declarations: [ModalajudaPage]
})
export class ModalajudaPageModule {}
