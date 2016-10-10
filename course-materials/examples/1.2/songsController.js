songsApp.controller( 'songsController', [ '$scope', '$http', 'abbreviationFilterFilter', function songsControllerInit( $scope, $http, abbrvFilter ) {
  this.songs = [];
  var that = this;

  $http.get( '/songs.json' ).then( function( data ) {
    that.songs = data.data;
    that.songs.forEach( function( eachSong ) {
      eachSong.title = abbrvFilter( eachSong.title, 7 );
    });
  });

  this.startNewSong = function startNewSong() {
    this.newSong = {};
  };
  this.finishNewSong = function finishNewSong() {
    this.songs.push( this.newSong );
    delete this.newSong;
  }
}]);
