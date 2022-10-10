// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../Entity ../GraphObject ../ObjectValue ../Path ../Relationship ./KnowledgeWasmInterface ./WasmQueryWrapperInterfaces ./wasmToGeometryFactories".split(" "),function(c,v,w,x,y,z,A,f,g,k){function r(a){const d=[],h=a.count();for(let b=0;b<h;b++){const e=a.get_value_at(b);d.push(n(e))}return d}function n(a){if(a){if("object"!==typeof a||"getDate"in a)return a;if("geometry_type"in a)switch(a.geometry_type.value){case null:return null;case f.WasmGeometryTypeCodes.ESRI_GEOMETRY_POINT:return k.wasmToPointGeometry(a);
case f.WasmGeometryTypeCodes.ESRI_GEOMETRY_MULTIPOINT:return k.wasmToMultipointGeometry(a);case f.WasmGeometryTypeCodes.ESRI_GEOMETRY_POLYLINE:return k.wasmToPolylineGeometry(a);case f.WasmGeometryTypeCodes.ESRI_GEOMETRY_POLYGON:return k.wasmToPolygonGeometry(a);case f.WasmGeometryTypeCodes.ESRI_GEOMETRY_ENVELOPE:case f.WasmGeometryTypeCodes.ESRI_GEOMETRY_MULTI_PATCH:return l.warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected.  Result interpreted as null"),
null;default:return l.warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else if("object_value_type"in a)switch(a.object_value_type.value){case g.WasmGraphQueryResponseTypeCodes.OBJECT:return t(a);case g.WasmGraphQueryResponseTypeCodes.ENTITY:return p(a);case g.WasmGraphQueryResponseTypeCodes.RELATIONSHIP:return q(a);case g.WasmGraphQueryResponseTypeCodes.PATH:return u(a);case g.WasmGraphQueryResponseTypeCodes.ARRAY:return r(a);default:return l.warnOnce("Unknown graph object type detected!  Result interpreted as null"),
null}else return l.warnOnce("A decoded value came back of a type that is not supported.  Result interpreted as null"),null}else return null}function p(a){return new w(Object.assign({typeName:a.type_name},m(a)))}function m(a){const d={},h=a.key_count();for(let b=0;b<h;b++)d[a.get_key_at(b)]=n(a.get_value_at(b));return{properties:d}}function t(a){return new y(m(a))}function u(a){const d=a.entity_count(),h=a.relationship_count(),b=[];for(let e=0;e<d;e++)b.push(p(a.get_entity_at(e))),e<h&&b.push(q(a.get_relationship_at(e)));
return new z({path:b})}function q(a){return new A(Object.assign({typeName:a.type_name},m(a)))}const l=v.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors");c.decodedWasmObjToQueryResponseObj=n;c.wasmArrayToArray=r;c.wasmToEntity=p;c.wasmToGraphObject=function(a){return new x(m(a))};c.wasmToObjectValue=t;c.wasmToPath=u;c.wasmToRelationship=q;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});