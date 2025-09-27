import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-auth-form',
  imports: [],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {
  @Input() public title: string;
  @Input() public subtitle: string;

  constructor() {
    this.title = '';
    this.subtitle = '';
  }
}
