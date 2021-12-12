import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AuthUser } from 'src/app/core/models/auth-user.model';
import { AuthUserService } from 'src/app/core/services/auth-user.service';
import { CreateSecretarioComponent } from '../components/create-secretario/create-secretario.component';
import { EditSecretarioComponent } from '../components/edit-secretario/edit-secretario.component';

@Component({
  selector: 'app-crud-secretario',
  templateUrl: './crud-secretario.component.html',
  styleUrls: ['./crud-secretario.component.scss']
})
export class CrudSecretarioComponent implements OnInit {

  secretarios: AuthUser[];

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
    this.fetchData();
  }

  fetchData(){
    this.authUserService.getSecretarios().subscribe(secretarios => {
      this.secretarios = secretarios;
      this.dataSource = new MatTableDataSource(this.secretarios);
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
    this.dialog.open(CreateSecretarioComponent);
  }

  editUsuario(usuario: AuthUser){
    this.dialog.open(EditSecretarioComponent, {
      data: usuario
    });
  }

  deleteUsuario(usuario: AuthUser){
    console.log(usuario);
  }

}
