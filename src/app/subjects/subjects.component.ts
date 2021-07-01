import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksListService } from '../service/books/books-list.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  private works: Array<Object>;
  private map = new Map<string, Object>();
  defaultBooks: string[] = [
    'accessible_book',
    'romance',
    'kids'
  ];
  constructor(private router: ActivatedRoute, private route: Router, private bookservice: BooksListService) {
    this.router.queryParams.subscribe(params => {
        if (params.path) {
        this.bookservice.fetchBook(params.path).subscribe(data => this.setWorks(data));
      } else {
        this.setWorks('')
      }
    });
  }

  ngOnInit(): void {
    this.defaultBooks.forEach(element => {
      this.bookservice.fetchBook(element.toString()).subscribe(data => {
        this.map.set(element, data)
      }
      )
    });
  }
  getTimeLoaded = (path: string) => {
    this.route.navigate(['/home'], { queryParams: { 'path': path } });

  }
  setWorks(data) {
    this.works = data.works;

  }
  getWorks() {
    return this.works;
  }
  getMap() {
    return this.map;
  }

}
