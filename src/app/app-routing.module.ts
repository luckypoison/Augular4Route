import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerComponent } from './seller/seller.component';
import { ChatComponent } from './chat/chat.component';
import { LoginGuard } from './guard/login.guard';
import { NotSaveGuard } from './guard/notSave.guard';

/**
 * Tips: path 不能使用斜杠进行开头，因为可以让Angular自动使用绝对路径和相对路径。
 * 具体的路由放到最前面，然后通配符路由放到最后。
 * 如果Path为空最好使用重定向的方式进行跳转
 * 所有的Path都应该有属于自己的Component。
 */
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  {path: 'home', component: HomeComponent},
  {path: 'products/:type', component: ProductsComponent, canActivate: [LoginGuard], canDeactivate: [NotSaveGuard], children: [
    {path: '', component: ProductDescComponent},
    {path: 'seller/:id', component: SellerComponent}
  ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
