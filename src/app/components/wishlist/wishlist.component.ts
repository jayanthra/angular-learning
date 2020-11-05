import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishList: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.wishList = this.movieService.getSavedMovie();
    console.log('this', this.wishList)
  }

}
