import { Component, OnInit } from '@angular/core';
import { ItemCart } from 'src/shared/models/item-cart.model';
import { Product } from 'src/shared/models/product.model';
import { CartService } from 'src/shared/services/cart.service';
import { ProductsService } from 'src/shared/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public allProducts: any[] = [1,2,3,4,5,6,7,8,9];
  public totalPrice: number = 0;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {

    this.allProducts = this.cartService.items  
    this.totalPrice = this.cartService.calcTotalPrice()  
      //removendo o skeleton loading assim que os produtos são recuperados do arquivo JSON
      setTimeout(() => {
        let skeleton = document.querySelectorAll('.skeleton')
        skeleton.forEach((e)=>{
          e.classList.remove("skeleton-text")
          e.classList.remove("skeleton")
        })
      }, 0);
  }

  public addItem(item: ItemCart): void{
    this.cartService.addItem(item)
    this.totalPrice = this.cartService.calcTotalPrice()
  }
}
