import { Component, Input, OnInit } from '@angular/core';
import { Song } from './song.class';

@Component({
  selector: 'song',
  templateUrl: './song.component.html'
})
export class SongComponent implements OnInit {
	@Input() song: Song;
	@Input() editMode: Boolean;

	ngOnInit() {
    if ( !this.song ) {
      this.song = { songName: 'Empty song' };
    }
	}

  changeHandler( $event: Event ) {
    //let eventTarget<HTMLInputElement>=$event.target;
    this.song.songName = (<HTMLInputElement>$event.target).value;
    console.log( $event );
  }
}
