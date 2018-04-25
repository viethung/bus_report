angular
  .module('BusReport.services', [])
  .factory('DataService', function($q, $http, BusServicesDataJSON) {
    "use strict"

    return {
      BusServicesData: null,

      load: function () {
        if(this.BusServicesData) {
          return $q.when(this.BusServicesData)
        } else {
          var deferred = $q.defer();

          $http
            .get(BusServicesDataJSON)
            .then(
              function(responseOK) {
                deferred.resolve(responseOK.data);
              },
              function(responseErr) {
                deferred.reject(responseErr);
              }
            );

          return deferred.promise;
        }
      }
    };
  });
