import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HoraMedica } from 'src/app/core/models/hora-medica.model';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HoraMedicaService } from 'src/app/core/services/hora-medica.service';
import { CreateHoraMedicaComponent } from '../components/create-hora-medica/create-hora-medica.component';
import { EditHoraMedicaComponent } from '../components/edit-hora-medica/edit-hora-medica.component';

@Component({
  selector: 'app-crud-hora-medica',
  templateUrl: './crud-hora-medica.component.html',
  styleUrls: ['./crud-hora-medica.component.scss']
})
export class CrudHoraMedicaComponent implements OnInit {

  data: HoraMedica[];

  displayedColumns: string[] = ['paciente', 'personal', 'fecha_inicial', 'acciones'];
  dataSource: MatTableDataSource<HoraMedica>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private horaMedicaService: HoraMedicaService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.horaMedicaService.getHorasMedicas().subscribe(horasMedicas => {
      this.data = horasMedicas;
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
    this.dialog.open(CreateHoraMedicaComponent);
  }

  edit(horaMedica: HoraMedica){
    this.dialog.open(EditHoraMedicaComponent, {
      data: horaMedica
    });
  }

  delete(horaMedica: HoraMedica){
    this.horaMedicaService.deleteHoraMedica(horaMedica).subscribe(resp => this.fetchData());
  }

}
