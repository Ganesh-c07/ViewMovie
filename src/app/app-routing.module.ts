import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMovieComponent } from './view-movie/view-movie.component';


const routes: Routes = [
  {path:"",redirectTo:"displayMovies",pathMatch:"full"},
  {path:"displayMovies",component:ViewMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
