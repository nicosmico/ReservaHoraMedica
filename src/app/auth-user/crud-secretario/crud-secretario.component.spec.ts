import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSecretarioComponent } from './crud-secretario.component';

describe('CrudSecretarioComponent', () => {
  let component: CrudSecretarioComponent;
  let fixture: ComponentFixture<CrudSecretarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSecretarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSecretarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
