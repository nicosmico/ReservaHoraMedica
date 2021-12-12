import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pacientesMock } from '../mocks/paciente.mock';
import { personalMock } from '../mocks/personal.mock';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  personal: Usuario[];
  pacientes: Usuario[];

  constructor() {
    this.personal = personalMock;
    this.pacientes = pacientesMock
  }

  getPersonal(): Observable<Usuario[]>{
    return of(this.personal);
  }

  getPacientes(): Observable<Usuario[]>{
    return of(this.pacientes);
  }

}
