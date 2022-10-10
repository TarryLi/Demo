// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/maybe ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/set ../../../../core/accessorSupport/decorators/subclass ../css ./TooltipContent ../support/TooltipField ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(c,p,q,e,w,x,y,z,A,r,g,t,d,B,b){var u=
`${g.CONTENT} ${`${g.CONTENT}--translate-vertex`}`;c.TooltipContentTranslateVertex=function(h){function f(){return h.apply(this,arguments)||this}p._inheritsLoose(f,h);f.prototype.render=function(){var k;const {area:l,distance:v,elevation:m,totalLength:n}=this.info,a=null==(k=this._messagesTooltip)?void 0:k.sketch;return b.tsx("div",{class:u},b.tsx(d.TooltipField,{title:null==a?void 0:a.distance,value:this._formatLength(v)}),e.isSome(m)&&b.tsx(d.TooltipField,{title:null==a?void 0:a.elevation,value:this._formatVerticalLength(m)}),
e.isSome(l)&&b.tsx(d.TooltipField,{title:null==a?void 0:a.area,value:this._formatArea(l)}),e.isSome(n)&&b.tsx(d.TooltipField,{title:null==a?void 0:a.totalLength,value:this._formatLength(n)}))};return f}(t.TooltipContent);c.TooltipContentTranslateVertex=q.__decorate([r.subclass("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],c.TooltipContentTranslateVertex);Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});