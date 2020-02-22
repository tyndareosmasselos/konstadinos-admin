import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyebrowsPhotosComponent } from './eyebrows-photos/eyebrows-photos.component';
import { EyebrowsPhotosRoutingModule } from './eyebrows-routing.module';
import { EyebrowsPhotosCreateComponent } from './eyebrows-photos-create/eyebrows-photos-create.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    EyebrowsPhotosRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    SharedModule
  ],
  exports: [EyebrowsPhotosComponent, EyebrowsPhotosCreateComponent],
  declarations: [EyebrowsPhotosComponent, EyebrowsPhotosCreateComponent]
})
export class EyebrowsPhotosModule { }
