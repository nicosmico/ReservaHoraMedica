import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/core/models/usuario.model';
import { CustomValidators } from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-create-personal',
  templateUrl: './create-personal.component.html',
  styleUrls: ['./create-personal.component.scss']
})
export class CreatePersonalComponent implements OnInit {

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
      rut: ['', [Validators.required, CustomValidators.rut]],
      nombre: ['', [Validators.required]],
      apellido1: ['', [Validators.required]],
      apellido2: ['', [Validators.required]],
      telefono: ['', [Validators.required, CustomValidators.telefono]],
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
}
