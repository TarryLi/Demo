/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{clone as s}from"../../core/lang.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import{w as i}from"../../chunks/writer.js";import e from"../FieldInfo.js";import p from"./Content.js";import"../../chunks/maybe.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../chunks/jsonMap.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/enumeration.js";import"../support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number2.js";import"../../chunks/locale.js";var n;let c=n=class extends p{constructor(t){super(t),this.attributes=null,this.description=null,this.fieldInfos=null,this.title=null,this.type="fields"}writeFieldInfos(t,s){s.fieldInfos=t&&t.map((t=>t.toJSON()))}clone(){return new n(s({attributes:this.attributes,description:this.description,fieldInfos:this.fieldInfos,title:this.title}))}};t([o({type:Object,json:{write:!0}})],c.prototype,"attributes",void 0),t([o({type:String,json:{write:!0}})],c.prototype,"description",void 0),t([o({type:[e]})],c.prototype,"fieldInfos",void 0),t([i("fieldInfos")],c.prototype,"writeFieldInfos",null),t([o({type:String,json:{write:!0}})],c.prototype,"title",void 0),t([o({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=n=t([r("esri.popup.content.FieldsContent")],c);const m=c;export{m as default};