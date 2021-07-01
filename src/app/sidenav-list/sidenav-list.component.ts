import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuItem } from '../model/menu-item'
import {SideNavService} from '../service/sidenav/side-nav.service'
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;
  @Input() sidenavLayout:any;

  constructor(private sideNavService: SideNavService) {
    // this.sidenav.open();
  }

  ngOnInit() {
    this.sideNavService.setSidenav(this.sidenav);
    console.log('drawer ', this.sideNavService);
    // this.sidenav.opened = true;
  }

  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'login'
    },
    {
      label: 'About',
      icon: 'help'
    },
    {
      label: 'Pricing',
      icon: 'attach_money'
    },
    {
      label: 'Docs',
      icon: 'notes'
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
 




}
