import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{

  product
  id
  sub
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('productId');
    });

    this.sub = this.route
      .data
      .subscribe(v => this.product = v.data[this.id]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
