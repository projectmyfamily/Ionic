import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'membros',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/membros/membros.module').then(m => m.MembrosPageModule)
          }
        ]
      },
      {
        path: 'tarefas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/tarefas/tarefas.module').then(m => m.TarefasPageModule)
          }
        ]
      },
      {
        path: 'desejos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/desejos/desejos.module').then(m => m.DesejosPageModule)
          }
        ]
      },

      {
        path: 'atividades',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/atividades/atividades.module').then(m => m.AtividadesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
