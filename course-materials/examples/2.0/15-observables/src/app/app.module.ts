import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ObserveMouseComponent } from './observemouse.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ObserveMouseComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
