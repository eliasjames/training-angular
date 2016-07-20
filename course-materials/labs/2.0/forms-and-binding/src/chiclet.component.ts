import { Component, Input } from 'angular2/core';
import { Injectable } from 'angular2/src/core/di';

@Injectable()

@Component({
  selector: 'sbux-chiclet',
  template: '<div><h2>{{ genre || "No genre" }}</h2><span></span></div>'
})
export class sbuxChiclet {
  @Input() genre: string;
  constructor() {
    
  }
}

