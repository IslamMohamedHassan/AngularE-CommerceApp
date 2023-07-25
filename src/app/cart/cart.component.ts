import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems:any;

  constructor(private _CartService:CartService) {}

ngOnInit(): void {
  this._CartService.getCart().subscribe({
    next:(res)=>{console.log(res.data);
      this.cartItems = res.data;
    }
  })
}
removeFromCart(id:string){
  this._CartService.removeFromCart(id).subscribe({
    next:(res)=>{console.log(res);
    this.cartItems = res.data;}
})
}

updateQuantity(id:string,count:number){
  this._CartService.updateQuantity(id,count).subscribe({
    next:(res)=>{console.log(res);
      this.cartItems = res.data;}})


}
}
