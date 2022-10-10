// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Accessor ./maybe ./promiseUtils ./accessorSupport/decorators/subclass".split(" "),function(g,l,m,q,r,h,n){var f;(function(b){b[b.PENDING=0]="PENDING";b[b.RESOLVED=1]="RESOLVED";b[b.REJECTED=2]="REJECTED"})(f||(f={}));let t=function(){function b(d){this.instance=d;this._resolver=h.createDeferred();this._status=f.PENDING;this._resolvingPromises=[];this._resolver.promise.then(()=>{this._status=f.RESOLVED;this._cleanUp()},()=>{this._status=
f.REJECTED;this._cleanUp()})}var c=b.prototype;c.addResolvingPromise=function(d){this._resolvingPromises.push(d);this._tryResolve()};c.isResolved=function(){return this._status===f.RESOLVED};c.isRejected=function(){return this._status===f.REJECTED};c.isFulfilled=function(){return this._status!==f.PENDING};c.abort=function(){this._resolver.reject(h.createAbortError())};c.when=function(d,e){return this._resolver.promise.then(d,e)};c._cleanUp=function(){this._allPromise=this._resolvingPromises=this._allPromise=
null};c._tryResolve=function(){if(!this.isFulfilled()){var d=h.createDeferred(),e=[...this._resolvingPromises,r.assumeNonNull(d.promise)],a=this._allPromise=Promise.all(e);a.then(()=>{this.isFulfilled()||this._allPromise!==a||this._resolver.resolve(this.instance)},k=>{this.isFulfilled()||this._allPromise!==a||h.isAbortError(k)||this._resolver.reject(k)});d.resolve()}};return b}();const p=b=>{b=function(c){function d(...a){a=c.call(this,...a)||this;a._promiseProps=new t(l._assertThisInitialized(a));
a.addResolvingPromise(Promise.resolve());return a}l._inheritsLoose(d,c);var e=d.prototype;e.isResolved=function(){return this._promiseProps.isResolved()};e.isRejected=function(){return this._promiseProps.isRejected()};e.isFulfilled=function(){return this._promiseProps.isFulfilled()};e.when=function(a,k){return(new Promise((u,v)=>{this._promiseProps.when(u,v)})).then(a,k)};e.catch=function(a){return this.when(null,a)};e.addResolvingPromise=function(a){a&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in
a?a.when():a)};return d}(b);return b=m.__decorate([n.subclass("esri.core.Promise")],b)};g.EsriPromise=function(b){function c(){return b.apply(this,arguments)||this}l._inheritsLoose(c,b);return c}(p(q));g.EsriPromise=m.__decorate([n.subclass("esri.core.Promise")],g.EsriPromise);g.EsriPromiseMixin=p;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});