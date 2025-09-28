import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'preview',
    loadChildren: () => import('./modules/preview/preview.routes').then(m => m.PREVIEW_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
