import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  title: string;
  constructor( route: ActivatedRoute ) {
    this.title = route.snapshot.data['title'];
  }
}
