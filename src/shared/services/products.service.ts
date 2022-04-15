import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient){}

  public dataRouteUrl: string = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10792f77-3dd6-4ccd-bf4f-99967a8b1b87/products.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220414T153203Z&X-Amz-Expires=86400&X-Amz-Signature=aab1e1ff9e8030da69a06c736b70fb1370a77ac0b4f7fcf77c5221b75e68f892&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22products.json%22&x-id=GetObject'
  public products: Product[] = [];

  public getProducts(): any {
      return this.http.get(this.dataRouteUrl)
      .pipe(retry(10),(param: any) => this.products = param )
  }
}
