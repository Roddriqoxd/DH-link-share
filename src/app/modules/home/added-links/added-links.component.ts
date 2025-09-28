import {Component, inject} from '@angular/core';
import {StartedMessageComponent} from '../../../shared/components/started-message/started-message.component';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-added-links',
  imports: [
    StartedMessageComponent
  ],
  templateUrl: './added-links.component.html',
  styleUrl: './added-links.component.scss',
  host: {
    style: 'height: 100%',
  }
})
export class AddedLinksComponent {
  private _previewFacade: PreviewStateFacade = inject(PreviewStateFacade);

  constructor() {
    this._previewFacade.selectPreviewLinks()
      .subscribe(previewLinks => {
        console.log(previewLinks)
      });
  }

  public addNewLink(): void {
    this._previewFacade.setPreviewLinks({iconKey: '', label: '', color: ''},)
  }
}
