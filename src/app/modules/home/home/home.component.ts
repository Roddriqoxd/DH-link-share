import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {PreviewPhoneComponent} from '../../../shared/components/preview-phone/preview-phone.component';
import {AuthService} from '../../../core/services/auth.service';
import {AddedLinksComponent} from '../added-links/added-links.component';
import {PreviewStore} from '../../../core/state/preview-state.store';
import {PreviewStateFacade} from '../../../core/state/facades/preview-state.facade';
import {Observable, startWith} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {TabState} from '../../../core/state/models/preview-state.model';
import {ProfileDetailsComponent} from '../profile-details/profile-details.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    PreviewPhoneComponent,
    AddedLinksComponent,
    AsyncPipe,
    ProfileDetailsComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    PreviewStore,
    PreviewStateFacade,
    { provide: 'IDENTIFIER', useValue: 'state' }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomeComponent implements OnInit {
  private _authService: AuthService = inject(AuthService);
  private _previewFacade: PreviewStateFacade = inject(PreviewStateFacade);

  public tabState$: Observable<TabState>;

  public TAB_STATE: typeof TabState = TabState;

  constructor() {
    this.tabState$ = this._previewFacade.selectTabState().pipe(startWith(TabState.LINKS));
  }

  ngOnInit() {
  }

  public logout(): void {
    this._authService.logout();
  }

  public changeView(tab: TabState): void {
    this._previewFacade.setTabState(tab)
  }
}
