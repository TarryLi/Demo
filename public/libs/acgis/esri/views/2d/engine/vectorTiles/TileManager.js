// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/LRUCache","../../../../core/maybe","../../tiling/TileCoverage","../../tiling/TileKey"],function(v,x,m,y,t){const z=(n,g)=>n+1/(1<<2*g);let B=function(){function n(a,b){this._tiles=new Map;this._tileCache=new x(40,c=>c.dispose());this._viewSize=[0,0];this._visibleTiles=new Map;this.acquireTile=a.acquireTile;this.releaseTile=a.releaseTile;this.tileInfoView=a.tileInfoView;this._container=b}var g=n.prototype;g.destroy=function(){for(const [,a]of this._tiles)a.dispose();
this._tiles=null;this._tileCache.clear();this._tileCache=null};g.update=function(a){this._updateCacheSize(a);const b=this.tileInfoView;a=b.getTileCoverage(a.state,0,"smallest");const {spans:c,lodInfo:e}=a,{level:f}=e,d=this._tiles,l=new Set,p=new Set;for(const {row:h,colFrom:k,colTo:A}of c)for(let q=k;q<=A;q++){const u=t.getId(f,h,e.normalizeCol(q),e.getWorldForColumn(q)),w=this._getOrAcquireTile(u);l.add(u);w.processed()?this._addToContainer(w):p.add(new t(u))}for(const [h,k]of d)k.isCoverage=l.has(h);
for(var r of p)this._findPlaceholdersForMissingTiles(r,l);r=!1;for(const [h,k]of d)k.neededForCoverage=l.has(h),k.neededForCoverage||k.isHoldingForFade&&b.intersects(a,k.key)&&l.add(h),k.isFading&&(r=!0);for(const [h]of this._tiles)l.has(h)||this._releaseTile(h);y.pool.release(a);return!r};g.clear=function(){this._tiles.clear();this._tileCache.clear();this._visibleTiles.clear()};g.clearCache=function(){this._tileCache.clear()};g._findPlaceholdersForMissingTiles=function(a,b){var c=[];for(const [,
e]of this._tiles)this._addPlaceholderChild(c,e,a,b);c=c.reduce(z,0);1E-6>Math.abs(1-c)||this._addPlaceholderParent(a.id,b)};g._addPlaceholderChild=function(a,b,c,e){if(!(b.key.level<=c.level)&&b.hasData()){{var f=b.key;const d=f.level-c.level;f=c.row===f.row>>d&&c.col===f.col>>d&&c.world===f.world}f&&(this._addToContainer(b),e.add(b.id),a.push(b.key.level-c.level))}};g._addPlaceholderParent=function(a,b){const c=this._tiles;for(;;){{const [f,d,l,p]=a.split("/");a=parseInt(f,10);a=0===a?null:`${a-
1}/${parseInt(d,10)>>1}/${parseInt(l,10)>>1}/${parseInt(p,10)}`}if(!a||b.has(a))break;const e=c.get(a);if(e&&e.hasData()){this._addToContainer(e);b.add(e.id);break}}};g._getOrAcquireTile=function(a){let b=this._tiles.get(a);if(b)return b;(b=this._tileCache.pop(a))||(b=this.acquireTile(new t(a)));this._tiles.set(a,b);return b};g._releaseTile=function(a){const b=this._tiles.get(a);this.releaseTile(b);this._removeFromContainer(b);this._tiles.delete(a);b.hasData()?this._tileCache.put(a,b,1):b.dispose()};
g._addToContainer=function(a){let b;const c=[],e=this._container;if(!e.contains(a)){var f=this._visibleTiles;for(const [,d]of f)this._canConnectDirectly(a,d)&&c.push(d),m.isNone(b)&&this._canConnectDirectly(d,a)&&(b=d);if(m.isSome(b)){for(const d of c)b.childrenTiles.delete(d),a.childrenTiles.add(d),d.parentTile=a;b.childrenTiles.add(a);a.parentTile=b}else for(const d of c)a.childrenTiles.add(d),d.parentTile=a;f.set(a.id,a);e.addChild(a)}};g._removeFromContainer=function(a){this._visibleTiles.delete(a.id);
this._container.removeChild(a);if(m.isSome(a.parentTile)){a.parentTile.childrenTiles.delete(a);for(const b of a.childrenTiles)m.isSome(a.parentTile)&&a.parentTile.childrenTiles.add(b)}for(const b of a.childrenTiles)b.parentTile=a.parentTile;a.parentTile=null;a.childrenTiles.clear()};g._canConnectDirectly=function(a,b){a=a.key;let {level:c,row:e,col:f,world:d}=b.key;for(b=this._visibleTiles;0<c;){c--;e>>=1;f>>=1;if(a.level===c&&a.row===e&&a.col===f&&a.world===d)return!0;if(b.has(`${c}/${e}/${f}/${d}`))break}return!1};
g._updateCacheSize=function(a){a=a.state.size;if(a[0]!==this._viewSize[0]||a[1]!==this._viewSize[1]){var b=Math.ceil(a[0]/512)+1,c=Math.ceil(a[1]/512)+1;this._viewSize[0]=a[0];this._viewSize[1]=a[1];this._tileCache.maxSize=5*b*c}};return n}();v.TileManager=B;Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});