// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../PopupTemplate ../../../intl/messages ../../../intl/substitute ../../../layers/support/fieldUtils ../../../popup/ExpressionInfo ../../../popup/FieldInfo ../../../popup/support/FieldInfoFormat ../../support/clusterUtils ../../../views/2d/layers/support/clusterUtils".split(" "),function(y,B,C,D,r,E,F,G,H,l,I){function t(a){const {fieldName:c,label:e,type:b}=a;a=E.numericTypes.includes(b);a=new G({fieldName:c,label:e,visible:!0,format:a?
{places:"integer"===b||"small-integer"===b?0:2,digitSeparator:!0}:null});"date"===b&&(a.format=new H({dateFormat:"short-date-short-time"}));return a}function n(a,c){return(a=c.getField(a))&&(a.alias||a.name)}function z(a,c,e,b){const {attributeInfo:m,statisticType:f}=c,{field:h,normalizationField:k}=m;c="";let d;"avg"===f?d=k?b.clusters.avgNormFieldSummary:b.clusters.avgFieldSummary:"type"===f&&(d=b.clusters.predominantFieldSummary);d&&(b=m.valueExpression?m.valueExpressionTitle:n(h,a),a=k&&n(k,a),
c=r.substitute(d,{fieldLabel:b||"",normFieldLabel:a||"",fieldValue:"{"+e+"}"}));return c}function u(){u=B._asyncToGenerator(function*(a,c){if(!I.isClusterCompatibleRenderer(c))return null;var e=l.getStatisticInfos(a,c);const b=yield D.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),m=b.clusters.predominantNoneValue;c="unique-value"===c.type?c.uniqueValueInfos:[];const f=[],h=[],k=[];f.push(r.substitute(b.clusters.countSummary,{count:`{${l.clusterCountField}}`}));h.push(t({fieldName:l.clusterCountField,
label:b.clusters.numFeatures,type:"integer"}));for(const p of e){const {statisticType:v,attributeInfo:J}=p;e=l.getClusterField(J,v);{var d=void 0;var g=a;const {attributeInfo:w,statisticType:A}=p,{field:K,normalizationField:x}=w;var q="";"avg"===A?d=x?b.clusters.avgNormFieldLabel:b.clusters.avgFieldLabel:"type"===A&&(d=b.clusters.predominantFieldLabel);d&&(q=w.valueExpression?w.valueExpressionTitle:n(K,g),g=x&&n(x,g),q=r.substitute(d,{fieldLabel:q||"",normFieldLabel:g||""}));d=q}"avg"===v?(f.push(z(a,
p,e,b)),h.push(t({fieldName:e,label:d,type:"double"}))):"type"===v&&(g=`expression/${e}`,f.push(z(a,p,g,b)),k.push(new F({name:e,title:d,returnType:"string",expression:l.getPredominantTypeExpression(c,e,m)})),h.push(t({fieldName:g})))}return new C({fieldInfos:h,expressionInfos:k,content:f.join("\x3cbr/\x3e\x3cbr/\x3e"),title:b.clusters.clusterPopupTitle})});return u.apply(this,arguments)}y.createPopupTemplate=function(a,c){return u.apply(this,arguments)};Object.defineProperties(y,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});