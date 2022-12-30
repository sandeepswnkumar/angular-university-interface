import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ClientRoutingModule } from './client-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ContactComponent } from './contact/contact.component';
import { ClientService } from './client.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
// import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    TeachersComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ClientRoutingModule,
    NgbCarouselModule,
    MatButtonModule,
    // CarouselModule
  ],
  providers : [ClientService]
})
export class ClientModule { }
