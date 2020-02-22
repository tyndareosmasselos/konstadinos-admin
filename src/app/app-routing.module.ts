import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'eyebrows-photos',
    loadChildren: () => import('./views/pages/eyebrows-photos/eyebrows-photos.module').then(m => m.EyebrowsPhotosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
