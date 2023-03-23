import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/components/admin/admin.component';
import { EditProductComponent } from './admin/components/edit-product/edit-product.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, pathMatch: 'full' },
  {
    path: 'admin/view/:id',
    component: EditProductComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin/edit/:id',
    component: EditProductComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin/delete/:id',
    component: EditProductComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
