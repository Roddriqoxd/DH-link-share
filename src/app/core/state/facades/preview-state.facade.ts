import {Injectable} from '@angular/core';
import {PreviewStore} from '../preview-state.store';
import {Observable} from 'rxjs';
import {DropdownOption} from '../../interfaces/dropdown-option.interface';

@Injectable()
export class PreviewStateFacade {

  constructor(private _previewStore: PreviewStore) {
  }

  public selectPreviewLinks(): Observable<DropdownOption[]> {
    return this._previewStore.links$
  }

  public setPreviewLinks(links: DropdownOption): void {
    this._previewStore.addLink(links)
  }
}
