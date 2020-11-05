import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { PhonedetailsComponent } from './components/phonedetails/phonedetails.component';
import { PhonelistComponent } from './components/phonelist/phonelist.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/phones', pathMatch: 'full' },
  { path: 'phones', component: PhonelistComponent },
  { path: 'phone/:phoneid', component: PhonedetailsComponent},
  { path: 'movies', component: MovielistComponent },
  { path: 'watchlist', component: WishlistComponent },
  { path: 'movie/:id', component: MoviedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
