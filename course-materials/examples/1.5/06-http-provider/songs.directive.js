angular.module('sbuxApp')    
    .directive('sbuxSongsDirective', function () {
    	return {
    		link: function (scope, elmt, attrs) {
    			console.log(scope);
    		}, 
    		templateUrl: 'songs-ui.html'
    	}
    });