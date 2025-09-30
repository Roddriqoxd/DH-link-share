import {LinkData} from '../../interfaces/dropdown-option.interface';

export enum TabState {
  LINKS = 'LINKS',
  PROFILE = 'PROFILE',
}

export interface PreviewState {
  tabActive: TabState;
  linksData: LinkData[];
  name: string;
  lastName: string;
  email: string;
  photoUrl: string;
}

export const INITIAL_PREVIEW_STATE: PreviewState = {
  tabActive: TabState.LINKS,
  linksData: [],
  name: '',
  lastName: '',
  email: '',
  photoUrl: '',
};
