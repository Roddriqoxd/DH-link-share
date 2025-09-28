import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {DropdownOption} from '../../../core/interfaces/dropdown-option.interface';

@Component({
  selector: 'app-dropdown',
  imports: [MatIconModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  public isOpenDropdown: boolean;
  public selectedOption: DropdownOption;

  public readonly DROPDOWN_OPTIONS: DropdownOption[] = [
    {iconKey: 'pi-github', label: 'GitHub', color: 'black',id: 1},
    {iconKey: 'pi-youtube', label: 'Youtube', color: 'red', id: 2},
    {iconKey: 'pi-linkedin', label: 'Linkedin', color: 'blue', id: 3},
  ];

  constructor() {
    this.isOpenDropdown = false;
    this.selectedOption = {
      iconKey: 'pi-link',
      label: 'Dropdown Field Active',
      color: 'white',
      id: 4
    };
  }

  public toggleDropdown(): void {
    this.isOpenDropdown = !this.isOpenDropdown;
  }

  public selectOption(option: DropdownOption): void {
    this.selectedOption = option;
    this.isOpenDropdown = false;
  }
}
