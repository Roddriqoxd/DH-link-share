import {Component} from '@angular/core';
import {PreviewPhoneComponent} from '../../../shared/components/preview-phone/preview-phone.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-preview',
  imports: [
    PreviewPhoneComponent,
    RouterLink
  ],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export default class PreviewComponent {

}
