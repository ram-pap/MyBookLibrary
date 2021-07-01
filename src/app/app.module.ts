import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RoutingModule } from './routing/routing.module';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component'
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectsComponent } from './subjects/subjects.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchComponent } from './search/search.component';
import { RequestInterceptor } from './helpers/request-interceptor';
import { SprinnerComponent } from './core/sprinner.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './components/alert.component';
import { AuthGaurd } from './helpers/auth.gaurd';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavListComponent,
    LoginComponent,
    HomeComponent,
    SubjectsComponent,
    BookDetailsComponent,
    SearchComponent,
    SprinnerComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    MatCarouselModule.forRoot(),
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule
   
],
  providers: [AuthGaurd,
    {provide:HTTP_INTERCEPTORS,useClass: RequestInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
