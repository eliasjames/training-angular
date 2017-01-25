import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PerformanceComponent } from './performance.component';
import { AboutComponent } from './about.component';
import { ArtistComponent } from './artist.component';
import { ArtistBirthdayPipe } from './artist.birthday.pipe';
import { SongComponent } from './song.component';

const appRoutes: Routes = [
  {
		path: 'performances/:id',
		component: PerformanceComponent
	},
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Dynamic Title' }
  },
  { path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  { path: '**', 
		component: AboutComponent,
		data: { title: 'Page not found' }
	}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
		RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AboutComponent,
    AppComponent,
    ArtistComponent,
    SongComponent,
    PerformanceComponent,
    ArtistBirthdayPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
