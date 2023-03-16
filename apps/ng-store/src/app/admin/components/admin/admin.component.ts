import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/Models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  public displayedColumns: string[] = [];
  public products: IProduct[] = [];

  public dataSource = new MatTableDataSource<IProduct>();
  constructor(private productService: ProductService) {}

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  ngOnInit(): void {
    this.productService.getProducts$().subscribe((data) => {
      this.products = data;
      this.initTable(data);
    });
  }

  initTable(data: IProduct[]): void {
    this.displayedColumns = Object.keys(data[0]);
    this.dataSource = new MatTableDataSource(data);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
