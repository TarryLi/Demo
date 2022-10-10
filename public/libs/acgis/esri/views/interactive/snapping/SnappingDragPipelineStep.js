// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../core/promiseUtils ../../../layers/graphics/dehydratedFeatureComparison ../dragEventPipeline ./SnappingContext ../../support/Scheduler".split(" "),function(r,A,e,t,B,u,C,v){let I=function(){function w(){this.next=new u.EventPipeline}w.prototype.createSnapDragEventPipelineStep=function({predicate:D=()=>!0,cancel:E,snappingManager:f,snappingContext:g,updatingHandles:F}){var G=this;if(e.isNone(f))return a=>a;let k=
null,c=null;const x=()=>{k=e.abortMaybe(k);f.doneSnapping();e.isSome(c)&&c.frameTask.remove();c=null};E.next(a=>{x();return a});this.next=new u.EventPipeline;const H=t.debounce(function(){var a=A._asyncToGenerator(function*({frameTask:b,point:d,context:l,event:h,dx:m,dy:n},p){const y=yield b.schedule(()=>f.snap(d,l,p),p);y.valid&&(b=yield b.schedule(()=>y.apply(),p),d!==q&&(b=f.update(q,l)),B.pointEquals(b,z)||(h.mapEnd.x=b.x+m,h.mapEnd.y=b.y+n,G.next.execute(h)))});return function(b,d){return a.apply(this,
arguments)}}());let q,z;return a=>{if(!D(a))return a;if("start"===a.action){var b="3d"===f.view.type?f.view.resourceController.scheduler.registerTask(v.TaskPriority.SNAPPING):v.ImmediateTask;c={context:new C.SnappingContext({editGeometryOperations:g.editGeometryOperations,elevationInfo:g.elevationInfo,pointer:g.pointer,vertexHandle:e.isSome(a.info)?a.info.handle:null,excludeFeature:g.excludeFeature,visualizer:g.visualizer}),originalPos:e.isSome(a.snapOrigin)?g.coordinateHelper.vectorToDehydratedPoint(a.snapOrigin):
a.mapStart,frameTask:b}}if(e.isSome(c)){b=c.context.coordinateHelper.vectorToDehydratedPoint(c.context.coordinateHelper.arrayToVector([c.originalPos.x,c.originalPos.y,c.originalPos.z]));b.x+=a.mapEnd.x-a.mapStart.x;b.y+=a.mapEnd.y-a.mapStart.y;const l=a.mapStart.x-c.originalPos.x,h=a.mapStart.y-c.originalPos.y,m={...a,action:"update"},n=c.context;var d=f.update(b,c.context);z=d;a.mapEnd.x=d.x+l;a.mapEnd.y=d.y+h;q=b;"end"!==a.action&&(d=c.frameTask,e.isSome(k)||(k=new AbortController),F.addPromise(t.ignoreAbortErrors(H({frameTask:d,
event:m,context:n,point:b,dx:l,dy:h},k.signal))))}"end"===a.action&&x();return a}};return w}();r.SnappingPipeline=I;Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});