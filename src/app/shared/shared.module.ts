import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { LoginModalComponent } from './login-modal/login-modal.component';



@NgModule({
  declarations: [
    CardComponent,
    ContactCardComponent,
    LoginModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    ContactCardComponent,
    LoginModalComponent
  ]
})
export class SharedModule { }
