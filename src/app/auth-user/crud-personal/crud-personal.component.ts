import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { CreatePersonalComponent } from '../components/create-personal/create-personal.component';
import { EditPersonalComponent } from '../components/edit-personal/edit-personal.component';

@Component({
  selector: 'app-crud-personal',
  templateUrl: './crud-personal.component.html',
  styleUrls: ['./crud-personal.component.scss']
})
export class CrudPersonalComponent implements OnInit {

  data: Usuario[];

  displayedColumns: string[] = ['rut', 'nombre', 'telefono', 'correo', 'acciones'];
  dataSource: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private usuarioService: UsuarioService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.usuarioService.getPersonal().subscribe(pacientes => {
      this.data = pacientes;
      this.dataSource = new MatTableDataSource(this.data);
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

  create(){
    this.dialog.open(CreatePersonalComponent);
  }

  edit(paciente: Usuario){
    this.dialog.open(EditPersonalComponent, {
      data: paciente
    });
  }

  delete(paciente: Usuario){
    console.log(paciente);
  }


}
