import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartId = new BehaviorSubject(0);
  cartNumber = new BehaviorSubject(0);
  constructor(private _HttpClient : HttpClient) {

    this.getCart().subscribe({
      next:(res)=>{console.log(res.data)
      this.cartId.next(res.data._id)
      }
    })
  }
  


  header:any = {token:localStorage.getItem("userData")?.replace(/['"]+/g, '')}

  addToCart(productId:string):Observable<any>{
    console.log(this.header);
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/cart`,
    {productId:productId},{headers:this.header})
  }
  getCart():Observable<any>{
    console.log(this.header);
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/cart`,
    {headers:this.header})
  }

  removeFromCart(productId:string):Observable<any>{
    console.log(this.header);
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
    {headers:this.header})
  }

  updateQuantity(productId:string,count:number):Observable<any>{
    console.log(this.header);
    return this._HttpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
    {count:count},
    {headers:this.header})
  }

  onlinePayment(shippingAddress:any,cartId:string):Observable<any>{
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {shippingAddress:shippingAddress }
    ,{headers:this.header}
    )
  }


}
