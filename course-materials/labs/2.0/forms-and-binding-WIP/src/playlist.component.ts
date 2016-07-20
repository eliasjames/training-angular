import { Component, Input } from 'angular2/core';

import { sbuxAddEditSong } from 'src/add-edit-song.component';
import { sbuxSongsList } from 'src/songs-list.component';

@Component({
  selector: 'sbux-playlist',
  templateUrl: 'src/playlist.component.html',
  directives: [ sbuxAddEditSong, sbuxSongsList ]
})
export class sbuxPlaylist {
  //@Input() songList:[];

  constructor() {
    this.editmode = true;
    this.playList = [
      { title: 'Body and Soul', genre: 'Jazz' },
      { title: 'Twist and Shout', genre: 'Rock' },
      { title: 'On The Road Again', genre: 'Country' }
    ];
  }
}
