songsApp.controller( 'songsController', [ '$sce', '$scope', 'httpService', 'abbreviationFilterFilter', function songsControllerInit( $sce, $scope, httpSrv, abbrvFilter ) {
  this.songs = [];
  var that = this;

  httpSrv.fetch('/songs.json').then( function( data ) {
    that.songs = data.data;
    that.songs.forEach( function( eachSong ) {
      eachSong.title = abbrvFilter( eachSong.title, 7 );
    });
  });
  this.startNewSong = function startNewSong() {
    this.newSong = {};
  };
  this.finishNewSong = function finishNewSong( isValid ) {
    this.songs.push( {
      artist: $sce.trustAsHtml( this.newSong.artist ),
      title: $sce.trustAsHtml( this.newSong.title ),
      genre: this.newSong.genre
    });
    delete this.newSong;
  }
}]);
