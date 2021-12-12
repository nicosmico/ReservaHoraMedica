import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HoraMedica } from 'src/app/core/models/hora-medica.model';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { ExamenService } from 'src/app/core/services/examen.service';
import { Examen } from 'src/app/core/models/examen.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import { BloqueHorario } from 'src/app/core/models/bloque-horario.model';
import { HoraMedicaService } from 'src/app/core/services/hora-medica.service';

@Component({
  selector: 'app-edit-hora-medica',
  templateUrl: './edit-hora-medica.component.html',
  styleUrls: ['./edit-hora-medica.component.scss']
})
export class EditHoraMedicaComponent implements OnInit {

  form: FormGroup;
  examenes: Examen[];
  personal: Usuario[];
  pacientes: Usuario[];
  horasDisponibles: BloqueHorario[]; // { hora: x, minutos: y }
  isHoraSelected: boolean = false;

  hora: BloqueHorario = {hora: this.data.fechaInicial.getHours(), minutos: this.data.fechaInicial.getMinutes()};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: HoraMedica,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private examenService: ExamenService,
    private horaMedicaService: HoraMedicaService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.fetchData();
    this.fetchHorasMedicasDisponibles();

    // Resetar horas al cambiar fecha
    this.fechaInicialField.valueChanges.subscribe(value => {
      this.fetchHorasMedicasDisponibles();
      this.horaField.reset(null);
    });
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      fechaInicial: [this.data.fechaInicial, [Validators.required]],
      hora: [this.hora, [Validators.required]],
      paciente: [this.data.paciente, [Validators.required]],
      examen: [this.data.examen, [Validators.required]],
      personalMedico: [this.data.personalMedico, [Validators.required]],
    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      // Setea la hora en en fechaInicial
      (this.fechaInicialField.value as Date).setHours((this.horaField.value as BloqueHorario).hora, (this.horaField.value as BloqueHorario).minutos);
      const horaMedica: HoraMedica = this.form.value;
      horaMedica.fechaFinal = new Date();
      horaMedica.fechaFinal.setTime(horaMedica.fechaInicial.getTime() + 30*60*1000);

      console.log(horaMedica);
    }
  }

  fetchData(){
    this.usuarioService.getPacientes().subscribe(pacientes=>this.pacientes=pacientes);
    this.usuarioService.getPersonal().subscribe(personal=>this.personal=personal);
    this.examenService.getExamenesDisponibles().subscribe(examenes=>this.examenes=examenes);
  }

  fetchHorasMedicasDisponibles(){
    this.horaMedicaService.getAvailableHorasMedicasByDate(this.fechaInicialField.value as Date).subscribe(horasMedicas => {
      this.horasDisponibles = horasMedicas;
      this.horasDisponibles.unshift(this.hora);
    });
  }

  get horaField(){
    return this.form.get('hora');
  }
  get fechaInicialField(){
    return this.form.get('fechaInicial');
  }

}
