import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';


@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  constructor(private moservice:MovieService) { }

  movies:Movie[]=[];

  loadData(){
    this.moservice.loaddate().subscribe(data=>
      {
        this.movies=data;
      },
      error=>
      {
        console.log("erroor occured",error);
      }
      );     this.moservice.loaddate().subscribe(data=>
         {
           this.movies=data;
         },
         error=>
         {
           console.log("erroor occured",error);
         }
         );
  }

  ngOnInit(): void {
    this.loadData()
  }

}
