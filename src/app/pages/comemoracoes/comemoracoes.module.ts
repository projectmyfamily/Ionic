import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComemoracoesPageRoutingModule } from './comemoracoes-routing.module';

import { ComemoracoesPage } from './comemoracoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComemoracoesPageRoutingModule
  ],
  declarations: [ComemoracoesPage]
})
export class ComemoracoesPageModule {}
