import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  products: Product= new Product();
  id:number;

  constructor(private product_service:ProductService, private route:ActivatedRoute, private redirect: Router){

  }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.product_service.finById(this.id).subscribe(
      (data)=>{
        this.products = data;
      }
    )
  }

  updateProduct(){
    this.product_service.updateProducts(this.id,this.products).subscribe(
      ()=>{
        console.log("modificado");

        this.redireccionar();
      }
    )
  }

  redireccionar(){
    this.redirect.navigate(['/']);
  }

}
