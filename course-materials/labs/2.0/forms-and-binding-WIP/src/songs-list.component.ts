import { Component, Input } from 'angular2/core';

@Component({
  selector: 'sbux-songs-list',
  templateUrl: 'src/songs-list.template.html'
})
export class sbuxSongsList {
  @Input() songsList:[];

  constructor() {
    this.editmode = true;
  }
  deleteSong(idx) {
    this.songsList.splice(idx, 1);
  }
}
