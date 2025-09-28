import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
  WritableSignal
} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {Platform} from '../../../core/interfaces/dropdown-option.interface';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';
import {map, Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-dropdown',
  imports: [MatIconModule, AsyncPipe],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() set position(position: number) {
    if (position >= 0) {
      this.selectedOption$ = this._previewFacade.selectLinkByPosition(position)
        .pipe(map(linkData => linkData.platform));
    }
  }

  @Output() public selectedOptionEmitter: EventEmitter<Platform>;

  public isOpenDropdown: WritableSignal<boolean>;
  public selectedOption$!: Observable<Platform>;

  private _previewFacade: PreviewStateFacade = inject(PreviewStateFacade);

  public readonly DROPDOWN_OPTIONS: Platform[] = [
    {iconKey: 'pi-github', label: 'GitHub', color: 'black', id: 1},
    {iconKey: 'pi-youtube', label: 'Youtube', color: 'red', id: 2},
    {iconKey: 'pi-linkedin', label: 'Linkedin', color: 'blue', id: 3},
  ];

  constructor() {
    this.selectedOptionEmitter = new EventEmitter<Platform>();
    this.isOpenDropdown = signal<boolean>(false);
  }

  public toggleDropdown(): void {
    this.isOpenDropdown.update((isOpen) => !isOpen)
  }

  public selectOption(option: Platform, event: MouseEvent): void {
    this.selectedOptionEmitter.emit(option);
    this.isOpenDropdown.set(false);
    event.stopPropagation();
  }
}
