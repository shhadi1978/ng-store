import { Component } from '@angular/core';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {
  public rand: number;

  constructor(private uiService: UiService) {
    this.rand = uiService.getRand();
  }
}
