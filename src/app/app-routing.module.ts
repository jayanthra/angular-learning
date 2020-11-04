import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PhonedetailsComponent } from './components/phonedetails/phonedetails.component';
import { PhonelistComponent } from './components/phonelist/phonelist.component';

const routes: Routes = [
  { path: '', redirectTo: '/phones', pathMatch: 'full' },
  { path: 'phones', component: PhonelistComponent },
  { path: 'phone/:phoneid', component: PhonedetailsComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'about-us', component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
