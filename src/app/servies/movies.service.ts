import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient: HttpClient) { }
  getTrend(): Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/top_rated?api_key=da25785f20dc540d0b35c6e615e47a4d");

  }
}


