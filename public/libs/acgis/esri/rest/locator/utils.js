// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.isValidExtent=function(a){return a&&"number"===typeof a.xmin&&"number"===typeof a.ymin&&"number"===typeof a.xmax&&"number"===typeof a.ymax};b.isValidLocation=function(a){return a&&"number"===typeof a.x&&"number"===typeof a.y};b.normalizeExtent=function(a){return a?a.shiftCentralMeridian():null};b.normalizePoint=function(a){return a?a.clone().normalize():null};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});