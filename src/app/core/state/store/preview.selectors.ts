import {PreviewState} from './preview-state.model';

export const selectAllState = (state: PreviewState) => state;
export const selectTabActive = (state: PreviewState) => state.tabActive;
export const selectLinks = (state: PreviewState) => state.linksData;
export const selectName = (state: PreviewState) => state.name;
export const selectLastName = (state: PreviewState) => state.lastName;
export const selectEmail = (state: PreviewState) => state.email;
export const selectPhotoUrl = (state: PreviewState) => state.photoUrl;
