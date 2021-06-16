import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  length: any;
  userLst: any;
page:number=1;
count:number=10
pageEvent:PageEvent
  constructor(private apiService:ApiServiceService) { 

    this.apiService.routerSubject.next(1)
  }

  ngOnInit(): void {
    this.getUserListing()
  }


  getUserListing(){
    // console.log('this time', this.page, this.count)
    this.apiService.getUserListing(this.page, this.count).subscribe(res=>{
      // console.log(res)
      if(res['data'].length>0){
        this.userLst=res['data'],
        this.length=res['total']
      }
    })
  }


  handlePage(e):PageEvent{
    // console.log(e);
    if(e.pageIndex==0 && e.previousPageIndex==1){
      this.page=1;
      
    }else{this.page=e.pageIndex;
    }
    this.count=e.pageSize;
    this.getUserListing()
    return;
  }

}
