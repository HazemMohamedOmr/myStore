import { Product } from './../../../core/interfaces/product';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:Product;
  selected:string = "1";

  constructor(private data:DataService) {
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
    this.data.sendProd(prod);
    console.log(prod);
  }

}
