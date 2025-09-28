import {Routes} from '@angular/router';
import {authGuard} from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.routes').then(m => m.HOME_ROUTES),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'preview',
    loadChildren: () => import('./modules/preview/preview.routes').then(m => m.PREVIEW_ROUTES),
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
