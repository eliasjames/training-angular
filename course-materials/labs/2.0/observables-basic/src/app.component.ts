
import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import {enableProdMode} from 'angular2/core'

import { sbuxDataService } from './data.service';
import { sbuxIncrementor } from './incrementor.component';

@Component({
  selector: 'sbux-app',
  template: '<sbux-incrementor></sbux-incrementor>',
  directives: [sbuxIncrementor]
})
export class sbuxApp {

}

enableProdMode();
bootstrap(sbuxApp, [sbuxDataService, HTTP_PROVIDERS])
  .catch(err => console.error(err));
