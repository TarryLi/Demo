/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../geometry.js";import t from"../Graphic.js";import r from"../core/Collection.js";import s from"../core/Error.js";import{HandleOwnerMixin as i}from"../core/HandleOwner.js";import{h as o}from"../core/lang.js";import n from"../core/Loadable.js";import{L as a}from"./Logger.js";import{a as l,i as u}from"./maybe.js";import{EsriPromiseMixin as c}from"../core/Promise.js";import{open as p}from"../core/workers/workers.js";import{property as d}from"../core/accessorSupport/decorators/property.js";import{j as h}from"./ensureType.js";import{s as y}from"./shared.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import{a as f}from"./unitUtils.js";import{e as g}from"../geometry/SpatialReference.js";import{a as _}from"./queryZScale.js";import j from"../rest/support/FeatureSet.js";import S from"../geometry/Extent.js";import b from"../geometry/Polygon.js";import{t as F}from"./typeUtils.js";import{JSONSupport as O}from"../core/JSONSupport.js";function R(e,t,r){if(null==e.hasM||e.hasZ)for(const e of t)for(const t of e)t.length>2&&(t[2]*=r)}function T(e,t,r){if(!e&&!t||!r)return;const s=f(r);G(e,r,s),G(t,r,s)}function G(e,t,r){if(e)for(const s of e)w(s.geometry,t,r)}function w(e,t,r){if(l(e)||!e.spatialReference||g(e.spatialReference,t))return;const s=f(e.spatialReference)/r;if(1!==s)if("x"in e)null!=e.z&&(e.z*=s);else if("rings"in e)R(e,e.rings,s);else if("paths"in e)R(e,e.paths,s);else if("points"in e&&(null==e.hasM||e.hasZ))for(const t of e.points)t.length>2&&(t[2]*=s)}let C=0;const q=a.getLogger("esri.layers.graphics.sources.MemorySource");let M=class extends(n.LoadableMixin(c(i(r)))){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=u(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}get workerGeometryType(){const e=this.layer?.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);_(e,this.layer.spatialReference,r);const s=j.fromJSON(r);if(!this._requiresClientGraphicMapping())return s;const i=this.layer.objectIdField;for(const e of s.features){const t=e.attributes[i],r=this._idToClientGraphic.get(t);r&&(e.geometry=r.geometry)}return s.geometryType=this.layer.geometryType,s}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new s("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return _(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:S.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async _applyEdits(e){if(!this._connection)throw new s("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const i=[],o=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const n=e=>"objectId"in e&&null!=e.objectId?e.objectId:"attributes"in e&&null!=e.attributes[t]?e.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const t of e.deleteFeatures){const e=n(t);null!=e&&i.push(e)}const a=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures)for(const t of e.updateFeatures)if(o.push(this._serializeFeature(t)),a){const e=n(t);null!=e&&a.set(e,t)}T(r?r.features:null,o,this.layer.spatialReference);const{fullExtent:l,featureEditResults:u}=await this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:o,deletes:i});return this.fullExtent=l,r&&r.finish(u.uidToObjectId),this._updateClientGraphicIds(a,u),this._createEditsResult(u)}async _prepareClientMapping(e,t){if("mesh"!==this.layerOrSourceGeometryType||l(e))return;const r=[];for(const{geometry:s}of e)!u(s)||"mesh"!==s.type||s.hasExtent||s.loaded||r.push(s.load({signal:t}));r.length&&await Promise.all(r)}_updateClientGraphicIds(e,t){if(this._idToClientGraphic){if(e)for(const r of t.updateResults){if(!r.success)continue;const t=e.get(r.objectId);null!=t&&this._addIdToClientGraphic(t)}for(const e of t.deleteResults)e.success&&this._idToClientGraphic.delete(e.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new s("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,r=new Array(e.length);let s=null;for(let i=0;i<e.length;i++){const o=e[i],n=this._serializeFeature(o);!s&&u(o.geometry)&&(s=o.geometry.type),r[i]=n,t.set(`${n.uid}`,o)}const i=this;return{features:r,inferredGeometryType:s,finish(e){const r=i.sourceJSON.objectIdField;for(const s in e){const o=e[s],n=t.get(s);n&&(n.attributes||(n.attributes={}),-1===o?delete n.attributes[r]:n.attributes[r]=o,i._addIdToClientGraphic(n))}}}}_addIdToClientGraphic(e){if(!this._idToClientGraphic)return;const t=this.sourceJSON.objectIdField,r=e.attributes&&e.attributes[t];null!=r&&this._idToClientGraphic.set(r,e)}get layerOrSourceGeometryType(){return this.layer?.geometryType??this.sourceJSON?.geometryType}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this.layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return"mesh"===e||"multipatch"===e||"extent"===e}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),s=(C++).toString();return r?{uid:s,geometry:r.toJSON(),attributes:t}:{uid:s,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return l(t)?null:this._geometryRequiresClientGraphicMapping(t)?t.extent?b.fromExtent(t.extent):null:t}async _startWorker(e){this._connection=await p("MemorySourceWorker",{strategy:o("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,objectIdField:s,hasM:i,hasZ:n,timeInfo:a}=this.layer,l="defaults"===this.layer.originOf("spatialReference");await this._prepareClientMapping(this.items,e);const u=this._prepareAddFeatures(this.items);this.handles.add(this.on("before-changes",(e=>{q.error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),e.preventDefault()})));const c={features:u.features,fields:t&&t.map((e=>e.toJSON())),geometryType:F.toJSON(this.workerGeometryType),hasM:"mesh"!==this.layerOrSourceGeometryType&&i,hasZ:"mesh"===this.layerOrSourceGeometryType||n,objectIdField:s,spatialReference:l?null:r&&r.toJSON(),timeInfo:a?a.toJSON():null},d=await this._connection.invoke("load",c,{signal:e});for(const e of d.warnings)q.warn(e.message,{layer:this.layer,warning:e});d.featureErrors.length&&q.warn(`Encountered ${d.featureErrors.length} validation errors while loading features`,d.featureErrors);const h=d.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(u.inferredGeometryType)&&(h.geometryType=F.toJSON(u.inferredGeometryType)),this.sourceJSON=h,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),u.finish(d.assignedObjectIds)}};var I;e([y({Type:t,ensureType:h(t)})],M.prototype,"itemType",void 0),e([d()],M.prototype,"type",void 0),e([d({constructOnly:!0})],M.prototype,"layer",void 0),e([d({readOnly:!0})],M.prototype,"workerGeometryType",null),e([d()],M.prototype,"sourceJSON",void 0),M=e([m("esri.layers.graphics.sources.MemorySource")],M);let v=I=class extends O{constructor(e){super(e)}clone(){const{name:e,fields:t,isAscending:r,isUnique:s,description:i}=this;return new I({name:e,fields:t,isAscending:r,isUnique:s,description:i})}};e([d({constructOnly:!0})],v.prototype,"name",void 0),e([d({constructOnly:!0})],v.prototype,"fields",void 0),e([d({constructOnly:!0})],v.prototype,"isAscending",void 0),e([d({constructOnly:!0})],v.prototype,"isUnique",void 0),e([d({constructOnly:!0})],v.prototype,"description",void 0),v=I=e([m("esri.layers.support.FeatureIndex")],v);export{v as F,M,T as u};