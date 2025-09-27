import { Component } from '@angular/core';
import {AuthFormComponent} from "../../../shared/auth-form/auth-form.component";
import {InputIconDirective} from "../../../shared/directives/input-icon.directive";

@Component({
  selector: 'app-register',
    imports: [
        AuthFormComponent,
        InputIconDirective
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export default class RegisterComponent {

}
