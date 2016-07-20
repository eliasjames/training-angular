
import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';

import { sbuxDataService } from './data.service';
import { sbuxClicker } from './clicker.component';

@Component({
  selector: 'sbux-app',
  template: '<sbux-clicker></sbux-clicker>',
  directives: [sbuxClicker]
})
export class sbuxApp {

}

bootstrap(sbuxApp, [sbuxDataService, HTTP_PROVIDERS])
  .catch(err => console.error(err));
