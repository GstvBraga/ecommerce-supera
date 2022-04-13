import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient){}

  public dataRouteUrl: string = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10792f77-3dd6-4ccd-bf4f-99967a8b1b87/products.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220412T234336Z&X-Amz-Expires=86400&X-Amz-Signature=90b36f9b370b94ae8ccf9c4b46db7e75903fae4b2ea105c08e382c5b993b3dbb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22products.json%22&x-id=GetObject'
  public products: Product[] = []

  public getProducts(): any {
      return this.http.get(this.dataRouteUrl)
      .pipe(retry(10),(param: any) => this.products = param )
  }
}
