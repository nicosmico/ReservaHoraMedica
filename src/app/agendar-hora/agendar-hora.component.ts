import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BloqueHorario } from '../core/models/bloque-horario.model';

import { Examen } from '../core/models/examen.model';
import { HoraMedica } from '../core/models/hora-medica.model';
import { Usuario } from '../core/models/usuario.model';
import { ExamenService } from '../core/services/examen.service';
import { HoraMedicaService } from '../core/services/hora-medica.service';
import { UsuarioService } from '../core/services/usuario.service';

@Component({
  selector: 'app-agendar-hora',
  templateUrl: './agendar-hora.component.html',
  styleUrls: ['./agendar-hora.component.scss']
})
export class AgendarHoraComponent implements OnInit {
  form: FormGroup;
  selectedDate: Date | null;
  horasDisponibles: BloqueHorario[]; // { hora: x, minutos: y }
  isHoraSelected: boolean = false;
  
  examenes: Examen[];
  personal: Usuario[];
  
  selectedHora: String;

  constructor(
    private examenService: ExamenService,
    private formBuilder: FormBuilder,
    private horaMedicaService: HoraMedicaService,
    private usuarioService: UsuarioService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.fetchExamenes();
    this.fetchPersonalMedico();
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      fechaInicial: ["", Validators.required],
      fechaFinal: ["", Validators.required],
      examen: ["", Validators.required],
      personalMedico: ["", Validators.required],

      // paciente: ["", Validators.required],
      rut: ["", Validators.required],
      nombre: ["", Validators.required],
      apellido1: ["", Validators.required],
      apellido2: ["", Validators.required],
      telefono: ["", Validators.required],
      correo: ["", Validators.email],
    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid && this.isHoraSelected){
      console.log(this.form.value);

      const paciente: Usuario = {
        rut: this.form.get('rut').value,
        nombre: this.form.get('nombre').value,
        apellido1: this.form.get('apellido1').value,
        apellido2: this.form.get('apellido2').value,
        telefono: this.form.get('telefono').value,
        correo: this.form.get('correo').value,
        personal_activo: false
      };
      console.log(paciente);

      const horaMedica:HoraMedica = {
        fechaInicial: this.form.get('fechaInicial').value,
        fechaFinal: this.form.get('fechaFinal').value,
        personalMedico: this.form.get('personalMedico').value,
        examen: this.form.get('examen').value,
        paciente: this.form.get('rut').value
      };
      console.log(horaMedica);

    }
  }

  fetchExamenes(){
    this.examenService.getExamenesDisponibles().subscribe(examenes => this.examenes = examenes);
  }

  selectedDateChange(){
    this.form.controls['fechaInicial'].setValue(this.selectedDate);
    this.isHoraSelected = false;
    this.selectedHora = null;
    this.fetchHorasMedicasDisponibles();
  }

  fetchHorasMedicasDisponibles(){
    this.horaMedicaService.getAvailableHorasMedicasByDate(this.selectedDate).subscribe(horasMedicas => {
      this.horasDisponibles = horasMedicas;
      console.log(this.horasDisponibles);
    });
  }

  selectHora(bloque: BloqueHorario){
    this.selectedDate.setHours(bloque.hora);
    this.selectedDate.setMinutes(bloque.minutos);
    this.form.controls['fechaInicial'].setValue(this.selectedDate);
    this.isHoraSelected = true;
    this.selectedHora = bloque.hora + ':' + (bloque.minutos == 0? '00': bloque.minutos);

    let fechaFinal = new Date();
    fechaFinal.setTime(this.selectedDate.getTime() + 30*60*1000); // 30 minutos más tarde
    this.form.controls['fechaFinal'].setValue(fechaFinal);
  }

  fetchPersonalMedico(){ 
    this.usuarioService.getPersonal().subscribe(personal => this.personal = personal);
  }



  // Getters para los formualrios 
  get examenField(){
    return this.form.get('examen');
  }
  get personalMedicoField(){
    return this.form.get('personalMedico');
  }
}

