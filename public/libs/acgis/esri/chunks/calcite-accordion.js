// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils"],function(d,c){function f(){"undefined"!==typeof customElements&&["calcite-accordion"].forEach(a=>{switch(a){case "calcite-accordion":customElements.get(a)||customElements.define(a,g)}})}const g=c.proxyCustomElement(class extends c.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteAccordionChange=c.createEvent(this,"calciteAccordionChange",7);this.appearance="default";this.iconPosition="end";this.iconType="chevron";this.scale="m";
this.selectionMode="multi";this.items=[];this.sorted=!1;this.sortItems=a=>a.sort((b,e)=>b.position-e.position).map(b=>b.item)}componentDidLoad(){this.sorted||(this.items=this.sortItems(this.items),this.sorted=!0)}render(){return c.h("div",{class:{"accordion--transparent":"transparent"===this.appearance,"accordion--minimal":"minimal"===this.appearance,accordion:"default"===this.appearance}},c.h("slot",null))}calciteAccordionItemKeyEvent(a){var b=a.detail.item;if(this.el===a.detail.parent){b=b.key;
a=a.target;const e=0===this.itemIndex(a),h=this.itemIndex(a)===this.items.length-1;switch(b){case "ArrowDown":h?this.focusFirstItem():this.focusNextItem(a);break;case "ArrowUp":e?this.focusLastItem():this.focusPrevItem(a);break;case "Home":this.focusFirstItem();break;case "End":this.focusLastItem()}}}registerCalciteAccordionItem(a){a={item:a.target,parent:a.detail.parent,position:a.detail.position};this.el===a.parent&&this.items.push(a)}updateActiveItemOnChange(a){this.requestedAccordionItem=a.detail.requestedAccordionItem;
this.calciteAccordionChange.emit({requestedAccordionItem:this.requestedAccordionItem})}focusFirstItem(){this.focusElement(this.items[0])}focusLastItem(){this.focusElement(this.items[this.items.length-1])}focusNextItem(a){a=this.itemIndex(a);this.focusElement(this.items[a+1]||this.items[0])}focusPrevItem(a){a=this.itemIndex(a);this.focusElement(this.items[a-1]||this.items[this.items.length-1])}itemIndex(a){return this.items.indexOf(a)}focusElement(a){a.focus()}get el(){return this}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale\x3ds]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale\x3dm]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale\x3dl]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-width:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion--minimal{--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0}.accordion{border-width:1px;border-bottom-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2)}"}},
[1,"calcite-accordion",{appearance:[513],iconPosition:[513,"icon-position"],iconType:[513,"icon-type"],scale:[513],selectionMode:[513,"selection-mode"]},[[0,"calciteAccordionItemKeyEvent","calciteAccordionItemKeyEvent"],[0,"calciteAccordionItemRegister","registerCalciteAccordionItem"],[0,"calciteAccordionItemSelect","updateActiveItemOnChange"]]]);f();d.CalciteAccordion=g;d.defineCustomElement=f;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});