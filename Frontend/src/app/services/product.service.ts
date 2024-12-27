import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL_API:string="http://localhost:8080/inventory-app";

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.URL_API);
  }

  postProducts(product: Product):Observable<Product>{
    return this.http.post<Product>(this.URL_API,product);
  }
  deleteProducts(id:number):Observable<void>{
     return this.http.delete<void>(`${this.URL_API}/${id}`);
  }
  finById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.URL_API}/${id}`);
  }
  updateProducts(id:number, product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.URL_API}/${id}`,product);
  }

}
