import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ItemsComponent } from './pages/items/items.component';
import { MainComponent } from './pages/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { Header1Component } from './pages/header1/header1.component';
import { ProductComponent } from './pages/product/product.component';
import { Home1Component } from './pages/home1/home1.component';
import { CartComponent } from './pages/cart/cart.component';



@NgModule({
  declarations: [
    ContactUsComponent,
    FooterComponent,
    ItemsComponent,
    MainComponent,
    ProfilePageComponent,
    Header1Component,
    ProductComponent,
    Home1Component,
    CartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    ContactUsComponent,
    FooterComponent,
    ItemsComponent,
    MainComponent,
    Header1Component,
    ProfilePageComponent,
    ProductComponent,
    Home1Component,
    CartComponent
  ]
})
export class ViewsModule {

}
