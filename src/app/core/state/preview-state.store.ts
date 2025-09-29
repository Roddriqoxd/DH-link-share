import {Inject, Injectable} from '@angular/core';
import {INITIAL_PREVIEW_STATE, PreviewState, TabState} from './models/preview-state.model';
import {DropPosition, LinkData, LinkDataUpdate} from '../interfaces/dropdown-option.interface';
import {ComponentStore} from '@ngrx/component-store';
import {moveItemInArray} from '@angular/cdk/drag-drop';

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

  readonly allState$ = this.select(state => state);
  readonly tabActive$ = this.select(state => state.tabActive);
  readonly links$ = this.select(state => state.linksData);
  readonly name$ = this.select(state => state.name);
  readonly lastName$ = this.select(state => state.lastName);
  readonly email$ = this.select(state => state.email);
  readonly photoUrl$ = this.select(state => state.photoUrl)

  readonly setName = this.updater((state, name: string) => ({
    ...state,
    name,
  }));

  readonly setLastName = this.updater((state, lastName: string) => ({
    ...state,
    lastName,
  }));

  readonly setEmail = this.updater((state, email: string) => ({
    ...state,
    email,
  }));

  readonly setPhotoUrl = this.updater((state, photoUrl: string) => ({
    ...state,
    photoUrl,
  }));

  readonly updatePlatformByPosition = this.updater((state, {position, platform, link}: LinkDataUpdate) => ({
      ...state,
      linksData: state.linksData.map((linkData, index) => {
        if (index === position) {
          platform && (linkData.platform = platform);
          link && (linkData.link = link);
          return linkData
        } else {
          return linkData
        }
      }),
    })
  );

  readonly setTabState = this.updater((state, tab: TabState) => ({
    ...state,
    tabActive: tab,
  }));

  readonly addLink = this.updater((state, link: LinkData) => ({
    ...state,
    linksData: [...state.linksData, link]
  }));

  readonly removePlatformByPosition = this.updater((state, position: number) => ({
    ...state,
    linksData: state.linksData.filter((link, index) => index !== position)
  }));

  readonly updateLinksPosition = this.updater((state, {previousIndex, currentIndex}: DropPosition) => {
      const linksData = [...state.linksData];
      moveItemInArray(linksData, previousIndex, currentIndex);
      return {...state, linksData};
    }
  );

  readonly resetState = this.updater(() => INITIAL_PREVIEW_STATE);
}
