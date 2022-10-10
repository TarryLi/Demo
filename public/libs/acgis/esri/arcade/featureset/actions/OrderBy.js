// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/languageUtils","../support/FeatureSet","../support/IdSet","../support/OrderbyClause"],function(k,m,p,n,t){return function(q){function l(b){var a=q.call(this,b)||this;a._orderbyclause=null;a.declaredClass="esri.arcade.featureset.actions.OrderBy";a._maxProcessing=100;a._orderbyclause=b.orderbyclause;a._parent=b.parentfeatureset;return a}k._inheritsLoose(l,q);var g=l.prototype;g._getSet=function(){var b=k._asyncToGenerator(function*(a){if(null===
this._wset){yield this._ensureLoaded();const c=yield this._getFilteredSet("",null,null,this._orderbyclause,a);this._checkCancelled(a);this._wset=c}return this._wset});return function(a){return b.apply(this,arguments)}}();g.manualOrderSet=function(){var b=k._asyncToGenerator(function*(a,c){a=yield this.getIdColumnDictionary(a,[],-1,c);this._orderbyclause.order(a);c=new n([],[],!0,null);for(let f=0;f<a.length;f++)c._known.push(a[f].id);return c});return function(a,c){return b.apply(this,arguments)}}();
g.getIdColumnDictionary=function(){var b=k._asyncToGenerator(function*(a,c,f,e){if(f<a._known.length-1){var d=this._maxQueryRate();if("GETPAGES"===a._known[f+1])return yield m.tick(this._parent._expandPagedSet(a,d,0,0,e)),this.getIdColumnDictionary(a,c,f,e);d=f+1;const h=[];for(;d<a._known.length&&"GETPAGES"!==a._known[d];)h.push(a._known[d]),d++;f+=h.length;d=yield m.tick(this._parent._getFeatureBatch(h,e));this._checkCancelled(e);for(const r of d)c.push({id:r.attributes[this.objectIdField],feature:r});
return this.getIdColumnDictionary(a,c,f,e)}return 0<a._candidates.length?(yield m.tick(this._refineSetBlock(a,this._maxProcessingRate(),e)),this._checkCancelled(e),this.getIdColumnDictionary(a,c,f,e)):c});return function(a,c,f,e){return b.apply(this,arguments)}}();g._isInFeatureSet=function(b){return this._parent._isInFeatureSet(b)};g._getFeatures=function(b,a,c,f){return this._parent._getFeatures(b,a,c,f)};g._featureFromCache=function(b){if(void 0===this._featureCache[b]){const a=this._parent._featureFromCache(b);
return void 0===a?void 0:null===a?null:this._featureCache[b]=a}return this._featureCache[b]};g._fetchAndRefineFeatures=function(){var b=k._asyncToGenerator(function*(){throw Error("Fetch and Refine should not be called in this featureset");});return function(){return b.apply(this,arguments)}}();g._getFilteredSet=function(){var b=k._asyncToGenerator(function*(a,c,f,e,d){yield this._ensureLoaded();e=yield this._parent._getFilteredSet(a,c,f,null===e?this._orderbyclause:e,d);this._checkCancelled(d);const h=
new n(e._candidates.slice(0),e._known.slice(0),e._ordered,this._clonePageDefinition(e.pagesDefinition));a=!0;0<e._candidates.length&&(a=!1);return!1===h._ordered?(d=yield this.manualOrderSet(h,d),!1!==a||null===c&&null===f||(d=new n(d._candidates.slice(0).concat(d._known.slice(0)),[],d._ordered,this._clonePageDefinition(d.pagesDefinition))),d):h});return function(a,c,f,e,d){return b.apply(this,arguments)}}();l.registerAction=function(){p._featuresetFunctions.orderBy=function(b){return""===b?this:
new l({parentfeatureset:this,orderbyclause:new t(b)})}};return l}(p)});