import { Component, Input, OnInit } from '@angular/core';
import { Song } from './song.class';
import { SongService }  from './song.service';

@Component({
  selector: 'song-singleton',
  templateUrl: './songsingleton.component.html'
})
export class SongSingletonComponent implements OnInit {
	@Input() song: Song;
  songList: Song[];
  songService: SongService;

  constructor( songService: SongService ) {
    this.songList = songService.getSongs();    
    this.songService = songService;
  }

	ngOnInit() {
    if ( !this.song ) {
      this.song = { songName: 'Empty song' };
    }
	}
}
