import { Injectable } from '@angular/core';
import { Song } from './song.class';

@Injectable()

export class SongService {
  songList: Song[];

  constructor() {
    this.songList = [
      new Song( 'Always On My Mind' ), 
      new Song( 'She Rides' ), 
      new Song( 'I Only Have Eyes For You' )
    ];
  }
  getSongs() {
    return this.songList;
  }
}
