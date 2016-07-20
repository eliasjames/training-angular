angular.module('sbuxJukebox')
  .directive('sbuxAddJukeboxSongs', function ($compile) {
    return {
      link: function (scope, element) {
        scope.addSongsUi = function () {
          var uiTemplate = '<jukebox-ui></jukebox-ui>';
          var uiFn = $compile(uiTemplate);
          var uiCompiles = uiFn(scope);
          console.log('directive ', scope);
          angular.element('md-content').after(uiCompiles);
        }
      }
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
