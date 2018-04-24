angular
  .module('BusReport.directives', [])
  .directive('routeVariant', function($compile) {
    'use strict';
    var linker = function(scope, element, attrs) {
      var html = '<div class="col-sm text-secondary">UNKNOWN</div>';
      if(scope.bus.routeVariant !== 'UNKNOWN') {
        html = '<div class="col-sm"><span>' + scope.bus.routeVariant.replace(/\s/,'</span> ') + '</div>';
      }
      element.replaceWith(html);
    }
    return {
        restrict: 'E',
        replace: true,
        link: linker
    };
  })
  .directive('busStatus', function($compile) {
    'use strict';
    var getStatus = function(scope) {
      var d = scope.bus.deviationFromTimetable

      if(isNaN(d) || !d)
        return '<div class="col-sm text-secondary">Unknown</div>';

      if(d < 0) {
        return '<div class="col-sm text-danger">Early</div';
      }

      if(Math.max(d, 0) === Math.min(d, 299)) {
        return '<div class="col-sm text-success">On Time<div>'
      }

      if(d >= 300) {
        return '<div class="col-sm text-primary">Late</div';
      }
    }

    var linker = function(scope, element, attrs) {
      var html = $compile(getStatus(scope))(scope);
      element.replaceWith(html);
    }
    return {
      restrict: 'E',
      replace: true,
      link: linker
    }
  });