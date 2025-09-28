import {Component, inject} from '@angular/core';
import {PreviewPhoneComponent} from '../../../shared/components/preview-phone/preview-phone.component';
import {AuthService} from '../../../core/services/auth.service';
import {AddedLinksComponent} from '../added-links/added-links.component';
import {PreviewStore} from '../../../core/state/preview-state.store';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';

@Component({
  selector: 'app-home',
  imports: [
    PreviewPhoneComponent,
    AddedLinksComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    PreviewStore,
    PreviewStateFacade
  ]
})
export default class HomeComponent {
  private _authService: AuthService = inject(AuthService);

  public logout(): void {
    this._authService.logout();
  }

}
