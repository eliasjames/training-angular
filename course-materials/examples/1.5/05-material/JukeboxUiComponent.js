angular.module('sbuxJukebox')
  .component('jukeboxUi', {
    bindings: {
      savedSongs: '='
    },
    controller: 'JukeboxUiController',
    templateUrl: ['$element', '$attrs', function (element, attrs) {
      return 'templates/jukebox-ui-template.html';
    }]
  });
