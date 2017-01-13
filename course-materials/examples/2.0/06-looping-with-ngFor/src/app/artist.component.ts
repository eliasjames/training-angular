import { Component, Input, OnInit } from '@angular/core';
import { Artist } from './artist.class';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {
  @Input() artist: Artist;
}
