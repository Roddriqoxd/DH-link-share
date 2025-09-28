import {Injectable} from '@angular/core';
import {INITIAL_PREVIEW_STATE, PreviewState} from './models/preview-state.model';
import {DropdownOption, DropPosition} from '../interfaces/dropdown-option.interface';
import {ComponentStore} from '@ngrx/component-store';
import {moveItemInArray} from '@angular/cdk/drag-drop';

@Injectable()
export class PreviewStore extends ComponentStore<PreviewState> {

  constructor() {
    super(INITIAL_PREVIEW_STATE);
  }

  readonly allState$ = this.select(state => state);
  readonly tabActive$ = this.select(state => state.tabActive);
  readonly links$ = this.select(state => state.links);
  readonly name$ = this.select(state => state.name);
  readonly lastName$ = this.select(state => state.lastName);
  readonly email$ = this.select(state => state.email);
  readonly photoUrl$ = this.select(state => state.photoUrl)

  readonly updateState = this.updater((state, updates: Partial<PreviewState>) => ({
    ...state,
    ...updates
  }));

  readonly updateLinks = this.updater((state, links: DropdownOption[]) => ({
    ...state,
    links
  }));

  readonly addLink = this.updater((state, link: DropdownOption) => ({
    ...state,
    links: [...state.links, link]
  }));

  readonly removeLinkByValue = this.updater((state, value: string) => ({
    ...state,
    links: state.links.filter(link => link.label !== value)
  }));

  readonly moveLink = this.updater((state, {previousIndex, currentIndex}: DropPosition) => {
    const links = [...state.links];
    moveItemInArray(links, previousIndex, currentIndex);
    return {...state, links};
  });

  readonly resetState = this.updater(() => INITIAL_PREVIEW_STATE);
}
