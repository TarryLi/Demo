// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./ScriptUtils","../webgl/Rect"],function(w,t,x){let z=function(){function u(b,e,c,a,g,h,f){this._glyphItems=b;this._maxWidth=e;this._lineHeight=c;this._letterSpacing=a;this._hAnchor=g;this._vAnchor=h;this._justify=f}var v=u.prototype;v.getShaping=function(b,e,c){var a=this._letterSpacing;const g=this._lineHeight;var h=this._justify,f=this._maxWidth;const d=[];var l=0,n=0,q=b.length;for(var k=0;k<q;k++){var m=b.charCodeAt(k),r=c&&t.hasVerticalOrientation(m);let p;for(const y of this._glyphItems)if(p=
y[m])break;d.push({codePoint:m,x:l,y:n,vertical:r,glyphMosaicItem:p});p&&(l+=p.metrics.advance+a)}c=l;0<f&&(c=l/Math.max(1,Math.ceil(l/f)));b=b.includes("\u200b");f=[];for(a=0;a<q-1;a++)if(m=d[a].codePoint,r=t.allowsIdeographicBreak(m),t.isLineBreak(m)||r){k=0;if(10===m)k-=1E4;else if(r&&b)k+=150;else{if(40===m||65288===m)k+=50;m=d[a+1].codePoint;if(41===m||65289===m)k+=50}f.push(this._buildBreak(a+1,d[a].x,c,f,k,!1))}q=this._optimalBreaks(this._buildBreak(q,l,c,f,0,!0));l=0;b=e?-g:g;a=0;for(f=0;f<
q.length;f++){for(c=q[f];a<c&&t.isWhiteSpace(d[a].codePoint);)d[a].glyphMosaicItem=null,++a;for(k=c-1;k>a&&t.isWhiteSpace(d[k].codePoint);)d[k].glyphMosaicItem=null,--k;if(a<=k){m=d[a].x;for(r=a;r<=k;r++)d[r].x-=m,d[r].y=n;m=d[k].x;d[k].glyphMosaicItem&&(m+=d[k].glyphMosaicItem.metrics.advance);l=Math.max(m,l);h&&this._applyJustification(d,a,k)}a=c;n+=b}if(0<d.length){n=q.length-1;h=(h-this._hAnchor)*l;l=(-this._vAnchor*(n+1)+.5)*g;e&&n&&(l+=n*g);for(const p of d)p.x+=h,p.y+=l}return d.filter(p=>
p.glyphMosaicItem)};u.getTextBox=function(b,e){if(!b.length)return null;let c=Infinity,a=Infinity,g=0,h=0;for(const f of b){b=f.x;const d=f.y-17,l=b+f.glyphMosaicItem.metrics.advance,n=d+e;c=Math.min(c,b);g=Math.max(g,l);a=Math.min(a,d);h=Math.max(h,n)}return{x:c,y:a,width:g-c,height:h-a}};u.getBox=function(b){if(!b.length)return null;let e=Infinity,c=Infinity,a=0,g=0;for(const h of b){const {height:f,left:d,top:l,width:n}=h.glyphMosaicItem.metrics;b=h.x;const q=h.y-(f-Math.abs(l)),k=b+n+d,m=q+f;
e=Math.min(e,b);a=Math.max(a,k);c=Math.min(c,q);g=Math.max(g,m)}return{x:e,y:c,width:a-e,height:g-c}};u.addDecoration=function(b,e){var c=b.length;if(0!==c){var a=b[0].x+b[0].glyphMosaicItem.metrics.left,g=b[0].y;for(let h=1;h<c;h++){const f=b[h];if(f.y!==g){const d=b[h-1].x+b[h-1].glyphMosaicItem.metrics.left+b[h-1].glyphMosaicItem.metrics.width;b.push({codePoint:0,x:a,y:g+e-3,vertical:!1,glyphMosaicItem:{sdf:!0,rect:new x(4,0,4,8),metrics:{width:d-a,height:8,left:0,top:0,advance:0},page:0,code:0}});
g=f.y;a=f.x+f.glyphMosaicItem.metrics.left}}c=b[c-1].x+b[c-1].glyphMosaicItem.metrics.left+b[c-1].glyphMosaicItem.metrics.width;b.push({codePoint:0,x:a,y:g+e-3,vertical:!1,glyphMosaicItem:{sdf:!0,rect:new x(4,0,4,8),metrics:{width:c-a,height:8,left:0,top:0,advance:0},page:0,code:0}})}};v._breakScore=function(b,e,c,a){const g=(b-e)*(b-e);return a?b<e?g/2:2*g:g+Math.abs(c)*c};v._buildBreak=function(b,e,c,a,g,h){let f=null,d=this._breakScore(e,c,g,h);for(const l of a)a=this._breakScore(e-l.x,c,g,h)+
l.score,a<=d&&(f=l,d=a);return{index:b,x:e,score:d,previousBreak:f}};v._optimalBreaks=function(b){return b?this._optimalBreaks(b.previousBreak).concat(b.index):[]};v._applyJustification=function(b,e,c){var a=b[c];for(a=(a.x+(a.vertical?24:a.glyphMosaicItem?a.glyphMosaicItem.metrics.advance:0))*this._justify;e<=c;e++)b[e].x-=a};return u}();w.SDF_GLYPH_BASELINE=17;w.SDF_GLYPH_SIZE=24;w.TextShaping=z;Object.defineProperties(w,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});