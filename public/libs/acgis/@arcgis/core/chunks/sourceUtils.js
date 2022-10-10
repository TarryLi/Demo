/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e}from"./maybe.js";import{j as t}from"../geometry/SpatialReference.js";import{sanitizeNullFieldValue as n,validateFieldValue as i,validationErrorToString as r,isNumericField as s,isStringField as o}from"../layers/support/fieldUtils.js";class a{constructor(){this.code=null,this.description=null}}class l{constructor(e){this.error=new a,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new l(e)}class c{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function f(e){return new c(e)}const d=new Set;function m(e,t,n,s=!1,o){d.clear();for(const a in n){const l=e.get(a);if(!l)continue;const c=n[a],f=h(l,c);if(f!==c&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:l,originalValue:c,sanitizedValue:f}}),d.add(l.name),l&&(s||l.editable)){const e=i(l,f);if(e)return u(r(e,l,f));t[l.name]=f}}for(const t of e.requiredFields)if(!d.has(t.name))return u(`missing required field "${t.name}"`);return null}function h(e,t){let i=t;return"string"==typeof t&&s(e)?i=parseFloat(t):null!=t&&o(e)&&"string"!=typeof t&&(i=String(t)),n(i)}let p;function g(n,i){if(!n||!t(i))return n;if("rings"in n||"paths"in n){if(e(p))throw new TypeError("geometry engine not loaded");return p.simplify(i,n)}return n}async function y(n,i){!t(n)||"esriGeometryPolygon"!==i&&"esriGeometryPolyline"!==i||await async function(){return e(p)&&(p=await import("./geometryEngineJSON.js").then((e=>e.g))),p}()}export{u as a,f as c,y as l,m,g as s};