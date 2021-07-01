import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './model/user';
import { AuthenticationService } from './service/auth/authentication.service';
import { UserService } from './service/user/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  users = [];

  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }



}
