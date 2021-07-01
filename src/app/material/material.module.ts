import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import {  MatButtonModule  } from '@angular/material/button'
import {  MatCardModule  } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTabsModule }  from '@angular/material/tabs'
import { MatInputModule } from '@angular/material/input'
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

const MaterialComponent = [
  CommonModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTabsModule,
  MatInputModule,
  MatDividerModule,
  MatProgressSpinnerModule
  
]

@NgModule({
   imports: [MaterialComponent],
   exports: [MaterialComponent]
})
export class MaterialModule { }
