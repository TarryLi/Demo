/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{p as t,H as i,c as e,B as a,h as n,a as o}from"../widgets/Widget.js";import{g as s}from"./guid.js";import{d as r,t as c,a as l}from"./dom.js";import{c as d}from"./observers.js";import{u as m}from"./interactive.js";import{d as b}from"./icon.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const h=t(class extends i{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTabsActivate=e(this,"calciteTabsActivate",7),this.calciteInternalTabsActivate=e(this,"calciteInternalTabsActivate",7),this.calciteTabsFocusNext=e(this,"calciteTabsFocusNext",7),this.calciteTabsFocusPrevious=e(this,"calciteTabsFocusPrevious",7),this.calciteTabTitleRegister=e(this,"calciteTabTitleRegister",7),this.active=!1,this.disabled=!1,this.bordered=!1,this.mutationObserver=d("mutation",(()=>this.updateHasText())),this.hasText=!1,this.guid=`calcite-tab-title-${s()}`}activeTabChanged(){this.active&&this.emitActiveTab(!1)}connectedCallback(){this.setupTextContentObserver(),this.parentTabNavEl=this.el.closest("calcite-tab-nav"),this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){var t,i;null===(t=this.mutationObserver)||void 0===t||t.disconnect(),null===(i=document.body)||void 0===i||i.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el}))}componentWillLoad(){a.isBrowser&&this.updateHasText(),this.tab&&this.active&&this.emitActiveTab(!1)}componentWillRender(){this.parentTabsEl&&(this.layout=this.parentTabsEl.layout,this.position=this.parentTabsEl.position,this.scale=this.parentTabsEl.scale,this.bordered=this.parentTabsEl.bordered),!this.parentTabsEl&&this.parentTabNavEl&&(this.position=r(this.parentTabNavEl,"position",this.position),this.scale=r(this.parentTabNavEl,"scale",this.scale))}render(){const t=this.el.id||this.guid,i=this.bordered&&!this.disabled&&"center"!==this.layout,e=n("calcite-icon",{class:"calcite-tab-title--icon icon-start",flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"s"}),a=n("calcite-icon",{class:"calcite-tab-title--icon icon-end",flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"s"});return n(o,{"aria-controls":this.controls,"aria-expanded":c(this.active),id:t,role:"tab"},n("a",{class:{container:!0,"container--has-text":this.hasText},style:i&&{width:`${this.parentTabNavEl.indicatorWidth}px`}},this.iconStart?e:null,n("slot",null),this.iconEnd?a:null))}async componentDidLoad(){this.calciteTabTitleRegister.emit(await this.getTabIdentifier())}componentDidRender(){m(this,!0)}internalTabChangeHandler(t){t.composedPath().find((t=>"CALCITE-TABS"===t.tagName))===this.parentTabsEl&&(this.tab?this.active=this.tab===t.detail.tab:this.getTabIndex().then((i=>{this.active=i===t.detail.tab})),t.stopPropagation())}onClick(){this.emitActiveTab()}keyDownHandler(t){switch(t.key){case" ":case"Enter":this.emitActiveTab(),t.preventDefault();break;case"ArrowRight":"ltr"===l(this.el)?this.calciteTabsFocusNext.emit():this.calciteTabsFocusPrevious.emit();break;case"ArrowLeft":"ltr"===l(this.el)?this.calciteTabsFocusPrevious.emit():this.calciteTabsFocusNext.emit()}}async getTabIndex(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"),this.el)}async getTabIdentifier(){return this.tab?this.tab:this.getTabIndex()}async updateAriaInfo(t=[],i=[]){this.controls=t[i.indexOf(this.el.id)]||null}updateHasText(){this.hasText=this.el.textContent.trim().length>0}setupTextContentObserver(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0})}emitActiveTab(t=!0){if(this.disabled)return;const i={tab:this.tab};this.calciteInternalTabsActivate.emit(i),t&&this.calciteTabsActivate.emit(i)}get el(){return this}static get watchers(){return{active:["activeTabChanged"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{margin-right:1.25rem;display:block;-ms-flex:0 1 auto;flex:0 1 auto;outline:2px solid transparent;outline-offset:2px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:1.25rem;margin-inline-end:1.25rem}:host([layout=center]){margin-top:0px;margin-bottom:0px;margin-left:1.25rem;margin-right:1.25rem;text-align:center;-ms-flex-preferred-size:12rem;flex-basis:12rem}:host([position=below]) a{border-bottom-width:0px;border-top-width:2px;border-top-color:transparent;border-top-style:solid}:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) a{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-ui-border-2);color:var(--calcite-ui-text-1);-webkit-text-decoration-line:none;text-decoration-line:none}:host([active]) a{border-color:transparent;color:var(--calcite-ui-text-1)}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) span,:host([disabled]) a{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){-webkit-margin-end:1rem;margin-inline-end:1rem}:host([scale=s]) a,:host([scale=s]) span{padding-top:0.25rem;padding-bottom:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) a,:host([scale=m]) span{padding-top:0.5rem;padding-bottom:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){-webkit-margin-end:1.5rem;margin-inline-end:1.5rem}:host([scale=l]) a,:host([scale=l]) span{padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}a,span{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:100%;width:100%;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-pack:center;justify-content:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-bottom-width:2px;padding-left:0px;padding-right:0px;padding-top:0.5rem;padding-bottom:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-3);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;border-bottom-color:transparent;border-bottom-style:solid}span{cursor:default}.calcite-tab-title--icon{position:relative;margin:0px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-item-align:center;align-self:center}.calcite-tab-title--icon svg{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.container--has-text{padding:0.25rem}.container--has-text .calcite-tab-title--icon.icon-start{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}.container--has-text .calcite-tab-title--icon.icon-end{-webkit-margin-start:0.5rem;margin-inline-start:0.5rem}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}:host([bordered]){-webkit-margin-end:0;margin-inline-end:0}:host([bordered][active]){-webkit-box-shadow:inset 0px -2px var(--calcite-ui-foreground-1);box-shadow:inset 0px -2px var(--calcite-ui-foreground-1)}:host([bordered][active][position=below]){-webkit-box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1);box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1)}:host([bordered]:hover) a,:host([bordered]:focus) a,:host([bordered]:active) a{position:relative}:host([bordered]:hover) a{background-color:var(--calcite-button-transparent-hover);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}:host([bordered]) a{border-bottom-style:unset}:host([bordered][position=below]) a{border-top-style:unset}:host([active][bordered]) a{border-left:1px solid var(--calcite-ui-border-1);border-right:1px solid var(--calcite-ui-border-1)}:host([bordered]) a,:host([bordered]) span{padding-left:0.75rem;padding-right:0.75rem}:host([bordered][scale=s]) a,:host([bordered][scale=s]) span{padding-left:0.5rem;padding-right:0.5rem}:host([bordered][scale=l]) a,:host([bordered][scale=l]) span{padding-left:1rem;padding-right:1rem}"}},[1,"calcite-tab-title",{active:[1540],disabled:[516],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],layout:[1537],position:[1537],scale:[1537],bordered:[1540],tab:[513],controls:[32],hasText:[32],getTabIndex:[64],getTabIdentifier:[64],updateAriaInfo:[64]},[[16,"calciteInternalTabChange","internalTabChangeHandler"],[0,"click","onClick"],[0,"keydown","keyDownHandler"]]]);function p(){"undefined"!=typeof customElements&&["calcite-tab-title","calcite-icon"].forEach((t=>{switch(t){case"calcite-tab-title":customElements.get(t)||customElements.define(t,h);break;case"calcite-icon":customElements.get(t)||b()}}))}p();export{h as T,p as d};
