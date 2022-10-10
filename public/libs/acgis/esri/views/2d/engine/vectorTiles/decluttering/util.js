// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../enums","./core"],function(m,x,u,y,z){let v=function(g){this.tile=g;this.parent=null;this.children=new Set},w=function(){function g(){this.nodes=new Map;this.roots=new Set}var c=g.prototype;c.create=function(a){const b=new v(a);let e;const k=[];this.nodes.forEach(d=>{this._canConnectDirectly(b,d)&&k.push(d);!e&&this._canConnectDirectly(d,b)&&(e=d)});if(e){for(const d of k)e.children.delete(d),b.children.add(d),
d.parent=b;e.children.add(b);b.parent=e}else{this.roots.add(b);for(const d of k)b.children.add(d),d.parent=b,this.roots.delete(d)}this.nodes.set(a.key.id,b);return b};c.destroy=function(a){u.isSome(a.parent)?(a.parent.children.delete(a),a.children.forEach(b=>{u.isSome(a.parent)&&a.parent.children.add(b)})):this.roots.delete(a);a.children.forEach(b=>{(b.parent=a.parent)||this.roots.add(b)});this.nodes.delete(a.tile.key.id)};c.clear=function(){this.roots.clear();this.nodes.clear()};c._canConnectDirectly=
function(a,b){let {level:e,row:k,col:d}=b.tile.key;for({world:b}=b.tile.key;0<e;){e--;k>>=1;d>>=1;if(a.tile.key.level===e&&a.tile.key.row===k&&a.tile.key.col===d&&a.tile.key.world===b)return!0;if(this.nodes.has(`${e}/${k}/${d}/${b}`))break}return!1};return g}(),A=function(){function g(){this._tileGraph=new w;this._tileArray=null}var c=g.prototype;c.has=function(a){return"string"===typeof a?this._tileGraph.nodes.has(a):this._tileGraph.nodes.has(a.key.id)};c.getAll=function(){this._tileArray||(this._tileArray=
[],this._tileGraph.nodes.forEach(a=>{this._tileArray.push(a.tile)}));return this._tileArray};c.getRoots=function(){const a=[];this._tileGraph.roots.forEach(b=>{a.push(b.tile)});return a};c.getParent=function(a){a=this._tileGraph.nodes.get("string"===typeof a?a:a.key.id);return u.isSome(a.parent)&&a.parent.tile};c.getChildren=function(a){const b=[];this._tileGraph.nodes.get("string"===typeof a?a:a.key.id).children.forEach(e=>{b.push(e.tile)});return b};c.get=function(a){return this._tileGraph.nodes.get(a).tile};
c.removeKey=function(a){a=this._tileGraph.nodes.get(a);this._tileGraph.destroy(a);this._tileArray=null};c.forEach=function(a){this._tileGraph.nodes.forEach((b,e)=>a(b.tile,e))};c.add=function(a){this._tileGraph.create(a);this._tileArray=null};c.remove=function(a){a=this._tileGraph.nodes.get(a.key.id);this._tileGraph.destroy(a);this._tileArray=null};c.clear=function(){this._tileGraph.clear();this._tileArray=[]};return g}(),B=function(){function g(a,b,e){this._rows=Math.ceil(b/e);this._columns=Math.ceil(a/
e);this._cellSize=e;this.cells=Array(this._rows);for(a=0;a<this._rows;a++)for(this.cells[a]=Array(this._columns),b=0;b<this._columns;b++)this.cells[a][b]=[]}var c=g.prototype;c.getCell=function(a,b){b=Math.min(Math.max(Math.floor(b/this._cellSize),0),this._rows-1);a=Math.min(Math.max(Math.floor(a/this._cellSize),0),this._columns-1);return this.cells[b]&&this.cells[b][a]||null};c.getCellSpan=function(a,b,e,k){return[Math.min(Math.max(Math.floor(a/this._cellSize),0),this.columns-1),Math.min(Math.max(Math.floor(b/
this._cellSize),0),this.rows-1),Math.min(Math.max(Math.floor(e/this._cellSize),0),this.columns-1),Math.min(Math.max(Math.floor(k/this._cellSize),0),this.rows-1)]};x._createClass(g,[{key:"cellSize",get:function(){return this._cellSize}},{key:"columns",get:function(){return this._columns}},{key:"rows",get:function(){return this._rows}}]);return g}();m.GridIndex=B;m.TileForest=A;m.TileGraph=w;m.TileNode=v;m.deserializeSymbols=function(g,c,a,b,e,k){const d=c[b++];for(let t=0;t<d;t++){const l=new z.VTLSymbol(k);
l.xTile=c[b++];l.yTile=c[b++];l.hash=c[b++];l.priority=c[b++];var f=c[b++];for(var h=0;h<f;h++){const n=c[b++],p=c[b++],q=c[b++],r=c[b++],C=!!c[b++],D=c[b++],E=a[b++],F=a[b++],G=c[b++],H=c[b++];l.colliders.push({xTile:n,yTile:p,dxPixels:q,dyPixels:r,hard:C,partIndex:D,width:G,height:H,minLod:E,maxLod:F})}f=g[b++];for(h=0;h<f;h++)l.textVertexRanges.push([g[b++],g[b++]]);f=g[b++];for(h=0;h<f;h++)l.iconVertexRanges.push([g[b++],g[b++]]);e.push(l)}return b};m.tileCoordChange=function(g,c,a,b,e,k){a-=
e;if(0<=a)return(c>>a)+(b-(k<<a))*(g>>a);a=-a;return c-(k-(b<<a))*(g>>a)<<a};m.writeOpacityToBuffers=function(g,c,a){for(const [t,l]of g.symbols){{var b=g,e=c,k=a,d=l;const n=b.layerData.get(t);if(n.type===y.BucketType.SYMBOL){for(const p of d){d=p.unique;var f=void 0;if(p.selectedForRendering){var h=d.parts[0];f=h.startOpacity;h=h.targetOpacity;b.allSymbolsFadingOut=b.allSymbolsFadingOut&&0===h;f=k?Math.floor(127*f)|h<<7:h?255:0;f|=f<<24|f<<16|f<<8}else f=0;for(const [q,r]of p.iconVertexRanges)for(h=
q;h<q+r;h+=4)n.iconOpacity[h/4]=f;p.selectedForRendering?(f=d.parts[1],d=f.startOpacity,f=f.targetOpacity,b.allSymbolsFadingOut=b.allSymbolsFadingOut&&0===f,d=k?Math.floor(127*d)|f<<7:f?255:0,f=d<<24|d<<16|d<<8|d):f=0;for(const [q,r]of p.textVertexRanges)for(d=q;d<q+r;d+=4)n.textOpacity[d/4]=f}n.lastOpacityUpdate=e;n.opacityChanged=!0}}}};Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});