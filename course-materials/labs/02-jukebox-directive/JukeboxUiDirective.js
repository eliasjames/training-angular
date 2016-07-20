angular.module('our-app')
  .directive('jukeboxUi', function () {
    return {
      link: function (scope, element, attrs) {
        scope.editMode = (attrs.jukeboxUi === 'add-edit');
      },
      templateUrl: 'jukebox-ui-template.html'
    }
  });
