/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{i as e,r as i}from"./maybe.js";import{eachAlwaysValues as n,c as s}from"../core/promiseUtils.js";import"./Logger.js";import{s as a}from"./ensureType.js";import{h as r}from"../core/lang.js";import"../core/accessorSupport/decorators/property.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{o as h}from"./mathUtils.js";import{e as u,I as l}from"./InputManager.js";import{addFrameTask as c,M as p}from"../core/scheduling.js";import d from"../views/input/gamepad/GamepadInputDevice.js";import{b as m}from"./screenUtils2.js";import{f as g}from"./screenUtils.js";import _ from"../core/Error.js";import{g as v}from"./capabilities2.js";import{C as b}from"./context-util.js";const f=i=>{let s=class extends i{async fetchPopupFeatures(t,e){await this.when();const{location:i,queryArea:s,layerViewsAndGraphics:a,clientOnlyGraphics:r}=await this._prepareFetchPopupFeatures(t,e),o=Promise.resolve(r),h=this._queryLayerPopupFeatures(s,a,e),u=h.map((t=>t.promise));return{location:i,clientOnlyGraphics:r,allGraphicsPromise:n([o,...u]).then((t=>Array.from(new Set(t.flat())))),promisesPerLayerView:h}}_queryLayerPopupFeatures(t,i,n){return i.map((({layerView:i,graphics:s})=>{const a={clientGraphics:s,event:e(n)?n.event:null,signal:e(n)?n.signal:null,defaultPopupTemplateEnabled:!!e(n)&&!!n.defaultPopupTemplateEnabled},r=i.fetchPopupFeatures(t,a);return{layerView:i,promise:r}}))}_isValidPopupGraphic(t,i){return t&&!!t.getEffectivePopupTemplate(e(i)&&i.defaultPopupTemplateEnabled)}async _prepareFetchPopupFeatures(t,e){const{clientGraphics:i,queryArea:n,location:s}=await this._popupHitTestGraphics(t,e),a=this._getFetchPopupLayerViews(),{layerViewsAndGraphics:r,clientOnlyGraphics:o}=this._graphicsPerFetchPopupLayerView(i,a);return{clientOnlyGraphics:o,layerViewsAndGraphics:r,queryArea:n,location:s}}async _popupHitTestGraphics(t,e){const{results:i,mapPoint:n}=await this.popupHitTest(t),s=i.filter((t=>"graphic"===t.type&&this._isValidPopupGraphic(t.graphic,e))),a=s.length?s[0].mapPoint:null;return{clientGraphics:s.map((t=>t.graphic)),queryArea:n,location:n||a}}_getFetchPopupLayerViews(){const t=[];return this.allLayerViews.forEach((e=>{this._isValidPopupLayerView(e)&&t.push(e)})),e(this.graphicsView)&&this._isValidPopupLayerView(this.graphicsView)&&t.push(this.graphicsView),t.reverse()}_isValidPopupLayerView(t){return e(t)&&(!("layer"in t)||!t.suspended)&&"fetchPopupFeatures"in t}_graphicsPerFetchPopupLayerView(t,e){const i=[],n=new Map,s=e.map((t=>{const e=[];return"layer"in t?n.set(t.layer,e):n.set(t.graphics,e),{layerView:t,graphics:e}}));for(const e of t){const t=n.get(e.layer)||n.get(e.sourceLayer)||null;t?t.push(e):i.push(e)}return{layerViewsAndGraphics:s,clientOnlyGraphics:i}}};return s=t([o("esri.views.PopupView")],s),s};function P(t,e){switch(e){case"primary":return"touch"===t.pointerType||0===t.button;case"secondary":return"touch"!==t.pointerType&&2===t.button;case"tertiary":return"touch"!==t.pointerType&&1===t.button}}function D(t,e){if("touch"===t.pointerType)return!1;switch(e){case"primary":return 0===t.button;case"secondary":return 2===t.button;case"tertiary":return 1===t.button}}class y{constructor(t){this.callbacks=t,this.currentCount=0,this.callbacks.condition||(this.callbacks.condition=()=>!0)}handle(t){const e=t.data,i=e.pointers.size;switch(e.action){case"start":this.currentCount=i,this._emitStart(t);break;case"added":this._emitEnd(this.previousEvent),this.currentCount=i,this._emitStart(t);break;case"update":this._emitUpdate(t);break;case"removed":this.startEvent&&this._emitEnd(this.previousEvent),this.currentCount=i,this._emitStart(t);break;case"end":this._emitEnd(t),this.currentCount=0}this.previousEvent=t}_emitStart(t){this.startEvent=t,this.callbacks.condition(this.currentCount,t)&&this.callbacks.start(this.currentCount,t,this.startEvent)}_emitUpdate(t){this.callbacks.condition(this.currentCount,t)&&this.callbacks.update(this.currentCount,t,this.startEvent)}_emitEnd(t){this.callbacks.condition(this.currentCount,t)&&this.callbacks.end(this.currentCount,t,this.startEvent),this.startEvent=null}}function k(t){let e=t*t;return t<0&&(e*=-1),e}function w(t){return t.translation[0]=0,t.translation[1]=0,t.translation[2]=0,t.heading=0,t.tilt=0,t}function x(t,e,i){const n=i,s=t.state,a=t.device,r="forward-down"===e.tiltDirection?1:-1;return"standard"===a.deviceType?(n.translation[0]=k(s.axes[0]),n.translation[1]=k(s.axes[1]),n.translation[2]=k(s.buttons[7])-k(s.buttons[6]),n.heading=k(s.axes[2]),n.tilt=k(s.axes[3])):"spacemouse"===a.deviceType&&(n.translation[0]=1.2*k(s.axes[0]),n.translation[1]=1.2*k(s.axes[1]),n.translation[2]=2*-k(s.axes[2]),n.heading=1.2*k(s.axes[5]),n.tilt=1.2*k(s.axes[3])),n.tilt*=r,h(n.translation,n.translation,1),n}function T(t,e){const i=e;return i.translation[0]=t[1]-t[0],i.translation[1]=t[3]-t[2],i.translation[2]=t[4]-t[5],i.heading=t[7]-t[6],i.tilt=t[8]-t[9],i.zoom=t[10]-t[11],i}function E(t){return 0===t.translation[0]&&0===t.translation[1]&&0===t.translation[2]&&0===t.heading&&0===t.tilt&&0===t.zoom}function C(t){const e=t.native;return e?{buttons:e.buttons.map((t=>t.pressed?t.value?t.value:1:0)),axes:e.axes.map((e=>function(t,e){const i=Math.abs(t);return i<e?0:Math.sign(t)*(i-e)/(1-e)}(e,t.axisThreshold)))}:{buttons:[],axes:[]}}class S{constructor(t,e){this.element=t,this.input=e,this._hasEventListeners=!1,this._onConnectGamepad=t=>{this._connectGamepad(t.gamepad)},this._onDisconnectGamepad=t=>{const e=t.gamepad,i=e.index,n=this.inputDevices[i];n&&(this._emitGamepadEvent(e,C(n),!1),this.inputDevices.splice(i,1),this.latestUpdate.splice(i,1),this.input.gamepad.devices.remove(n),this.ensurePollingState())},this.frameTask=null,this.latestUpdate=new Array,this.inputDevices=new Array,this.callback=null;const i="getGamepads"in window.navigator,n=window.isSecureContext;this.supported=i&&n,this.supported&&(this._forEachGamepad((t=>this._connectGamepad(t))),window.addEventListener("gamepadconnected",this._onConnectGamepad),window.addEventListener("gamepaddisconnected",this._onDisconnectGamepad),this.ensurePollingState())}destroy(){this.hasEventListeners=!1,this.supported&&(window.removeEventListener("gamepadconnected",this._onConnectGamepad),window.removeEventListener("gamepaddisconnected",this._onDisconnectGamepad))}set hasEventListeners(t){this._hasEventListeners!==t&&(this._hasEventListeners=t,this.ensurePollingState())}get eventsEnabled(){return this.supported&&this.inputDevices.length>0&&this._hasEventListeners}set onEvent(t){this.callback=t}_connectGamepad(t){const e=new d(t);"unknown"!==e.deviceType&&(this.inputDevices[t.index]=e,this.input.gamepad.devices.add(e)),this.ensurePollingState()}ensurePollingState(){this.eventsEnabled?this._startPolling():this._stopPolling()}_startPolling(){null==this.frameTask&&(this.frameTask=c({update:()=>this._readGamepadState()}))}_stopPolling(){null!=this.frameTask&&(this.frameTask.remove(),this.frameTask=null,this.latestUpdate=new Array)}_readGamepadState(){const t=document.hasFocus(),e=this.element.contains(document.activeElement),i="document"===this.input.gamepad.enabledFocusMode&&!t||"view"===this.input.gamepad.enabledFocusMode&&!e;this._forEachGamepad((t=>{const e=this.inputDevices[t.index];if(!e)return;const n=this.latestUpdate[t.index],s=C(e),a=i||function(t){for(let e=0;e<t.axes.length;e++)if(0!==t.axes[e])return!1;for(let e=0;e<t.buttons.length;e++)if(0!==t.buttons[e])return!1;return!0}(s);if(n){if(n.timestamp===t.timestamp)return;if(!n.active&&a)return;if(function(t,e){if(t.axes.length!==e.axes.length)return!1;if(t.buttons.length!==e.buttons.length)return!1;for(let i=0;i<t.axes.length;i++)if(t.axes[i]!==e.axes[i])return!1;for(let i=0;i<t.buttons.length;i++)if(t.buttons[i]!==e.buttons[i])return!1;return!0}(n.state,s))return}this._emitGamepadEvent(t,s,!a)}))}_forEachGamepad(t){const e=window.navigator.getGamepads();for(let i=0;i<e.length;i++){const n=e[i];this._validate(n)&&t(n)}}_emitGamepadEvent(t,e,i){const n=this.latestUpdate[t.index],s=n&&n.active;if(!s&&!i)return;const a=!s&&i?"start":s&&i?"update":"end";this.latestUpdate[t.index]={timestamp:t.timestamp,state:e,active:i},this.callback&&this.callback({device:this.inputDevices[t.index],state:e,action:a})}_validate(t){if(!t)return!1;if(!t.connected)return!1;for(let e=0;e<t.axes.length;e++)if(isNaN(t.axes[e]))return!1;return!0}}const I=r("trident"),L=r("edge"),M=r("chrome"),G=r("ff"),A=r("safari"),U="esri-view-surface--touch-none",V="esri-view-surface--touch-pan";class H{constructor(t,e){this.input=e,this._active={},this._activePointerCaptures=new Set,this._keyDownState=new Set,this._eventId=1,this._browserTouchPanningEnabled=!1,this._element=t,t.getAttribute("tabindex")||t.setAttribute("tabindex","0"),this._eventHandlers={"key-down":this._handleKey,"key-up":this._handleKey,"pointer-down":this._handlePointer,"pointer-move":this._handlePointerPreventDefault,"pointer-up":this._handlePointerPreventDefault,"pointer-enter":this._handlePointer,"pointer-leave":this._handlePointer,"pointer-cancel":this._handlePointer,"mouse-wheel":this._handleMouseWheel,"pointer-capture-lost":this._handlePointerCaptureLost},this._updateTouchAction(),this._element.addEventListener("keydown",this._preventAltKeyDefault),this._gamepadSource=new S(t,this.input),this._gamepadSource.onEvent=t=>this._callback("gamepad",t)}destroy(){this._callback=null,this.activeEvents=null,this._activePointerCaptures.forEach((t=>{this._releasePointerCaptureSafe(t)})),this._gamepadSource&&(this._gamepadSource.destroy(),this._gamepadSource=null),this._activePointerCaptures=null,this._removeTouchAction(),this._element.removeEventListener("keydown",this._preventAltKeyDefault)}get browserTouchPanningEnabled(){return this._browserTouchPanningEnabled}set browserTouchPanningEnabled(t){this._browserTouchPanningEnabled=t,this._updateTouchAction(),this._updateTouchEventHandling()}set onEventReceived(t){this._callback=t}set activeEvents(t){for(const e in this._active)if(!t||!t.has(e)){const t=this._active[e];this._element.removeEventListener(q[e],t),delete this._active[e]}t&&t.forEach((t=>{if(!this._active[t]&&q[t]){const e=(this._eventHandlers[t]||this._handleDefault).bind(this,t);this._element.addEventListener(q[t],e),this._active[t]=e}})),this._gamepadSource.hasEventListeners=t&&t.has("gamepad")}setPointerCapture(t,e){e?(this._element.setPointerCapture(t.pointerId),this._activePointerCaptures.add(t.pointerId)):(this._releasePointerCaptureSafe(t.pointerId),this._activePointerCaptures.delete(t.pointerId))}_updateTouchAction(){this._element.classList.remove(this._browserTouchPanningEnabled?U:V),this._element.classList.add(this._browserTouchPanningEnabled?V:U)}_updateTouchEventHandling(){this._browserTouchPanningEnabled?this._element.addEventListener("touchmove",this._preventMultiTouchPanning):this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)}_removeTouchAction(){this._element.classList.remove(U),this._element.classList.remove(V),this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)}_releasePointerCaptureSafe(t){try{if(this._element.hasPointerCapture&&!this._element.hasPointerCapture(t))return;this._element.releasePointerCapture(t)}catch(t){}}_updateNormalizedPointerLikeEvent(t,e){const i=m(this._element,t);return H.test.disableSubpixelCoordinates&&(i.x=Math.round(i.x),i.y=Math.round(i.y)),e.x=i.x,e.y=i.y,e}_handleKey(t,e){const i=u(e);i&&"key-up"===t&&this._keyDownState.delete(i);const n={native:e,key:i,repeat:i&&this._keyDownState.has(i)};i&&"key-down"===t&&this._keyDownState.add(n.key),this._callback(t,n)}_handlePointer(t,e){const i=this._updateNormalizedPointerLikeEvent(e,{native:e,x:0,y:0,pointerType:e.pointerType,button:e.button,buttons:e.buttons,eventId:this._eventId++});this._callback(t,i)}_handlePointerPreventDefault(t,e){const i=this._updateNormalizedPointerLikeEvent(e,{native:e,x:0,y:0,pointerType:e.pointerType,button:e.button,buttons:e.buttons,eventId:this._eventId++});e.preventDefault(),this._callback(t,i)}_handleMouseWheel(t,e){let i=e.deltaY;switch(e.deltaMode){case 0:(I||L)&&(i=i/document.documentElement.clientHeight*600);break;case 1:i*=30;break;case 2:i*=900}I||L?i*=.7:M||A?i*=.6:G&&(i*=1.375);const n=Math.abs(i);if(n>100){const t=.02;i=i/n*200/(1+Math.exp(-t*(n-100)))}const s=this._updateNormalizedPointerLikeEvent(e,{native:e,x:0,y:0,deltaY:i});this._callback(t,s)}_handlePointerCaptureLost(t,e){this._activePointerCaptures.delete(e.pointerId),this._handleDefault(t,e)}_handleDefault(t,e){const i={native:e};e.preventDefault(),this._callback(t,i)}_preventAltKeyDefault(t){"Alt"===t.key&&t.preventDefault()}_preventMultiTouchPanning(t){t.touches.length>1&&t.preventDefault()}}H.test={disableSubpixelCoordinates:!1};const q={"key-down":"keydown","key-up":"keyup","pointer-down":"pointerdown","pointer-up":"pointerup","pointer-move":"pointermove","mouse-wheel":"wheel","pointer-capture-got":"gotpointercapture","pointer-capture-lost":"lostpointercapture","context-menu":"contextmenu","pointer-enter":"pointerenter","pointer-leave":"pointerleave","pointer-cancel":"pointercancel",focus:"focus",blur:"blur"};class j extends l{constructor(){super(!0),this.registerIncoming("context-menu",(t=>{t.data.native.preventDefault()}))}}function F(t,e){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}const z={maximumDoubleClickDelay:250,maximumDoubleClickDistance:10,maximumDoubleTouchDelay:350,maximumDoubleTouchDistance:35};class O extends l{constructor(t=z.maximumDoubleClickDelay,e=z.maximumDoubleClickDistance,i=z.maximumDoubleTouchDelay,n=z.maximumDoubleTouchDistance,a=s){super(!1),this.maximumDoubleClickDelay=t,this.maximumDoubleClickDistance=e,this.maximumDoubleTouchDelay=i,this.maximumDoubleTouchDistance=n,this._clock=a,this._pointerState=new Map,this._click=this.registerOutgoing("click"),this._doubleClick=this.registerOutgoing("double-click"),this.registerIncoming("immediate-click",this._handleImmediateClick.bind(this)),this.registerIncoming("pointer-drag",this._handlePointerDrag.bind(this)),this.registerIncoming("drag",this._handleDrag.bind(this))}onUninstall(){this._pointerState.forEach((t=>t.doubleClickTimeout=i(t.doubleClickTimeout)))}get hasPendingInputs(){return a(this._pointerState,(t=>null!=t.doubleClickTimeout))}_pointerId(t){const e=t.native;return"mouse"===e.pointerType?`${e.pointerId}:${e.button}`:`${e.pointerType}`}_handleImmediateClick(t){const e=t.data,i=this._pointerId(e),n=this._pointerState.get(i);if(n){const s="touch"===e.native.pointerType?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;F(n.event.data,e)>s?(this._clearDoubleClickTimeout(i,!0),this._startClick(t)):(this._clearDoubleClickTimeout(i,!1),this._doubleClick.emit(n.event.data,void 0,n.event.modifiers))}else this._startClick(t)}_startClick(t){const e=this._pointerId(t.data),i="touch"===t.data.native.pointerType?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay;this._pointerState.set(e,{event:t,doubleClickTimeout:this._clock.setTimeout((()=>this._doubleClickTimeoutExceeded(e)),i)}),this.refreshHasPendingInputs()}_handlePointerDrag(t){const e=this._pointerId(t.data.currentEvent);this._clearDoubleClickTimeout(e,!0)}_handleDrag(t){const e=this._pointerId(t.data.pointer);this._clearDoubleClickTimeout(e,!0)}_clearDoubleClickTimeout(t,e){const i=this._pointerState.get(t);i&&(i.doubleClickTimeout.remove(),i.doubleClickTimeout=null,e&&this._doubleClickTimeoutExceeded(t),this._pointerState.delete(t),this.refreshHasPendingInputs())}_doubleClickTimeoutExceeded(t){const e=this._pointerState.get(t);this._click.emit(e.event.data,void 0,e.event.modifiers),e.doubleClickTimeout=null,this._pointerState.delete(t),this.refreshHasPendingInputs()}}class B extends l{constructor(t){super(!1),this.navigationTouch=t,this.startStateModifiers=new Set,this.activePointerMap=new Map,this.isDragging=!1,this.isCurrentDragSuppressed=!1,this.drag=this.registerOutgoing("drag"),this.registerIncoming("pointer-drag",this._handlePointerDrag.bind(this)),this.registerIncoming("pointer-up",this._handlePointerUpAndPointerLost.bind(this)),this.registerIncoming("pointer-capture-lost",this._handlePointerUpAndPointerLost.bind(this)),this.registerIncoming("pointer-cancel",this._handlePointerUpAndPointerLost.bind(this))}_createPayload(t,e,i,n){return{action:t,pointerType:this.pointerType,button:this.mouseButton,buttons:e.buttons,timestamp:n,pointers:N(this.activePointerMap),pointer:e,angle:i.angle,radius:i.radius,center:i.center}}_addPointer(t){const e=t.native.pointerId,i=K(this.activePointerMap).angle,n={event:t,initialAngle:0,lastAngle:0};this.activePointerMap.set(e,n);const s=$(n,W(this.activePointerMap));n.initialAngle=s,n.lastAngle=s,this._updatePointerAngles(i)}_updatePointer(t){if(t&&null==t.x&&null==t.y)return;const e=t.native.pointerId,i=this.activePointerMap.get(e);i?i.event=t:this._addPointer(t)}_removePointer(t){const e=K(this.activePointerMap).angle;this.activePointerMap.delete(t),this._updatePointerAngles(e)}_updatePointerAngles(t){const e=K(this.activePointerMap);this.activePointerMap.forEach((i=>{i.initialAngle=$(i,e)-t,i.lastAngle=$(i,e)-t}))}_emitEvent(t,e,i){const n=K(this.activePointerMap);this.drag.emit(this._createPayload(t,e,n,i),void 0,this.startStateModifiers)}_handlePointerUpAndPointerLost(t){const e=t.data.native.pointerId,i=p(t.timestamp);this.activePointerMap.get(e)&&(1===this.activePointerMap.size?(this._updatePointer(t.data),!this.isCurrentDragSuppressed&&this._emitEvent("end",t.data,i),this.isDragging=!1,this.isCurrentDragSuppressed=!1,this._removePointer(e)):(this._removePointer(e),this._emitEvent("removed",t.data,p(t.timestamp))))}_handlePointerDrag(t){const e=t.data,i=e.currentEvent,n=p(t.timestamp);switch(e.action){case"start":case"update":this.isDragging?this.activePointerMap.has(i.native.pointerId)?(this._updatePointer(i),!this.isCurrentDragSuppressed&&this._emitEvent("update",i,n)):(this._addPointer(i),this._emitEvent("added",i,n),this.isCurrentDragSuppressed=this.isSuppressed):(this._updatePointer(i),this.pointerType=t.data.startEvent.pointerType,this.mouseButton=t.data.startEvent.button,this.startStateModifiers=t.modifiers,this.isDragging=!0,this.isCurrentDragSuppressed=this.isSuppressed,!this.isCurrentDragSuppressed&&this._emitEvent("start",i,n))}}get isSuppressed(){return this.navigationTouch&&!this.navigationTouch.browserTouchPanEnabled&&"touch"===this.pointerType&&1===this.activePointerMap.size}}function W(t){const e=[];return t.forEach((t=>{e.push(g(t.event.x,t.event.y))})),function(t,e){if(e?(e.radius=0,e.center.x=0,e.center.y=0):e={radius:0,center:g()},0===t.length)return e;if(1===t.length)return e.center.x=t[0].x,e.center.y=t[0].y,e;if(2===t.length){const[i,n]=t,[s,a]=[n.x-i.x,n.y-i.y];return e.radius=Math.sqrt(s*s+a*a)/2,e.center.x=(i.x+n.x)/2,e.center.y=(i.y+n.y)/2,e}let i=0,n=0;for(let e=0;e<t.length;e++)i+=t[e].x,n+=t[e].y;i/=t.length,n/=t.length;const s=t.map((t=>t.x-i)),a=t.map((t=>t.y-n));let r=0,o=0,h=0,u=0,l=0,c=0,p=0;for(let t=0;t<s.length;t++){const e=s[t],i=a[t],n=e*e,d=i*i;r+=n,o+=d,h+=e*i,u+=n*e,l+=d*i,c+=e*d,p+=i*n}const d=.5*(u+c),m=.5*(l+p),_=r*o-h*h,v=(d*o-m*h)/_,b=(r*m-h*d)/_,f=g(v+i,b+n);return{radius:Math.sqrt(v*v+b*b+(r+o)/t.length),center:f}}(e)}function K(t){const e=W(t);let i=0;return t.forEach((t=>{let n=$(t,e),s=n-t.lastAngle;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;n=t.lastAngle+s,t.lastAngle=n;const a=n-t.initialAngle;i+=a})),i/=t.size||1,{angle:i,radius:e.radius,center:e.center}}function N(t){const e=new Map;return t.forEach(((t,i)=>e.set(i,t.event))),e}function $(t,e){const i=t.event,n=i.x-e.center.x,s=i.y-e.center.y;return Math.atan2(s,n)}var R;!function(t){t[t.Left=0]="Left",t[t.Middle=1]="Middle",t[t.Right=2]="Right",t[t.Back=3]="Back",t[t.Forward=4]="Forward",t[t.Undefined=-1]="Undefined"}(R||(R={}));class Y extends l{constructor(t=z.maximumDoubleClickDelay,e=z.maximumDoubleClickDistance,i=z.maximumDoubleTouchDelay,n=z.maximumDoubleTouchDistance,a=s){super(!1),this.maximumDoubleClickDelay=t,this.maximumDoubleClickDistance=e,this.maximumDoubleTouchDelay=i,this.maximumDoubleTouchDistance=n,this._clock=a,this._pointerState=new Map,this._immediateDoubleClick=this.registerOutgoing("immediate-double-click"),this.registerIncoming("pointer-down",this._handlePointerDown.bind(this)),this.registerIncoming("pointer-up",(t=>{this._handlePointerLoss(t,"pointer-up")})),this.registerIncoming("pointer-capture-lost",(t=>{this._handlePointerLoss(t,"pointer-capture-lost")})),this.registerIncoming("pointer-cancel",(t=>{this._handlePointerLoss(t,"pointer-cancel")}))}onUninstall(){this._pointerState.forEach((t=>{t.immediateDoubleClick&&t.immediateDoubleClick.timeoutHandle.remove()})),super.onUninstall()}_handlePointerDown(t){const e=t.data,i=this._pointerId(e);if(!this._pointerState.has(i)){const t={downButton:e.native.button,immediateDoubleClick:null};this._pointerState.set(i,t),this.startCapturingPointer(e.native)}}_handlePointerLoss(t,e){const i=t.data,n=this._pointerId(i),s=this._pointerState.get(n);if(s&&"pointer-up"===e&&s.downButton===i.native.button){const e=s.immediateDoubleClick;if(e){e.timeoutHandle.remove();const n="touch"===t.data.native.pointerType?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;F(e,t.data)>n?this._startImmediateDoubleClick(t,s):(this._immediateDoubleClick.emit(t.data,void 0,e.modifiers),this._removeState(i))}else this._startImmediateDoubleClick(t,s)}}_startImmediateDoubleClick(t,e){const i="touch"===t.data.native.pointerType?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay;e.immediateDoubleClick={x:t.data.x,y:t.data.y,modifiers:t.modifiers,timeoutHandle:this._clock.setTimeout((()=>this._removeState(t.data)),i)}}_pointerId(t){const e=t.native;return"mouse"===e.pointerType?`${e.pointerId}:${e.button}`:`${e.pointerType}`}_removeState(t){const e=this._pointerId(t);this._pointerState.delete(e),this.stopCapturingPointer(t.native),this.refreshHasPendingInputs()}}class J extends l{constructor(t=300,e=1.5,i=6,n=6,a=500,r=s){super(!1),this.maximumClickDelay=t,this.movementUntilMouseDrag=e,this.movementUntilPenDrag=i,this.movementUntilTouchDrag=n,this.holdDelay=a,this._clock=r,this._pointerState=new Map,this._pointerDrag=this.registerOutgoing("pointer-drag"),this._immediateClick=this.registerOutgoing("immediate-click"),this._pointerHold=this.registerOutgoing("hold"),this.registerIncoming("pointer-down",this._handlePointerDown.bind(this)),this.registerIncoming("pointer-up",(t=>{this._handlePointerLoss(t,"pointer-up")})),this.registerIncoming("pointer-capture-lost",(t=>{this._handlePointerLoss(t,"pointer-capture-lost")})),this.registerIncoming("pointer-cancel",(t=>{this._handlePointerLoss(t,"pointer-cancel")})),this._moveHandle=this.registerIncoming("pointer-move",this._handlePointerMove.bind(this)),this._moveHandle.pause()}onUninstall(){this._pointerState.forEach((t=>{null!=t.holdTimeout&&(t.holdTimeout.remove(),t.holdTimeout=null)})),super.onUninstall()}_handlePointerDown(t){const e=t.data,i=e.native.pointerId;let n=null;0===this._pointerState.size&&(n=this._clock.setTimeout((()=>{const e=this._pointerState.get(i);if(e){if(!e.isDragging){const i=e.previousEvent;this._pointerHold.emit(i,void 0,t.modifiers),e.holdEmitted=!0}e.holdTimeout=null}}),this.holdDelay));const s={startEvent:e,previousEvent:e,startTimestamp:t.timestamp,isDragging:!1,downButton:e.native.button,holdTimeout:n,modifiers:new Set};this._pointerState.set(i,s),this.startCapturingPointer(e.native),this._moveHandle.resume(),this._pointerState.size>1&&this._startDragging(t)}_createPointerDragData(t,e,i){return{action:t,startEvent:e.startEvent,previousEvent:e.previousEvent,currentEvent:i}}_handlePointerMove(t){const e=t.data,i=e.native.pointerId,n=this._pointerState.get(i);n&&(n.isDragging?this._pointerDrag.emit(this._createPointerDragData("update",n,e),void 0,n.modifiers):function(t,e){const i=e.x-t.x,n=e.y-t.y;return Math.sqrt(i*i+n*n)}(e,n.startEvent)>this._getDragThreshold(e.native.pointerType)&&this._startDragging(t),n.previousEvent=e)}_getDragThreshold(t){switch(t){case"touch":return this.movementUntilTouchDrag;case"pen":return this.movementUntilPenDrag;default:return this.movementUntilMouseDrag}}_startDragging(t){const e=t.data,i=e.native.pointerId;this._pointerState.forEach((n=>{null!=n.holdTimeout&&(n.holdTimeout.remove(),n.holdTimeout=null),n.isDragging||(n.modifiers=t.modifiers,n.isDragging=!0,i===n.startEvent.native.pointerId?this._pointerDrag.emit(this._createPointerDragData("start",n,e)):this._pointerDrag.emit(this._createPointerDragData("start",n,n.previousEvent),t.timestamp))}))}_handlePointerLoss(t,e){const i=t.data,n=i.native.pointerId,s=this._pointerState.get(n);s&&(null!=s.holdTimeout&&(s.holdTimeout.remove(),s.holdTimeout=null),s.isDragging?this._pointerDrag.emit(this._createPointerDragData("end",s,"pointer-up"===e?i:s.previousEvent),void 0,s.modifiers):"pointer-up"===e&&s.downButton===i.native.button&&t.timestamp-s.startTimestamp<=this.maximumClickDelay&&!s.holdEmitted&&this._immediateClick.emit(i),this._pointerState.delete(n),this.stopCapturingPointer(i.native),0===this._pointerState.size&&this._moveHandle.pause())}}function Q(t){const e=v(t);if(!e.available)return new _("webgl:required","WebGL is required but not supported.");if("3d"===t&&e.majorPerformanceCaveat)return new _("webgl:major-performance-caveat-detected","Your WebGL implementation doesn't seem to support hardware accelerated rendering. Check your browser settings or if your GPU is in a blocklist.");if(!e.supportsHighPrecisionFragment)return new _("webgl:high-precision-fragment-required","WebGL support for high precision fragment shaders is required but not supported.");if(!e.supportsVertexShaderSamplers)return new _("webgl:vertex-shader-samplers-required","WebGL support for vertex shader samplers is required but not supported.");if(e.type===b.WEBGL1){if(!e.supportsElementIndexUint)return new _("webgl:element-index-uint-required","WebGL support for uint vertex indices is required but not supported.");if(!e.supportsStandardDerivatives)return new _("webgl:standard-derivatives-required","WebGL support for standard derivatives is required but not supported.");if(!e.supportsInstancedArrays)return new _("webgl:instanced-arrays-required","WebGL support for instanced rendering is required but not supported.")}return null}export{H as B,y as D,Y as I,J as P,O as S,x as a,z as b,B as c,j as d,P as e,f,Q as g,D as h,E as i,T as j,F as m,w as r};
