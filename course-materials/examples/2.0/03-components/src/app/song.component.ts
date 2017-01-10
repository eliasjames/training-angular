import { Component } from '@angular/core';
import { Song } from './song.class';

var mySong = new Song( 'Always On My Mind' );

@Component({
  selector: 'song',
  templateUrl: './song.component.html'
})
export class SongComponent {
  mySong = mySong;
}
