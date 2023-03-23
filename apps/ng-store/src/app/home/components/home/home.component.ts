import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct, IProduct1 } from 'src/app/shared/Models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];
  public products1?: IProduct1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts$().subscribe((data) => {
      this.products = data.products;
      console.log(this.products);
    });
    this.productService.fechProducts();
  }

  ngOnDestroy(): void {}
}
