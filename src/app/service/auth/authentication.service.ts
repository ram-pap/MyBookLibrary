import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User} from 'src/app/model/user'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject : BehaviorSubject<User>;
  public currentUser: Observable<User>
  

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User{
    return this.currentUserSubject.value;
  }
  login(email,password){
    options: {
      responseType:"json"
    }
    return this.http.post<any>('http://localhost:8080/users/authenticate', { 'email': email,'password': password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}
}
