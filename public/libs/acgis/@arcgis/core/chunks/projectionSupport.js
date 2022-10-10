/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as s}from"./maybe.js";import{initializeProjection as t,projectMany as n}from"../geometry/projection.js";import{j as e}from"./json.js";import{j as i,e as r,i as o}from"../geometry/SpatialReference.js";import{lngLatToXY as a,xyToLngLat as m,canProject as u}from"../geometry/support/webMercatorUtils.js";const h=[0,0];function c(s,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=s(t.x,t.y,h),null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=s(t.xmin,t.ymin,h),[n.xmax,n.ymax]=s(t.xmax,t.ymax,h),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:l(t.rings,s),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:l(t.paths,s),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:p(t.points,s),hasM:t.hasM,hasZ:t.hasZ}:void 0}function l(s,t){const n=[];for(const e of s)n.push(p(e,t));return n}function p(s,t){const n=[];for(const e of s){const s=t(e[0],e[1],[0,0]);n.push(s),e.length>2&&s.push(e[2]),e.length>3&&s.push(e[3])}return n}async function f(n,e){if(!e)return;const i=Array.isArray(n)?n.map((t=>s(t.geometry)&&t.geometry.spatialReference)):[n];await t(i.map((s=>({source:s,dest:e}))))}const x=c.bind(null,a),y=c.bind(null,m);function g(s,t,a,m){if(!s)return s;if(a||(a=t,t=s.spatialReference),!i(t)||!i(a)||r(t,a))return s;if(u(t,a)){const t=o(a)?x(s):y(s);return t.spatialReference=a,t}return n(e,[s],t,a,null,m)[0]}const j=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(s,t,n){if(!s||!s.length||!t||!n||r(t,n))return s;const e={geometries:s,inSpatialReference:t,outSpatialReference:n,resolve:null};return this._jobs.push(e),new Promise((s=>{e.resolve=s,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:t,inSpatialReference:i,outSpatialReference:r,resolve:a}=s;u(i,r)?o(r)?a(t.map(x)):a(t.map(y)):a(n(e,t,i,r,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function _(s,t,n){return j.push(s,t,n)}export{_ as a,f as c,g as p};