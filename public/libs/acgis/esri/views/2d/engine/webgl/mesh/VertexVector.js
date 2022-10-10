// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../Utils","./VertexBuffer","../util/Writer"],function(h,m,n,p,k){let l=function(){function f(b,a){this.data=b;this.stride=a}f.prototype.transfer=function(b,a){const c=this.data.buffer();b.vertexCount=this.vertexCount;b.data=c;b.stride=this.stride;a.push(c)};m._createClass(f,[{key:"vertexCount",get:function(){const b=this.data.length/(this.stride/4);b!==(b|0)&&console.debug("Corrupted stride");return b}}]);return f}(),r=function(){function f(a,
c,d){this.geometryType=a;this.indexVector=new k(Uint32Array,6*c);this.namedVectors={};a=n.getStrides(a,d);for(const g in a){d=a[g];let e;switch(d%4){case 0:case 2:e=new k(Uint32Array,d*c);break;case 1:case 3:e=new k(Uint8Array,d*c)}this.namedVectors[g]=new l(e,d)}}var b=f.prototype;b.get=function(a){return this.namedVectors[a].data};b.getVector=function(a){return this.namedVectors[a]};b.transfer=function(a,c){const d=this.indexVector.buffer(),g={};c.push(d);for(const e in this.namedVectors){const q=
this.namedVectors[e];g[e]={};q.transfer(g[e],c)}a.geometryType=this.geometryType;a.indexBuffer=d;a.namedBuffers=g;this.destroy()};b.intoBuffers=function(){const a=p.VertexBuffers.fromVertexVectors(this);this.destroy();return a};b.destroy=function(){this.namedVectors=this.indexVector=null};return f}();h.VertexVector=l;h.VertexVectors=r;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});