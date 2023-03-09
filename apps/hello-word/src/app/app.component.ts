import { Component } from '@angular/core';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hello-word';
  public someVar: string = 'This is in the template!';

  public isValid: boolean = false;
  public today: Date = new Date();
  public rand: number;

  constructor(private uiService: UiService) {
    this.rand = uiService.getRand();
    const sub: Subscription = uiService
      .isAuthenticated$()
      .subscribe((isAuth) => {
        console.log(`is authenticated:${isAuth}`);
      });

    setTimeout(() => {
      sub.unsubscribe();
    }, 100000);
  }

  public handleClick(ev: MouseEvent): void {
    this.isValid = !this.isValid;
  }
}
