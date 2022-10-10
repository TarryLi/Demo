// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Color ../core/jsonMap ../core/lang ../core/screenUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./MarkerSymbol ./SimpleLineSymbol".split(" "),function(n,c,t,d,u,v,e,z,w,x,y,b,p){var l;d=new d.JSONMap({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",
esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"});b=l=function(m){function h(...a){a=m.call(this,...a)||this;a.color=new t([255,255,255,.25]);a.type="simple-marker";a.size=12;a.style="circle";a.outline=new p;return a}n._inheritsLoose(h,m);var k=h.prototype;k.normalizeCtorArgs=function(a,f,q,r){if(a&&"string"!==typeof a)return a;const g={};a&&(g.style=a);null!=f&&(g.size=v.toPt(f));q&&(g.outline=q);r&&(g.color=r);return g};k.writeColor=function(a,f){a&&"x"!==this.style&&
"cross"!==this.style&&(f.color=a.toJSON());null===a&&(f.color=null)};k.clone=function(){return new l({angle:this.angle,color:u.clone(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})};k.hash=function(){var a;return`${m.prototype.hash.call(this)}.${this.color&&this.color.hash()}.${this.path}.${this.style}.${null==(a=this.outline)?void 0:a.hash()}`};n._createClass(h,[{key:"path",set:function(a){this.style=
"path";this._set("path",a)}}]);return h}(b);c.__decorate([e.property()],b.prototype,"color",void 0);c.__decorate([y.writer("color")],b.prototype,"writeColor",null);c.__decorate([w.enumeration({esriSMS:"simple-marker"},{readOnly:!0})],b.prototype,"type",void 0);c.__decorate([e.property()],b.prototype,"size",void 0);c.__decorate([e.property({type:d.apiValues,json:{read:d.read,write:d.write}})],b.prototype,"style",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"path",null);
c.__decorate([e.property({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":p}},json:{default:null,write:!0}})],b.prototype,"outline",void 0);return b=l=c.__decorate([x.subclass("esri.symbols.SimpleMarkerSymbol")],b)});