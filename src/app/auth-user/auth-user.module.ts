import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthUserRoutingModule } from './auth-user-routing.module';
import { CrudExamenComponent } from './crud-examen/crud-examen.component';
import { CrudHoraMedicaComponent } from './crud-hora-medica/crud-hora-medica.component';
import { CrudPacienteComponent } from './crud-paciente/crud-paciente.component';
import { CrudPersonalComponent } from './crud-personal/crud-personal.component';
import { CrudSecretarioComponent } from './crud-secretario/crud-secretario.component';
import { CrudAdminComponent } from './crud-admin/crud-admin.component';
import { LogsComponent } from './logs/logs.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { CreateExamenComponent } from './components/create-examen/create-examen.component';
import { CreateHoraMedicaComponent } from './components/create-hora-medica/create-hora-medica.component';
import { CreatePacienteComponent } from './components/create-paciente/create-paciente.component';
import { CreatePersonalComponent } from './components/create-personal/create-personal.component';
import { CreateSecretarioComponent } from './components/create-secretario/create-secretario.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { EditExamenComponent } from './components/edit-examen/edit-examen.component';
import { EditHoraMedicaComponent } from './components/edit-hora-medica/edit-hora-medica.component';
import { EditPacienteComponent } from './components/edit-paciente/edit-paciente.component';
import { EditPersonalComponent } from './components/edit-personal/edit-personal.component';
import { EditSecretarioComponent } from './components/edit-secretario/edit-secretario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthUserLayoutComponent } from './auth-user-layout/auth-user-layout.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [CrudExamenComponent, CrudHoraMedicaComponent, CrudPacienteComponent, CrudPersonalComponent, CrudSecretarioComponent, CrudAdminComponent, LogsComponent, CreateAdminComponent, CreateExamenComponent, CreateHoraMedicaComponent, CreatePacienteComponent, CreatePersonalComponent, CreateSecretarioComponent, EditAdminComponent, EditExamenComponent, EditHoraMedicaComponent, EditPacienteComponent, EditPersonalComponent, EditSecretarioComponent, AuthUserLayoutComponent],
  imports: [
    CommonModule,
    AuthUserRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class AuthUserModule { }
