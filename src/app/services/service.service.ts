import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  api: string = 'https://verkehr.autobahn.de/o/autobahn/';

  constructor(private http: HttpClient) {} // Ensure HttpClient is injected here

  getRoadWorks(id: string) {
    return lastValueFrom(this.http.get(this.api + id + "/services/roadworks")).then((res) => {
      console.log(res);
      return res;
    });
  }
}
