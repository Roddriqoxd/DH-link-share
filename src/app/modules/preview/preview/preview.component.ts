import {Component} from '@angular/core';
import {PreviewPhoneComponent} from '../../../shared/components/preview-phone/preview-phone.component';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PreviewStore} from '../../../core/state/preview-state.store';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';
import {saveStateToStorageByIdentifier} from '../../../core/functions/save-state-to-storage';
import {generateRandomIdentifier} from '../../../core/functions/generate-random-identifier';

@Component({
  selector: 'app-preview',
  imports: [
    PreviewPhoneComponent,
    RouterLink
  ],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
  providers: [
    PreviewStore,
    {
      provide: 'IDENTIFIER',
      deps: [ActivatedRoute],
      useFactory: (route: ActivatedRoute) => {
        return route.snapshot.paramMap.get('id') ?? 'state';
      }
    },
    PreviewStateFacade
  ]
})
export default class PreviewComponent {
  private _urlBase: string;
  private _identifier: string;

  constructor() {
    this._identifier = generateRandomIdentifier();
    this._urlBase = `${window.location.origin}/preview/${this._identifier}`
  }

  public async copyUrl(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this._urlBase);
      saveStateToStorageByIdentifier(this._identifier);
      alert("Copied to clipboard");
    } catch (err) {
      console.error('Error:', err);
    }
  }
}
