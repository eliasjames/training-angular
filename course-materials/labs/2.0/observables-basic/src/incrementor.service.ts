import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/share';
import { Injectable} from 'angular2/src/core/di';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class sbuxIncrementorService {
  incrementor$: Observable;
  _incrementorObserver: Observer;
  _incrementorCounter: Number;
  runningTotal;

  constructor() {
    this._incrementorCounter = 0;

    this.incrementor$ = new Observable(
      observer => {
        this._incrementorObserver = observer;
        this._incrementorObserver.next(
           this._incrementorCounter
        );
      }
    ).share();

    this.runningTotal = this.incrementor$
      .scan(
        (acc, cur, idx) => acc + cur;
      );
  }

  increment() {
    this._incrementorCounter++;
    this._incrementorObserver.next(this._incrementorCounter);
  }

  decrement() {
    this._incrementorCounter--;
    this._incrementorObserver.next(this._incrementorCounter);
  }
}
