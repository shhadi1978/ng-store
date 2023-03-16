import { Component, Input } from '@angular/core';
import { IProduct } from '../../Models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product?: IProduct;
}
