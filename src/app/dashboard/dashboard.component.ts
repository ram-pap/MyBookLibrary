import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksListService } from '../service/books/books-list.service';
import { Favourite } from '../model/Favourite';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public bookdetails:any;
  private favbook: Favourite;
  constructor(public bookservice:BooksListService,private router:Router,
    private route:ActivatedRoute) { 
  }
  showShortDesciption:boolean = true;

  alterDescriptionText() {
     this.showShortDesciption = !this.showShortDesciption
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.fecthBookDetails(param['olid'])
    })
   
  }
  public fecthBookDetails(olid:string){
    this.bookservice.bookDetails(olid).subscribe((data) =>{
      this.bookdetails = data;
      
    })
  }

  addToFavourite(){
    console.log(this.bookdetails.key)
  }

  /*private set(data){
    this.favbook.created = data.created.value;
    this.favbook.bookName = data.title;
    this.favbook.cover = data.covers[0];
    this.favbook.subject_places = data.subject_places;
    this.favbook.last_modified = data.last_modified.value;
    this.favbook.subject_people = data.subject_people;
    this.favbook.key = data.key;
    this.favbook.authors = data.authors;
    this.favbook.subject_time = data.subject_times;
    this.favbook.subjects = data.subjects;
    this.favbook.revision = data.revision;

    console.log(this.favbook)
  }*/
}
