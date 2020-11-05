import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {

  pageNo = 1;
  movies: Movie[];
  isLoading = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.isLoading = true;
    this.movies = [];
    this.movieService.getMovies(this.pageNo).subscribe(response => {
      this.movies = response.Search;
      console.log('MOVIES', this.movies);
      this.isLoading = false;
    });
  }

  paginate(direction): void {
    this.pageNo += direction;
    this.loadMovies();
  }

  addtoWishList(event: MouseEvent, movie: Movie): void {
    this.movieService.saveMovie(movie);
    event.stopPropagation();
  }

}
