// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Handles ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(k,d,b,n,g,e,q,r,t,p){b=function(l){function h(a){a=l.call(this,a)||this;a._viewpointHandle=null;a._handles=new n;a.group=null;return a}k._inheritsLoose(h,l);var f=h.prototype;f.initialize=
function(){this._handles.add(g.on(()=>{var a;return null==(a=this.view)?void 0:a.ui},"expand",a=>{({target:a}=a);a&&a!==this&&a.expanded&&a.group&&a.group===this.group&&this._collapse()}))};f.destroy=function(){this.view=this._viewpointHandle=null;this._handles.destroy();this._handles=null};f._viewpointHandleChange=function(a){this._viewpointHandle&&(a?g.when(()=>this.view.stationary,()=>this._viewpointHandle.resume(),{once:!0,initial:!0}):this._viewpointHandle.pause())};f._watchViewpoint=function(){this._handles.remove("viewpoint");
this._viewpointHandle=null;const {autoCollapse:a,view:c}=this;if(c&&a){const m=g.pausable(()=>"3d"===c.type?c.camera:c.viewpoint,()=>this._collapse());this._handles.add(m,"viewpoint");this._viewpointHandle=m}};f._collapse=function(){this.expanded=!1};k._createClass(h,[{key:"autoCollapse",set:function(a){this._set("autoCollapse",a);this._watchViewpoint()}},{key:"expanded",set:function(a){a=!!a;this._set("expanded",a);const c=this.get("view.ui");c&&c.emit("expand",{target:this});this._viewpointHandleChange(a)}},
{key:"state",get:function(){return this.get("view.ready")?"ready":"disabled"}},{key:"view",set:function(a){this._get("view")!==a&&(this._set("view",a),a&&g.when(()=>a.ready,()=>{this.view===a&&this._watchViewpoint()},{once:!0,initial:!0}))}}]);return h}(b);d.__decorate([e.property({value:!1})],b.prototype,"autoCollapse",null);d.__decorate([e.property({value:!1})],b.prototype,"expanded",null);d.__decorate([e.property()],b.prototype,"group",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,
"state",null);d.__decorate([e.property({value:null})],b.prototype,"view",null);return b=d.__decorate([p.subclass("esri.widgets.Expand.ExpandViewModel")],b)});