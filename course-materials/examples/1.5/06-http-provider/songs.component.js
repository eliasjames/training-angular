angular.module('ejApp')    
    .component('ejSongsComponent', {
    		controller: [
    			'ejSongsHttpService', 
    			'$scope', 
    			function ejSongsComponent (ejSHS, $scope) {
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