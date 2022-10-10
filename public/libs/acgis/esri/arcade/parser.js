// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./treeAnalysis","./lib/arcade-parser"],function(e,f,m){e.extractExpectedFieldLiterals=function(a){return f.findExpectedFieldLiterals(a)};e.extractFieldLiterals=function(a,b){return f.findFieldLiterals(a)};e.parseScript=function(a,b=[]){a=m.parse("function _() { "+a+"\n}");if(null===a.body||void 0===a.body)throw Error("No formula provided.");if(0===a.body.length)throw Error("No formula provided.");if(0===a.body.length)throw Error("No formula provided.");if("BlockStatement"!==a.body[0].body.type)throw Error("Invalid formula content.");
const h=f.validateLanguage(a);if(""!==h)throw Error(h);f.findScriptDependencies(a,b);return a};e.referencesFunction=function(a,b){return f.referencesFunction(a,b)};e.referencesMember=function(a,b){return f.referencesMember(a,b)};e.scriptCheck=function(a,b,h,n,p){const k=[];a="function _() { \n"+a+"\n}";try{const c=m.parse(a,{tolerant:!0,loc:!0,range:!0}),g=c.errors;if(0<g.length)for(let l=0;l<g.length;l++)k.push({line:g[l].lineNumber-2,character:g[l].column,reason:g[l].description});const d=f.checkScript(c,
b,h,n,p);for(b=0;b<d.length;b++)d[b].line-=2,d[b].range&&(d[b].range=[d[b][0]-15,d[b][1]-15]),d[b].loc&&(d[b].loc.start.line-=2,d[b].loc.end.line-=2),k.push(d[b])}catch(c){try{if("Unexpected token }"===c.description){const g=a.split("\n").length;c.lineNumber===g?(c.index=a.length-1,k.push({line:c.lineNumber-4,character:c.column,reason:"Unexpected end of script"})):(c.index=a.length-1,k.push({line:c.lineNumber-2,character:c.column,reason:"Unexpected end of script"}))}else k.push({line:c.lineNumber-
2,character:c.column,reason:c.description})}catch(g){}}return k};e.validateScript=function(a,b,h){return f.validateScript(a,b,h)};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});