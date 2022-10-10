// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ../PopupTemplate ../renderers/ClassBreaksRenderer ../renderers/DictionaryRenderer ../renderers/DotDensityRenderer ../renderers/HeatmapRenderer ../renderers/PieChartRenderer ../renderers/Renderer ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/jsonUtils ../renderers/support/types ../request ../symbols ../core/Error ../core/Logger ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/extensions/serializableProperty/reader ../geometry/support/typeUtils ./Layer ./mixins/ArcGISService ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/FeatureEffectLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./support/commonProperties ./support/featureReductionUtils ./support/fieldProperties ./support/fieldUtils ./support/LabelClass ./support/labelingInfo ./support/PurgeOptions ../renderers/support/styleUtils ../rest/support/Query ../support/popupUtils ../symbols/support/ElevationInfo ../geometry/Extent ../geometry/SpatialReference".split(" "),
function(n,c,p,A,fa,ha,ia,ja,ka,la,B,C,D,t,E,F,l,G,H,b,I,d,ma,na,u,v,J,K,w,L,M,N,O,P,Q,R,S,T,U,k,V,W,q,X,Y,x,Z,aa,ba,ca,da,y){const ea=G.getLogger("esri.layers.StreamLayer");p=W.defineFieldProperties();b=function(z){function m(...a){a=z.call(this,...a)||this;a.copyright=null;a.definitionExpression=null;a.displayField=null;a.elevationInfo=null;a.featureReduction=null;a.fields=null;a.fieldsIndex=null;a.geometryDefinition=null;a.geometryType=null;a.labelsVisible=!0;a.labelingInfo=null;a.legendEnabled=
!0;a.maxReconnectionAttempts=0;a.maxReconnectionInterval=20;a.maxScale=0;a.minScale=0;a.objectIdField=null;a.operationalLayerType="ArcGISStreamLayer";a.popupEnabled=!0;a.popupTemplate=null;a.purgeOptions=new x;a.screenSizePerspectiveEnabled=!0;a.sourceJSON=null;a.spatialReference=y.WGS84;a.type="stream";a.url=null;a.updateInterval=300;a.webSocketUrl=null;return a}n._inheritsLoose(m,z);var g=m.prototype;g.normalizeCtorArgs=function(a,e){return"string"===typeof a?{url:a,...e}:a};g.load=function(a){if(!("WebSocket"in
globalThis))return this.addResolvingPromise(Promise.reject(new l("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const e=H.isSome(a)?a.signal:null;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},a).catch(I.throwIfAbortError).then(()=>this._fetchService(e)));return Promise.resolve(this)};g.readRenderer=function(a,e,f){e=e.layerDefinition||
e;if(a=e.drawingInfo&&e.drawingInfo.renderer||void 0)return(a=D.read(a,e,f)||void 0)||ea.error("Failed to create renderer",{rendererDefinition:e.drawingInfo.renderer,layer:this,context:f}),a;if(e.defaultSymbol)return e.types&&e.types.length?new C({defaultSymbol:r(e.defaultSymbol,e,f),field:e.typeIdField,uniqueValueInfos:e.types.map(h=>({id:h.id,symbol:r(h.symbol,h,f)}))}):new B({symbol:r(e.defaultSymbol,e,f)})};g.createPopupTemplate=function(a){return ba.createPopupTemplate(this,a)};g.createQuery=
function(){const a=new aa;a.returnGeometry=!0;a.outFields=["*"];a.where=this.definitionExpression||"1\x3d1";return a};g.getFieldDomain=function(a,e){if(!this.fields)return null;let f=null;this.fields.some(h=>{h.name===a&&(f=h.domain);return!!f});return f};g.getField=function(a){return this.fieldsIndex.get(a)};g.serviceSupportsSpatialReference=function(a){return!0};g._fetchService=function(){var a=n._asyncToGenerator(function*(e){var f;if(this.webSocketUrl){var h;if(null==(h=this.timeInfo)||!h.trackIdField)throw new l("stream-layer:missing-metadata",
"The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new l("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new l("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new l("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else this.sourceJSON||({data:e}=yield E(this.parsedUrl.path,{query:{f:"json",...this.customParameters,
...this.parsedUrl.query},responseType:"json",signal:e}),this.sourceJSON=e);this.sourceJSON={...null!=(f=this.sourceJSON)?f:{},objectIdField:"__esri_stream_id__"};this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});q.fixRendererFields(this.renderer,this.fieldsIndex);q.fixTimeInfoFields(this.timeInfo,this.fieldsIndex);return Z.loadStyleRenderer(this,{origin:"service"})});return function(e){return a.apply(this,arguments)}}();n._createClass(m,[{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},
{key:"renderer",set:function(a){q.fixRendererFields(a,this.fieldsIndex);this._set("renderer",a)}}]);return m}(P.FeatureEffectLayer(N.BlendLayer(U.TemporalLayer(T.ScaleRangeLayer(S.RefreshableLayer(M.ArcGISService(Q.OperationalLayer(R.PortalLayer(b.MultiOriginJSONMixin(O.CustomParametersMixin(L)))))))))));c.__decorate([d.property({type:String})],b.prototype,"copyright",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"defaultPopupTemplate",null);c.__decorate([d.property({type:String,json:{name:"layerDefinition.definitionExpression",
write:{enabled:!0,allowNull:!0}}})],b.prototype,"definitionExpression",void 0);c.__decorate([d.property({type:String})],b.prototype,"displayField",void 0);c.__decorate([d.property({type:ca.default})],b.prototype,"elevationInfo",void 0);c.__decorate([d.property(V.featureReductionProperty)],b.prototype,"featureReduction",void 0);c.__decorate([d.property(p.fields)],b.prototype,"fields",void 0);c.__decorate([d.property(p.fieldsIndex)],b.prototype,"fieldsIndex",void 0);c.__decorate([d.property({type:da})],
b.prototype,"geometryDefinition",void 0);c.__decorate([d.property({type:w.featureGeometryTypeKebabDictionary.apiValues,json:{read:{reader:w.featureGeometryTypeKebabDictionary.read}}})],b.prototype,"geometryType",void 0);c.__decorate([d.property(k.labelsVisible)],b.prototype,"labelsVisible",void 0);c.__decorate([d.property({type:[X],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:Y.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],b.prototype,"labelingInfo",
void 0);c.__decorate([d.property(k.legendEnabled)],b.prototype,"legendEnabled",void 0);c.__decorate([d.property({type:["show","hide"]})],b.prototype,"listMode",void 0);c.__decorate([d.property({type:u.Integer})],b.prototype,"maxReconnectionAttempts",void 0);c.__decorate([d.property({type:u.Integer})],b.prototype,"maxReconnectionInterval",void 0);c.__decorate([d.property(k.maxScale)],b.prototype,"maxScale",void 0);c.__decorate([d.property(k.minScale)],b.prototype,"minScale",void 0);c.__decorate([d.property({type:String})],
b.prototype,"objectIdField",void 0);c.__decorate([d.property({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],b.prototype,"operationalLayerType",void 0);c.__decorate([d.property(k.popupEnabled)],b.prototype,"popupEnabled",void 0);c.__decorate([d.property({type:A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],b.prototype,"popupTemplate",void 0);c.__decorate([d.property({type:x})],b.prototype,"purgeOptions",void 0);c.__decorate([d.property({types:t.rendererTypes,json:{origins:{service:{write:{target:"drawingInfo.renderer",
enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:t.webSceneRendererTypes,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],b.prototype,"renderer",null);c.__decorate([v.reader("service","renderer",["drawingInfo.renderer","defaultSymbol"]),v.reader("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],b.prototype,"readRenderer",null);c.__decorate([d.property(k.screenSizePerspectiveEnabled)],b.prototype,"screenSizePerspectiveEnabled",
void 0);c.__decorate([d.property()],b.prototype,"sourceJSON",void 0);c.__decorate([d.property({type:y,json:{origins:{service:{read:{source:"spatialReference"}}}}})],b.prototype,"spatialReference",void 0);c.__decorate([d.property({json:{read:!1}})],b.prototype,"type",void 0);c.__decorate([d.property(k.url)],b.prototype,"url",void 0);c.__decorate([d.property({type:Number})],b.prototype,"updateInterval",void 0);c.__decorate([d.property({type:String})],b.prototype,"webSocketUrl",void 0);b=c.__decorate([J.subclass("esri.layers.StreamLayer")],
b);const r=K.createTypeReader({types:F.symbolTypesRenderer});return b});