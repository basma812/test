import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  api: string = 'https://verkehr.autobahn.de/o/autobahn/';
  
  constructor(private http:HttpClient) {}

  getRoadWorks(id: string) {
    return lastValueFrom(this.http.get(this.api + id + "/services/roadworks")).then((res)=>{
      console.log(res);
      
    })
  }
}
