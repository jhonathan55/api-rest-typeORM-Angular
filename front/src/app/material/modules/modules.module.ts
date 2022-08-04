import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
const myModules = [
  MatToolbarModule,
  MatSelectModule,
  MatFormFieldModule
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    myModules,
  ],
  exports: [
    myModules,
  ],
  providers: [
  
  ]
})
export class ModulesModule { }
