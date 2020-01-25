import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { ItemsComponent } from './pages/items/items.component';
import { MainComponent } from './pages/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './pages/content/content.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    ItemsComponent,
    MainComponent,
    ContentComponent
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
    HeaderComponent,
    ItemsComponent,
    MainComponent,
    ContentComponent
  ]
})
export class ViewsModule { }
