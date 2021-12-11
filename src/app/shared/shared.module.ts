import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutToNamePipe } from './pipes/rut-to-name.pipe';
import { ExamenIdToNamePipe } from './pipes/examen-id-to-name.pipe';



@NgModule({
  declarations: [RutToNamePipe, ExamenIdToNamePipe],
  imports: [
    CommonModule
  ],
  exports: [
    RutToNamePipe,
    ExamenIdToNamePipe
  ]
})
export class SharedModule { }
