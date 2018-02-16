import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports:[MatSnackBarModule],
  declarations: []
})
export class AngularMaterialModule { }
