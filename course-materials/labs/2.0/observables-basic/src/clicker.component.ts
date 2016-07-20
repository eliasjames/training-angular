import { Component } from 'angular2/core';
import { sbuxDataService } from './data.service';
import { Injectable } from 'angular2/src/core/di';
import { Observable } from 'rxjs/Observable';

@Injectable()

@Component({
  selector: 'sbux-clicker',
  template: '<div><h2>clicker</h2><span>Clicks: {{ myDS.counter$ | async }}</span><br/><button (click)=hitCounter()>Click</button></div>'
})
export class sbuxClicker {
  myDS: sbuxDataService;

  constructor(sDS: sbuxDataService) {
    this.myDS = sDS;
    console.log(this.myDS);
  }

  hitCounter() {
    this.myDS.hitCounter();
  }
}
