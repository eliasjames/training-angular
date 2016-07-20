import {Component} from '@angular/core';
import {SonglistComponent} from './songlist.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1> <sbux-song-list>Loading...</sbux-song-list>',
    directives: [SonglistComponent]
})
export class AppComponent { }
