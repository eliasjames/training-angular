songsApp.controller( 'songsController', function songsControllerInit( $scope ) {
  this.songs = [
    { genre: 'Post rock', title: 'TNT', artist: 'Tortoise' },
    { genre: 'Blues', title: 'Rock Me', artist: 'Muddy Waters' },
    { genre: 'Rock', title: '25 or 6 to 4', artist: 'Chicago' }
  ];
});
