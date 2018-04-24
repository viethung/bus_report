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
                // console.log(responseOK.data)
                deferred.resolve(responseOK.data);
              },
              function(responseErr) {
                console.log(responseErr);
                deferred.reject(responseErr);
              }
            );

          return deferred.promise;
        }
      }
    };
  });
