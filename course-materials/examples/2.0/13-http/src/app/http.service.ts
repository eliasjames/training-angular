import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  baseUrl: string = 'localhost:8000/';
	
  constructor(private http: Http) { 
    this.http = http;
  }

	getData(path: string) {
    return this.http.get( this.baseUrl + path )
      .toPromise();
  }
}
