import { CanDeactivate, ActivatedRouteSnapshot } from "@angular/router";
import { ProductsComponent } from "../products/products.component";

export class NotSaveGuard implements CanDeactivate<ProductsComponent> {
    private flag = true;
    canDeactivate(component: ProductsComponent, _currentRoute: ActivatedRouteSnapshot) {
        
        //这里暂时给出一个提示框
        return window.confirm("还没有保存确定离开吗？");
    }

}
