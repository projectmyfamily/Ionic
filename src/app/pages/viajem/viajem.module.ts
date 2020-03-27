import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajemPageRoutingModule } from './viajem-routing.module';

import { ViajemPage } from './viajem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajemPageRoutingModule
  ],
  declarations: [ViajemPage]
})
export class ViajemPageModule {}
