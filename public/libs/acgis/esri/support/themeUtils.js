// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function c(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-theme-name").replace(/\s|'|"/g,"").startsWith("dark")}function d(){return`${"calcite-theme-"}${c()?"dark":"light"}`}function f(a){Array.from(a.classList).forEach(e=>{e.startsWith("calcite-theme-")&&a.classList.remove(e)})}b.getCalciteThemeClass=d;b.isDarkTheme=c;b.setCalciteThemeClass=function(a){f(a);a.classList.add(d())};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});