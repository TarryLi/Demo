// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/promiseUtils ../../../../core/urlUtils ../../../../core/workers/workers ./GlyphMosaic ./GlyphSource ./SpriteMosaic ./decluttering/debugging ../../tiling/TileKey".split(" "),function(q,k,m,r,x,t,u,n,y,v){let z=function(){function p(b,a,d){this._layer=b;this._styleRepository=a;this.devicePixelRatio=d;this._connection=this._glyphMosaic=this._spriteMosaic=null}var f=p.prototype;f.destroy=function(){this._connection&&(this._connection.close(),
this._connection=null);this._layer=this._styleRepository=null;this._spriteMosaic&&(this._spriteMosaic=null);this._glyphMosaic&&(this._glyphMosaic=null)};f.start=function(){var b=k._asyncToGenerator(function*(a){this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,a);this._spriteSourcePromise.then(e=>{this._spriteMosaic=new n(1024,1024,250);this._spriteMosaic.setSpriteSource(e)});const d=new u(this._layer.currentStyleInfo.glyphsUrl?r.addQueryParameters(this._layer.currentStyleInfo.glyphsUrl,
{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new t(1024,1024,d);this._broadcastPromise=x.open("WorkerTileHandler",{client:this,schedule:a.schedule,signal:a.signal}).then(e=>{this._connection=e;this._connection.broadcast("setStyle",this._layer.currentStyleInfo.style,a)})});return function(a){return b.apply(this,arguments)}}();f.updateStyle=function(){var b=k._asyncToGenerator(function*(a){yield this._broadcastPromise;return this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",
a))});return function(a){return b.apply(this,arguments)}}();f.setSpriteSource=function(b){const a=new n(1024,1024,250);a.setSpriteSource(b);this._spriteMosaic=a;this._spriteSourcePromise=Promise.resolve(b);return a};f.setStyle=function(){var b=k._asyncToGenerator(function*(a,d){yield this._broadcastPromise;this._styleRepository=a;this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,null);this._spriteSourcePromise.then(e=>{this._spriteMosaic=new n(1024,1024,250);this._spriteMosaic.setSpriteSource(e)});
a=new u(this._layer.currentStyleInfo.glyphsUrl?r.addQueryParameters(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new t(1024,1024,a);return this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",d))});return function(a,d){return b.apply(this,arguments)}}();f.fetchTileData=function(b,a){return this._getRefKeys(b,a).then(d=>{const e=this._layer.sourceNameToSource,c=[];for(const h in e)c.push(h);return this._getSourcesData(c,
d,a)})};f.parseTileData=function(b,a){const d=b&&b.data;if(!d)return Promise.resolve(null);const {sourceName2DataAndRefKey:e,transferList:c}=d;return 0===Object.keys(e).length?Promise.resolve(null):this._broadcastPromise.then(()=>this._connection.invoke("createTileAndParse",{key:b.key.id,sourceName2DataAndRefKey:e,styleLayerUIDs:b.styleLayerUIDs},{...a,transferList:c}))};f.getSprites=function(){var b=k._asyncToGenerator(function*(a){yield this._spriteSourcePromise;return this._spriteMosaic.getSpriteItems(a)});
return function(a){return b.apply(this,arguments)}}();f.getGlyphs=function(b){return this._glyphMosaic.getGlyphItems(b.font,b.codePoints)};f.perfReport=function({key:b,milliseconds:a}){y.perfAdd(b,a,"ms")};f._getTilePayload=function(){var b=k._asyncToGenerator(function*(a,d,e){a=v.pool.acquire(a.id);const c=this._layer.sourceNameToSource[d],{level:h,row:l,col:g}=a;v.pool.release(a);try{return{protobuff:yield c.requestTile(h,l,g,e),sourceName:d}}catch(w){if(m.isAbortError(w))throw w;return{protobuff:null,
sourceName:d}}});return function(a,d,e){return b.apply(this,arguments)}}();f._getRefKeys=function(b,a){const d=this._layer.sourceNameToSource,e=[];for(const c in d){const h=d[c].getRefKey(b,a);e.push(h)}return m.eachAlways(e)};f._getSourcesData=function(b,a,d){const e=[];for(let c=0;c<a.length;c++)if(null==a[c].value||null==b[c])e.push(null);else{const h=this._getTilePayload(a[c].value,b[c],d);e.push(h)}return m.eachAlways(e).then(c=>{const h={},l=[];for(let g=0;g<c.length;g++)c[g].value&&c[g].value&&
c[g].value.protobuff&&0<c[g].value.protobuff.byteLength&&(h[c[g].value.sourceName]={refKey:a[g].value.id,protobuff:c[g].value.protobuff},l.push(c[g].value.protobuff));return{sourceName2DataAndRefKey:h,transferList:l}})};k._createClass(p,[{key:"spriteMosaic",get:function(){return this._spriteSourcePromise.then(()=>this._spriteMosaic)}},{key:"glyphMosaic",get:function(){return this._glyphMosaic}}]);return p}();q.TileHandler=z;Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});