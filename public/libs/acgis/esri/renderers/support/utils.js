// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/arrayUtils ../../core/Logger ../../core/MapUtils ../../intl/date ./numberUtils ../visualVariables/support/ColorStop ../../symbols/support/utils ../../widgets/Legend/support/colorRampUtils ../../widgets/Legend/support/heatmapRampUtils".split(" "),function(m,C,z,x,D,t,p,E,r,F,G){function l(a,d,e){D.getOrCreateMapValue(a,d,()=>[]).push(...e)}function y(){y=C._asyncToGenerator(function*(a){const d=new Map;if("visualVariables"in a&&a.visualVariables){var e=
a.visualVariables.filter(b=>"color"===b.type);for(const b of e){e=b.field||b.valueExpression;const g=(yield F.getRampStops(b)).map(h=>h.color);l(d,e,g)}}if("heatmap"===a.type){var c=G.getHeatmapRampStops(a).map(b=>b.color);l(d,a.field,c)}else if("pie-chart"===a.type){for(const b of a.attributes)l(d,b.field,[b.color]);l(d,null,[null==a?void 0:null==(c=a.othersCategory)?void 0:c.color,r.getColorFromSymbol(a.backgroundFillSymbol,null)])}else if("dot-density"===a.type){for(const b of a.attributes)l(d,
b.field,[b.color]);l(d,null,[a.backgroundColor])}else if("unique-value"===a.type){var f;if("predominance"===(null==(f=a.authoringInfo)?void 0:f.type))for(const b of a.uniqueValueInfos)l(d,b.value.toString(),[r.getColorFromSymbol(b.symbol,null)]);else{c=a.uniqueValueInfos.map(n=>r.getColorFromSymbol(n.symbol,null));const {field:b,field2:g,field3:h,valueExpression:k}=a;(b||k)&&l(d,b||k,c);g&&l(d,g,c);h&&l(d,h,c)}}else"class-breaks"===a.type?(c=a.classBreakInfos.map(b=>r.getColorFromSymbol(b.symbol,
null)),l(d,a.field||a.valueExpression,c)):"simple"===a.type&&l(d,null,[r.getColorFromSymbol(a.symbol,null)]);"defaultSymbol"in a&&a.defaultSymbol&&l(d,null,[r.getColorFromSymbol(a.defaultSymbol,null)]);d.forEach((b,g)=>{b=z.unique(b.filter(Boolean),(h,k)=>JSON.stringify(h)===JSON.stringify(k));d.set(g,b)});return d});return y.apply(this,arguments)}function A(a,d,e){let c="";0===d?c=u.lt+" ":d===e&&(c=u.gt+" ");return c+a}function v(a){let d=a.minValue,e=a.maxValue;const c=a.isFirstBreak?"":u.gt+" ";
a="percent-of-total"===a.normalizationType?u.pct:"";d=null==d?"":p.format(d);e=null==e?"":p.format(e);return c+d+a+" "+u.ld+" "+e+a}function q(a,d){return"normalizationField"in a&&a.normalizationField?{type:"normalized-field",field:a.field,normalizationField:a.normalizationField}:"field"in a&&a.field?{type:"field",field:a.field}:"valueExpression"in a&&a.valueExpression?{type:"expression",expression:a.valueExpression,title:a.valueExpressionTitle,returnType:d}:null}const B=x.getLogger("esri.renderers.support.utils"),
u={lte:"\x3c\x3d",gte:"\x3e\x3d",lt:"\x3c",gt:"\x3e",pct:"%",ld:"\u2013"},H={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},I={millisecond:"long-month-day-year-long-time",second:"long-month-day-year-long-time",minute:"long-month-day-year-short-time",hour:"long-month-day-year-short-time",day:"long-month-day-year",month:"long-month-day-year",year:"year"};x=t.convertDateFormatToIntlOptions("short-date");m.calculateDateFormatInterval=function(a){a=a.map(b=>new Date(b));const d=a.length;
let e=Infinity,c=null;for(let b=0;b<d-1;b++){const g=a[b];let h=Infinity,k=null;for(let n=b+1;n<d;n++){var f=a[n];f=g.getFullYear()!==f.getFullYear()&&"year"||g.getMonth()!==f.getMonth()&&"month"||g.getDate()!==f.getDate()&&"day"||g.getHours()!==f.getHours()&&"hour"||g.getMinutes()!==f.getMinutes()&&"minute"||g.getSeconds()!==f.getSeconds()&&"second"||"millisecond";const w=H[f];w<h&&(h=w,k=f)}h<e&&(e=h,c=k)}return c};m.createClassBreakLabel=v;m.createColorStops=function(a){const {values:d,colors:e,
labelIndexes:c,isDate:f,dateFormatOptions:b}=a;return d.map((g,h)=>{let k=null;if(!c||c.includes(h)){let n;(n=f?t.formatDate(g,b):p.format(g))&&(k=A(n,h,d.length-1))}return new E({value:g,color:e[h],label:k})})};m.createUniqueValueLabel=function(a){const {value:d,domain:e,fieldInfo:c,dateFormatInterval:f}=a;a=String(d);const b=e&&"codedValues"in e&&e.codedValues?e.getName(d):null;b?a=b:"number"===typeof d&&(a=c&&"date"===c.type?t.formatDate(d,f&&t.convertDateFormatToIntlOptions(I[f])):p.format(d));
return a};m.getAttribute=q;m.getAttributes=function(a,d){const e=[];if("class-breaks"===a.type||"heatmap"===a.type)e.push(q(a,"number"));else if("unique-value"===a.type){var c=a.authoringInfo;if(c&&"relationship"===c.type){if(c.field1&&c.field2){var f=c.field2.field;const b=c.field2.normalizationField;e.push(q({field:c.field1.field,normalizationField:c.field1.normalizationField}));e.push(q({field:f,normalizationField:b}))}}else f=a.uniqueValueInfos[0],c=null,f&&f.value&&(f=typeof a.uniqueValueInfos[0].value,
"string"===f||"number"===f)&&(c=f),e.push(q(a,c)),[a.field2,a.field3].forEach(b=>b&&e.push({type:"field",field:b}))}else"attributes"in a&&a.attributes.forEach(b=>e.push(q(b,"number")));(a=d?d(a):"visualVariables"in a?a.visualVariables:null)&&a.forEach(b=>e.push(q(b,"number")));return z.unique(e.filter(Boolean),(b,g)=>"field"===b.type&&"field"===g.type?b.field===g.field:"normalized-field"===b.type&&"normalized-field"===g.type?b.field===g.field&&b.normalizationField===g.normalizationField:"expression"===
b.type&&"expression"===g.type?b.expression===g.expression:!1)};m.getColorsFromRenderer=function(a){return y.apply(this,arguments)};m.setLabelsForClassBreaks=function(a){const d=a.classBreakInfos,e=a.normalizationType;let c=[];if(d&&d.length)if("standard-deviation"===a.classificationMethod)B.warn("setLabelsForClassBreaks","cannot set labels for class breaks generated using 'standard-deviation' method.");else if(a.round){c.push(d[0].minValue);for(const f of d)c.push(f.maxValue);c=p.round(c);d.forEach((f,
b)=>{f.label=v({minValue:0===b?c[0]:c[b],maxValue:c[b+1],isFirstBreak:0===b,normalizationType:e})})}else d.forEach((f,b)=>{f.label=v({minValue:f.minValue,maxValue:f.maxValue,isFirstBreak:0===b,normalizationType:e})})};m.timelineDateFormatOptions=x;m.updateClassBreak=function(a){if("standard-deviation"===a.classificationMethod)B.warn("updateClassBreak","cannot update labels for class breaks generated using 'standard-deviation' method.");else{var d=a.classBreaks,e=a.change,c=e.index;e=e.value;var f=
d.length,b=-1,g=-1;0===c?b=c:c===f?g=c-1:(g=c-1,b=c);a=a.normalizationType;c=null;-1<b&&b<f&&(c=d[b],c.minValue=e,c.label=v({minValue:c.minValue,maxValue:c.maxValue,isFirstBreak:0===b,normalizationType:a}));-1<g&&g<f&&(c=d[g],c.maxValue=e,c.label=v({minValue:c.minValue,maxValue:c.maxValue,isFirstBreak:0===g,normalizationType:a}))}};m.updateColorStops=function(a){const {stops:d,changes:e,isDate:c,dateFormatOptions:f}=a,b=d.map(h=>h.value);a=[];for(const h of e)a.push(h.index),b[h.index]=h.value;const g=
p.round(b,{indexes:a});d.forEach((h,k)=>{h.value=b[k];if(null!=h.label){let n,w=null;(n=c?t.formatDate(g[k],f):p.format(g[k]))&&(w=A(n,k,d.length-1));h.label=w}})};Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});