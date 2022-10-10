// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../geometry/support/buffer/BufferView","./InterleavedLayout"],function(e,a,l){function f(b){const c=[];b.fields.forEach((d,m)=>{var g=d.constructor;c.push([m,{...d,constructor:`${g.ElementType}_${g.ElementCount}`}])});return{stride:b.stride,fields:c,fieldNames:b.fieldNames}}function h(b){const c=l.newLayout();c.stride=b.stride;c.fieldNames=b.fieldNames;b.fields.forEach(d=>c.fields.set(d[0],{...d[1],constructor:k.get(d[1].constructor)}));return c}a=[a.BufferViewFloat,a.BufferViewVec2f,
a.BufferViewVec3f,a.BufferViewVec4f,a.BufferViewMat3f,a.BufferViewMat4f,a.BufferViewFloat64,a.BufferViewVec2f64,a.BufferViewVec3f64,a.BufferViewVec4f64,a.BufferViewMat3f64,a.BufferViewMat4f64,a.BufferViewUint8,a.BufferViewVec2u8,a.BufferViewVec3u8,a.BufferViewVec4u8,a.BufferViewUint16,a.BufferViewVec2u16,a.BufferViewVec3u16,a.BufferViewVec4u16,a.BufferViewUint32,a.BufferViewVec2u32,a.BufferViewVec3u32,a.BufferViewVec4u32,a.BufferViewInt8,a.BufferViewVec2i8,a.BufferViewVec3i8,a.BufferViewVec4i8,a.BufferViewInt16,
a.BufferViewVec2i16,a.BufferViewVec3i16,a.BufferViewVec4i16,a.BufferViewInt32,a.BufferViewVec2i32,a.BufferViewVec3i32,a.BufferViewVec4i32];const k=new Map;a.forEach(b=>k.set(`${b.ElementType}_${b.ElementCount}`,b));e.packInterleavedBuffer=function(b,c){c.push(b.buffer);return{buffer:b.buffer,layout:f(b.layout)}};e.packLayout=f;e.unpackInterleavedBuffer=function(b){return h(b.layout).createView(b.buffer)};e.unpackLayout=h;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});