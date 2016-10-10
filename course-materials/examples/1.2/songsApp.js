angular.module( 'songsApp', [ 'ui.router' ] );
var songsApp = angular.module( 'songsApp' );
songsApp.config( function( $stateProvider ) {
  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h2>This is an app for songs.</h2>'
  };

  var songsState = {
    name: 'songs',
    url: '/songs',
    template: '<songs-directive></songs-directive>'
  };

  $stateProvider.state( aboutState );
  $stateProvider.state( songsState );
});
