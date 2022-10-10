// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./dom ./action-menu ./action-group ./conditionalSlot ./action ./icon ./loader ./popover".split(" "),function(l,d,m,p,q,r,w,x,y,z){function A(a,c){var b;return a||(null===(b=c.closest("calcite-shell-panel"))||void 0===b?void 0:b.position)||"start"}function t({parent:a,expanded:c}){B(a).filter(b=>b.slot!==q.SLOTS.menuActions).forEach(b=>b.textEnabled=c);a.querySelectorAll("calcite-action-group").forEach(b=>b.expanded=c)}function u(){"undefined"!==typeof customElements&&
"calcite-action-pad calcite-action calcite-action-group calcite-action-menu calcite-icon calcite-loader calcite-popover".split(" ").forEach(a=>{switch(a){case "calcite-action-pad":customElements.get(a)||customElements.define(a,v);break;case "calcite-action":customElements.get(a)||w.defineCustomElement();break;case "calcite-action-group":customElements.get(a)||q.defineCustomElement();break;case "calcite-action-menu":customElements.get(a)||p.defineCustomElement();break;case "calcite-icon":customElements.get(a)||
x.defineCustomElement();break;case "calcite-loader":customElements.get(a)||y.defineCustomElement();break;case "calcite-popover":customElements.get(a)||z.defineCustomElement()}})}const B=a=>Array.from(a.querySelectorAll("calcite-action")).filter(c=>c.closest("calcite-action-menu")?c.slot===p.SLOTS.trigger:!0),C=({tooltip:a,referenceElement:c,expanded:b,ref:g})=>{a&&(a.referenceElement=!b&&c?c:null);g&&g(c);return c},F=({expanded:a,intlExpand:c,intlCollapse:b,toggle:g,el:e,position:f,tooltip:n,ref:k,
scale:h})=>{const D="rtl"===m.getElementDir(e);c=a?b:c;b=["chevrons-left","chevrons-right"];D&&b.reverse();e=(f="end"===A(f,e))?b[1]:b[0];f=f?b[0]:b[1];return d.h("calcite-action",{icon:a?e:f,onClick:g,ref:E=>C({tooltip:n,referenceElement:E,expanded:a,ref:k}),scale:h,text:c,textEnabled:a})},v=d.proxyCustomElement(class extends d.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteActionPadToggle=d.createEvent(this,"calciteActionPadToggle",7);this.expanded=this.expandDisabled=
!1;this.layout="vertical";this.actionMenuOpenChangeHandler=a=>{if(a.detail){const c=a.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(b=>{c.includes(b)||(b.menuOpen=!1)})}};this.toggleExpand=()=>{this.expanded=!this.expanded;this.calciteActionPadToggle.emit()};this.setExpandToggleRef=a=>{this.expandToggleEl=a}}expandedHandler(a){t({parent:this.el,expanded:a})}connectedCallback(){r.connectConditionalSlotComponent(this)}disconnectedCallback(){r.disconnectConditionalSlotComponent(this)}componentWillLoad(){const {el:a,
expanded:c}=this;t({parent:a,expanded:c})}async setFocus(a){"expand-toggle"===a?await m.focusElement(this.expandToggleEl):this.el.focus()}renderBottomActionGroup(){const {expanded:a,expandDisabled:c,intlExpand:b,intlCollapse:g,el:e,position:f,toggleExpand:n,scale:k}=this;var h=m.getSlotted(e,"expand-tooltip");return(h=c?null:d.h(F,{el:e,expanded:a,intlCollapse:g||"Collapse",intlExpand:b||"Expand",position:f,ref:this.setExpandToggleRef,scale:k,toggle:n,tooltip:h}))?d.h("calcite-action-group",{class:"action-group--bottom",
scale:k},d.h("slot",{name:"expand-tooltip"}),h):null}render(){return d.h(d.Host,{onCalciteActionMenuOpenChange:this.actionMenuOpenChangeHandler},d.h("div",{class:"container"},d.h("slot",null),this.renderBottomActionGroup()))}get el(){return this}static get watchers(){return{expanded:["expandedHandler"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{-webkit-animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.125rem}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0px;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-bottom:0px;padding-top:0px}.container{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);max-width:15vw}.action-group--bottom{-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:0px}:host([layout\x3dhorizontal]) .container{-ms-flex-direction:row;flex-direction:row;max-width:unset}:host([layout\x3dhorizontal]) .container .action-group--bottom{padding:0px}:host([layout\x3dhorizontal]) .container ::slotted(calcite-action-group){border-width:0px;padding:0px;border-inline-end-width:1px}::slotted(calcite-action-group:last-child){border-bottom-width:0px}"}},
[1,"calcite-action-pad",{expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],intlExpand:[1,"intl-expand"],intlCollapse:[1,"intl-collapse"],position:[513],scale:[513],setFocus:[64]}]);u();l.CalciteActionPad=v;l.defineCustomElement=u;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});