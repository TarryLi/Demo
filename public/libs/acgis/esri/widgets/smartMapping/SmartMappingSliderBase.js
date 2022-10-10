// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/aliasOf ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../Histogram ../Slider ../Widget ./support/utils ../support/widgetUtils ../support/jsxFactory".split(" "),function(f,t,g,x,u,v,p,H,I,B,q,C,D,E,F,G,J,
m){const z={interactiveTrack:!1};f.SmartMappingSliderBase=function(A){function w(a,d){var h;var b=A.call(this,a,d)||this;b.hasTimeData=null;b.histogram=new D({layout:"vertical"});b.histogramConfig=null;b.inputFormatFunction=null;b.inputParseFunction=null;b.labelFormatFunction=null;b.precision=4;b.slider=new E({syncedSegmentsEnabled:!0,thumbsConstrained:!1,layout:"vertical",visibleElements:{labels:!0,rangeLabels:!0},labelInputsEnabled:!0,rangeLabelInputsEnabled:!0});b.state=null;b.syncedSegmentsEnabled=
!1;b.viewModel=null;b.visibleElements={...z};b.zoomOptions=null;const e=b.slider;null==a||!a.hasTimeData||null!=a&&a.inputParseFunction||null!=a&&a.inputFormatFunction||e.set({labelInputsEnabled:!1,rangeLabelInputsEnabled:!1});e.draggableSegmentsEnabled=!(null==a||null==(h=a.visibleElements)||!h.interactiveTrack);b.own([e.on("max-change",c=>b.emit("max-change",c)),e.on("max-click",c=>b.emit("max-click",c)),e.on("min-change",c=>b.emit("min-change",c)),e.on("min-click",c=>b.emit("min-click",c)),e.on("segment-click",
c=>b.emit("segment-click",c)),e.on("segment-drag",c=>b.emit("segment-drag",c)),e.on("thumb-change",c=>b.emit("thumb-change",c)),e.on("thumb-click",c=>b.emit("thumb-click",c)),e.on("thumb-drag",c=>b.emit("thumb-drag",c)),e.on("track-click",c=>b.emit("track-click",c)),v.watch(()=>[b.histogramConfig,b.max,b.min,b.zoomOptions],()=>{const {histogram:c,histogramConfig:l,viewModel:{max:n,min:r}}=t._assertThisInitialized(b),y=b.getParamsFromHistogramConfig(l);c.set({...y,max:n,min:r})}),v.watch(()=>b.labelFormatFunction,
()=>{const {histogram:c,labelFormatFunction:l}=t._assertThisInitialized(b);c.set({labelFormatFunction:l})}),v.watch(()=>b.hasTimeData,c=>{const {labelInputsEnabled:l,rangeLabelInputsEnabled:n}=b.slider;c=!c||b.inputFormatFunction&&b.inputParseFunction;e.set({labelInputsEnabled:l&&c,rangeLabelInputsEnabled:n&&c})}),v.watch(()=>{var c;return null==(c=b.visibleElements)?void 0:c.interactiveTrack},c=>{e.draggableSegmentsEnabled=!!c})]);b._onMaxZoomCapPointerDown=b._onMaxZoomCapPointerDown.bind(t._assertThisInitialized(b));
b._onMinZoomCapPointerDown=b._onMinZoomCapPointerDown.bind(t._assertThisInitialized(b));return b}t._inheritsLoose(w,A);var k=w.prototype;k.initialize=function(){const {histogramConfig:a={},viewModel:d}=this,{labelFormatFunction:h,max:b,min:e}=d,c=this.getParamsFromHistogramConfig(a);this.histogram.set({labelFormatFunction:h,...c,max:b,min:e});this.slider.set({viewModel:d})};k.castVisibleElements=function(a){return{...z,...a}};k.renderContent=function(a,d,h){this.slider.extraNodes=[a,this.renderHistogram(h)];
return m.tsx("div",{class:d},this.slider.render())};k.renderHistogram=function(a){return this.histogramConfig?m.tsx("div",{key:"histogram",class:a?a:null},this.histogram.render()):null};k.renderBackgroundFillDefinition=function(a){return m.tsx("pattern",{id:a,patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"15",height:"15"},m.tsx("image",{x:"0",y:"0",width:"15",height:"15",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNjY2MiIC8+PHBhdGggZD0iTTAgMCBMOCAwIEw4IDggTDAgOCBaIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDgpIiAvPjxwYXRoIGQ9Ik0wIDAgTDggMCBMOCA4IEwwIDggWiIgZmlsbD0iI2NjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCw4KSIgLz48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsMCkiIC8+PC9zdmc+"}))};
k.renderRampFillDefinition=function(a,d){return m.tsx("linearGradient",{id:a,x1:"0",x2:"0",y1:"0",y2:"1"},this.renderRampFillStops(d))};k.renderRampFillStops=function(a){return a.reverse().map((d,h)=>this.renderStop(d,h))};k.renderStop=function(a,d){const {color:h,offset:b,opacity:e}=this.getPropsForStop(a);return m.tsx("stop",{key:`${d}-stop`,offset:b,"stop-color":h,"stop-opacity":e})};k.renderZoomCaps=function(){return[this.renderMaxZoomCap(),this.renderMinZoomCap()]};k.renderMinZoomCap=function(){if(this.zoomOptions&&
!u.isNone(this.zoomOptions.min))return m.tsx("svg",{key:"bottom",class:this.classes("zoom-cap","zoom-cap--min"),viewBox:"0 0 30 11",xmlns:"http://www.w3.org/2000/svg",onpointerdown:this._onMinZoomCapPointerDown},m.tsx("polygon",{class:"zoom-cap--mask",key:"mask",fill:"#1B8617",points:"0 11.3846154 30 11.3846154 30 1 25 5.38461538 20 1 15 5.38461538 10 1 5 5.38461538 0 1"}),m.tsx("polygon",{class:"zoom-cap--underline",key:"underline",fill:"#69DCFF",points:"0 0 5 4.38461538 10 0 15 4.38461538 20 0 25 4.38461538 30 0 30 4.61538462 25 9 20 4.61538462 15 9 10 4.61538462 5 9 0 4.61538462"}),
m.tsx("polygon",{class:"zoom-cap--line",key:"line",fill:"#DA5656",points:"0 1 5 5.38461538 10 1 15 5.38461538 20 1 25 5.38461538 30 1 30 5.61538462 25 10 20 5.61538462 15 10 10 5.61538462 5 10 0 5.61538462"}))};k.renderMaxZoomCap=function(){if(this.zoomOptions&&!u.isNone(this.zoomOptions.max))return m.tsx("svg",{key:"top",class:this.classes("zoom-cap","zoom-cap--max"),viewBox:"0 0 30 11",xmlns:"http://www.w3.org/2000/svg",onpointerdown:this._onMaxZoomCapPointerDown},m.tsx("polygon",{class:"zoom-cap--mask",
key:"mask",points:"0 -1.81994377e-12 30 -1.81994377e-12 30 8.23076923 25 3.61538462 20 8.23076923 15 3.61538462 10 8.23076923 5 3.61538462 0 8.23076923"}),m.tsx("polygon",{class:"zoom-cap--underline",key:"underline",points:"0 5.61538462 5 1 10 5.61538462 15 1 20 5.61538462 25 1 30 5.61538462 30 10.2307692 25 5.61538462 20 10.2307692 15 5.61538462 10 10.2307692 5 5.61538462 0 10.2307692"}),m.tsx("polygon",{class:"zoom-cap--line",key:"line",points:"0 4.61538462 5 -1.87329639e-12 10 4.61538462 15 -1.87329639e-12 20 4.61538462 25 -1.87329639e-12 30 4.61538462 30 9.23076923 25 4.61538462 20 9.23076923 15 4.61538462 10 9.23076923 5 4.61538462 0 9.23076923"}))};
k.getPropsForStop=function(a){const {color:d,offset:h}=a;return{color:d instanceof x?d.toCss(!0):x.fromString(d).toCss(!0),offset:(100*h).toFixed(2)+"%",opacity:d instanceof x?d.toRgba()[3]:null}};k.getParamsFromHistogramConfig=function(a){if(!a)return null;const {average:d,barCreatedFunction:h,bins:b,dataLineCreatedFunction:e,dataLineUpdatedFunction:c}=a;return{average:d,barCreatedFunction:h,bins:b,dataLineCreatedFunction:e,dataLineUpdatedFunction:c,dataLines:this._getDataLines(a)}};k._onMaxZoomCapPointerDown=
function(){var {zoomOptions:a}=this;a&&u.isSome(a.max)&&({min:a}=a,this.zoomOptions=u.isSome(a)?{min:a}:null)};k._onMinZoomCapPointerDown=function(){var {zoomOptions:a}=this;a&&u.isSome(a.min)&&({max:a}=a,this.zoomOptions=u.isSome(a)?{max:a}:null)};k._getDataLines=function(a){const {average:d,standardDeviation:h,standardDeviationCount:b}=a,{max:e,min:c}=this.viewModel.getBounds();return[...this._getStandardDeviationDataLines(h,d,b||1),...a.dataLines||[]].filter(({value:l})=>l<=e&&l>=c)};k._getStandardDeviationDataLines=
function(a,d,h){const {max:b,min:e}=this.viewModel,c=.06*(b-e);return G.getDeviationValues(a,d,h).filter(l=>Math.abs(d-l)>c).map((l,n,r)=>{const y=this.labelFormatFunction?this.labelFormatFunction(l):l;r=r.length/2;n=n>=r?n-r+1:r-n;return{value:l,label:`${l>d?"+":"-"}${1===n?"":n}\u03c3 ${y}`}})};t._createClass(w,[{key:"max",get:function(){var a,d;this.commitProperty("max");return null!=(a=null==(d=this.viewModel)?void 0:d.getUnzoomedMax())?a:null},set:function(a){this.viewModel.max=a;this._set("max",
a)}},{key:"min",get:function(){var a,d;this.commitProperty("min");return null!=(a=null==(d=this.viewModel)?void 0:d.getUnzoomedMin())?a:null},set:function(a){this.viewModel.min=a;this._set("min",a)}}]);return w}(F);g.__decorate([p.aliasOf("viewModel.hasTimeData")],f.SmartMappingSliderBase.prototype,"hasTimeData",void 0);g.__decorate([q.property()],f.SmartMappingSliderBase.prototype,"histogram",void 0);g.__decorate([q.property()],f.SmartMappingSliderBase.prototype,"histogramConfig",void 0);g.__decorate([p.aliasOf("viewModel.inputFormatFunction")],
f.SmartMappingSliderBase.prototype,"inputFormatFunction",void 0);g.__decorate([p.aliasOf("viewModel.inputParseFunction")],f.SmartMappingSliderBase.prototype,"inputParseFunction",void 0);g.__decorate([p.aliasOf("viewModel.labelFormatFunction")],f.SmartMappingSliderBase.prototype,"labelFormatFunction",void 0);g.__decorate([q.property()],f.SmartMappingSliderBase.prototype,"max",null);g.__decorate([q.property()],f.SmartMappingSliderBase.prototype,"min",null);g.__decorate([p.aliasOf("viewModel.precision")],
f.SmartMappingSliderBase.prototype,"precision",void 0);g.__decorate([q.property()],f.SmartMappingSliderBase.prototype,"slider",void 0);g.__decorate([p.aliasOf("viewModel.state")],f.SmartMappingSliderBase.prototype,"state",void 0);g.__decorate([p.aliasOf("slider.syncedSegmentsEnabled")],f.SmartMappingSliderBase.prototype,"syncedSegmentsEnabled",void 0);g.__decorate([p.aliasOf("viewModel.values")],f.SmartMappingSliderBase.prototype,"values",void 0);g.__decorate([q.property()],f.SmartMappingSliderBase.prototype,
"viewModel",void 0);g.__decorate([q.property()],f.SmartMappingSliderBase.prototype,"visibleElements",void 0);g.__decorate([B.cast("visibleElements")],f.SmartMappingSliderBase.prototype,"castVisibleElements",null);g.__decorate([p.aliasOf("viewModel.zoomOptions")],f.SmartMappingSliderBase.prototype,"zoomOptions",void 0);f.SmartMappingSliderBase=g.__decorate([C.subclass("esri.widgets.smartMapping.SmartMappingSliderBase")],f.SmartMappingSliderBase);Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});