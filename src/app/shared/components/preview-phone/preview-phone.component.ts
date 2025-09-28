import {Component, inject, OnInit} from '@angular/core';
import {DropdownOption} from '../../../core/interfaces/dropdown-option.interface';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';
import {Observable} from 'rxjs';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-preview-phone',
  imports: [
    CommonModule,
  ],
  templateUrl: './preview-phone.component.html',
  styleUrl: './preview-phone.component.scss'
})
export class PreviewPhoneComponent implements OnInit {
  public linksState$: Observable<DropdownOption[]>;

  private _previewFacade: PreviewStateFacade = inject(PreviewStateFacade);

  public linksOption: DropdownOption[] = [
    {iconKey: 'pi-github', label: 'GitHub', color: 'black', id: 1},
    {iconKey: 'pi-youtube', label: 'Youtube', color: 'red', id: 2},
    {iconKey: 'pi-linkedin', label: 'Linkedin', color: 'blue', id: 3},
  ];

  private _LINK_DEFAULT: DropdownOption = {
    color: 'var(--grey-border-color)',
    label: '',
    iconKey: '',
    id: 4
  }

  constructor() {
    this.linksState$ = this._previewFacade.selectPreviewLinks();
  }

  ngOnInit() {
  }

  private updateLinksOption(): void {
    if (this.linksOption.length < 5) {
      const linksNumber = 5 - this.linksOption.length;
      for (let i = 0; i < linksNumber; i++) {
        this.linksOption.push(this._LINK_DEFAULT)
      }
    }
  }
}
