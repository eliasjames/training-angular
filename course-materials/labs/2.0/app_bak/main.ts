import {bootstrap} from 'angular2/platform/browser';

import { HTTP_PROVIDERS } from 'angular2/http';
import {Component} from 'angular2/core';
import { Http } from 'angular2/http';

@Component({
    selector: 'my-app',
    template: '<h1>Clicker App</h1> <sbux-clicker>Loading...</sbux-clicker>',
    providers: [Http]
})
export class AppComponent { 
  people: Object[];

  constructor(public http:Http) {
    http.get('http://localhost:8888/counter')
      .subscribe(res => {
       this.people = res.json();
      });
  }
}
bootstrap(AppComponent, [HTTP_PROVIDERS])
  .catch(err => console.error(err));
