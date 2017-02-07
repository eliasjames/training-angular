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
    myService.getData( 'public/test.json' ).then( ( resp )=>{
      this.gottenData = resp.json().data;
      console.log( resp );
    }).catch( ( err )=>{ console.error( err ) });
  }
}
