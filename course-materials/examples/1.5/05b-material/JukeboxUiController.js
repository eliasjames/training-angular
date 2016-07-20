angular.module('sbuxJukebox')
  .controller('JukeboxUiController', function($scope) {
    var blankSong = { title: '', genre: '' };
    $scope.savedSongs = [
      { title: 'Body and Soul', genre: 'Jazz' },
      { title: 'Twist and Shout', genre: 'Rock' },
      { title: 'On The Road Again', genre: 'Country' }
    ];
    $scope.genreList = ['Blues', 'Country', 'Jazz', 'Rock'];

    function resetSongForm () {
      $scope.editingSong = angular.copy(blankSong);
    }
    $scope.saveSong = function ( song, arrayIndex ) {
      if ( arrayIndex >= 0 ) {
        $scope.savedSongs[arrayIndex] = angular.copy(song);
      } else {
        $scope.savedSongs.push(song);
      }
      resetSongForm();
    }
    $scope.editSong = function ( editIndex ) {
      $scope.editingSong = angular.copy($scope.savedSongs[editIndex]);
      $scope.editingIndex = editIndex;
    }
    $scope.deleteSong = function ( index ) {
      $scope.savedSongs.splice(index, 1);
    }
    $scope.playSong = function ( index ) {
      var thisSong = $scope.savedSongs[ index ];
      if ( !thisSong.plays ) thisSong.plays = 0;
      thisSong.plays++;
    }
    $scope.editmode = true;
    $scope.getMatches = function (searchText) { 
      //console.log('buddy buddy buddy');
      return [{ display: searchText + ', buddy'}]; 
    }
  });
