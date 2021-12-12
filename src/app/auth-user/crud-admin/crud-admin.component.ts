import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AuthUser } from 'src/app/core/models/auth-user.model';
import { AuthUserService } from 'src/app/core/services/auth-user.service';
import { CreateAdminComponent } from '../components/create-admin/create-admin.component';
import { EditAdminComponent } from '../components/edit-admin/edit-admin.component';

@Component({
  selector: 'app-crud-admin',
  templateUrl: './crud-admin.component.html',
  styleUrls: ['./crud-admin.component.scss']
})
export class CrudAdminComponent implements OnInit {
  administradores: AuthUser[];

  // displayedColumns: string[] = ['rut', 'nombre', 'apellido1', 'apellido2', 'correo', 'telefono', 'ultima_sesion', 'acciones'];
  displayedColumns: string[] = ['rut', 'nombre', 'apellido1', 'apellido2', 'acciones'];
  dataSource: MatTableDataSource<AuthUser>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private authUserService: AuthUserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchAdministradores();
  }

  fetchAdministradores(){
    this.authUserService.getAdministradores().subscribe(administradores => {
      this.administradores = administradores;
      this.dataSource = new MatTableDataSource(this.administradores);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createUsuario(){
    this.dialog.open(CreateAdminComponent);
  }

  editUsuario(usuario: AuthUser){
    this.dialog.open(EditAdminComponent, {
      data: usuario
    });
  }

  deleteUsuario(usuario: AuthUser){
    this.authUserService.deleteAuthUser(usuario).subscribe(resp => this.fetchAdministradores());
  }

}
