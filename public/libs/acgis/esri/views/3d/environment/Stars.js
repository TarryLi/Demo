// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../assets ../../../core/Accessor ../../../core/Error ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/mat4 ../../../chunks/mat4f64 ../../../core/support/WatchUpdatingTracking ./StarsTechnique ../support/buffer/glUtil ../support/buffer/InterleavedLayout ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/VertexAttribute ../../webgl/BufferObject ../../webgl/enums ../../webgl/VertexArrayObject".split(" "),
function(g,v,l,F,G,y,H,h,z,I,n,V,W,X,J,q,A,K,B,L,M,N,w,O,C,P){const Q=H.getLogger("esri.views.3d.environment.Stars");g.Stars=function(D){function r(a){a=D.call(this,a)||this;a._loadDataTask=null;a._numPoints=0;a._renderParameter=new B.StarPassParameters;a._updatingTracking=new K.WatchUpdatingTracking;return a}v._inheritsLoose(r,D);var f=r.prototype;f.initialize=function(){this._loadDataTask=this._createLoadDataTask()};f.destroy=function(){this._loadDataTask=h.abortMaybe(this._loadDataTask);this._updatingTracking.destroy();
this._numPoints=0;this._technique=h.releaseMaybe(this._technique);this._vao=h.disposeMaybe(this._vao)};f.render=function(a){const {rctx:b}=a;this._ensureResources(b);h.isNone(this._technique)||h.isNone(this._vao)||(this._technique.compiled?(a=b.bindTechnique(this._technique,this._renderParameter,a.bindParameters),b.bindVAO(this._vao),a.assertCompatibleVertexAttributeLocations(this._vao),b.drawArrays(C.PrimitiveType.POINTS,0,this._numPoints)):this.requestRender())};f._ensureResources=function(a){if(!h.isSome(this._technique)&&
!h.isNone(m)){this._technique=new B.StarsTechnique({rctx:a,viewingMode:this.view.state.viewingMode});this._numPoints=m.byteLength/9;var b=new Float32Array(m,0,2*this._numPoints),c=new Uint8Array(m,8*this._numPoints,this._numPoints);this._vao=this._createVertexArrayObject(a,b,c,this._numPoints);this._updatingTracking.add(()=>"sun"===this.view.environment.lighting.type?this.view.environment.lighting.date:null,e=>this._update(e),I.initial)}};f._computeDayDuration=function(a){const b=new Date(a.getFullYear(),
0,1,11,58,56),c=new Date(a.getFullYear()+1,0,1,11,58,55);return(+a-+b)/(+c-+b)};f._update=function(a){if(a){var b=a.getHours()/12,c=a.getMinutes()/60*(2/24),e=a.getSeconds()/60*(2/1440);b=(b+c+e-.9972222)%2;a=2*this._computeDayDuration(a);c=q.copy(this._renderParameter.modelMatrix,R);q.rotateZ(c,c,-a*Math.PI);q.multiply(c,S,c);q.rotateZ(c,c,-b*Math.PI);this.requestRender()}};f._hexToRGB=function(a){return[parseInt(a.substring(0,2),16),parseInt(a.substring(2,4),16),parseInt(a.substring(4,6),16)]};
f._unpackUint8Attributes=function(a){return 192<=a?[2.9,a-192]:160<=a?[2.5,a-160]:128<=a?[2,a-128]:96<=a?[1.5,a-96]:64<=a?[1,a-64]:32<=a?[.7,a-32]:[.4,a]};f._createVertexArrayObject=function(a,b,c,e){const t=E.createBuffer(e),x=t.position,u=t.color,T=t.size;for(let d=0;d<e;d++){var p=b[2*d],k=b[2*d+1];x.set(d,0,-Math.cos(p)*Math.sin(k));x.set(d,1,-Math.sin(p)*Math.sin(k));x.set(d,2,-Math.cos(k));p=this._unpackUint8Attributes(c[d]);k=this._hexToRGB(U[p[1]]);u.set(d,0,255*k[0]);u.set(d,1,255*k[1]);
u.set(d,2,255*k[2]);u.set(d,3,255);T.set(d,p[0])}return new P.VertexArrayObject(a,N.Default3D,{geometry:L.glLayout(E)},{geometry:O.BufferObject.createVertex(a,C.Usage.STATIC_DRAW,t.buffer)})};f._createLoadDataTask=function(){var a=this;if(h.isSome(m))return null;const b=z.createTask(function(){var c=v._asyncToGenerator(function*(e){({data:e}=yield F.fetchAsset("esri/views/3d/environment/resources/stars.wsv",{responseType:"array-buffer",signal:e}));a._verifyStarData(e);m=e});return function(e){return c.apply(this,
arguments)}}());b.promise.catch(c=>{z.isAbortError(c)||Q.error(c)}).then(()=>{this.destroyed||(this.requestRender(),this.notifyChange("updating"))});return b};f._verifyStarData=function(a){if(!a)throw new y("stars:no-data-received","Failed to create stars because star catalogue is missing");a=a.byteLength/9;if(0!==a%1||5E4<a||5E3>a)throw new y("stars:invalid-data","Failed to create stars because star catalogue data is invalid");};v._createClass(r,[{key:"updating",get:function(){return this._updatingTracking.updating||
this.loading}},{key:"loading",get:function(){return h.isSome(this._loadDataTask)&&!this._loadDataTask.finished}}]);return r}(G);l.__decorate([n.property({constructOnly:!0})],g.Stars.prototype,"view",void 0);l.__decorate([n.property({constructOnly:!0})],g.Stars.prototype,"requestRender",void 0);l.__decorate([n.property({readOnly:!0})],g.Stars.prototype,"updating",null);l.__decorate([n.property()],g.Stars.prototype,"_loadDataTask",void 0);l.__decorate([n.property()],g.Stars.prototype,"_updatingTracking",
void 0);g.Stars=l.__decorate([J.subclass("esri.views.3d.environment.Stars")],g.Stars);const U="9bb2ff;9eb5ff;aabfff;bbccff;ccd8ff ;dae2ff;e4e9ff;eeefff;f8f6ff;fff9fb;fff5ef;fff1e5;ffeddb;ffe9d2;ffe6ca;ffe3c3;ffe0bb;ffddb4;ffdaad;ffd6a5;ffd29c;ffcc8f;ffc178;ffa94b;ff7b00".split(";"),S=A.fromValues(1,0,0,0,0,.9174771405229186,.39778850739794974,0,0,-.39778850739794974,.9174771405229186,0,0,0,0,1),R=A.fromValues(1,0,0,0,0,.9174771405229186,-.39778850739794974,0,0,.39778850739794974,.9174771405229186,
0,0,0,0,1),E=M.newLayout().vec3f(w.VertexAttribute.POSITION).vec4u8(w.VertexAttribute.COLOR).f32(w.VertexAttribute.SIZE);let m=null;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});