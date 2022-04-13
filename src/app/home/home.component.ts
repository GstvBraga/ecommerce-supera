import { Component, OnInit } from '@angular/core';
import { ItemCart } from 'src/shared/models/item-cart.model';
import { Product } from 'src/shared/models/product.model';
import { CartService } from 'src/shared/services/cart.service';
import { ProductsService } from 'src/shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public allProducts: any[] = [1,2,3,4,5,6,7,8,9];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    //recuperando todos os produtos do arquivo JSON
    this.productsService.getProducts()
    .subscribe((products: Product[])=>{
      this.allProducts = [];
      this.allProducts = products;
      console.log(this.allProducts);

      //removendo o skeleton loading assim que os produtos são recuperados do arquivo JSON
      setTimeout(() => {
        let skeleton = document.querySelectorAll('.skeleton')
        skeleton.forEach((e)=>{
          e.classList.remove("skeleton-text")
          e.classList.remove("skeleton")
          console.log(e);
        })
      }, 0);
    });
    
  }

  public addToCart(product: Product){
    let itemCart = new ItemCart(
      product.id,
      product.image,
      product.name,
      product.price,
      1
    )
    this.cartService.addItem(itemCart)
    console.log(this.cartService.items);
    
  }
}
