import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'create-prod',
  component: CreateProductComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
