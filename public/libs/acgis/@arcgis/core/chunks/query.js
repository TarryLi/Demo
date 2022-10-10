/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../request.js";import{i as t}from"./maybe.js";import{join as r,urlToObject as n}from"../core/urlUtils.js";import{getJsonType as o}from"../geometry/support/jsonUtils.js";import{normalizeCentralMeridian as i}from"../geometry/support/normalizeUtils.js";import{p as a}from"./pbfQueryUtils.js";import{a as s}from"./queryZScale.js";function u(e){const t={};for(const r in e){if("declaredClass"===r)continue;const n=e[r];if(null!=n&&"function"!=typeof n)if(Array.isArray(n)){t[r]=[];for(let e=0;e<n.length;e++)t[r][e]=u(n[e])}else"object"==typeof n?n.toJSON&&(t[r]=JSON.stringify(n)):t[r]=n}return t}function l(e,t){if(t&&"extent"===e.type)return`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;if(t&&"point"===e.type)return`${e.x},${e.y}`;const r=e.toJSON();return delete r.spatialReference,JSON.stringify(r)}function c(e,r){const n=e.geometry,i=e.toJSON();delete i.compactGeometryEnabled,delete i.defaultSpatialReferenceEnabled;const a=i;let s,u,c;if(t(n)&&(u=n.spatialReference,c=n.spatialReference.wkid||JSON.stringify(n.spatialReference),a.geometryType=o(n),a.geometry=l(n,e.compactGeometryEnabled),a.inSR=c),i.groupByFieldsForStatistics&&(a.groupByFieldsForStatistics=i.groupByFieldsForStatistics.join(",")),i.objectIds&&(a.objectIds=i.objectIds.join(",")),i.orderByFields&&(a.orderByFields=i.orderByFields.join(",")),!i.outFields||!i.returnDistinctValues&&(r?.returnCountOnly||r?.returnExtentOnly||r?.returnIdsOnly)?delete a.outFields:i.outFields.includes("*")?a.outFields="*":a.outFields=i.outFields.join(","),i.outSR?(a.outSR=i.outSR.wkid||JSON.stringify(i.outSR),s=e.outSpatialReference):n&&(i.returnGeometry||i.returnCentroid)&&(a.outSR=a.inSR,s=u),i.returnGeometry&&delete i.returnGeometry,i.outStatistics&&(a.outStatistics=JSON.stringify(i.outStatistics)),i.pixelSize&&(a.pixelSize=JSON.stringify(i.pixelSize)),i.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&t(u)&&t(e.quantizationParameters)&&t(e.quantizationParameters.extent)&&u.equals(e.quantizationParameters.extent.spatialReference)&&delete i.quantizationParameters.extent.spatialReference,a.quantizationParameters=JSON.stringify(i.quantizationParameters)),i.parameterValues&&(a.parameterValues=JSON.stringify(i.parameterValues)),i.rangeValues&&(a.rangeValues=JSON.stringify(i.rangeValues)),i.dynamicDataSource&&(a.layer=JSON.stringify({source:i.dynamicDataSource}),delete i.dynamicDataSource),i.timeExtent){const e=i.timeExtent,{start:t,end:r}=e;null==t&&null==r||(a.time=t===r?t:`${null==t?"null":t},${null==r?"null":r}`),delete i.timeExtent}return e.defaultSpatialReferenceEnabled&&t(u)&&t(s)&&u.equals(s)&&(a.defaultSR=a.inSR,delete a.inSR,delete a.outSR),a}async function y(e,r,n,o){const i=t(r.timeExtent)&&r.timeExtent.isEmpty?{data:{features:[]}}:await x(e,r,"json",o);return s(r,n,i.data),i}async function m(e,r,n,o){if(t(r.timeExtent)&&r.timeExtent.isEmpty)return{data:n.createFeatureResult()};const i=await f(e,r,o),s=i;return s.data=a(i.data,n),s}function f(e,t,r){return x(e,t,"pbf",r)}function d(e,r,n){return t(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):x(e,r,"json",n,{returnIdsOnly:!0})}function p(e,r,n){return t(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):x(e,r,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function S(e,r,n){return t(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):x(e,r,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((e=>{const t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error("Layer does not support extent calculation.");if(t.hasOwnProperty("count"))throw new Error("Layer does not support extent calculation.");return e}))}function x(o,a,s,l={},y={}){const m="string"==typeof o?n(o):o,f=a.geometry?[a.geometry]:[];return l.responseType="pbf"===s?"array-buffer":"json",i(f,null,l).then((n=>{const o=n&&n[0];t(o)&&((a=a.clone()).geometry=o);const i=u({...m.query,f:s,...y,...c(a,y)});return e(r(m.path,"query"),{...l,query:{...i,...l.query}})}))}const g=Object.freeze(Object.defineProperty({__proto__:null,encodeGeometry:l,queryToQueryStringParameters:c,executeQuery:y,executeQueryPBF:m,executeQueryPBFBuffer:f,executeQueryForIds:d,executeQueryForCount:p,executeQueryForExtent:S,runQuery:x},Symbol.toStringTag,{value:"Module"}));export{p as a,d as b,m as c,S as d,y as e,f,u as m,g as q,x as r};
