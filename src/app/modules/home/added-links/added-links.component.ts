import {Component, inject, OnInit} from '@angular/core';
import {StartedMessageComponent} from '../../../shared/components/started-message/started-message.component';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';
import {LinkData} from '../../../core/interfaces/dropdown-option.interface';
import {Observable, startWith} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {LinkOptionComponent} from '../../../shared/components/link-option/link-option.component';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';

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
  private _previewFacade: PreviewStateFacade = inject(PreviewStateFacade);
  private _index = 0

  public linksState$: Observable<LinkData[]>;

  constructor() {
    this.linksState$ = this._previewFacade.selectPreviewLinks().pipe(startWith([]));
  }

  ngOnInit() {
    this._previewFacade.selectPreviewLinks()
      .subscribe(previewLinks => {
        // TODO: Delete this
        console.log(previewLinks)
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
          id: 0
        },
        position: this._index
      }
    )
    this._index++
  }

  public dropEvent(linkEvent: CdkDragDrop<LinkData[] | null, any>): void {
    if (linkEvent) {
      this._previewFacade.updateLinksPosition({
        previousIndex: linkEvent.previousIndex,
        currentIndex: linkEvent.currentIndex
      });
    }
  }
}
