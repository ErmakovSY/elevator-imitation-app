import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_IMPORTS = [
  MatCardModule,
  MatInputModule,
  MatSliderModule,
  MatButtonModule,
];

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MATERIAL_IMPORTS
  ]
})
export class SharedModule { }
