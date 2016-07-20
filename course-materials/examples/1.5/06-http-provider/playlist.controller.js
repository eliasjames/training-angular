    angular.module('ejApp', [])
    .controller('ejJukebox', ['ejSongsAjax', '$scope', function (ejSA, $scope) {
    	$scope.editSong;
    	$scope.songs;
    	ejSA.then(function (resp) {
            console.log(resp);
            $scope.songs = resp.data.songs;
        });
    	$scope.destroy = function (idx) {
    		$scope.songs.splice($scope.songs.indexOf(idx), 1);
    	}
    	$scope.editingSong = function(idx) {
    		$scope.editSong = angular.copy($scope.songs[idx]);
    		$scope.editingIndex = idx;
    	}
    	$scope.saveSong = function (song, idx) {
    		var songBeingEdited = $scope.songs[idx];
    		console.log(idx);
    		if (songBeingEdited) {
    			$scope.songs[idx] = song;
    		} else {
    			$scope.songs.push(song);
    		}
    		$scope.editSong = {};
    		$scope.editingIndex = '';
    	}

    }]);
