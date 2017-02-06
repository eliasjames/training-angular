import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PerformanceComponent } from './performance.component';
import { ArtistComponent } from './artist.component';
import { SongComponent } from './song.component';
import { HiddenDirective } from './hidden.directive';

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
    HiddenDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
