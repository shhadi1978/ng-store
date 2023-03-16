import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  declarations: [AdminComponent, EditProductComponent],
  imports: [CommonModule, SharedModule],
})
export class AdminModule {}
