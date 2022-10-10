// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../Color ../../../core/has ../../../core/handleUtils ../../../core/maybe ../../../chunks/vec3 ../../../chunks/vec3f64 ./visualElements/ExtendedLineVisualElement ./visualElements/ParallelLineVisualElement ./visualElements/PointVisualElement ./visualElements/RightAngleQuadVisualElement ../webgl-engine/lib/Material ../../interactive/snapping/Settings ../../interactive/snapping/snappingUtils ../../interactive/snapping/SnappingVisualizer ../../interactive/support/viewUtils".split(" "),
function(t,B,h,u,m,n,C,v,w,D,x,E,p,c,q,F,k){u=function(y){function r(){return y.apply(this,arguments)||this}B._inheritsLoose(r,y);var f=r.prototype;f.visualizeIntersectionPoint=function(b,a){const {coordinateHelper:d,view:e}=a;return m.destroyHandle(new x.PointVisualElement({view:e,primitive:"circle",geometry:d.vectorToPoint(b.intersectionPoint),elevationInfo:n.unwrapOr(b.elevationInfo,a.elevationInfo),size:20,outlineSize:2,color:[0,0,0,0],outlineColor:h.toUnitRGBA(c.defaults.orange),pixelSnappingEnabled:!1}))};
f.visualizePoint=function(b,a){const {coordinateHelper:d,view:e}=a;return m.destroyHandle(new x.PointVisualElement({view:e,primitive:"circle",geometry:d.vectorToPoint(b.point),elevationInfo:n.unwrapOr(b.elevationInfo,a.elevationInfo),size:20,outlineSize:2,color:[0,0,0,0],outlineColor:h.toUnitRGBA(c.defaults.orange),pixelSnappingEnabled:!1}))};f.visualizeLine=function(b,a){const {coordinateHelper:d,view:e}=a;return m.destroyHandle(this._createLineSegmentHintFromMap(b.type,b.lineStart,b.lineEnd,d,n.unwrapOr(b.elevationInfo,
a.elevationInfo),e,b.fadeLeft,b.fadeRight))};f.visualizeParallelSign=function(b,a){const {coordinateHelper:d,view:e}=a,l=n.unwrapOr(b.elevationInfo,a.elevationInfo),g=k.anyMapPointToRender(b.lineStart,d,l,a.view);b=k.anyMapPointToRender(b.lineEnd,d,l,a.view);b=C.lerp(b,g,b,.5);a=new D.ParallelLineVisualElement({view:e,attached:!1,offset:c.defaults.parallelLineHintOffset,length:c.defaults.parallelLineHintLength,width:c.defaults.parallelLineHintWidth,color:h.toUnitRGBA(c.defaults.orange),location:b,
renderOccluded:p.RenderOccludedFlag.Opaque});a.setDirectionFromPoints(g,b);a.attached=!0;return m.destroyHandle(a)};f.visualizeRightAngleQuad=function(b,a){const {coordinateHelper:d,view:e}=a;a=n.unwrapOr(b.elevationInfo,a.elevationInfo);return m.destroyHandle(new E.RightAngleQuadVisualElement({view:e,attached:!0,color:h.toUnitRGBA(c.defaults.orange),renderOccluded:p.RenderOccludedFlag.Transparent,outlineRenderOccluded:p.RenderOccludedFlag.Opaque,outlineColor:h.toUnitRGBA(c.defaults.orange),outlineSize:c.defaults.rightAngleHintOutlineSize,
size:c.defaults.rightAngleHintSize,geometry:{previous:k.anyMapPointToRender(b.previousVertex,d,a,e),center:k.anyMapPointToRender(b.centerVertex,d,a,e),next:k.anyMapPointToRender(b.nextVertex,d,a,e)}}))};f._createLineSegmentHintFromMap=function(b,a,d,e,l,g,G=!0,H=!0){const z=v.create(),A=v.create();k.anyMapPointsToRenderWithEqualRelativeZ(a,d,e,l,g,z,A);return this._createLineSegmentHint(b,g,z,A,G,H)};f._createLineSegmentHint=function(b,a,d,e,l=!0,g=!0){a=new w.ExtendedLineVisualElement({view:a,extensionType:w.ExtensionType.FADED,
start:d,end:e,color:h.toUnitRGBA(c.defaults.orange),renderOccluded:p.RenderOccludedFlag.Opaque});switch(b){case q.LineSegmentHintType.TARGET:a.width=c.defaults.lineHintWidthTarget;a.fadedExtensions={start:0,end:c.defaults.lineHintFadedExtensions};break;case q.LineSegmentHintType.REFERENCE_EXTENSION:a.width=c.defaults.lineHintWidthReference;a.fadedExtensions={start:0,end:0};break;case q.LineSegmentHintType.REFERENCE:a.width=c.defaults.lineHintWidthReference,a.fadedExtensions={start:l?c.defaults.lineHintFadedExtensions:
0,end:g?c.defaults.lineHintFadedExtensions:0}}a.attached=!0;return a};return r}(F.SnappingVisualizer);t.SnappingVisualizer3D=u;Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});