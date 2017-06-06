angular.module('ejApp')    
    .component('ejSongsComponent', {
    		controller: [
    			'ejSongsHttpService', 
          'ejSongsUrl',
    			'$scope', 
    			function ejSongsComponent (ejSHS, ejSongsUrl, $scope) {
            $scope.ejSongsUrl = ejSongsUrl;
	    			ejSHS.then(function (resp) {
			            console.log(resp);
			            $scope.songs = resp.data.songs;
		        	});
    			}
    		],
    		controllerAs: 'sW',
    		link: function (scope, elmt, attrs) {
    			console.log(scope);
    		}, 
    		templateUrl: 'songs-ui.html'
    	}
    );
