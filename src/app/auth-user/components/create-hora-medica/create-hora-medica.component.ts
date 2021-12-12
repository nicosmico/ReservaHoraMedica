import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BloqueHorario } from 'src/app/core/models/bloque-horario.model';
import { Examen } from 'src/app/core/models/examen.model';
import { HoraMedica } from 'src/app/core/models/hora-medica.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import { ExamenService } from 'src/app/core/services/examen.service';
import { HoraMedicaService } from 'src/app/core/services/hora-medica.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-create-hora-medica',
  templateUrl: './create-hora-medica.component.html',
  styleUrls: ['./create-hora-medica.component.scss']
})
export class CreateHoraMedicaComponent implements OnInit {

  form: FormGroup;
  examenes: Examen[];
  personal: Usuario[];
  pacientes: Usuario[];
  horasDisponibles: BloqueHorario[]; // { hora: x, minutos: y }
  isHoraSelected: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private examenService: ExamenService,
    private horaMedicaService: HoraMedicaService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.fetchData();
    this.fechaInicialField.valueChanges.subscribe(value => {
      this.fetchHorasMedicasDisponibles();
      this.horaField.reset(null);
    });
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      fechaInicial: [, [Validators.required]],
      hora: ['', [Validators.required]],
      paciente: ['', [Validators.required]],
      examen: ['', [Validators.required]],
      personalMedico: ['', [Validators.required]],
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
      console.log(this.horasDisponibles);
    });
  }

  get horaField(){
    return this.form.get('hora');
  }
  get fechaInicialField(){
    return this.form.get('fechaInicial');
  }
  get pacienteField(){
    return this.form.get('paciente');
  }
  get examenField(){
    return this.form.get('examen');
  }
  get personalMedicoField(){
    return this.form.get('personalMedico');
  }
}
