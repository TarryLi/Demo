// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/vec4f64 ../../../geometry/support/aaBoundingBox ../../../geometry/support/buffer/BufferPool ../support/buffer/InterleavedLayout ./TerrainConst ./terrainUtils ../webgl-engine/lib/VertexAttribute".split(" "),function(h,p,q,r,t,g,u,l){let y=function(){function c(a,b,d,e,k){this._buf=a;this._localOrigin=b;this.offset0=d;this.stride=e;this.count=k}var f=c.prototype;f.getVertexOffset=function(a){u.internalAssert(0<=a&&a<this.count);return this.offset0+this.stride*a};f.getVertex=
function(a,b){b=this.getVertexOffset(b)*g.GEOMETRY_VERTEX_STRIDE;a[0]=this._buf[b+0]+this._localOrigin[0];a[1]=this._buf[b+1]+this._localOrigin[1];a[2]=this._buf[b+2]+this._localOrigin[2]};f.getVertexZ=function(a){a=this.getVertexOffset(a)*g.GEOMETRY_VERTEX_STRIDE;return this._buf[a+2]+this._localOrigin[2]};f.setVertex=function(a,b,d,e){a=this.getVertexOffset(a)*g.GEOMETRY_VERTEX_STRIDE;this._buf[a+0]=b[0]-this._localOrigin[0];this._buf[a+1]=b[1]-this._localOrigin[1];this._buf[a+2]=b[2]-this._localOrigin[2];
this._buf[a+3]=d;this._buf[a+4]=e};f.getNormal=function(a,b){b=this.getVertexOffset(b)*g.GEOMETRY_VERTEX_STRIDE;a[0]=this._buf[b+5];a[1]=this._buf[b+6];a[2]=this._buf[b+7]};f.setVertexRawXYZUV=function(a,b,d,e,k,m){a=this.getVertexOffset(a)*g.GEOMETRY_VERTEX_STRIDE;this._buf[a+0]=b;this._buf[a+1]=d;this._buf[a+2]=e;this._buf[a+3]=k;this._buf[a+4]=m};f.setVertexRawXYZUVN=function(a,b,d,e,k,m,v,w,x){a=this.getVertexOffset(a)*g.GEOMETRY_VERTEX_STRIDE;this._buf[a+0]=b;this._buf[a+1]=d;this._buf[a+2]=
e;this._buf[a+3]=k;this._buf[a+4]=m;this._buf[a+5]=v;this._buf[a+6]=w;this._buf[a+7]=x};f.setVertexRawNormal=function(a,b,d,e){a=this.getVertexOffset(a)*g.GEOMETRY_VERTEX_STRIDE;this._buf[a+5]=b;this._buf[a+6]=d;this._buf[a+7]=e};f.getVertexRawNormal=function(a,b){b=this.getVertexOffset(b)*g.GEOMETRY_VERTEX_STRIDE;a[0]=this._buf[b+5];a[1]=this._buf[b+6];a[2]=this._buf[b+7]};return c}();const z=t.newLayout().vec3f(l.VertexAttribute.POSITION).vec2f(l.VertexAttribute.UV0).vec3f(l.VertexAttribute.NORMAL),
n=new r.BufferPool(c=>z.createBuffer(c),c=>c.count);h.EdgeDescriptor=y;h.PatchGeometry=function(){this.vertexAttributes=this.indices=null;this.boundingBox=q.empty();this.numVerticesPerSide=this.indexCount=0;this.uvOffsetAndScale=p.create();this.outerEdges=[null,null,null,null];this.innerEdges=[null,null,null,null]};h.acquireTerrainAttributes=function(c){return n.acquire(c)};h.clearCaches=function(){n.clear()};h.releaseGeometry=function(c){n.release(c.vertexAttributes);c.vertexAttributes=null;c.indices=
null};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});