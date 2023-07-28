import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {

  constructor(private _CartService:CartService){
    this.getCartId()
  }
  id:any;
  checkOutFrom:FormGroup = new FormGroup({
    details:new FormControl(null),
    phone :new FormControl(null),
    city :new FormControl(null)
  })

  navigateToStripe(url:any){
    window.location.href = url
  }

  getCartId(){
    this._CartService.cartId.subscribe({
      next:(value)=>{this.id = value}
    })
  }

  handlePayment(checkOutFrom:any){
    this._CartService.onlinePayment(checkOutFrom.value,this.id).subscribe({
      next:(res)=>{
        this.navigateToStripe(res.session.url)
      },
      error:(error)=>{console.log(error);
      }
    })
    console.log(checkOutFrom.value);
   }


}


