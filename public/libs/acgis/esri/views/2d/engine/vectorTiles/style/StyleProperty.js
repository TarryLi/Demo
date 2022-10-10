// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../../../../../Color","../GeometryUtils","../expression/expression","../expression/types"],function(m,q,l,g){return function(){function k(a,b){this.isDataDriven=!1;this.interpolator=null;switch(a.type){case "number":var d=!0;break;case "color":d=!0;break;case "array":d="number"===a.value;break;default:d=!1}null==b&&(b=a.default);if(Array.isArray(b)&&0<b.length&&l.ops[b[0]]){d={number:g.NumberType,color:g.ColorType,string:g.StringType,boolean:g.BooleanType,enum:g.StringType};try{var e="array"===
a.type?g.arrayType(d[a.value]||g.ValueType,a.length):d[a.type];const c=l.createExpression(b,null,e);this.getValue=this._buildExpression(c,a);this.isDataDriven=!0;c instanceof l.Interpolate&&c.input instanceof l.Zoom&&(this.interpolator=c)}catch(c){console.log(c.message),this.getValue=this._buildSimple(a.default)}}else{d&&"interval"===b.type&&(d=!1);if(e=b&&b.stops&&0<b.stops.length)for(const c of b.stops)c[1]=this._validate(c[1],a);if(this.isDataDriven=b?!!b.property:!1)if(void 0!==b.default&&(b.default=
this._validate(b.default,a)),e)switch(b.type){case "identity":this.getValue=this._buildIdentity(b,a);break;case "categorical":this.getValue=this._buildCategorical(b,a);break;default:this.getValue=d?this._buildInterpolate(b,a):this._buildInterval(b,a)}else this.getValue=this._buildIdentity(b,a);else e?this.getValue=d?this._buildZoomInterpolate(b):this._buildZoomInterval(b):(b=this._validate(b,a),this.getValue=this._buildSimple(b))}}var f=k.prototype;f._validate=function(a,b){if("number"===b.type){if(a<
b.minimum)return b.minimum;if(a>b.maximum)return b.maximum}else"color"===b.type?a=k._parseColor(a):"enum"===b.type?"string"===typeof a&&(a=b.values.indexOf(a)):"array"===b.type&&"enum"===b.value?a=a.map(d=>"string"===typeof d?b.values.indexOf(d):d):"string"===b.type&&(a=g.valueToString(a));return a};f._buildSimple=function(a){return()=>a};f._buildExpression=function(a,b){return(d,e)=>{try{const c=a.evaluate(e,d);return void 0===c?b.default:this._validate(c,b)}catch(c){return console.log(c.message),
b.default}}};f._buildIdentity=function(a,b){return(d,e)=>{let c;e&&(c=e.values[a.property]);void 0!==c&&(c=this._validate(c,b));return null!=c?c:void 0!==a.default?a.default:b.default}};f._buildCategorical=function(a,b){return(d,e)=>{let c;e&&(c=e.values[a.property]);c=this._categorical(c,a.stops);return void 0!==c?c:void 0!==a.default?a.default:b.default}};f._buildInterval=function(a,b){return(d,e)=>{let c;e&&(c=e.values[a.property]);return"number"===typeof c?this._interval(c,a.stops):void 0!==a.default?
a.default:b.default}};f._buildInterpolate=function(a,b){return(d,e)=>{let c;e&&(c=e.values[a.property]);return"number"===typeof c?this._interpolate(c,a.stops,a.base||1):void 0!==a.default?a.default:b.default}};f._buildZoomInterpolate=function(a){return b=>this._interpolate(b,a.stops,a.base||1)};f._buildZoomInterval=function(a){return b=>this._interval(b,a.stops)};f._categorical=function(a,b){const d=b.length;for(let e=0;e<d;e++)if(b[e][0]===a)return b[e][1]};f._interval=function(a,b){const d=b.length;
let e=0;for(let c=0;c<d;c++)if(b[c][0]<=a)e=c;else break;return b[e][1]};f._interpolate=function(a,b,d){const e=b.length;for(let n=0;n<e;n++){const p=b[n];if(p[0]<=a)var c=p;else{var h=p;break}}if(c&&h){b=h[0]-c[0];a-=c[0];d=1===d?a/b:(d**a-1)/(d**b-1);if(Array.isArray(c[1])){c=c[1];h=h[1];a=[];for(b=0;b<c.length;b++)a.push(q.interpolate(c[b],h[b],d));return a}return q.interpolate(c[1],h[1],d)}if(c)return c[1];if(h)return h[1]};k._isEmpty=function(a){for(const b in a)if(a.hasOwnProperty(b))return!1;
return!0};k._parseColor=function(a){if(Array.isArray(a))return a;"string"===typeof a&&(a=new m(a));if(a instanceof m&&!this._isEmpty(a))return m.toUnitRGBA(a)};return k}()});