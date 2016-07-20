import { Component } from 'angular2/core';
import { DynamicComponentLoader } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

import { sbuxPlaylist } from 'src/playlist.component';

@Component({
  selector: 'sbux-app',
  templateUrl: 'src/app.component.html',
  directives: [ sbuxPlaylist ]
})
export class sbuxApp {
  myDCL:DynamicComponentLoader;
  myDI: Injector;

  constructor(dcl:DynamicComponentLoader) {
    this.myDCL = dcl;
  }

  addPlaylist() {
    this.myDCL.loadNextToLocation(sbuxPlaylist, 'sbux-app');
  }
}

bootstrap(sbuxApp)
  .catch(err => console.error(err));
