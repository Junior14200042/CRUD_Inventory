import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  products:Product= new Product();


  constructor(private product_service:ProductService, private redirect:Router) {

  }

  ngOnInit() {
  }

  addProduct(){

    this.product_service.postProducts(this.products).subscribe(
      (response)=>{
        console.log(response);
        this.redirect.navigate(['/']);
      }
    )

  }





}
