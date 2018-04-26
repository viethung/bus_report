angular
  .module('BusReport.controllers', [])
  .controller('DisplayController', function($scope, DataService) {
    DataService
      .load()
      .then(function(BusServicesData) {
        $scope.BusServicesData = BusServicesData.data
      });

    $scope.toggleBusRoutesClick = function(e) {
      var p = angular.element(e.target).parent();
      $scope.toggleBusRoutesPanel(p)
    };

    $scope.toggleBusRoutesKeyDown = function(e) {
      // Only type enter key (keycode = 13) to toggle show/hide
      if(e.keyCode === 13) {
        var p = angular.element(e.target).parent();
        $scope.toggleBusRoutesPanel(p)
      }

    };

    $scope.toggleBusRoutesPanel = function(element) {
      

      if(element.hasClass('hide')) {
        // display content
        element.removeClass('hide').addClass('show')
      } else if(element.hasClass('show')) {
        // hide content
        element.removeClass('show').addClass('hide')
      }
    }
  });
