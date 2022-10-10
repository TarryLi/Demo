// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../Graphic ../../core/Collection ../../core/Error ../../core/lang ../../core/maybe ../../core/urlUtils ../../geometry/support/normalizeUtils".split(" "),function(w,m,B,n,f,C,x,D,E){function p(){p=m._asyncToGenerator(function*(a,b,d,e={}){let c,k;const h={edits:d,result:new Promise((g,q)=>{c=g;k=q})};a.emit("apply-edits",h);try{var y;const {results:g,edits:q}=yield F(a,b,d,e);b=G=>G.filter(H=>!H.error).map(C.clone);const l={edits:q,addedFeatures:b(g.addFeatureResults),
updatedFeatures:b(g.updateFeatureResults),deletedFeatures:b(g.deleteFeatureResults),addedAttachments:b(g.addAttachmentResults),updatedAttachments:b(g.updateAttachmentResults),deletedAttachments:b(g.deleteAttachmentResults)};null!=(y=g.editedFeatureResults)&&y.length&&(l.editedFeatures=g.editedFeatureResults);(l.addedFeatures.length||l.updatedFeatures.length||l.deletedFeatures.length||l.addedAttachments.length||l.updatedAttachments.length||l.deletedAttachments.length)&&a.emit("edits",l);c(l);return g}catch(g){throw k(g),
g;}});return p.apply(this,arguments)}function F(a,b,d,e){return r.apply(this,arguments)}function r(){r=m._asyncToGenerator(function*(a,b,d,e){yield a.load();if(!b||null==b.applyEdits)throw new f(`${a.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:a});if(!a.editingEnabled)throw new f(`${a.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:a});const {edits:c,options:k}=yield I(a,d,e);return c.addFeatures.length||c.updateFeatures.length||
c.deleteFeatures.length||c.addAttachments.length||c.updateAttachments.length||c.deleteAttachments.length?{edits:c,results:yield b.applyEdits(c,k)}:{edits:c,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}});return r.apply(this,arguments)}function I(a,b,d){return t.apply(this,arguments)}function t(){t=m._asyncToGenerator(function*(a,b,d){var e=b&&(b.addFeatures||b.updateFeatures||b.deleteFeatures),
c=b&&(b.addAttachments||b.updateAttachments||b.deleteAttachments);if(!b||!e&&!c)throw new f(`${a.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!a.capabilities.data.isVersioned&&d&&d.gdbVersion)throw new f(`${a.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!a.capabilities.editing.supportsRollbackOnFailure&&
d&&d.rollbackOnFailureEnabled)throw new f(`${a.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!a.capabilities.editing.supportsGlobalId&&d&&d.globalIdUsed)throw new f(`${a.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!a.capabilities.editing.supportsGlobalId&&c)throw new f(`${a.type}-layer:invalid-parameter`,
"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!d||!d.globalIdUsed)&&c)throw new f(`${a.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");e={...d};null!=e.rollbackOnFailureEnabled||a.capabilities.editing.supportsRollbackOnFailure||(e.rollbackOnFailureEnabled=!0);if(!1===e.rollbackOnFailureEnabled&&
"original-and-current-features"===e.returnServiceEditsOption)throw new f(`${a.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!a.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference&&e.returnServiceEditsInSourceSR)throw new f(`${a.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");
if(e.returnServiceEditsInSourceSR&&"original-and-current-features"!==e.returnServiceEditsOption)throw new f(`${a.type}-layer:invalid-parameter`,"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");c={...b};c.addFeatures=b&&n.isCollection(b.addFeatures)?b.addFeatures.toArray():c.addFeatures||[];c.updateFeatures=b&&n.isCollection(b.updateFeatures)?b.updateFeatures.toArray():c.updateFeatures||[];c.deleteFeatures=b&&n.isCollection(b.deleteFeatures)?
b.deleteFeatures.toArray():c.deleteFeatures||[];if(c.addFeatures.length&&!a.capabilities.operations.supportsAdd)throw new f(`${a.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(c.updateFeatures.length&&!a.capabilities.operations.supportsUpdate)throw new f(`${a.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(c.deleteFeatures.length&&!a.capabilities.operations.supportsDelete)throw new f(`${a.type}-layer:unsupported-operation`,"Layer does not support deleting features.");
c.addAttachments=c.addAttachments||[];c.updateAttachments=c.updateAttachments||[];c.deleteAttachments=c.deleteAttachments||[];c.addFeatures=c.addFeatures.map(z);c.updateFeatures=c.updateFeatures.map(z);const k=d&&d.globalIdUsed;c.addFeatures.forEach(h=>{u(h,a,k)});c.updateFeatures.forEach(h=>{u(h,a,k);if("geometry"in h&&x.isSome(h.geometry)&&!a.capabilities.editing.supportsGeometryUpdate)throw new f(`${a.type}-layer:unsupported-operation`,"Layer does not support geometry updates.");});c.deleteFeatures.forEach(h=>
{u(h,a,k)});c.addAttachments.forEach(h=>A(h,a));c.updateAttachments.forEach(h=>A(h,a));return{edits:yield J(c),options:e}});return t.apply(this,arguments)}function u(a,b,d){if(d){if("attributes"in a&&!a.attributes[b.globalIdField])throw new f(`${b.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in a||a.globalId))throw new f(`${b.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true");}if("geometry"in
a&&x.isSome(a.geometry)){if(a.geometry.hasZ&&!1===b.capabilities.data.supportsZ)throw new f(`${b.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(a.geometry.hasM&&!1===b.capabilities.data.supportsM)throw new f(`${b.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.");}}function A(a,b){const {feature:d,attachment:e}=a;if(!d||"attributes"in d&&!d.attributes[b.globalIdField])throw new f(`${b.type}-layer:invalid-parameter`,
"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in d||d.globalId))throw new f(`${b.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!e.globalId)throw new f(`${b.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!e.data&&!e.uploadId)throw new f(`${b.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(e.data instanceof File&&e.data.name||e.name))throw new f(`${b.type}-layer:invalid-parameter`,
"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!b.capabilities.editing.supportsUploadWithItemId&&e.uploadId)throw new f(`${b.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"===typeof e.data&&(a=D.dataComponents(e.data))&&!a.isBase64)throw new f(`${b.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string");}function J(a){return v.apply(this,
arguments)}function v(){v=m._asyncToGenerator(function*(a){var b=a.addFeatures,d=a.updateFeatures,e=b.concat(d).map(c=>c.geometry);e=yield E.normalizeCentralMeridian(e);b=b.length;d=d.length;e.slice(0,b).forEach((c,k)=>a.addFeatures[k].geometry=c);e.slice(b,b+d).forEach((c,k)=>a.updateFeatures[k].geometry=c);return a});return v.apply(this,arguments)}function z(a){const b=new B;a.attributes||(a.attributes={});b.geometry=a.geometry;b.attributes=a.attributes;return b}w.applyEdits=function(a,b,d){return p.apply(this,
arguments)};Object.defineProperties(w,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});