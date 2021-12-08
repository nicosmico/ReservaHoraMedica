import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSecretarioComponent } from './create-secretario.component';

describe('CreateSecretarioComponent', () => {
  let component: CreateSecretarioComponent;
  let fixture: ComponentFixture<CreateSecretarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSecretarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSecretarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
