import { Artist } from './artist.class';
import { Song } from './song.class';
import { Genre } from './genre.class';

export class Performance {
  song: Song;
  artist: Artist;
  genre: Genre;

  constructor( artist: Artist, song: Song, genre: Genre ) {
    this.song = song;
    this.artist = artist;
    this.genre = genre;
  }
}
