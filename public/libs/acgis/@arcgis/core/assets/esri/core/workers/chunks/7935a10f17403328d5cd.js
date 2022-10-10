"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1903,7258],{22203:(e,t,r)=>{r.d(t,{C:()=>y});var s=r(29768),i=r(15324),o=r(95873),n=r(71252),l=(r(76506),r(60991),r(92143),r(19657)),a=r(34250),u=(r(91306),r(17533));let p=class extends((0,o.p)(i.Z)){constructor(e){super(e),this.getCollections=null}initialize(){this.handles.add((0,l.a)((()=>this._refresh())))}destroy(){this.getCollections=null}_refresh(){const e=(0,n.i)(this.getCollections)?this.getCollections():null;if((0,n.a)(e))return void this.removeAll();let t=0;for(const r of e)(0,n.i)(r)&&(t=this._processCollection(t,r));this.splice(t,this.length)}_createNewInstance(e){return new i.Z(e)}_processCollection(e,t){if(!t)return e;const r=this.itemFilterFunction?this.itemFilterFunction:e=>!!e;for(const s of t)if(s){if(r(s)){const t=this.indexOf(s,e);t>=0?t!==e&&this.reorder(s,e):this.add(s,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(s);if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r);else e=this._processCollection(e,t)}}return e}};(0,s._)([(0,a.Cb)()],p.prototype,"getCollections",void 0),(0,s._)([(0,a.Cb)()],p.prototype,"getChildrenFunction",void 0),(0,s._)([(0,a.Cb)()],p.prototype,"itemFilterFunction",void 0),p=(0,s._)([(0,u.j)("esri.core.CollectionFlattener")],p);const y=p},52228:(e,t,r)=>{var s,i;function o(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function n(e){return null!=e&&!isNaN(e)&&isFinite(e)}function l(e){return e.valueExpression?s.Expression:e.field&&"string"==typeof e.field?s.Field:s.Unknown}function a(e,t){const r=t||l(e),o=e.valueUnit||"unknown";return r===s.Unknown?i.Constant:e.stops?i.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?i.ClampedLinear:"unknown"===o?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}r.d(t,{I:()=>s,T:()=>i,a:()=>a,b:()=>n,g:()=>l,i:()=>o}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(s||(s={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(i||(i={}))},21903:(e,t,r)=>{r.r(t),r.d(t,{default:()=>$});var s=r(29768),i=(r(74569),r(15324)),o=r(22203),n=r(71252),l=r(54179),a=r(50406),u=r(58085),p=r(32101),y=r(34250),h=r(76506),d=r(91306),c=r(97714),f=r(17533),m=r(2906),g=r(60947),b=r(41617),v=r(80462),_=r(89440),w=r(39241),C=r(68219),S=r(6416),I=r(67541),x=r(75067),P=r(12047),F=r(81184),k=r(40642),E=r(86787),R=r(31450),G=r(88762),L=(r(86748),r(82058)),O=r(53326),j=r(98380);r(20208),r(87258);const N={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function T(e){const t=e.folders||[],r=t.slice(),s=new Map,i=new Map,o=new Map,n=new Map,l=new Map,a={esriGeometryPoint:i,esriGeometryPolyline:o,esriGeometryPolygon:n};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const t=(0,h.d9)(e);t.featureSet.features=[];const r=e.featureSet.geometryType;s.set(r,t);const l=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?z(i,l,e.featureSet.features):"esriGeometryPolyline"===r?z(o,l,e.featureSet.features):"esriGeometryPolygon"===r&&z(n,l,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{l.set(e.id,e)})),t.forEach((t=>{t.networkLinkIds.forEach((s=>{const i=function(e,t,r){const s=function(e,t){let r;return t.some((t=>t.id===e&&(r=t,!0))),r}(e,r);return s&&(s.parentFolderId=t,s.networkLink=s),s}(s,t.id,e.networkLinks);i&&r.push(i)}))})),r.forEach((e=>{if(e.featureInfos){e.points=(0,h.d9)(s.get("esriGeometryPoint")),e.polylines=(0,h.d9)(s.get("esriGeometryPolyline")),e.polygons=(0,h.d9)(s.get("esriGeometryPolygon")),e.mapImages=[];for(const t of e.featureInfos)switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const r=a[t.type].get(t.id);r&&e[N[t.type]].featureSet.features.push(r);break}case"GroundOverlay":{const r=l.get(t.id);r&&e.mapImages.push(r);break}}e.fullExtent=D([e])}}));const u=D(r);return{folders:t,sublayers:r,extent:u}}function Z(e,t,r,s){const i=G.id&&G.id.findCredential(e);e=(0,p.fl)(e,{token:i&&i.token});const o=R.Z.kmlServiceUrl;return(0,L.default)(o,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:s})}function M(e,t,r=null,s=[]){const i=[],o={},n=t.sublayers,l=t.folders.map((e=>e.id));return n.forEach((t=>{const n=new e;if(r?n.read(t,r):n.read(t),s.length&&l.includes(n.id)&&(n.visible=s.includes(n.id)),o[t.id]=n,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=o[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(n)}else i.unshift(n)})),i}function z(e,t,r){r.forEach((r=>{e.set(r.attributes[t],r)}))}function D(e){const t=(0,O.a)(O.N),r=(0,O.a)(O.N);for(const s of e){if(s.polygons&&s.polygons.featureSet&&s.polygons.featureSet.features)for(const e of s.polygons.featureSet.features)(0,j.b)(t,e.geometry),(0,O.k)(r,t);if(s.polylines&&s.polylines.featureSet&&s.polylines.featureSet.features)for(const e of s.polylines.featureSet.features)(0,j.b)(t,e.geometry),(0,O.k)(r,t);if(s.points&&s.points.featureSet&&s.points.featureSet.features)for(const e of s.points.featureSet.features)(0,j.b)(t,e.geometry),(0,O.k)(r,t);if(s.mapImages)for(const e of s.mapImages)(0,j.b)(t,e.extent),(0,O.k)(r,t)}return(0,O.j)(r,O.N)?null:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:g.Z.WGS84}}var U,J=r(21801);r(73796),r(21972),r(60474),r(66396),r(86656),r(92143),r(71552),r(91055),r(6540),r(19657),r(6906),r(60991),r(84069),r(91597),r(35132),r(89623),r(44567),r(92896),r(22781),r(57251),r(32422),r(89914),r(33101),r(14249),r(60217),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(59465),r(1648),r(8925),r(33957),r(3482),r(45154),r(16769),r(93603),r(15438),r(593),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(82673),r(34229),r(37029),r(92482),r(82426),r(29794),r(55306),r(96467),r(63571),r(30776),r(48027),r(54174),r(63130),r(25696),r(98402),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(59877),r(9960),r(30823),r(5853),r(39141),r(38742),r(48243),r(34635),r(10401),r(49900),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(36834),r(66122),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(65684),r(12158),r(74864),r(63683),r(94479),r(45702),r(51127),r(26822),r(51723),r(23243),r(51669),r(6090),r(3977),r(36741),r(11253),r(90319),r(38822),r(52228),r(74057),r(23761),r(48190),r(85557),r(53785),r(95587),r(94070),r(43022),r(16218),r(9075),r(71206),r(9352),r(89241),r(91700),r(51979),r(63136),r(32037),r(60698),r(90811),r(60045),r(68681),r(53321),r(86758),r(95310),r(93939),r(238),r(68714),r(97546),r(9801),r(53523),r(42911),r(46826),r(45433),r(54732);let q=U=class extends(x.Z.EventedMixin((0,P.eC)(F.Z))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){(0,u.N1)((()=>this.networkLink)).then((()=>(0,u.N1)((()=>!0===this.visible)))).then((()=>this.load()))}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=(0,n.i)(e)?e.signal:null,r=this._fetchService(this._get("networkLink").href,t).then((e=>{const t=D(e.sublayers);this.fullExtent=J.Z.fromJSON(t),this.sourceJSON=e;const r=(0,d.j)(i.Z.ofType(U),M(U,e));this.sublayers?this.sublayers.addMany(r):this.sublayers=r,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(r),Promise.resolve(this)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))]),this._set("sublayers",e)}castSublayers(e){return(0,d.j)(i.Z.ofType(U),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}_fetchService(e,t){return Z(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>T(e.data)))}};(0,s._)([(0,y.Cb)()],q.prototype,"description",void 0),(0,s._)([(0,y.Cb)()],q.prototype,"id",void 0),(0,s._)([(0,y.Cb)({readOnly:!0,value:null})],q.prototype,"networkLink",void 0),(0,s._)([(0,y.Cb)({json:{write:{allowNull:!0}}})],q.prototype,"parent",void 0),(0,s._)([(0,y.Cb)({value:null,json:{write:{allowNull:!0}}})],q.prototype,"sublayers",null),(0,s._)([(0,E.p)("sublayers")],q.prototype,"castSublayers",null),(0,s._)([(0,y.Cb)({value:null,json:{read:{source:"name",reader:e=>(0,k.s)(e)}}})],q.prototype,"title",void 0),(0,s._)([(0,y.Cb)({value:!0})],q.prototype,"visible",null),(0,s._)([(0,c.r)("visible",["visibility"])],q.prototype,"readVisible",null),(0,s._)([(0,y.Cb)()],q.prototype,"sourceJSON",void 0),(0,s._)([(0,y.Cb)({value:null})],q.prototype,"layer",null),(0,s._)([(0,y.Cb)({type:J.Z})],q.prototype,"fullExtent",void 0),q=U=(0,s._)([(0,f.j)("esri.layers.support.KMLSublayer")],q);const H=q;r(95873),r(82933),r(92200),r(51653),r(22465),r(65775),r(5777),r(41864),r(56420),r(73173),r(74742),r(28239),r(93314),r(35197),r(1557),r(47842),r(17298);const A=["kml","xml"];let V=class extends((0,v.h)((0,C.Q)((0,S.M)((0,_.O)((0,w.I)((0,l.M)(b.Z))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new o.C({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=g.Z.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.own([(0,u.YP)((()=>this.sublayers),((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),u.Z_),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return M(H,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],s=e.toArray();for(;s.length;){const e=s[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&s.push(...e.sublayers.toArray())),s.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,p.vt)(this.url,A)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=(0,n.i)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(a.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=T((await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:Z(this.url,this.outSpatialReference,this.refreshInterval,e)))).data);t&&this.read(t,{origin:"service"})}_recomputeFullExtent(){let e=null;(0,n.i)(this.extent)&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const s of r.sublayers.items)t(s),s.visible&&s.fullExtent&&((0,n.i)(e)?e.union(s.fullExtent):e=s.fullExtent.clone())};return t(this),e}};(0,s._)([(0,y.Cb)({readOnly:!0})],V.prototype,"allSublayers",void 0),(0,s._)([(0,y.Cb)({type:g.Z})],V.prototype,"outSpatialReference",void 0),(0,s._)([(0,y.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],V.prototype,"path",void 0),(0,s._)([(0,y.Cb)({readOnly:!0,json:{read:!1,write:!1}})],V.prototype,"legendEnabled",void 0),(0,s._)([(0,y.Cb)({type:["show","hide","hide-children"]})],V.prototype,"listMode",void 0),(0,s._)([(0,y.Cb)({type:["KML"]})],V.prototype,"operationalLayerType",void 0),(0,s._)([(0,y.Cb)({})],V.prototype,"resourceInfo",void 0),(0,s._)([(0,y.Cb)({type:i.Z.ofType(H),json:{write:{ignoreOrigin:!0}}})],V.prototype,"sublayers",void 0),(0,s._)([(0,c.r)(["web-map","portal-item"],"sublayers",["visibleFolders"])],V.prototype,"readSublayersFromItemOrWebMap",null),(0,s._)([(0,c.r)("service","sublayers",["sublayers"])],V.prototype,"readSublayers",null),(0,s._)([(0,m.w)("sublayers")],V.prototype,"writeSublayers",null),(0,s._)([(0,y.Cb)({readOnly:!0,json:{read:!1}})],V.prototype,"type",void 0),(0,s._)([(0,y.Cb)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],V.prototype,"title",null),(0,s._)([(0,y.Cb)(I.u)],V.prototype,"url",void 0),(0,s._)([(0,y.Cb)({readOnly:!0})],V.prototype,"visibleSublayers",null),(0,s._)([(0,y.Cb)({type:J.Z})],V.prototype,"extent",void 0),(0,s._)([(0,y.Cb)()],V.prototype,"fullExtent",null),V=(0,s._)([(0,f.j)("esri.layers.KMLLayer")],V);const $=V},39241:(e,t,r)=>{r.d(t,{I:()=>_});var s=r(29768),i=r(88762),o=r(82058),n=r(41864),l=r(60991),a=r(92143),u=r(71252),p=r(50406),y=r(32101),h=r(34250),d=(r(76506),r(91306),r(97714)),c=r(17533),f=r(2906),m=r(49900),g=r(56420),b=r(74653);r(31450),r(71552),r(40642),r(60474),r(66396),r(86656),r(6540),r(12047),r(21972),r(91055),r(19657),r(6906),r(81184),r(33101),r(21801),r(73796),r(60947),r(91597),r(86787),r(35132),r(89623),r(3482),r(67477),r(57251),r(78533),r(73173),r(74742),r(28239),r(91091),r(58943);const v=a.L.getLogger("esri.layers.mixins.PortalLayer"),_=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem?.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new g.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const s=await r.e(8642).then(r.bind(r,8642)).then((e=>e.l));return(0,p.k_)(t),await s.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,p.D_)(e)||v.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,p.r9)(e),!0))))}async _fetchUserHasEditingPrivileges(e){const t=this.url?i.id?.findCredential(this.url):null;if(!t)return!0;const r=w.credential===t?w.user:await this._fetchEditingUser(e);return w.credential=t,w.user=r,(0,u.a)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=i.id.findServerInfo(this.url);if(!r?.owningSystemUrl)return null;const s=`${r.owningSystemUrl}/sharing/rest`,l=m.Z.getDefault();if(l&&l.loaded&&(0,y.Fv)(l.restUrl)===(0,y.Fv)(s))return l.user;const a=`${s}/community/self`,p=(0,u.i)(e)?e.signal:null,h=await(0,n.r)((0,o.default)(a,{authMode:"no-prompt",query:{f:"json"},signal:p}));return h.ok?b.default.fromJSON(h.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,s=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||m.Z.getDefault());return r&&s&&!(0,y.tm)(s.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,s._)([(0,h.Cb)({type:g.default})],t.prototype,"portalItem",null),(0,s._)([(0,d.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,s._)([(0,f.w)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,s._)([(0,h.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,s._)([(0,c.j)("esri.layers.mixins.PortalLayer")],t),t},w={credential:null,user:null}},68219:(e,t,r)=>{r.d(t,{Q:()=>g});var s=r(29768),i=r(92143),o=r(50406),n=r(34250),l=(r(76506),r(91306),r(17533)),a=r(15324),u=(r(60991),r(19657));r(31450),r(71552),r(40642),r(60474),r(66396),r(86656),r(6540),r(91055),r(75067),r(21972),r(6906),r(89914);const p=new a.Z,y=new WeakMap;function h(e){return e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function d(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:d(t,e%t):0}let c=0,f=0;function m(){const e=Date.now();for(const t of p)t.refreshInterval&&e-(y.get(t)??0)+5>=6e4*t.refreshInterval&&(y.set(t,e),t.refresh(e))}(0,u.a)((()=>{const e=Date.now();let t=0;for(const r of p)t=d(Math.round(6e4*r.refreshInterval),t),r.refreshInterval?y.get(r)||y.set(r,e):y.delete(r);if(t!==f){if(f=t,clearInterval(c),0===f)return void(c=0);c=setInterval(m,f)}}));const g=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,o.Ds)((()=>this.hasDataChanged())),this.when().then((()=>{h(this)&&p.push(this)}),(()=>{}))}destroy(){h(this)&&p.includes(this)&&p.remove(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,o.R8)(this._debounceHasDataChanged()).then((t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})}),(e=>{i.L.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}};return(0,s._)([(0,n.Cb)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],t.prototype,"refreshInterval",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,s._)([(0,n.Cb)()],t.prototype,"refreshParameters",null),t=(0,s._)([(0,l.j)("esri.layers.mixins.RefreshableLayer")],t),t}},87258:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var s,i=r(29768),o=r(74569),n=r(23761),l=r(57251),a=r(12047),u=r(76506),p=r(71252),y=r(34250),h=(r(91306),r(97714)),d=r(17533),c=r(2906),f=r(60947),m=r(32422),g=r(97546);r(21801),r(40642),r(71552),r(73796),r(91597),r(92143),r(31450),r(86787),r(86656),r(66396),r(35132),r(89623),r(84069),r(44567),r(98380),r(92896),r(22781),r(86748),r(15324),r(91055),r(75067),r(21972),r(60474),r(6540),r(19657),r(6906),r(50406),r(60991),r(89914),r(14249),r(60217),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(59465),r(1648),r(8925),r(33957),r(3482),r(45154),r(16769),r(93603),r(15438),r(593),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(82673),r(34229),r(37029),r(96467),r(63571),r(30776),r(48027),r(54174),r(82426),r(29794),r(63130),r(25696),r(98402),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(59877),r(9960),r(30823),r(53326),r(92482),r(5853),r(39141),r(32101),r(38742),r(48243),r(34635),r(10401),r(49900),r(88762),r(82058),r(81184),r(33101),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(36834),r(66122),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(9801),r(53523),r(42911),r(46826),r(45433),r(54732);const b=new l.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let v=s=class extends a.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=f.Z.fromJSON(t.spatialReference),s=[];for(let t=0;t<e.length;t++){const i=e[t],o=n.Z.fromJSON(i),l=i.geometry&&i.geometry.spatialReference;(0,p.i)(o.geometry)&&!l&&(o.geometry.spatialReference=r);const a=i.aggregateGeometries,u=o.aggregateGeometries;if(a&&(0,p.i)(u))for(const e in u){const t=u[e],s=a[e]?.spatialReference;(0,p.i)(t)&&!s&&(t.spatialReference=r)}s.push(o)}return s}writeGeometryType(e,t,r,s){if(e)return void b.write(e,t,r,s);const{features:i}=this;if(i)for(const e of i)if(e&&(0,p.i)(e.geometry))return void b.write(e.geometry.type,t,r,s)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,s=(0,m.im)(e);return!r&&t.spatialReference&&(s.spatialReference=f.Z.fromJSON(t.spatialReference)),s}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&(0,p.i)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new s(this.cloneProperties())}cloneProperties(){return(0,u.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const s=t.features[r];if(s.geometry){const t=e&&e[r];s.geometry=t&&t.toJSON()||s.geometry}}return t}quantize(e){const{scale:[t,r],translate:[s,i]}=e,o=this.features,n=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-s)/t)),(e=>Math.round((i-e)/r)));for(let e=0,t=o.length;e<t;e++)n((0,p.u)(o[e].geometry))||(o.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[s,i],scale:[o,n]}=r,l=this._getHydrationFunction(e,(e=>e*o+s),(e=>i-e*n));for(const{geometry:e}of t)(0,p.i)(e)&&l(e);return this.transform=null,this}_quantizePoints(e,t,r){let s,i;const o=[];for(let n=0,l=e.length;n<l;n++){const l=e[n];if(n>0){const e=t(l[0]),n=r(l[1]);e===s&&n===i||(o.push([e-s,n-i]),s=e,i=n)}else s=t(l[0]),i=r(l[1]),o.push([s,i])}return o.length>0?o:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const s=(0,m.oU)(e)?e.rings:e.paths,i=[];for(let e=0,o=s.length;e<o;e++){const o=s[e],n=this._quantizePoints(o,t,r);n&&i.push(n)}return i.length>0?((0,m.oU)(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?e=>{const s=this._quantizePoints(e.points,t,r);return s.length>0?(e.points=s,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const s=(0,m.oU)(e)?e.rings:e.paths;let i,o;for(let e=0,n=s.length;e<n;e++){const n=s[e];for(let e=0,s=n.length;e<s;e++){const s=n[e];e>0?(i+=s[0],o+=s[1]):(i=s[0],o=s[1]),s[0]=t(i),s[1]=r(o)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const s=e.points;let i,o;for(let e=0,n=s.length;e<n;e++){const n=s[e];e>0?(i+=n[0],o+=n[1]):(i=n[0],o=n[1]),n[0]=t(i),n[1]=r(o)}}:void 0}};(0,i._)([(0,y.Cb)({type:String,json:{write:!0}})],v.prototype,"displayFieldName",void 0),(0,i._)([(0,y.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"exceededTransferLimit",void 0),(0,i._)([(0,y.Cb)({type:[n.Z],json:{write:!0}})],v.prototype,"features",void 0),(0,i._)([(0,h.r)("features")],v.prototype,"readFeatures",null),(0,i._)([(0,y.Cb)({type:[g.Z],json:{write:!0}})],v.prototype,"fields",void 0),(0,i._)([(0,y.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:b.read}}})],v.prototype,"geometryType",void 0),(0,i._)([(0,c.w)("geometryType")],v.prototype,"writeGeometryType",null),(0,i._)([(0,y.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasM",void 0),(0,i._)([(0,y.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasZ",void 0),(0,i._)([(0,y.Cb)({types:o.qM,json:{write:!0}})],v.prototype,"queryGeometry",void 0),(0,i._)([(0,h.r)("queryGeometry")],v.prototype,"readQueryGeometry",null),(0,i._)([(0,y.Cb)({type:f.Z,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,i._)([(0,c.w)("spatialReference")],v.prototype,"writeSpatialReference",null),(0,i._)([(0,y.Cb)({json:{write:!0}})],v.prototype,"transform",void 0),v=s=(0,i._)([(0,d.j)("esri.rest.support.FeatureSet")],v),v.prototype.toJSON.isDefaultToJSON=!0;const _=v}}]);