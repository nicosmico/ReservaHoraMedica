import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HoraMedica } from 'src/app/core/models/hora-medica.model';

@Component({
  selector: 'app-edit-hora-medica',
  templateUrl: './edit-hora-medica.component.html',
  styleUrls: ['./edit-hora-medica.component.scss']
})
export class EditHoraMedicaComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      fechaInicial: ['', [Validators.required]],
      fechaTermino: ['', [Validators.required]],
      paciente: ['', [Validators.required]],
      examen: ['', [Validators.required]],
      personalMedico: ['', [Validators.required]],
    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const horaMedica: HoraMedica = this.form.value;

      console.log(horaMedica);
    }
  }

  get idField(){
    return this.form.get('id');
  }
  get fechaInicialField(){
    return this.form.get('fechaInicial');
  }
  get fechaFinalField(){
    return this.form.get('fechaFinal');
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

  get isIdFieldValid(){
    return (this.idField.touched || this.idField.dirty) && this.idField.valid;
  }
  get isIdFieldInvalid(){
    return (this.idField.touched || this.idField.dirty) && this.idField.invalid;
  }
  get isFechaInicialFieldValid(){
    return (this.fechaInicialField.touched || this.fechaInicialField.dirty) && this.fechaInicialField.valid;
  }
  get isFechaInicialFieldInvalid(){
    return (this.fechaInicialField.touched || this.fechaInicialField.dirty) && this.fechaInicialField.invalid;
  }
  get isFechaFinalFieldValid(){
    return (this.fechaFinalField.touched || this.fechaFinalField.dirty) && this.fechaFinalField.valid;
  }
  get isFechaFinalFieldInvalid(){
    return (this.fechaFinalField.touched || this.fechaFinalField.dirty) && this.fechaFinalField.invalid;
  }
  get isPacienteFieldValid(){
    return (this.pacienteField.touched || this.pacienteField.dirty) && this.pacienteField.valid;
  }
  get isPacienteFieldInvalid(){
    return (this.pacienteField.touched || this.pacienteField.dirty) && this.pacienteField.invalid;
  }
  get isExamenFieldValid(){
    return (this.examenField.touched || this.examenField.dirty) && this.examenField.valid;
  }
  get isExamenFieldInvalid(){
    return (this.examenField.touched || this.examenField.dirty) && this.examenField.invalid;
  }
  get isPersonalMedicoFieldValid(){
    return (this.personalMedicoField.touched || this.personalMedicoField.dirty) && this.personalMedicoField.valid;
  }
  get isPersonalMedicoFieldInvalid(){
    return (this.personalMedicoField.touched || this.personalMedicoField.dirty) && this.personalMedicoField.invalid;
  }

}
