// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./LabelClass"],function(f,l){const m=/\[([^\[\]]+)\]/gi;f.reader=function(g,b,n){return g?g.map(p=>{const a=new l;a.read(p,n);if(a.labelExpression){const c=b.fields||b.layerDefinition&&b.layerDefinition.fields||this.fields;a.labelExpression=a.labelExpression.replace(m,(h,d)=>{a:if(c){h=d.toLowerCase();for(let e=0;e<c.length;e++){const k=c[e].name;if(k.toLowerCase()===h){d=k;break a}}}return`[${d}]`})}return a}):null};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});