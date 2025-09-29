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
import {Platform} from '../../../core/interfaces/dropdown-option.interface';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';
import {map, Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-dropdown',
  imports: [AsyncPipe],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
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
    {iconKey: 'pi-github', label: 'GitHub', color: 'black'},
    {iconKey: 'pi-youtube', label: 'Youtube', color: 'red'},
    {iconKey: 'pi-linkedin', label: 'Linkedin', color: 'blue'},
    {iconKey: 'pi-twitter', label: 'Twitter', color: 'black'},
    {iconKey: 'pi-twitch', label: 'Twitch', color: '#8b45f7'},
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
