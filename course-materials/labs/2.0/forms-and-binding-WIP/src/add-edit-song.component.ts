import { Component } from 'angular2/core';

@Component({
  selector: 'sbux-add-edit-song',
  templateUrl: 'src/add-edit-song.template.html'
})
export class sbuxAddEditSong {
  constructor() {
    this.editmode = true;
  }
}
