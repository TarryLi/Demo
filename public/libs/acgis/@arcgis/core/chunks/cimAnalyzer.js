/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../Color.js";import{clone as t}from"../core/lang.js";import{L as o}from"./Logger.js";import{i}from"./maybe.js";import{a as r,p as n}from"./screenUtils.js";import{n as l}from"./string.js";import{a,A as s}from"./arcadeOnDemand.js";import{R as c,c as f,S as m,g as u,d as p,O as y,a as h}from"./CIMSymbolHelper.js";import{A as g,C as d,J as S}from"./enums2.js";import{p as v}from"./floatRGBA.js";import{isExtent as b,isPolyline as N,isPolygon as C}from"../geometry/support/jsonUtils.js";import{f as O,h as k,_ as M,d as P,e as x,j as w,k as L}from"./utils7.js";import{c as I}from"./callExpressionWithFeature.js";import{R as A}from"./definitions.js";function R(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":{const t=e.symbolLayers;return t&&1===t.length?R(t[0]):null}case"CIMVectorMarker":{const t=e.markerGraphics;if(!t||1!==t.length)return null;const o=t[0];if(!o)return null;const i=o.geometry;if(!i)return null;const r=o.symbol;return!r||"CIMPolygonSymbol"!==r.type&&"CIMLineSymbol"!==r.type||r.symbolLayers?.some((e=>!!e.effects))?null:{geom:i,asFill:"CIMPolygonSymbol"===r.type}}case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function X(e){let t=1/0,o=-1/0,i=1/0,r=-1/0;for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>o&&(o=e[0]),e[1]<i&&(i=e[1]),e[1]>r&&(r=e[1]);return[t,i,o,r]}function z(e){return e?e.rings?X(e.rings):e.paths?X(e.paths):b(e)?[e.xmin,e.ymin,e.xmax,e.ymax]:null:null}function J(e,t,o,i,r){const[n,l,a,s]=e;if(a<n||s<l)return[0,0,0];const c=a-n,f=s-l,m=Math.floor(31.5),u=(128-2*(m+1))/Math.max(c,f),p=Math.round(c*u)+2*m,y=Math.round(f*u)+2*m;let h=1;t&&(h=y/u/(t.ymax-t.ymin));let g=0,d=0;if(i)if(r){if(t&&o&&t.ymax-t.ymin>0){const e=(t.xmax-t.xmin)/(t.ymax-t.ymin);g=i.x/(o*e),d=i.y/o}}else g=i.x,d=i.y;return g=.5*(t.xmax+t.xmin)+g*(t.xmax-t.xmin),d=.5*(t.ymax+t.ymin)+d*(t.ymax-t.ymin),g-=n,d-=l,g*=u,d*=u,g+=m,d+=m,[h,g/p-.5,-(d/y-.5)]}function H(e){const t=(o=e.geom)?o.rings?o.rings:o.paths?o.paths:void 0!==o.xmin&&void 0!==o.ymin&&void 0!==o.xmax&&void 0!==o.ymax?[[[o.xmin,o.ymin],[o.xmin,o.ymax],[o.xmax,o.ymax],[o.xmax,o.ymin],[o.xmin,o.ymin]]]:null:null;var o;const i=function(e){let t=1/0,o=-1/0,i=1/0,r=-1/0;for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>o&&(o=e[0]),e[1]<i&&(i=e[1]),e[1]>r&&(r=e[1]);return new c(t,i,o-t,r-i)}(t),r=Math.floor(31.5),n=(128-2*(r+1))/Math.max(i.width,i.height),l=Math.round(i.width*n)+2*r,a=Math.round(i.height*n)+2*r,s=[];for(const o of t)if(o&&o.length>1){const t=[];for(const l of o){let[o,a]=l;o-=i.x,a-=i.y,o*=n,a*=n,o+=r-.5,a+=r-.5,e.asFill?t.push([o,a]):t.push([Math.round(o),Math.round(a)])}if(e.asFill){const e=t.length-1;t[0][0]===t[e][0]&&t[0][1]===t[e][1]||t.push(t[0])}s.push(t)}const f=function(e,t,o,i){const r=t*o,n=new Array(r),l=i*i+1;for(let e=0;e<r;++e)n[e]=l;for(const r of e){const e=r.length;for(let l=1;l<e;++l){const e=r[l-1],a=r[l];let s,c,f,m;e[0]<a[0]?(s=e[0],c=a[0]):(s=a[0],c=e[0]),e[1]<a[1]?(f=e[1],m=a[1]):(f=a[1],m=e[1]);let u=Math.floor(s)-i,p=Math.floor(c)+i,y=Math.floor(f)-i,h=Math.floor(m)+i;u<0&&(u=0),p>t&&(p=t),y<0&&(y=0),h>o&&(h=o);const g=a[0]-e[0],d=a[1]-e[1],S=g*g+d*d;for(let i=u;i<p;i++)for(let r=y;r<h;r++){let l,s,c=(i-e[0])*g+(r-e[1])*d;c<0?(l=e[0],s=e[1]):c>S?(l=a[0],s=a[1]):(c/=S,l=e[0]+c*g,s=e[1]+c*d);const f=(i-l)*(i-l)+(r-s)*(r-s),m=(o-r-1)*t+i;f<n[m]&&(n[m]=f)}}}for(let e=0;e<r;++e)n[e]=Math.sqrt(n[e]);return n}(s,l,a,r);return e.asFill&&function(e,t,o,i,r){for(const n of e){const e=n.length;for(let l=1;l<e;++l){const e=n[l-1],a=n[l];let s,c,f,m;e[0]<a[0]?(s=e[0],c=a[0]):(s=a[0],c=e[0]),e[1]<a[1]?(f=e[1],m=a[1]):(f=a[1],m=e[1]);let u=Math.floor(s),p=Math.floor(c)+1,y=Math.floor(f),h=Math.floor(m)+1;u<i&&(u=i),p>t-i&&(p=t-i),y<i&&(y=i),h>o-i&&(h=o-i);for(let n=y;n<h;++n){if(e[1]>n==a[1]>n)continue;const l=(o-n-1)*t;for(let t=u;t<p;++t)t<(a[0]-e[0])*(n-e[1])/(a[1]-e[1])+e[0]&&(r[l+t]=-r[l+t]);for(let e=i;e<u;++e)r[l+e]=-r[l+e]}}}}(s,l,a,r,f),[Y(f,r),l,a]}function Y(e,t){const o=2*t,i=e.length,r=new Uint8Array(4*i);for(let t=0;t<i;++t){const i=.5-e[t]/o;v(i,r,4*t)}return r}class ${static executeEffects(e,t,o){const i=f(t);let r=new m(i);for(const t of e){const e=u(t);e&&(r=e.execute(r,t,1.3333333333333333,o))}return r}static next(e){const t=e.next();return p(t),t}static applyEffects(e,t,o){if(!e)return t;let i=new m(t);for(const t of e){const e=u(t);e&&(i=e.execute(i,t,1,o))}let r,n=null;for(;r=i.next();)n?N(n)?N(r)&&n.paths.push(...r.paths):C(n)&&C(r)&&n.rings.push(...r.rings):n=r;return n}}function E(e){const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function F(e){const t=function(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e);return E(e.family)+(t.length>0?t:"-regular")}function T(e,t){let o;if("string"==typeof e)o=l(e+`-seed(${t})`);else{let i=12;o=e^t;do{o=107*(o>>8^o)+i|0}while(0!=--i)}return(1+o/(1<<31))/2}function j(e){return Math.floor(T(e,W)*U)}const W=53290320,U=10,G=o.getLogger("esri.symbols.cim.cimAnalyzer");function D(e){switch(e){case"Butt":return d.BUTT;case"Square":return d.SQUARE;default:return d.ROUND}}function B(e){switch(e){case"Bevel":return S.BEVEL;case"Miter":return S.MITER;default:return S.ROUND}}function q(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return G.warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."),"center"}}function V(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function _(e,t,o,i){let r;e[t]?r=e[t]:(r={},e[t]=r),r[o]=i}function K(e){const t=e.markerPlacement;return t&&t.angleToLine?g.MAP:g.SCREEN}async function Q(e,t,o,i,r){const n=i??[];if(!e)return n;let l,s;const c={};if("CIMSymbolReference"!==e.type)return G.error("Expect cim type to be 'CIMSymbolReference'"),n;if(l=e.symbol,s=e.primitiveOverrides,s){const e=[];for(const o of s){const i=o.valueExpressionInfo;if(i&&t){const r=i.expression,n=a(r,t.spatialReference,t.fields).then((e=>{e&&_(c,o.primitiveName,o.propertyName,e)}));e.push(n)}else null!=o.value&&_(c,o.primitiveName,o.propertyName,o.value)}e.length>0&&await Promise.all(e)}const f=[];switch(Ne(l,o,f),f.length>0&&await Promise.all(f),l.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":!function(e,t,o,i,r,n,l){if(!e)return;const a=e.symbolLayers;if(!a)return;const s=e.effects;let c;const f=h.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(c=g.MAP);let m=a.length;for(;m--;){const u=a[m];if(!u||!1===u.enable)continue;let p;s&&s.length&&(p=[...s]);const h=u.effects;h&&h.length&&(s?p.push(...h):p=[...h]);const g=[];let d;y.findEffectOverrides(p,t,g),d=g.length>0?ge(p,g,o,i):p;const S=[];switch(y.findApplicableOverrides(u,t,S),u.type){case"CIMSolidFill":Z(u,d,o,S,i,r);break;case"CIMPictureFill":ee(u,d,o,S,i,n,r);break;case"CIMHatchFill":te(u,d,o,S,i,r);break;case"CIMGradientFill":oe(u,d,o,S,i,r);break;case"CIMSolidStroke":ie(u,d,o,S,i,r,"CIMPolygonSymbol"===e.type,f);break;case"CIMPictureStroke":re(u,d,o,S,i,r,"CIMPolygonSymbol"===e.type,f);break;case"CIMGradientStroke":ne(u,d,o,S,i,r,"CIMPolygonSymbol"===e.type,f);break;case"CIMCharacterMarker":if(le(u,d,o,S,i,r))break;break;case"CIMPictureMarker":if(le(u,d,o,S,i,r))break;"CIMLineSymbol"===e.type&&(c=K(u)),ae(u,d,o,S,i,n,r,c,f);break;case"CIMVectorMarker":if(le(u,d,o,S,i,r))break;"CIMLineSymbol"===e.type&&(c=K(u)),se(u,d,o,S,i,r,n,c,f,l);break;default:G.error("Cannot analyze CIM layer",u.type)}}}(l,s,c,t,n,o,r)}return n}function Z(e,t,o,i,r,n){const a=e.primitiveName,s=O(e.color),[c,f]=be(i,a,t,null,null),m=l(JSON.stringify(e)+f).toString();n.push({type:"fill",templateHash:m,materialHash:c?()=>m:m,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:ye(a,o,"Color",r,s,pe),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t,applyRandomOffset:!1,sampleAlphaOnly:!0})}function ee(e,t,o,r,n,a,s){const c=e.primitiveName,f=e.tintColor?O(e.tintColor):{r:255,g:255,b:255,a:1},[m,u]=be(r,c,t,null,null),p=l(JSON.stringify(e)+u).toString(),y=l(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();let h=k(e.scaleX);if("width"in e){const t=e.width;let o=1;const r=a.getResource(e.url);i(r)&&(o=r.width/r.height),h/=o*(e.height/t)}s.push({type:"fill",templateHash:p,materialHash:m?()=>y:y,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:ye(c,o,"TintColor",n,f,pe),height:ye(c,o,"Height",n,e.height),scaleX:ye(c,o,"ScaleX",n,h),angle:ye(c,o,"Rotation",n,k(e.rotation)),offsetX:ye(c,o,"OffsetX",n,k(e.offsetX)),offsetY:ye(c,o,"OffsetY",n,k(e.offsetY)),url:e.url,applyRandomOffset:!1,sampleAlphaOnly:!1})}function te(e,t,o,i,r,n){const a=["Rotation","OffsetX","OffsetY"],s=i.filter((t=>t.primitiveName!==e.primitiveName&&!a.includes(t.propertyName))),c=e.primitiveName,[f,m]=be(i,c,t,null,null),u=l(JSON.stringify(e)+m).toString(),p=l(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();let y={r:255,g:255,b:255,a:1};if(e.lineSymbol){const t=e.lineSymbol?.symbolLayers.find((e=>"CIMSolidStroke"===e.type));t&&(y=O(t.color))}n.push({type:"fill",templateHash:u,materialHash:f?Se(p,o,s,r):p,cim:e,materialOverrides:s,colorLocked:e.colorLocked,effects:t,color:y,height:ye(c,o,"Separation",r,e.separation),scaleX:1,angle:ye(c,o,"Rotation",r,k(e.rotation)),offsetX:ye(c,o,"OffsetX",r,k(e.offsetX)),offsetY:ye(c,o,"OffsetY",r,k(e.offsetY)),applyRandomOffset:!1,sampleAlphaOnly:!0})}function oe(e,t,o,i,r,n){const a=e.primitiveName,[s,c]=be(i,a,t,null,null),f=l(JSON.stringify(e)+c).toString();n.push({type:"fill",templateHash:f,materialHash:s?Se(f,o,i,r):f,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,applyRandomOffset:!1,sampleAlphaOnly:!1})}function ie(e,t,o,i,r,n,a,s){const c=e.primitiveName,f=O(e.color),m=void 0!==e.width?e.width:4,u=D(e.capStyle),p=B(e.joinStyle),y=e.miterLimit,[h,g]=be(i,c,t,null,null),d=l(JSON.stringify(e)+g).toString();let S,v;if(t&&t instanceof Array&&t.length>0){const e=t[t.length-1];if("CIMGeometricEffectDashes"===e.type&&"NoConstraint"===e.lineDashEnding&&null===e.offsetAlongLine){const e=(t=[...t]).pop();S=e.dashTemplate,v=e.scaleDash}}n.push({type:"line",templateHash:d,materialHash:h?()=>d:d,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:t,color:ye(c,o,"Color",r,f,pe),width:ye(c,o,"Width",r,m),cap:ye(c,o,"CapStyle",r,u),join:ye(c,o,"JoinStyle",r,p),miterLimit:ye(c,o,"MiterLimit",r,y),referenceWidth:s,zOrder:ue(e.name),dashTemplate:S,scaleDash:v,sampleAlphaOnly:!0})}function re(e,t,o,i,r,n,a,s){const c=l(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),f=e.primitiveName,m=O(e.tintColor),u=void 0!==e.width?e.width:4,p=D(e.capStyle),y=B(e.joinStyle),h=e.miterLimit,[g,d]=be(i,f,t,null,null),S=l(JSON.stringify(e)+d).toString();n.push({type:"line",templateHash:S,materialHash:g?()=>c:c,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:t,color:ye(f,o,"TintColor",r,m,pe),width:ye(f,o,"Width",r,u),cap:ye(f,o,"CapStyle",r,p),join:ye(f,o,"JoinStyle",r,y),miterLimit:ye(f,o,"MiterLimit",r,h),referenceWidth:s,zOrder:ue(e.name),dashTemplate:null,scaleDash:!1,url:e.url,sampleAlphaOnly:!1})}function ne(e,t,o,i,r,n,a,s){const c=e.primitiveName,f=void 0!==e.width?e.width:4,m=D(e.capStyle),u=B(e.joinStyle),p=e.miterLimit,[y,h]=be(i,c,t,null,null),g=l(JSON.stringify(e)+h).toString();n.push({type:"line",templateHash:g,materialHash:y?Se(g,o,i,r):g,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:ye(c,o,"Width",r,f),cap:ye(c,o,"CapStyle",r,m),join:ye(c,o,"JoinStyle",r,u),miterLimit:ye(c,o,"MiterLimit",r,p),referenceWidth:s,zOrder:ue(e.name),dashTemplate:null,scaleDash:!1,sampleAlphaOnly:!1})}function le(e,t,o,i,r,a){const s=e.markerPlacement;if(!s||"CIMMarkerPlacementInsidePolygon"!==s.type)return!1;const c=s,f=Math.abs(c.stepX),m=Math.abs(c.stepY);if(0===f||0===m)return!0;const u=["Rotation","OffsetX","OffsetY"],p=i.filter((t=>t.primitiveName!==e.primitiveName&&!u.includes(t.propertyName))),y="url"in e?e.url:null,[h,g]=be(i,c.primitiveName,t,null,null),d=l(JSON.stringify(e)+g).toString();let S,v,b=null;if("Random"===s.gridType){const e=n(A),t=Math.max(Math.floor(e/f),1),o=Math.max(Math.floor(e/m),1);S=m*o,b=e=>e?e*o:0,v=t*f/S}else s.shiftOddRows?(S=2*m,b=e=>e?2*e:0,v=f/m*.5):(S=m,b=null,v=f/m);let N={r:255,g:255,b:255,a:1};return"tintColor"in e&&(N=O(e.tintColor)),a.push({type:"fill",templateHash:d,materialHash:h?Se(d,o,p,r):d,cim:e,materialOverrides:p,colorLocked:e.colorLocked,effects:t,color:ye(c.primitiveName,o,"TintColor",r,N,pe),height:ye(c.primitiveName,o,"StepY",r,S,b),scaleX:v,angle:ye(c.primitiveName,o,"GridAngle",r,c.gridAngle),offsetX:ye(c.primitiveName,o,"OffsetX",r,k(c.offsetX)),offsetY:ye(c.primitiveName,o,"OffsetY",r,k(c.offsetY)),url:y,applyRandomOffset:"Random"===s.gridType,sampleAlphaOnly:!y}),!0}function ae(e,o,r,n,a,c,f,m,u){const p=e.primitiveName,h=k(e.size);let g=k(e.scaleX);const d=k(e.rotation),S=k(e.offsetX),v=k(e.offsetY),b=e.tintColor?O(e.tintColor):{r:255,g:255,b:255,a:1},N=l(`${e.url}${JSON.stringify(e.colorSubstitutions)}${JSON.stringify(e.animatedSymbolProperties)}`).toString(),C=de(e.markerPlacement,n,r,a),M=function(e,o,i,r){const n=[];if(y.findApplicableOverrides(e,o,n),0===n.length)return e;for(const e of n)if(e.valueExpressionInfo){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName];t instanceof s&&(e.fn=(e,o,i)=>I(t,e,{$view:i},r.geometryType,o))}return(o,i,r)=>{for(const e of n)e.fn&&(e.value=e.fn(o,i,r));const l=t(e),a=e.primitiveName;for(const e of n)if(e.primitiveName===a){const t=he(e.propertyName);null!=e.value&&e.value!==l[t]&&(l[t]=e.value)}return l}}(e.animatedSymbolProperties,n,r,a),[P,w]=be(n,p,o,C,M),L=l(JSON.stringify(e)+w).toString(),A=e.anchorPoint??{x:0,y:0};if("width"in e){const t=e.width;let o=1;const r=c.getResource(e.url);i(r)&&(o=r.width/r.height),g/=o*(h/t)}function R(e,t){return x(M,e,t)}const X=e.animatedSymbolProperties&&!0===e.animatedSymbolProperties.randomizeStartTime?(e,t,o,i)=>{const r=j(i),n=R(e,t);return N+`-MATERIALGROUP(${r})`+`-ASP(${JSON.stringify(n)})`}:P?(e,t)=>{const o=R(e,t);return N+`-ASP(${JSON.stringify(o)})`}:N;f.push({type:"marker",templateHash:L,materialHash:X,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:o,scaleSymbolsProportionally:!1,alignment:m,size:ye(p,r,"Size",a,h),scaleX:ye(p,r,"ScaleX",a,g),rotation:ye(p,r,"Rotation",a,d),offsetX:ye(p,r,"OffsetX",a,S),offsetY:ye(p,r,"OffsetY",a,v),color:ye(p,r,"TintColor",a,b,pe),anchorPoint:{x:A.x,y:-A.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:u,sizeRatio:1,markerPlacement:C,url:e.url,animatedSymbolProperties:M})}function se(e,t,o,i,r,n,l,a,s,c){const f=e.markerGraphics;if(!f)return;let m=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(m=t.ymax-t.ymin)}const u=de(e.markerPlacement,i,o,r);for(const p of f)if(p){const f=p.symbol;if(!f)continue;switch(f.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":fe(e,t,u,null,p,i,o,r,n,l,a,s,m,c);break;case"CIMTextSymbol":ce(e,t,u,p,o,i,r,n,a,s,m)}}}function ce(e,t,o,i,r,n,a,s,c,f,m){y.findApplicableOverrides(i,n,[]);const u=i.geometry;if(!("x"in u)||!("y"in u))return;const p=i.symbol,g=(d=p).underline?"underline":d.strikethrough?"line-through":"none";var d;const S=function(e){let t="",o="";if(e){const i=e.toLowerCase();i.includes("italic")?t="italic":i.includes("oblique")&&(t="oblique"),i.includes("bold")?o="bold":i.includes("light")&&(o="lighter")}return{style:t,weight:o}}(p.fontStyleName),v=E(p.fontFamilyName);p.font={family:v,decoration:g,...S};const b=e.frame,N=u.x-.5*(b.xmin+b.xmax),C=u.y-.5*(b.ymin+b.ymax),w=e.size/m,L=e.primitiveName,I=k(p.height)*w,A=k(p.angle),R=k(e.offsetX)+(k(p.offsetX)+N)*w,X=k(e.offsetY)+(k(p.offsetY)+C)*w,z=O(h.getFillColor(p));let J=O(h.getStrokeColor(p)),H=h.getStrokeWidth(p);H||(J=O(h.getFillColor(p.haloSymbol)),H=p.haloSize*w);const[Y,$]=be(n,L,t,o,null),F=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),T=l(JSON.stringify(i)+F+$).toString();let j=ye(i.primitiveName,r,"TextString",a,i.textString,M,p.textCase);if(null==j)return;const{fontStyleName:W}=p,U=v+(W?"-"+W.toLowerCase():"-regular"),G=U;"string"==typeof j&&j.includes("[")&&p.fieldMap&&(j=P(p.fieldMap,j,p.textCase)),s.push({type:"text",templateHash:T,materialHash:Y||"function"==typeof j||j.match(/\[(.*?)\]/)?(e,t,o)=>G+"-"+x(j,e,t,o):G+"-"+l(j),cim:p,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:c,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:U,decoration:g,weight:ye(L,r,"Weight",a,S.weight),style:ye(L,r,"Size",a,S.style),size:ye(L,r,"Size",a,I),angle:ye(L,r,"Rotation",a,A),offsetX:ye(L,r,"OffsetX",a,R),offsetY:ye(L,r,"OffsetY",a,X),horizontalAlignment:q(p.horizontalAlignment),verticalAlignment:V(p.verticalAlignment),text:j,color:z,outlineColor:J,outlineSize:H,referenceSize:f,sizeRatio:1,markerPlacement:o})}function fe(e,t,o,r,n,a,s,c,f,m,u,p,y,g){const d=n.symbol,S=d.symbolLayers;if(!S)return;if(g)return void me(e,t,o,r,n,s,a,c,f,m,u,p,y);let v=S.length;if(Ce(S))return void function(e,t,o,i,r,n,a,s,c,f,m,u,p){const y=r.geometry,g=n[0],d=n[1],S=z(y);if(!S)return;const[v,b,N]=J(S,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),C={type:"sdf",geom:y,asFill:!0},M=e.primitiveName,P=k(e.size),x=k(e.rotation),w=k(e.offsetX),L=k(e.offsetY),I=d.path,A=d.primitiveName,R=g.primitiveName,X=O(h.getFillColor(d)),H=O(h.getStrokeColor(g)),Y=h.getStrokeWidth(g);let $=!1,E="";for(const e of a)e.primitiveName!==A&&e.primitiveName!==R&&e.primitiveName!==M||(void 0!==e.value?E+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&($=!0));const F=JSON.stringify({...e,markerGraphics:null}),T=l(JSON.stringify(C)+I).toString(),j={type:"marker",templateHash:l(JSON.stringify(r)+JSON.stringify(d)+JSON.stringify(g)+F+E).toString(),materialHash:$?()=>T:T,cim:C,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:m,anchorPoint:{x:b,y:N},isAbsoluteAnchorPoint:!1,size:ye(e.primitiveName,s,"Size",c,P),rotation:ye(e.primitiveName,s,"Rotation",c,x),offsetX:ye(e.primitiveName,s,"OffsetX",c,w),offsetY:ye(e.primitiveName,s,"OffsetY",c,L),scaleX:1,frameHeight:p,rotateClockwise:e.rotateClockwise,referenceSize:u,sizeRatio:v,color:ye(A,s,"Color",c,X,pe),outlineColor:ye(R,s,"Color",c,H,pe),outlineWidth:ye(R,s,"Width",c,Y),markerPlacement:o,path:I,animatedSymbolProperties:i};f.push(j)}(e,t,o,r,n,S,a,s,c,f,u,p,y);const b=$.applyEffects(d.effects,n.geometry,m.geometryEngine);if(b)for(;v--;){const g=S[v];if(g&&!1!==g.enable)switch(g.type){case"CIMSolidFill":case"CIMSolidStroke":{const d=$.applyEffects(g.effects,b,m.geometryEngine),S=z(d);if(!S)continue;const[v,N,C]=J(S,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),M="CIMSolidFill"===g.type,P={type:"sdf",geom:d,asFill:M},x=e.primitiveName,w=k(e.size)??10,L=k(e.rotation),I=k(e.offsetX),A=k(e.offsetY),R=g.path,X=g.primitiveName,H=O(M?h.getFillColor(g):h.getStrokeColor(g)),Y=M?{r:0,g:0,b:0,a:0}:O(h.getStrokeColor(g)),E=h.getStrokeWidth(g);if(!M&&!E)break;let F=!1,T="";for(const e of a)e.primitiveName!==X&&e.primitiveName!==x||(void 0!==e.value?T+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(F=!0));i(t)&&"function"==typeof t&&(F=!0);const j=JSON.stringify({...e,markerGraphics:null}),W=l(JSON.stringify(P)+R).toString(),U={type:"marker",templateHash:l(JSON.stringify(n)+JSON.stringify(g)+j+T).toString(),materialHash:F?()=>W:W,cim:P,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:N,y:C},isAbsoluteAnchorPoint:!1,size:ye(e.primitiveName,s,"Size",c,w),rotation:ye(e.primitiveName,s,"Rotation",c,L),offsetX:ye(e.primitiveName,s,"OffsetX",c,I),offsetY:ye(e.primitiveName,s,"OffsetY",c,A),scaleX:1,frameHeight:y,rotateClockwise:e.rotateClockwise,referenceSize:p,sizeRatio:v,color:ye(X,s,"Color",c,H,pe),outlineColor:ye(X,s,"Color",c,Y,pe),outlineWidth:ye(X,s,"Width",c,E),markerPlacement:o,animatedSymbolProperties:r,path:R};f.push(U);break}default:me(e,t,o,r,n,s,a,c,f,m,u,p,y)}}}function me(e,t,o,n,a,s,c,f,m,u,p,y,g){const d=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}(e,a);let S=[];const v=["Rotation","OffsetX","OffsetY"];S=c.filter((t=>t.primitiveName!==e.primitiveName||!v.includes(t.propertyName)));let b="";for(const e of c)void 0!==e.value&&(b+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`);const[N,C,O]=h.getTextureAnchor(d,u),M=e.primitiveName,P=k(e.rotation),x=k(e.offsetX),w=k(e.offsetY),L=l(JSON.stringify(d)+b).toString(),I={type:"marker",templateHash:L,materialHash:S.length>0||i(t)&&"function"==typeof t?Se(L,s,S,f):L,cim:d,materialOverrides:S,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:N,y:C},isAbsoluteAnchorPoint:!1,size:e.size,rotation:ye(M,s,"Rotation",f,P),offsetX:ye(M,s,"OffsetX",f,x),offsetY:ye(M,s,"OffsetY",f,w),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:g,rotateClockwise:e.rotateClockwise,referenceSize:y,sizeRatio:O/r(e.size),markerPlacement:o,animatedSymbolProperties:n};m.push(I)}function ue(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(!isNaN(t))return t}return 0}function pe(t){if(!t||0===t.length)return null;const o=new e(t).toRgba();return{r:o[0],g:o[1],b:o[2],a:o[3]}}function ye(e,t,o,i,r,n,l){const a=t[e];if(a){const e=a[o];if("string"==typeof e||"number"==typeof e||e instanceof Array)return n?n.call(null,e,l):e;if(null!=e&&e instanceof s)return(t,o,a)=>{let s=I(e,t,{$view:a},i.geometryType,o);return null!==s&&n&&(s=n.call(null,s,l)),null!==s?s:r}}return r}function he(e){return e?e.charAt(0).toLowerCase()+e.substr(1):e}function ge(e,o,i,r){for(const e of o)if(e.valueExpressionInfo){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName];t instanceof s&&(e.fn=(e,o,i)=>I(t,e,{$view:i},r.geometryType,o))}return(i,r,n)=>{for(const e of o)e.fn&&(e.value=e.fn(i,r,n));const l=[];for(let i of e){const e=i?.primitiveName;if(e){let r=!1;for(const n of o)if(n.primitiveName===e){const e=he(n.propertyName);null!=n.value&&n.value!==i[e]&&(r||(i=t(i),r=!0),i[e]=n.value)}}l.push(i)}return l}}function de(e,o,i,r){const n=[];if(y.findApplicableOverrides(e,o,n),0===n.length)return e;for(const e of n)if(e.valueExpressionInfo){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName];t instanceof s&&(e.fn=(e,o,i)=>I(t,e,{$view:i},r.geometryType,o))}return(o,i,r)=>{for(const e of n)e.fn&&(e.value=e.fn(o,i,r));const l=t(e),a=e.primitiveName;for(const e of n)if(e.primitiveName===a){const t=he(e.propertyName);null!=e.value&&e.value!==l[t]&&(l[t]=e.value)}return l}}function Se(e,t,o,i){for(const e of o)if(e.valueExpressionInfo){const o=t[e.primitiveName]&&t[e.primitiveName][e.propertyName];o instanceof s&&(e.fn=(e,t,r)=>I(o,e,{$view:r},i.geometryType,t))}return(t,i,r)=>{for(const e of o)e.fn&&(e.value=e.fn(t,i,r));return l(e+y.buildOverrideKey(o)).toString()}}function ve(e,t){if(!t||0===t.length)return e;const o=JSON.parse(JSON.stringify(e));return y.applyOverrides(o,t),o}function be(e,t,o,r,n){let l=!1,a="";for(const o of e)o.primitiveName===t&&(void 0!==o.value?a+=`-${o.primitiveName}-${o.propertyName}-${JSON.stringify(o.value)}`:o.valueExpressionInfo&&(l=!0));return i(o)&&"function"==typeof o&&(l=!0),i(r)&&"function"==typeof r&&(l=!0),i(n)&&"function"==typeof n&&(l=!0),[l,a]}function Ne(e,t,o){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const i=e.symbolLayers;if(!i)return;for(const e of i)switch(ke(e,t,o),e.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in e&&e.url&&o.push(t.fetchResource(e.url,null));break;case"CIMVectorMarker":{const i=e.markerGraphics;if(!i)continue;for(const e of i)if(e){const i=e.symbol;i&&Ne(i,t,o)}}}}}}const Ce=e=>e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects;let Oe;function ke(e,t,o){e.effects&&!i(t.geometryEngine)&&(Oe?o.push(Oe):w(e.effects)&&(Oe=L(),o.push(Oe),Oe.then((e=>t.geometryEngine=e))))}export{$ as C,Q as a,ve as b,H as c,j as d,T as e,F as f,R as g};