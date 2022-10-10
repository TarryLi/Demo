// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../TimeExtent ../../../../../core/Evented ../../../../../core/has ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/accessorSupport/diffUtils ../../../../../rest/support/Query ./DataTileSubscription ../support/UpdateToken".split(" "),function(q,k,t,u,r,v,n,p,w,x,y){function z(l,c){const b=new Set;l&&l.forEach(a=>b.add(a));c&&c.forEach(a=>b.add(a));return b.has("*")?["*"]:Array.from(b)}let B=function(){function l(b){this.events=
new u;this._resolver=n.createResolver();this._didEdit=!1;this._subscriptions=new Map;this._outSR=b.outSR;this._serviceInfo=b.serviceInfo;this._onTileUpdateMessage=b.onMessage}var c=l.prototype;c.destroy=function(){};c._onMessage=function(){var b=k._asyncToGenerator(function*(a){var d,e;const f=this._subscriptions.get(a.id);if(f)return a={...a,remove:null!=(d=a.remove)?d:[],status:null!=(e=a.status)?e:y.UpdateToken.empty()},n.ignoreAbortErrors(this._onTileUpdateMessage(a,f.options))});return function(a){return b.apply(this,
arguments)}}();c.update=function(b,a){var d,e=a.fields.length;a.outFields=z(null==(d=this._schema)?void 0:d.outFields,a.outFields);a.outFields=a.outFields.length>=.75*e?["*"]:a.outFields;a.outFields.sort();if(d=p.diff(this._schema,a)){r("esri-2d-update-debug")&&console.debug("Applying Update - Source:",d);e="orderByFields"in this._serviceInfo&&this._serviceInfo.orderByFields?this._serviceInfo.orderByFields:this._serviceInfo.objectIdField+" ASC";e={returnCentroid:r("esri-2d-query-centroid-enabled")&&
"esriGeometryPolygon"===this._serviceInfo.geometryType,returnGeometry:!0,timeReferenceUnknownClient:"stream"!==this._serviceInfo.type&&this._serviceInfo.timeReferenceUnknownClient,outFields:a.outFields,outSpatialReference:this._outSR,orderByFields:[e],where:a.definitionExpression||"1\x3d1",gdbVersion:a.gdbVersion,historicMoment:a.historicMoment,timeExtent:t.fromJSON(a.timeExtent)};var f=this._schema&&p.hasDiff(d,"outFields");this._schema&&p.hasDiffAny(d,["timeExtent","definitionExpression","gdbVersion",
"historicMoment","customParameters"])&&(b.why.mesh.push("Layer filter and/or custom parameters changed"),b.why.source.push("Layer filter and/or custom parameters changed"),b.mesh=!0,b.source=!0,b.queryFilter=!0);f&&(b.why.source.push("Layer required fields changed"),b.source=!0);p.diff(e,this._queryInfo)&&(this._queryInfo=e);this._schema=a;this._resolver.resolve()}};c.whenInitialized=function(){return this._resolver.promise};c.applyUpdate=function(){var b=k._asyncToGenerator(function*(a){a.queryFilter||
a.source&&this._didEdit?(this.refresh(a.version),this._didEdit=!1):(this._subscriptions.forEach(d=>d.applyUpdate(a)),yield this.resend())});return function(a){return b.apply(this,arguments)}}();c.refresh=function(b){for(const a of this._tiles())this.unsubscribe(a),this.subscribe(a,b)};c.subscribe=function(b,a){a=new x.DataTileSubscription(b,a);this._subscriptions.set(b.id,a)};c.unsubscribe=function(b){const a=this.get(b.id);v.isSome(a)&&a.abort();this._subscriptions.delete(b.id)};c.createQuery=function(b=
{}){return new w({...this._queryInfo,historicMoment:this._queryInfo.historicMoment?new Date(this._queryInfo.historicMoment):null,...b})};c.get=function(b){return this._subscriptions.has(b)?this._subscriptions.get(b):null};c.queryLastEditDate=function(){var b=k._asyncToGenerator(function*(){throw Error("Service does not support query type");});return function(){return b.apply(this,arguments)}}();c.query=function(){var b=k._asyncToGenerator(function*(a){throw Error("Service does not support query");
});return function(a){return b.apply(this,arguments)}}();c._tiles=function*(){const b=Array.from(this._subscriptions.values());for(const a of b)yield a.tile};c.edit=function(){var b=k._asyncToGenerator(function*(a,d){var e=this,f=Array.from(this._subscriptions.values());const A=f.map(({tile:g})=>g);for(const g of f)g.removeIds(d);a.length&&(f=A.map(g=>{const h=this.createTileQuery(g);h.objectIds=a;return{tile:g,query:h}}).map(function(){var g=k._asyncToGenerator(function*({tile:h,query:m}){return{tile:h,
result:yield e.query(m),query:m}});return function(h){return g.apply(this,arguments)}}()),f=(yield n.eachAlwaysValues(f)).map(function(){var g=k._asyncToGenerator(function*({tile:h,result:m}){(m.hasFeatures||d.length||a.length)&&(h=e._subscriptions.get(h.key.id))&&h.edit(m,a)});return function(h){return g.apply(this,arguments)}}()),yield n.eachAlways(f));this._didEdit=!0});return function(a,d){return b.apply(this,arguments)}}();return l}();q.DataTileSource=B;Object.defineProperties(q,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});