import { Component } from '@angular/core';
import { Artist } from './artist.class';

var myArtist = new Artist( 'Willie Nelson' );

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {
  myArtist = myArtist;
}
