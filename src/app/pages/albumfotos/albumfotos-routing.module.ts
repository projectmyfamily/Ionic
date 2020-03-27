import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumfotosPage } from './albumfotos.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumfotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumfotosPageRoutingModule {}
