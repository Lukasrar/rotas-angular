import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  sub
  products

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route
      .data
      .subscribe(v => this.products = v.data);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
