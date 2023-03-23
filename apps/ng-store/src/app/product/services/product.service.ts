import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Routes } from 'src/app/core/http/API';
import { StorageService } from 'src/app/core/services/storage.service';
import { IProduct, IProduct1 } from 'src/app/shared/Models';
import { PRODUCTS_MOCK } from './products.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  private productsSubject$: Subject<IProduct1> = new Subject();

  public getProducts$(): Observable<IProduct1> {
    return this.productsSubject$.asObservable();
  }

  public getProductById$(id: string): Observable<IProduct1> {
    return this.http.get<IProduct1>(Routes['singleProduct']);
  }

  public fechProducts(): void {
    const existingData: IProduct1 = this.storageService.getData('products');
    if (existingData) {
      this.productsSubject$.next(existingData);
    } else {
      this.http.get<IProduct1>(Routes['allProducts']).subscribe((data) => {
        this.storageService.setData('products', data);
        this.productsSubject$.next(data);
      });
    }

    //mock
    // of(PRODUCTS_MOCK).subscribe(data=>{})
  }
}
