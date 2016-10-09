songsApp.controller( 'songsController', function songsControllerInit( $scope, $http ) {
  this.songs = [];
  var that = this;

  $http.get( '/songs.json' ).then( function( data ) {
    that.songs = data.data;
  });

  this.startNewSong = function startNewSong() {
    this.newSong = {};
  };
  this.finishNewSong = function finishNewSong() {
    this.songs.push( this.newSong );
    delete this.newSong;
  }
});
