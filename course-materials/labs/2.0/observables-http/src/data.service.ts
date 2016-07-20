import 'rxjs/add/operator/map';
import { Http, HTTP_PROVIDERS} from 'angular2/http';
import { Injectable} from 'angular2/src/core/di';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class sbuxDataService {
  counter$: Observable;
  _observer: Observer;

  constructor( myHttp: Http) {
    this._http = myHttp;
    this.counter$ = new Observable(
      observer => this._observer = observer
    );
    setInterval(() => this.getCounter(), 1000);
  }

  getCounter() {
    this._http.get('/counter')
      .subscribe(
        res => {this._observer.next(JSON.parse(res._body).ctr); console.log('get')},
        error =>  console.log(error)
      );
  }
  hitCounter() {
    this._http.post('/counter')
      .subscribe(
        res => {this._observer.next(JSON.parse(res._body).ctr); console.log('post')},
        error =>  console.log(error)
      );
  }
}
