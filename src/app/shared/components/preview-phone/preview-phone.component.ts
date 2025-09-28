import {Component, inject} from '@angular/core';
import {LinkData} from '../../../core/interfaces/dropdown-option.interface';
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
export class PreviewPhoneComponent {
  public linksState$: Observable<LinkData[]>;

  private _previewFacade: PreviewStateFacade = inject(PreviewStateFacade);

  constructor() {
    this.linksState$ = this._previewFacade.selectPreviewLinks();
  }
}
