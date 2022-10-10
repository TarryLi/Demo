// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./Settings"],function(d,h,e){let k=function(){function b(a){this.createCamera=a;this.compared={sourceZoom:0,targetZoom:0,pan:0,rotate:0};this.settings={desiredScreenFlow:e.defaultSettings.desiredScreenFlow};this.source=a();this.target=a()}var c=b.prototype;c.clone=function(){const a=new b(this.createCamera);a.copyFrom(this);return a};c.copyFrom=function(a){this.update(a.source,a.target,a.settings)};c.update=function(a,f,g){this.source!==
a&&this.source.copyFrom(a);this.target!==f&&this.target.copyFrom(f);this.compared=this.source.compareTo(this.target,this.compared);this.settings.desiredScreenFlow=null!=g.desiredScreenFlow?g.desiredScreenFlow:e.defaultSettings.desiredScreenFlow;this.desiredPixelFlow=this.settings.desiredScreenFlow*this.target.size;this.halfWindowSize=this.target.size/2};c.halfWindowPanAtZoom=function(a){a=this.target.pixelsPerPanAtZoom(a);return this.halfWindowSize/a};h._createClass(b,[{key:"hasZoom",get:function(){return 1E-5<
Math.abs(this.compared.sourceZoom-this.compared.targetZoom)}},{key:"hasPan",get:function(){return 1E-9<this.compared.pan}},{key:"hasRotate",get:function(){return 1E-9<this.compared.rotate}}]);return b}();d.Definition=k;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});