import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient : HttpClient) { }

  getProduct():Observable<any>{
    return this._HttpClient.get("https://route-ecommerce.onrender.com/api/v1/products")
  }

  getProductDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
  }

  getCategories():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
  }
}
