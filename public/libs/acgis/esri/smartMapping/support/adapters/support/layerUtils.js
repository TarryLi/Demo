// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../CSVLayerAdapter ../FeatureLayerAdapter ../LayerAdapter ../OGCFeatureLayerAdapter ../PointCloudLayerAdapter ../SceneLayerAdapter".split(" "),function(a,c,d,m,n,p,q){a.LayerType=void 0;(function(b){b[b.CSVLayer=0]="CSVLayer";b[b.GeoJSONLayer=1]="GeoJSONLayer";b[b.FeatureLayer=2]="FeatureLayer";b[b.OGCFeatureLayer=3]="OGCFeatureLayer";b[b.SceneLayer=4]="SceneLayer";b[b.PointCloudLayer=5]="PointCloudLayer";b[b.WFSLayer=6]="WFSLayer"})(a.LayerType||(a.LayerType={}));const e={[a.LayerType.CSVLayer]:{adapter:c,
type:"csv",label:"CSVLayer"},[a.LayerType.FeatureLayer]:{adapter:d,type:"feature",label:"FeatureLayer"},[a.LayerType.OGCFeatureLayer]:{adapter:n,type:"ogc-feature",label:"OGCFeatureLayer"},[a.LayerType.GeoJSONLayer]:{adapter:d,type:"geojson",label:"GeoJSONLayer"},[a.LayerType.SceneLayer]:{adapter:q,type:"scene",label:"SceneLayer"},[a.LayerType.PointCloudLayer]:{adapter:p,type:"point-cloud",label:"PointCloudLayer"},[a.LayerType.WFSLayer]:{adapter:d,type:"wfs",label:"WFSLayer"}},g=[a.LayerType.CSVLayer,
a.LayerType.FeatureLayer,a.LayerType.OGCFeatureLayer,a.LayerType.GeoJSONLayer,a.LayerType.SceneLayer,a.LayerType.PointCloudLayer,a.LayerType.WFSLayer];c=[a.LayerType.CSVLayer,a.LayerType.FeatureLayer,a.LayerType.OGCFeatureLayer,a.LayerType.SceneLayer,a.LayerType.GeoJSONLayer,a.LayerType.WFSLayer];a.createLayerAdapter=function(b,f=g){if(b instanceof m)return b;let h=null;f.some(k=>{const l=b.type===e[k].type;l&&(h=new e[k].adapter({layer:b}));return l});return h};a.defaultSupportedLayerTypes=g;a.featureCapableLayerTypes=
c;a.getLayerTypeLabels=function(b){return b.map(f=>e[f].label)};Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});