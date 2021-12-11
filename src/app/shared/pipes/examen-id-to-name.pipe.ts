import { Pipe, PipeTransform } from '@angular/core';
import { Examen } from 'src/app/core/models/examen.model';

@Pipe({
  name: 'examenIdToName'
})
export class ExamenIdToNamePipe implements PipeTransform {

  transform( id: number, examenes: Examen[]): String {
    let examen: Examen = examenes.find(examen => examen.id == id);
    return examen.nombre;
  }

}
