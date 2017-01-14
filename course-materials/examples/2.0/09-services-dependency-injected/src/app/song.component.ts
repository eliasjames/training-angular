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
      this.song = new Song();
    }
	}
}
