import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthUser} from '../interfaces/auth-user.interface';
import {map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _redirectUrl: string | null = null;
  private _router = inject(Router);

  constructor() {}

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedIn')
  }

  public login(authData: AuthUser): Observable<boolean> {
    return of(authData)
      .pipe(map(user => {
        const users = localStorage.getItem('user') || '[]';
        const oldUsers: AuthUser[] = JSON.parse(users);

        if (oldUsers.some(oldUser => oldUser.email === user.email && oldUser.password === user.password)) {
          localStorage.setItem('loggedIn', JSON.stringify(user.email))
          this._redirectUrl ? this._router.navigateByUrl(this._redirectUrl) : this._router.navigate(['/']);
          this._redirectUrl = null;
          return true;
        } else {
          return false;
        }
      }));
  }

  public createNewUser(authData: AuthUser): Observable<boolean> {
    return of(authData)
      .pipe(map(user => {
        const users = localStorage.getItem('user') || '[]';
        const oldUsers: AuthUser[] = JSON.parse(users);
        if (oldUsers.some(oldUser => oldUser.email === user.email)) {
          return false
        }
        oldUsers.push(user);
        localStorage.setItem('user', JSON.stringify(oldUsers))
        return true
      }));
  }

  public logout(): void {
    localStorage.removeItem('loggedIn')
    this._router.navigate(['/auth'], {replaceUrl: true});
  }

  public setRedirectUrl(url: string): void {
    this._redirectUrl = url;
  }
}
