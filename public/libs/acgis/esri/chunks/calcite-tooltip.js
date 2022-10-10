// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./guid","./popper","./dom"],function(h,e,p,f,k){function l(){"undefined"!==typeof customElements&&["calcite-tooltip"].forEach(a=>{switch(a){case "calcite-tooltip":customElements.get(a)||customElements.define(a,m)}})}class q{constructor(){this.registeredElements=new WeakMap;this.hoverTimeouts=new WeakMap;this.registeredElementCount=0;this.queryTooltip=a=>{const {registeredElements:b}=this;a=a.find(c=>b.has(c));return b.get(a)};this.keyDownHandler=a=>{"Escape"===
a.key&&({activeTooltipEl:a}=this,a&&(this.clearHoverTimeout(a),this.toggleTooltip(a,!1)))};this.mouseEnterShow=a=>{this.hoverEvent(a,!0)};this.mouseLeaveHide=a=>{this.hoverEvent(a,!1)};this.clickHandler=a=>{this.clickedTooltip=this.queryTooltip(a.composedPath())};this.focusShow=a=>{this.focusEvent(a,!0)};this.blurHide=a=>{this.focusEvent(a,!1)};this.hoverToggle=(a,b)=>{const {hoverTimeouts:c}=this;c.delete(a);b&&this.closeExistingTooltip();this.toggleTooltip(a,b)}}registerElement(a,b){this.registeredElementCount++;
this.registeredElements.set(a,b);1===this.registeredElementCount&&this.addListeners()}unregisterElement(a){this.registeredElements.delete(a)&&this.registeredElementCount--;0===this.registeredElementCount&&this.removeListeners()}addListeners(){document.addEventListener("keydown",this.keyDownHandler);document.addEventListener("mouseover",this.mouseEnterShow,{capture:!0});document.addEventListener("mouseout",this.mouseLeaveHide,{capture:!0});document.addEventListener("pointerdown",this.clickHandler,
{capture:!0});document.addEventListener("focusin",this.focusShow);document.addEventListener("focusout",this.blurHide,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler);document.removeEventListener("mouseover",this.mouseEnterShow,{capture:!0});document.removeEventListener("mouseout",this.mouseLeaveHide,{capture:!0});document.removeEventListener("pointerdown",this.clickHandler,{capture:!0});document.removeEventListener("focusin",this.focusShow,{capture:!0});
document.removeEventListener("focusout",this.blurHide,{capture:!0})}clearHoverTimeout(a){const {hoverTimeouts:b}=this;b.has(a)&&(window.clearTimeout(b.get(a)),b.delete(a))}closeExistingTooltip(){const {activeTooltipEl:a}=this;a&&this.toggleTooltip(a,!1)}focusTooltip(a,b){this.closeExistingTooltip();b&&this.clearHoverTimeout(a);this.toggleTooltip(a,b)}toggleTooltip(a,b){if(a.open=b)this.activeTooltipEl=a}hoverTooltip(a,b){this.clearHoverTimeout(a);const {hoverTimeouts:c}=this,d=window.setTimeout(()=>
this.hoverToggle(a,b),500);c.set(a,d)}activeTooltipHover(a){const {activeTooltipEl:b,hoverTimeouts:c}=this,{type:d}=a;b&&("mouseover"===d&&a.composedPath().includes(b)?this.clearHoverTimeout(b):"mouseout"!==d||c.has(b)||this.hoverTooltip(b,!1))}hoverEvent(a,b){const c=this.queryTooltip(a.composedPath());this.activeTooltipHover(a);c&&this.hoverTooltip(c,b)}focusEvent(a,b){(a=this.queryTooltip(a.composedPath()))&&a!==this.clickedTooltip?this.focusTooltip(a,b):this.clickedTooltip=null}}const n=new q,
m=e.proxyCustomElement(class extends e.H{constructor(){super();this.__registerHost();this.__attachShadow();this.offsetDistance=f.defaultOffsetDistance;this.offsetSkidding=0;this.open=!1;this.overlayPositioning="absolute";this.placement="auto";this.guid=`calcite-tooltip-${p.guid()}`;this.setUpReferenceElement=()=>{this.removeReferences();this.effectiveReferenceElement=this.getReferenceElement();const {el:a,referenceElement:b,effectiveReferenceElement:c}=this;b&&!c&&console.warn(`${a.tagName}: reference-element id "${b}" was not found.`,
{el:a});this.addReferences();this.createPopper()};this.getId=()=>this.el.id||this.guid;this.addReferences=()=>{const {effectiveReferenceElement:a}=this;if(a){var b=this.getId();a.setAttribute("aria-describedby",b);n.registerElement(a,this.el)}};this.removeReferences=()=>{const {effectiveReferenceElement:a}=this;a&&(a.removeAttribute("aria-describedby"),n.unregisterElement(a))}}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(){this.reposition()}placementHandler(){this.reposition()}referenceElementHandler(){this.setUpReferenceElement()}componentWillLoad(){this.setUpReferenceElement()}componentDidLoad(){this.reposition()}disconnectedCallback(){this.removeReferences();
this.destroyPopper()}async reposition(){const {popper:a,el:b,placement:c}=this,d=this.getModifiers();a?await f.updatePopper({el:b,modifiers:d,placement:c,popper:a}):this.createPopper()}getReferenceElement(){const {referenceElement:a,el:b}=this;return("string"===typeof a?k.queryElementRoots(b,{id:a}):a)||null}getModifiers(){const {arrowEl:a,offsetDistance:b,offsetSkidding:c}=this;return[{name:"arrow",enabled:!0,options:{element:a}},{name:"offset",enabled:!0,options:{offset:[c,b]}},{name:"eventListeners",
enabled:this.open}]}createPopper(){this.destroyPopper();const {el:a,placement:b,effectiveReferenceElement:c,overlayPositioning:d}=this,g=this.getModifiers();this.popper=f.createPopper({el:a,modifiers:g,placement:b,overlayPositioning:d,referenceEl:c})}destroyPopper(){const {popper:a}=this;a&&a.destroy();this.popper=null}render(){const {effectiveReferenceElement:a,label:b,open:c}=this,d=a&&c,g=!d;return e.h(e.Host,{"aria-hidden":k.toAriaBoolean(g),"aria-label":b,"calcite-hydrated-hidden":g,id:this.getId(),
role:"tooltip"},e.h("div",{class:{[f.CSS.animation]:!0,[f.CSS.animationActive]:d}},e.h("div",{class:"arrow",ref:r=>this.arrowEl=r}),e.h("div",{class:"container"},e.h("slot",null))))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return'@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^\x3dbottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^\x3dtop]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^\x3dleft]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^\x3dright]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([data-popper-placement][data-popper-reference-hidden]){pointer-events:none;opacity:0}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^\x3dtop]) .arrow{bottom:-4px}:host([data-popper-placement^\x3dbottom]) .arrow{top:-4px}:host([data-popper-placement^\x3dleft]) .arrow{right:-4px}:host([data-popper-placement^\x3dright]) .arrow{left:-4px}.container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-width:20rem;max-height:20rem}.calcite-popper-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}'}},
[1,"calcite-tooltip",{label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[516],overlayPositioning:[1,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],effectiveReferenceElement:[32],reposition:[64]}]);l();h.CalciteTooltip=m;h.defineCustomElement=l;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});