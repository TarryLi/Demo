// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../chunks/_rollupPluginBabelHelpers","./ImmutableArray","../chunks/languageUtils","../geometry/Geometry"],function(n,r,f,p){function m(d,g=!1){if(null===d||void 0===d)return null;if(f.isNumber(d))return f.toNumber(d);if(f.isBoolean(d))return f.toBoolean(d);if(f.isString(d))return f.toString(d);if(f.isDate(d))return f.toDate(d);if(f.isArray(d)){var a=[];for(var c of d)a.push(m(c,g));return a}c=new q;c.immutable=!1;for(a of Object.keys(d)){const b=d[a];void 0!==b&&c.setField(a,m(b,g))}c.immutable=
g;return c}let q=function(){function d(a){this.declaredClass="esri.arcade.Dictionary";this.attributes=null;this.plain=!1;this.immutable=!0;this.attributes=a instanceof d?a.attributes:void 0===a?{}:null===a?{}:a}var g=d.prototype;g.field=function(a){const c=a.toLowerCase(),b=this.attributes[a];if(void 0!==b)return b;for(const e in this.attributes)if(e.toLowerCase()===c)return this.attributes[e];throw Error("Field not Found : "+a);};g.setField=function(a,c){if(this.immutable)throw Error("Dictionary is Immutable");
const b=a.toLowerCase();if(void 0===this.attributes[a])for(const e in this.attributes)if(e.toLowerCase()===b){this.attributes[e]=c;return}this.attributes[a]=c};g.hasField=function(a){const c=a.toLowerCase();if(void 0!==this.attributes[a])return!0;for(const b in this.attributes)if(b.toLowerCase()===c)return!0;return!1};g.keys=function(){let a=[];for(const c in this.attributes)a.push(c);return a=a.sort()};g.castToText=function(){let a="";for(const c in this.attributes){""!==a&&(a+=",");const b=this.attributes[c];
null==b?a+=JSON.stringify(c)+":null":f.isBoolean(b)||f.isNumber(b)||f.isString(b)?a+=JSON.stringify(c)+":"+JSON.stringify(b):b instanceof p?a+=JSON.stringify(c)+":"+f.toStringExplicit(b):b instanceof r?a+=JSON.stringify(c)+":"+f.toStringExplicit(b):b instanceof Array?a+=JSON.stringify(c)+":"+f.toStringExplicit(b):b instanceof Date?a+=JSON.stringify(c)+":"+JSON.stringify(b):null!==b&&"object"===typeof b&&void 0!==b.castToText&&(a+=JSON.stringify(c)+":"+b.castToText())}return"{"+a+"}"};d.convertObjectToArcadeDictionary=
function(a,c=!0){const b=new d;b.immutable=!1;for(const e in a){const h=a[e];void 0!==h&&b.setField(e.toString(),m(h))}b.immutable=c;return b};d.convertJsonToArcade=function(a,c=!1){return m(a,c)};g.castAsJson=function(a=null){const c={};for(let b in this.attributes){const e=this.attributes[b];void 0!==e&&(null!=a&&a.keyTranslate&&(b=a.keyTranslate(b)),c[b]=f.castAsJson(e,a))}return c};g.castDictionaryValueAsJsonAsync=function(){var a=n._asyncToGenerator(function*(c,b,e,h=null,k){e=yield f.castAsJsonAsync(e,
h,k);return c[b]=e});return function(c,b,e){return a.apply(this,arguments)}}();g.castAsJsonAsync=function(){var a=n._asyncToGenerator(function*(c=null,b=null){const e={},h=[];for(let k in this.attributes){const l=this.attributes[k];null!=b&&b.keyTranslate&&(k=b.keyTranslate(k));void 0!==l&&(f.isSimpleType(l)||l instanceof p||l instanceof Date?e[k]=f.castAsJson(l,b):h.push(this.castDictionaryValueAsJsonAsync(e,k,l,c,b)))}0<h.length&&(yield Promise.all(h));return e});return function(){return a.apply(this,
arguments)}}();return d}();return q});