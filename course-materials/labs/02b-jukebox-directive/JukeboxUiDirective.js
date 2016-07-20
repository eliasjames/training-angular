angular.module('sbuxJukebox')
  .directive('jukeboxUi', function () {
    return {
      link: function (scope, element, attrs) {
        scope.editMode = (attrs.jukeboxUi === 'add-edit');
      },
      templateUrl: 'templates/jukebox-ui-template.html',
      replace: true
    }
  })
  .directive('sbuxJukeboxSongs', function () {
    return {
      templateUrl: 'templates/jukebox-songs-template.html'
    }
  })
  .directive('sbuxJukeboxAddEditForm', function () {
    return {
      templateUrl: 'templates/jukebox-add-edit-form-template.html'
    }
  });
