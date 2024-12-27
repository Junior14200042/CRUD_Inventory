import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product";
import {Router} from "@angular/router";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  products: Product[];

  constructor(private product_service: ProductService, private enrutador: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts():void{
    this.product_service.getProducts().subscribe(
      (data:Product[])=>{
        this.products = data;
      }
      )
  }

  editProducts(id:number){
     this.enrutador.navigate(['editProduct',id]);
  }

  deleteProducts(id:number):void{
    if (confirm('¿Estás seguro de que deseas eliminar este ítem?')) {
      this.product_service.deleteProducts(id).subscribe(

        (data:void)=>{
          this.getProducts();
        }
      )
    }
  }


}
