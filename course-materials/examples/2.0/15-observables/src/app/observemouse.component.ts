import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'observe-mouse',
  template: '{{ mouseXPosition }} by {{ mouseYPosition }}'
})
export class ObserveMouseComponent {
  mouseMove$ = Observable.fromEvent<MouseEvent>(document, 'mousemove');
  mouseXPosition: any;
  mouseYPosition: any;
  
  constructor() {
    this.mouseMove$.subscribe( x => {
      this.mouseXPosition = x.screenX;
      this.mouseYPosition = x.screenY;
      console.log( x );
    });
  }
}
