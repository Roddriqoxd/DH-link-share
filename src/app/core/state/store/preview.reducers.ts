import {PreviewState, TabState} from './preview-state.model';
import {DropPosition, LinkData, LinkDataUpdate} from '../../interfaces/dropdown-option.interface';
import {moveItemInArray} from '@angular/cdk/drag-drop';

export const setName = (state: PreviewState, name: string): PreviewState => ({
  ...state,
  name,
});

export const setLastName = (state: PreviewState, lastName: string): PreviewState => ({
  ...state,
  lastName,
});

export const setEmail = (state: PreviewState, email: string): PreviewState => ({
  ...state,
  email,
});

export const setPhotoUrl = (state: PreviewState, photoUrl: string): PreviewState => ({
  ...state,
  photoUrl,
});

export const updatePlatformByPosition = (
  state: PreviewState,
  {position, platform, link}: LinkDataUpdate
): PreviewState => ({
  ...state,
  linksData: state.linksData.map((linkData, index) =>
    index === position
      ? {...linkData, ...(platform && {platform}), ...(link && {link})}
      : linkData
  ),
});

export const setTabState = (state: PreviewState, tab: TabState): PreviewState => ({
  ...state,
  tabActive: tab,
});

export const addLink = (state: PreviewState, link: LinkData): PreviewState => ({
  ...state,
  linksData: [...state.linksData, link],
});

export const removePlatformByPosition = (state: PreviewState, position: number): PreviewState => ({
  ...state,
  linksData: state.linksData.filter((_, index) => index !== position),
});

export const updateLinksPosition = (
  state: PreviewState,
  {previousIndex, currentIndex}: DropPosition
): PreviewState => {
  const linksData = [...state.linksData];
  moveItemInArray(linksData, previousIndex, currentIndex);
  return {...state, linksData};
};
