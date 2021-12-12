import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthUser } from 'src/app/core/models/auth-user.model';
import { CustomValidators } from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-create-secretario',
  templateUrl: './create-secretario.component.html',
  styleUrls: ['./create-secretario.component.scss']
})
export class CreateSecretarioComponent implements OnInit {

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
      contrasena: ['', [Validators.required]],
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
      const secretario: AuthUser = this.form.value;
      secretario.personal_activo = true;
      secretario.rol = 0;

      console.log(secretario);
    }
  }
}
