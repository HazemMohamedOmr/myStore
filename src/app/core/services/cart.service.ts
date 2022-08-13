import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private confirmationBill: object = {}
  private cartProduct: Product[] = [];

  private _cartProducts = new BehaviorSubject<Array<Product>>([]);
  cartProducts = this._cartProducts.asObservable();

  private _totalPrice = new BehaviorSubject<number>(0);
  totalPrice = this._totalPrice.asObservable();

  constructor() { }

  sendProd(prod:Product):string{
    let message = this.addToCart(prod);
    this._cartProducts.next(this.cartProduct);
    this.calculatePrice(this.cartProduct);
    return message;
  }

  removeProd(prod:Product):string{
    this.cartProduct = this.cartProduct.filter(v => v.id !== prod.id);
    console.log(this.cartProduct);
    
    this._cartProducts.next(this.cartProduct);
    this.calculatePrice(this.cartProduct);
    return `${prod.name} is deleted Successfully!`;
  }

  resetCartProducts():void{
    this.cartProduct = [];
    this._cartProducts.next(this.cartProduct);
    this.calculatePrice(this.cartProduct);
  }

  setConfirmBill(bill:object){
    this.confirmationBill = bill;
    console.log(this.confirmationBill);
    
  }

  get confirmBill(){
    return this.confirmationBill;
  }

  private sendPrice(price:number):void{
    this._totalPrice.next(price);
  }

  private calculatePrice(products: Product[]):void{
    let price = 0;
    products.forEach(ele => {
      let elePrice = ele.price * ele.quantity;
      price += elePrice;
    });
    this.sendPrice(price);
  }

  private addToCart(prod:Product) :string{

    for (let index = 0; index < this.cartProduct.length; index++) {
      const ele = this.cartProduct[index];
      if(ele.id == prod.id){
        if(ele.quantity == prod.quantity){
          return "Product has been Already Added!";
        }
        else{
          ele.quantity = prod.quantity;
          return "Product Quantity is Updated!";
        }
      }
    }

    this.cartProduct.unshift(prod);
        return "Product is Added to Cart!";
  }
}
