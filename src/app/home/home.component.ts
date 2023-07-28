import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  search:string='';
  productsItems:any[]=[];
  constructor(private _productService : ProductService , private _CartService : CartService ) {
    this.products()
  }

products(){
  this._productService.getProduct().subscribe({
    next:(res)=>{
      this.productsItems = res.data
      console.log(res.data)
    },
    error:(err)=>{
      console.log(err);
    }
  })
}

addToCart(productId:string){
  this._CartService.addToCart(productId).subscribe({
    next:(res)=>{console.log(res);
      this._CartService.cartId.next(res.data._id);
    }



  })
}
}
