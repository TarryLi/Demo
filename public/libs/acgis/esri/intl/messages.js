// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../chunks/_rollupPluginBabelHelpers","../core/Error","../core/promiseUtils","./locale"],function(f,g,l,u,m){function n(a){var b;return null!=(b=v[a])?b:!1}function p(a){for(const b of d.keys())q(a.pattern,b)&&d.delete(b)}function h(){h=g._asyncToGenerator(function*(a){const b=m.getLocale();d.has(a)||d.set(a,w(a,b));a=d.get(a);yield x.add(a);return a});return h.apply(this,arguments)}function w(a,b){return k.apply(this,arguments)}function k(){k=g._asyncToGenerator(function*(a,b){const c=
[];for(const r of e)if(q(r.pattern,a))try{return yield r.fetchMessageBundle(a,b)}catch(y){c.push(y)}if(c.length)throw new l("intl:message-bundle-error",`Errors occurred while loading "${a}"`,{errors:c});throw new l("intl:no-message-bundle-loader",`No loader found for message bundle "${a}"`);});return k.apply(this,arguments)}function q(a,b){return"string"===typeof a?b.startsWith(a):a.test(b)}const t=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,v={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,
et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0},e=[],d=new Map;m.beforeLocaleChange(()=>{d.clear()});const x=new (function(){function a(){this._numLoading=0}var b=a.prototype;b.waitForAll=function(){var c=g._asyncToGenerator(function*(){this._dfd&&(yield this._dfd.promise)});return function(){return c.apply(this,arguments)}}();b.add=function(c){this._increase();
c.then(()=>this._decrease(),()=>this._decrease());return this.waitForAll()};b._increase=function(){this._numLoading++;this._dfd||(this._dfd=u.createDeferred())};b._decrease=function(){this._numLoading=Math.max(this._numLoading-1,0);this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)};return a}()),z={cache:d,loaders:e};f.fetchMessageBundle=function(a){return h.apply(this,arguments)};f.normalizeMessageBundleLocale=function(a){if(!t.test(a))return null;const [,b,c]=t.exec(a);a=b+(c?
"-"+c.toUpperCase():"");return n(a)?a:n(b)?b:null};f.registerMessageBundleLoader=function(a){e.includes(a)||(p(a),e.unshift(a));return{remove(){const b=e.indexOf(a);-1<b&&(e.splice(b,1),p(a))}}};f.test=z;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});