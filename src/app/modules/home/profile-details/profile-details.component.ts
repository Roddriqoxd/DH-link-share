import {Component, inject} from '@angular/core';
import {InputIconDirective} from '../../../shared/directives/input-icon.directive';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';
import {combineLatest, map, Observable, take} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-details',
  imports: [
    InputIconDirective,
    AsyncPipe,
    ReactiveFormsModule
  ],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss',
  host: {
    style: 'height: 100%',
  }
})
export class ProfileDetailsComponent {
  public imageSrc$: Observable<string>;
  public profileForm!: FormGroup;

  private _previewFacade: PreviewStateFacade = inject(PreviewStateFacade);
  private _formBuilder: FormBuilder = inject(FormBuilder);

  constructor() {
    this.imageSrc$ = this._previewFacade.selectPhotoUrl()
      .pipe(map(key => localStorage.getItem(key) || ''))
    combineLatest([
      this._previewFacade.selectName(),
      this._previewFacade.selectLastName(),
      this._previewFacade.selectEmail()

    ]).pipe(take(1))
      .subscribe(([name, lastName, email]) => {
        debugger
        this.profileForm = this._formBuilder.group({
          firsName: [name, [Validators.required, Validators.minLength(3)]],
          lastName: [lastName, [Validators.required, Validators.minLength(3)]],
          email: [email, [Validators.required, Validators.email]],
        });
      })
  }

  public async saveImage(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      if (file.size > 1024 * 1024) {
        this._previewFacade.setPhotoUrl('')
        alert('The maximum size is 1MB');
        return;
      }
      const base64 = await this._convertToBase64(file);

      if (base64) {
        this._previewFacade.setPhotoUrl('')
        localStorage.setItem('imageSrc', base64 as string);
        this._previewFacade.setPhotoUrl('imageSrc')
      }
    }
  }

  private _convertToBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  public isInvalid(name: string): boolean {
    const control = this.profileForm.get(name);
    return !!(control && control.invalid && control.touched);
  }

  public hasErrorByName(name: string, error: string): boolean {
    const control = this.profileForm.get(name);
    return !!(control && control.hasError(error) && control.touched);
  }

  public saveInputValue(controlName: string): void {
    if (this.isInvalid(controlName)) return

    switch (controlName) {
      case 'email':
        this._previewFacade.setEmail(this.profileForm.get(controlName)?.value);
        break;
      case 'lastName':
        this._previewFacade.setLastName(this.profileForm.get(controlName)?.value);
        break;
      case 'firsName':
        this._previewFacade.setName(this.profileForm.get(controlName)?.value);
        break;
    }
  }
}
