import {Routes} from '@angular/router';

export const PREVIEW_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./preview/preview.component')
  }
];
