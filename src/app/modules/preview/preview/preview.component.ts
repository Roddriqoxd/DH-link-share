import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {PreviewPhoneComponent} from '../../../shared/components/preview-phone/preview-phone.component';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PreviewStore} from '../../../core/state/preview-state.store';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';
import {saveStateToStorageByIdentifier} from '../../../core/functions/save-state-to-storage';
import {generateRandomIdentifier} from '../../../core/functions/generate-random-identifier';
import {GlobalEventsService} from '../../../core/services/global-events.service';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PreviewComponent {
  public isSharedLink: boolean;

  private _urlBase: string;
  private _identifier: string;
  private _globalEvent: GlobalEventsService = inject(GlobalEventsService);
  private _route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.isSharedLink = !!this._route.snapshot.paramMap.get('id');
    this._identifier = generateRandomIdentifier();
    this._urlBase = `${window.location.origin}/preview/${this._identifier}`
  }

  public async copyUrl(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this._urlBase);
      saveStateToStorageByIdentifier(this._identifier);
      this._globalEvent.openMessageModal({
        message: 'The link has been copied to your clipboard!',
        isOpen: true,
        icon: 'pi-link'
      })
    } catch (err) {
      console.error('Error:', err);
    }
  }
}
