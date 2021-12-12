import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/core/models/usuario.model';
import { CustomValidators } from 'src/app/utils/custom-validators';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-personal',
  templateUrl: './edit-personal.component.html',
  styleUrls: ['./edit-personal.component.scss']
})
export class EditPersonalComponent implements OnInit {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      nombre: [this.data.nombre, [Validators.required]],
      apellido1: [this.data.apellido1, [Validators.required]],
      apellido2: [this.data.apellido2, [Validators.required]],
      telefono: [this.data.telefono, [Validators.required, CustomValidators.telefono]],
      correo: [this.data.correo??'', [Validators.required, Validators.email]],
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
