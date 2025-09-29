import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {take, timer} from 'rxjs';
import {AlertMessage} from '../interfaces/alert-message.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalEventsService {
  private _openMessageModalState: WritableSignal<Partial<AlertMessage>>

  public messageModalState: Signal<Partial<AlertMessage>>;

  constructor() {
    this._openMessageModalState = signal<Partial<AlertMessage>>({isOpen: false});
    this.messageModalState = this._openMessageModalState.asReadonly();
  }

  public openMessageModal(alertMessage: Partial<AlertMessage>): void {
    this._openMessageModalState.set(alertMessage);

    timer(2000)
      .pipe(take(1))
      .subscribe(() => this._openMessageModalState.set({isOpen: false}));
  }
}
