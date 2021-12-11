import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HoraMedica } from '../models/hora-medica.model';

import { horasMedicasMock } from '../mocks/hora-medica.mock';
import { bloquesMock } from '../mocks/bloques-horarios.mock';
import { BloqueHorario } from '../models/bloque-horario.model';

@Injectable({
  providedIn: 'root'
})
export class HoraMedicaService {
  horasMedicas: HoraMedica[];
  bloques: BloqueHorario[];

  constructor() {
    this.horasMedicas = horasMedicasMock;
    this.bloques = bloquesMock;
  }

  getAvailableHorasMedicasByDate(fecha: Date): Observable<any>{
    // Obtener horas medicas existentes
    let notAviliableHorasMedicas = this.horasMedicas.filter(horaMedica => 
      horaMedica.fechaInicial.getDate() == fecha.getDate() && 
      horaMedica.fechaInicial.getMonth() == fecha.getMonth() && 
      horaMedica.fechaInicial.getFullYear() == fecha.getFullYear()
    ).map(horaMedica => <BloqueHorario>{
      hora: horaMedica.fechaInicial.getHours(),
      minutos: horaMedica.fechaInicial.getMinutes()
    });

    // Filtrar para obtener las horas disponibles
    let aviliableHorasMedicas = this.bloques;
    notAviliableHorasMedicas.forEach(bloqueNoDisp => {
      aviliableHorasMedicas = aviliableHorasMedicas.filter(bloque => !(bloque.hora == bloqueNoDisp.hora && bloque.minutos == bloqueNoDisp.minutos));
    });

    return of(aviliableHorasMedicas);
  }
}
