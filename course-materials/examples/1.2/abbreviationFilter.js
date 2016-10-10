songsApp.filter( 'abbreviationFilter', function abbrvFiltInit( $sce ) {
  return function abbrvFilter( text, abbrevLength ) {
    var abbrvText = new String( text );
    var abbrevLength = abbrevLength || 8;
    if ( abbrvText.length > abbrevLength ) {
      return $sce.trustAsHtml( abbrvText.substring( 0, abbrevLength ) + '&hellip;' );
    } else {
      return $sce.trustAsHtml( abbrvText.toString() );
    }
  }
});
