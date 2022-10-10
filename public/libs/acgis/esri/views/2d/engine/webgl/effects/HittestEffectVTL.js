// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../definitions ./Effect ../../../../webgl/enums".split(" "),function(r,x,y,z,n,t){n=function(u){function p(){var a=u.apply(this,arguments)||this;a.name=a.constructor.name;a.defines=["id"];a._lastSize=0;return a}x._inheritsLoose(p,u);var g=p.prototype;g.dispose=function(){y.isSome(this._fbo)&&this._fbo.dispose()};g.bind=function({context:a,painter:h}){const {width:e,height:k}=a.getViewport();this._boundFBO=a.getBoundFramebufferObject();
h=h.getFbos(e,k).effect0;a.bindFramebuffer(h);a.setColorMask(!0,!0,!0,!0);a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT)};g.unbind=function({context:a}){a.bindFramebuffer(this._boundFBO);this._boundFBO=null};g.draw=function({context:a,state:h,pixelRatio:e},k,A=2*z.HITTEST_RADIUS){const B=a.getBoundFramebufferObject(),C=h.size[1]*e,b=Math.round(A*e),v=b/2,w=b/2;this._ensureBuffer(b);k.forEach((D,q)=>{var f=new Map;B.readPixels(Math.floor(q.x*e-b/2),Math.floor(C-q.y*e-b/2),b,b,t.PixelFormat.RGBA,
t.PixelType.UNSIGNED_BYTE,this._buf);for(let c=0;c<this._buf32.length;c++){const d=this._buf32[c];if(4294967295!==d&&0!==d){var l=c%b,m=b-Math.floor(c/b);l=(v-l)*(v-l)+(w-m)*(w-m);m=f.has(d)?f.get(d):4294967295;f.set(d,Math.min(l,m))}}f=Array.from(f).sort((c,d)=>c[1]-d[1]).map(c=>c[0]);D.resolve(f);k.delete(q)})};g._ensureBuffer=function(a){this._lastSize!==a&&(this._lastSize=a,this._buf=new Uint8Array(4*a*a),this._buf32=new Uint32Array(this._buf.buffer))};return p}(n.Effect);r.HittestEffectVTL=n;
Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});