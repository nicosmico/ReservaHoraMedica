import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthUserTemplateComponent } from './auth-user-template/auth-user-template.component';
import { CrudAdminComponent } from './crud-admin/crud-admin.component';
import { CrudExamenComponent } from './crud-examen/crud-examen.component';
import { CrudHoraMedicaComponent } from './crud-hora-medica/crud-hora-medica.component';
import { CrudPacienteComponent } from './crud-paciente/crud-paciente.component';
import { CrudPersonalComponent } from './crud-personal/crud-personal.component';
import { CrudSecretarioComponent } from './crud-secretario/crud-secretario.component';
import { LogsComponent } from './logs/logs.component';

const routes: Routes = [
  {
    path: '',
    component: AuthUserTemplateComponent,
    children: [
      {path: '', component: LogsComponent},
      {path: 'pacientes', component: CrudPacienteComponent},
      {path: 'horasmedicas', component: CrudHoraMedicaComponent},
      {path: 'personal', component: CrudPersonalComponent},
      {path: 'examenes', component: CrudExamenComponent},
      {path: 'secretarios', component: CrudSecretarioComponent},
      {path: 'administradores', component: CrudAdminComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthUserRoutingModule { }
