// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../support/elevationInfoUtils","../../../../interactive/dragEventPipeline"],function(f,k,c,l,m){let n=function(){function d(){this.lastDragEvent=this.elevationInfo=this.view=null;this.next=new m.EventPipeline;this._enabled=!1}var g=d.prototype;g._snap=function(b){b=c.isSome(this.view)?this.view.toMap(b,{exclude:[]}):null;c.isSome(b)&&c.isSome(this.view)&&(b.z=l.getZForElevationMode(b,this.view,
this.elevationInfo));return b};g.createDragEventPipelineStep=function(b,e){this.view=b;this.elevationInfo=e;this.lastDragEvent=null;return a=>{this.lastDragEvent="end"!==a.action?{...a}:null;if(this._enabled){const h=this._snap(a.screenEnd);return c.isSome(h)?{action:a.action,mapStart:a.mapStart,mapEnd:h,screenStart:a.screenStart,screenEnd:a.screenEnd}:null}return{action:a.action,mapStart:a.mapStart,mapEnd:a.mapEnd,screenStart:a.screenStart,screenEnd:a.screenEnd}}};k._createClass(d,[{key:"enabled",
get:function(){return this._enabled},set:function(b){if(this._enabled!==b&&c.isSome(this.lastDragEvent)){const e=this.lastDragEvent.mapEnd,a=this._snap(this.lastDragEvent.screenEnd);c.isSome(a)&&this.next.execute({action:"update",mapStart:this.lastDragEvent.mapStart,mapEnd:!0===b?a:e,screenStart:this.lastDragEvent.screenEnd,screenEnd:this.lastDragEvent.screenEnd})}this._enabled=b}}]);return d}();f.SnapToScene=n;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});