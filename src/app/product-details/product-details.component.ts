import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product:any;

  constructor(private _productService:ProductService ,private _ActivatedRoute:ActivatedRoute){}
  id:any;
  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe((res)=>{
      this.id = res.get('id')
    })
    this._productService.getProductDetails(this.id).subscribe({
      next:(res)=>{this.product = res.data;
      }
    })

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots:false,
    navSpeed: 700,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

}
