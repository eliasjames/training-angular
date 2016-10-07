songsApp.controller( 'songsController', function songsControllerInit( $scope ) {
    var demoStrictEquality = { genre: 'Post rock', title: 'TNT', artist: 'Tortoise' };
  this.songs = [
    demoStrictEquality,
    demoStrictEquality,
    { genre: 'Blues', title: 'Rock Me', artist: 'Muddy Waters' },
    { genre: 'Rock', title: '25 or 6 to 4', artist: 'Chicago' }
  ];

  this.startNewSong = function startNewSong() {
    this.newSong = {};
  };
  this.finishNewSong = function finishNewSong() {
    this.songs.push( this.newSong );
    delete this.newSong;
  }
});
