import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/core/models/usuario.model';

@Component({
  selector: 'app-edit-personal',
  templateUrl: './edit-personal.component.html',
  styleUrls: ['./edit-personal.component.scss']
})
export class EditPersonalComponent implements OnInit {

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
      rut: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido1: ['', [Validators.required]],
      apellido2: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const personal: Usuario = this.form.value;
      personal.personal_activo = true;

      console.log(personal);
    }
  }

  get rutField(){
    return this.form.get('rut');
  }
  get nombreField(){
    return this.form.get('nombre');
  }
  get apellido1Field(){
    return this.form.get('apellido1');
  }
  get apellido2Field(){
    return this.form.get('apellido2');
  }
  get telefonoField(){
    return this.form.get('telefono');
  }
  get correoField(){
    return this.form.get('correo');
  }

  get isRutFieldValid(){
    return (this.rutField.touched || this.rutField.dirty) && this.rutField.valid;
  }
  get isRutFieldInvalid(){
    return (this.rutField.touched || this.rutField.dirty) && this.rutField.invalid;
  }
  get isNombreFieldValid(){
    return (this.nombreField.touched || this.nombreField.dirty) && this.nombreField.valid;
  }
  get isNombreFieldInvalid(){
    return (this.nombreField.touched || this.nombreField.dirty) && this.nombreField.invalid;
  }
  get isApellido1FieldValid(){
    return (this.apellido1Field.touched || this.apellido1Field.dirty) && this.apellido1Field.valid;
  }
  get isApellido1FieldInvalid(){
    return (this.apellido1Field.touched || this.apellido1Field.dirty) && this.apellido1Field.invalid;
  }
  get isApellido2FieldValid(){
    return (this.apellido2Field.touched || this.apellido2Field.dirty) && this.apellido2Field.valid;
  }
  get isApellido2FieldInvalid(){
    return (this.apellido2Field.touched || this.apellido2Field.dirty) && this.apellido2Field.invalid;
  }
  get isTelefonoFieldValid(){
    return (this.telefonoField.touched || this.telefonoField.dirty) && this.telefonoField.valid;
  }
  get isTelefonoFieldInvalid(){
    return (this.telefonoField.touched || this.telefonoField.dirty) && this.telefonoField.invalid;
  }
  get isCorreoFieldValid(){
    return (this.correoField.touched || this.correoField.dirty) && this.correoField.valid;
  }
  get isCorreoFieldInvalid(){
    return (this.correoField.touched || this.correoField.dirty) && this.correoField.invalid;
  }

}
