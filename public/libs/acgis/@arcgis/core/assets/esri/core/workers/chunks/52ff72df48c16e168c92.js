"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8191],{47842:(e,t,r)=>{r.d(t,{E:()=>w});var i,n=r(29768),o=r(57251),s=r(12047),a=r(71252),l=r(34250),p=(r(76506),r(91306),r(97714)),u=r(17533),c=r(2906),y=r(14249),d=r(17298);let g=i=class extends s.wq{async collectRequiredFields(e,t){return(0,y.io)(e,t,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};(0,n._)([(0,l.Cb)({type:String,json:{write:!0}})],g.prototype,"expression",void 0),(0,n._)([(0,l.Cb)({type:String,json:{write:!0}})],g.prototype,"title",void 0),g=i=(0,n._)([(0,u.j)("esri.layers.support.FeatureExpressionInfo")],g);const f=g;var h;const b=(0,o.s)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),v=new o.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let m=h=class extends s.wq{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,i){t[r]=e.write({},i),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):(0,a.i)(e)||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new h({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,a.g)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,n._)([(0,l.Cb)({type:f,json:{write:!0}})],m.prototype,"featureExpressionInfo",void 0),(0,n._)([(0,p.r)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],m.prototype,"readFeatureExpressionInfo",null),(0,n._)([(0,c.w)("featureExpressionInfo",{featureExpressionInfo:{type:f},"featureExpression.value":{type:[0]}})],m.prototype,"writeFeatureExpressionInfo",null),(0,n._)([(0,l.Cb)({type:b.apiValues,nonNullable:!0,json:{type:b.jsonValues,read:b.read,write:{writer:b.write,isRequired:!0}}})],m.prototype,"mode",null),(0,n._)([(0,l.Cb)({type:Number,json:{write:!0}})],m.prototype,"offset",void 0),(0,n._)([(0,l.Cb)({type:d.s,json:{type:String,read:v.read,write:v.write}})],m.prototype,"unit",null),m=h=(0,n._)([(0,u.j)("esri.layers.support.ElevationInfo")],m);const w=m},82673:(e,t,r)=>{r.d(t,{I:()=>s});var i=r(29768),n=r(17533);let o=0;const s=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+o++})}};return t=(0,i._)([(0,n.j)("esri.core.Identifiable")],t),t};let a=class extends(s(class{})){};a=(0,i._)([(0,n.j)("esri.core.Identifiable")],a)},54179:(e,t,r)=>{r.d(t,{M:()=>h,a:()=>b});var i=r(29768),n=r(21972),o=r(71252),s=r(12047),a=r(76506),l=r(66396),p=r(17533);class u{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(n.a),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new u,r=this._originStores[n.O.DEFAULTS];r&&r.forEach(((e,r)=>{t.set(r,(0,a.d9)(e),n.O.DEFAULTS)}));for(let r=n.O.SERVICE;r<n.a;r++){const i=this._originStores[r];i&&i.forEach(((i,n)=>{e&&e.has(n)||t.set(n,(0,a.d9)(i),r)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=n.O.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||(0,o.b)(this._propertyOriginMap.get(e))<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=n.O.USER){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r&&r.get(e),n=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),n!==i}originOf(e){return this._propertyOriginMap.get(e)||n.O.DEFAULTS}forEach(e){this._values.forEach(e)}}const c=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,o.b)((0,l.g)(this)),r=t.store,i=new u;t.store=i,(0,s.s)(t,r,i)}read(e,t){(0,s.r)(this,e,t)}getAtOrigin(e,t){const r=y(this),i=(0,n.n)(t);if("string"==typeof e)return r.get(e,i);const o={};return e.forEach((e=>{o[e]=r.get(e,i)})),o}originOf(e){return(0,n.b)(this.originIdOf(e))}originIdOf(e){return y(this).originOf(e)}revert(e,t){const r=y(this),i=(0,n.n)(t),o=(0,l.g)(this);let s;s="string"==typeof e?"*"===e?r.keys(i):[e]:e,s.forEach((e=>{o.invalidate(e),r.revert(e,i),o.commit(e)}))}};return t=(0,i._)([(0,p.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function y(e){return(0,l.g)(e).store}let d=class extends(c(n.Z)){};d=(0,i._)([(0,p.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],d);const g=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return f(this).delete(e,(0,n.n)(t))}write(e={},t){return(0,s.w)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,l.g)(this).setAtOrigin(e,t,(0,n.n)(r))}removeOrigin(e){const t=f(this),r=(0,n.n)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),n.O.USER)}updateOrigin(e,t){const r=f(this),i=(0,n.n)(t),o=this.get(e);for(let t=i+1;t<n.a;++t)r.delete(e,t);r.set(e,o,i)}toJSON(e){return this.write({},e)}};return t=(0,i._)([(0,p.j)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function f(e){return(0,l.g)(e).store}const h=e=>{let t=class extends(g(c(e))){constructor(...e){super(...e)}};return t=(0,i._)([(0,p.j)("esri.core.MultiOriginJSONSupport")],t),t};let b=class extends(h(n.Z)){};b=(0,i._)([(0,p.j)("esri.core.MultiOriginJSONSupport")],b)},89440:(e,t,r)=>{r.d(t,{O:()=>y});var i=r(29768),n=r(60991),o=r(32101),s=r(34250),a=(r(76506),r(91306),r(17533)),l=r(2906),p=r(12047),u=r(67541);const c={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,OGCFeatureLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}},y=e=>{let t=class extends e{constructor(){super(...arguments),this.title=null}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&(0,p.a)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){!e||i&&"tables"===i.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=e||"Layer"}read(e,t){t&&(t.layer=this),(0,p.b)(this,e,(t=>super.read(e,t)),t)}write(e,t){if(t?.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=c[e];let i=r&&r[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),!i)return t.messages?.push(new n.Z("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof n.Z&&"web-document-write:property-required"===e.name)).length;return(0,o.jc)(r?.url)?(t?.messages?.push(new n.Z("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&i?null:r}beforeSave(){}};return(0,i._)([(0,s.Cb)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),(0,i._)([(0,s.Cb)(u.c)],t.prototype,"listMode",void 0),(0,i._)([(0,l.w)("listMode")],t.prototype,"writeListMode",null),(0,i._)([(0,s.Cb)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),(0,i._)([(0,l.w)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),(0,i._)([(0,s.Cb)(u.d)],t.prototype,"opacity",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),(0,i._)([(0,l.w)([void 0,"web-scene"],"title")],t.prototype,"writeTitle",null),(0,i._)([(0,s.Cb)({type:Boolean,json:{name:"visibility"}})],t.prototype,"visible",void 0),t=(0,i._)([(0,a.j)("esri.layers.mixins.OperationalLayer")],t),t}},10401:(e,t,r)=>{r.d(t,{c:()=>o,r:()=>n});var i=r(15324);function n(e,t,r=i.Z){return t||(t=new r),t===e||(t.removeAll(),(n=e)&&(Array.isArray(n)||"items"in n&&Array.isArray(n.items))?t.addMany(e):e&&t.add(e)),t;var n}function o(e){return e}},67541:(e,t,r)=>{r.d(t,{a:()=>g,b:()=>I,c:()=>O,d:()=>b,e:()=>f,f:()=>w,g:()=>m,i:()=>S,l:()=>y,m:()=>_,o:()=>v,p:()=>c,r:()=>h,s:()=>u,u:()=>d});var i=r(93314),n=r(21801),o=r(60947),s=r(38742),a=r(1557),l=r(47842),p=r(34394);const u={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},c={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},y={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},d={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:s.w}}},g={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},f={value:null,type:l.E,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function h(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const b={type:Number,json:{origins:{"web-document":{write:!0,read:!0},"portal-item":{write:!0}}}},v={...b,json:{...b.json,origins:{"web-document":{...b.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?(0,p.t)(t.layerDefinition.drawingInfo.transparency):void 0:(0,p.t)(t.drawingInfo.transparency)}}},m={type:i.Z,readOnly:!0,get(){if(!this.layer?.timeInfo)return null;const{datesInUnknownTimezone:e,timeOffset:t,useViewTime:r}=this.layer,i=this.view?.timeExtent;let n=this.layer.timeExtent;e&&(n=(0,a.Jb)(n));let o=r?i&&n?i.intersection(n):i||n:n;if(!o||o.isEmpty||o.isAllTime)return o;t&&(o=o.offset(-t.value,t.unit)),e&&(o=(0,a.b3)(o));const s=this._get("timeExtent");return o.equals(s)?s:o}},w={type:n.Z,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const r=n.Z.fromJSON(e);return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(r.spatialReference=o.Z.fromJSON(t.spatialReference)),r}}}},read:!1}},S={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},_={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},I={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}},O={json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}}},85557:(e,t,r)=>{r.d(t,{m:()=>o});var i=r(53785),n=r(89623);const o={inches:(0,i.c)(1,"meters","inches"),feet:(0,i.c)(1,"meters","feet"),"us-feet":(0,i.c)(1,"meters","us-feet"),yards:(0,i.c)(1,"meters","yards"),miles:(0,i.c)(1,"meters","miles"),"nautical-miles":(0,i.c)(1,"meters","nautical-miles"),millimeters:(0,i.c)(1,"meters","millimeters"),centimeters:(0,i.c)(1,"meters","centimeters"),decimeters:(0,i.c)(1,"meters","decimeters"),meters:(0,i.c)(1,"meters","meters"),kilometers:(0,i.c)(1,"meters","kilometers"),"decimal-degrees":1/(0,i.d)(1,"meters",n.e.radius)}},25368:(e,t,r)=>{function i(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{i:()=>i})},34394:(e,t,r)=>{r.d(t,{o:()=>n,t:()=>o});var i=r(91306);function n(e){const t=(0,i.n)(100*(1-e));return Math.max(0,Math.min(t,100))}function o(e){const t=1-e/100;return Math.max(0,Math.min(t,1))}},93470:(e,t,r)=>{r.d(t,{p:()=>h});var i=r(71252),n=r(25368),o=r(32101),s=r(10279),a=r(86656),l=r(21972),p=r(34250),u=r(38742);function c(e){return y[function(e){return e instanceof Blob?e.type:function(e){const t=(0,o.Ml)(e);return f[t]||d}(e.url)}(e)]||g}const y={},d="text/plain",g=y[d],f={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const e in f)y[f[e]]=e;function h(e){const t=(0,i.i)(e)&&e.origins?e.origins:[void 0];return(r,s)=>{const y=function(e,t,r){if((0,i.i)(e)&&"resource"===e.type)return function(e,t,r){const s=(0,a.g)(t,r);return{type:String,read:(e,t,r)=>{const i=(0,u.r)(e,t,r);return s.type===String?i:"function"==typeof s.type?new s.type({url:i}):void 0},write:{writer(t,a,p,y){if(!y||!y.resources)return"string"==typeof t?void(a[p]=(0,u.t)(t,y)):void(a[p]=t.write({},y));const d=(0,i.a)(h=t)?null:"string"==typeof h?h:h.url,g=d?(0,u.t)(d,{...y,verifyItemRelativeUrls:y&&y.verifyItemRelativeUrls?{writtenUrls:y.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},u.M.NO):null,f=s.type!==String&&(!(0,n.i)(this)||y&&y.origin&&this.originIdOf(r)>(0,l.n)(y.origin));var h;y&&y.portalItem&&(0,i.i)(g)&&!(0,o.YP)(g)?f?function(e,t,r,i,n,s,a,l){const p=a.portalItem.resourceFromPath(i),u=m(r,i,a);c(u)===(0,o.Ml)(p.path)?(v(e,t,p,u,a.resources.toUpdate),n[s]=i):b(e,t,r,i,n,s,a,l)}(this,r,t,g,a,p,y,e):function(e,t,r,i){i.resources.toKeep.push({resource:i.portalItem.resourceFromPath(e)}),t[r]=e}(g,a,p,y):y&&y.portalItem&&((0,i.a)(g)||(0,i.i)((0,u.i)(g))||(0,o.jc)(g)||f)?b(this,r,t,g,a,p,y,e):a[p]=g}}}}(e,t,r);switch((0,i.i)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=u.p;return{read:e,write:t}}}}(e,r,s);for(const e of t){const t=(0,p.CJ)(r,e,s);for(const e in y)t[e]=y[e]}}}function b(e,t,n,a,l,p,u,y){const d=(0,s.g)(),g=m(n,a,u),f=(0,o.v_)((0,i.h)(y,"prefix"),d),h=`${f}.${c(g)}`,b=u.portalItem.resourceFromPath(h);(0,o.jc)(a)&&u.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(r.bind(r,82058)).then((e=>e.r))).default,{data:i}=await t(e,{responseType:"blob"});return i}(a).then((e=>{b.path=`${f}.${c(e)}`,l[p]=b.itemRelativeUrl})).catch((()=>{}))),v(e,t,b,g,u.resources.toAdd),l[p]=b.itemRelativeUrl}function v(e,t,r,i,n){n.push({resource:r,content:i,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function m(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}},17298:(e,t,r)=>{r.d(t,{s:()=>n});var i=r(85557);const n=function(){const e=Object.keys(i.m);return e.sort(),e}()},10279:(e,t,r)=>{r.d(t,{g:()=>n});const i="randomUUID"in crypto;function n(){if(i)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16);return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}},66122:(e,t,r)=>{r.d(t,{J:()=>u,j:()=>c});var i=r(29768),n=r(21972),o=r(76506),s=r(92143),a=r(71252),l=r(66396),p=r(17533);r(60474),r(86656),r(91055),r(6540),r(34250),r(91306),r(60991),r(71552),r(31450),r(40642),r(19657),r(6906),r(50406),s.L.getLogger("esri.core.Clonable");const u=e=>{let t=class extends e{clone(){const e=(0,a.c)((0,l.g)(this),"unable to clone instance of non-accessor class"),t=e.metadatas,r=e.store,i={},s=new Map;for(const e in t){const a=t[e],l=r?.originOf(e),p=a.clonable;if(a.readOnly||!1===p||l!==n.O.USER&&l!==n.O.DEFAULTS&&l!==n.O.WEB_MAP&&l!==n.O.WEB_SCENE)continue;const u=this[e];let c=null;c="function"==typeof p?p(u):"reference"===p?u:(0,o.Vo)(u),null!=u&&null==c||(l===n.O.DEFAULTS?s.set(e,c):i[e]=c)}const p=new(0,Object.getPrototypeOf(this).constructor)(i);if(s.size){const e=(0,l.g)(p)?.store;if(e)for(const[t,r]of s)e.set(t,r,n.O.DEFAULTS)}return p}};return t=(0,i._)([(0,p.j)("esri.core.Clonable")],t),t};let c=class extends(u(n.Z)){};c=(0,i._)([(0,p.j)("esri.core.Clonable")],c)},41617:(e,t,r)=>{r.d(t,{Z:()=>w});var i=r(29768),n=(r(74569),r(82058)),o=r(60991),s=r(75067),a=r(82673),l=r(81184),p=r(92143),u=r(50406),c=r(32101),y=r(34250),d=(r(76506),r(91306),r(17533)),g=r(31450),f=r(21801),h=r(60947);r(73796),r(12047),r(21972),r(60474),r(66396),r(86656),r(91055),r(6540),r(19657),r(6906),r(71552),r(40642),r(97714),r(2906),r(84069),r(91597),r(86787),r(35132),r(89623),r(44567),r(98380),r(92896),r(22781),r(57251),r(32422),r(88762),r(33101);const b=p.L.getLogger("esri.layers.support.fromPortalItem");let v=0,m=class extends(s.Z.EventedMixin((0,a.I)(l.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new f.Z(-180,-90,180,90,h.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+v++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=h.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await r.e(6601).then(r.bind(r,66601))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},i=await Promise.all([r.e(1623),r.e(6458)]).then(r.bind(r,36458));try{return await i.fromItem(t)}catch(e){const r=t&&t.portalItem,i=r&&r.id||"unset",n=r&&r.portal&&r.portal.url||g.Z.portalUrl;throw b.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+n+"', id: '"+i+"')",e),e}}(e)}initialize(){this.when().catch((e=>{(0,u.D_)(e)||p.L.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){if(this.parent){const e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url;return e?(0,c.mN)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,n.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new o.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,y.Cb)({type:String})],m.prototype,"attributionDataUrl",void 0),(0,i._)([(0,y.Cb)({type:f.Z})],m.prototype,"fullExtent",void 0),(0,i._)([(0,y.Cb)({readOnly:!0})],m.prototype,"hasAttributionData",null),(0,i._)([(0,y.Cb)({type:String,clonable:!1})],m.prototype,"id",void 0),(0,i._)([(0,y.Cb)({type:Boolean,nonNullable:!0})],m.prototype,"legendEnabled",void 0),(0,i._)([(0,y.Cb)({type:["show","hide","hide-children"]})],m.prototype,"listMode",void 0),(0,i._)([(0,y.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],m.prototype,"opacity",void 0),(0,i._)([(0,y.Cb)({clonable:!1})],m.prototype,"parent",void 0),(0,i._)([(0,y.Cb)({readOnly:!0})],m.prototype,"parsedUrl",null),(0,i._)([(0,y.Cb)({type:Boolean})],m.prototype,"popupEnabled",void 0),(0,i._)([(0,y.Cb)({type:Boolean})],m.prototype,"attributionVisible",void 0),(0,i._)([(0,y.Cb)({type:h.Z})],m.prototype,"spatialReference",void 0),(0,i._)([(0,y.Cb)({type:String})],m.prototype,"title",void 0),(0,i._)([(0,y.Cb)({readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),(0,i._)([(0,y.Cb)()],m.prototype,"url",void 0),(0,i._)([(0,y.Cb)({type:Boolean,nonNullable:!0})],m.prototype,"visible",void 0),m=(0,i._)([(0,d.j)("esri.layers.Layer")],m);const w=m},78191:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var i=r(29768),n=r(21972),o=r(66122),s=r(82673),a=r(12047),l=r(71252),p=r(34250),u=(r(76506),r(91306),r(17533));let c=0,y=class extends((0,a.eC)((0,o.J)((0,s.I)(n.Z)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${c++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if((0,l.i)(t))switch(t.type){case"line-of-sight":t.removeAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(l.i)}};(0,i._)([(0,p.Cb)({type:String,constructOnly:!0,clonable:!1})],y.prototype,"id",void 0),(0,i._)([(0,p.Cb)({type:String})],y.prototype,"title",void 0),(0,i._)([(0,p.Cb)({constructOnly:!0})],y.prototype,"type",void 0),(0,i._)([(0,p.Cb)({clonable:!1,value:null})],y.prototype,"parent",null),(0,i._)([(0,p.Cb)({readOnly:!0})],y.prototype,"extent",void 0),(0,i._)([(0,p.Cb)({readOnly:!0})],y.prototype,"isEditable",null),(0,i._)([(0,p.Cb)({readOnly:!0})],y.prototype,"requiredPropertiesForEditing",void 0),(0,i._)([(0,p.Cb)({readOnly:!0})],y.prototype,"nonEditableMessage",void 0),y=(0,i._)([(0,u.j)("esri.analysis.Analysis")],y);const d=y;function g(e,t){return f(e)===f(t)}function f(e){if((0,l.a)(e))return null;const t=null!=e.layer?e.layer.id:"";let r=null;return r=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==r?null:`o-${t}-${r}`}const h={json:{write:{writer:function(e,t){(0,l.a)(e)||null==e.layer?.objectIdField||null==e.attributes||(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}};var b=r(93470),v=r(91597),m=r(47842);r(60474),r(66396),r(86656),r(92143),r(31450),r(71552),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991),r(32101),r(10279),r(38742),r(86787),r(97714),r(2906),r(73796),r(60947),r(35132),r(89623),r(57251),r(14249),r(60217),r(74569),r(21801),r(84069),r(44567),r(98380),r(92896),r(22781),r(32422),r(17298),r(85557),r(53785),r(95587);let w=class extends((0,a.eC)((0,o.J)(n.Z))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,l.g)(this.position,e.position)&&(0,l.g)(this.elevationInfo,e.elevationInfo)&&g(this.feature,e.feature)}};(0,i._)([(0,p.Cb)({type:v.Z}),(0,b.p)()],w.prototype,"position",void 0),(0,i._)([(0,p.Cb)({type:m.E}),(0,b.p)()],w.prototype,"elevationInfo",void 0),(0,i._)([(0,p.Cb)(h)],w.prototype,"feature",void 0),w=(0,i._)([(0,u.j)("esri.analysis.LineOfSightAnalysisObserver")],w);const S=w;let _=class extends((0,a.eC)(o.j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,l.g)(this.position,e.position)&&(0,l.g)(this.elevationInfo,e.elevationInfo)&&g(this.feature,e.feature)}};(0,i._)([(0,p.Cb)({type:v.Z}),(0,b.p)()],_.prototype,"position",void 0),(0,i._)([(0,p.Cb)({type:m.E}),(0,b.p)()],_.prototype,"elevationInfo",void 0),(0,i._)([(0,p.Cb)(h)],_.prototype,"feature",void 0),_=(0,i._)([(0,u.j)("esri.analysis.LineOfSightAnalysisTarget")],_);const I=_;var O=r(15324),L=r(10401),x=r(58085),j=r(1623),C=r(53326);r(75067),r(89914),r(82426),r(29794),r(65775),r(12381),r(73173),r(82058),r(88762),r(92482),r(92624),r(92847);const E=O.Z.ofType(I);let A=class extends d{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null,this.nonEditableMessage="Assign an observer location to the analysis to allow editing."}initialize(){this.own((0,x.YP)((()=>this._computeExtent()),(e=>{((0,l.a)(e)||(0,l.a)(e.pending))&&this._set("extent",(0,l.i)(e)?e.extent:null)}),x.tX))}get targets(){return this._get("targets")||new E}set targets(e){this._set("targets",(0,L.r)(e,this.targets,E))}get spatialReference(){return(0,l.i)(this.observer)&&(0,l.i)(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[(0,l.f)(this.observer,(e=>e.position))]}async waitComputeExtent(){const e=this._computeExtent();return(0,l.i)(e)?(0,l.u)(e.pending):null}_computeExtent(){const e=this.spatialReference;if((0,l.a)(this.observer)||(0,l.a)(this.observer.position)||(0,l.a)(e))return null;const t=e=>"absolute-height"===function(e,t){return function(e,t){return(0,l.a)(t)||!t.mode?e?"absolute-height":"on-the-ground":t.mode}(!!(0,l.i)(e)&&e.hasZ,t)}(e.position,e.elevationInfo),r=this.observer.position,i=(0,C.f)(r.x,r.y,r.z,r.x,r.y,r.z);for(const t of this.targets)if((0,l.i)(t.position)){const r=(0,j.dz)(t.position,e);if((0,l.i)(r.pending))return{pending:r.pending,extent:null};if((0,l.i)(r.geometry)){const{x:e,y:t,z:n}=r.geometry;(0,C.e)(i,[e,t,n])}}const n=(0,C.t)(i,e);return t(this.observer)&&this.targets.every(t)||(n.zmin=null,n.zmax=null),{pending:null,extent:n}}clear(){this.observer=null,this.targets.removeAll()}};(0,i._)([(0,p.Cb)({type:["line-of-sight"]})],A.prototype,"type",void 0),(0,i._)([(0,p.Cb)({type:S,json:{read:!0,write:!0}})],A.prototype,"observer",void 0),(0,i._)([(0,p.Cb)({cast:L.c,type:E,nonNullable:!0,json:{read:!0,write:!0}})],A.prototype,"targets",null),(0,i._)([(0,p.Cb)({value:null,readOnly:!0})],A.prototype,"extent",void 0),(0,i._)([(0,p.Cb)({readOnly:!0})],A.prototype,"spatialReference",null),(0,i._)([(0,p.Cb)({readOnly:!0})],A.prototype,"requiredPropertiesForEditing",null),(0,i._)([(0,p.Cb)({readOnly:!0})],A.prototype,"nonEditableMessage",void 0),A=(0,i._)([(0,u.j)("esri.analysis.LineOfSightAnalysis")],A);const M=A;var T=r(54179),G=r(41617),R=r(89440);r(81184),r(33101),r(67541),r(93314),r(35197),r(1557),r(34394);const N=O.Z.ofType(I);let D=class extends((0,R.O)((0,T.M)(G.Z))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new M,this.opacity=1}initialize(){this.own((0,x.YP)((()=>this.analysis),((e,t)=>{(0,l.i)(t)&&t.parent===this&&(t.parent=null),(0,l.i)(e)&&(e.parent=this)}),x.tX))}async load(){return(0,l.i)(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return(0,l.f)(this.analysis,(e=>e.observer))}set observer(e){(0,l.f)(this.analysis,(t=>t.observer=e))}get targets(){return(0,l.i)(this.analysis)?this.analysis.targets:null}set targets(e){(0,l.f)(this.analysis,(t=>t.targets=e))}get fullExtent(){return(0,l.i)(this.analysis)?this.analysis.extent:null}get spatialReference(){return(0,l.i)(this.analysis)?this.analysis.spatialReference:null}removeAnalysis(e){this.analysis===e&&(this.analysis=new M)}};(0,i._)([(0,p.Cb)({json:{read:!1},readOnly:!0})],D.prototype,"type",void 0),(0,i._)([(0,p.Cb)({type:["LineOfSightLayer"]})],D.prototype,"operationalLayerType",void 0),(0,i._)([(0,p.Cb)({type:S,json:{read:!0,write:{ignoreOrigin:!0}}})],D.prototype,"observer",null),(0,i._)([(0,p.Cb)({type:N,json:{read:!0,write:{ignoreOrigin:!0}}})],D.prototype,"targets",null),(0,i._)([(0,p.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],D.prototype,"analysis",void 0),(0,i._)([(0,p.Cb)({readOnly:!0})],D.prototype,"fullExtent",null),(0,i._)([(0,p.Cb)({readOnly:!0})],D.prototype,"spatialReference",null),(0,i._)([(0,p.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],D.prototype,"opacity",void 0),(0,i._)([(0,p.Cb)({type:["show","hide"]})],D.prototype,"listMode",void 0),D=(0,i._)([(0,u.j)("esri.layers.LineOfSightLayer")],D);const F=D},1557:(e,t,r)=>{r.d(t,{Jb:()=>a,b3:()=>s});var i=r(93314),n=r(71252),o=(r(50406),r(35197));function s(e){if(!e)return e;const{start:t,end:r}=e;return new i.Z({start:(0,n.i)(t)?(0,o.o)(t,-t.getTimezoneOffset(),"minutes"):t,end:(0,n.i)(r)?(0,o.o)(r,-r.getTimezoneOffset(),"minutes"):r})}function a(e){if(!e)return e;const{start:t,end:r}=e;return new i.Z({start:(0,n.i)(t)?(0,o.o)(t,t.getTimezoneOffset(),"minutes"):t,end:(0,n.i)(r)?(0,o.o)(r,r.getTimezoneOffset(),"minutes"):r})}r(12047),r(21972),r(60474),r(66396),r(76506),r(17533),r(86656),r(6540),r(92143),r(31450),r(71552),r(40642),r(91306),r(60991),r(91055),r(34250),r(19657),r(6906),r(97714),r(2906)}}]);