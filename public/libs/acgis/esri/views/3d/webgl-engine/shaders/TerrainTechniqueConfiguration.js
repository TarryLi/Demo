// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../core/shaderLibrary/ShaderOutputOptions ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderLibrary/terrain/Overlay.glsl ../core/shaderLibrary/terrain/TileBlendInput ../core/shaderTechnique/ShaderTechniqueConfiguration ../materials/DefaultTechniqueConfiguration".split(" "),function(e,m,b,n,f,p,g,h,c,a){a=function(k){function l(){var d=k.apply(this,arguments)||
this;d.output=f.ShaderOutput.Color;d.overlayMode=g.OverlayMode.Disabled;d.tileBlendInput=h.TileBlendInput.LayerOnly;d.spherical=!1;d.atmosphere=!1;d.receiveShadows=!1;d.hasSlicePlane=!1;d.backfaceCullingEnabled=!1;d.stencilEnabled=!1;d.textureFadingEnabled=!1;d.renderOccluded=!1;d.hasScreenSpaceReflections=!1;d.hasCloudsReflections=!1;d.tileBorders=!1;d.screenSizePerspective=!1;d.receiveAmbientOcclusion=!1;d.shading=n("enable-feature:terrain-shading");return d}m._inheritsLoose(l,k);return l}(a.DefaultTechniqueConfiguration);
b.__decorate([c.parameter({count:f.ShaderOutput.COUNT})],a.prototype,"output",void 0);b.__decorate([c.parameter({count:g.OverlayMode.COUNT})],a.prototype,"overlayMode",void 0);b.__decorate([c.parameter({count:h.TileBlendInput.COUNT})],a.prototype,"tileBlendInput",void 0);b.__decorate([c.parameter()],a.prototype,"spherical",void 0);b.__decorate([c.parameter()],a.prototype,"atmosphere",void 0);b.__decorate([c.parameter()],a.prototype,"receiveShadows",void 0);b.__decorate([c.parameter()],a.prototype,
"hasSlicePlane",void 0);b.__decorate([c.parameter()],a.prototype,"backfaceCullingEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"stencilEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"textureFadingEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"renderOccluded",void 0);b.__decorate([c.parameter()],a.prototype,"hasScreenSpaceReflections",void 0);b.__decorate([c.parameter()],a.prototype,"hasCloudsReflections",void 0);b.__decorate([c.parameter()],a.prototype,"tileBorders",
void 0);b.__decorate([c.parameter()],a.prototype,"screenSizePerspective",void 0);b.__decorate([c.parameter()],a.prototype,"receiveAmbientOcclusion",void 0);b.__decorate([c.parameter()],a.prototype,"shading",void 0);b.__decorate([c.parameter({constValue:!0})],a.prototype,"isGround",void 0);b.__decorate([c.parameter({constValue:p.PBRMode.Disabled})],a.prototype,"pbrMode",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"highStepCount",void 0);b.__decorate([c.parameter({constValue:!1})],
a.prototype,"useCustomDTRExponentForWater",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"useFillLights",void 0);e.TerrainTechniqueConfiguration=a;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});