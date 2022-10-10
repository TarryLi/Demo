/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{p as e,H as t,c as i,h as a,F as n}from"../widgets/Widget.js";import{a as o,g as s,t as r}from"./dom.js";import{H as l}from"./Heading2.js";import{S as c,d as m}from"./action-menu.js";import{c as d,d as h}from"./conditionalSlot.js";import{u as p}from"./interactive.js";import{c as u}from"./observers.js";import{d as f}from"./action.js";import{d as g}from"./icon.js";import{d as b}from"./loader.js";import{d as x}from"./popover2.js";import{d as w}from"./scrim.js";import"./tslib.es6.js";import"../intl.js";import"./number2.js";import"./jsonMap.js";import"./object.js";import"../core/lang.js";import"./maybe.js";import"./locale.js";import"./Logger.js";import"../config.js";import"./string.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./tracking.js";import"./ensureType.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/property.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/Handles.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./guid.js";import"./popper.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const k=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelDismiss=i(this,"calcitePanelDismiss",7),this.calcitePanelDismissedChange=i(this,"calcitePanelDismissedChange",7),this.calcitePanelScroll=i(this,"calcitePanelScroll",7),this.calcitePanelBackClick=i(this,"calcitePanelBackClick",7),this.dismissed=!1,this.disabled=!1,this.dismissible=!1,this.showBackButton=!1,this.loading=!1,this.menuOpen=!1,this.resizeObserver=u("resize",(()=>this.resizeHandler())),this.resizeHandler=()=>{const{panelScrollEl:e}=this;e&&"number"==typeof e.scrollHeight&&"number"==typeof e.offsetHeight&&(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.setDismissRef=e=>{this.dismissButtonEl=e},this.setBackRef=e=>{this.backButtonEl=e},this.panelKeyDownHandler=e=>{"Escape"===e.key&&this.dismiss()},this.dismiss=()=>{this.dismissed=!0,this.calcitePanelDismiss.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.backButtonClick=()=>{this.calcitePanelBackClick.emit()},this.setPanelScrollEl=e=>{var t,i;this.panelScrollEl=e,null===(t=this.resizeObserver)||void 0===t||t.disconnect(),e&&(null===(i=this.resizeObserver)||void 0===i||i.observe(e),this.resizeHandler())}}dismissedHandler(){this.calcitePanelDismissedChange.emit()}componentDidRender(){p(this)}connectedCallback(){d(this)}disconnectedCallback(){var e;h(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}async setFocus(e){var t,i,a;"dismiss-button"!==e?"back-button"!==e?null===(a=this.containerEl)||void 0===a||a.focus():null===(i=this.backButtonEl)||void 0===i||i.setFocus():null===(t=this.dismissButtonEl)||void 0===t||t.setFocus()}async scrollContentTo(e){var t;null===(t=this.panelScrollEl)||void 0===t||t.scrollTo(e)}renderBackButton(){const{el:e}=this,t="rtl"===o(e),{showBackButton:i,intlBack:n,backButtonClick:s}=this,r=n||"Back";return i?a("calcite-action",{"aria-label":r,class:"back-button",icon:t?"chevron-right":"chevron-left",key:"back-button",onClick:s,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:r}):null}renderHeaderContent(){const{heading:e,headingLevel:t,summary:i}=this,n=e?a(l,{class:"heading",level:t||3},e):null,o=i?a("span",{class:"summary"},i):null;return n||o?a("div",{class:"header-content",key:"header-content"},n,o):null}renderHeaderSlottedContent(){return a("div",{class:"header-content",key:"slotted-header-content"},a("slot",{name:"header-content"}))}renderHeaderStartActions(){const{el:e}=this;return s(e,"header-actions-start")?a("div",{class:{"header-actions--start":!0,"header-actions":!0},key:"header-actions-start"},a("slot",{name:"header-actions-start"})):null}renderHeaderActionsEnd(){const{dismiss:e,dismissible:t,el:i,intlClose:n}=this,o=n||"Close",r=t?a("calcite-action",{"aria-label":o,icon:"x",onClick:e,ref:this.setDismissRef,text:o}):null,l=a("slot",{name:"header-actions-end"});return s(i,"header-actions-end")||r?a("div",{class:{"header-actions--end":!0,"header-actions":!0},key:"header-actions-end"},l,r):null}renderMenu(){const{el:e,intlOptions:t,menuOpen:i}=this;return s(e,"header-menu-actions")?a("calcite-action-menu",{flipPlacements:["top","bottom"],key:"menu",label:t||"Options",open:i,placement:"bottom-end"},a("calcite-action",{icon:"ellipsis",slot:c.trigger,text:t||"Options"}),a("slot",{name:"header-menu-actions"})):null}renderHeaderNode(){const{el:e,showBackButton:t}=this,i=this.renderBackButton(),n=s(e,"header-content")?this.renderHeaderSlottedContent():this.renderHeaderContent(),o=this.renderHeaderStartActions(),r=this.renderHeaderActionsEnd(),l=this.renderMenu();return o||n||r||l||t?a("header",{class:"header"},i,o,n,r,l):null}renderFooterNode(){const{el:e}=this,t=s(e,"footer"),i=s(e,"footer-actions");return t||i?a("footer",{class:"footer",key:"footer"},t?a("slot",{key:"footer-slot",name:"footer"}):null,i?a("slot",{key:"footer-actions-slot",name:"footer-actions"}):null):null}renderContent(){const{el:e}=this,t=s(e,"fab"),i=a("slot",{key:"default-slot"}),n="content-wrapper";return t?a("div",{class:{"content-wrapper":!0,"content-height":!0},key:n,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},a("section",{class:"content-container"},i),this.renderFab()):a("section",{class:{"content-wrapper":!0,"content-container":!0},key:n,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},i)}renderFab(){return a("div",{class:"fab-container"},a("slot",{name:"fab"}))}render(){const{dismissed:e,dismissible:t,loading:i,panelKeyDownHandler:o}=this,s=a("article",{"aria-busy":r(i),class:"container",hidden:t&&e,onKeyDown:o,ref:this.setContainerRef,tabIndex:t?0:-1},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return a(n,null,i?a("calcite-scrim",{loading:i}):null,s)}get el(){return this}static get watchers(){return{dismissed:["dismissedHandler"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:-ms-flexbox;display:flex;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-max-height:unset;--calcite-panel-width:100%;--calcite-panel-min-width:unset;--calcite-panel-max-width:unset}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:-ms-flexbox;display:flex;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-align:center;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{-ms-flex:1 1 auto;flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}.container{margin:0px;display:-ms-flexbox;display:flex;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;max-height:var(--calcite-panel-max-height);width:var(--calcite-panel-width);max-width:var(--calcite-panel-max-width);min-width:var(--calcite-panel-min-width);-webkit-transition:max-height var(--calcite-animation-timing), width var(--calcite-animation-timing);transition:max-height var(--calcite-animation-timing), width var(--calcite-animation-timing)}:host([height-scale=s]){--calcite-panel-max-height:40vh}:host([height-scale=m]){--calcite-panel-max-height:60vh}:host([height-scale=l]){--calcite-panel-max-height:80vh}:host([width-scale=s]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 12vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 300px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 150px)}:host([width-scale=m]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 20vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 420px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 240px)}:host([width-scale=l]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 45vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 680px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 340px)}.container[hidden]{display:none}:host([loading]) .container,:host([disabled]) .container{position:relative}.header{border-bottom:1px solid;position:-webkit-sticky;position:sticky;top:0px;width:100%;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:start;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-bottom-color:var(--calcite-ui-border-3);-ms-flex:0 0 auto;flex:0 0 auto}.header-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.875rem;padding-bottom:0.875rem;-webkit-margin-end:auto;margin-inline-end:auto}.header-content .heading,.header-content .summary{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-bottom:0px}.header-content .summary{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:stretch;align-items:stretch}.header-actions--end,.menu-container:only-child{-webkit-margin-start:auto;margin-inline-start:auto}.menu-button{position:relative;height:100%;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch}.menu{min-width:10rem;-ms-flex-flow:column nowrap;flex-flow:column nowrap}.content-wrapper{overflow:auto}.content-height{height:100%}.content-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-top:1px solid;position:-webkit-sticky;position:sticky;bottom:0px;display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:space-evenly;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-top-color:var(--calcite-ui-border-3);-ms-flex:0 0 auto;flex:0 0 auto;min-height:3rem;padding:0.5rem}.fab-container{position:-webkit-sticky;position:sticky;bottom:0px;left:0px;right:0px;margin-top:0px;margin-bottom:0px;margin-left:auto;margin-right:auto;display:block;padding:0.5rem;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}"}},[1,"calcite-panel",{dismissed:[1540],beforeBack:[16],disabled:[516],dismissible:[516],headingLevel:[2,"heading-level"],showBackButton:[516,"show-back-button"],intlBack:[1,"intl-back"],heightScale:[513,"height-scale"],widthScale:[513,"width-scale"],loading:[516],intlClose:[1,"intl-close"],intlOptions:[1,"intl-options"],heading:[1],summary:[1],menuOpen:[516,"menu-open"],setFocus:[64],scrollContentTo:[64]}]);function v(){"undefined"!=typeof customElements&&["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,k);break;case"calcite-action":customElements.get(e)||f();break;case"calcite-action-menu":customElements.get(e)||m();break;case"calcite-icon":customElements.get(e)||g();break;case"calcite-loader":customElements.get(e)||b();break;case"calcite-popover":customElements.get(e)||x();break;case"calcite-scrim":customElements.get(e)||w()}}))}v();const y=k,j=v;export{y as CalcitePanel,j as defineCustomElement};