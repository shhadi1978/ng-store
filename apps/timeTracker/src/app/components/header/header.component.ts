import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private buttonHandler: { [key: string]: any } = {
    timmer: this.handlerFirst,
    stopper: this.handlerSecond,
  };

  constructor() {
    this.sidebarList = Object.keys(this.buttonHandler);
  }

  private handlerFirst(item: string): void {
    alert(item);
  }

  private handlerSecond(item: string): void {
    alert(item);
  }

  public title: string = 'Time Tracker';
  public sidebarOpen: boolean = false;
  public sidebarList: string[] = [];

  public onMenuClick(): void {
    this.sidebarOpen = !this.sidebarOpen;
    console.log('Hamburger clicked');
  }

  public closeSidebar(): void {
    this.sidebarOpen = false;
  }

  public buttonClickedHandler(button: string): void {
    alert(button);
  }
}
