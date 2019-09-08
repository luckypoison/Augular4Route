import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private productId: number;
  private productType: string;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.queryParams['id'];

    //参数订阅
    this.activatedRoute.params.subscribe((params: Params) => {
        this.productType = params['type'];
    });
    //参数快照
    //this.productType = this.activatedRoute.snapshot.params['type'];
  }

}
