// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../ArrayPool ../lang ../ReentrantObjectPool ../scheduling ../SetUtils ../uid ./get ./trackingUtils ./utils".split(" "),function(l,D,x,E,F,G,y,A,r,t){function u(b){h.delete(b);h.add(b);v||(v=F.schedule(B))}function C(b){if(!b.removed){var d=b.oldValue,c=b.getValue();b.equals(d,c)||(b.oldValue=c,b.notify(c,d))}}function B(){let b=10;for(;v&&b--;){v=null;const d=H(),c=w.acquire();for(const a of d){const e=a.uid;C(a);e===a.uid&&a.removed&&c.push(a)}for(const a of h)a.removed&&(c.push(a),
h.delete(a));for(const a of c)n.pool.release(a);w.release(c);w.release(d);z.forEach(a=>a())}}function H(){const b=w.acquire();b.length=h.size;let d=0;for(const c of h)b[d]=c,++d;h.clear();return b}function I(b,d,c){let a=t.parse(b,d,c,(e,g,k)=>{let f,m,p=r.reactionDeferred(()=>A.valueOf(e,g),(J,K)=>{e.__accessor__.destroyed||f&&f.uid!==m?a.remove():(f||(f=n.acquireUntracked(J,k,K,e,g),m=f.uid),u(f))});return{remove:t.once(()=>{p.remove();f&&(f.uid!==m||f.removed||(f.removed=!0,u(f)),f=null);a=p=null})}});
return a}function L(b,d,c){const a=t.parse(b,d,c,(e,g,k)=>{let f=!1;return r.reaction(()=>A.valueOf(e,g),(m,p)=>{e.__accessor__.destroyed?a.remove():f||(f=!0,x.equals(p,m)||k.call(e,m,p,g,e),f=!1)})});return a}function M(b,d,c){let a,e,g=r.reactionDeferred(b,(k,f)=>{a&&a.uid!==e?g.remove():(a||(a=n.acquireTracked(k,d,f,c),e=a.uid),u(a))});return{remove:t.once(()=>{g.remove();a&&(a.uid!==e||a.removed||(a.removed=!0,u(a)),a=null);g=null})}}function N(b,d,c){let a=!1;return r.reaction(b,(e,g)=>{a||(a=
!0,c(g,e)||d(e,g),a=!1)})}var q;(function(b){b[b.Untracked=0]="Untracked";b[b.Tracked=1]="Tracked"})(q||(q={}));let n=function(){function b(){this.uid=y.generateUID();this.removed=!1;this.equals=this.path=this.target=this.getValue=this.callback=this.oldValue=this.type=null}b.acquireUntracked=function(c,a,e,g,k){return this.pool.acquire(q.Untracked,c,a,e,g,k,x.equals)};b.acquireTracked=function(c,a,e,g){return this.pool.acquire(q.Tracked,c,a,e,null,null,g)};var d=b.prototype;d.notify=function(c,a){this.type===
q.Untracked?this.callback.call(this.target,c,a,this.path,this.target):this.callback.call(null,c,a)};d.acquire=function(c,a,e,g,k,f,m){this.uid=y.generateUID();this.removed=!1;this.type=c;this.oldValue=a;this.callback=e;this.getValue=g;this.target=k;this.path=f;this.equals=m};d.release=function(){this.target=this.path=this.oldValue=this.callback=this.getValue=null;this.uid=y.generateUID();this.removed=!0};return b}();n.pool=new E.ReentrantObjectPool(n);const w=new D,h=new Set;let v;const z=new Set;
l.afterDispatch=function(b){z.add(b);return{remove(){z.delete(b)}}};l.dispatch=B;l.dispatchTarget=function(b){const d=Array.from(h);for(let c=0;c<d.length;c++){const a=d[c];a.target===b&&(C(a),h.delete(a))}};l.isValueInUse=function(b){return G.someSet(h,d=>d.oldValue===b)};l.removeTarget=function(b){for(const d of h.values())d.target===b&&(d.removed=!0)};l.watch=function(b,d,c,a=!1){return!b.__accessor__||b.__accessor__.destroyed?{remove(){}}:a?L(b,d,c):I(b,d,c)};l.watchTracked=function(b,d,c=!1,
a=x.equalsShallow){return c?N(b,d,a):M(b,d,a)};Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});