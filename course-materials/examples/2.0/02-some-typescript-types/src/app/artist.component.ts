import { Component, Input, OnInit } from '@angular/core';
import { Artist } from './artist.class';

@Component({
  selector: 'artist',
  template: '<h1>{{ artist.artistName }}</h1>',
})
export class ArtistComponent implements OnInit {
  @Input() newArtist: Artist;
  artist: Artist;

  ngOnInit() {
    this.artist = this.newArtist;  
  }
}
