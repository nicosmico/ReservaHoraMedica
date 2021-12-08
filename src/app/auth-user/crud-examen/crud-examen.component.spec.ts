import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudExamenComponent } from './crud-examen.component';

describe('CrudExamenComponent', () => {
  let component: CrudExamenComponent;
  let fixture: ComponentFixture<CrudExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
