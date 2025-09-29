import {Component, inject, Input} from '@angular/core';
import {InputIconDirective} from '../../directives/input-icon.directive';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';
import {Platform} from '../../../core/interfaces/dropdown-option.interface';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {take} from 'rxjs';

@Component({
  selector: 'app-link-option',
  imports: [
    InputIconDirective,
    DropdownComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './link-option.component.html',
  styleUrl: './link-option.component.scss'
})
export class LinkOptionComponent {
  @Input() set position(position: number) {
    this.index = position;
    this._previewFacade.selectPreviewLinks()
      .pipe(take(1))
      .subscribe((data) => this.inputForm.setValue(data[position]?.link || ''))
  };

  public index: number;
  public inputForm: FormControl;

  private _previewFacade: PreviewStateFacade = inject(PreviewStateFacade);

  constructor() {
    this.index = 0
    this.inputForm = new FormControl('', [
      Validators.required,
      Validators.pattern('^(https?:\\/\\/)?([\\w-]+(\\.[\\w-]+)+)(\\/[\\w-]*)*(\\?.*)?(#.*)?$')
    ]);
  }

  public selectedOption(dropDownOption: Platform): void {
    this._previewFacade.updatePlatformByPosition({
      position: this.index,
      platform: dropDownOption
    })
  }

  public removeItem(): void {
    this._previewFacade.removePlatformByPosition(this.index)
  }

  public updateLink(): void {
    this._previewFacade.updatePlatformByPosition({
      position: this.index,
      link: this.isInvalid() ? '' : this.inputForm.value
    })
  }

  public isInvalid(): boolean {
    return (this.inputForm && this.inputForm.invalid && this.inputForm.touched);
  }

  public hasErrorByName(error: string): boolean {
    return (this.inputForm && this.inputForm.hasError(error) && this.inputForm.touched);
  }
}
