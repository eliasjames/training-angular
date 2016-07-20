import { Http, HTTP_PROVIDERS } from '@angular/http';

export class ClickerDataService {
  _http: Http;

  constructor( myHttp: Http) {
    this._http = myHttp;
  }

  returnTest() {
    this._http.get('localhost:8888/counter')
      .subscribe(
        res => console.log(res.json()),
        error => console.log(error)
      );
  }
}
