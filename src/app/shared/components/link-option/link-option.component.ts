import {Component, inject, Input} from '@angular/core';
import {InputIconDirective} from '../../directives/input-icon.directive';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';
import {Platform} from '../../../core/interfaces/dropdown-option.interface';

@Component({
  selector: 'app-link-option',
  imports: [
    InputIconDirective,
    DropdownComponent
  ],
  templateUrl: './link-option.component.html',
  styleUrl: './link-option.component.scss'
})
export class LinkOptionComponent {
  @Input() position: number = 0;

  private _previewFacade: PreviewStateFacade = inject(PreviewStateFacade);

  constructor() {
  }

  public selectedOption(dropDownOption: Platform): void {
    this._previewFacade.updatePlatformByPosition({
      position: this.position,
      dropdownOption: dropDownOption
    })
  }

  public removeItem(): void {
    this._previewFacade.removePlatformByPosition(this.position)
  }
}
