import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './views/pages/main/main.component';
import { ItemsComponent } from './views/pages/items/items.component';
import { ContactUsComponent } from './views/pages/contact-us/contact-us.component';
import { ProfilePageComponent } from './views/pages/profile-page/profile-page.component';
import { ProductComponent } from './views/pages/product/product.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
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
