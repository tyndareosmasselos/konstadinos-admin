import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EyebrowsPhotosComponent } from './eyebrows-photos/eyebrows-photos.component';
import { EyebrowsPhotosCreateComponent } from './eyebrows-photos-create/eyebrows-photos-create.component';


const routes: Routes = [
  {
    path: "",
    component: EyebrowsPhotosComponent
  },
  {
    path: "create",
    component: EyebrowsPhotosCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EyebrowsPhotosRoutingModule { }
