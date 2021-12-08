import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSecretarioComponent } from './edit-secretario.component';

describe('EditSecretarioComponent', () => {
  let component: EditSecretarioComponent;
  let fixture: ComponentFixture<EditSecretarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSecretarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSecretarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
