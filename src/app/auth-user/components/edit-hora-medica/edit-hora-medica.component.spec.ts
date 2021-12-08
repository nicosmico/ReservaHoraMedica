import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHoraMedicaComponent } from './edit-hora-medica.component';

describe('EditHoraMedicaComponent', () => {
  let component: EditHoraMedicaComponent;
  let fixture: ComponentFixture<EditHoraMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHoraMedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHoraMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
