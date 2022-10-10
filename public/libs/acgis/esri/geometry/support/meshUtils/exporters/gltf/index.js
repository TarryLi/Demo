// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/promiseUtils ../../../../Point ./glb ./gltf ./types ./imageutils ./asset ./scene ./node".split(" "),function(a,u,m,v,w,b,n,x,y,z){function p(g,c,d){c=c||{};g=new w.GLTF(g,c,d);d=g.params;d?d.origin||(d.origin=new m({x:-1,y:-1,z:-1})):d={origin:new m({x:-1,y:-1,z:-1})};const A=d.origin,k=g.gltf;let q=1,r=1,l=null;return u.eachAlways(k.extras.promises).then(()=>{const h={origin:A};delete k.extras;const t=JSON.stringify(k,(e,f)=>{if("extras"!==e){if(f instanceof ArrayBuffer){if(n.isArrayBufferPNG(f))switch(c.imageOutputType){case b.ImageOutputType.DataURI:case b.ImageOutputType.GLB:break;
default:return e=`img${r}.png`,r++,h[e]=f,e}switch(c.bufferOutputType){case b.BufferOutputType.DataURI:return n.encodeBase64DataUri(f);case b.BufferOutputType.GLB:if(l)throw Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");l=f;return;default:return e=`data${q}.bin`,q++,h[e]=f,e}}return f}},"number"===typeof c.jsonSpacing?c.jsonSpacing:4);c.bufferOutputType===b.BufferOutputType.GLB||c.imageOutputType===b.ImageOutputType.GLB?h["model.glb"]=(new v.GLB(t,l)).buffer:
h["model.gltf"]=t;return h})}Object.defineProperty(a,"AlphaMode",{enumerable:!0,get:()=>b.AlphaMode});Object.defineProperty(a,"AttributeType",{enumerable:!0,get:()=>b.AttributeType});Object.defineProperty(a,"BufferOutputType",{enumerable:!0,get:()=>b.BufferOutputType});Object.defineProperty(a,"ColorMode",{enumerable:!0,get:()=>b.ColorMode});Object.defineProperty(a,"ImageOutputType",{enumerable:!0,get:()=>b.ImageOutputType});Object.defineProperty(a,"MeshMode",{enumerable:!0,get:()=>b.MeshMode});a.Asset=
x.Asset;a.Scene=y.Scene;a.Node=z.Node;a.MODEL_NAME_GLB="model.glb";a.MODEL_NAME_GLTF="model.gltf";a.exportGLB=function(g,c){return p(g,{bufferOutputType:b.BufferOutputType.GLB,imageOutputType:b.ImageOutputType.GLB,jsonSpacing:0},c)};a.exportGLTF=p;Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});