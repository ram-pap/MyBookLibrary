import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from '../model/menu-item';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/auth/authentication.service';
import { User } from '../model/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }


  ngOnInit(): void {
  }

  menuItems: MenuItem[] = [

    {
      label: 'About',
      icon: 'help'
    },
    {
      label: 'Favourite',
      icon: 'favourite'
    },
    {
      label: 'Recommended',
      icon: 'recommended'
    },
    {
      label: 'Showcase',
      icon: 'slideshow'
    },
    {
      label: 'Blog',
      icon: 'rss_feed'
    },
  ];

  onSubmit = (f) => {
    console.log(f.value.q)
    if (f.value.q)
      this.router.navigate(['/search'], { queryParams: { 'q': f.value.q.replace(' ', '+') } });
    else
      return

  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
