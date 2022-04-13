import { Injectable } from '@angular/core';
import { ItemCart } from '../models/item-cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items: ItemCart[] = JSON.parse(localStorage.getItem("cartItems") || "[]" )
  public qntCart: number = this.showItems().length

  public showItems(): ItemCart[]{
    return this.items
  }

  public addItem(itemCart: ItemCart): void{

    let itemCartFound = this.items.find((item: ItemCart) => item.id === itemCart.id)

    if(itemCartFound){
      itemCartFound.quantity += 1
    }
    else{
      this.items.push(itemCart)
    }

    localStorage.setItem("cartItems", JSON.stringify(this.items))
  }

  public decreaseItem(itemCart: ItemCart): void{

    let itemCartFound = this.items.find((item: ItemCart) => item.id === itemCart.id)

    if(itemCartFound){
      itemCartFound.quantity -= 1
    }
    if(itemCartFound?.quantity === 0){
      this.items.splice(this.items.indexOf(itemCartFound), 1)
    }

    localStorage.setItem("cartItems", JSON.stringify(this.items))
  }

  public removeItem(itemCart: ItemCart): void{
    let itemCartFound = this.items.find((item: ItemCart) => item.id === itemCart.id)

    if(itemCartFound){
      this.items.splice(this.items.indexOf(itemCartFound), 1)
  }

  localStorage.setItem("cartItems", JSON.stringify(this.items))

  }

  public calcTotalPrice(): number{
    
    let total: number = 0
    this.items.map((item: ItemCart) =>{
      total = total + (item.price * item.quantity)
    })
    return total
  }

  public clearItems(){
    this.items = []
    localStorage.setItem("cartItems", JSON.stringify(this.items))
  }

  public getCartQnt(): number{
    let cartQnt: number = 0
    this.items.map((item: ItemCart) =>{
      cartQnt += item.quantity
    })
    return cartQnt
  }

  constructor(
  ) { }
}
