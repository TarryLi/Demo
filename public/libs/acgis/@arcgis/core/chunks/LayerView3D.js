/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{m as s}from"./handleUtils.js";import{throwIfAborted as t}from"../core/promiseUtils.js";import{whenOnce as o}from"../core/reactiveUtils.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{s as a,r as l}from"./heightModelInfoUtils.js";const n=n=>{let c=class extends n{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),a(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,r=e.signal;this.handles.add(s((()=>e.abort()))),await o((()=>this.view.defaultsFromMap?.heightModelInfoReady),r),t(r);const i=l(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return s&&s.minScale&&s.maxScale&&s.minScale<s.maxScale&&(e.outsideScaleRange=!0),e}};return e([r()],c.prototype,"view",void 0),e([r()],c.prototype,"slicePlaneEnabled",void 0),c=e([i("esri.views.3d.layers.LayerView3D")],c),c};export{n as L};
