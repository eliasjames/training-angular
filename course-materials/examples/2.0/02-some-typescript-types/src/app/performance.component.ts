import { Component, Input, OnInit } from '@angular/core';
import { Performance } from './performance.class';
import { Artist } from './artist.class';

@Component({
  selector: 'performance',
  template: '<artist [newArtist]="artist"></artist>',
})
export class PerformanceComponent implements OnInit {
  @Input() performanceArtist: string;
  artist: Artist;

  ngOnInit() {
    this.artist = new Artist( this.performanceArtist );  
  }
}
