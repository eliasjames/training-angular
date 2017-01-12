import { Performance } from './performance.class';
import { Song } from './song.class';
import { Artist } from './artist.class';

describe('Performance', () => {

  var mySong = new Song( 'Always On My Mind' );
  var myArtist = new Artist( 'Willie Nelson' );
  var myPerformance = new Performance( myArtist, mySong, 'Country' );

  it ('should work', () => {
    expect( myPerformance.artist.artistName ).toEqual( 'Willie Nelson' );
  });
});
