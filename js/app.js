angular
  .module('BusReport', ['BusReport.controllers', 'BusReport.services', 'BusReport.directives'])
  // .module('BusReport', ['BusReport.controllers', 'BusReport.services', 'BusReport.directives'])
  .constant('BusServicesDataJSON', './bus-services-data.json')
  // .constant('StatusColour', {
  //   'on-time' : 'green',
  //   'late'    : 'blue',
  //   'early'   : 'red',
  //   'unknown' : 'gray'
  // })
  // .constant('StatusText', {
  //   'on-time' : 'On Time',
  //   'late'    : 'Late',
  //   'early'   : 'Early',
  //   'unknown' : 'Unknown'
  // })