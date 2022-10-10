// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/BidiEngine ../../../../../core/string ../enums ../GeometryUtils ../Placement ../TextShaping ./BaseBucket ../style/StyleDefinition ../style/StyleLayer ../../webgl/Geometry".split(" "),function(M,Q,N,R,C,G,K,L,z,O,E){function S(H,y){return H.iconMosaicItem&&y.iconMosaicItem?H.iconMosaicItem.page===y.iconMosaicItem.page?0:H.iconMosaicItem.page-y.iconMosaicItem.page:H.iconMosaicItem&&!y.iconMosaicItem?1:!H.iconMosaicItem&&y.iconMosaicItem?
-1:0}L=function(H){function y(b,a,e,c,n,d,f,l){b=H.call(this,b,a,l.getSpriteItems())||this;b.type=R.BucketType.SYMBOL;b._markerMap=new Map;b._glyphMap=new Map;b._glyphBufferDataStorage=new Map;b._isIconSDF=!1;b._iconVertexBuffer=e;b._iconIndexBuffer=c;b._textVertexBuffer=n;b._textIndexBuffer=d;b._placementEngine=f;b._workerTileHandler=l;return b}M._inheritsLoose(y,H);var I=y.prototype;I.getResources=function(b,a,e){const c=this.layer,n=this.zoom;b&&b.setExtent(this.layerExtent);const d=c.getLayoutProperty("icon-image"),
f=c.getLayoutProperty("text-field");let l=c.getLayoutProperty("text-transform"),k=c.getLayoutProperty("text-font");const u=[];let g;d&&!d.isDataDriven&&(g=d.getValue(n));let t;f&&!f.isDataDriven&&(t=f.getValue(n));let p;l&&l.isDataDriven||(p=c.getLayoutValue("text-transform",n),l=null);let q;k&&k.isDataDriven||(q=c.getLayoutValue("text-font",n),k=null);for(const h of this._features){var r=h.getGeometry(b);if(!r||0===r.length)continue;let x;d&&(x=d.isDataDriven?d.getValue(n,h):this._replaceKeys(g,
h.values))&&a(x);let w;var m=!1;if(f&&(w=f.isDataDriven?f.getValue(n,h):this._replaceKeys(t,h.values))){w=w.replace(/\\n/g,"\n");l&&(p=l.getValue(n,h));switch(p){case z.TextTransform.LOWERCASE:w=w.toLowerCase();break;case z.TextTransform.UPPERCASE:w=w.toUpperCase()}y._bidiEngine.hasBidiChar(w)&&(m="rtl"===y._bidiEngine.checkContextual(w)?"IDNNN":"ICNNN",w=y._bidiEngine.bidiTransform(w,m,"VLYSN"),m=!0);var v=w.length;if(0<v){k&&(q=k.getValue(n,h));for(const A of q){let B=e[A];B||(B=e[A]=new Set);for(let D=
0;D<v;D++){const F=w.charCodeAt(D);B.add(F)}}}}if(x||w)v=c.getLayoutValue("symbol-sort-key",n,h),r={feature:h,sprite:x,label:w,rtl:m,geometry:r,hash:(w?N.numericHash(w):0)^(x?N.numericHash(x):0),priority:v,textFont:q},u.push(r)}this._symbolFeatures=u};I.processFeatures=function(b){b&&b.setExtent(this.layerExtent);var a=this.layer;b=this.zoom;const e=a.getLayoutValue("symbol-placement",b),c=e!==z.SymbolPlacement.POINT,n=a.getLayoutValue("symbol-spacing",b)*G.TILE_PIXEL_RATIO;var d=a.getLayoutProperty("icon-image"),
f=a.getLayoutProperty("text-field");const l=d?new O.IconLayout(a,b,c):null;a=f?new O.TextLayout(a,b,c):null;const k=this._workerTileHandler;let u;d&&(u=k.getSpriteItems());this._iconIndexStart=3*this._iconIndexBuffer.index;this._textIndexStart=3*this._textIndexBuffer.index;this._textIndexCount=this._iconIndexCount=0;this._markerMap.clear();this._glyphMap.clear();d=[];f=1;a&&a.size&&(f=a.size/K.SDF_GLYPH_SIZE);const g=a?a.maxAngle*C.C_DEG_TO_RAD:0,t=a?a.size*G.TILE_PIXEL_RATIO:0;for(const m of this._symbolFeatures){let v;
l&&u&&m.sprite&&(v=u[m.sprite])&&v.sdf&&(this._isIconSDF=!0);v&&l.update(b,m.feature);var p=void 0,q=0,r=m.label;if(r){a.update(b,m.feature);p=c?a.keepUpright:a.writingMode&&a.writingMode.includes(z.TextWritingMode.VERTICAL);let h=.5;switch(a.anchor){case z.SymbolAnchor.TOP_LEFT:case z.SymbolAnchor.LEFT:case z.SymbolAnchor.BOTTOM_LEFT:h=0;break;case z.SymbolAnchor.TOP_RIGHT:case z.SymbolAnchor.RIGHT:case z.SymbolAnchor.BOTTOM_RIGHT:h=1}let x=.5;switch(a.anchor){case z.SymbolAnchor.TOP_LEFT:case z.SymbolAnchor.TOP:case z.SymbolAnchor.TOP_RIGHT:x=
0;break;case z.SymbolAnchor.BOTTOM_LEFT:case z.SymbolAnchor.BOTTOM:case z.SymbolAnchor.BOTTOM_RIGHT:x=1}let w=.5;switch(a.justify){case z.TextJustification.AUTO:w=h;break;case z.TextJustification.LEFT:w=0;break;case z.TextJustification.RIGHT:w=1}const A=a.letterSpacing*K.SDF_GLYPH_SIZE,B=c?0:a.maxWidth*K.SDF_GLYPH_SIZE,D=a.lineHeight*K.SDF_GLYPH_SIZE,F=m.textFont.map(J=>k.getGlyphItems(J));if((p=(new K.TextShaping(F,B,D,A,h,x,w)).getShaping(r,m.rtl,p))&&0<p.length){q=1E30;r=-1E30;for(const J of p)q=
Math.min(q,J.x),r=Math.max(r,J.x);q=(r-q+2*K.SDF_GLYPH_SIZE)*f*G.TILE_PIXEL_RATIO}}for(let h of m.geometry){r=[];e===z.SymbolPlacement.LINE?(p&&0<p.length&&a&&a.size&&(h=y._smoothVertices(h,a.size*G.TILE_PIXEL_RATIO*(2+Math.min(2,4*Math.abs(a.offset[1]))))),y._pushAnchors(r,h,n,q)):e===z.SymbolPlacement.LINE_CENTER?y._pushCenterAnchor(r,h):m.feature.type===E.GeometryType.Polygon?y._pushCentroid(r,h):r.push(new G.Anchor(h[0].x,h[0].y));for(const x of r)0>x.x||x.x>G.TILE_COORD_SIZE||0>x.y||x.y>G.TILE_COORD_SIZE||
c&&0<q&&a.rotationAlignment===z.RotationAlignment.MAP&&!y._honorsTextMaxAngle(h,x,q,g,t)||(r={shaping:p,line:h,iconMosaicItem:v,anchor:x,symbolFeature:m,textColliders:[],iconColliders:[],textVertexRanges:[],iconVertexRanges:[]},d.push(r),this._processFeature(r,l,a))}}d.sort(S);this._addPlacedGlyphs();this._symbolInstances=d};I.serialize=function(){var b=11+this.layerUIDs.length;b+=3*this.markerPageMap.size;b+=3*this.glyphsPageMap.size;b+=y._symbolsSerializationLength(this._symbolInstances);b+=this._iconVertexBuffer.array.length;
b+=this._iconIndexBuffer.array.length;b+=this._textVertexBuffer.array.length;b+=this._textIndexBuffer.array.length;b=new Uint32Array(b);var a=new Int32Array(b.buffer),e=new Float32Array(b.buffer);let c=0;b[c++]=this.type;b[c++]=this.layerUIDs.length;for(let n=0;n<this.layerUIDs.length;n++)b[c++]=this.layerUIDs[n];b[c++]=this._isIconSDF?1:0;b[c++]=this.markerPageMap.size;for(const [n,[d,f]]of this.markerPageMap)b[c++]=n,b[c++]=d,b[c++]=f;b[c++]=this.glyphsPageMap.size;for(const [n,[d,f]]of this.glyphsPageMap)b[c++]=
n,b[c++]=d,b[c++]=f;b[c++]=this._iconVertexBuffer.index/4;b[c++]=this._textVertexBuffer.index/4;c=y.serializeSymbols(b,a,e,c,this._symbolInstances);b[c++]=this._iconVertexBuffer.array.length;for(e=0;e<this._iconVertexBuffer.array.length;e++)a[c++]=this._iconVertexBuffer.array[e];b[c++]=this._iconIndexBuffer.array.length;for(e=0;e<this._iconIndexBuffer.array.length;e++)b[c++]=this._iconIndexBuffer.array[e];b[c++]=this._textVertexBuffer.array.length;for(e=0;e<this._textVertexBuffer.array.length;e++)a[c++]=
this._textVertexBuffer.array[e];b[c++]=this._textIndexBuffer.array.length;for(a=0;a<this._textIndexBuffer.array.length;a++)b[c++]=this._textIndexBuffer.array[a];return b.buffer};y._symbolsSerializationLength=function(b){let a;a=1;for(const e of b||[]){a+=4;a+=1;for(const c of e.textColliders)a+=10;for(const c of e.iconColliders)a+=10;a+=1;a+=2*e.textVertexRanges.length;a+=1;a+=2*e.iconVertexRanges.length}return a};y.serializeSymbols=function(b,a,e,c,n){n=n||[];a[c++]=n.length;for(const d of n){a[c++]=
d.anchor.x;a[c++]=d.anchor.y;a[c++]=d.symbolFeature.hash;a[c++]=d.symbolFeature.priority;a[c++]=d.textColliders.length+d.iconColliders.length;for(const f of d.textColliders)a[c++]=f.xTile,a[c++]=f.yTile,a[c++]=f.dxPixels,a[c++]=f.dyPixels,a[c++]=f.hard?1:0,a[c++]=f.partIndex,e[c++]=f.minLod,e[c++]=f.maxLod,a[c++]=f.width,a[c++]=f.height;for(const f of d.iconColliders)a[c++]=f.xTile,a[c++]=f.yTile,a[c++]=f.dxPixels,a[c++]=f.dyPixels,a[c++]=f.hard?1:0,a[c++]=f.partIndex,e[c++]=f.minLod,e[c++]=f.maxLod,
a[c++]=f.width,a[c++]=f.height;a[c++]=d.textVertexRanges.length;for(const [f,l]of d.textVertexRanges)a[c++]=f,a[c++]=l;a[c++]=d.iconVertexRanges.length;for(const [f,l]of d.iconVertexRanges)a[c++]=f,a[c++]=l}return c};I._replaceKeys=function(b,a){return b.replace(/{([^{}]+)}/g,(e,c)=>c in a?a[c]:"")};I._processFeature=function(b,a,e){const {line:c,iconMosaicItem:n,shaping:d,anchor:f}=b,l=this.zoom;var k=this.layer,u=!!n,g=!0;u&&(g=a.optional||!n);var t=d&&0<d.length,p=!0;t&&(p=e.optional);var q;u&&
(q=this._placementEngine.getIconPlacement(f,n,a));if(q||g){var r;t&&(r=this._placementEngine.getTextPlacement(f,d,c,e));if(r||p){q&&r||(p||g?p||r?g||q||(r=null):q=null:r=q=null);if(r&&(u=k.hasDataDrivenText?k.textMaterial.encodeAttributes(b.symbolFeature.feature,l,k):null,this._storePlacedGlyphs(b,r.shapes,l,e.rotationAlignment,u),r.textColliders)){b.textColliders=r.textColliders;for(var m of r.textColliders)if(m.minLod=Math.max(l+C.log2(m.minLod),0),m.maxLod=Math.min(l+C.log2(m.maxLod),25),e=m.angle){g=
Math.cos(e);var v=Math.sin(e);t=m.dxPixels*g-m.dyPixels*v;e=m.dxPixels*v+m.dyPixels*g;p=(m.dxPixels+m.width)*g-m.dyPixels*v;r=(m.dxPixels+m.width)*v+m.dyPixels*g;const h=m.dxPixels*g-(m.dyPixels+m.height)*v;u=m.dxPixels*v+(m.dyPixels+m.height)*g;const x=(m.dxPixels+m.width)*g-(m.dyPixels+m.height)*v;v=(m.dxPixels+m.width)*v+(m.dyPixels+m.height)*g;g=Math.min(t,p,h,x);t=Math.max(t,p,h,x);p=Math.min(e,r,u,v);e=Math.max(e,r,u,v);m.dxPixels=g;m.dyPixels=p;m.width=t-g;m.height=e-p}}if(q&&(k=k.hasDataDrivenIcon?
k.iconMaterial.encodeAttributes(b.symbolFeature.feature,l,k):null,this._addPlacedIcons(b,q.shapes,l,n.page,a.rotationAlignment===z.RotationAlignment.VIEWPORT,k),q.iconColliders)){b.iconColliders=q.iconColliders;for(const h of q.iconColliders)if(h.minLod=Math.max(l+C.log2(h.minLod),0),h.maxLod=Math.min(l+C.log2(h.maxLod),25),b=h.angle)k=Math.cos(b),g=Math.sin(b),m=h.dxPixels*k-h.dyPixels*g,b=h.dxPixels*g+h.dyPixels*k,e=(h.dxPixels+h.width)*k-h.dyPixels*g,a=(h.dxPixels+h.width)*g+h.dyPixels*k,r=h.dxPixels*
k-(h.dyPixels+h.height)*g,q=h.dxPixels*g+(h.dyPixels+h.height)*k,u=(h.dxPixels+h.width)*k-(h.dyPixels+h.height)*g,g=(h.dxPixels+h.width)*g+(h.dyPixels+h.height)*k,k=Math.min(m,e,r,u),m=Math.max(m,e,r,u),e=Math.min(b,a,q,g),b=Math.max(b,a,q,g),h.dxPixels=k,h.dyPixels=e,h.width=m-k,h.height=b-e}}}};I._addPlacedIcons=function(b,a,e,c,n,d){const f=Math.max(e-1,0),l=this._iconVertexBuffer,k=this._iconIndexBuffer,u=this._markerMap;for(const t of a){a=n?0:Math.max(e+C.log2(t.minzoom),f);const p=n?25:Math.min(e+
C.log2(t.maxzoom),25);if(p<=a)continue;const q=t.tl,r=t.tr,m=t.bl,v=t.br;var g=t.mosaicRect;const h=t.labelAngle,x=t.minAngle,w=t.maxAngle,A=t.anchor,B=l.index,D=g.x,F=g.y,J=D+g.width;g=F+g.height;const P=l.index;l.add(A.x,A.y,q.x,q.y,D,F,h,x,w,a,p,d);l.add(A.x,A.y,r.x,r.y,J,F,h,x,w,a,p,d);l.add(A.x,A.y,m.x,m.y,D,g,h,x,w,a,p,d);l.add(A.x,A.y,v.x,v.y,J,g,h,x,w,a,p,d);0<b.iconVertexRanges.length&&b.iconVertexRanges[0][0]+b.iconVertexRanges[0][1]===P?b.iconVertexRanges[0][1]+=4:b.iconVertexRanges.push([P,
4]);k.add(B+0,B+1,B+2);k.add(B+1,B+2,B+3);u.has(c)?u.get(c)[1]+=6:u.set(c,[this._iconIndexStart+this._iconIndexCount,6]);this._iconIndexCount+=6}};I._addPlacedGlyphs=function(){const b=this._textVertexBuffer,a=this._textIndexBuffer,e=this._glyphMap;for(const [c,n]of this._glyphBufferDataStorage)for(const d of n){const f=b.index,l=d.symbolInstance,k=d.ddAttributes,u=b.index;b.add(d.glyphAnchor[0],d.glyphAnchor[1],d.tl[0],d.tl[1],d.xmin,d.ymin,d.labelAngle,d.minAngle,d.maxAngle,d.minLod,d.maxLod,k);
b.add(d.glyphAnchor[0],d.glyphAnchor[1],d.tr[0],d.tr[1],d.xmax,d.ymin,d.labelAngle,d.minAngle,d.maxAngle,d.minLod,d.maxLod,k);b.add(d.glyphAnchor[0],d.glyphAnchor[1],d.bl[0],d.bl[1],d.xmin,d.ymax,d.labelAngle,d.minAngle,d.maxAngle,d.minLod,d.maxLod,k);b.add(d.glyphAnchor[0],d.glyphAnchor[1],d.br[0],d.br[1],d.xmax,d.ymax,d.labelAngle,d.minAngle,d.maxAngle,d.minLod,d.maxLod,k);0<l.textVertexRanges.length&&l.textVertexRanges[0][0]+l.textVertexRanges[0][1]===u?l.textVertexRanges[0][1]+=4:l.textVertexRanges.push([u,
4]);a.add(f+0,f+1,f+2);a.add(f+1,f+2,f+3);e.has(c)?e.get(c)[1]+=6:e.set(c,[this._textIndexStart+this._textIndexCount,6]);this._textIndexCount+=6}this._glyphBufferDataStorage.clear()};I._storePlacedGlyphs=function(b,a,e,c,n){const d=Math.max(e-1,0);c=c===z.RotationAlignment.VIEWPORT;let f,l,k,u,g,t,p,q,r,m;for(const v of a)a=c?0:Math.max(e+C.log2(v.minzoom),d),f=c?25:Math.min(e+C.log2(v.maxzoom),25),f<=a||(l=v.tl,k=v.tr,u=v.bl,g=v.br,t=v.labelAngle,p=v.minAngle,q=v.maxAngle,r=v.anchor,m=v.mosaicRect,
this._glyphBufferDataStorage.has(v.page)||this._glyphBufferDataStorage.set(v.page,[]),this._glyphBufferDataStorage.get(v.page).push({glyphAnchor:[r.x,r.y],tl:[l.x,l.y],tr:[k.x,k.y],bl:[u.x,u.y],br:[g.x,g.y],xmin:m.x,ymin:m.y,xmax:m.x+m.width,ymax:m.y+m.height,labelAngle:t,minAngle:p,maxAngle:q,minLod:a,maxLod:f,placementLod:d,symbolInstance:b,ddAttributes:n}))};y._pushAnchors=function(b,a,e,c){e+=c;var n=0,d=a.length-1;for(var f=0;f<d;f++)n+=E.Point.distance(a[f],a[f+1]);c=.5*(c||e);if(!(n<=c)){c/=
n;e=n/Math.max(Math.round(n/e),1);n=0;d=-e/2;f=a.length-1;for(let k=0;k<f;k++){const u=a[k],g=a[k+1],t=g.x-u.x,p=g.y-u.y,q=Math.sqrt(t*t+p*p);let r;for(;d+e<n+q;){d+=e;var l=(d-n)/q;const m=C.interpolate(u.x,g.x,l);l=C.interpolate(u.y,g.y,l);void 0===r&&(r=Math.atan2(p,t));b.push(new G.Anchor(m,l,r,k,c))}n+=q}}};y._pushCenterAnchor=function(b,a){var e=0,c=a.length-1;for(var n=0;n<c;n++)e+=E.Point.distance(a[n],a[n+1]);var d=e/2;let f=0;const l=a.length-1;for(e=0;e<l;e++){var k=a[e];const u=a[e+1];
c=u.x-k.x;n=u.y-k.y;const g=Math.sqrt(c*c+n*n);if(d<f+g){d=(d-f)/g;a=C.interpolate(k.x,u.x,d);k=C.interpolate(k.y,u.y,d);b.push(new G.Anchor(a,k,Math.atan2(n,c),e,0));break}f+=g}};y._deviation=function(b,a,e){return Math.atan2((a.x-b.x)*(e.y-a.y)-(a.y-b.y)*(e.x-a.x),(a.x-b.x)*(e.x-a.x)+(a.y-b.y)*(e.y-a.y))};y._honorsTextMaxAngle=function(b,a,e,c,n){let d=0;e/=2;for(var f=new E.Point(a.x,a.y),l=a.segment+1;d>-e;){--l;if(0>l)return!1;d-=E.Point.distance(b[l],f);f=b[l]}d+=E.Point.distance(b[l],b[l+1]);
a=[];f=0;const k=b.length;for(;d<e;){var u=b[l];let g;do{++l;if(l===k)return!1;g=b[l]}while(g.isEqual(u));let t=l,p;do{++t;if(t===k)return!1;p=b[t]}while(p.isEqual(g));u=this._deviation(u,g,p);a.push({deviation:u,distToAnchor:d});for(f+=u;d-a[0].distToAnchor>n;)f-=a.shift().deviation;if(Math.abs(f)>c)return!1;d+=E.Point.distance(g,p)}return!0};y._smoothVertices=function(b,a){if(0>=a)return b;let e=b.length;if(3>e)return b;const c=[];var n=0,d=0;c.push(0);for(var f=1;f<e;f++){var l=E.Point.distance(b[f],
b[f-1]);0<l&&(n+=l,c.push(n),d++,d!==f&&(b[d]=b[f]))}e=d+1;if(3>e)return b;a=Math.min(a,.2*n);n=b[0].x;d=b[0].y;f=b[e-1].x;l=b[e-1].y;var k=E.Point.sub(b[0],b[1]);k.normalize();b[0].x+=a*k.x;b[0].y+=a*k.y;k.assignSub(b[e-1],b[e-2]);k.normalize();b[e-1].x+=a*k.x;b[e-1].y+=a*k.y;c[0]-=a;c[e-1]+=a;k=[];k.push(new E.Point(n,d));const u=.5*a;for(let A=1;A<e-1;A++){let B=0,D=0,F=0;for(var g=A-1;0<=g;g--){var t=u+c[g+1]-c[A];if(0>t)break;var p=c[g+1]-c[g],q=c[A]-c[g]<u?1:t/p;if(1E-6>q)break;var r=q*q,m=
q*t-.5*r*p,v=q*p/a,h=b[g+1],x=b[g].x-h.x,w=b[g].y-h.y;B+=v/m*(h.x*q*t+.5*r*(t*x-p*h.x)-r*q*p*x/3);D+=v/m*(h.y*q*t+.5*r*(t*w-p*h.y)-r*q*p*w/3);F+=v}for(g=A+1;g<e;g++){t=u-c[g-1]+c[A];if(0>t)break;p=c[g]-c[g-1];q=c[g]-c[A]<u?1:t/p;if(1E-6>q)break;r=q*q;m=q*t-.5*r*p;v=q*p/a;h=b[g-1];x=b[g].x-h.x;w=b[g].y-h.y;B+=v/m*(h.x*q*t+.5*r*(t*x-p*h.x)-r*q*p*x/3);D+=v/m*(h.y*q*t+.5*r*(t*w-p*h.y)-r*q*p*w/3);F+=v}k.push(new E.Point(B/F,D/F))}k.push(new E.Point(f,l));b[0].x=n;b[0].y=d;b[e-1].x=f;b[e-1].y=l;return k};
y._pushCentroid=function(b,a){const e=a.length-1;let c=0,n=0,d=0,f=a[0].x,l=a[0].y;4096<f&&(f=4096);0>f&&(f=0);4096<l&&(l=4096);0>l&&(l=0);for(let k=1;k<e;k++){let u=a[k].x,g=a[k].y,t=a[k+1].x,p=a[k+1].y;4096<u&&(u=4096);0>u&&(u=0);4096<g&&(g=4096);0>g&&(g=0);4096<t&&(t=4096);0>t&&(t=0);4096<p&&(p=4096);0>p&&(p=0);const q=(u-f)*(p-l)-(t-f)*(g-l);c+=q*(f+u+t);n+=q*(l+g+p);d+=q}c/=3*d;n/=3*d;isNaN(c)||isNaN(n)||b.push(new G.Anchor(c,n))};M._createClass(y,[{key:"markerPageMap",get:function(){return this._markerMap}},
{key:"glyphsPageMap",get:function(){return this._glyphMap}},{key:"symbolInstances",get:function(){return this._symbolInstances}}]);return y}(L);L._bidiEngine=new Q;return L});