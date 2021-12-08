import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudHoraMedicaComponent } from './crud-hora-medica.component';

describe('CrudHoraMedicaComponent', () => {
  let component: CrudHoraMedicaComponent;
  let fixture: ComponentFixture<CrudHoraMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudHoraMedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudHoraMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
