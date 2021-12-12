import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthUser } from 'src/app/core/models/auth-user.model';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CustomValidators } from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AuthUser,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  private buildForm(){

    this.form = this.formBuilder.group({
      contrasena: [this.data.contrasena, [Validators.required]],
      nombre: [this.data.nombre, [Validators.required]],
      apellido1: [this.data.apellido1, [Validators.required]],
      apellido2: [this.data.apellido2, [Validators.required]],
      telefono: [this.data.telefono, [Validators.required, CustomValidators.telefono]],
      correo: [this.data.correo, [Validators.required, Validators.email]],
    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const admin: AuthUser = this.form.value;

      console.log(admin);
    }
  }
}
