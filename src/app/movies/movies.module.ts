import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
