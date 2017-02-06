import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { SongService }  from './song.service';
import { AppComponent } from './app.component';
import { PerformanceComponent } from './performance.component';
import { ArtistComponent } from './artist.component';
import { SongComponent } from './song.component';
import { SongSingletonComponent } from './songsingleton.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ArtistComponent,
    SongComponent,
    SongSingletonComponent,
    PerformanceComponent
  ],
  providers: [ SongService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
