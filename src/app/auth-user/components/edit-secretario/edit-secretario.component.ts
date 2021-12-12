import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthUser } from 'src/app/core/models/auth-user.model';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CustomValidators } from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-edit-secretario',
  templateUrl: './edit-secretario.component.html',
  styleUrls: ['./edit-secretario.component.scss']
})
export class EditSecretarioComponent implements OnInit {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AuthUser,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      contrasena: [this.data.contrasena, [Validators.required]],
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
      const secretario: AuthUser = this.form.value;

      console.log(secretario);
    }
  }
}
