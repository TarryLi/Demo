// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../assets ../../config ../../intl ../../kernel ../has ../Logger ../urlUtils ./loaderConfig ./utils ./WorkerFallback ../../intl/locale ../../support/revision".split(" "),function(t,u,E,e,F,z,c,A,m,n,v,f,w,x){function p(){p=u._asyncToGenerator(function*(){if(!c("esri-workers")||(c("mozilla"),0))return y(new f);if(!g&&!h)try{const b='let globalId\x3d0;const outgoing\x3dnew Map,configuration\x3dJSON.parse("{CONFIGURATION}");self.esriConfig\x3dconfiguration.esriConfig;const workerPath\x3dself.esriConfig.workers.workerPath,HANDSHAKE\x3d0,OPEN\x3d1,OPENED\x3d2,RESPONSE\x3d3,INVOKE\x3d4,ABORT\x3d5;function createAbortError(){const e\x3dnew Error("Aborted");return e.name\x3d"AbortError",e}function receiveMessage(e){return e\x26\x26e.data?"string"\x3d\x3dtypeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t\x3dr\x26\x26r.signal,n\x3dglobalId++;return new Promise(((r,i)\x3d\x3e{if(t){if(t.aborted)return i(createAbortError());t.addEventListener("abort",(()\x3d\x3e{outgoing.get(n)\x26\x26(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!\x3dt,data:o})}))}let workerRevisionChecked\x3d!1;function checkWorkerRevision(e){if(!workerRevisionChecked\x26\x26e.kernelInfo){workerRevisionChecked\x3d!0;const{revision:o,buildDate:r,version:t}\x3dconfiguration.kernelInfo,{revision:n,buildDate:i,version:s}\x3de.kernelInfo;o!\x3d\x3dn\x26\x26console.warn(`[esri.core.workers] Version mismatch detected between ArcGIS API for JavaScript and assets:\\nAPI version: ${t} [Date: ${r}, Revision: ${o.slice(0,8)}]\nAssets version: ${s} [Date: ${i}, Revision: ${n.slice(0,8)}]`)}}function messageHandler(e){const o\x3dreceiveMessage(e);if(!o)return;const r\x3do.jobId;switch(o.type){case 1:let e;function t(o){const t\x3de.connect(o);self.postMessage({type:2,jobId:r,data:t},[t])}"function"\x3d\x3dtypeof define\x26\x26define.amd?require([workerPath],(r\x3d\x3e{e\x3dr.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e\x3d\x3ee||new Promise((e\x3d\x3e{require([o.modulePath],e)})))).then(t)})):"System"in self\x26\x26"function"\x3d\x3dtypeof System.import?System.import(workerPath).then((r\x3d\x3e(e\x3dr.default,checkWorkerRevision(e),e.loadWorker(o.modulePath)))).then((e\x3d\x3ee||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((r\x3d\x3e{e\x3dr.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e\x3d\x3ee||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),e\x3dself.RemoteClient.default||self.RemoteClient,checkWorkerRevision(e),e.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const e\x3doutgoing.get(r);outgoing.delete(r),o.error?e.reject(JSON.parse(o.error)):e.resolve(o.data)}}}self.dojoConfig\x3dconfiguration.loaderConfig,esriConfig.workers.loaderUrl\x26\x26(self.importScripts(esriConfig.workers.loaderUrl),"function"\x3d\x3dtypeof require\x26\x26"function"\x3d\x3dtypeof require.config\x26\x26require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.replace('"{CONFIGURATION}"',
`'${B()}'`);g=URL.createObjectURL(new Blob([b],{type:"text/javascript"}))}catch(b){h=b||{}}let a;if(g)try{a=new Worker(g,{name:`esri-worker-${C++}`})}catch(b){q.warn("Failed to create Worker. Fallback to execute module in main thread",h),a=new f}else q.warn("Failed to create Worker. Fallback to execute module in main thread",h),a=new f;return y(a)});return p.apply(this,arguments)}function y(a){return r.apply(this,arguments)}function r(){r=u._asyncToGenerator(function*(a){return new Promise(b=>{function k(d){(d=
v.receiveMessage(d))&&d.type===D&&(a.removeEventListener("message",k),a.removeEventListener("error",l),b(a))}function l(d){d.preventDefault();a.removeEventListener("message",k);a.removeEventListener("error",l);q.warn("Failed to create Worker. Fallback to execute module in main thread",d);a=new f;a.addEventListener("message",k);a.addEventListener("error",l)}a.addEventListener("message",k);a.addEventListener("error",l)})});return r.apply(this,arguments)}function B(){if(null!=e["default"]){var a={...e};
delete a["default"];a=JSON.parse(JSON.stringify(a))}else a=JSON.parse(JSON.stringify(e));a.assetsPath=m.makeAbsolute(a.assetsPath);a.request.interceptors=[];a.log.interceptors=[];a.locale=w.getLocale();a.has={"esri-csp-restrictions":c("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":c("esri-2d-update-debug"),"esri-2d-query-centroid-enabled":c("esri-2d-query-centroid-enabled"),"featurelayer-pbf":c("featurelayer-pbf"),"featurelayer-simplify-thresholds":c("featurelayer-simplify-thresholds"),
"featurelayer-simplify-payload-size-factors":c("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":c("featurelayer-simplify-mobile-factor"),"esri-atomics":c("esri-atomics"),"esri-shared-array-buffer":c("esri-shared-array-buffer"),"esri-tiles-debug":c("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":c("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":c("feature-polyline-generalization-factor"),"host-webworker":1};a.workers.loaderUrl?
a.workers.loaderUrl=m.makeAbsolute(a.workers.loaderUrl):n.DEFAULT_LOADER_URL&&(a.workers.loaderUrl=n.DEFAULT_LOADER_URL);a.workers.workerPath=a.workers.workerPath?m.makeAbsolute(a.workers.workerPath):"esri/core/workers/RemoteClient";a.workers.useDynamicImport=!1;var b=e.workers.loaderConfig;b=n.loaderConfig({baseUrl:null==b?void 0:b.baseUrl,locale:w.getLocale(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...null==b?void 0:b.has},map:{...null==b?void 0:b.map},paths:{...null==b?
void 0:b.paths},packages:(null==b?void 0:b.packages)||[]});return JSON.stringify({esriConfig:a,loaderConfig:b,kernelInfo:{version:z.version,buildDate:x.buildDate,revision:x.commitHash}})}const q=A.getLogger("esri.core.workers"),{HANDSHAKE:D}=v.MessageType;let g,h,C=0;t.createWorker=function(){return p.apply(this,arguments)};Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});