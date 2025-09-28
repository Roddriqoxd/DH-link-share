import {Component} from '@angular/core';
import {StartedMessageComponent} from '../../../shared/components/started-message/started-message.component';
import {PreviewPhoneComponent} from '../../../shared/components/preview-phone/preview-phone.component';
import {LinkOptionComponent} from '../../../shared/components/link-option/link-option.component';
import {AddedLinksComponent} from '../added-links/added-links.component';
import {ProfileDetailsComponent} from '../profile-details/profile-details.component';

@Component({
  selector: 'app-home',
  imports: [
    StartedMessageComponent,
    PreviewPhoneComponent,
    LinkOptionComponent,
    AddedLinksComponent,
    ProfileDetailsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
