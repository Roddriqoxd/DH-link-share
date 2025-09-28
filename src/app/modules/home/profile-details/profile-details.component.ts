import {Component} from '@angular/core';
import {InputIconDirective} from '../../../shared/directives/input-icon.directive';

@Component({
  selector: 'app-profile-details',
  imports: [
    InputIconDirective
  ],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss',
  host: {
    style: 'height: 100%',
  }
})
export class ProfileDetailsComponent {

}
