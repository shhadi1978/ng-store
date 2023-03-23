import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  @Output() onCloseSidebar: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router) {}

  public closeSidebar(): void {
    this.onCloseSidebar.emit(); // fire event
  }

  onSidebarItemClick(buttonName: string) {
    switch (buttonName) {
      case 'Home':
        // Handle view action for the row data
        this.router.navigate(['/']);
        break;
      case 'Admin':
        // Handle view action for the row data
        this.router.navigate(['/admin']);
        break;
    }
  }
}
