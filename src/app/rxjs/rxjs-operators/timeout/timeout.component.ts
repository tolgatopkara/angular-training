import { Component, OnInit } from '@angular/core';
import { WebRequestService } from '../../web-request.service';

@Component({
  standalone: true,
  selector: 'app-timeout',
  template : ` <p>time out works</p> `
})
export class TimeoutComponent implements OnInit {

  constructor(private webRequest : WebRequestService) { }

  ngOnInit() {
    this.webRequest.timeoutRequest().subscribe((res) => {
      console.log('Web request  responded on time completed successfully here is the response: ')
      console.log(res);
    }, (err) => {
      console.log('Web request did not respond on time here is the error: ')
      console.log(err);
    })
  }

}
