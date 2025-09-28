import { Component } from '@angular/core';
import {InputIconDirective} from '../../directives/input-icon.directive';
import {DropdownComponent} from '../dropdown/dropdown.component';

@Component({
  selector: 'app-link-option',
  imports: [
    InputIconDirective,
    DropdownComponent
  ],
  templateUrl: './link-option.component.html',
  styleUrl: './link-option.component.scss'
})
export class LinkOptionComponent {

}
