import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas';

  
  products: any = [
    { id: 1, name: "Ventilador", price: 100 },
    { id: 2, name: "Sofá", price: 1800 },
    { id: 3, name: "Televisao", price: 2000 },
    { id: 4, name: "Rack", price: 300 },
    { id: 5, name: "Climatizador", price: 400 },
  ]
}
