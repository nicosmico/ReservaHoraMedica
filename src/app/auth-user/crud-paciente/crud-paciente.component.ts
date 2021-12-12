import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { CreatePacienteComponent } from '../components/create-paciente/create-paciente.component';
import { EditPacienteComponent } from '../components/edit-paciente/edit-paciente.component';

@Component({
  selector: 'app-crud-paciente',
  templateUrl: './crud-paciente.component.html',
  styleUrls: ['./crud-paciente.component.scss']
})
export class CrudPacienteComponent implements OnInit {

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
    this.usuarioService.getPacientes().subscribe(pacientes => {
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
    this.dialog.open(CreatePacienteComponent);
  }

  edit(paciente: Usuario){
    this.dialog.open(EditPacienteComponent, {
      data: paciente
    });
  }

  delete(paciente: Usuario){
    console.log(paciente);
  }

}
