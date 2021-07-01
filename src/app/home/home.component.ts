import { Component, EventEmitter, OnInit, Output } from '@angular/core';  
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [{'image': '/assets/banner_1.jpg'},
   {'image': '/assets/img_2.jpg'},
   {'image': '/assets/img_3.jpg'},
    {'image': '/assets/img_4.jpg'},
     {'image': '/assets/img_6.jpg'}];
  links = [{
    id:1,name:'arts',label:'Arts'},
    {id:2, name:'science',label:'Science'},
    {id:3, name:'history',label:'History'},
    {id:4, name:'biographies',label:'Biographies'},
    {id:5, name:'fantasy',label:'Fantasy'},
    {id:6, name:'recipes',label:'Recipes'},
    {id:7, name:'romance',label:'Romance'},
    {id:8, name:'religion',label:'Religion'},
    {id:9, name:'children',label:'Children'}
  ];
  constructor(private router:ActivatedRoute,private route:Router) { }
  
  
  ngOnInit(): void {
  
  }
  
  getTimeLoaded=(path:string)=>{
    this.route.navigate(['/home'], { queryParams: { 'path': path } });

  }
 

}

