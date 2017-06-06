import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist.component';
import { PerformanceComponent } from './performance.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, ArtistComponent, PerformanceComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
