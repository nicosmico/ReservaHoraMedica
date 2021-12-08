import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthUserRoutingModule } from './auth-user-routing.module';
import { AuthUserTemplateComponent } from './auth-user-template/auth-user-template.component';
import { CrudExamenComponent } from './crud-examen/crud-examen.component';
import { CrudHoraMedicaComponent } from './crud-hora-medica/crud-hora-medica.component';
import { CrudPacienteComponent } from './crud-paciente/crud-paciente.component';
import { CrudPersonalComponent } from './crud-personal/crud-personal.component';
import { CrudSecretarioComponent } from './crud-secretario/crud-secretario.component';
import { CrudAdminComponent } from './crud-admin/crud-admin.component';
import { LogsComponent } from './logs/logs.component';


@NgModule({
  declarations: [AuthUserTemplateComponent, CrudExamenComponent, CrudHoraMedicaComponent, CrudPacienteComponent, CrudPersonalComponent, CrudSecretarioComponent, CrudAdminComponent, LogsComponent],
  imports: [
    CommonModule,
    AuthUserRoutingModule
  ]
})
export class AuthUserModule { }
