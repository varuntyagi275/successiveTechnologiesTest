import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  active:number=1
  constructor(public route: Router, private apiservice:ApiServiceService) {
    // console.log(route.snapshot)

    }
  ngOnInit(): void {
    this.apiservice.routerSubject.subscribe(res=>{
      this.active=res
    })
  }

  checkRoute(url){
    if(url=='userList'){
      this.active=1
    }else if(url=='userDetails'){
      this.active=2
    }
  }
}
