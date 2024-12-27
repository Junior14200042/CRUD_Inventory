import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ListComponent } from './components/list/list.component';
import {RouterModule, Routes} from "@angular/router";
import { AddProductComponent } from './components/add-product/add-product.component';
import {FormsModule} from "@angular/forms";
import { EditProductComponent } from './components/edit-product/edit-product.component';


  const rutas : Routes=[
    {path:'',component:ListComponent},
    {path:'addProduct',component:AddProductComponent},
    {path:'editProduct/:id',component:EditProductComponent},
    {path:'**',redirectTo: '', pathMatch: 'full'},

  ]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
