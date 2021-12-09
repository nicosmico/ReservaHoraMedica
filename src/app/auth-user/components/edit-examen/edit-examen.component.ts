import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Examen } from 'src/app/core/models/examen.model';

@Component({
  selector: 'app-edit-examen',
  templateUrl: './edit-examen.component.html',
  styleUrls: ['./edit-examen.component.scss']
})
export class EditExamenComponent implements OnInit {

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
      nombre: ['', [Validators.required]],
      disponible: ['', Validators.required]
    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const examen: Examen = this.form.value;

      console.log(examen);
    }
  }

  get idField(){
    return this.form.get('id');
  }
  get nombreField(){
    return this.form.get('nombre');
  }

  get isIdFieldValid(){
    return (this.idField.touched || this.idField.dirty) && this.idField.valid;
  }
  get isIdFieldInvalid(){
    return (this.idField.touched || this.idField.dirty) && this.idField.invalid;
  }
  get isNombreFieldValid(){
    return (this.nombreField.touched || this.nombreField.dirty) && this.nombreField.valid;
  }
  get isNombreFieldInvalid(){
    return (this.nombreField.touched || this.nombreField.dirty) && this.nombreField.invalid;
  }

}
