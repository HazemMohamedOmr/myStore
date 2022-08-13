import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>('/assets/data.json');
  }

  getProduct(id: number):Observable<Product>{
    return this.httpClient.get<Product[]>('/assets/data.json').pipe(map((val: any[]) =>{
      return val.find((ele:Product) => ele.id == id)
    }));
  }

}
