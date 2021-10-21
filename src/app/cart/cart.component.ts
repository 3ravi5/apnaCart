import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product:any = [];
  public grandTotal:number = 0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(response=>{
      this.product=response;
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }

  curencyFormatter(value:number):string{
    var en_us = new Intl.NumberFormat('en-US');
    return en_us.format(value);
  }

}
