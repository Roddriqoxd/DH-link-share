import {Injectable} from '@angular/core';
import {PreviewStore} from '../preview-state.store';
import {map, Observable} from 'rxjs';
import {LinkDataUpdate, DropPosition, LinkData} from '../../interfaces/dropdown-option.interface';
import {PreviewState, TabState} from '../models/preview-state.model';

@Injectable()
export class PreviewStateFacade {

  constructor(private _previewStore: PreviewStore) {
  }

  public selectTabState(): Observable<TabState> {
    return this._previewStore.tabActive$
  }

  public selectState(): Observable<PreviewState> {
    return this._previewStore.allState$
  }

  public selectPreviewLinks(): Observable<LinkData[]> {
    return this._previewStore.links$
  }

  public selectLinkByPosition(position: number): Observable<LinkData> {
    return this._previewStore.links$.pipe(map((link: LinkData[]) => link[position]))
  }

  public setTabState(tabState: TabState): void {
    this._previewStore.setTabState(tabState);
  }

  public setPreviewLinks(links: LinkData): void {
    this._previewStore.addLink(links)
  }

  public updateLinksPosition({previousIndex, currentIndex}: DropPosition): void {
    this._previewStore.updateLinksPosition({previousIndex, currentIndex});
  }

  public updatePlatformByPosition(dropdownOptionUpdate: LinkDataUpdate): void {
    this._previewStore.updatePlatformByPosition(dropdownOptionUpdate);
  }

  public removePlatformByPosition(position: number): void {
    this._previewStore.removePlatformByPosition(position);
  }
}
