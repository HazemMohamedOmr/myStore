import { DataService } from './../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(d => {
      d.forEach(element => {
        element['quantity'] = 0;
      });
      this.products = d;
    })
  }

}
