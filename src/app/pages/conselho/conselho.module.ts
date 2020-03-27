import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConselhoPageRoutingModule } from './conselho-routing.module';

import { ConselhoPage } from './conselho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConselhoPageRoutingModule
  ],
  declarations: [ConselhoPage]
})
export class ConselhoPageModule {}
