// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Handles ../../../../core/handleUtils ../../../../core/maybe ../../../../core/promiseUtils ../../glTF/DefaultLoadingContext ../../glTF/loader ./wosrLoader".split(" "),function(n,u,v,w,p,k,x,y,z){let A=function(){function g(){this.gltfCache=new Map;this.wosrCache=new Map;this.evictHandles=new v}var h=g.prototype;h.loadGLTF=function(a,b,c){return this._fromCache(this.gltfCache,c?`gltfPBR:${a}`:`gltf:${a}`,d=>y.load(new x.DefaultLoadingContext(d.streamDataRequester),
a,d,c),b)};h.loadWOSR=function(a,b){return this._fromCache(this.wosrCache,`wosr:${a}:${b.disableTextures}`,c=>z.load(a,c),b)};h.destroy=function(){this.evictHandles.destroy();this.gltfCache.clear();this.wosrCache.clear()};h._fromCache=function(a,b,c,d){return new Promise((t,l)=>{if(k.isAborted(d))l(k.createAbortError());else{var m=k.onAbort(d,()=>{this._remove(a,b);l(k.createAbortError())}),e=a.get(b);if(e)this.evictHandles.remove(b),e.refCount++,e.item.then(t,l);else{e=new AbortController;var q=
{refCount:1,abortController:e,item:c({...d,signal:e.signal}).then(f=>{q.abortController=null;f.remove=()=>this._remove(a,b);return f})};a.set(b,q);q.item.then(f=>{p.isSome(m)&&m.remove();t(f)},f=>{p.isSome(m)&&m.remove();l(f)})}}})};h._remove=function(a,b){const c=a.get(b);c&&(c.refCount--,0===c.refCount&&this.evictHandles.add(w.timeoutHandle(()=>{a.delete(b);p.isSome(c.abortController)&&c.abortController.abort()},r),b))};u._createClass(g,[{key:"size",get:function(){return this.wosrCache.size+this.gltfCache.size}}]);
return g}(),r=1E4;n.ObjectResourceCache=A;n.test={overrideEvictDelay(g){r=g;return{remove(){r=1E4}}}};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});