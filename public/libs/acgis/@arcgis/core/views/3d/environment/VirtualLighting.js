/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import t from"../../../core/Evented.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as r}from"../../../core/accessorSupport/decorators/subclass.js";import s from"../../../webscene/VirtualLighting.js";import"../../../core/Accessor.js";import"../../../chunks/maybe.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../core/JSONSupport.js";var i;let n=i=class extends(t.EventedMixin(s)){constructor(e){super(e),this.ambientOcclusionEnabled=!1,this.waterReflectionEnabled=!1}clone(){return new i({...this.cloneConstructProperties(),ambientOcclusionEnabled:this.ambientOcclusionEnabled,waterReflectionEnabled:this.waterReflectionEnabled})}static fromWebsceneLighting(e){return new i(e.cloneConstructProperties())}cloneWithWebsceneLighting(e){const t=this.clone();return t.directShadowsEnabled=e.directShadowsEnabled,t}};e([o({type:Boolean})],n.prototype,"ambientOcclusionEnabled",void 0),e([o({type:Boolean})],n.prototype,"waterReflectionEnabled",void 0),n=i=e([r("esri.views.3d.environment.VirtualLighting")],n);const c=n;export{c as default};
