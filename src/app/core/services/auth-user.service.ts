import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { administradoresMock } from '../mocks/administradores.mock';
import { secretariosMock } from '../mocks/secretarios.mock';
import { AuthUser } from '../models/auth-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  administradores: AuthUser[];
  secretarios: AuthUser[];

  constructor() {
    this.administradores = administradoresMock;
    this.secretarios = secretariosMock;
  }

  getAdministradores(): Observable<AuthUser[]>{
    return of(this.administradores);
  }

  getSecretarios(): Observable<AuthUser[]>{
    return of(this.secretarios);
  }

  deleteAuthUser(usuario: AuthUser): Observable<any>{
    console.log('Borrar usuario: '+usuario.rut);
    return of(true);
  }
}
