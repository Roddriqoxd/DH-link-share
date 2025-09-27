import {Component} from '@angular/core';
import {AuthFormComponent} from '../../../shared/auth-form/auth-form.component';
import {InputIconDirective} from '../../../shared/directives/input-icon.directive';

@Component({
  selector: 'app-login',
  imports: [
    AuthFormComponent,
    InputIconDirective
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {

}
