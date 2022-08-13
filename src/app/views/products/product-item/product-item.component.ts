import { Product } from './../../../core/interfaces/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:Product;
  @Output() upProduct:EventEmitter<Product> = new EventEmitter<Product>();

  selected:string = "1";

  constructor() {
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      url: '',
      quantity: 0
    }
  }

  ngOnInit(): void {
  }

  cartProduct(prod:Product):void{
    prod.quantity = parseInt(this.selected);
    this.upProduct.emit(prod);
  }

}
