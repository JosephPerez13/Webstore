import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartCardComponent } from './cart-card/cart-card.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CardComponent,
    ContactCardComponent,
    LoginModalComponent,
    ProfileCardComponent,
    ProductCardComponent,
    RegistrationComponent,
    CartCardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CardComponent,
    ContactCardComponent,
    LoginModalComponent,
    ProfileCardComponent,
    ProductCardComponent,
    RegistrationComponent,
    CartCardComponent
  ]
})
export class SharedModule {

}
