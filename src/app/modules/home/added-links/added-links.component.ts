import { Component } from '@angular/core';
import {StartedMessageComponent} from '../../../shared/components/started-message/started-message.component';
import {LinkOptionComponent} from '../../../shared/components/link-option/link-option.component';

@Component({
  selector: 'app-added-links',
  imports: [
    StartedMessageComponent,
    LinkOptionComponent
  ],
  templateUrl: './added-links.component.html',
  styleUrl: './added-links.component.scss',
  host: {
    style: 'height: 100%',
  }
})
export class AddedLinksComponent {

}
