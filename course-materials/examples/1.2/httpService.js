songsApp.factory( 'httpService', ['$http', function( $http ) {
  return {
    fetch: function( location ) {
      return $http.get( location );
    }
  };
}]
);
