import { Component } from '@angular/core';
import { Performance } from './performance.class';
import { Song } from './song.class';
import { Artist } from './artist.class';

var mySong = new Song( 'Always On My Mind' );
var myArtist = new Artist( 'Willie Nelson', new Date( 1933, 3, 29 ));
var myPerformance = new Performance( myArtist, mySong, 'Country' );
var anotherArtist = new Artist( 'Pet Shop Boys' );
var anotherPerformance = new Performance( anotherArtist, mySong, 'Dance' );
var performanceArray = [ myPerformance, anotherPerformance ];

@Component({
  selector: 'performance',
  templateUrl: './performance.component.html'
})
export class PerformanceComponent {
  performances = performanceArray;
  componentEditMode: Boolean = false;
  addingPerformance: Boolean = false;
  newPerformance: Performance;

  addPerformance() {
    this.componentEditMode = !this.componentEditMode;
    this.addingPerformance = !this.addingPerformance;
    if ( this.addingPerformance === true ) {
      this.newPerformance = new Performance(
        new Artist(),
        new Song(),
        'Empty genre',
        true
      );
    }
  }
  submitPerformance() {
    performanceArray.push( this.newPerformance );
    console.log( 'keedl', performanceArray );
  }
  toggleEditMode( performance: Performance ) {
    performance.setEditMode( !performance.getEditMode() );
    this.componentEditMode = !this.componentEditMode;
  }
}
