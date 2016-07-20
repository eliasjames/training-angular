import { Component } from '@angular/core';

@Component({
  selector: 'sbux-song-list',
  template: '<ol> <li *ngFor="let eachSong of songsList"> {{ eachSong }} </li> </ol>'
})
export class SonglistComponent {
  songsList = [
    'On The Road Again',
    'Twist And Shout',
    'Miles Runs The Voodoo Down'
  ]
}
