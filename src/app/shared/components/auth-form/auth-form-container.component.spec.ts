import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFormContainerComponent } from './auth-form-container.component';

describe('AuthFormComponent', () => {
  let component: AuthFormContainerComponent;
  let fixture: ComponentFixture<AuthFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
