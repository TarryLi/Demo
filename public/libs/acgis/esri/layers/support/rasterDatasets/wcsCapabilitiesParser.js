// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/Error","../../../geometry/Extent","./xmlUtilities"],function(t,x,q,b){function m(c){return c.indexOf("?")===c.length-1?c.substring(0,c.length-1):c}function u(c){const e={};for(let f=0;f<c.childNodes.length;f++){var a=c.childNodes[f];if(1===a.nodeType){var d=b.getNodeNameIgnoreNS(a).toLowerCase();switch(d){case "title":case "abstract":e[d]=b.getElementValue(a);break;case "identifier":e.id=b.getElementValue(a);break;case "wgs84boundingbox":d=b.getSpaceDelimitedNumericValues(a,
"LowerCorner");a=b.getSpaceDelimitedNumericValues(a,"UpperCorner");e.lonLatEnvelope=new q({xmin:d[0],ymin:d[1],xmax:a[0],ymax:a[1],spatialReference:{wkid:4326}});break;case "coveragesummary":e.coverageSummaries=e.coverageSummaries||[],e.coverageSummaries.push(u(a))}}}return e}function v(c,e){if(c.coverageSummaries)for(let a=0;a<c.coverageSummaries.length;a++)c.coverageSummaries[a]["abstract"]=c.coverageSummaries[a]["abstract"]||c["abstract"],c.coverageSummaries[a].lonLatEnvelope=c.coverageSummaries[a].lonLatEnvelope||
c.lonLatEnvelope,c.coverageSummaries[a].title=c.coverageSummaries[a].title||c.title,v(c.coverageSummaries[a],e);null!=c.id&&e.push(c)}function w(c){const e=b.getElement(c.querySelector("Operation[name\x3dGetCapabilities]"),"Get").getAttribute("xlink:href")||"",a=b.getElement(c.querySelector("Operation[name\x3dDescribeCoverage]"),"Get").getAttribute("xlink:href")||"";c=b.getElement(c.querySelector("Operation[name\x3dGetCoverage]"),"Get").getAttribute("xlink:href")||"";return{getCapabilities:m(e),describeCoverage:m(a),
getCoverage:m(c)}}t.parseCapabilities=function(c,e=null){var a=null;a="string"===typeof c?(new DOMParser).parseFromString(c,"text/xml"):c;c=a.documentElement.getAttribute("version");e=(c||e||"1.0.0").slice(0,3);if("2.0"===e){var d=a,f=b.getElement(d,"ServiceIdentification"),l=b.getElementValue(f,"Title"),h=b.getElementValues(f,"ServiceTypeVersion");f=b.getElementValues(f,"Profile");a=b.getElement(d,"OperationsMetadata");a=w(a);var k=b.getElements(d,"Contents/CoverageSummary");e=[];for(let r=0;r<k.length;r++){var p=
k[r];const y=b.getElementValue(p,"CoverageId");var n=b.getElement(p,"WGS84BoundingBox");if(n){var g=b.getSpaceDelimitedNumericValues(n,"LowerCorner");n=b.getSpaceDelimitedNumericValues(n,"UpperCorner");g=new q({xmin:g[0],ymin:g[1],xmax:n[0],ymax:n[1],spatialReference:{wkid:4326}})}p=b.getElementValue(p,"CoverageSubtype")||"RectifiedGridCoverage";e.push({id:y,lonLatEnvelope:g,coverageSubType:p})}d=b.getElement(d,"ServiceMetadata");g=b.getElementValues(d,"formatSupported");d=b.getElementValues(d,"interpolationSupported").concat(b.getElementValues(d,
"InterpolationSupported"));g={name:l,supportedVersions:h,supportedFormats:g,supportedInterpolations:d,onlineResources:a,profiles:f,coverages:e}}else if("1.1"===e){g=b.getElementValue(a,"ServiceIdentification/Title");l=b.getElementValues(a,"ServiceIdentification/ServiceTypeVersion");h=b.getElement(a,"OperationsMetadata");h=w(h);f=[];a=b.getElement(a,"Contents");for(e=0;e<a.childNodes.length;e++)d=a.childNodes[e],1===d.nodeType&&b.isSameTagIgnoreNS(d,"CoverageSummary")&&v(u(d),f);a=b.getElementValues(a,
"SupportedFormat");g={name:g,onlineResources:h,coverages:f,supportedVersions:l,supportedFormats:a}}else if("1.0"===e){g=b.getElementValue(a,"Service/name");d=b.getElement(a,"Capability");e=null!=(f=b.getElement(d,"GetCapabilities/Get/OnlineResource").getAttribute("xlink:href"))?f:"";f=null!=(h=b.getElement(d,"DescribeCoverage/Get/OnlineResource").getAttribute("xlink:href"))?h:"";h=null!=(l=b.getElement(d,"GetCoverage/Get/OnlineResource").getAttribute("xlink:href"))?l:"";l={getCapabilities:m(e),describeCoverage:m(f),
getCoverage:m(h)};h=b.getElements(a,"CoverageOfferingBrief");f=[];for(a=0;a<h.length;a++)d=h[a],e=b.getElementValue(d,"name"),k=b.getElements(d,"pos"),d=b.getSpaceDelimitedNumericValues(k[0]),k=b.getSpaceDelimitedNumericValues(k[1]),d=new q({xmin:d[0],ymin:d[1],xmax:k[0],ymax:k[1],spatialReference:{wkid:4326}}),f.push({id:e,lonLatEnvelope:d});g={name:g,onlineResources:l,coverages:f,supportedVersions:["1.0.0"]}}else throw new x("wcsraster:parsecapabilities","the capabilities version is not supported");
g.capabilitiesVersion=c;return g};Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});