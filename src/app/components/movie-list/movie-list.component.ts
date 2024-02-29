import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Movie } from 'src/app/movie.model';
import { Router } from '@angular/router';
import { MoviesListService } from 'src/app/services/movies-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  private movieService = inject(MoviesListService);
  movies: any = [];
  loggedUser: any;
  selectedMovie: Movie | null = null;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.fetchMovies().subscribe({
      next: (movies: any) => {
        this.movies = movies;
        console.log('Movie Fetched successfully', movies);
      },
      error: (error: any) => console.log('error fetching movies:', error),
    });
  }

  showDetails(movieId: any): void {
    this.router.navigate(['/details', movieId]);
  }
  onLogout() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }
}
