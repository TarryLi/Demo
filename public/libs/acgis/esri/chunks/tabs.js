// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils"],function(k,e){function l(){"undefined"!==typeof customElements&&["calcite-tabs"].forEach(a=>{switch(a){case "calcite-tabs":customElements.get(a)||customElements.define(a,m)}})}const m=e.proxyCustomElement(class extends e.H{constructor(){super();this.__registerHost();this.__attachShadow();this.layout="inline";this.position="above";this.scale="m";this.bordered=!1;this.titles=[];this.tabs=[]}connectedCallback(){"center"===this.layout&&(this.bordered=!1)}render(){return e.h(e.Fragment,
null,e.h("slot",{name:"tab-nav"}),e.h("section",null,e.h("slot",null)))}calciteTabTitleRegister(a){this.titles=[...this.titles,a.target];this.registryHandler();a.stopPropagation()}calciteTabTitleUnregister(a){this.titles=this.titles.filter(d=>d!==a.detail);this.registryHandler();a.stopPropagation()}calciteTabRegister(a){this.tabs=[...this.tabs,a.target];this.registryHandler();a.stopPropagation()}calciteTabUnregister(a){this.tabs=this.tabs.filter(d=>d!==a.detail);this.registryHandler();a.stopPropagation()}async registryHandler(){let a,
d;if(this.tabs.some(b=>b.tab)||this.titles.some(b=>b.tab))a=this.tabs.sort((b,f)=>b.tab.localeCompare(f.tab)).map(b=>b.id),d=this.titles.sort((b,f)=>b.tab.localeCompare(f.tab)).map(b=>b.id);else{const b=await Promise.all(this.tabs.map(c=>c.getTabIndex())),f=await Promise.all(this.titles.map(c=>c.getTabIndex()));a=b.reduce((c,g,h)=>{c[g]=this.tabs[h].id;return c},[]);d=f.reduce((c,g,h)=>{c[g]=this.titles[h].id;return c},[])}this.tabs.forEach(b=>b.updateAriaInfo(a,d));this.titles.forEach(b=>b.updateAriaInfo(a,
d))}get el(){return this}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host([bordered]){-webkit-box-shadow:inset 0 1px 0 var(--calcite-ui-border-1);box-shadow:inset 0 1px 0 var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1)}:host([bordered]:not([position\x3dbelow])) ::slotted(calcite-tab-nav){margin-bottom:-1px}:host([bordered][position\x3dbelow]) ::slotted(calcite-tab-nav){margin-top:-1px}:host([bordered][position\x3dbelow]){-webkit-box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1);box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1)}:host([bordered][scale\x3ds]) section{padding:0.75rem}:host([bordered][scale\x3dm]) section{padding:0.5rem}:host([bordered][scale\x3dl]) section{padding:1rem}:host([position\x3dbelow]){-ms-flex-direction:column-reverse;flex-direction:column-reverse}section{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;overflow:hidden;border-top-width:1px;border-top-color:var(--calcite-ui-border-1);border-top-style:solid}:host([position\x3dbelow]) section{-ms-flex-direction:column-reverse;flex-direction:column-reverse;border-top-width:0px;border-bottom-width:1px;border-bottom-color:var(--calcite-ui-border-1)}:host([position\x3dbelow]:not([bordered])) section{border-bottom-style:solid}"}},
[1,"calcite-tabs",{layout:[513],position:[513],scale:[513],bordered:[1540],titles:[32],tabs:[32]},[[0,"calciteTabTitleRegister","calciteTabTitleRegister"],[16,"calciteTabTitleUnregister","calciteTabTitleUnregister"],[0,"calciteTabRegister","calciteTabRegister"],[16,"calciteTabUnregister","calciteTabUnregister"]]]);l();k.Tabs=m;k.defineCustomElement=l});