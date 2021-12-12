import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Examen } from 'src/app/core/models/examen.model';
import { ExamenService } from 'src/app/core/services/examen.service';
import { CreateExamenComponent } from '../components/create-examen/create-examen.component';
import { EditExamenComponent } from '../components/edit-examen/edit-examen.component';

@Component({
  selector: 'app-crud-examen',
  templateUrl: './crud-examen.component.html',
  styleUrls: ['./crud-examen.component.scss']
})
export class CrudExamenComponent implements OnInit {

  data: Examen[];

  displayedColumns: string[] = ['id', 'nombre', 'disponible', 'acciones'];
  dataSource: MatTableDataSource<Examen>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private examenService: ExamenService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.examenService.getExamenes().subscribe(examenes => {
      this.data = examenes;
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
    this.dialog.open(CreateExamenComponent);
  }

  edit(examen: Examen){
    this.dialog.open(EditExamenComponent, {
      data: examen
    });
  }

  delete(examen: Examen){
    this.examenService.deleteExamen(examen).subscribe(resp => this.fetchData());
  }

}
