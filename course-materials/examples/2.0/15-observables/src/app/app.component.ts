import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { Performance } from './performance.class';
import { Song } from './song.class';
import { Artist } from './artist.class';

var mySong = new Song( 'Always On My Mind' );
var myArtist = new Artist( 'Willie Nelson' );
var myPerformance = new Performance( myArtist, mySong, 'Country' );
var anotherArtist = new Artist( 'Pet Shop Boys' );
var anotherPerformance = new Performance( anotherArtist, mySong, 'Dance' );

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myPerformance = myPerformance;
}
