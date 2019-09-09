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
  private productName: string;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.queryParams['id'];

    //参数订阅
    this.activatedRoute.params.subscribe((params: Params) => {
        this.productType = params['type'];
    });
    //注意：这里之所以可以使用data.product,是因为我们在Routes路由中配置的 resolve: {product: ProductGuard}所致。
    //这里的product就是返回值的名字，如果变化了，两个名字都要一起变化。
    this.activatedRoute.data.subscribe((data: {product: Product}) => {
        this.productId = data.product.id;
        this.productName = data.product.name;
    });
    //参数快照
    //this.productType = this.activatedRoute.snapshot.params['type'];
  }

}

export class Product {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
