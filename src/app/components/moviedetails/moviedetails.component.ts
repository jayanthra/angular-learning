import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  movie: Movie;
  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(response => {
      this.movie = response;
    });
  }

}
