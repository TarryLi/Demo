// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../webgl-engine/lib/Util"],function(f,h,k){let m=function(d){this.typeWorkerQuota=d;this.tasks=[];this.numWorkers=0;this.statistics=new l},l=function(){this.speed=this.duration=this.size=this.requests=0},p=function(){function d(a,b,e,g){this._workerFunc=a;this._callbackFunc=b;this._maxTotalNumWorkers=e;this._totalNumWorkers=0;this._clients=g.map(n=>new m(n))}var c=d.prototype;c.hasQuota=function(a){return(a=this._clients[a])?this._totalNumWorkers<
this._maxTotalNumWorkers||a.numWorkers+a.tasks.length<a.typeWorkerQuota:!1};c.push=function(a){const b=this._clients[a.client];b&&(this._totalNumWorkers<this._maxTotalNumWorkers?(b.numWorkers++,this._totalNumWorkers++,this._workerFunc(a,(e,g)=>this._taskCallback(e,g))):b.tasks.push(a))};c.cancel=function(a){this._taskFinished(a);a._cancelled=!0};c.destroy=function(){this._clients.length=0};c._taskFinished=function(a){const b=this._clients[a.client];this._totalNumWorkers--;b.numWorkers--;b.statistics.requests++;
b.statistics.size+=a.size||0;b.statistics.duration+=a.duration||0;b.statistics.speed=0<b.statistics.duration?b.statistics.size/b.statistics.duration:0;k.assert(0<=b.numWorkers);this._next()};c._next=function(){for(const a of this._clients)if(a&&a.numWorkers<a.typeWorkerQuota&&this._processQueue(a))return;for(const a of this._clients)if(a&&this._processQueue(a))break};c._processQueue=function(a){for(;0<a.tasks.length;)if(this._workerFunc(a.tasks.shift(),(b,e)=>this._taskCallback(b,e)))return a.numWorkers++,
this._totalNumWorkers++,!0;return!1};c._taskCallback=function(a,b){a._cancelled||(this._callbackFunc(a,b),this._taskFinished(a))};c.getStatsForType=function(a){return(a=this._clients[a])?{quota:a.typeWorkerQuota,workers:a.numWorkers,queueSize:a.tasks.length,requestStats:a.statistics}:null};h._createClass(d,[{key:"test",get:function(){const a=this;return{set workerFunc(b){a._workerFunc=b}}}}]);return d}();f.AsyncWorkerQueue=p;f.BaseTask=function(d){this.client=d;this._cancelled=!1;this.duration=this.size=
0};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});