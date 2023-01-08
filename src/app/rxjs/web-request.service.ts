import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  constructor(private http : HttpClient) { }


  timeoutRequest() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    .pipe(
      timeout(4000)
    )
  }
}
