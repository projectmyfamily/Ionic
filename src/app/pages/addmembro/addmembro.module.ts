import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmembroPageRoutingModule } from './addmembro-routing.module';

import { AddmembroPage } from './addmembro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmembroPageRoutingModule
  ],
  declarations: [AddmembroPage]
})
export class AddmembroPageModule {}
