import {LinkData} from '../../interfaces/dropdown-option.interface';

export interface PreviewState {
  tabActive: string;
  linksData: LinkData[];
  name: string;
  lastName: string;
  email: string;
  photoUrl: string;
}

export const INITIAL_PREVIEW_STATE: PreviewState = {
  tabActive: 'LINKS',
  linksData: [],
  name: '',
  lastName: '',
  email: '',
  photoUrl: ''
};
