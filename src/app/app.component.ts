import { Component } from '@angular/core';
import { MoviesService } from './servies/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies_web';


  constructor( private _MoviesService:MoviesService) {
console.log(_MoviesService.getTrend().subscribe(data ) ()> 
})

  }

}
