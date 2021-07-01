import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksListService } from '../service/books/books-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpClient,private service:BooksListService) { }
  private books;
 
  ngOnInit(): void {
      this.route.queryParams.subscribe((param) =>{
          this.search(param['q']);
      })
  }
  get(){
    return this.books;
  }
  search(searchStr:string){
   this.service.search(searchStr).subscribe( data => {
    this.books = data;
   });
  }
}
