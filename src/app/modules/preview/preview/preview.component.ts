import {Component} from '@angular/core';
import {PreviewPhoneComponent} from '../../../shared/components/preview-phone/preview-phone.component';

@Component({
  selector: 'app-preview',
  imports: [
    PreviewPhoneComponent
  ],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export default class PreviewComponent {

}
