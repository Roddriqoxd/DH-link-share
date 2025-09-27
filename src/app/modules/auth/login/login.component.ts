import {Component} from '@angular/core';
import {AuthFormContainerComponent} from '../../../shared/components/auth-form/auth-form-container.component';
import {InputIconDirective} from '../../../shared/directives/input-icon.directive';

@Component({
  selector: 'app-login',
  imports: [
    AuthFormContainerComponent,
    InputIconDirective
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {

}
