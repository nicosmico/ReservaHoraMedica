import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHoraMedicaComponent } from './create-hora-medica.component';

describe('CreateHoraMedicaComponent', () => {
  let component: CreateHoraMedicaComponent;
  let fixture: ComponentFixture<CreateHoraMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHoraMedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHoraMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
