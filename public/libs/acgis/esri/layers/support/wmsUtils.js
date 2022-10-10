// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../core/maybe ../../core/urlUtils ../../geometry/Extent ../../geometry/SpatialReference ../ogc/crsUtils".split(" "),function(v,ba,ca,da,E,L,N){function O(a){if(0<a.spatialReferences.length)return a.spatialReferences;if(a.sublayers)for(const c of a.sublayers)if(a=O(c),0<a.length)return a;return[]}function P(a){let c=[];a.forEach(b=>{c.push(b);b.sublayers&&b.sublayers.length&&(c=c.concat(P(b.sublayers)),delete b.sublayers)});return c}function F(a,c,b){var d;return null!=
(d=c.getAttribute(a))?d:b}function m(a,c){for(let b=0;b<c.childNodes.length;b++){const d=c.childNodes[b];if(d.nodeType===Node.ELEMENT_NODE&&d.nodeName===a)return d}return null}function G(a,c){const b=[];for(let d=0;d<c.childNodes.length;d++){const e=c.childNodes[d];e.nodeType===Node.ELEMENT_NODE&&e.nodeName===a&&b.push(e)}return b}function w(a,c,b){return(a=m(a,c))?a.textContent:b}function C(a,c,b){if(!a)return null;var d=parseFloat(a.getAttribute("minx")),e=parseFloat(a.getAttribute("miny")),g=parseFloat(a.getAttribute("maxx"));
a=parseFloat(a.getAttribute("maxy"));b?(b=isNaN(e)?-Number.MAX_VALUE:e,d=isNaN(d)?-Number.MAX_VALUE:d,e=isNaN(a)?Number.MAX_VALUE:a,g=isNaN(g)?Number.MAX_VALUE:g):(b=isNaN(d)?-Number.MAX_VALUE:d,d=isNaN(e)?-Number.MAX_VALUE:e,e=isNaN(g)?Number.MAX_VALUE:g,g=isNaN(a)?Number.MAX_VALUE:a);c=new L({wkid:c});return new E({xmin:b,ymin:d,xmax:e,ymax:g,spatialReference:c})}function Q(a,c){if(a=m(c,a))if(a=m("DCPType",a))if(a=m("HTTP",a))if(a=m("Get",a)){var b=a=(a=m("OnlineResource",a))?F("xlink:href",a,
null):null;if(b){b.indexOf("\x26")===b.length-1&&(b=b.substring(0,b.length-1));var d;a=["service","request"];c=[];b=da.urlToObject(b);for(d in b.query)b.query.hasOwnProperty(d)&&(a.includes(d.toLowerCase())||c.push(d+"\x3d"+b.query[d]));return d=b.path+(c.length?"?"+c.join("\x26"):"")}}return null}function R(a,c){const b=G("Operation",a);if(0===b.length)return a=m(c,a),G("Format",a).map(e=>e.textContent);const d=[];b.forEach(e=>{e.getAttribute("name")===c&&G("Format",e).forEach(g=>{d.push(g.textContent)})});
return d}function S(a,c,b){a=m(c,a);if(!a)return b;({textContent:a}=a);if(null==a||""===a)return b;a=Number(a);return isNaN(a)?b:a}function H(a,c,b){var d;if(!a)return null;const e={id:b.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===a.getAttribute("queryable"),spatialReferences:[],sublayers:null},g=m("LatLonBoundingBox",a),p=m("EX_GeographicBoundingBox",a);let q=null;g&&(q=C(g,4326));p&&(q=new E(0,0,0,0,new L({wkid:4326})),q.xmin=parseFloat(w("westBoundLongitude",p,"0")),q.ymin=parseFloat(w("southBoundLatitude",
p,"0")),q.xmax=parseFloat(w("eastBoundLongitude",p,"0")),q.ymax=parseFloat(w("northBoundLatitude",p,"0")));g||p||(q=new E(-180,-90,180,90,new L({wkid:4326})));e.minScale=S(a,"MaxScaleDenominator",0);e.maxScale=S(a,"MinScaleDenominator",0);const x=["1.0.0","1.1.0","1.1.1"].includes(c)?"SRS":"CRS";Array.prototype.slice.call(a.childNodes).forEach(f=>{if("Name"===f.nodeName)e.name=f.textContent||"";else if("Title"===f.nodeName)e.title=f.textContent||"";else if("Abstract"===f.nodeName)e.description=f.textContent||
"";else if("BoundingBox"===f.nodeName){var h=f.getAttribute(x);if(h&&0===h.indexOf("EPSG:")){var r=parseInt(h.substring(5),10);0===r||isNaN(r)||q||(q="1.3.0"===c?C(f,r,N.isAxesOrderReversedForWkid(r)):C(f,r))}(r=h&&h.indexOf(":"))&&-1<r&&(h=parseInt(h.substring(r+1,h.length),10),0===h||isNaN(h)||(h=I[h]?I[h]:h),f="1.3.0"===c?C(f,h,N.isAxesOrderReversedForWkid(h)):C(f,h),e.fullExtents.push(f))}else if(f.nodeName===x)f.textContent.split(" ").forEach(l=>{l=l.includes(":")?parseInt(l.split(":")[1],10):
parseInt(l,10);0===l||isNaN(l)||(l=I[l]?I[l]:l,e.spatialReferences.includes(l)||e.spatialReferences.push(l))});else if("Style"!==f.nodeName||e.legendURL)"Layer"===f.nodeName&&(f=H(f,c,b))&&(f.parentLayerId=e.id,e.sublayers||(e.sublayers=[]),e.sublayers.push(f));else if(f=m("LegendURL",f))if(f=m("OnlineResource",f))e.legendURL=f.getAttribute("xlink:href")});e.extent=null==(d=q)?void 0:d.toJSON();e.dimensions=G("Dimension",a).filter(f=>f.getAttribute("name")&&f.getAttribute("units")&&f.textContent).map(f=>
{const h=f.getAttribute("name"),r=f.getAttribute("units"),l=f.textContent,k=f.getAttribute("unitSymbol"),y=f.getAttribute("default"),A="0"!==F("default",f,"0"),t="0"!==F("nearestValue",f,"0");f="0"!==F("current",f,"0");return J({name:h,units:r})?{name:"time",units:"ISO8601",extent:T(l),default:T(y),multipleValues:A,nearestValue:t,current:f}:M({name:h,units:r})?{name:"elevation",units:r,extent:U(l),unitSymbol:k,default:U(y),multipleValues:A,nearestValue:t}:{name:h,units:r,extent:V(l),unitSymbol:k,
default:V(y),multipleValues:A,nearestValue:t}});return e}function ea(a){return Array.isArray(a)&&0<a.length&&a[0]instanceof Date}function M(a){return/^elevation$/i.test(a.name)&&/^(epsg|crs):\d+$/i.test(a.units)}function J(a){return/^time$/i.test(a.name)&&/^iso8601$/i.test(a.units)}function U(a){if(!a)return null;const c=a.includes("/");a=a.split(",");return c?a.map(b=>{var d=b.split("/");if(2>d.length)return null;b=parseFloat(d[0]);const e=parseFloat(d[1]);d=3<=d.length&&"0"!==d[2]?parseFloat(d[2]):
void 0;return{min:b,max:e,resolution:d}}).filter(b=>b):a.map(b=>parseFloat(b))}function V(a){if(!a)return null;const c=a.includes("/");a=a.split(",");return c?a.map(b=>{b=b.split("/");return 2>b.length?null:{min:b[0],max:b[1],resolution:3<=b.length&&"0"!==b[2]?b[2]:void 0}}).filter(b=>b):a}function T(a){if(!a)return null;const c=a.includes("/");a=a.split(",");return c?a.map(b=>{var d=b.split("/");if(2>d.length)return null;b=new Date(d[0]);const e=new Date(d[1]);d=3<=d.length&&"0"!==d[2]?W(d[2]):void 0;
return{min:b,max:e,resolution:d}}).filter(b=>b):a.map(b=>new Date(b))}function W(a){var c=a.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);if(!c)return null;a=B(c[1]);const b=B(c[2]),d=B(c[3]),e=B(c[4]),g=B(c[5]);c=B(c[6]);return{years:a,months:b,days:d,hours:e,minutes:g,seconds:c}}function B(a){if(!a)return 0;a=a.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!a)return 0;a=a[0].replace(",",".");return Number(a)}
const I={84:4326,83:4269,27:4267},X=new Set([102100,3857,102113,900913]),fa=new Set([3395,54004]);v.fromISODuration=W;v.getPopupLayers=function(a){return a.length?a.filter(c=>c.popupEnabled&&c.name&&c.queryable).map(c=>c.name).join(","):""};v.isDimensionInterval=function(a){return void 0!==a.min&&void 0!==a.max};v.isElevationDimension=M;v.isGenericDimension=function(a){return!J(a)&&!M(a)};v.isTimeDimension=J;v.normalizeWKID=function(a,c){let b=a.wkid;if(ca.isNone(c))return b;!c.includes(b)&&a.latestWkid&&
(b=a.latestWkid);return X.has(b)?c.find(d=>X.has(d))||c.find(d=>fa.has(d))||102100:b};v.parseCapabilities=function(a){if(!a)return null;const c={idCounter:-1};"string"===typeof a&&(a=(new DOMParser).parseFromString(a,"text/xml"));a=a.documentElement;if("ServiceExceptionReport"===a.nodeName){var b=Array.prototype.slice.call(a.childNodes).map(n=>n.textContent).join("\r\n");throw new ba("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",
b);}var d=m("Capability",a),e=m("Service",a),g=m("Request",d);if(!d||!e||!g)return null;var p=m("Layer",d);if(!p)return null;const q="WMS_Capabilities"===a.nodeName||"WMT_MS_Capabilities"===a.nodeName?a.getAttribute("version"):"1.3.0";a=w("Title",e,"")||w("Name",e,"");var x=w("AccessConstraints",e,"");x=/^none$/i.test(x)?"":x;const f=w("Abstract",e,""),h=parseInt(w("MaxWidth",e,"5000"),10);e=parseInt(w("MaxHeight",e,"5000"),10);const r=R(g,"GetMap"),l=Q(g,"GetMap"),k=H(p,q,c);let y=0,A;Array.prototype.slice.call(d.childNodes).forEach(n=>
{"Layer"===n.nodeName&&(0===y?A=n:(1===y&&k.name&&(k.name="",k.sublayers.push(H(A,q,c))),k.sublayers.push(H(n,q,c))),y++)});if(!k)return null;var t;d=k.fullExtents;(t=k.sublayers)||(t=[]);0===t.length&&t.push(k);p=k.extent;p||(p=new E(t[0].extent),k.extent=p.toJSON(),p=k.extent);const ha=0<k.spatialReferences.length?k.spatialReferences:O(k),Y=Q(g,"GetFeatureInfo");Y&&(g=R(g,"GetFeatureInfo"),g.includes("text/html")?b="text/html":g.includes("text/plain")&&(b="text/plain"));if(!b){const n=u=>{u&&(u.queryable=
!1,u.sublayers&&u.sublayers.forEach(z=>{n(z)}))};n(k)}g=P(t);t=k.minScale||0;const ia=k.maxScale||0,Z=k.dimensions;var K=g.reduce((n,u)=>n.concat(u.dimensions),[]);K=Z.concat(K).filter(J);let aa=null;if(0<K.length){let n=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;K.forEach(z=>{({extent:z}=z);ea(z)?z.forEach(D=>{n=Math.min(n,D.getTime());u=Math.max(u,D.getTime())}):z.forEach(D=>{n=Math.min(n,D.min.getTime());u=Math.max(u,D.max.getTime())})});aa={startTimeField:null,endTimeField:null,trackIdField:null,
timeExtent:[n,u]}}return{copyright:x,description:f,dimensions:Z,extent:p,fullExtents:d,featureInfoFormat:b,featureInfoUrl:Y,mapUrl:l,maxWidth:h,maxHeight:e,maxScale:ia,minScale:t,layers:g,spatialReferences:ha,supportedImageFormatTypes:r,timeInfo:aa,title:a,version:q}};v.toISOString=function(a){return a.toISOString().replace(/\.[0-9]{3}/,"")};Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});