angular.module("BusReport.directives",[]).directive("routeVariant",function(t){"use strict";return{restrict:"E",replace:!0,link:function(t,e,i){var s='<div class="col-sm text-secondary">UNKNOWN</div>';"UNKNOWN"!==t.bus.routeVariant&&(s='<div class="col-sm"><span>'+t.bus.routeVariant.replace(/\s/,"</span> ")+"</div>"),e.replaceWith(s)}}}).directive("busStatus",function(t){"use strict";var e=function(t){var e=t.bus.deviationFromTimetable;return isNaN(e)||!e?'<div class="col-sm text-secondary">Unknown</div>':e<0?'<div class="col-sm text-danger">Early</div':Math.max(e,0)===Math.min(e,299)?'<div class="col-sm text-success">On Time<div>':e>=300?'<div class="col-sm text-primary">Late</div':void 0};return{restrict:"E",replace:!0,link:function(i,s,r){var a=t(e(i))(i);s.replaceWith(a)}}});