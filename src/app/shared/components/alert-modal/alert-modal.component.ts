import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {GlobalEventsService} from '../../../core/services/global-events.service';
import {AlertMessage} from '../../../core/interfaces/alert-message.interface';

@Component({
  selector: 'app-alert-modal',
  imports: [],
  templateUrl: './alert-modal.component.html',
  styleUrl: './alert-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'alert-modal',
  }
})
export class AlertModalComponent {
  public messageModalState: Signal<Partial<AlertMessage>>;

  private _globalEvent: GlobalEventsService = inject(GlobalEventsService);

  constructor() {
    this.messageModalState = this._globalEvent.messageModalState
  }
}
