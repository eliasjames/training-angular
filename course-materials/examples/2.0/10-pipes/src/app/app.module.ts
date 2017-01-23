import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PerformanceComponent } from './performance.component';
import { ArtistComponent } from './artist.component';
import { ArtistBirthdayPipe } from './artist.birthday.pipe';
import { SongComponent } from './song.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ArtistComponent,
    SongComponent,
    PerformanceComponent,
    ArtistBirthdayPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
