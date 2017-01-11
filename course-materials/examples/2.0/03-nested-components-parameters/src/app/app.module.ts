import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PerformanceComponent } from './performance.component';
import { ArtistComponent } from './artist.component';
import { SongComponent } from './song.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ArtistComponent,
    SongComponent,
    PerformanceComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
