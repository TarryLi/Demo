/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{e as s}from"../../chunks/enumeration.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import o from"./Domain.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/jsonMap.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";var a;let i=a=class extends o{constructor(r){super(r),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new a({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};r([e({type:Number,json:{type:[Number],read:{source:"range",reader:(r,e)=>e.range&&e.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(r,e,s){e[s]=[this.minValue||0,r]}}}})],i.prototype,"maxValue",void 0),r([e({type:Number,json:{type:[Number],read:{source:"range",reader:(r,e)=>e.range&&e.range[0]},write:{target:"range",writer(r,e,s){e[s]=[r,this.maxValue||0]}}}})],i.prototype,"minValue",void 0),r([s({range:"range"})],i.prototype,"type",void 0),i=a=r([t("esri.layers.support.RangeDomain")],i);const n=i;export{n as default};
