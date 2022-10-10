// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Analysis ./SlicePlane ../core/Collection ../core/collectionUtils ../core/Logger ../core/maybe ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../geometry/support/coordinateSystem ../views/ViewingMode ../views/3d/analysis/Slice/sliceToolUtils ../views/3d/support/RenderCoordsHelper ../views/support/spatialReferenceSupport".split(" "),
function(m,c,b,x,y,n,z,d,e,C,D,E,A,p,h,q,r,t){const B=z.getLogger("esri.analysis.Slice");b=function(k){function l(a){a=k.call(this,a)||this;a.type="slice";a.tiltEnabled=!1;a.shape=null;a.excludeGroundSurface=!1;return a}m._inheritsLoose(l,k);l.prototype.clear=function(){this.shape=null};m._createClass(l,[{key:"extent",get:function(){if(d.isNone(this.shape)||d.isNone(this.shape.position))return null;const a=this.shape.position.spatialReference;var f=null,g=null;t.isSpatialReferenceSupported(a,h.ViewingMode.Local)&&
(f=r.RenderCoordsHelper.create(h.ViewingMode.Local,p.renderSRFromViewSR(!1,a)),f=q.shapeToExtent(this.shape,f,{tiltEnabled:this.tiltEnabled}));t.isSpatialReferenceSupported(a,h.ViewingMode.Global)&&(g=r.RenderCoordsHelper.create(h.ViewingMode.Global,p.renderSRFromViewSR(!0,a)),g=q.shapeToExtent(this.shape,g,{tiltEnabled:this.tiltEnabled}));if(d.isSome(f)&&d.isSome(g))return f.union(g);if(d.isNone(f)&&d.isNone(g)){var u,v,w;B.warnOnce(`Extent of slice analysis (title: '${null!=(u=this.title)?u:"no title"}', id: '${null!=
(v=this.id)?v:"no id"}') `+"could not be computed as the spatial reference of the shape "+`(wkid: '${null!=(w=a.wkid)?w:"no wkid"}') is not supported by the view`);return null}return d.isNone(f)?g:f}},{key:"excludedLayers",get:function(){return this._get("excludedLayers")||new y},set:function(a){this._set("excludedLayers",n.referenceSetter(a,this._get("excludedLayers")))}},{key:"requiredPropertiesForEditing",get:function(){return[d.applySome(this.shape,a=>a.position)]}},{key:"nonEditableMessage",
get:function(){if(d.isNone(this.shape))return"Assign a slice shape to the analysis to allow editing.";switch(this.shape.type){case "plane":return"Assign a position to the analysis slice plane to allow editing."}}}]);return l}(b);c.__decorate([e.property({type:["slice"]})],b.prototype,"type",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"extent",null);c.__decorate([e.property()],b.prototype,"tiltEnabled",void 0);c.__decorate([e.property({types:{key:"type",base:null,typeMap:{plane:x},
defaultKeyValue:"plane"}})],b.prototype,"shape",void 0);c.__decorate([e.property({cast:n.castForReferenceSetter,clonable:k=>k.slice()})],b.prototype,"excludedLayers",null);c.__decorate([e.property({type:Boolean,nonNullable:!0})],b.prototype,"excludeGroundSurface",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"requiredPropertiesForEditing",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"nonEditableMessage",null);return b=c.__decorate([A.subclass("esri.analysis.SliceAnalysis")],
b)});