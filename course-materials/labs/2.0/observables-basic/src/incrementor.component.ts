import { Component } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { sbuxIncrementorService } from 'src/incrementor.service';

@Component({
  selector: 'sbux-incrementor',
  templateUrl: './src/incrementor.html',
  providers: [sbuxIncrementorService]
})
export class sbuxIncrementor {
  myIS: sbuxIncrementorService;

  constructor(IS: sbuxIncrementorService) {
    this.myIS = IS;
  }

  incrementor() {
    this.myIS.increment();
  }

  decrementor() {
    this.myIS.decrement();
  }

}
