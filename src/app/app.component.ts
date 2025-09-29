import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AlertModalComponent} from './shared/components/alert-modal/alert-modal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AlertModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
