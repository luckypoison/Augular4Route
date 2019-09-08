import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

/**
 * 这个路由守卫用于实现进入某以页面需要满足某些需求的情况。
 */
export class LoginGuard implements CanActivate {
    private flag = true;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        //这里给了一个随机数，如果数字大于0.5则可以进行登陆，否则会被拦截
        this.flag = Math.random() > 0.5;
        if ( this.flag ) {
            console.log('可以登陆');

        }
        console.log(this.flag);
        return this.flag;
    }
}
