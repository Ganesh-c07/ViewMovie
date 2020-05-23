import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

loaddate():Observable<any>         
{
  let url="http://localhost:8090/movie";

  return this.http.get(url);
}
}