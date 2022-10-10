// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../Graphic ../../../core/maybe ../../../geometry/Polygon ../../../rest/locator/addressToLocations ../../../rest/locator/locationToAddress ../../../rest/locator/suggestLocations ../../../rest/support/AddressToLocationsParameters ../../../rest/support/LocationToAddressParameters ../../../rest/support/SuggestLocationsParameters ./geometryUtils".split(" "),function(q,B,w,C,D,E,F,G,H,I,v){function x(a,c){if(c.localSearchDisabled)return null;c=null==a?void 0:a.scale;return"number"===
typeof c&&3E5>=c?a.get("extent.center"):null}function J(a,c){const {source:b,spatialReference:e,location:f,sourceIndex:g,view:k}=a,{apiKey:r,url:h,zoomScale:l,defaultZoomScale:d}=b,m=k&&k.scale;a=c&&c.signal;c=new H;c.location=f;r&&(c.apiKey=r);e&&(c.outSpatialReference=e);return E.locationToAddress(h,c,{signal:a}).then(t=>y([t],{sourceIndex:g,scale:m,view:k,zoomScale:l,defaultZoomScale:d})).catch(()=>[])}function z(a,c){const {filter:b,withinViewEnabled:e}=a;a=c&&c.extent;return(c=v.createExtentFromGeometry(b&&
b.geometry,c,c&&c.scale))||(e&&a?a:void 0)}function K(a,c){const {source:b,suggestResult:e,spatialReference:f,view:g,maxResults:k,sourceIndex:r}=a,h=b&&b.zoomScale,l=b&&b.defaultZoomScale;if(!e.text.trim())return Promise.resolve(null);a=`${!e.key&&b.prefix?b.prefix:""}${e.text}${!e.key&&b.suffix?b.suffix:""}`;const d=new G,{apiKey:m,url:t}=b,n=g&&g.scale;var p=z(b,g);c=c&&c.signal;m&&(d.apiKey=m);if(!t)return Promise.resolve(null);b.categories&&(d.categories=b.categories);b.locationType&&(d.locationType=
b.locationType);f&&(d.outSpatialReference=f);const u=x(g,b);u&&(d.location=u);d.maxLocations=k;p&&(d.searchExtent=w.unwrap(p));b.countryCode&&(d.countryCode=b.countryCode);({key:p}=e);const A=`${p}`;p&&(d.magicKey=A);d.address={};d.address[b.singleLineFieldName||"Single Line Input"]=a;b.outFields&&(d.outFields=b.outFields);return D.addressToLocations(t,d,{signal:c}).then(L=>y(L,{key:A,scale:n,sourceIndex:r,view:g,zoomScale:h,defaultZoomScale:l}))}function M(a,c){return a.map(b=>({text:b.text,key:b.magicKey,
sourceIndex:c}))}function y(a,c){return a.filter(Boolean).map(b=>{{const {key:g,scale:k,sourceIndex:r,view:h,zoomScale:l,defaultZoomScale:d}=c,{attributes:m,extent:t,location:n,address:p}=b;b=new B({geometry:n,attributes:m});var e=t||n,f=v.createExtentFromGeometry(e,h,k);e="number"===typeof l?v.scaleExtent(f,h,l):"number"===typeof d&&"point"===e.type?v.scaleExtent(f,h,d):f;f=n?`${n.x},${n.y}`:"";f=p||f;const u=b.clone();w.isSome(e)&&(u.geometry=C.fromExtent(e));b={extent:e,feature:b,target:u,key:g,
name:f,sourceIndex:r}}return b})}q.getLocation=x;q.getResults=function(a,c){return a.location?J(a,c):K(a,c)};q.getSuggestions=function(a,c){const {source:b,spatialReference:e,view:f,suggestTerm:g,maxSuggestions:k,sourceIndex:r}=a;a=new I;const {apiKey:h,url:l}=b,d=z(b,f);c=c&&c.signal;if(!l)return Promise.resolve(null);h&&(a.apiKey=h);b.categories&&(a.categories=b.categories);e&&(a.outSpatialReference=e);const m=x(f,b);m&&(a.location=m);if(!g.trim())return Promise.resolve(null);const {prefix:t="",
suffix:n=""}=b;a.text=`${t}${g}${n}`;d&&(a.searchExtent=w.unwrap(d));a.maxSuggestions=k;b.countryCode&&(a.countryCode=b.countryCode);return F.suggestLocations(l,a,{signal:c}).then(p=>M(p,r))};q.isArcGISWorldGeocoder=function(a){return a?/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/i.test(a):!1};q.isMeteredArcGISWorldGeocoder=function(a){return a?/(?:geocode\-api\.arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/i.test(a):!1};q.isProxiedArcGISWorldGeocoder=function(a){return a?
/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/i.test(a):!1};q.meteredArcGISLocatorUrl="https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});