angular.module("BusReport.controllers",[]).controller("DisplayController",function(s,a){a.load().then(function(a){s.BusServicesData=a.data,console.log(s.BusServicesData)}),s.toggleBusRoutes=function(s){var a=angular.element(s.target).parent();a.hasClass("hide")?a.removeClass("hide").addClass("show"):a.hasClass("show")&&a.removeClass("show").addClass("hide")}});