// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require ./chunks/_rollupPluginBabelHelpers ./config ./kernel ./core/Error ./core/has ./core/lang ./core/maybe ./core/promiseUtils ./core/urlUtils ./support/apiKeyUtils ./support/requestUtils".split(" "),function(Q,w,C,p,D,z,X,Y,y,k,Z,A){function t(a,b){return E.apply(this,arguments)}function E(){E=w._asyncToGenerator(function*(a,b){var c,e=k.isDataProtocol(a);const d=k.isBlobProtocol(a);d||e||(a=k.normalize(a));const f={url:a,requestOptions:{...Y.unwrap(b)}};let l=k.getInterceptor(a);if(l){a=
yield aa(l,f);if(null!=a)return{data:a,getHeader:F,requestOptions:f.requestOptions,url:f.url};l.after||l.error||(l=null)}a=f.url;b=f.requestOptions;if("image"===b.responseType){if(z("host-webworker")||z("host-node"))throw q("request:invalid-parameters",Error("responseType 'image' is not supported in Web Workers or Node environment"),f);}else if(e)throw q("request:invalid-parameters",Error("Data URLs are not supported for responseType \x3d "+b.responseType),f);if("head"===b.method){if(b.body)throw q("request:invalid-parameters",
Error("body parameter cannot be set when method is 'head'"),f);if(e||d)throw q("request:invalid-parameters",Error("data and blob URLs are not supported for method 'head'"),f);}yield ba();if(B)return B.execute(a,b);const g=new AbortController;y.onAbort(b,()=>g.abort());e=yield ca({controller:g,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:l,params:f,redoRequest:!1,useIdentity:r.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1});null==(c=l)?void 0:null==c.after?
void 0:c.after(e);return e});return E.apply(this,arguments)}function da(a){(a=k.getOrigin(a))&&!t._corsServers.includes(a)&&t._corsServers.push(a)}function R(a){a=k.getOrigin(a);return!a||a.endsWith(".arcgis.com")||t._corsServers.includes(a)||k.isTrustedServer(a)}function q(a,b,c,e){let d="Error";const f={url:c.url,requestOptions:c.requestOptions,getHeader:F,ssl:!1};if(b instanceof D)return b.details?(b.details=X.clone(b.details),b.details.url=c.url,b.details.requestOptions=c.requestOptions):b.details=
f,b;if(b){c=e&&(h=>e.headers.get(h));const l=e&&e.status,g=b.message;g&&(d=g);c&&(f.getHeader=c);f.httpStatus=(null!=b.httpCode?b.httpCode:b.code)||l||0;f.subCode=b.subcode;f.messageCode=b.messageCode;f.messages="string"===typeof b.details?[b.details]:b.details;f.raw=G in b?b[G]:b}return y.isAbortError(b)?y.createAbortError():new D(a,d,f)}function ba(){return H.apply(this,arguments)}function H(){H=w._asyncToGenerator(function*(){z("host-webworker")?B||(B=yield new Promise((a,b)=>Q(["./core/workers/request"],
a,b))):t._abortableFetch||(t._abortableFetch=globalThis.fetch.bind(globalThis))});return H.apply(this,arguments)}function I(){return J.apply(this,arguments)}function J(){J=w._asyncToGenerator(function*(){p.id||(yield new Promise((a,b)=>Q(["./identity/IdentityManager"],c=>a(Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"}))),b)))});return J.apply(this,arguments)}function ea(a){return K.apply(this,arguments)}function K(){K=w._asyncToGenerator(function*(a){var b,
c;const e=a.params.url,d=a.params.requestOptions,f=a.controller.signal,l=d.body;let g=null,h=null;S&&"HTMLFormElement"in globalThis&&(l instanceof FormData?g=l:l instanceof HTMLFormElement&&(g=new FormData(l)));"string"===typeof l&&(h=l);a.fetchOptions={cache:d.cacheBust&&!t._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:d.headers||{},method:"head"===d.method?"HEAD":"GET",mode:"cors",priority:r.priority,redirect:"follow",signal:f};if(g||h)a.fetchOptions.body=g||h;
"anonymous"===d.authMode&&(a.useIdentity=!1);a.hasToken=!!(/token=/i.test(e)||null!=(b=d.query)&&b.token||null!=(c=g)&&c.get("token"));!a.hasToken&&C.apiKey&&Z.supportsApiKey(e)&&(d.query||(d.query={}),d.query.token=C.apiKey,a.hasToken=!0);if(a.useIdentity&&!a.hasToken&&!a.credentialToken&&!T(e)&&!y.isAborted(f)){let n;"immediate"===d.authMode?(yield I(),n=yield p.id.getCredential(e,{signal:f}),a.credential=n):"no-prompt"===d.authMode?(yield I(),n=yield p.id.getCredential(e,{prompt:!1,signal:f}).catch(()=>
{}),a.credential=n):p.id&&(n=p.id.findCredential(e));n&&(a.credentialToken=n.token,a.useSSL=!!n.ssl)}});return K.apply(this,arguments)}function T(a){return fa.some(b=>b.test(a))}function ha(a){return L.apply(this,arguments)}function L(){L=w._asyncToGenerator(function*(a){let b=a.params.url;const c=a.params.requestOptions,e=a.fetchOptions,d=k.isBlobProtocol(b)||k.isDataProtocol(b),f=c.responseType||"json",l=d?0:null!=c.timeout?c.timeout:r.timeout;var g=!1;if(!d){a.useSSL&&(b=k.toHTTPS(b));c.cacheBust&&
"default"===e.cache&&(b=k.addQueryParameter(b,"request.preventCache",Date.now()));var h={...c.query};a.credentialToken&&(h.token=a.credentialToken);g=k.objectToQuery(h);z("esri-url-encodes-apostrophe")&&(g=g.replace(/'/g,"%27"));const v=b.length+1+g.length;g="delete"===c.method||"post"===c.method||"put"===c.method||!!c.body||v>r.maxUrlLength;const x=c.useProxy||!!k.getProxyRule(b);if(x){const M=k.getProxyUrl(b);var n=M.path;!g&&n.length+1+v>r.maxUrlLength&&(g=!0);M.query&&(h={...M.query,...h})}if("HEAD"===
e.method&&(g||x)){if(g){if(v>r.maxUrlLength)throw q("request:invalid-parameters",Error("URL exceeds maximum length"),a.params);throw q("request:invalid-parameters",Error("cannot use POST request when method is 'head'"),a.params);}if(x)throw q("request:invalid-parameters",Error("cannot use proxy when method is 'head'"),a.params);}g?(e.method="delete"===c.method?"DELETE":"put"===c.method?"PUT":"POST",c.body?b=k.addQueryParameters(b,h):(e.body=k.objectToQuery(h),e.headers["Content-Type"]="application/x-www-form-urlencoded")):
b=k.addQueryParameters(b,h);x&&(a.useProxy=!0,b=`${n}?${b}`);h.token&&S&&e.body instanceof FormData&&!/\/(sharing|usrsvcs)\/(appservices|servers)\//i.test(b)&&e.body.set("token",h.token);c.hasOwnProperty("withCredentials")?a.withCredentials=c.withCredentials:k.hasSameOrigin(b,k.getAppUrl())||(k.isTrustedServer(b)?a.withCredentials=!0:p.id&&(n=p.id.findServerInfo(b))&&n.webTierAuth&&(a.withCredentials=!0));a.withCredentials&&(e.credentials="include",A.isNoCorsRequestRequired(b)&&(yield A.sendNoCorsRequest(g?
k.addQueryParameters(b,h):b)))}h=0;let U=!1;0<l&&(h=setTimeout(()=>{U=!0;a.controller.abort()},l));let u,m;try{if("native-request-init"===c.responseType)m=e,m.url=b;else if("image"!==c.responseType||"default"!==e.cache||"GET"!==e.method||g||ia(c.headers)||!d&&!a.useProxy&&r.proxyUrl&&!R(b))if(u=yield t._abortableFetch(b,e),a.useProxy||da(b),"native"===c.responseType)m=u;else{if("HEAD"!==e.method)if(u.ok){switch(f){case "array-buffer":m=yield u.arrayBuffer();break;case "blob":case "image":m=yield u.blob();
break;default:m=yield u.text()}h&&(clearTimeout(h),h=0);if("json"===f||"xml"===f||"document"===f)if(m)switch(f){case "json":m=JSON.parse(m);break;case "xml":m=V(m,"application/xml");break;case "document":m=V(m,"text/html")}else m=null;if(m){if("array-buffer"===f||"blob"===f){const v=u.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(v)&&750>=m["blob"===f?"size":"byteLength"])try{const x=yield(new Response(m)).json();x.error&&(m=x)}catch{}}"image"===f&&m instanceof Blob&&(m=yield W(URL.createObjectURL(m),
a,!0))}}else m=yield u.text()}else m=yield W(b,a)}catch(v){if("AbortError"===v.name){if(U)throw Error("Timeout exceeded");throw y.createAbortError("Request canceled");}if(!u&&v instanceof TypeError&&r.proxyUrl&&!c.body&&"delete"!==c.method&&"head"!==c.method&&"post"!==c.method&&"put"!==c.method&&!a.useProxy&&!R(b))a.redoRequest=!0,k.addProxyRule({proxyUrl:r.proxyUrl,urlPrefix:k.getOrigin(b)});else throw v;}finally{h&&clearTimeout(h)}return[u,m]});return L.apply(this,arguments)}function aa(a,b){return N.apply(this,
arguments)}function N(){N=w._asyncToGenerator(function*(a,b){if(null!=a.responseData)return a.responseData;a.headers&&(b.requestOptions.headers={...b.requestOptions.headers,...a.headers});a.query&&(b.requestOptions.query={...b.requestOptions.query,...a.query});if(a.before){let c,e;try{e=yield a.before(b)}catch(d){c=q("request:interceptor",d,b)}if(e instanceof Error||e instanceof D)c=q("request:interceptor",e,b);if(c)throw a.error&&a.error(c),c;return e}});return N.apply(this,arguments)}function ia(a){if(a)for(const b of Object.getOwnPropertyNames(a))if(a[b])return!0;
return!1}function V(a,b){let c;try{c=(new DOMParser).parseFromString(a,b)}catch{}if(!c||c.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return c}function ca(a){return O.apply(this,arguments)}function O(){O=w._asyncToGenerator(function*(a){yield ea(a);let b;try{do[b,c]=yield ha(a);while(!(yield ja(a,b,c)))}catch(f){var c=q("request:server",f,a.params,b);c.details.ssl=a.useSSL;a.interceptor&&a.interceptor.error&&a.interceptor.error(c);throw c;}var e=a.params.url;
if(c&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(e)){var d;a.hasToken||a.credentialToken||null==(d=c.user)||!d.username||k.isTrustedServer(e)||(e=k.getOrigin(e,!0))&&r.trustedServers.push(e);Array.isArray(c.authorizedCrossOriginNoCorsDomains)&&A.registerNoCorsDomains(c.authorizedCrossOriginNoCorsDomains)}(e=a.credential)&&p.id&&(d=(d=p.id.findServerInfo(e.server))&&d.owningSystemUrl)&&(d=d.replace(/\/?$/,"/sharing"),(e=p.id.findCredential(d,e.userId))&&-1===p.id._getIdenticalSvcIdx(d,e)&&e.resources.unshift(d));
return{data:c,getHeader:b?f=>b.headers.get(f):F,requestOptions:a.params.requestOptions,ssl:a.useSSL,url:a.params.url}});return O.apply(this,arguments)}function ja(a,b,c){return P.apply(this,arguments)}function P(){P=w._asyncToGenerator(function*(a,b,c){if(a.redoRequest)return a.redoRequest=!1;const e=a.params.requestOptions;if(!b||"native"===e.responseType||"native-request-init"===e.responseType)return!0;let d;if(!b.ok)throw d=Error(`Unable to load ${b.url} status: ${b.status}`),d[G]=c,d;null!=c&&
c.error&&(d=c.error);let f,l,g;d&&(f=Number(d.code),l=d.hasOwnProperty("subcode")?Number(d.subcode):null,g=(g=d.messageCode)&&g.toUpperCase());b=e.authMode;if(403===f&&(4===l||d.message&&d.message.toLowerCase().includes("ssl")&&!d.message.toLowerCase().includes("permission"))){if(!a.useSSL)return a.useSSL=!0,!1}else if(!a.hasToken&&a.useIdentity&&("no-prompt"!==b||498===f)&&ka.includes(f)&&!T(a.params.url)&&(403!==f||!la.includes(g)&&(null==l||2===l&&a.credentialToken))){yield I();try{const h=yield p.id.getCredential(a.params.url,
{error:q("request:server",d,a.params),prompt:"no-prompt"!==b,signal:a.controller.signal,token:a.credentialToken});a.credential=h;a.credentialToken=h.token;a.useSSL=a.useSSL||h.ssl;return!1}catch(h){if("no-prompt"===b)return a.credential=null,a.credentialToken=null,!1;d=h}}if(d)throw d;return!0});return P.apply(this,arguments)}function W(a,b,c=!1){const e=b.controller.signal,d=new Image;d.crossOrigin=b.withCredentials?"use-credentials":"anonymous";d.alt="";d.fetchPriority=r.priority;d.src=a;return A.loadImageAsync(d,
a,c,e)}let B;const r=C.request,S="FormData"in globalThis,ka=[499,498,403,401],la=["COM_0056","COM_0057","SB_0008"],fa=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],F=()=>null,G=Symbol();t._abortableFetch=null;t._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];return t});