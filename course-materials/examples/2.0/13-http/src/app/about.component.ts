import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'about',
  providers: [ HttpService ],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  title: string;
  gottenData: string;

  constructor( myService: HttpService ) {
    myService.getData( 'some/path' ).then( ( resp )=>{
      this.gottenData = resp.json().data;
    }).catch( ( err )=>{ console.error( err ) });
  }
}
