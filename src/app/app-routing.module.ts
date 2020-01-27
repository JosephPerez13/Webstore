import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './views/pages/main/main.component';
import { ItemsComponent } from './views/pages/items/items.component';
import { ContactUsComponent } from './views/pages/contact-us/contact-us.component';
import { ProfilePageComponent } from './views/pages/profile-page/profile-page.component';
import { ProductComponent } from './views/pages/product/product.component';
import { Home1Component } from './views/pages/home1/home1.component';


const routes: Routes = [
  { path: '', redirectTo: 'home1', pathMatch: 'full' },
  { path: 'home1', component: Home1Component },
  { path: 'items', component: ItemsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
