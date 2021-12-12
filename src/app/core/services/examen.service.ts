import { Injectable } from '@angular/core';
import { Examen } from '../models/examen.model';
import { examenesMock } from '../mocks/examenes.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  examenes: Examen[];

  constructor() {
    this.examenes = examenesMock;
  }

  getExamenes(): Observable<Examen[]>{
    return of(this.examenes);
  }

  getExamenesDisponibles(): Observable<Examen[]>{
    return of(this.examenes.filter(examen => examen.disponible == true));
  }

  deleteExamen(examen: Examen): Observable<any>{
    return of(true);
  }
}
