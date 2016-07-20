angular.module('ejApp')
	.factory('ejSongsHttpService', ['ejSongsUrl', '$http', function (ejSongsUrl, $http) {
		return $http({
			method: 'GET',
			url: ejSongsUrl
		});
	}]);
