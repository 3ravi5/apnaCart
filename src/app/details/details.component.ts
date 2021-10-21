import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public currentItem:number = 0;
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

  increase(){
    this.currentItem++;
    if(this.currentItem>5){
      this.currentItem = 5;
    }
  };
  decrease(){
    this.currentItem--;
    if(this.currentItem<0){
      this.currentItem = 0;
    }
  };

}
