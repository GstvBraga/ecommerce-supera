import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/models/product.model';
import { ProductsService } from 'src/shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public allProducts: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    let product = new Product(1,'a',2,3,'a');
    console.log(product);
    this.productsService.getProducts()
    .subscribe((products: Product[])=>{
      this.allProducts = products;
      console.log(this.allProducts);
    });

    
  }

}
