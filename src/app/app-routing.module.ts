import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagina-inicio',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then(m => m.PrincipalPageModule)
  },
  {
    path: 'pagina-inicio',
    loadChildren: () => import('./pages/pagina-inicio/pagina-inicio.module').then( m => m.PaginaInicioPageModule)
  },
  {
    path: 'serie/:id',
    loadChildren: () => import('./pages/serie/serie.module').then( m => m.SeriePageModule)
  },
  {
    path: 'categorias/:categoria',
    loadChildren: () => import('./pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
