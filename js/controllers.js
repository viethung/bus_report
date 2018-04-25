angular
  .module('BusReport.controllers', [])
  .controller('DisplayController', function($scope, DataService) {
    DataService
      .load()
      .then(function(BusServicesData) {
        $scope.BusServicesData = BusServicesData.data
      });

    $scope.toggleBusRoutes = function(e) {
      var p = angular.element(e.target).parent();

      if(p.hasClass('hide')) {
        // display content
        p.removeClass('hide').addClass('show')
      } else if(p.hasClass('show')) {
        // hide content
        p.removeClass('show').addClass('hide')
      }

    };
  });
