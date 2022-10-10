// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../Viewpoint ../../core/Collection ../../core/maybe ../../core/unitUtils ../../chunks/common ../../chunks/mat2d ../../chunks/mat2df64 ../../chunks/vec2 ../../chunks/vec2f64 ../../geometry/Extent ../../geometry/Geometry ../../geometry/Point ../../geometry/projection ../../geometry/SpatialReference ../../geometry/support/spatialReferenceUtils".split(" "),function(k,P,E,ca,w,Q,F,t,C,g,n,R,da,S,v,T,y){function G(a,b){return b.type?g.set(a,b.x,
b.y):g.copy(a,b)}function z(a,b){return Math.max(a.width/Math.max(1,b[0]),a.height/Math.max(1,b[1]))*U(a.spatialReference)}function A(a,b,c,d){return H.apply(this,arguments)}function H(){H=P._asyncToGenerator(function*(a,b,c,d){if(!a||Array.isArray(a)&&!a.length)return null;ca.isCollection(a)&&(a=a.toArray());if(Array.isArray(a)&&a.length&&"object"===typeof a[0]){var e=a.every(p=>"attributes"in p);var f=a.some(p=>!p.geometry),l=a;if(e&&f&&b&&b.allLayerViews){e=new Map;for(var r of a)a=r.layer,f=e.get(a)||
[],l=r.attributes[a.objectIdField],null!=l&&f.push(l),e.set(a,f);const p=[];e.forEach((q,V)=>{const W=b.allLayerViews.find(B=>B.layer.id===V.id);if("queryFeatures"in W){const B=V.createQuery();B.objectIds=q;B.returnGeometry=!0;p.push(W.queryFeatures(B))}});r=yield Promise.all(p);a=[];for(var h of r)if(h&&h.features&&h.features.length)for(var m of h.features)w.isSome(m.geometry)&&a.push(m.geometry);l=a}for(const p of l)d=yield A(p,b,c,d);return d}if(Array.isArray(a)&&2===a.length&&"number"===typeof a[0]&&
"number"===typeof a[1])e=new S(a);else if(a instanceof da)e=a;else if("geometry"in a)if(a.geometry)e=a.geometry;else if(a.layer){const p=a.layer;h=b.allLayerViews.find(q=>q.layer.id===p.id);"queryFeatures"in h&&(m=p.createQuery(),m.objectIds=[a.attributes[p.objectIdField]],m.returnGeometry=!0,h=yield h.queryFeatures(m),e=w.get(h,"features",0,"geometry"))}if(w.isNone(e))return null;h="point"===e.type?new R({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference}):e.extent;if(!h)return null;
v.isLoaded()||v.canProjectWithoutEngine(h.spatialReference,c)||(yield v.load());c=v.project(h,c);return c?d=d?d.union(c):c:null});return H.apply(this,arguments)}function ea(a){if(a&&(!Array.isArray(a)||"number"!==typeof a[0])&&("object"===typeof a||Array.isArray(a)&&"object"===typeof a[0])){if("layer"in a&&a.layer&&a.layer.minScale&&a.layer.maxScale){var b=a.layer;return{min:b.minScale,max:b.maxScale}}if(Array.isArray(a)&&a.length&&a.every(c=>"layer"in c)){let c=b=0;for(const d of a)(a=d.layer)&&
a.minScale&&a.maxScale&&(b=a.minScale<b?a.minScale:b,c=a.maxScale>c?a.maxScale:c);return b&&c?{min:b,max:c}:null}}}function I(a,b){return y.equals(a.wkid?a:a.spatialReference||T.WGS84,b)?a:v.project(a,b)}function J(){J=P._asyncToGenerator(function*(a,b){if(!a||!b)return new E({targetGeometry:new S,scale:0,rotation:0});let c=b.spatialReference;const {constraints:d,padding:e,viewpoint:f,size:l}=b,r=[e?l[0]-e.left-e.right:l[0],e?l[1]-e.top-e.bottom:l[1]];let h=null;a instanceof E?h=a:a.viewpoint?h=a.viewpoint:
a.target&&"esri.Viewpoint"===a.target.declaredClass&&(h=a.target);let m=null;if(h&&h.targetGeometry)m=h.targetGeometry;else if(a instanceof R)m=a;else if(a||a&&("center"in a||"extent"in a||"target"in a))m=(yield A(a.center,b,c))||(yield A(a.extent,b,c))||(yield A(a.target,b,c))||(yield A(a,b,c));!m&&f&&f.targetGeometry?m=f.targetGeometry:!m&&b.extent&&(m=b.extent);if(!c){var p=b.spatialReference||b.extent||m;c=p.wkid?p:p.spatialReference||T.WGS84}v.isLoaded()||y.equals(m.spatialReference,c)||v.canProjectWithoutEngine(m,
c)||(yield v.load());p=I(m.center?m.center:m,c);var q=null;h&&w.isSome(h.targetGeometry)&&"point"===h.targetGeometry.type?q=h.scale:"scale"in a&&a.scale?q=a.scale:"zoom"in a&&-1!==a.zoom&&d&&d.effectiveLODs?q=d.zoomToScale(a.zoom):Array.isArray(m)||"point"===m.type||"extent"===m.type&&0===m.width&&0===m.height?(q=I(b.extent,c),q=w.isSome(q)?z(q,r):b.extent?z(b.extent,r):f.scale):q=z(I(m.extent,c),r);if(b=ea(a))b.min&&b.min>q?q=b.min:b.max&&b.max<q&&(q=b.max);b=0;h?b=h.rotation:a.hasOwnProperty("rotation")?
b=a.rotation:f&&(b=f.rotation);a=new E({targetGeometry:p,scale:q,rotation:b});d&&(a=d.fit(a),d.constrainByGeometry(a),d.rotationEnabled||(a.rotation=b));return a});return J.apply(this,arguments)}function u(a,b){const c=a.targetGeometry,d=b.targetGeometry;c.x=d.x;c.y=d.y;c.spatialReference=d.spatialReference;a.scale=b.scale;a.rotation=b.rotation;return a}function X(a,b,c){return c?g.set(a,.5*(b[0]-c.right+c.left),.5*(b[1]-c.bottom+c.top)):g.scale(a,b,.5)}function fa(a,b,c,d){K(a,b,c,d);return t.invert(a,
a)}function x(a){var b=a.scale;a=a.targetGeometry;a=w.isSome(a)&&y.isValid(a.spatialReference)?1/(39.37*Q.getMetersPerUnitForSR(a.spatialReference)*96):1;return b*a}function U(a){return y.isValid(a)?39.37*Q.getMetersPerUnitForSR(a)*96:1}function Y(a){return(a=y.getInfo(a))?a.valid[1]-a.valid[0]:0}const ha=180/Math.PI,ia=function(){const a=n.create();return function(b,c,d){const e=c.targetGeometry;G(a,e);c=.5*x(c);b.xmin=a[0]-c*d[0];b.ymin=a[1]-c*d[1];b.xmax=a[0]+c*d[0];b.ymax=a[1]+c*d[1];b.spatialReference=
e.spatialReference;return b}}(),L=function(){const a=n.create();return function(b,c,d){return g.sub(b,g.scale(b,c,.5),X(a,c,d))}}(),Z=function(){const a=C.create(),b=n.create();return function(c,d,e,f){const l=x(d);d=F.toRadian(d.rotation)||0;g.set(b,l,l);t.fromScaling(a,b);t.rotate(a,a,d);t.translate(a,a,L(b,e,f));t.translate(a,a,[0,f.top-f.bottom]);return g.set(c,a[4],a[5])}}(),M=function(){const a=n.create(),b=n.create(),c=n.create();return function(d,e,f,l,r,h){g.negate(a,e);g.scale(b,f,.5*h);
g.set(c,1/l*h,-1/l*h);t.fromTranslation(d,b);r&&t.rotate(d,d,r);t.scale(d,d,c);t.translate(d,d,a);return d}}(),K=function(){const a=n.create();return function(b,c,d,e){const f=x(c),l=F.toRadian(c.rotation)||0;G(a,c.targetGeometry);return M(b,a,d,f,l,e)}}(),ja=function(){const a=n.create();return function(b,c,d,e){const f=x(c);G(a,c.targetGeometry);return M(b,a,d,f,0,e)}}(),ka=function(){const a=n.create(),b=n.create(),c=[0,0,0];return function(d,e,f){g.subtract(a,d,e);g.normalize(a,a);g.subtract(b,
d,f);g.normalize(b,b);g.cross(c,a,b);d=Math.acos(g.dot(a,b)/(g.length(a)*g.length(b)))*ha;0>c[2]&&(d=-d);isNaN(d)&&(d=0);return d}}(),la=function(){const a=n.create();return function(b,c,d,e){const f=b.targetGeometry;u(b,c);Z(a,c,d,e);f.x+=a[0];f.y+=a[1];return b}}(),aa=function(){return function(a,b,c){u(a,b);b=a.targetGeometry;b.x=c.x;b.y=c.y;b.spatialReference=c.spatialReference;return a}}(),ma=function(){const a=n.create();return function(b,c,d,e,f){f||(f="center");g.sub(a,d,e);g.scale(a,a,.5);
d=a[0];e=a[1];switch(f){case "center":g.set(a,0,0);break;case "left":g.set(a,-d,0);break;case "top":g.set(a,0,e);break;case "right":g.set(a,d,0);break;case "bottom":g.set(a,0,-e);break;case "top-left":g.set(a,-d,e);break;case "bottom-left":g.set(a,-d,-e);break;case "top-right":g.set(a,d,e);break;case "bottom-right":g.set(a,d,-e)}D(b,c,a);return b}}(),na=function(){const a=n.create();return function(b,c,d,e,f){u(b,c);isNaN(d)||0===d||(N(a,e,c,f),b.scale=c.scale*d,O(a,a,b,f),D(b,b,g.set(a,a[0]-e[0],
e[1]-a[1])));return b}}(),ba=function(){const a=n.create();return function(b,c,d,e,f,l){u(b,c);isNaN(d)||0===d||(N(a,f,c,l),b.scale=c.scale*d,b.rotation+=e,O(a,a,b,l),D(b,b,g.set(a,a[0]-f[0],f[1]-a[1])));return b}}(),oa=function(){const a=n.create(),b=n.create();return function(c,d,e,f,l,r,h){L(b,r,h);g.add(a,l,b);return f?ba(c,d,e,f,a,r):na(c,d,e,a,r)}}(),N=function(){const a=C.create();return function(b,c,d,e){return g.transformMat2d(b,c,fa(a,d,e,1))}}(),O=function(){const a=C.create();return function(b,
c,d,e){return g.transformMat2d(b,c,K(a,d,e,1))}}(),D=function(){const a=n.create(),b=C.create();return function(c,d,e){u(c,d);const f=x(d),l=c.targetGeometry;t.fromRotation(b,F.toRadian(d.rotation)||0);t.scale(b,b,n.fromValues(f,f));g.transformMat2d(a,e,b);l.x+=a[0];l.y+=a[1];return c}}();k.addPadding=la;k.angleBetween=ka;k.centerAt=aa;k.copy=u;k.create=function(a,b){return J.apply(this,arguments)};k.extentToScale=z;k.getAnchor=X;k.getExtent=ia;k.getMatrix=M;k.getPaddingMapTranslation=Z;k.getPaddingScreenTranslation=
L;k.getResolution=x;k.getResolutionToScaleFactor=U;k.getTransform=K;k.getTransformNoRotation=ja;k.getWorldScreenWidth=function(a,b){return Math.round(Y(a)/b)};k.getWorldWidth=Y;k.padAndScaleAndRotateBy=oa;k.resize=ma;k.rotateBy=function(a,b,c){u(a,b);a.rotation+=c;return a};k.rotateTo=function(a,b,c){u(a,b);a.rotation=c;return a};k.scaleAndRotateBy=ba;k.scaleTo=function(a,b,c){u(a,b);a.scale=c;return a};k.setExtent=function(a,b,c,d,e){aa(a,b,c.center);a.scale=z(c,d);e&&e.constraints&&e.constraints.constrain(a);
return a};k.toMap=N;k.toScreen=O;k.translateBy=D;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});