import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, IProductField } from '../shared/shared.interface';
import { sharedService } from '../shared/shared.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  selectedProduct: IProduct;
  productFieldsList: IProductField[] = [];
  productFormGroup: FormGroup = new FormGroup({});

  addedProductList = [];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private sharedService: sharedService) { }

  ngOnInit(): void {
    const product = this.route.snapshot.paramMap.get('item'); 

    this.selectedProduct = JSON.parse(product);
    this.getProductFeilds(this.selectedProduct.definitionUrl);
  }

  //Get Product form feilds
  getProductFeilds(url) {
    this.sharedService.getProducts(url).subscribe((response: IProductField[]) => {
      this.productFieldsList = response;
      this.productFieldsList.forEach(prodObj => {
        let control: FormControl;

        //If bool change the data type of --defaultValue
        if (prodObj.type == 'bool' && typeof prodObj.defaultValue === 'string') {
          let boolVal = prodObj.defaultValue.toLowerCase() == 'false' ? false : true;
          control = new FormControl(boolVal);
        } else {
          control = new FormControl(prodObj.defaultValue);
        }

        //If mandatory set validator to control
        if (prodObj.mandatory)
          control.setValidators(Validators.required);

        this.productFormGroup.addControl(prodObj.caption, control); // Add control to form group
      });
    },err=>{
      console.log(err);
    });
  }

  onSubmit() {
    this.addedProductList.push(this.productFormGroup.value);   //On form submit push to table
    console.log(this.productFormGroup.value);
  }

}
