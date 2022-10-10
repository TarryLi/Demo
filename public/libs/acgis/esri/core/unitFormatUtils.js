// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./byteSizeEstimations ./Cyclical ./mathUtils ./maybe ./string ./unitUtils ../intl/number".split(" "),function(h,p,t,u,q,v,g,l){function n(c,a,b){return c.units[a][b]}function k(c,a,b,d=2,e="abbr"){return`${l.formatNumber(a,{minimumFractionDigits:d,maximumFractionDigits:d})} ${n(c,b,e)}`}function m(c,a,b,d=2,e="abbr"){return`${l.formatNumber(a,{minimumFractionDigits:d,maximumFractionDigits:d,signDisplay:"exceptZero"})} ${n(c,b,e)}`}function w(c,a,b){if(a===b)return c;switch(b){case "arithmetic":return-c+
90;case "geographic":return-c-90}}const r=["B","kB","MB","GB","TB"];h.formatAngleDegrees=function(c,a,b,d,e){c=t.cyclicalDegrees.normalize(w(g.convertUnit(c,a,"degrees"),b,d),0,!0);e=q.unwrapOr(e,2);return l.formatNumber(c,{style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:e,minimumFractionDigits:e})};h.formatDMS=function(c,a,b=2){c=g.convertUnit(c,a,"degrees");a=c-Math.floor(c);c-=a;a*=60;let d=a-Math.floor(a);a-=d;d*=60;return`${c.toFixed()}\u00b0 ${a.toFixed()}' ${d.toFixed(b)}"`};
h.formatDecimal=k;h.formatFileSize=function(c,a){let b=0===a?0:Math.floor(Math.log(a)/Math.log(p.ByteSizeUnit.KILOBYTES));b=u.clamp(b,0,r.length-1);a=l.formatNumber(a/p.ByteSizeUnit.KILOBYTES**b,{maximumFractionDigits:2});return v.replace(c.units.bytes[r[b]],{fileSize:a})};h.formatImperialArea=function(c,a,b,d=2,e="abbr"){const f=g.preferredImperialAreaUnit(a,b);return k(c,g.convertUnit(a,b,f),f,d,e)};h.formatImperialLength=function(c,a,b,d=2,e="abbr"){const f=g.preferredImperialLengthUnit(a,b);return k(c,
g.convertUnit(a,b,f),f,d,e)};h.formatImperialRelativeLength=function(c,a,b,d=2,e="abbr"){const f=g.preferredImperialLengthUnit(a,b);return m(c,g.convertUnit(a,b,f),f,d,e)};h.formatImperialRelativeVerticalLength=function(c,a,b,d=2,e="abbr"){const f=g.preferredImperialVerticalLengthUnit(a,b);return m(c,g.convertUnit(a,b,f),f,d,e)};h.formatImperialVerticalLength=function(c,a,b,d=2,e="abbr"){const f=g.preferredImperialVerticalLengthUnit(a,b);return k(c,g.convertUnit(a,b,f),f,d,e)};h.formatMetricArea=
function(c,a,b,d=2,e="abbr"){const f=g.preferredMetricAreaUnit(a,b);return k(c,g.convertUnit(a,b,f),f,d,e)};h.formatMetricLength=function(c,a,b,d=2,e="abbr"){const f=g.preferredMetricLengthUnit(a,b);return k(c,g.convertUnit(a,b,f),f,d,e)};h.formatMetricRelativeLength=function(c,a,b,d=2,e="abbr"){const f=g.preferredMetricLengthUnit(a,b);return m(c,g.convertUnit(a,b,f),f,d,e)};h.formatMetricRelativeVerticalLength=function(c,a,b,d=2,e="abbr"){const f=g.preferredMetricVerticalLengthUnit(a,b);return m(c,
g.convertUnit(a,b,f),f,d,e)};h.formatMetricVerticalLength=function(c,a,b,d=2,e="abbr"){const f=g.preferredMetricVerticalLengthUnit(a,b);return k(c,g.convertUnit(a,b,f),f,d,e)};h.formatRelativeAngleDegrees=function(c,a,b,d,e){b!==d&&(c=-c);c=g.convertUnit(c,a,"degrees")%360;e=q.unwrapOr(e,2);return l.formatNumber(c,{style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:e,minimumFractionDigits:e,signDisplay:"exceptZero"})};h.formatRelativeDecimal=m;h.unitName=n;Object.defineProperties(h,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});