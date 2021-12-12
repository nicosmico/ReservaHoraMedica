import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Examen } from 'src/app/core/models/examen.model';

@Component({
  selector: 'app-create-examen',
  templateUrl: './create-examen.component.html',
  styleUrls: ['./create-examen.component.scss']
})
export class CreateExamenComponent implements OnInit {

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
      nombre: ['', [Validators.required]],
    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const examen: Examen = this.form.value;
      examen.disponible = true;

      console.log(examen);
    }
  }
}
