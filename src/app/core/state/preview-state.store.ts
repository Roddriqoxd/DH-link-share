import {Injectable} from '@angular/core';
import {INITIAL_PREVIEW_STATE, PreviewState} from './models/preview-state.model';
import {DropdownOptionUpdate, DropPosition, LinkData} from '../interfaces/dropdown-option.interface';
import {ComponentStore} from '@ngrx/component-store';
import {moveItemInArray} from '@angular/cdk/drag-drop';

@Injectable()
export class PreviewStore extends ComponentStore<PreviewState> {

  constructor() {
    super(INITIAL_PREVIEW_STATE);
  }

  readonly allState$ = this.select(state => state);
  readonly tabActive$ = this.select(state => state.tabActive);
  readonly links$ = this.select(state => state.linksData);
  readonly name$ = this.select(state => state.name);
  readonly lastName$ = this.select(state => state.lastName);
  readonly email$ = this.select(state => state.email);
  readonly photoUrl$ = this.select(state => state.photoUrl)

  readonly updatePlatformByPosition = this.updater((state, {position, dropdownOption}: DropdownOptionUpdate) => ({
      ...state,
        linksData: state.linksData.map((link, index) =>
        index === position ? {link: '', platform: dropdownOption, position: 0} : link
      ),
    })
  );

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
