import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerComponent } from './seller/seller.component';
import { ChatComponent } from './chat/chat.component';
import { LoginGuard } from './guard/login.guard';
import { NotSaveGuard } from './guard/notSave.guard';
import { ProductGuard } from './guard/product.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NotFoundComponent,
    ProductDescComponent,
    SellerComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginGuard, NotSaveGuard, ProductGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
