/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Accessor.js";import{L as n}from"./Logger.js";import{a as i}from"./maybe.js";import{Q as s}from"./Queue.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{h as o}from"../core/lang.js";import"./ensureType.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{R as h,c as l,i as p}from"./watch.js";import{e as c}from"../core/promiseUtils.js";class u{constructor(e,t=[]){this.eventType=e,this.keyModifiers=t}matches(e){if(e.type!==this.eventType)return!1;if(0===this.keyModifiers.length)return!0;const t=e.modifiers;for(const e of this.keyModifiers)if(!t.has(e))return!1;return!0}}const d=n.getLogger("esri.views.input.InputHandler");class g{constructor(e){this._manager=null,this._incoming={},this._outgoing={},this._incomingEventMatches=null,this._incomingEventTypes=null,this._outgoingEventTypes=null,this._hasSideEffects=e}get incomingEventMatches(){if(!this._incomingEventMatches){this._incomingEventMatches=[];for(const e in this._incoming){const t=this._incoming[e];for(const e of t)this._incomingEventMatches.push(e.match)}}return this._incomingEventMatches}get incomingEventTypes(){return this._incomingEventTypes||(this._incomingEventTypes=this.incomingEventMatches.map((e=>e.eventType))),this._incomingEventTypes}get outgoingEventTypes(){return this._outgoingEventTypes||(this._outgoingEventTypes=Object.keys(this._outgoing)),this._outgoingEventTypes}get hasSideEffects(){return this._hasSideEffects}get hasPendingInputs(){return!1}onInstall(e){this._manager?d.error("This InputHandler has already been registered with an InputManager"):(e.setEventCallback((e=>this._handleEvent(e))),e.setUninstallCallback((()=>this._onUninstall())),this._manager=e)}onUninstall(){}registerIncoming(e,t,n){let i;"function"==typeof t?(n=t,i=[]):i=t||[];const s="string"==typeof e?new u(e,i):e,r=()=>{this._incomingEventTypes=null,this._incomingEventMatches=null},o=e=>{const t=this._incoming[e.match.eventType];if(t){const n=t.indexOf(e);t.splice(n,1),r(),this._manager&&this._manager.updateDependencies()}},a=new _(s,n,{onPause:o,onRemove:o,onResume:e=>{const t=this._incoming[e.match.eventType];t&&!t.includes(e)&&(t.push(e),r(),this._manager&&this._manager.updateDependencies())}});let h=this._incoming[s.eventType];return h||(h=[],this._incoming[s.eventType]=h),h.push(a),r(),this._manager&&this._manager.updateDependencies(),a}registerOutgoing(e){if(this._outgoing[e])throw Error("There is already a callback registered for this outgoing InputEvent: "+e);const t=new m(e,{onEmit:(e,t,n,i)=>{this._manager.emit(e.eventType,t,n,i)},onRemove:e=>{delete this._outgoing[e.eventType],this._manager.updateDependencies()}});return this._outgoing[e]=t,this._outgoingEventTypes=null,this._manager&&this._manager.updateDependencies(),t}startCapturingPointer(e){this._manager.setPointerCapture(e,!0)}stopCapturingPointer(e){this._manager.setPointerCapture(e,!1)}refreshHasPendingInputs(){this._manager.refreshHasPendingInputs()}_onUninstall(){this._manager?(this.onUninstall(),this._manager=null):d.error("This InputHandler is not registered with an InputManager")}_handleEvent(e){const t=this._incoming[e.type];if(t)for(const n of t)if(n.match.matches(e)&&(n.callback(e),e.shouldStopPropagation()))break}}class _{constructor(e,t,n){this.match=e,this._callback=t,this._handler=n}pause(){this._handler.onPause(this)}resume(){this._handler.onResume(this)}remove(){this._handler.onRemove(this)}get callback(){return this._callback}}class m{constructor(e,t){this.eventType=e,this._removed=!1,this._handler=t}emit(e,t,n){this._removed||this._handler.onEmit(this,e,t,n)}remove(){this._removed=!0,this._handler.onRemove(this)}}class f{constructor(e,t){this.owner=t,this.properties={},this.afterDispatchHandle=null;for(const t in e){const n=e[t],i=new h(n,null,null,2,2);this.properties[t]={pool:i,acquired:[]}}this.afterDispatchHandle=l((()=>this._release()))}destroy(){this.afterDispatchHandle&&(this.afterDispatchHandle.remove(),this.afterDispatchHandle=null);for(const e in this.properties){const t=this.properties[e];for(const e of t.acquired)p(e)||t.pool.release(e);t.pool.destroy(),t.pool=null,t.acquired=null}this.properties=null,this.owner=null}get(e){const t=this.owner._get(e),n=this.properties[e];let i=n.pool.acquire();for(n.acquired.push(i);i===t;)n.acquired.push(i),i=n.pool.acquire();return i}_release(){for(const e in this.properties){const t=this.properties[e];let n=0;for(const e of t.acquired)p(e)?t.acquired[n++]=e:t.pool.release(e);t.acquired.length=n}}}const v=o("mac")?"Meta":"Ctrl",y={8:"Backspace",9:"Tab",13:"Enter",27:"Escape",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete"};for(let e=48;e<58;e++)y[e]=String.fromCharCode(e);for(let e=1;e<25;e++)y[111+e]=`F${e}`;for(let e=65;e<91;e++)y[e]=[String.fromCharCode(e+32),String.fromCharCode(e)];function P(e){if(void 0!==e.key)return c(e);const t=y[e.keyCode];return Array.isArray(t)?e.shiftKey?t[1]:t[0]:t}function E(e){switch(e){case"Ctrl":case"Alt":case"Shift":case"Meta":case"Primary":return!0}return!1}class C extends g{constructor(e){super(!0),this._onChange=e,this._value="mouse",this._x=null,this._y=null,this.registerIncoming("pointer-move",(e=>{const t="touch"===e.data.native.pointerType;this._setValue(t?"touch":"mouse",e.data.x,e.data.y)}))}_setValue(e,t,n){e===this._value&&this._x===t&&this._y===n||(this._value=e,this._x=t,this._y=n,this._onChange(e,t,n))}}const I=n.getLogger("esri.views.input.InputManager");let T=class extends t{constructor(e){super(e),this._pointerCaptures=new Map,this._nameToGroup={},this._handlers=[],this._currentPropagation=null,this._updateDependenciesAfterPropagation=!1,this._sourceEvents=new Set,this._keyModifiers=new Set,this._activeKeyModifiers=new Set,this._stoppedPropagationEventIds=new Set,this.primaryKey=v,this.latestPointerType="mouse",this._propertiesPool=new f({latestPointerLocation:H},this),this.latestPointerLocation=null,this.test={timestamp:void 0,hasCurrentPropagation:()=>!!this._currentPropagation}}initialize(){this.eventSource.onEventReceived=this._onEventReceived.bind(this),this._installRecognizers()}destroy(){const e=Object.keys(this._nameToGroup);for(const t of e)this.uninstallHandlers(t);this.eventSource=null,this._currentPropagation=null,this._propertiesPool.destroy()}get hasPendingInputs(){return this._handlers.some((e=>e.handler.hasPendingInputs))}installHandlers(e,t,n=M.INTERNAL){if(this._nameToGroup[e])return void I.error("There is already an InputHandler group registered under the name `"+e+"`");if(0===t.length)return void I.error("Can't register a group of zero handlers");const i={name:e,handlers:t.map((e=>({handler:e,active:!0,removed:!1,priorityIndex:0,groupPriority:n,eventCallback:null,uninstallCallback:null})))};this._nameToGroup[e]=i;for(let e=i.handlers.length-1;e>=0;e--){const t=i.handlers[e];this._handlers.push(t),t.handler.onInstall({updateDependencies:()=>{this.updateDependencies()},emit:(e,n,i,s,r)=>{this._emitInputEvent(t.priorityIndex+1,e,n,i,r,s)},setPointerCapture:(e,n)=>{this._setPointerCapture(i,t,e,n)},setEventCallback:e=>{t.eventCallback=e},setUninstallCallback:e=>{t.uninstallCallback=e},refreshHasPendingInputs:()=>{this.notifyChange("hasPendingInputs")}})}this.updateDependencies()}uninstallHandlers(e){const t=this._nameToGroup[e];t?(t.handlers.forEach((e=>{e.removed=!0,e.uninstallCallback()})),delete this._nameToGroup[e],this._currentPropagation?this._currentPropagation.needsHandlerGarbageCollect=!0:this._garbageCollectRemovedHandlers()):I.error("There is no InputHandler group registered under the name `"+e+"`")}hasHandlers(e){return void 0!==this._nameToGroup[e]}updateDependencies(){if(this._currentPropagation)return void(this._updateDependenciesAfterPropagation=!0);this._updateDependenciesAfterPropagation=!1;const e=new Set,t=new Set;this._handlersPriority=[];for(let e=this._handlers.length-1;e>=0;e--){const t=this._handlers[e];t.priorityIndex=e,this._handlersPriority.push(t)}this._handlersPriority=this._sortHandlersPriority(this._handlersPriority);for(let n=this._handlersPriority.length-1;n>=0;n--){const i=this._handlersPriority[n];i.priorityIndex=n;let s=i.handler.hasSideEffects;if(!s)for(const t of i.handler.outgoingEventTypes)if(e.has(t)){s=!0;break}if(s)for(const n of i.handler.incomingEventMatches){e.add(n.eventType);for(const e of n.keyModifiers)E(e)||t.add(e)}i.active=s}this._sourceEvents=e,this._keyModifiers=t,this._pointerCaptures.size>0&&this._sourceEvents.add("pointer-capture-lost"),this._keyModifiers.size>0&&(this._sourceEvents.add("key-down"),this._sourceEvents.add("key-up")),this.eventSource&&(this.eventSource.activeEvents=this._sourceEvents)}_setLatestPointer(e,t,n){this._get("latestPointerType")!==e&&this._set("latestPointerType",e);const s=this._get("latestPointerLocation");if(i(s)||s.x!==t||s.y!==n){const e=this._propertiesPool.get("latestPointerLocation");e.x=t,e.y=n,this._set("latestPointerLocation",e)}}_onEventReceived(e,t){if("pointer-capture-lost"===e){const e=t;this._pointerCaptures.delete(e.native.pointerId)}this._updateKeyModifiers(e,t);const n=null!=this.test.timestamp?this.test.timestamp:t.native?t.native.timestamp:void 0,i=t.native?t.native.cancelable:void 0;this._emitInputEventFromSource(e,t,n,i)}_updateKeyModifiers(e,t){if(!t)return;let n=!1;const i=()=>{if(!n){const e=new Set;this._activeKeyModifiers.forEach((t=>{e.add(t)})),this._activeKeyModifiers=e,n=!0}},s=(e,t)=>{t&&!this._activeKeyModifiers.has(e)?(i(),this._activeKeyModifiers.add(e)):!t&&this._activeKeyModifiers.has(e)&&(i(),this._activeKeyModifiers.delete(e))};if("key-down"===e||"key-up"===e){const n=t.key;this._keyModifiers.has(n)&&s(n,"key-down"===e)}const r=t.native;s("Alt",!(!r||!r.altKey)),s("Ctrl",!(!r||!r.ctrlKey)),s("Shift",!(!r||!r.shiftKey)),s("Meta",!(!r||!r.metaKey)),s("Primary",this._activeKeyModifiers.has(this.primaryKey))}_installRecognizers(){this._latestPointerHandler=new C(((e,t,n)=>this._setLatestPointer(e,t,n))),this.installHandlers("input-manager-logic",[this._latestPointerHandler],M.ALWAYS),this.recognizers.length>0&&this.installHandlers("default",this.recognizers,M.INTERNAL)}_setPointerCapture(e,t,n,i){const s=e.name+"-"+t.priorityIndex,r=this._pointerCaptures.get(n.pointerId)||new Set;this._pointerCaptures.set(n.pointerId,r),i?(r.add(s),1===r.size&&this.eventSource&&this.eventSource.setPointerCapture(n,!0)):r.has(s)&&(r.delete(s),0===r.size&&(this._pointerCaptures.delete(n.pointerId),this.eventSource&&this.eventSource.setPointerCapture(n,!1)))}_garbageCollectRemovedHandlers(){this._handlers=this._handlers.filter((e=>!e.removed)),this.updateDependencies()}_emitInputEventFromSource(e,t,n,i){this._emitInputEvent(0,e,t,n,i)}_emitInputEvent(e,t,n,i,s,r){const o=void 0!==i?i:this._currentPropagation?this._currentPropagation.timestamp:performance.now(),a=void 0!==s&&s,h={event:new S(t,n,o,r||this._activeKeyModifiers,a),priorityIndex:e};this._currentPropagation?this._currentPropagation.events.push(h):this._doNewPropagation(h)}_doNewPropagation(e){this._currentPropagation={events:new s,currentHandler:null,needsHandlerGarbageCollect:!1,timestamp:e.event.timestamp},this._currentPropagation.events.push(e),this._continuePropagation()}_continuePropagation(){const e=this._currentPropagation;if(e){for(;this._currentPropagation.events.length>0;){const{event:t,priorityIndex:n}=this._currentPropagation.events.pop(),i=t.data&&t.data.eventId;if(null==i||!this._stoppedPropagationEventIds.has(i))for(e.currentHandler=this._handlersPriority[n];e.currentHandler;){if(e.currentHandler.removed)e.needsHandlerGarbageCollect=!0;else{if(e.currentHandler.active&&!t.shouldStopPropagation()&&e.currentHandler.eventCallback(t),t.shouldStopPropagation()){null!=i&&this._stoppedPropagationEventIds.add(i);break}if(t.shouldPausePropagation((()=>this._continuePropagation())))return void this._pausePropagation({event:t,priorityIndex:e.currentHandler.priorityIndex+1})}e.currentHandler=this._handlersPriority[e.currentHandler.priorityIndex+1]}}e.needsHandlerGarbageCollect&&this._garbageCollectRemovedHandlers(),this.hasPendingInputs||this._stoppedPropagationEventIds.clear(),this._currentPropagation=null,this._updateDependenciesAfterPropagation&&this.updateDependencies()}}_pausePropagation(e){const t=new s;for(t.push(e);this._currentPropagation.events.length;)t.push(this._currentPropagation.events.pop());this._currentPropagation.events=t,this._currentPropagation.currentHandler=null}_compareHandlerPriority(e,t){if(e.handler.hasSideEffects!==t.handler.hasSideEffects)return e.handler.hasSideEffects?1:-1;if(e.groupPriority!==t.groupPriority)return e.groupPriority>t.groupPriority?-1:1;for(const n of e.handler.incomingEventMatches)for(const e of t.handler.incomingEventMatches){if(n.eventType!==e.eventType)continue;const t=n.keyModifiers.filter((t=>e.keyModifiers.includes(t)));if(t.length===n.keyModifiers.length!=(t.length===e.keyModifiers.length))return n.keyModifiers.length>e.keyModifiers.length?-1:1}return e.priorityIndex>t.priorityIndex?-1:1}_sortHandlersPriority(e){const t=[];for(const n of e){let e=0;for(;e<t.length&&this._compareHandlerPriority(n,t[e])>=0;)e++;t.splice(e,0,n)}return t}get debug(){const e=e=>{const t=this._setPointerCapture;this._setPointerCapture=()=>{},e(),this._setPointerCapture=t};return{injectEvent:(t,n)=>{e((()=>{this._onEventReceived(t,n)}))},disablePointerCapture:e}}};e([r({readOnly:!0})],T.prototype,"hasPendingInputs",null),e([r()],T.prototype,"eventSource",void 0),e([r()],T.prototype,"recognizers",void 0),e([r({readOnly:!0})],T.prototype,"latestPointerType",void 0),e([r({readOnly:!0})],T.prototype,"latestPointerLocation",void 0),T=e([a("esri.views.input.InputManager")],T);class S{constructor(e,t,n,i,s){this.type=e,this.data=t,this.timestamp=n,this.modifiers=i,this.cancelable=s,this._propagationState=k.NONE,this._resumeCallback=null}stopPropagation(){this._propagationState|=k.STOPPED}shouldStopPropagation(){return 0!=(this._propagationState&k.STOPPED)}async(e){this._propagationState|=k.PAUSED;const t=(e,t)=>{this._propagationState&=~k.PAUSED;const n=this._resumeCallback;if(this._resumeCallback=null,n&&n(),t)throw e;return e};return("function"==typeof e?e():e).then((e=>t(e,!1)),(e=>t(e,!0)))}shouldPausePropagation(e){return!!(this._propagationState&k.PAUSED)&&(this._resumeCallback=e,!0)}preventDefault(){this.data.native.preventDefault()}}var k;!function(e){e[e.NONE=0]="NONE",e[e.STOPPED=1]="STOPPED",e[e.PAUSED=2]="PAUSED"}(k||(k={}));const M={ALWAYS:1,DEFAULT:0,TOOL:-1,WIDGET:-2,INTERNAL:-3};class H{}export{g as I,f as P,M as V,T as a,P as e};
