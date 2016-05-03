app.directive('workspace', ['$rootScope', function($rootScope) {
  return {
    constrain: 'A',
    link: function(scope, element, attrs) {
      element.ready(function() {
        var packery = new Packery(element[0], {
          rowHeight: '.module-sizer',
          itemSelector: '.module',
          columnWidth: '.module-sizer'
        });
        angular.forEach(packery.getItemElements(), function(item) {
          var draggable = new Draggabilly(item);
          packery.bindDraggabillyEvents(draggable);
        });
        packery.layout();
      });
    }
  };
}]);