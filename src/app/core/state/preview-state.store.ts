import {Inject, Injectable} from '@angular/core';
import {INITIAL_PREVIEW_STATE, PreviewState, TabState} from './store/preview-state.model';
import {ComponentStore} from '@ngrx/component-store';
import * as Updaters from './store/preview.reducers';
import * as Selectors from './store/preview.selectors';

@Injectable()
export class PreviewStore extends ComponentStore<PreviewState> {

  constructor(@Inject('IDENTIFIER') private _identifierId: string) {
    const storedState = localStorage.getItem(_identifierId);
    const INITIAL_STATE: PreviewState = storedState
      ? JSON.parse(storedState)
      : INITIAL_PREVIEW_STATE;

    INITIAL_STATE.tabActive = TabState.LINKS
    INITIAL_STATE.photoUrl = `www.${_identifierId}.com`
    super(INITIAL_STATE);
  }

  readonly allState$ = this.select(Selectors.selectAllState);
  readonly tabActive$ = this.select(Selectors.selectTabActive);
  readonly links$ = this.select(Selectors.selectLinks);
  readonly name$ = this.select(Selectors.selectName);
  readonly lastName$ = this.select(Selectors.selectLastName);
  readonly email$ = this.select(Selectors.selectEmail);
  readonly photoUrl$ = this.select(Selectors.selectPhotoUrl);

  readonly setName = this.updater(Updaters.setName);
  readonly setLastName = this.updater(Updaters.setLastName);
  readonly setEmail = this.updater(Updaters.setEmail);
  readonly setPhotoUrl = this.updater(Updaters.setPhotoUrl);
  readonly updatePlatformByPosition = this.updater(Updaters.updatePlatformByPosition);
  readonly setTabState = this.updater(Updaters.setTabState);
  readonly addLink = this.updater(Updaters.addLink);
  readonly removePlatformByPosition = this.updater(Updaters.removePlatformByPosition);
  readonly updateLinksPosition = this.updater(Updaters.updateLinksPosition);

  readonly resetState = this.updater(() => INITIAL_PREVIEW_STATE);
}
