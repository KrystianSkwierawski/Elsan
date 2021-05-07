import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  exports: [
    MatIconModule,
    MatButtonModule,
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
