import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';

const data = [
  { id: 1, name: "Ventilador", price: 100 },
  { id: 2, name: "Sofá", price: 1800 },
  { id: 3, name: "Televisao", price: 2000 },
  { id: 4, name: "Rack", price: 300 },
  { id: 5, name: "Climatizador", price: 400 },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent, data : {data} },
      { path: 'products/:productId', component: ProductDetailsComponent, data : {data} },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
