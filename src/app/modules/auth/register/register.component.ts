import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AuthFormContainerComponent} from "../../../shared/components/auth-form/auth-form-container.component";
import {InputIconDirective} from "../../../shared/directives/input-icon.directive";
import {Router, RouterLink} from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {take} from 'rxjs';
import {GlobalEventsService} from '../../../core/services/global-events.service';

@Component({
  selector: 'app-register',
  imports: [
    AuthFormContainerComponent,
    InputIconDirective,
    RouterLink,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export default class RegisterComponent {
  private _formBuilder: FormBuilder = inject(FormBuilder);
  private _authService: AuthService = inject(AuthService);
  private _globalEvent: GlobalEventsService = inject(GlobalEventsService);
  private _router: Router = inject(Router);

  public registerForm: FormGroup;

  constructor() {
    this.registerForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    }, {validators: this._passwordsMatchValidator});
  }

  private _passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : {notMach: true};
  }

  public registerUser(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this._authService.createNewUser(this.registerForm.value)
      .pipe(take(1))
      .subscribe(userCreated => {
        if (userCreated) {
          this._globalEvent.openMessageModal({
            message: 'Created successfully',
            isOpen: true,
            icon: 'pi-save'
          })
          this._router.navigate(['/auth/login']);
        } else {
          this.registerForm.get('email')?.setErrors({duplicated: true})
        }
      })
  }

  public isInvalid(name: string): boolean {
    const control = this.registerForm.get(name);
    return !!(control && control.invalid && control.touched);
  }

  public hasErrorByName(name: string, error: string): boolean {
    const control = this.registerForm.get(name);
    return !!(control && control.hasError(error) && control.touched);
  }
}
