// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){e.ddtAscensionZoomOnly=function(a,b){return-a.halfWindowSize/(b*b*a.desiredPixelFlow*Math.LN2)};e.ddtAscensionZoomPan=function(a,b,c){const d=b-a.compared.sourceZoom,f=1/d,g=1/b,h=Math.log(a.compared.sourceZoom*g);c=(c.ascensionFactor*Math.LN2*a.compared.pan+a.halfWindowPanAtZoom(d))/a.halfWindowPanAtZoom(1);return a.halfWindowSize*f*(-2*f*g*c+2*f*h+2*g-2*h*c/(d*d)-c/(b*b))/(a.desiredPixelFlow*Math.LN2)};e.ddtDescensionZoomOnly=function(a,b){return-a.halfWindowSize/
(b*b*a.desiredPixelFlow*Math.LN2)};e.ddtDescensionZoomPan=function(a,b,c){const d=b-a.compared.targetZoom,f=1/d,g=1/b,h=Math.log(b/a.compared.targetZoom);c=(a.halfWindowPanAtZoom(b)+c.descensionFactor*Math.LN2*a.compared.pan-a.halfWindowPanAtZoom(a.compared.targetZoom))/a.halfWindowPanAtZoom(1);return a.halfWindowSize*f*(-2*f*g*c-2*f*h+2*g+2*h*c/(d*d)-c/(b*b))/(a.desiredPixelFlow*Math.LN2)};e.ddtPanion=function(a,b,c){return-2*a.compared.pan*a.halfWindowSize*(c.ascensionFactor+c.descensionFactor-
1)/(a.desiredPixelFlow*a.halfWindowPanAtZoom(b*b*b))};e.dtAscensionZoomOnly=function(a,b){return a.halfWindowSize/(b*a.desiredPixelFlow*Math.LN2)};e.dtAscensionZoomPan=function(a,b,c){const d=1/b,f=Math.log(a.compared.sourceZoom*d),g=1/a.desiredPixelFlow,h=1/Math.LN2;b-=a.compared.sourceZoom;const k=1/b;c=(c.ascensionFactor*Math.LN2*a.compared.pan+a.halfWindowPanAtZoom(b))/a.halfWindowPanAtZoom(1);return a.halfWindowSize*d*g*h*k*c-a.halfWindowSize*f*g*h*k+a.halfWindowSize*f*g*h*c/(b*b)};e.dtDescensionZoomOnly=
function(a,b){return a.halfWindowSize/(b*a.desiredPixelFlow*Math.LN2)};e.dtDescensionZoomPan=function(a,b,c){const d=Math.log(b/a.compared.targetZoom),f=1/a.desiredPixelFlow,g=1/Math.LN2,h=-b+a.compared.targetZoom,k=1/h;c=(-a.halfWindowPanAtZoom(b)-c.descensionFactor*Math.LN2*a.compared.pan+a.halfWindowPanAtZoom(a.compared.targetZoom))/a.halfWindowPanAtZoom(1);return-a.halfWindowSize*d*f*g*k+a.halfWindowSize*d*f*g*c/(h*h)+a.halfWindowSize*f*g*k*c/b};e.dtPanion=function(a,b,c){return a.compared.pan*
a.halfWindowSize*(c.ascensionFactor+c.descensionFactor-1)/(a.desiredPixelFlow*a.halfWindowPanAtZoom(b*b))};e.tAscensionZoomOnly=function(a,b){return-a.halfWindowSize*Math.log(a.compared.sourceZoom/b)/(a.desiredPixelFlow*Math.LN2)};e.tAscensionZoomPan=function(a,b,c){const d=a.halfWindowPanAtZoom(b-a.compared.sourceZoom);return-a.halfWindowSize*(c.ascensionFactor*Math.LN2*a.compared.pan+d)*Math.log(a.compared.sourceZoom/b)/(a.desiredPixelFlow*Math.LN2*d)};e.tBaseLine=function(a){const b=Math.LN2*a.compared.pan,
c=a.halfWindowPanAtZoom(a.compared.sourceZoom-a.compared.targetZoom),d=a.halfWindowSize*Math.log(a.compared.sourceZoom/a.compared.targetZoom)/(a.desiredPixelFlow*Math.LN2*c);return a.compared.sourceZoom<=a.compared.targetZoom?d*(b-c):d*(b+c)};e.tDescensionZoomOnly=function(a,b){return a.halfWindowSize*Math.log(b/a.compared.targetZoom)/(a.desiredPixelFlow*Math.LN2)};e.tDescensionZoomPan=function(a,b,c){return a.halfWindowSize*(-a.halfWindowPanAtZoom(b)-c.descensionFactor*Math.LN2*a.compared.pan+a.halfWindowPanAtZoom(a.compared.targetZoom))*
Math.log(b/a.compared.targetZoom)/(a.desiredPixelFlow*Math.LN2*a.halfWindowPanAtZoom(-b+a.compared.targetZoom))};e.tPanion=function(a,b,c){return-a.compared.pan*a.halfWindowSize*(c.ascensionFactor+c.descensionFactor-1)/(a.desiredPixelFlow*a.halfWindowPanAtZoom(b))};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});