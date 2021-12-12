import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AuthUserLayoutComponent } from './auth-user-layout/auth-user-layout.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
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
    component: AuthUserLayoutComponent,
    children: [
      {path: '', component: LogsComponent},
      {path: 'pacientes', component: CrudPacienteComponent},
      {path: 'horasmedicas', component: CrudHoraMedicaComponent},
      {path: 'personal', component: CrudPersonalComponent},
      {path: 'examenes', component: CrudExamenComponent},
      {path: 'secretarios', component: CrudSecretarioComponent, canActivate: [AdminGuard]},
      {path: 'administradores', component: CrudAdminComponent, canActivate: [AdminGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthUserRoutingModule { }
