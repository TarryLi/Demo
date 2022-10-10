// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/Error ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/pbf ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/OptimizedFeature ../../../../../layers/graphics/OptimizedGeometry ./FeatureSetReader ./FeatureSetReaderPBFHeader".split(" "),function(H,I,O,D,E,P,J,Q,y,K,R){function L(g){if(g<=u.small.delta.length)return u.small;if(g<=u.large.delta.length)return u.large;
u.large.delta=new Int32Array(Math.round(1.25*g));u.large.decoded=new Int32Array(Math.round(1.25*g));return u.large}function S(g){var m=g.getLength();for(m=g.pos()+m;g.pos()<m&&g.next();)switch(g.tag()){case 1:return g.getString();case 2:return g.getFloat();case 3:return g.getDouble();case 4:return g.getSInt32();case 5:return g.getUInt32();case 6:return g.getInt64();case 7:return g.getUInt64();case 8:return g.getSInt64();case 9:return g.getBool();default:return g.skip(),null}return null}function F(g,
m,e,a){return 0===g*a-e*m&&0<g*e+m*a}const T=D.getLogger("esri.view.2d.layers.features.support.FeatureSetReaderPBF"),u={small:{delta:new Int32Array(128),decoded:new Int32Array(128)},large:{delta:new Int32Array(128E3),decoded:new Int32Array(128E3)}};D=function(g){function m(a,b,f,k){a=g.call(this,a,k)||this;a._hasNext=!1;a._isPoints=!1;a._featureIndex=-1;a._featureOffset=0;a._cache={area:0,unquantGeometry:void 0,geometry:void 0,centroid:void 0,legacyFeature:void 0,optFeature:void 0};a._geometryType=
k.geometryType;a._reader=b;a._header=f;a._hasNext=f.hasFeatures;a._isPoints="esriGeometryPoint"===k.geometryType;return a}I._inheritsLoose(m,g);m.fromBuffer=function(a,b,f=!1){var k=b.geometryType;a:{try{const c=new P(new Uint8Array(a),new DataView(a));for(;c.next();)switch(c.tag()){case 2:b:{for(var h=c.getMessage();h.next();)switch(h.tag()){case 1:var d=h.getMessage();break b;default:h.skip()}d=null}break a;default:c.skip()}}catch(c){a=new O("query:parsing-pbf","Error while parsing FeatureSet PBF payload",
{error:c}),T.error(a)}d=null}a=d;f=R.parseHeader(a,"esriGeometryPoint"===k,f);k=K.FeatureSetReader.createInstance();return new m(k,a,f,b)};var e=m.prototype;e.hasField=function(a){return this._header.hasField(a)||this._header.hasField(a.toLowerCase().trim())};e.getFieldNames=function(){return this._header.fields.map(a=>a.fieldName)};e.getSize=function(){return this.size};e.getQuantizationTransform=function(){return this._header.transform};e.getCursor=function(){return this.copy()};e.getIndex=function(){return this._featureIndex};
e.setIndex=function(a){this._cache.area=0;this._cache.unquantGeometry=void 0;this._cache.geometry=void 0;this._cache.centroid=void 0;this._cache.legacyFeature=void 0;this._cache.optFeature=void 0;this._featureIndex=a};e.getAttributeHash=function(){let a="";this._header.fields.forEach(({index:b})=>{a+=this._readAttributeAtIndex(b)+"."});return a};e.getObjectId=function(){return this._readAttributeAtIndex(this._header.objectIdFieldIndex)};e.getDisplayId=function(){return this._header.displayIds[this._featureIndex]};
e.setDisplayId=function(a){this._header.displayIds[this._featureIndex]=a};e.getGroupId=function(){return this._header.groupIds[this._featureIndex]};e.setGroupId=function(a){this._header.groupIds[this._featureIndex]=a};e.readLegacyFeature=function(){if(void 0===this._cache.legacyFeature){var a,b=this.readCentroid();b={attributes:this.readAttributes(),geometry:this._isPoints?this.readLegacyPointGeometry():this.readLegacyGeometry(),centroid:null!=(a=b&&{x:b.coords[0],y:b.coords[1]})?a:null};return this._cache.legacyFeature=
b}return this._cache.legacyFeature};e.readOptimizedFeature=function(){if(void 0===this._cache.optFeature){const a=new Q.OptimizedFeature(this.readGeometry(),this.readAttributes(),this.readCentroid());a.objectId=this.getObjectId();a.displayId=this.getDisplayId();return this._cache.optFeature=a}return this._cache.optFeature};e.getXHydrated=function(){const a=this._header.centroid[2*this._featureIndex],b=this.getQuantizationTransform();return E.isNone(b)?a:a*b.scale[0]+b.translate[0]};e.getYHydrated=
function(){const a=this._header.centroid[2*this._featureIndex+1],b=this.getQuantizationTransform();return E.isNone(b)?a:b.translate[1]-a*b.scale[1]};e.getX=function(){return this._header.centroid[2*this._featureIndex]*this._sx+this._tx};e.getY=function(){return this._header.centroid[2*this._featureIndex+1]*this._sy+this._ty};e.readLegacyPointGeometry=function(){const a=this.getX(),b=this.getY();return{x:a,y:b}};e.readLegacyGeometry=function(a){a=this.readGeometry(a);return J.convertToGeometry(a,this.geometryType,
!1,!1)};e.readLegacyCentroid=function(){const a=this.readCentroid();if(!a)return null;const [b,f]=a.coords;return{x:b,y:f}};e.readGeometryArea=function(){this._cache.area||this.readGeometry(!0);return this._cache.area};e.readUnquantizedGeometry=function(a=!1){if(void 0===this._cache.unquantGeometry){a=this.readGeometry(a);if(!a)return this._cache.unquantGeometry=null;var b=L(a.coords.length).decoded;a=a.clone(b);b=a.coords;let f=0;for(const k of a.lengths){for(let h=1;h<k;h++){const d=2*(f+h),c=2*
(f+h-1);b[d]+=b[c];b[d+1]+=b[c+1]}f+=k}return this._cache.unquantGeometry=a}return this._cache.unquantGeometry};e.readHydratedGeometry=function(){if(this._isPoints){if(268435455===this._header.centroid[2*this._featureIndex])return null;var a=this.getXHydrated(),b=this.getYHydrated();return new y([],[a,b])}a=this.readGeometry();if(!a)return null;a=a.clone();b=this.getQuantizationTransform();E.isSome(b)&&J.unquantizeOptimizedGeometry(a,a,this.hasZ,this.hasM,b);return a};e.readGeometry=function(a=!1){if(void 0===
this._cache.geometry){var b=null;if(this._isPoints){if(268435455===this._header.centroid[2*this._featureIndex])return null;a=this.getX();b=this.getY();b=new y([],[a,b])}else{const f=this._header.offsets.geometry[this._featureIndex],k=this._reader;if(0===f)return null;k.move(f);try{b=a?this._parseGeometryForDisplay(k):this._parseGeometry(k)}catch(h){return console.error("Failed to parse geometry!",h),null}}return this._cache.geometry=b}return this._cache.geometry};e.readCentroid=function(){if(void 0===
this._cache.centroid){var a=null;a=this._header.centroid[2*this._featureIndex]+this._tx;const b=this._header.centroid[2*this._featureIndex+1]+this._ty;if(268435455===a){if(a=this._computeCentroid())this._header.centroid[2*this._featureIndex]=a.coords[0]-this._tx,this._header.centroid[2*this._featureIndex+1]=a.coords[1]-this._ty}else a=new y([],[a,b]);return this._cache.centroid=a}return this._cache.centroid};e.copy=function(){var a=this._reader.clone();a=new m(this.instance,a,this._header,this.fullSchema());
this.copyInto(a);return a};e.next=function(){this._cache.area=0;this._cache.unquantGeometry=void 0;this._cache.geometry=void 0;this._cache.centroid=void 0;this._cache.legacyFeature=void 0;for(this._cache.optFeature=void 0;++this._featureIndex<this.size&&!this._getExists(););return this._featureIndex<this.size};e._readAttribute=function(a,b){a=this._header.hasField(a)?a:a.toLowerCase().trim();var f=this._header.getFieldIndex(a);if(null!=f)return f=this._readAttributeAtIndex(f),b&&null!=f?this._header.isDateField(a)?
new Date(f):f:f};e._readAttributes=function(){const a={};this._header.fields.forEach(({fieldName:b,index:f})=>{a[b]=this._readAttributeAtIndex(f)});return a};e.copyInto=function(a){g.prototype.copyInto.call(this,a);a._featureIndex=this._featureIndex;a._featureOffset=this._featureOffset;a._hasNext=this._hasNext};e._readAttributeAtIndex=function(a){const b=this._reader;b.move(this._header.offsets.attributes[this._featureIndex*this._header.fieldCount+a]);return S(b)};e._parseGeometry=function(a){var b=
a.getLength();b=a.pos()+b;const f=[],k=[];for(;a.pos()<b&&a.next();)switch(a.tag()){case 2:var h=a.getUInt32();for(h=a.pos()+h;a.pos()<h;)k.push(a.getUInt32());break;case 3:h=a.getUInt32();h=a.pos()+h;f.push(a.getSInt32()+this._tx);f.push(a.getSInt32()+this._ty);this.hasZ&&a.getSInt32();for(this.hasM&&a.getSInt32();a.pos()<h;)f.push(a.getSInt32()),f.push(a.getSInt32()),this.hasZ&&a.getSInt32(),this.hasM&&a.getSInt32();break;default:a.skip()}return new y(k,f)};e._parseGeometryForDisplay=function(a){var b=
a.getLength();const f=a.pos()+b,k=[];b=[];let h=0,d=0;var c=null;let B=0;const U="esriGeometryPolygon"===this.geometryType;for(;a.pos()<f&&a.next();)switch(a.tag()){case 2:c=a.getUInt32();for(c=a.pos()+c;a.pos()<c;){var C=a.getUInt32();k.push(C);h+=C}c=L(2*h).delta;break;case 3:a.getUInt32();C=2+(this.hasZ?1:0)+(this.hasM?1:0);for(const v of k)if(d+C*v>c.length)for(var t=0;t<v;t++)a.getSInt32(),a.getSInt32(),this.hasZ&&a.getSInt32(),this.hasM&&a.getSInt32();else if(U){t=this.getAreaSimplificationThreshold(v,
this._header.vertexCount);var w=2,r=1,q=a.getSInt32(),n=a.getSInt32();c[d++]=q;c[d++]=n;this.hasZ&&a.getSInt32();this.hasM&&a.getSInt32();var l=a.getSInt32(),p=a.getSInt32();this.hasZ&&a.getSInt32();for(this.hasM&&a.getSInt32();w<v;){var x=a.getSInt32();let G=a.getSInt32();this.hasZ&&a.getSInt32();this.hasM&&a.getSInt32();const z=q+l,A=n+p,M=z+x,N=A+G;.5*Math.abs(q*A+z*N+M*n-q*N-z*n-M*A)>=t?(B+=-.5*(z-q)*(A+n),1<r&&F(c[d-2],c[d-1],l,p)?(c[d-2]+=l,c[d-1]+=p):(c[d++]=l,c[d++]=p,r++),q=z,n=A):(x+=l,
G+=p);l=x;p=G;w++}3>r?d-=2*r:(B+=-.5*(q+l-q)*(n+p+n),F(c[d-2],c[d-1],l,p)?(c[d-2]+=l,c[d-1]+=p,b.push(r)):(c[d++]=l,c[d++]=p,b.push(++r)))}else{t=0;w=a.getSInt32();r=a.getSInt32();this.hasZ&&a.getSInt32();this.hasM&&a.getSInt32();c[d++]=w;c[d++]=r;t+=1;for(q=1;q<v;q++)n=a.getSInt32(),l=a.getSInt32(),p=w+n,x=r+l,B+=-.5*(p-w)*(x+r),this.hasZ&&a.getSInt32(),this.hasM&&a.getSInt32(),2<q&&F(c[d-2],c[d-1],n,l)?(c[d-2]+=n,c[d-1]+=l):(c[d++]=n,c[d++]=l,t+=1),w=p,r=x;b.push(t)}break;default:a.skip()}this._cache.area=
B;if(!b.length)return null;if(this._tx||this._ty){a=0;for(const v of b)c[2*a]+=this._tx,c[2*a+1]+=this._ty,a+=v}return new y(b,c)};I._createClass(m,[{key:"geometryType",get:function(){return this._geometryType}},{key:"size",get:function(){return this._header.featureCount}},{key:"hasZ",get:function(){return!1}},{key:"hasM",get:function(){return!1}},{key:"stride",get:function(){return 2+(this.hasZ?1:0)+(this.hasM?1:0)}},{key:"hasFeatures",get:function(){return this._header.hasFeatures}},{key:"hasNext",
get:function(){return this._hasNext}},{key:"exceededTransferLimit",get:function(){return this._header.exceededTransferLimit}}]);return m}(K.FeatureSetReader);H.FeatureSetReaderPBF=D;Object.defineProperties(H,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});