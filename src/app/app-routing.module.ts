import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { Details1Component } from './details1/details1.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { component: ProductComponent, path: 'product' },
  { component: CartComponent, path: 'cart' },
  { component: DetailsComponent, path: 'detail' },
  {component: Details1Component, path:'detail1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
