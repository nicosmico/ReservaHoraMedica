import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserTemplateComponent } from './auth-user-template.component';

describe('AuthUserTemplateComponent', () => {
  let component: AuthUserTemplateComponent;
  let fixture: ComponentFixture<AuthUserTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthUserTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUserTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
