// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["require","exports","../../assets"],function(f,e,g){function h(a){return g.getAssetUrl(`esri/libs/i3s/${a}`)}let d;e.get=function(){d||(d=(new Promise(a=>(new Promise((b,c)=>f(["../../chunks/i3s"],b,c))).then(b=>b.i3s).then(({default:b})=>{const c=b({locateFile:h,onRuntimeInitialized:()=>a(c)});delete c.then}))).catch(a=>{throw a;}));return d};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});