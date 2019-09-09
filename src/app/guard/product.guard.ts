import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { ProductsComponent, Product } from "../products/products.component";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductGuard implements Resolve<Product> {


    constructor(private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (route.params['type'] === 'book') {
            return new Product(1, 'iphone X');
        } else {
            this.router.navigate(['/home']);
            return undefined;
        }
    }

}
