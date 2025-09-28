import { Component } from '@angular/core';
import {AuthFormContainerComponent} from "../../../shared/components/auth-form/auth-form-container.component";
import {InputIconDirective} from "../../../shared/directives/input-icon.directive";

@Component({
  selector: 'app-register',
    imports: [
        AuthFormContainerComponent,
        InputIconDirective
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export default class RegisterComponent {

}
