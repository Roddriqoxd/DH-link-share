import {PreviewState} from '../state/models/preview-state.model';

export function saveTabsToStorage(state: PreviewState): void {
  const stateStorage = localStorage.getItem('state');
  let newState: PreviewState = state;
  if (stateStorage) {
    newState = JSON.parse(stateStorage);
    newState.linksData = state.linksData;
  }
  localStorage.setItem('state', JSON.stringify(newState));
}

export function saveProfileInfo(state: PreviewState): void {
  const stateStorage = localStorage.getItem('state');
  let newState: PreviewState = state;
  if (stateStorage) {
    const oldState = JSON.parse(stateStorage);
    oldState.linksData.length && (newState.linksData = oldState.linksData);

  }
  localStorage.setItem('state', JSON.stringify(newState));
}
