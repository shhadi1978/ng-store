import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private rand: number = Math.random() * 100;

  private isAuth$: Subject<boolean> = new Subject();

  constructor() {
    let isAuth: boolean = true;
    setInterval(() => {
      isAuth = !isAuth;
      this.isAuth$.next(isAuth);
    }, 3000);
  }

  public getRand(): number {
    return this.rand;
  }

  public isAuthenticated$(): Observable<boolean> {
    return this.isAuth$.asObservable();
  }
}
