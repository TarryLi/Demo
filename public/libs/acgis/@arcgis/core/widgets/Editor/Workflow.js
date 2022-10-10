/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../core/Error.js";import s from"../../core/Evented.js";import{HandleOwnerMixin as i}from"../../core/HandleOwner.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../core/Accessor.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Handles.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/reactiveUtils.js";let n=class extends(i(s.EventedAccessor)){constructor(t){super(t),this._indexHistory=[],this._lastStepIndex=-1,this._stepIndex=-1,this._handleKeys={afterCommit:"after-commit",beforeCommit:"before-commit"},this.data=void 0,this.started=!1,this.steps=[],this.type=null}get hasNextStep(){const{steps:t}=this;return!!(t&&this._stepIndex<t.filter((t=>!t.parent)).length-1)}get hasPreviousStep(){return this._stepIndex>0}get stepId(){const{steps:t}=this,e=t&&t[this._stepIndex];return e&&e.id}async cancel(t={force:!0}){return!1!==t.force?this._cancel():new Promise(((t,s)=>{this.emit("cancel-request",{controller:{allow:()=>{this._cancel().then(t)},deny:()=>s(new e("workflow:cancel-denied","Request to cancel workflow was denied."))}})}))}async commit(){this.handles.remove(this._handleKeys.beforeCommit),await this.onCommit(this.data),this.handles.remove(this._handleKeys.afterCommit),this.emit("commit"),this.started&&await this.reset()}async go(t){const{steps:e}=this,s=e.findIndex((e=>e.id===t));this._indexHistory.push(this._stepIndex),await this._go(s)}async next(){this._indexHistory.push(this._stepIndex),await this._go(this._stepIndex+1)}async previous(t={cancelCurrentStep:!1}){await this._go(this._indexHistory.pop(),t.cancelCurrentStep)}async reset(){await this._cancel(!1),await this.start()}async start(){this._set("started",!0);const t=-1===this._stepIndex?0:this._stepIndex;await this._go(t)}async _cancel(t=!0){this.started&&(this._set("started",!1),await this.steps[this._stepIndex].tearDown({cancelled:!0}),this.data&&this.data.viewModel.sketchViewModel.layer.removeAll()),this.handles.remove([this._handleKeys.afterCommit,this._handleKeys.beforeCommit]),this._resetIndexing(t),t&&this.emit("cancel")}async _go(t=-1,e=!1){if(!(t<=-1||t>=this.steps.length)){if(!this.started)return this._stepIndex=t,void this._notifyStepProps();this._lastStepIndex>-1&&await this.steps[this._lastStepIndex].tearDown({cancelled:e}),await this.steps[t].setUp(),this._lastStepIndex=t,this._stepIndex=t,this._notifyStepProps()}}_resetIndexing(t=!0){this._stepIndex=-1,this._lastStepIndex=-1,this._indexHistory.length=0,t&&this._notifyStepProps()}_notifyStepProps(){this.notifyChange("stepId"),this.notifyChange("hasPreviousStep"),this.notifyChange("hasNextStep")}};t([o()],n.prototype,"data",void 0),t([o()],n.prototype,"hasNextStep",null),t([o()],n.prototype,"hasPreviousStep",null),t([o()],n.prototype,"onCommit",void 0),t([o()],n.prototype,"started",void 0),t([o({readOnly:!0})],n.prototype,"stepId",null),t([o()],n.prototype,"steps",void 0),t([o({readOnly:!0})],n.prototype,"type",void 0),t([o()],n.prototype,"commit",null),n=t([r("esri.widgets.Editor.Workflow")],n);const a=n;export{a as default};
