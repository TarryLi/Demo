// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../core/accessorSupport/ensureType ../elements/AttachmentElement ../elements/Element ../elements/FieldElement ../elements/RelationshipElement".split(" "),function(e,m,g,h,k,l){e.buildTypeMaps=function(a){return{typesWithGroup:{base:h,key:"type",typeMap:{attachment:g,field:k,group:a,relationship:l}},typesWithoutGroup:{base:h,key:"type",typeMap:{attachment:g,field:k,relationship:l}}}};e.ensureType=function(a,b,f=!0){return a?a.map(d=>m.ensureOneOfType(f?b.typesWithGroup:b.typesWithoutGroup,
d)):null};e.fromJSON=function(a,b,f=!0){if(!a)return null;const d=f?b.typesWithGroup.typeMap:b.typesWithoutGroup.typeMap;return a.filter(c=>d[c.type]).map(c=>d[c.type].fromJSON(c))};e.toJSON=function(a,b,f=!0){if(!a)return null;const d=f?b.typesWithGroup.typeMap:b.typesWithoutGroup.typeMap;return a.filter(c=>d[c.type]).map(c=>c.toJSON())};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});