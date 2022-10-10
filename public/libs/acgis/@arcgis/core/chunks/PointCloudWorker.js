/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as t}from"./maybe.js";import{n as r}from"../core/lang.js";import{c as o}from"./quat.js";import{b as e}from"./I3SBinaryReader.js";import{T as s}from"./mathUtils.js";import{f as i,c as a}from"./vec3f32.js";import{projectBuffer as p}from"../geometry/projection.js";import m from"../geometry/SpatialReference.js";import{r as n,g as l,e as u,f}from"./PointCloudWorkerUtil.js";import"./common.js";import"../core/Error.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"./VertexAttribute.js";import"../core/promiseUtils.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"./Ellipsoid.js";import"./tracking.js";import"./utils.js";import"./handleUtils.js";import"./SimpleObservable.js";import"../core/Accessor.js";import"./get.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./ensureType.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/property.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./mat4.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"./reader.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../renderers/PointCloudClassBreaksRenderer.js";import"./enumeration.js";import"../renderers/PointCloudRenderer.js";import"./PointSizeSplatAlgorithm.js";import"./LegendOptions.js";import"../Color.js";import"./colorUtils.js";import"../renderers/PointCloudStretchRenderer.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/PointCloudUniqueValueRenderer.js";class j{transform(o){const e=this._transform(o),s=[e.points.buffer,e.rgb.buffer];t(e.pointIdFilterMap)&&s.push(e.pointIdFilterMap.buffer);for(const t of e.attributes)"buffer"in t.values&&r(t.values.buffer)&&t.values.buffer!==e.rgb.buffer&&s.push(t.values.buffer);return Promise.resolve({result:e,transferList:s})}_transform(r){const o=n(r.schema,r.geometryBuffer);let e=o.length/3,s=null;const i=[],a=l(r.primaryAttributeData,o,e);t(r.primaryAttributeData)&&a&&i.push({attributeInfo:r.primaryAttributeData.attributeInfo,values:a});const p=l(r.modulationAttributeData,o,e);t(r.modulationAttributeData)&&p&&i.push({attributeInfo:r.modulationAttributeData.attributeInfo,values:p});let j=u(r.rendererInfo,a,p,e);if(r.filterInfo&&r.filterInfo.length>0&&t(r.filterAttributesData)){const t=r.filterAttributesData.map((t=>{const r=l(t,o,e),s={attributeInfo:t.attributeInfo,values:r};return i.push(s),s}));s=new Uint32Array(e),e=f(o,j,s,r.filterInfo,t)}for(const t of r.userAttributesData){const r=l(t,o,e);i.push({attributeInfo:t.attributeInfo,values:r})}3*e<j.length&&(j=new Uint8Array(j.buffer.slice(0,3*e))),this._applyElevationOffsetInPlace(o,e,r.elevationOffset);const c=this._transformCoordinates(o,e,r.obb,m.fromJSON(r.inSR),m.fromJSON(r.outSR));return{obb:r.obb,points:c,rgb:j,attributes:i,pointIdFilterMap:s}}_transformCoordinates(t,r,e,m,n){if(!p(t,m,0,t,n,0,r))throw Error("Can't reproject");const l=i(e.center[0],e.center[1],e.center[2]),u=a(),f=a();o(c,e.quaternion);const j=new Float32Array(3*r);for(let o=0;o<r;o++)u[0]=t[3*o]-l[0],u[1]=t[3*o+1]-l[1],u[2]=t[3*o+2]-l[2],s(f,u,c),e.halfSize[0]=Math.max(e.halfSize[0],Math.abs(f[0])),e.halfSize[1]=Math.max(e.halfSize[1],Math.abs(f[1])),e.halfSize[2]=Math.max(e.halfSize[2],Math.abs(f[2])),j[3*o]=u[0],j[3*o+1]=u[1],j[3*o+2]=u[2];return j}_applyElevationOffsetInPlace(t,r,o){if(0!==o)for(let e=0;e<r;e++)t[3*e+2]+=o}}const c=e();function b(){return new j}export{b as default};
