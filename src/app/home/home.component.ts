import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IProduct } from '../shared/shared.interface';
import { sharedService } from '../shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsList: IProduct[] = [];

  constructor(private sharedService:sharedService,
    private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    let url = environment.apiEndPoint;
    this.sharedService.getProducts(url).subscribe((response: IProduct[]) => {
      this.productsList = response;
    });
  }

  routeToAddProd(obj) {
    this.router.navigate(['/create-prod',{ item: JSON.stringify(obj)}]);
  }
}
