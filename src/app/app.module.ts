import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PhonelistComponent } from './components/phonelist/phonelist.component';
import { FormsModule } from '@angular/forms';
import { PhonedetailsComponent } from './components/phonedetails/phonedetails.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PhonelistComponent,
    PhonedetailsComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
