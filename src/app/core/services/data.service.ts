import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cartProduct: Product[] = [];
  private _cartProducts = new BehaviorSubject<Array<Product>>([]);
  cartProducts = this._cartProducts.asObservable();

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>('/assets/data.json');
  }

  sendProd(prod:Product):void{
    this.cartProduct.unshift(prod);
    this._cartProducts.next(this.cartProduct);
  }
}
