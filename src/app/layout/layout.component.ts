import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @Output() sidenavLayoutToggle = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  openMenu = false;

  clickMenu() {
    console.log('click menu')
    this.openMenu = !this.openMenu;
    this.sidenavLayoutToggle.emit(this.openMenu);
  }

}
