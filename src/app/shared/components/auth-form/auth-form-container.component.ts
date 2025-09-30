import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-auth-container-form',
  imports: [],
  templateUrl: './auth-form-container.component.html',
  styleUrl: './auth-form-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormContainerComponent {
  @Input() public title: string;
  @Input() public subtitle: string;

  constructor() {
    this.title = '';
    this.subtitle = '';
  }
}
