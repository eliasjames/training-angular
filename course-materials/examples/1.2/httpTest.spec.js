describe( 'songs', function() {
  beforeEach(function () {
    module('songsApp');
  });

  it( 'should mock http', function () {
    var hB;
    var hS;
    var xhrData;

    inject( function( $httpBackend ) {
      hB = $httpBackend;
    });
    inject([ 'httpService', function( httpService ) {
      hS = httpService;
    }]);

    hB.when( 'GET', 'test-songs.json').respond( { artist: 'Kris Kristofferson', song: 'Bobby McGee' } );
    hS.fetch( 'test-songs.json' ).then(
      function( resp ) { xhrData = resp.data; });
    hB.flush();
    expect( xhrData ).toBeDefined();
    expect( xhrData ).toEqual( { artist: 'Kris Kristofferson', song: 'Bobby McGee' } );
  });
});
