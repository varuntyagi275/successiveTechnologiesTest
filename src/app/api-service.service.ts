import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl:string


  routerSubject=new BehaviorSubject<number>(1)
  constructor(private http:HttpClient) {
    this.baseUrl=environment.baseUrl
   }


  getUserListing(page,count):Observable<any>{
    return this.http.get<any>(this.baseUrl+'?page='+page+'&per_page='+count)
  }



  getSingleUser(id):Observable<any>{
    return this.http.get<any>(this.baseUrl+'/'+id)
  }


}
