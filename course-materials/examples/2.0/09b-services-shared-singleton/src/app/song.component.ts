import { Component, Input, OnInit } from '@angular/core';
import { Song } from './song.class';
import { SongService }  from './song.service';

@Component({
  selector: 'song',
  templateUrl: './song.component.html'
})
export class SongComponent implements OnInit {
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
