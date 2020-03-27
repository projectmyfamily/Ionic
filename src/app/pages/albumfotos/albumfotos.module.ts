import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumfotosPageRoutingModule } from './albumfotos-routing.module';

import { AlbumfotosPage } from './albumfotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumfotosPageRoutingModule
  ],
  declarations: [AlbumfotosPage]
})
export class AlbumfotosPageModule {}
