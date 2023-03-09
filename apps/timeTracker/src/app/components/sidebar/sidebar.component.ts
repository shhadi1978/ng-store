import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() sidebarOpen: boolean = false;

  @Input() list: string[] = [];

  @Output() onClose: EventEmitter<void> = new EventEmitter();

  @Output() onButtonClick: EventEmitter<string> = new EventEmitter();

  public closeSidebar(): void {
    this.onClose.emit();
  }

  public clickOnSidebarButton(button: string): void {
    this.onButtonClick.emit(button);
    console.log(button);
  }
}
