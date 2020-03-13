import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
      path: '', redirectTo: "inicio", pathMatch: 'full'
  },
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'membros',
    loadChildren: () => import('./pages/membros/membros.module').then( m => m.MembrosPageModule)
  },
  {
    path: 'tarefas',
    loadChildren: () => import('./pages/tarefas/tarefas.module').then( m => m.TarefasPageModule)
  },
  {
    path: 'desejos',
    loadChildren: () => import('./pages/desejos/desejos.module').then( m => m.DesejosPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'membros',
    loadChildren: () => import('./pages/membros/membros.module').then( m => m.MembrosPageModule)
  },
  {
    path: 'tarefas',
    loadChildren: () => import('./pages/tarefas/tarefas.module').then( m => m.TarefasPageModule)
  },
  {
    path: 'desejos',
    loadChildren: () => import('./pages/desejos/desejos.module').then( m => m.DesejosPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'addmembro',
    loadChildren: () => import('./pages/addmembro/addmembro.module').then( m => m.AddmembroPageModule)
  },
  {
    path: 'addtarefas',
    loadChildren: () => import('./pages/addtarefas/addtarefas.module').then( m => m.AddtarefasPageModule)
  },
  {
    path: 'discricaotarefas',
    loadChildren: () => import('./pages/discricaotarefas/discricaotarefas.module').then( m => m.DiscricaotarefasPageModule)
  },
  {
    path: 'atividades',
    loadChildren: () => import('./pages/atividades/atividades.module').then( m => m.AtividadesPageModule)
  },
  {
    path: 'selecperfil',
    loadChildren: () => import('./pages/selecperfil/selecperfil.module').then( m => m.SelecperfilPageModule)
  },
  {
    path: 'modalperfil',
    loadChildren: () => import('./pages/modalperfil/modalperfil.module').then( m => m.ModalperfilPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },  {
    path: 'modaladdperfil',
    loadChildren: () => import('./pages/modaladdperfil/modaladdperfil.module').then( m => m.ModaladdperfilPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
