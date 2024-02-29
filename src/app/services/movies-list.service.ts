import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Movie } from '../movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesListService {
  private apiUrl = 'https://reactnative.dev/movies.json';

  constructor(private http: HttpClient) {}

  fetchMovies(): Observable<any> {
    console.log('API URL:', this.apiUrl);
    return this.http.get(this.apiUrl);
  }
  getMovieDetails(id: string): Observable<any> {
    return this.fetchMovies().pipe(
      map((data: any) => {
        return data.movies.find((movie: any) => movie.id === id);
      })
    );
  }
}
