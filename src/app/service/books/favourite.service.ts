import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private http:HttpClient) { }

  addToFavouriteList(olid,userid){
    this.http.post('',olid)
  }
  getFavouriteList(){

  }
}
