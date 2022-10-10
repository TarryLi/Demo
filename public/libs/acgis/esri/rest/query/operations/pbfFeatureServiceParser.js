// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Error ../../../core/maybe ../../../core/pbf ../../../layers/graphics/OptimizedGeometry ./pbfOptimizedFeatureSet".split(" "),function(g,p,q,r,t,u){function k(a){return a>=l.length?null:l[a]}function v(a,b,c){for(c=b.createPointGeometry(c);a.next();)switch(a.tag()){case 3:{var d=a.getUInt32();d=a.pos()+d;let e=0;for(;a.pos()<d;)b.addCoordinatePoint(c,a.getSInt64(),e++);break}default:a.skip()}return c}function w(a,b,c){const d=b.createGeometry(c);for(c=2+(c.hasZ?1:0)+(c.hasM?
1:0);a.next();)switch(a.tag()){case 2:var e=a.getUInt32();e=a.pos()+e;for(var f=0;a.pos()<e;)b.addLength(d,a.getUInt32(),f++);break;case 3:e=a.getUInt32();e=a.pos()+e;f=0;for(b.allocateCoordinates(d);a.pos()<e;)b.addCoordinate(d,a.getSInt64(),f),f++,f===c&&(f=0);break;default:a.skip()}return d}function x(a){const b=new t;let c="esriGeometryPoint";for(;a.next();)switch(a.tag()){case 2:var d=a.getUInt32();for(d=a.pos()+d;a.pos()<d;)b.lengths.push(a.getUInt32());break;case 3:d=a.getUInt32();for(d=a.pos()+
d;a.pos()<d;)b.coords.push(a.getSInt64());break;case 1:c=u.OPTIMIZED_GEOMETRY_TYPES[a.getEnum()];break;default:a.skip()}return{queryGeometry:b,queryGeometryType:c}}function y(a){for(;a.next();)switch(a.tag()){case 1:return a.getString();case 2:return a.getFloat();case 3:return a.getDouble();case 4:return a.getSInt32();case 5:return a.getUInt32();case 6:return a.getInt64();case 7:return a.getUInt64();case 8:return a.getSInt64();case 9:return a.getBool();default:return a.skip(),null}return null}function z(a){const b=
{type:k(0)};for(;a.next();)switch(a.tag()){case 1:b.name=a.getString();break;case 2:b.type=k(a.getEnum());break;case 3:b.alias=a.getString();break;case 4:var c=a.getEnum();c=c>=m.length?null:m[c];b.sqlType=c;break;case 5:a.skip();break;case 6:b.defaultValue=a.getString();break;default:a.skip()}return b}function A(a){const b={};for(;a.next();)switch(a.tag()){case 1:b.name=a.getString();break;case 2:b.isSystemMaintained=a.getBool();break;default:a.skip()}return b}function B(a,b,c,d){const e=b.createFeature(c);
let f=0;for(;a.next();)switch(a.tag()){case 1:{const C=d[f++].name;e.attributes[C]=a.processMessage(y);break}case 2:e.geometry=a.processMessageWithArgs(w,b,c);break;case 4:e.centroid=a.processMessageWithArgs(v,b,c);break;default:a.skip()}return e}function D(a){const b=[1,1,1,1];for(;a.next();)switch(a.tag()){case 1:b[0]=a.getDouble();break;case 2:b[1]=a.getDouble();break;case 4:b[2]=a.getDouble();break;case 3:b[3]=a.getDouble();break;default:a.skip()}return b}function E(a){const b=[0,0,0,0];for(;a.next();)switch(a.tag()){case 1:b[0]=
a.getDouble();break;case 2:b[1]=a.getDouble();break;case 4:b[2]=a.getDouble();break;case 3:b[3]=a.getDouble();break;default:a.skip()}return b}function n(a){const b={originPosition:0>=h.length?null:h[0]};for(;a.next();)switch(a.tag()){case 1:var c=a.getEnum();b.originPosition=c>=h.length?null:h[c];break;case 2:b.scale=a.processMessage(D);break;case 3:b.translate=a.processMessage(E);break;default:a.skip()}return b}function F(a){const b={};for(;a.next();)switch(a.tag()){case 1:b.shapeAreaFieldName=a.getString();
break;case 2:b.shapeLengthFieldName=a.getString();break;case 3:b.units=a.getString();break;default:a.skip()}return b}function G(a,b){for(b=b.createSpatialReference();a.next();)switch(a.tag()){case 1:b.wkid=a.getUInt32();break;case 5:b.wkt=a.getString();break;case 2:b.latestWkid=a.getUInt32();break;case 3:b.vcsWkid=a.getUInt32();break;case 4:b.latestVcsWkid=a.getUInt32();break;default:a.skip()}return b}function H(a,b){const c=b.createFeatureResult();c.geometryType=0>=b.geometryTypes.length?null:b.geometryTypes[0];
let d=!1;for(;a.next();)switch(a.tag()){case 1:c.objectIdFieldName=a.getString();break;case 3:c.globalIdFieldName=a.getString();break;case 4:c.geohashFieldName=a.getString();break;case 5:c.geometryProperties=a.processMessage(F);break;case 7:var e=a.getEnum();c.geometryType=e>=b.geometryTypes.length?null:b.geometryTypes[e];break;case 8:c.spatialReference=a.processMessageWithArgs(G,b);break;case 10:c.hasZ=a.getBool();break;case 11:c.hasM=a.getBool();break;case 12:c.transform=a.processMessage(n);break;
case 9:e=a.getBool();c.exceededTransferLimit=e;break;case 13:b.addField(c,a.processMessage(z));break;case 15:d||(b.prepareFeatures(c),d=!0);b.addFeature(c,a.processMessageWithArgs(B,b,c,c.fields));break;case 2:c.uniqueIdField=a.processMessage(A);break;default:a.skip()}b.finishFeatureResult(c);return c}function I(a,b){const c={};let d=null;for(;a.next();)switch(a.tag()){case 4:d=a.processMessageWithArgs(x);break;case 1:c.featureResult=a.processMessageWithArgs(H,b);break;default:a.skip()}q.isSome(d)&&
c.featureResult&&b.addQueryGeometry(c,d);return c}const l="esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble esriFieldTypeString esriFieldTypeDate esriFieldTypeOID esriFieldTypeGeometry esriFieldTypeBlob esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeGlobalID esriFieldTypeXML".split(" "),m="sqlTypeBigInt sqlTypeBinary sqlTypeBit sqlTypeChar sqlTypeDate sqlTypeDecimal sqlTypeDouble sqlTypeFloat sqlTypeGeometry sqlTypeGUID sqlTypeInteger sqlTypeLongNVarchar sqlTypeLongVarbinary sqlTypeLongVarchar sqlTypeNChar sqlTypeNVarchar sqlTypeOther sqlTypeReal sqlTypeSmallInt sqlTypeSqlXml sqlTypeTime sqlTypeTimestamp sqlTypeTimestamp2 sqlTypeTinyInt sqlTypeVarbinary sqlTypeVarchar".split(" "),
h=["upperLeft","lowerLeft"];g.parseFeatureQuery=function(a,b){try{const c=new r(new Uint8Array(a),new DataView(a));for(a={};c.next();)switch(c.tag()){case 2:a.queryResult=c.processMessageWithArgs(I,b);break;default:c.skip()}return a}catch(c){throw new p("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:c});}};g.parseFieldType=k;g.parseTransform=n;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});