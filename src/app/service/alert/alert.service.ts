import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private keepAfterRouteChange = false;
  private subject = new Subject<any>();
  constructor(private router: Router) {
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationStart){
        this.keepAfterRouteChange=false;
      }else{
        this.clear();
      }
    })
   }

  getAlert(){
    return this.subject.asObservable();
  }
  success(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'success', text: message });
}

error(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'error', text: message });
}
  clear(){
    this.subject.next();
  }
}
