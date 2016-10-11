describe( 'songs', function() {
  beforeEach(function () {
    module('songsApp');
  });

  it( 'should abbreviate to 8 chars by default', function () {
    var abbrvFilter;
    var testString = 'longer than 8 chars + &hellip;';
    var expectedResult = 'longer t&hellip;';
    var sceExpect;

    inject( function( $filter ) {
      abbrvFilter = $filter( 'abbreviationFilter' );
    });
    inject( function( $sce ) {
      sceExpect = $sce.trustAsHtml( expectedResult );
    });
    console.log( abbrvFilter( testString ) );
    console.log( sceExpect );
    expect( abbrvFilter( testString ).toString() ).toEqual( sceExpect.toString() );
  });
});
