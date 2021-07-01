import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private count = 0
  private spinner$ = new BehaviorSubject<string>('')
  constructor() { }

  getSpinnerObserver(): Observable<string> {
    return this.spinner$.asObservable();
  }

  requestStarted() {
    this.count=+1;
    if (this.count === 1)
      this.spinner$.next('start')
  }

  requestEnded() {
    
    this.count =0;
    if (this.count === 0)
      this.spinner$.next('end')
  }

  resetSpinner() {
    this.count = 0;
    this.spinner$.next('stop')
  }
}
