import {Component, inject, OnInit} from '@angular/core';
import {StartedMessageComponent} from '../../../shared/components/started-message/started-message.component';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';
import {LinkData} from '../../../core/interfaces/dropdown-option.interface';
import {Observable, startWith, take} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {LinkOptionComponent} from '../../../shared/components/link-option/link-option.component';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import {validateLinks} from '../../../core/functions/validate-preview-state';
import {saveTabsToStorage} from '../../../core/functions/save-state-to-storage';
import {GlobalEventsService} from '../../../core/services/global-events.service';

@Component({
  selector: 'app-added-links',
  imports: [
    StartedMessageComponent,
    AsyncPipe,
    LinkOptionComponent,
    DragDropModule
  ],
  templateUrl: './added-links.component.html',
  styleUrl: './added-links.component.scss',
  host: {
    style: 'height: 100%',
  }
})
export class AddedLinksComponent implements OnInit {
  public linksState$: Observable<LinkData[]>;

  private _previewFacade: PreviewStateFacade = inject(PreviewStateFacade);
  private _globalEvent: GlobalEventsService = inject(GlobalEventsService);

  constructor() {
    this.linksState$ = this._previewFacade.selectPreviewLinks().pipe(startWith([]));
  }

  ngOnInit() {
    // TODO: Delete this
    this._previewFacade.selectState()
      .subscribe(data => {
        console.log(data)
      });
  }

  public addNewLink(): void {
    this._previewFacade.setPreviewLinks(
      {
        link: '',
        platform: {
          iconKey: '',
          label: '',
          color: '',
        },
      }
    )
  }

  public dropEvent(linkEvent: CdkDragDrop<LinkData[] | null, any>): void {
    if (linkEvent) {
      this._previewFacade.updateLinksPosition({
        previousIndex: linkEvent.previousIndex,
        currentIndex: linkEvent.currentIndex
      });
    }
  }

  public saveLinks(): void {
    this._previewFacade.selectState()
      .pipe(take(1))
      .subscribe((state) => {
        const errors = validateLinks(state.linksData)
        if (errors.length) {
          saveTabsToStorage(state)
          this._globalEvent.openMessageModal({
            message: errors.join(' - '),
            isOpen: true,
            icon: 'pi-save'
          })
        } else {
          saveTabsToStorage(state)
          this._globalEvent.openMessageModal({
            message: 'Your changes have been successfully saved!',
            isOpen: true,
            icon: 'pi-save'
          })
        }
      })
  }
}
