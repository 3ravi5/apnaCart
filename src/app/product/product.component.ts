import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productList:any;

  constructor(private api:ApiService, private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe((response)=>{
      this.productList = response;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addToCart(item:any){
    this.cartService.addToCart(item);

  }

}
