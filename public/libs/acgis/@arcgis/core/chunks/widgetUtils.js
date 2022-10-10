/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{A as t}from"./ArrayPool.js";import{m as e}from"./handleUtils.js";import"../core/lang.js";import{L as i}from"./Logger.js";var r,o,n=Function.prototype,a=Object.prototype,s=n.toString,l=a.hasOwnProperty,c=s.call(Object),u=a.toString,d=(r=Object.getPrototypeOf,o=Object,function(t){return r(o(t))}),g={exports:{}},p={},f={exports:{}},h={};var m=/javascript\s*\:/gim;h.whiteList={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1},h.getDefaultWhiteList=function(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}},h.onAttr=function(t,e,i){},h.onIgnoreAttr=function(t,e,i){},h.safeAttrValue=function(t,e){return m.test(e)?"":e};var b=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},v=h,y=function(t,e){var i;";"!==(i=t,t=String.prototype.trimRight?i.trimRight():i.replace(/(\s*$)/g,""))[t.length-1]&&(t+=";");var r=t.length,o=!1,n=0,a=0,s="";function l(){if(!o){var i=b(t.slice(n,a)),r=i.indexOf(":");if(-1!==r){var l=b(i.slice(0,r)),c=b(i.slice(r+1));if(l){var u=e(n,s.length,l,c,i);u&&(s+=u+"; ")}}}n=a+1}for(;a<r;a++){var c=t[a];if("/"===c&&"*"===t[a+1]){var u=t.indexOf("*/",a+2);if(-1===u)break;n=(a=u+1)+1,o=!1}else"("===c?o=!0:")"===c?o=!1:";"===c?o||l():"\n"===c&&l()}return b(s)};function w(t){return null==t}function x(t){(t=function(t){var e={};for(var i in t)e[i]=t[i];return e}(t||{})).whiteList=t.whiteList||v.whiteList,t.onAttr=t.onAttr||v.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||v.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||v.safeAttrValue,this.options=t}x.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,i=e.whiteList,r=e.onAttr,o=e.onIgnoreAttr,n=e.safeAttrValue;return y(t,(function(t,e,a,s,l){var c=i[a],u=!1;if(!0===c?u=c:"function"==typeof c?u=c(s):c instanceof RegExp&&(u=c.test(s)),!0!==u&&(u=!1),s=n(a,s)){var d,g={position:e,sourcePosition:t,source:l,isWhite:u};return u?w(d=r(a,s,g))?a+":"+s:d:w(d=o(a,s,g))?void 0:d}}))};var k=x;!function(t,e){var i=h,r=k;for(var o in(e=t.exports=function(t,e){return new r(e).process(t)}).FilterCSS=r,i)e[o]=i[o]}(f,f.exports);var A={indexOf:function(t,e){var i,r;if(Array.prototype.indexOf)return t.indexOf(e);for(i=0,r=t.length;i<r;i++)if(t[i]===e)return i;return-1},forEach:function(t,e,i){var r,o;if(Array.prototype.forEach)return t.forEach(e,i);for(r=0,o=t.length;r<o;r++)e.call(i,t[r],r,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1}},T=f.exports.FilterCSS,L=f.exports.getDefaultWhiteList,j=A,O=new T;function I(t){return t.replace(z,"&lt;").replace(S,"&gt;")}var z=/</g,S=/>/g,C=/"/g,E=/&quot;/g,V=/&#([a-zA-Z0-9]*);?/gim,F=/&colon;?/gim,W=/&newline;?/gim,q=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,B=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,P=/u\s*r\s*l\s*\(.*/gi;function H(t){return t.replace(C,"&quot;")}function _(t){return t.replace(E,'"')}function D(t){return t.replace(V,(function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))}))}function R(t){return t.replace(F,":").replace(W," ")}function U(t){for(var e="",i=0,r=t.length;i<r;i++)e+=t.charCodeAt(i)<32?" ":t.charAt(i);return j.trim(e)}function $(t){return U(t=R(t=D(t=_(t))))}function X(t){return I(t=H(t))}p.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]},p.getDefaultWhiteList=function(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}},p.onTag=function(t,e,i){},p.onIgnoreTag=function(t,e,i){},p.onTagAttr=function(t,e,i){},p.onIgnoreTagAttr=function(t,e,i){},p.safeAttrValue=function(t,e,i,r){if(i=$(i),"href"===e||"src"===e){if("#"===(i=j.trim(i)))return"#";if("http://"!==i.substr(0,7)&&"https://"!==i.substr(0,8)&&"mailto:"!==i.substr(0,7)&&"tel:"!==i.substr(0,4)&&"data:image/"!==i.substr(0,11)&&"ftp://"!==i.substr(0,6)&&"./"!==i.substr(0,2)&&"../"!==i.substr(0,3)&&"#"!==i[0]&&"/"!==i[0])return""}else if("background"===e){if(q.lastIndex=0,q.test(i))return""}else if("style"===e){if(B.lastIndex=0,B.test(i))return"";if(P.lastIndex=0,P.test(i)&&(q.lastIndex=0,q.test(i)))return"";!1!==r&&(i=(r=r||O).process(i))}return X(i)},p.escapeHtml=I,p.escapeQuote=H,p.unescapeQuote=_,p.escapeHtmlEntities=D,p.escapeDangerHtml5Entities=R,p.clearNonPrintableCharacter=U,p.friendlyAttrValue=$,p.escapeAttrValue=X,p.onIgnoreTagStripAll=function(){return""},p.StripTagBody=function(t,e){"function"!=typeof e&&(e=function(){});var i=!Array.isArray(t),r=[],o=!1;return{onIgnoreTag:function(n,a,s){if(function(e){return!!i||-1!==j.indexOf(t,e)}(n)){if(s.isClosing){var l="[/removed]",c=s.position+l.length;return r.push([!1!==o?o:s.position,c]),o=!1,l}return o||(o=s.position),"[removed]"}return e(n,a,s)},remove:function(t){var e="",i=0;return j.forEach(r,(function(r){e+=t.slice(i,r[0]),i=r[1]})),e+=t.slice(i)}}},p.stripCommentTag=function(t){for(var e="",i=0;i<t.length;){var r=t.indexOf("\x3c!--",i);if(-1===r){e+=t.slice(i);break}e+=t.slice(i,r);var o=t.indexOf("--\x3e",r);if(-1===o)break;i=o+3}return e},p.stripBlankChar=function(t){var e=t.split("");return(e=e.filter((function(t){var e=t.charCodeAt(0);return!(127===e||e<=31&&10!==e&&13!==e)}))).join("")},p.cssFilter=O,p.getDefaultCSSWhiteList=L;var M={},N=A;function G(t){var e=N.spaceIndex(t);if(-1===e)var i=t.slice(1,-1);else i=t.slice(1,e+1);return"/"===(i=N.trim(i).toLowerCase()).slice(0,1)&&(i=i.slice(1)),"/"===i.slice(-1)&&(i=i.slice(0,-1)),i}function Q(t){return"</"===t.slice(0,2)}var Z=/[^a-zA-Z0-9_:\.\-]/gim;function Y(t,e){for(;e<t.length;e++){var i=t[e];if(" "!==i)return"="===i?e:-1}}function J(t,e){for(;e>0;e--){var i=t[e];if(" "!==i)return"="===i?e:-1}}function K(t){return function(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}(t)?t.substr(1,t.length-2):t}M.parseTag=function(t,e,i){var r="",o=0,n=!1,a=!1,s=0,l=t.length,c="",u="";t:for(s=0;s<l;s++){var d=t.charAt(s);if(!1===n){if("<"===d){n=s;continue}}else if(!1===a){if("<"===d){r+=i(t.slice(o,s)),n=s,o=s;continue}if(">"===d){r+=i(t.slice(o,n)),c=G(u=t.slice(n,s+1)),r+=e(n,r.length,c,u,Q(u)),o=s+1,n=!1;continue}if('"'===d||"'"===d)for(var g=1,p=t.charAt(s-g);""===p.trim()||"="===p;){if("="===p){a=d;continue t}p=t.charAt(s-++g)}}else if(d===a){a=!1;continue}}return o<t.length&&(r+=i(t.substr(o))),r},M.parseAttr=function(t,e){var i=0,r=[],o=!1,n=t.length;function a(t,i){if(!((t=(t=N.trim(t)).replace(Z,"").toLowerCase()).length<1)){var o=e(t,i||"");o&&r.push(o)}}for(var s=0;s<n;s++){var l,c=t.charAt(s);if(!1!==o||"="!==c)if(!1===o||s!==i||'"'!==c&&"'"!==c||"="!==t.charAt(s-1)){if(/\s|\n|\t/.test(c)){if(t=t.replace(/\s|\n|\t/g," "),!1===o){if(-1===(l=Y(t,s))){a(N.trim(t.slice(i,s))),o=!1,i=s+1;continue}s=l-1;continue}if(-1===(l=J(t,s-1))){a(o,K(N.trim(t.slice(i,s)))),o=!1,i=s+1;continue}}}else{if(-1===(l=t.indexOf(c,s+1)))break;a(o,N.trim(t.slice(i+1,l))),o=!1,i=(s=l)+1}else o=t.slice(i,s),i=s+1}return i<t.length&&(!1===o?a(t.slice(i)):a(o,K(N.trim(t.slice(i))))),N.trim(r.join(" "))};var tt=f.exports.FilterCSS,et=p,it=M,rt=it.parseTag,ot=it.parseAttr,nt=A;function at(t){return null==t}function st(t){(t=function(t){var e={};for(var i in t)e[i]=t[i];return e}(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=et.onIgnoreTagStripAll),t.whiteList=t.whiteList||t.allowList||et.whiteList,t.onTag=t.onTag||et.onTag,t.onTagAttr=t.onTagAttr||et.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||et.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||et.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||et.safeAttrValue,t.escapeHtml=t.escapeHtml||et.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new tt(t.css))}st.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,i=e.whiteList,r=e.onTag,o=e.onIgnoreTag,n=e.onTagAttr,a=e.onIgnoreTagAttr,s=e.safeAttrValue,l=e.escapeHtml,c=this.cssFilter;e.stripBlankChar&&(t=et.stripBlankChar(t)),e.allowCommentTag||(t=et.stripCommentTag(t));var u=!1;e.stripIgnoreTagBody&&(u=et.StripTagBody(e.stripIgnoreTagBody,o),o=u.onIgnoreTag);var d=rt(t,(function(t,e,u,d,g){var p,f={sourcePosition:t,position:e,isClosing:g,isWhite:i.hasOwnProperty(u)};if(!at(p=r(u,d,f)))return p;if(f.isWhite){if(f.isClosing)return"</"+u+">";var h=function(t){var e=nt.spaceIndex(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var i="/"===(t=nt.trim(t.slice(e+1,-1)))[t.length-1];return i&&(t=nt.trim(t.slice(0,-1))),{html:t,closing:i}}(d),m=i[u],b=ot(h.html,(function(t,e){var i,r=-1!==nt.indexOf(m,t);return at(i=n(u,t,e,r))?r?(e=s(u,t,e,c))?t+'="'+e+'"':t:at(i=a(u,t,e,r))?void 0:i:i}));return d="<"+u,b&&(d+=" "+b),h.closing&&(d+=" /"),d+">"}return at(p=o(u,d,f))?l(d):p}),l);return u&&(d=u.remove(d)),d};var lt=st;!function(t,e){var i=p,r=M,o=lt;function n(t,e){return new o(e).process(t)}for(var a in(e=t.exports=n).filterXSS=n,e.FilterXSS=o,i)e[a]=i[a];for(var a in r)e[a]=r[a];"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=t.exports)}(g,g.exports);var ct=function(){function t(t,e){var i,r=this;this.arcgisWhiteList={a:["href","style","target"],abbr:["title"],audio:["autoplay","controls","loop","muted","preload"],b:[],br:[],dd:["style"],div:["align","style"],dl:["style"],dt:["style"],em:[],figcaption:["style"],figure:["style"],font:["color","face","size","style"],h1:["style"],h2:["style"],h3:["style"],h4:["style"],h5:["style"],h6:["style"],hr:[],i:[],img:["alt","border","height","src","style","width"],li:[],ol:[],p:["style"],source:["media","src","type"],span:["style"],strong:[],sub:["style"],sup:["style"],table:["border","cellpadding","cellspacing","height","style","width"],tbody:[],tr:["align","height","style","valign"],td:["align","colspan","height","nowrap","rowspan","style","valign","width"],th:["align","colspan","height","nowrap","rowspan","style","valign","width"],u:[],ul:[],video:["autoplay","controls","height","loop","muted","poster","preload","width"]},this.allowedProtocols=["http","https","mailto","iform","tel","flow","lfmobile","arcgis-navigator","arcgis-appstudio-player","arcgis-survey123","arcgis-collector","arcgis-workforce","arcgis-explorer","arcgis-trek2there","arcgis-quickcapture","mspbi","comgooglemaps","pdfefile","pdfehttp","pdfehttps","boxapp","boxemm","awb","awbs","gropen","radarscope"],this.arcgisFilterOptions={allowCommentTag:!0,safeAttrValue:function(t,e,i,o){return"a"===t&&"href"===e||("img"===t||"source"===t)&&"src"===e?r.sanitizeUrl(i):g.exports.safeAttrValue(t,e,i,o)}},t&&!e?i=t:t&&e?(i=Object.create(this.arcgisFilterOptions),Object.keys(t).forEach((function(e){"whiteList"===e?i.whiteList=r._extendObjectOfArrays([r.arcgisWhiteList,t.whiteList||{}]):i[e]=t[e]}))):(i=Object.create(this.arcgisFilterOptions)).whiteList=this.arcgisWhiteList,this.xssFilterOptions=i,this._xssFilter=new g.exports.FilterXSS(i)}return t.prototype.sanitize=function(t,e){switch(void 0===e&&(e={}),typeof t){case"number":return isNaN(t)||!isFinite(t)?null:t;case"boolean":return t;case"string":return this._xssFilter.process(t);case"object":return this._iterateOverObject(t,e);default:if(e.allowUndefined&&void 0===t)return;return null}},t.prototype.sanitizeUrl=function(t,e){var i=(null!=e?e:{}).isProtocolRequired,r=void 0===i||i,o=this._trim(t.substring(0,t.indexOf(":"))),n="/"===t,a=/^#/.test(t),s=o&&this.allowedProtocols.indexOf(o.toLowerCase())>-1;return n||a||s?g.exports.escapeAttrValue(t):o||r?"":g.exports.escapeAttrValue("https://".concat(t))},t.prototype.sanitizeHTMLAttribute=function(t,e,i,r){return"function"==typeof this.xssFilterOptions.safeAttrValue?this.xssFilterOptions.safeAttrValue(t,e,i,r):g.exports.safeAttrValue(t,e,i,r)},t.prototype.validate=function(t,e){void 0===e&&(e={});var i=this.sanitize(t,e);return{isValid:t===i,sanitized:i}},t.prototype._extendObjectOfArrays=function(t){var e={};return t.forEach((function(t){Object.keys(t).forEach((function(i){Array.isArray(t[i])&&Array.isArray(e[i])?e[i]=e[i].concat(t[i]):e[i]=t[i]}))})),e},t.prototype._iterateOverObject=function(t,e){var i=this;void 0===e&&(e={});try{var r=!1,o=void 0;if(Array.isArray(t))o=t.reduce((function(t,o){var n=i.validate(o,e);return n.isValid?t.concat([o]):(r=!0,t.concat([n.sanitized]))}),[]);else{if(!function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=u.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=d(t);if(null===e)return!0;var i=l.call(e,"constructor")&&e.constructor;return"function"==typeof i&&i instanceof i&&s.call(i)==c}(t)){if(e.allowUndefined&&void 0===t)return;return null}o=Object.keys(t).reduce((function(o,n){var a=t[n],s=i.validate(a,e);return s.isValid?o[n]=a:(r=!0,o[n]=s.sanitized),o}),{})}return r?o:t}catch(t){return null}},t.prototype._trim=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},t}();const ut=new Map;function dt(){ut.clear()}function gt(t){return ut.get(t)}function pt(t,e){ut.set(t,e)}function ft(t){ut.delete(t)}var ht,mt,bt=function(t){ht||function(t){if("WebkitTransition"in t.style)ht="webkitTransitionEnd",mt="webkitAnimationEnd";else{if(!("transition"in t.style))throw new Error("Your browser is not supported!");ht="transitionend",mt="animationend"}}(t)},vt=function(t,e){return void 0===e&&(e=t+"-active"),function(i){bt(i);var r=!1,o=function(n){r||(r=!0,i.removeEventListener(ht,o),i.removeEventListener(mt,o),i.classList.remove(t),i.classList.remove(e))};i.classList.add(t),i.addEventListener(ht,o),i.addEventListener(mt,o),requestAnimationFrame((function(){i.classList.add(e)}))}},yt=function(t,e){return void 0===e&&(e=t+"-active"),function(i,r){bt(i);var o=!1,n=function(t){o||(o=!0,i.removeEventListener(ht,n),i.removeEventListener(mt,n),r())};i.classList.add(t),i.addEventListener(ht,n),i.addEventListener(mt,n),requestAnimationFrame((function(){i.classList.add(e)}))}};const wt=i.getLogger("esri.widgets.support.widgetUtils");function xt(e){const i=t.acquire();for(let t=0;t<arguments.length;t++){const e=arguments[t],r=typeof e;if("string"===r)i.push(e);else if(Array.isArray(e))i.push.apply(i,e);else if("object"===r)for(const t in e)e[t]&&i.push(t)}const r=i.join(" ");return t.release(i),r}const kt=(()=>{const t=new Map,i=new ResizeObserver((e=>{dt();for(const i of e)t.get(i.target)(i)}));return(r,o,n)=>(t.has(r)&&wt.error("Already observing element",r),t.set(r,o),i.observe(r,n),e((()=>{i.unobserve(r),t.delete(r)})))})();function At(t){const e=t?.closest("[dir]");return null!==e&&e instanceof HTMLElement&&"rtl"===e.dir||"rtl"===document.dir}function Tt(t){return At(t)?"rtl":"ltr"}function Lt(t){this[t.getAttribute("data-node-ref")]=null}function jt(t){this[t.getAttribute("data-node-ref")]=t}function Ot(t,e){return("enter"===t?vt:yt)(e)}const It=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup","animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"],zt=It.reduce(((t,e)=>(t[e]=[],t)),{}),St=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","d","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],Ct=new ct({whiteList:zt,onTagAttr:(t,e,i)=>{const r=`${e}="${i}"`;if(St.includes(e))return r},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);function Et(t,e){const i=t.getBoundingClientRect(),r=e.getBoundingClientRect(),o=i.top+i.height,n=r.top+r.height,a=i.top,s=r.top;(o>n||a<s)&&t.scrollIntoView({block:"end"})}function Vt(t){return"Enter"===t||" "===t}export{pt as a,dt as b,xt as c,ft as d,Tt as e,Lt as f,gt as g,Ot as h,At as i,It as j,St as k,Et as l,Vt as m,kt as o,Ct as r,jt as s};