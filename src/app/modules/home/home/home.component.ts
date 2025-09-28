import {Component, inject} from '@angular/core';
import {PreviewPhoneComponent} from '../../../shared/components/preview-phone/preview-phone.component';
import {ProfileDetailsComponent} from '../profile-details/profile-details.component';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-home',
  imports: [
    PreviewPhoneComponent,
    ProfileDetailsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  private _authService: AuthService = inject(AuthService);

  public logout(): void {
    this._authService.logout();
  }

}
