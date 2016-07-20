import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'sbux-clicker',
  template: '<div> <span></span> <button>Clicker</button> </div>',
  providers: [Http]
})
export class ClickerComponent {
  people: Object[];

  constructor(http:Http) {
   http.get('http://localhost:8888/counter').subscribe(res => {
     this.people = res.json();
   });
  }
}
