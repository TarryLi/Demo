// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../../../chunks/_rollupPluginBabelHelpers","../../../support/arcadeOnDemand"],function(z,A){function t(a,n=!0,e=!0){return isFinite(a)&&(n||0!==a)&&(e||0<=a)}function p(){p=z._asyncToGenerator(function*(a){const {features:n,attributes:e,includeZeros:u,includeNegatives:v,view:h}=a;let w=a=0,k=Infinity,l=-Infinity;var c=null;const x=new Map;for(var f=0;f<e.length;f++){var {valueExpression:b}=e[f];b&&(c||({arcadeUtils:c}=yield A.loadArcade()),x.set(f,c.createFunction(b)))}f=h&&c&&c.getViewInfo({viewingMode:"2d"===
h.type?"map":h.viewingMode,scale:h.scale,spatialReference:h.spatialReference});for(const q of n){var d=q.geometry;b=q.attributes;if(d&&(d=d.extent)&&(d=d.width*d.height,0<d)){let r=0;const B=c&&c.createExecContext(q,f);for(let m=0;m<e.length;m++){const {field:y,valueExpression:C}=e[m];var g=null;y?g=b[y]:C&&(g=x.get(m),g=c.executeFunction(g,B));t(g,u,v)&&(r+=g||0)}t(r,u,v)&&(b=r/d,++a,w+=b,b<k&&(k=b),b>l&&(l=b))}}return{minDensity:Infinity!==k?k:null,maxDensity:-Infinity!==l?l:null,avgDensity:a?w/
a:null}});return p.apply(this,arguments)}return function(a){return p.apply(this,arguments)}});