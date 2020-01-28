import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { CartCardComponent } from './app/shared/cart-card/cart-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CartCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
