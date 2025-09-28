import {Injectable} from '@angular/core';
import {PreviewStore} from '../preview-state.store';
import {map, Observable} from 'rxjs';
import {DropdownOptionUpdate, DropPosition, LinkData} from '../../interfaces/dropdown-option.interface';

@Injectable()
export class PreviewStateFacade {

  constructor(private _previewStore: PreviewStore) {
  }

  public selectPreviewLinks(): Observable<LinkData[]> {
    return this._previewStore.links$
  }

  public selectLinkByPosition(position: number): Observable<LinkData> {
    return this._previewStore.links$.pipe(map((link: LinkData[]) => link[position]))
  }

  public setPreviewLinks(links: LinkData): void {
    this._previewStore.addLink(links)
  }

  public updateLinksPosition({previousIndex, currentIndex}: DropPosition): void {
    this._previewStore.updateLinksPosition({previousIndex, currentIndex});
  }

  public updatePlatformByPosition(dropdownOptionUpdate: DropdownOptionUpdate): void {
    this._previewStore.updatePlatformByPosition(dropdownOptionUpdate);
  }

  public removePlatformByPosition(position: number): void {
    this._previewStore.removePlatformByPosition(position);
  }
}
