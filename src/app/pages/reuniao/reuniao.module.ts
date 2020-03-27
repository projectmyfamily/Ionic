import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReuniaoPageRoutingModule } from './reuniao-routing.module';

import { ReuniaoPage } from './reuniao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReuniaoPageRoutingModule
  ],
  declarations: [ReuniaoPage]
})
export class ReuniaoPageModule {}
