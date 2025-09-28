import {DropdownOption} from '../../interfaces/dropdown-option.interface';

export interface PreviewState {
  tabActive: string;
  links: DropdownOption[];
  name: string;
  lastName: string;
  email: string;
  photoUrl: string;
}

export const INITIAL_PREVIEW_STATE: PreviewState = {
  tabActive: 'LINKS',
  links: [],
  name: '',
  lastName: '',
  email: '',
  photoUrl: ''
};
