import { Component } from '@angular/core';
import { Performance } from './performance.class';
import { Song } from './song.class';
import { Artist } from './artist.class';

var mySong = new Song( 'Always On My Mind' );
var myArtist = new Artist( 'Willie Nelson' );
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
  newPerformance() {
    performanceArray.push(
      new Performance(
        new Artist(),
        new Song(),
        'Empty genre'
      )
    );
  }
}
