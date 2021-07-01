import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class BooksListService {

 // url = 'https://openlibrary.org/';
  cached:Array<Object>;

  constructor(private http: HttpClient) { }

 private  httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  public fetchBook(path): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(`${environment.apiUrl}/subjects/` + path + '.json')
      .pipe(
        tap(
          res => console.log("Fetched Books " + res),
          catchError(this.handleError('fetchBook'))
        )
       
      );
  }

  public bookDetails(olid: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/works/` + olid + '.json')
      .pipe(
        tap(
          res => res.body
        ),
          catchError(this.handleError('bookDetails olid = ${olid}'))
      )
  }
  public search(searchStr: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/search.json?q=`+searchStr)
    .pipe(tap
      (res => console.log("Result Feteched on string ${searchStr}" +res.toString))
      ,
      catchError(this.handleError('search'))
    )
  }

  private handleError<T>(operation = 'operation',result?: T){
    return (error: any ): Observable<T> =>{
      console.error(error)
      return of(result as T)
    }
  }

}
