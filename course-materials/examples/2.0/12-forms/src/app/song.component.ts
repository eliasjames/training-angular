import { Component, Input } from '@angular/core';
import { Song } from './song.class';
import { SongService } from './song.service';

@Component({
  selector: 'song',
  providers: [ SongService ],
  templateUrl: './song.component.html'
})
export class SongComponent {
	@Input() song: Song;
  @Input() editMode: Boolean;
  songList: Song[];

	constructor( songService: SongService ) {
    this.songList = songService.getSongs();
    console.log( this.songList );
	}
}
