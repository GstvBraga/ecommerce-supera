import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient){}

  public dataRouteUrl: string = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10792f77-3dd6-4ccd-bf4f-99967a8b1b87/products.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220411T232325Z&X-Amz-Expires=86400&X-Amz-Signature=242339e64f7ea71ce82dc98247cf94b613c4e306047d01a1c4c7a80bd49f7d89&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22products.json%22&x-id=GetObject'
  public products: Product[] = []

  public getProducts(): any {
      return this.http.get(this.dataRouteUrl)
      .pipe((param: any) => this.products = param )
  }
}
