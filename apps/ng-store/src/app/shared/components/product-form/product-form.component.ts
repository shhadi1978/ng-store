import { Component } from '@angular/core';
import { IProduct } from '../../Models';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  public product?: IProduct;
}
