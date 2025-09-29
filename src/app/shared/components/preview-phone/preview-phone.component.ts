import {Component, inject, Input} from '@angular/core';
import {LinkData} from '../../../core/interfaces/dropdown-option.interface';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';
import {map, Observable} from 'rxjs';
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
  @Input() previewView: boolean;

  public imageSrc$: Observable<string>;
  public firstname$: Observable<string>;
  public lastName$: Observable<string>;
  public email$: Observable<string>;
  public linksState$: Observable<LinkData[]>;

  private _previewFacade: PreviewStateFacade = inject(PreviewStateFacade);

  constructor() {
    this.previewView = false;
    this.imageSrc$ = this._previewFacade.selectPhotoUrl()
      .pipe(map(key => localStorage.getItem(key) || ''))
    this.firstname$ = this._previewFacade.selectName();
    this.lastName$ = this._previewFacade.selectLastName();
    this.email$ = this._previewFacade.selectEmail();
    this.linksState$ = this._previewFacade.selectPreviewLinks();
  }
}
