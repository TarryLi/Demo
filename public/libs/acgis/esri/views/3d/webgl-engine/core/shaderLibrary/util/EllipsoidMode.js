// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../geometry/support/spatialReferenceUtils"],function(b,c){b.EllipsoidMode=void 0;(function(a){a[a.Earth=1]="Earth";a[a.Mars=2]="Mars";a[a.Moon=3]="Moon";a[a.COUNT=4]="COUNT"})(b.EllipsoidMode||(b.EllipsoidMode={}));b.getEllipsoidMode=function(a){return a&&c.isMars(a)?b.EllipsoidMode.Mars:a&&c.isMoon(a)?b.EllipsoidMode.Moon:b.EllipsoidMode.Earth};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});