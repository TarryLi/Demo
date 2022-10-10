// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../Color","./support/colors","./support/symbologyUtils","./support/utils"],function(q,g,T,C,H){function O(a){const b=a.theme,d=C.getRawSchemes({basemap:a.basemap,basemapTheme:a.basemapTheme,theme:I.get(b)});if(d){var c=d.schemesInfo,e=c.common,{basemapId:p,basemapTheme:h}=d;!a.worldScale||"centered-on"!==b&&"extremes"!==b||(c={...c},c.secondary=c.secondary.slice(0),c.secondary.push(c.primary),c.primary=c.primaryGray,delete c.primaryGray,c.secondary=c.secondary.filter(m=>{const D=
m.includes("gray"),F=U.includes(m);return m!==c.primary&&D&&!F}));var f={...a,basemap:p};return{primaryScheme:J(f,c.primary,e),secondarySchemes:c.secondary.map(m=>J(f,m,e)).filter(Boolean),basemapId:p,basemapTheme:h}}}function P(a){a.colors.reverse();a.colorsForClassBreaks.forEach(b=>{b.colors.reverse()});return a}function R(a,b){let d,c;if(c=H.hasIdenticalColors(a.colors,b))d=0<c?a:P(a);else{let e;a.colorsForClassBreaks.some(p=>{p.numClasses===b.length&&(e=p.colors);return!!e});e&&(c=H.hasIdenticalColors(e,
b))&&(d=0<c?a:P(a))}return d}function J(a,b,d){const c=T[b];if(c){var e=a.theme,p="mesh"!==a.geometryType&&a.worldScale?a.view:null,h=d.fillOpacity;null==h&&S.includes(b)&&(h=.8);var f="below"===a.theme,m=f?[...c.stops].reverse():c.stops,D=[];for(const F in c)if("stops"!==F&&"name"!==F&&"tags"!==F){const Q=+F;D.push({numClasses:Q,colors:f?[...c[Q]].reverse():c[Q]})}f=S.includes(b)?"#ffffff":"#aaaaaa";b=e+"/"+a.basemap+"/"+b;h=h||1;switch(a.geometryType){case "point":case "multipoint":return V({id:b,
name:c.name,tags:c.tags,theme:e,opacity:h,colors:m,colorsForClassBreaks:D,noDataColor:f,outline:d.outline,size:d.size},p);case "polyline":return W({id:b,name:c.name,tags:c.tags,theme:e,opacity:h,colors:m,colorsForClassBreaks:D,noDataColor:f,width:d.width},p);case "polygon":return X({id:b,name:c.name,tags:c.tags,theme:e,opacity:h,colors:m,colorsForClassBreaks:D,noDataColor:f,outline:d.outline,size:"12px"},p);case "mesh":return Y({id:b,name:c.name,tags:c.tags,theme:e,opacity:h,colors:m,colorsForClassBreaks:D,
noDataColor:f})}}}function V(a,b){return{id:a.id,name:a.name,tags:[...a.tags],theme:a.theme,colors:a.colors.map(d=>new g(d)),colorsForClassBreaks:K(a.colorsForClassBreaks),noDataColor:new g(a.noDataColor),outline:{color:new g(a.outline.color),width:a.outline.width},size:b&&"3d"===b.type?H.toWorldScale(a.size,b):a.size,opacity:a.opacity}}function W(a,b){return{id:a.id,name:a.name,tags:[...a.tags],theme:a.theme,colors:a.colors.map(d=>new g(d)),colorsForClassBreaks:K(a.colorsForClassBreaks),noDataColor:new g(a.noDataColor),
width:b&&"3d"===b.type?H.toWorldScale(a.width,b):a.width,opacity:a.opacity}}function X(a,b){return{id:a.id,name:a.name,tags:[...a.tags],theme:a.theme,colors:a.colors.map(d=>new g(d)),colorsForClassBreaks:K(a.colorsForClassBreaks),noDataColor:new g(a.noDataColor),outline:{color:new g(a.outline.color),width:a.outline.width},opacity:a.opacity,size:b&&"3d"===b.type?H.toWorldScale(a.size,b):a.size}}function Y(a){return{id:a.id,name:a.name,tags:[...a.tags],theme:a.theme,colors:a.colors.map(b=>new g(b)),
colorsForClassBreaks:K(a.colorsForClassBreaks),noDataColor:new g(a.noDataColor),opacity:a.opacity}}function K(a){return a.map(b=>({numClasses:b.numClasses,colors:b.colors.map(d=>new g(d))}))}var z={color:[153,153,153,.25],width:"0.5px"},k={color:[194,194,194,.25],width:"0.5px"},n={outline:k,fillOpacity:.8,width:"2px",size:"8px"},L={outline:z,fillOpacity:.6,width:"2px",size:"8px"},M={outline:{color:[153,153,153,.25],width:"0.5px"},fillOpacity:.8,width:"2px",size:"8px"},G=["highlight-red-gray-bright",
"highlight-purple-gray-bright","highlight-blue-bright-gray-bright","highlight-green-gray-bright","highlight-yellow-gray-bright"];const A=["highlight-pink-gray-dark","highlight-purple-gray-dark","highlight-blue-bright-gray-dark","highlight-green-gray-dark","highlight-brown-gray-dark"],N=["extremes-red-gray-bright","extremes-purple-gray-bright","extremes-blue-bright-gray-bright","extremes-green-gray-bright","extremes-yellow-gray-bright"],B=["extremes-pink-gray-dark","extremes-purple-gray-dark","extremes-blue-bright-gray-dark",
"extremes-green-gray-dark","extremes-brown-gray-dark"],S="highlight-orange-gray highlight-bluegreen-gray highlight-purple-gray highlight-pink-gray highlight-blue-gray highlight-red-gray highlight-orange-gray-dark highlight-blue-gray-dark highlight-orange-gray-bright highlight-blue-gray-bright extremes-orange-gray extremes-bluegreen-gray extremes-purple-gray extremes-pink-gray extremes-blue-gray extremes-red-gray extremes-orange-gray-dark extremes-blue-gray-dark extremes-orange-gray-bright extremes-blue-gray-bright".split(" ").concat(G).concat(A).concat(N).concat(B),
r="seq-single-blues seq-single-greens seq-single-grays seq-single-oranges seq-single-purples seq-single-reds seq-multi-bugn seq-multi-bupu seq-multi-gnbu seq-multi-orrd seq-multi-pubu seq-multi-pubugn seq-multi-purd seq-multi-rdpu seq-multi-ylgn seq-multi-ylgnbu seq-multi-ylorbr seq-multi-ylorrd".split(" "),v="div-brbg div-piyg div-prgn div-puor div-rdbu div-rdgy div-rdylbu div-rdylgn div-spectral".split(" "),t="seq-blue-bright-1 seq-green-bright-1 seq-green-bright-2 seq-green-bright-3 seq-blue-bright-2 seq-blue-bright-3 seq-blue-bright-4 seq-blue-bright-5 seq-red-purple-bright seq-red-magenta-bright seq-red-bright-3 seq-red-bright-4 seq-yellow-bright-1 seq-yellow-bright-2 seq-yellow-bright-3 seq-yellow-bright-4 seq-yellow-gray-bright seq-green-gray-bright seq-blue-gray-bright seq-red-gray-bright seq-gray-redbright seq-gray-green-bright seq-gray-blue-bright seq-gray-purple-bright seq-plaingray-bright seq-greengray-bright seq-coolgray-bright seq-warmgray-bright seq-yellow-green-combo-bright seq-cyan-blue-combo-bright seq-magenta-purple-combo-bright".split(" "),
w="div-yellow-orange-purple-bright div-yellow-blue-bright-1 div-yellow-blue-bright-2 div-yellow-blue-bright div-yellow-blue-bright-3 div-yellow-purple-bright-1 div-yellow-purple-bright-2 div-yellow-red-bright-1 div-yellow-red-bright-2 div-yellow-gray-bright-1 div-yellow-gray-bright-2 div-yellow-gray-bright-3 div-purple-green-bright-1 div-purple-green-bright-2 div-pink-yellow-bright-1 div-pink-yellow-bright-2 div-red-blue-bright-1 div-red-blue-bright-2 div-orange-blue-bright-3 div-orange-blue-bright-4 div-red-purple-bright div-red-gray-bright-1 div-red-gray-bright-2 div-red-gray-bright-3 div-teal-yellow-bright-1 div-teal-yellow-bright-2 div-teal-orange-bright div-green-red-bright div-green-magenta-bright div-green-purple-bright-1 div-green-purple-bright-2 div-green-blue-bright-1 div-green-blue-bright-2 div-green-gray-bright-1 div-green-gray-bright-2 div-green-gray-bright-3 div-blue-green-bright-1 div-blue-yellow-bright-2 div-blue-lightorange-bright div-blue-orange-bright-1 div-blue-orange-bright-2 div-blue-red-bright-1 div-blue-red-bright-2 div-blue-tan-bright div-blue-gray-bright-1 div-blue-gray-bright-2 div-blue-gray-bright-3".split(" "),
x="div-blue-yellow-brown div-purple-yellow-brown div-purple-beige-green div-teal-yellow-brown div-yellow-magenta-light div-green-yellow-blue div-brown-blue div-red-green-cyan div-yellow-slate-teal div-blue-green-orange div-purple-orange div-purple-green div-teal-orange div-red-purple-blue div-yellow-magenta div-green-blue div-blue-brown div-red-cyan div-yellow-teal".split(" "),u="seq-magenta seq-red seq-orange seq-yellow seq-yellowgreen seq-green seq-turquoise seq-royal seq-blueberry seq-purple seq-brown seq-blue seq-red-darkblue seq-purple-darkgreen seq-blue-darkgreen seq-green-darkpurple seq-blue-gray seq-magenta-light seq-red-light seq-orange-light seq-mustard-light seq-yellowgreen-light seq-green-light seq-aqua-light seq-cyan-light seq-blue-light seq-purple-light seq-brown-light seq-steel-light seq-brown-palegreen seq-purple-pink-yellow seq-blue-green-yellow seq-green-avocado-lightpurple seq-turquoise-lightgreen seq-red-brown-white seq-purple-pink-white seq-blue-green-white seq-green-avocado-white seq-turquoise-lightgreen-white seq-mentone-beach seq-snowy-mountain seq-snow-cactus seq-subdued-red-yellow seq-subdued-purple-blue seq-subdued-blue-cyan seq-subdued-green-yellow seq-subdued-green seq-subdued-brown-tan seq-subdued-gray-green seq-subdued-green-tan seq-subdued-blue-purple seq-subdued-pink-brown seq-subdued-green-pink seq-lines-blue-orange seq-lines-purple-brown seq-lines-green-brown seq-lines-yellow-blue seq-esribrand-red seq-esribrand-red-orange seq-esribrand-orange seq-esribrand-orangeyellow seq-esribrand-yellow seq-esribrand-yellowgreen seq-esribrand-green seq-esribrand-greenblue seq-esribrand-blue seq-esribrand-violet seq-esribrand-violetred seq-esribrand-brown seq-esribrand-gray".split(" "),
y="div-green-purple div-blue-red div-green-magenta div-blue-orange div-blue-yellow div-purple-yellow div-magenta-yellow div-purple-green-dark div-green-brown div-green-gray div-blue-white div-red-steel div-aqua-darkgray-red div-green-purple-light div-blue-red-light div-green-purple-light-2 div-cyan-blue-light div-blue-yellow-light div-purple-yellow-light div-magenta-yellow-light div-purple-green-light div-blue-blue div-green-green div-blue-green-light div-red-green-light div-blue-yellow-brown-light div-blue-white-brown div-subdued-red-green div-subdued-red-purple div-subdued-brown-gray div-subdued-sepia-gray div-subdued-blue-gray div-subdued-tan-blue div-subdued-green-blue div-subdued-green-pink div-subdued-green-brown div-lines-blue-brown div-lines-green-purple div-lines-red-gray div-lines-green-orange div-lines-yellow-blue div-esribrand-red-bluegreen div-esribrand-red-blue div-esribrand-red-violet div-esribrand-red-violetred div-esribrand-red-gray div-esribrand-redorange-greenblue div-esribrand-redorange-blue div-esribrand-redorange-violet div-esribrand-redorange-violetred div-esribrand-redorange-gray div-esribrand-orange-greenblue div-esribrand-orange-blue div-esribrand-orange-violet div-esribrand-orange-violetred div-esribrand-orange-gray div-esribrand-orangeyellow-greenblue div-esribrand-orangeyellow-blue div-esribrand-orangeyellow-violet div-esribrand-orangeyellow-violetred div-esribrand-orangeyellow-gray div-esribrand-yellow-green-blue div-esribrand-yellow-blue div-esribrand-yellow-violet div-esribrand-yellow-violetred div-esribrand-yellow-brown div-esribrand-yellow-gray div-esribrand-yellowgreen-greenblue div-esribrand-yellowgreen-blue div-esribrand-yellowgreen-violet div-esribrand-yellowgreen-violetred div-esribrand-yellowgreen-brown div-esribrand-yellowgreen-gray div-esribrand-green-blue div-esribrand-green-violet div-esribrand-green-violetred div-esribrand-green-gray div-esribrand-greenblue-blue div-esribrand-greenblue-violetred div-esribrand-greenblue-brown div-esribrand-greenblue-gray div-esribrand-blue-brown div-esribrand-blue-gray div-esribrand-violet-brown esribrand-violet-gray div-esribrand-violetred-gray div-esribrand-brown-gray".split(" "),
E={streets:["streets","streets-vector","streets-relief-vector","streets-navigation-vector"],light:["gray","gray-vector"],topo:["topo","topo-vector"],terrain:["terrain"],"national-geographic":["national-geographic"],oceans:["oceans"],osm:["osm"],satellite:["satellite"],hybrid:["hybrid"],dark:["dark-gray","dark-gray-vector","streets-night-vector"]},U=["extremesdiv-orange-gray-blue","extremesdiv-yellow-gray-purple","extremesdiv-red-gray-blue","extremesdiv-green-gray-purple"];var l=["point-cloud-elevation-scheme",
"point-cloud-intensity-scheme"];l={streets:{common:n,primary:"seq-yellow-red-purple",secondary:"seq-yellow-orange-red seq-yellow-pink-purple seq-yellow-purple-blue seq-yellow-green-blue seq-teal-lightgreen-bright seq-green-lightgray-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(u).concat(t).concat(r).concat(l)},
light:{common:M,primary:"seq-single-blues",secondary:"seq-yellow-red-purple seq-orange-red-light seq-yellow-orange-red seq-yellow-pink-purple seq-yellow-purple-blue seq-teal-lightgreen-bright seq-green-lightgray-bright seq-red-lightgray-bright seq-blue-lightgray-bright seq-orange-lightgray-bright seq-blue-red-yellow-bright seq-blue-tan-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-blues-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(u).concat(t).concat(r).concat(l).filter(a=>
"seq-single-blues"!==a)},topo:{common:n,primary:"seq-yellow-green-blue",secondary:"seq-yellow-pink-purple seq-yellow-purple-blue seq-yellow-red-purple seq-yellow-orange-red seq-teal-lightgreen-bright seq-green-lightgray-bright seq-blue-lightgray-bright seq-orange-lightgray-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(u).concat(t).concat(r).concat(l)},
terrain:{common:n,primary:"seq-pink-red",secondary:"seq-yellow-pink-purple seq-yellow-red-purple seq-yellow-orange-red seq-orange-red-light seq-teal-lightgreen-bright seq-green-lightgray-bright seq-red-lightgray-bright seq-blue-lightgray-bright seq-orange-lightgray-bright seq-blue-red-yellow-bright seq-blue-tan-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-blues-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(u).concat(t).concat(r).concat(l)},
"national-geographic":{common:n,primary:"seq-yellow-orange-red",secondary:"seq-yellow-red-purple seq-yellow-pink-purple seq-yellow-purple-blue seq-yellow-green-blue seq-teal-lightgreen-bright seq-blue-lightgray-bright seq-reds-bright seq-purples-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(u).concat(t).concat(r).concat(l)},
oceans:{common:n,primary:"seq-yellow-green-blue",secondary:"seq-yellow-red-purple seq-yellow-orange-red seq-yellow-pink-purple seq-yellow-purple-blue seq-teal-lightgreen-bright seq-green-lightgray-bright seq-red-lightgray-bright seq-blue-lightgray-bright seq-blue-red-yellow-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(u).concat(t).concat(r).concat(l)},
osm:{common:n,primary:"seq-red-blue-green",secondary:"seq-yellow-pink-purple seq-yellow-red-purple seq-yellow-purple-blue seq-teal-lightgreen-bright seq-blue-lightgray-bright seq-blue-red-yellow-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(u).concat(t).concat(r).concat(l)},
satellite:{common:L,primary:"seq-orange-red-dark",secondary:"seq-yellow-green-blue seq-red-blue-green seq-yellow-purple-blue seq-teal-lightgreen-bright seq-blue-lightgray-bright seq-gray-lightgreen-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-blues-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright seq-lightmagenta-darkgray-bright seq-lightblue-darkgray-bright".split(" ").concat(u).concat(t).concat(r).concat(l)},
hybrid:{common:L,primary:"seq-orange-red-dark",secondary:"seq-yellow-green-blue seq-red-blue-green seq-yellow-purple-blue seq-teal-lightgreen-bright seq-blue-lightgray-bright seq-gray-lightgreen-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-blues-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright seq-lightmagenta-darkgray-bright seq-lightblue-darkgray-bright".split(" ").concat(u).concat(t).concat(r).concat(l)},
dark:{common:M,primary:"seq-blue-gray-bright",secondary:"seq-blue-lightgray-bright seq-gray-lightgreen-bright seq-reds-bright seq-purples-bright seq-blues-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-teal-lightgreen-bright seq-lightred-darkgray-bright seq-lightmagenta-darkgray-bright seq-lightblue-darkgray-bright".split(" ").concat(u).concat(t).concat(r).concat(l).filter(a=>
"seq-blue-gray-bright"!==a)}};n={streets:{common:n,primary:"div-bluegreen-yellow-orange",secondary:"div-orange-yellow-blue-light div-green-yellow-redpurple div-green-yellow-orange div-green-gray-bright div-red-blue-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightred-gray-bright".split(" ").concat(y).concat(w).concat(x).concat(v)},light:{common:M,primary:"div-rdbu",
secondary:"div-bluegreen-orange div-orange-purple div-bluegreen-purple div-orange-pink div-blue-yellow-red-bright div-green-gray-bright div-red-green-bright div-red-blue-bright div-orange-gray-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-blue-green-bright div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(y).concat(w).concat(x).concat(v)},
topo:{common:n,primary:"div-orange-pink",secondary:"div-redpurple-blue div-orange-blue div-green-pink div-blue-yellow-red-bright div-green-gray-bright div-red-green-bright div-red-blue-bright div-orange-gray-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-blue-green-bright div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(y).concat(w).concat(x).concat(v)},
terrain:{common:n,primary:"div-bluegreen-orange",secondary:"div-bluegreen-redpurple div-green-redpurple div-green-orange div-blue-yellow-red-bright div-green-gray-bright div-red-blue-bright div-orange-gray-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-blue-green-bright div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(y).concat(w).concat(x).concat(v)},
"national-geographic":{common:n,primary:"div-orange-yellow-blue-light",secondary:"div-bluegreen-yellow-orange div-green-yellow-redpurple div-red-green-bright div-red-blue-bright div-orange-gray-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-blue-green-bright div-purple-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightred-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(y).concat(w).concat(x).concat(v)},oceans:{common:n,
primary:"div-red-yellow-pink",secondary:"div-blue-green div-bluegreen-yellow-redpurple div-bluegreen-yellow-orange div-blue-yellow-red-bright div-green-gray-bright div-red-green-bright div-red-blue-bright div-orange-gray-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-blue-green-bright div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(y).concat(w).concat(x).concat(v)},
osm:{common:n,primary:"div-bluegreen-pink",secondary:"div-bluegreen-redpurple div-bluegreen-orange div-orange-pink div-green-gray-bright div-red-blue-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-blue-green-bright div-purple-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightred-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(y).concat(w).concat(x).concat(v)},satellite:{common:L,primary:"div-blue-green-bright",
secondary:"div-red-yellow-purple div-orange-yellow-pink div-orange-yellow-blue-light div-green-gray-bright div-red-green-bright div-red-blue-bright div-orange-gray-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-orange-yellow-blue-dark div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-lightmagenta-gray-bright div-yellow-green-bright div-lightblue-yellow-bright div-green-darkgray-bright".split(" ").concat(y).concat(w).concat(x).concat(v)},
hybrid:{common:L,primary:"div-blue-green-bright",secondary:"div-red-yellow-purple div-orange-yellow-pink div-orange-yellow-blue-light div-green-gray-bright div-red-green-bright div-red-blue-bright div-orange-gray-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-orange-yellow-blue-dark div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-lightmagenta-gray-bright div-yellow-green-bright div-lightblue-yellow-bright div-green-darkgray-bright".split(" ").concat(y).concat(w).concat(x).concat(v)},
dark:{common:M,primary:"div-blue-red-bright-1",secondary:"div-blue-green-bright div-yellow-gray-purple div-lightblue-yellow-bright div-red-gray-blue div-green-gray-purple div-orange-gray-blue div-green-gray-bright div-red-green-bright div-red-blue-bright div-orange-gray-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-green-teal-bright div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-lightmagenta-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(y).concat(w).concat(x).concat(v)}};
G={streets:{common:{outline:k,width:"2px",size:"8px"},primary:"highlight-orange",primaryGray:"highlight-orange-gray",secondary:["highlight-bluegreen","highlight-orange-gray","highlight-bluegreen-gray"].concat(A)},light:{common:{outline:k,width:"2px",size:"8px"},primary:"highlight-orange",primaryGray:"highlight-orange-gray",secondary:["highlight-purple","highlight-orange-gray","highlight-purple-gray"].concat(A)},topo:{common:{outline:k,width:"2px",size:"8px"},primary:"highlight-orange",primaryGray:"highlight-orange-gray",
secondary:["highlight-pink","highlight-orange-gray","highlight-pink-gray"].concat(A)},terrain:{common:{outline:k,width:"2px",size:"8px"},primary:"highlight-orange",primaryGray:"highlight-orange-gray",secondary:["highlight-bluegreen","highlight-orange-gray","highlight-bluegreen-gray"].concat(A)},"national-geographic":{common:{outline:k,width:"2px",size:"8px"},primary:"highlight-orange",primaryGray:"highlight-orange-gray",secondary:["highlight-blue","highlight-orange-gray","highlight-blue-gray"].concat(A)},
oceans:{common:{outline:k,width:"2px",size:"8px"},primary:"highlight-red",primaryGray:"highlight-red-gray",secondary:["highlight-pink","highlight-red-gray","highlight-pink-gray"].concat(A)},osm:{common:{outline:k,width:"2px",size:"8px"},primary:"highlight-pink",primaryGray:"highlight-pink-gray",secondary:["highlight-bluegreen","highlight-pink-gray","highlight-bluegreen-gray"].concat(A)},satellite:{common:{outline:z,width:"2px",size:"8px"},primary:"highlight-orange-dark",primaryGray:"highlight-orange-gray-dark",
secondary:["highlight-blue-dark","highlight-orange-gray-dark","highlight-blue-gray-dark"].concat(G)},hybrid:{common:{outline:z,width:"2px",size:"8px"},primary:"highlight-orange-dark",primaryGray:"highlight-orange-gray-dark",secondary:["highlight-blue-dark","highlight-orange-gray-dark","highlight-blue-gray-dark"].concat(G)},dark:{common:{outline:z,width:"2px",size:"8px"},primary:"highlight-orange-bright",primaryGray:"highlight-orange-gray-bright",secondary:["highlight-blue-bright","highlight-orange-gray-bright",
"highlight-blue-gray-bright"].concat(G)}};z={streets:{common:{outline:k,width:"2px",size:"8px"},primary:"extremesdiv-bluegreen-yellow-orange",primaryGray:"extremes-bluegreen-gray",secondary:"extremesdiv-orange-yellow-blue-light extremesdiv-green-yellow-redpurple extremesdiv-green-yellow-orange extremes-orange extremes-bluegreen extremes-orange-gray extremes-bluegreen-gray".split(" ").concat(B)},light:{common:{outline:k,width:"2px",size:"8px"},primary:"extremesdiv-orange-purple",primaryGray:"extremes-orange-gray",
secondary:"extremesdiv-bluegreen-purple extremesdiv-bluegreen-orange extremesdiv-orange-pink extremes-orange extremes-purple extremes-orange-gray extremes-purple-gray".split(" ").concat(B)},topo:{common:{outline:k,width:"2px",size:"8px"},primary:"extremesdiv-orange-pink",primaryGray:"extremes-orange-gray",secondary:"extremesdiv-redpurple-blue extremesdiv-orange-blue extremesdiv-green-pink extremes-orange extremes-pink extremes-orange-gray extremes-pink-gray".split(" ").concat(B)},terrain:{common:{outline:k,
width:"2px",size:"8px"},primary:"extremesdiv-bluegreen-orange",primaryGray:"extremes-bluegreen-gray",secondary:"extremesdiv-bluegreen-redpurple extremesdiv-green-redpurple extremesdiv-green-orange extremes-orange extremes-bluegreen extremes-orange-gray extremes-bluegreen-gray".split(" ").concat(B)},"national-geographic":{common:{outline:k,width:"2px",size:"8px"},primary:"extremesdiv-orange-yellow-blue-light",primaryGray:"extremes-orange-gray",secondary:"extremesdiv-bluegreen-yellow-orange extremesdiv-green-yellow-redpurple extremes-orange extremes-blue extremes-orange-gray extremes-blue-gray".split(" ").concat(B)},
oceans:{common:{outline:k,width:"2px",size:"8px"},primary:"extremesdiv-red-yellow-pink",primaryGray:"extremes-red-gray",secondary:"extremesdiv-blue-green extremesdiv-bluegreen-yellow-redpurple extremesdiv-bluegreen-yellow-orange extremes-red extremes-pink extremes-red-gray extremes-pink-gray".split(" ").concat(B)},osm:{common:{outline:k,width:"2px",size:"8px"},primary:"extremesdiv-bluegreen-pink",primaryGray:"extremes-bluegreen-gray",secondary:"extremesdiv-bluegreen-redpurple extremesdiv-bluegreen-orange extremesdiv-orange-pink extremes-pink extremes-bluegreen extremes-pink-gray extremes-bluegreen-gray".split(" ").concat(B)},
satellite:{common:{outline:z,width:"2px",size:"8px"},primary:"extremesdiv-orange-yellow-blue-dark",primaryGray:"extremes-orange-gray-dark",secondary:"extremesdiv-red-yellow-purple extremesdiv-orange-yellow-pink extremesdiv-orange-yellow-blue-light extremes-orange-dark extremes-blue-dark extremes-orange-gray-dark extremes-blue-gray-dark".split(" ").concat(N)},hybrid:{common:{outline:z,width:"2px",size:"8px"},primary:"extremesdiv-orange-yellow-blue-dark",primaryGray:"extremes-orange-gray-dark",secondary:"extremesdiv-red-yellow-purple extremesdiv-orange-yellow-pink extremesdiv-orange-yellow-blue-light extremes-orange-dark extremes-blue-dark extremes-orange-gray-dark extremes-blue-gray-dark".split(" ").concat(N)},
dark:{common:{outline:z,width:"2px",size:"8px"},primary:"extremesdiv-orange-gray-blue",primaryGray:"extremes-orange-gray-bright",secondary:"extremesdiv-yellow-gray-purple extremesdiv-red-gray-blue extremesdiv-green-gray-purple extremes-orange-bright extremes-blue-bright extremes-orange-gray-bright extremes-blue-gray-bright".split(" ").concat(N)}};const I=C.createThemes({themeDictionary:{"high-to-low":{name:"high-to-low",label:"TODO",description:"TODO",basemapGroups:E,schemes:{default:l}},"above-and-below":{name:"above-and-below",
label:"TODO",description:"TODO",basemapGroups:E,schemes:{default:n}},"centered-on":{name:"centered-on",label:"TODO",description:"TODO",basemapGroups:E,schemes:{default:G}},extremes:{name:"extremes",label:"TODO",description:"TODO",basemapGroups:E,schemes:{default:z}},above:{name:"above",label:"TODO",description:"TODO",basemapGroups:E,schemes:{default:l}},below:{name:"below",label:"TODO",description:"TODO",basemapGroups:E,schemes:{default:l}},"90-10":{name:"90-10",label:"TODO",description:"TODO",basemapGroups:E,
schemes:{default:l}}}});q.cloneScheme=function(a){if(a)return a={...a},a.colors=a.colors.map(b=>new g(b)),a.tags=[...a.tags],a.colorsForClassBreaks=a.colorsForClassBreaks.map(b=>({numClasses:b.numClasses,colors:b.colors.map(d=>new g(d))})),a.noDataColor&&(a.noDataColor=new g(a.noDataColor)),"outline"in a&&a.outline&&(a.outline={color:a.outline.color&&new g(a.outline.color),width:a.outline.width}),a};q.flipColors=P;q.getMatchingSchemes=function(a){const b=a.theme,d=a.colors,c=I.get(b).supportedBasemaps,
e=[],p={theme:b,basemap:null,geometryType:a.geometryType,worldScale:a.worldScale,view:a.view};c.forEach(h=>{const f=C.getRawSchemes({basemap:h,theme:I.get(b)}).schemesInfo;p.basemap=h;f&&((h=R(J(p,f.primary,f.common),d))&&e.push(h),f.secondary.forEach(m=>{(m=R(J(p,m,f.common),d))&&e.push(m)}))});return e};q.getSchemeById=function(a){let b,d,c;var e=a.id;e&&(e=e.split("/"))&&(b=e[0],d=e[1],c=e[2]);if(e=C.getRawSchemes({basemap:d,theme:I.get(b)}))return{schemesInfo:e}=e,J({theme:b,basemap:d,geometryType:a.geometryType,
worldScale:a.worldScale,view:a.view},c,e.common)};q.getSchemeByName=function(a){return C.filterSchemesByName(a.name,O(a))};q.getSchemes=O;q.getSchemesByTag=function(a){return C.filterSchemesByTag(a.includedTags,a.excludedTags,O(a))};q.getThemes=function(a){return C.getThemesforBasemap(I,a)};q.seqColorSets2019=t;q.seqColorSets2021=u;q.seqColorSetsFromPortal=r;Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});