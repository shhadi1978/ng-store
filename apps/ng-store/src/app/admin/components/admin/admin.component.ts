import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct, IProduct1 } from 'src/app/shared/Models';
import { Router } from '@angular/router';
import { ProductFormComponent } from 'src/app/shared/components/product-form/product-form.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  public displayedColumns: string[] = [];
  public products: IProduct[] = [];
  public products1?: IProduct1;

  public dataSource = new MatTableDataSource<IProduct>();
  constructor(
    private productService: ProductService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  ngOnInit(): void {
    this.productService.getProducts$().subscribe((data) => {
      this.products = data.products;
      if (data && data.products.length) {
        this.initTable(this.products);
      }
    });
    this.productService.fechProducts();
  }

  initTable(data: IProduct[]): void {
    data.forEach((item) => {
      item.menuItems = [
        { label: 'View', action: 'visibility' },
        { label: 'Edit', action: 'edit' },
        { label: 'Delete', action: 'delete' },
      ];
    });
    this.displayedColumns = Object.keys(data[0]);
    this.dataSource = new MatTableDataSource(data);
    console.log(data);
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

  onMenuItemClick(item: any, id: number) {
    switch (item.action) {
      case 'visibility':
        // Handle view action for the row data
        this.router.navigate(['/admin', 'view', id]);
        break;
      case 'edit':
        // Handle edit action for the row data
        this.router.navigate(['/admin', 'edit', id]);
        break;
      case 'delete':
        // Handle delete action for the row data
        this.router.navigate(['/admin', 'delete', id]);
        break;
      default:
        // Handle unknown action
        console.log('Unknown action clicked for item:', item);
    }
  }

  onClickAddNewProduct() {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '250px',
      data: { name: 'John' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
