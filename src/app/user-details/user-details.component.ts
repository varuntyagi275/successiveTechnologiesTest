import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  sub: any;
  id: any;
  userData: any;

  constructor(private route:ActivatedRoute, private apiService:ApiServiceService) {
    this.sub=this.route.queryParams.subscribe(res=>{
      this.id=res.id
    })
    this.apiService.routerSubject.next(2);
   }

  ngOnInit(): void {
    this.getUserdetails();
  }

  getUserdetails(){
    this.apiService.getSingleUser(this.id).subscribe(res=>{
      // console.log(res);
      this.userData=res['data']
      
    })

  }

}
