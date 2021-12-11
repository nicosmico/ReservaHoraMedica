import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { personalMock } from '../mocks/personal.mock';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  personal: Usuario[];

  constructor() {
    this.personal = personalMock;
  }

  getPersonal(): Observable<Usuario[]>{
    return of(this.personal);
  }

}
