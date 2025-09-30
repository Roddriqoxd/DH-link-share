import {Injectable} from '@angular/core';
import {PreviewStore} from '../preview-state.store';
import {map, Observable} from 'rxjs';
import {DropPosition, LinkData, LinkDataUpdate} from '../../interfaces/dropdown-option.interface';
import {PreviewState, TabState} from '../store/preview-state.model';

@Injectable({providedIn: 'root'})
export class PreviewStateFacade {

  constructor(private _previewStore: PreviewStore) {
  }

  public selectTabState(): Observable<TabState> {
    return this._previewStore.tabActive$
  }

  public selectName(): Observable<string> {
    return this._previewStore.name$;
  }

  public selectLastName(): Observable<string> {
    return this._previewStore.lastName$;
  }

  public selectEmail(): Observable<string> {
    return this._previewStore.email$;
  }

  public selectPhotoUrl(): Observable<string> {
    return this._previewStore.photoUrl$;
  }

  public setName(name: string): void {
    this._previewStore.setName(name);
  }

  public setLastName(lastName: string): void {
    this._previewStore.setLastName(lastName);
  }

  public setEmail(email: string): void {
    this._previewStore.setEmail(email);
  }

  public setPhotoUrl(photoUrl: string): void {
    this._previewStore.setPhotoUrl(photoUrl);
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
