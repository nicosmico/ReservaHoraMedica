import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Examen } from 'src/app/core/models/examen.model';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-examen',
  templateUrl: './edit-examen.component.html',
  styleUrls: ['./edit-examen.component.scss']
})
export class EditExamenComponent implements OnInit {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Examen,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      nombre: [this.data.nombre, [Validators.required]],
      disponible: [this.data.disponible, Validators.required]
    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const examen: Examen = this.form.value;

      console.log(examen);
    }
  }
}
