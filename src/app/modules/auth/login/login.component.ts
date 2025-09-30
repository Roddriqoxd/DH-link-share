import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AuthFormContainerComponent} from '../../../shared/components/auth-form/auth-form-container.component';
import {InputIconDirective} from '../../../shared/directives/input-icon.directive';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {take} from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    AuthFormContainerComponent,
    InputIconDirective,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class LoginComponent {
  private _formBuilder: FormBuilder = inject(FormBuilder);
  private _authService: AuthService = inject(AuthService);

  public loginForm: FormGroup;

  constructor() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  public login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this._authService.login(this.loginForm.value)
      .pipe(take(1))
      .subscribe((isLogged) => {
        if (!isLogged) {
          this.loginForm.get('email')?.setErrors({authentication: true})
          this.loginForm.get('password')?.setErrors({authentication: true})
        }
      })
  }

  public isInvalid(name: string): boolean {
    const control = this.loginForm.get(name);
    return !!(control && control.invalid && control.touched);
  }

  public hasErrorByName(name: string, error: string): boolean {
    const control = this.loginForm.get(name);
    console.log(control)
    return !!(control && control.hasError(error) && control.touched);
  }
}
