// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./color-picker-swatch ./dom ./icon ./input ./progress ./math ./interactive ./button ./loader ./tab ./tab-nav ./tab-title ./tabs ./debounce".split(" "),function(D,g,m,E,N,O,P,da,ea,fa,ha,ia,ja,ka,la,Q){function R(a){const {r:b,g:c,b:d}=a;return`#${b.toString(16).padStart(2,"0")}${c.toString(16).padStart(2,"0")}${d.toString(16).padStart(2,"0")}`.toLowerCase()}function A(a){return a&&4===a.length&&S.test(a)||a&&7===a.length&&T.test(a)}function p(a){a=a.toLowerCase();
a.startsWith("#")||(a=`#${a}`);return a&&4===a.length&&S.test(a)?R(ma(a)):a}function ma(a){if(!A(a))return null;a=a.replace("#","");if(3===a.length){const [d,e,f]=a.split("");var b=parseInt(`${d}${d}`,16),c=parseInt(`${e}${e}`,16);a=parseInt(`${f}${f}`,16);return{r:b,g:c,b:a}}b=parseInt(a.slice(0,2),16);c=parseInt(a.slice(2,4),16);a=parseInt(a.slice(4,6),16);return{r:b,g:c,b:a}}function U(a){if("string"===typeof a){if(a.startsWith("#")){const {length:b}=a;if(4===b||7===b)return q.HEX;if(5===b||9===
b)return q.HEXA}if(a.startsWith("rgba("))return q.RGBA_CSS;if(a.startsWith("rgb("))return q.RGB_CSS;if(a.startsWith("hsl("))return q.HSL_CSS;if(a.startsWith("hsla("))return q.HSLA_CSS}if("object"===typeof a){if(r(a,"r","g","b"))return r(a,"a")?t.RGBA:t.RGB;if(r(a,"h","s","l"))return r(a,"a")?t.HSLA:t.HSL;if(r(a,"h","s","v"))return r(a,"a")?t.HSVA:t.HSV}return null}function r(a,...b){return b.every(c=>c&&a&&`${c}`in a)}function V(a,b){return(null===a||void 0===a?void 0:a.rgbNumber())===(null===b||
void 0===b?void 0:b.rgbNumber())}function W(){"undefined"!==typeof customElements&&["calcite-color-picker-hex-input","calcite-color-picker-swatch","calcite-icon","calcite-input","calcite-progress"].forEach(a=>{switch(a){case "calcite-color-picker-hex-input":customElements.get(a)||customElements.define(a,na);break;case "calcite-color-picker-swatch":customElements.get(a)||m.defineCustomElement();break;case "calcite-icon":customElements.get(a)||N.defineCustomElement();break;case "calcite-input":customElements.get(a)||
O.defineCustomElement();break;case "calcite-progress":customElements.get(a)||P.defineCustomElement()}})}function oa(a,b,c){var d=!0,e=!0;if("function"!=typeof a)throw new TypeError("Expected a function");Q.isObject(c)&&(d="leading"in c?!!c.leading:d,e="trailing"in c?!!c.trailing:e);return Q.debounce(a,b,{leading:d,maxWait:b,trailing:e})}function X(){"undefined"!==typeof customElements&&"calcite-color-picker calcite-button calcite-color-picker-hex-input calcite-color-picker-swatch calcite-icon calcite-input calcite-loader calcite-progress calcite-tab calcite-tab-nav calcite-tab-title calcite-tabs".split(" ").forEach(a=>
{switch(a){case "calcite-color-picker":customElements.get(a)||customElements.define(a,Y);break;case "calcite-button":customElements.get(a)||fa.defineCustomElement();break;case "calcite-color-picker-hex-input":customElements.get(a)||W();break;case "calcite-color-picker-swatch":customElements.get(a)||m.defineCustomElement();break;case "calcite-icon":customElements.get(a)||N.defineCustomElement();break;case "calcite-input":customElements.get(a)||O.defineCustomElement();break;case "calcite-loader":customElements.get(a)||
ha.defineCustomElement();break;case "calcite-progress":customElements.get(a)||P.defineCustomElement();break;case "calcite-tab":customElements.get(a)||ia.defineCustomElement();break;case "calcite-tab-nav":customElements.get(a)||ja.defineCustomElement();break;case "calcite-tab-title":customElements.get(a)||ka.defineCustomElement();break;case "calcite-tabs":customElements.get(a)||la.defineCustomElement()}})}const pa=/^[0-9A-F]$/i,S=/^#[0-9A-F]{3}$/i,T=/^#[0-9A-F]{6}$/i,q={HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",
RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"},t={RGB:"rgb",RGBA:"rgba",HSL:"hsl",HSLA:"hsla",HSV:"hsv",HSVA:"hsva"},u=m.color("#007AC2"),Z={r:255,g:255,b:255},n={h:360,s:100,v:100},aa={s:{slider:{height:10,width:160},colorField:{height:80,width:160},thumb:{radius:8}},m:{slider:{height:14,width:272},colorField:{height:150,width:272},thumb:{radius:10}},l:{slider:{height:16,width:464},colorField:{height:200,width:464},thumb:{radius:12}}},ba=m.color(),na=g.proxyCustomElement(class extends g.H{constructor(){super();
this.__registerHost();this.__attachShadow();this.calciteColorPickerHexInputChange=g.createEvent(this,"calciteColorPickerHexInputChange",7);this.allowEmpty=!1;this.intlHex="Hex";this.intlNoColor="No color";this.scale="m";this.value=p(ba.hex());this.onCalciteInputBlur=()=>{const a=this.inputNode,b=a.value,c=`#${b}`;this.allowEmpty&&!b||A(c)&&c&&7===c.length&&T.test(c)||(a.value=this.allowEmpty&&!this.internalColor?"":this.formatForInternalInput(R(this.internalColor.object())))};this.onInputChange=()=>
{this.internalSetValue(this.inputNode.value,this.value)};this.internalColor=ba;this.previousNonNullValue=this.value;this.storeInputRef=a=>{this.inputNode=a}}connectedCallback(){const {allowEmpty:a,value:b}=this;if(b){const c=p(b);A(c)&&this.internalSetValue(c,c,!1)}else a&&this.internalSetValue(null,null,!1)}handleValueChange(a,b){this.internalSetValue(a,b,!1)}onInputKeyDown(a){const {altKey:b,ctrlKey:c,metaKey:d,shiftKey:e}=a,{internalColor:f,value:h}=this;var k=a.key;if("Tab"===k||"Enter"===k)this.onInputChange();
else{var l=this.value;if("ArrowDown"===k||"ArrowUp"===k)h?this.internalSetValue(p(this.nudgeRGBChannels(f,(e?10:1)*("ArrowUp"===k?1:-1)).hex()),l):this.internalSetValue(this.previousNonNullValue,l),a.preventDefault();else{l=b||c||d;var v=1===k.length;k=pa.test(k);!v||l||k||a.preventDefault()}}}render(){const {intlHex:a,value:b}=this,c=this.formatForInternalInput(b);return g.h("div",{class:"container"},g.h("calcite-input",{class:"input",label:a,maxLength:6,onCalciteInputBlur:this.onCalciteInputBlur,
onCalciteInputChange:this.onInputChange,onKeyDown:this.handleKeyDown,prefixText:"#",ref:this.storeInputRef,scale:this.scale,value:c}),c?g.h("calcite-color-picker-swatch",{active:!0,class:"preview",color:`#${c}`,scale:this.scale}):null)}async setFocus(){E.focusElement(this.inputNode)}internalSetValue(a,b,c=!0){if(a){if(a=p(a),A(a)){({internalColor:b}=this);b=!b||a!==p(b.hex());this.internalColor=m.color(a);this.value=this.previousNonNullValue=a;b&&c&&this.calciteColorPickerHexInputChange.emit();return}}else if(this.allowEmpty){this.value=
this.internalColor=null;c&&this.calciteColorPickerHexInputChange.emit();return}this.value=b}formatForInternalInput(a){return a?a.replace("#",""):""}nudgeRGBChannels(a,b){return m.color.rgb(a.array().map(c=>c+b))}handleKeyDown(a){"Enter"===a.key&&a.preventDefault()}get el(){return this}static get watchers(){return{value:["handleValueChange"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}.container{display:inline-grid;width:100%;-ms-flex-align:center;align-items:center;grid-template-columns:1fr auto}.preview{grid-column:2/3;pointer-events:none;margin-top:0px;margin-bottom:0px;margin-left:0.25rem;margin-right:0.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;z-index:1}.preview,.input{grid-row:1}.input{grid-column:1/3;width:100%;text-transform:uppercase}"}},
[1,"calcite-color-picker-hex-input",{allowEmpty:[4,"allow-empty"],intlHex:[1,"intl-hex"],intlNoColor:[1,"intl-no-color"],scale:[513],value:[1537],internalColor:[32],setFocus:[64]},[[2,"keydown","onInputKeyDown"]]]);W();const qa=p(u.hex()),Y=g.proxyCustomElement(class extends g.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteColorPickerChange=g.createEvent(this,"calciteColorPickerChange",7);this.calciteColorPickerInput=g.createEvent(this,"calciteColorPickerInput",7);
this.allowEmpty=!1;this.appearance="default";this.color=u;this.disabled=!1;this.format="auto";this.hideSaved=this.hideChannels=this.hideHex=!1;this.intlB="B";this.intlBlue="Blue";this.intlDeleteColor="Delete color";this.intlG="G";this.intlGreen="Green";this.intlH="H";this.intlHsv="HSV";this.intlHex="Hex";this.intlHue="Hue";this.intlNoColor="No color";this.intlR="R";this.intlRed="Red";this.intlRgb="RGB";this.intlS="S";this.intlSaturation="Saturation";this.intlSaveColor="Save color";this.intlSaved=
"Saved";this.intlV="V";this.intlValue="Value";this.scale="m";this.value=qa;this.colorFieldAndSliderHovered=!1;this.hueThumbState="idle";this.internalColorUpdateContext=null;this.mode=q.HEX;this.shiftKeyChannelAdjustment=0;this.sliderThumbState="idle";this.colorFieldAndSliderInteractive=!1;this.channelMode="rgb";this.channels=this.toChannels(u);this.dimensions=aa.m;this.savedColors=[];this.handleTabActivate=a=>{this.channelMode=a.currentTarget.getAttribute("data-color-mode");this.updateChannelsFromColor(this.color)};
this.handleColorFieldScopeKeyDown=a=>{const b=a.key,c={ArrowUp:{x:0,y:-10},ArrowRight:{x:10,y:0},ArrowDown:{x:0,y:10},ArrowLeft:{x:-10,y:0}};c[b]&&(a.preventDefault(),this.scopeOrientation="ArrowDown"===b||"ArrowUp"===b?"vertical":"horizontal",this.captureColorFieldColor(this.colorFieldScopeLeft+c[b].x||0,this.colorFieldScopeTop+c[b].y||0,!1))};this.handleHueScopeKeyDown=a=>{var b=a.shiftKey?10:1;const c=a.key,d={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1};d[c]&&(a.preventDefault(),a=d[c]*b,
b=this.baseColorFieldColor.hue(),a=this.baseColorFieldColor.hue(b+a),this.internalColorSet(a,!1))};this.handleHexInputChange=a=>{a.stopPropagation();const {allowEmpty:b,color:c}=this;a=a.target.value;if(b&&!a)this.internalColorSet(null);else{var d=c&&p(c.hex());a!==d&&this.internalColorSet(m.color(a))}};this.handleSavedColorSelect=a=>{this.internalColorSet(m.color(a.currentTarget.color))};this.handleChannelInput=a=>{const b=a.currentTarget;a=a.detail.nativeEvent.target;var c=Number(b.getAttribute("data-channel-index"));
c="rgb"===this.channelMode?Z[Object.keys(Z)[c]]:n[Object.keys(n)[c]];c=this.allowEmpty&&!b.value?"":da.clamp(Number(b.value)+this.shiftKeyChannelAdjustment,0,c).toString();b.value=c;a.value=c};this.handleChannelChange=a=>{a=a.currentTarget;const b=Number(a.getAttribute("data-channel-index")),c=[...this.channels];this.allowEmpty&&!a.value?(this.channels=[null,null,null],this.internalColorSet(null)):(c[b]=Number(a.value),this.updateColorFromChannels(c))};this.handleSavedColorKeyDown=a=>{if(" "===a.key||
"Enter"===a.key)a.preventDefault(),a.stopPropagation(),this.handleSavedColorSelect(a)};this.handleColorFieldAndSliderMouseLeave=()=>{this.colorFieldAndSliderHovered=this.colorFieldAndSliderInteractive=!1;"drag"!==this.sliderThumbState&&"drag"!==this.hueThumbState&&(this.sliderThumbState=this.hueThumbState="idle",this.drawColorFieldAndSlider())};this.handleColorFieldAndSliderMouseDown=a=>{const {offsetX:b,offsetY:c}=a,d=this.getCanvasRegion(c);"color-field"===d?(this.hueThumbState="drag",this.captureColorFieldColor(b,
c),this.colorFieldScopeNode.focus()):"slider"===d&&(this.sliderThumbState="drag",this.captureHueSliderColor(b),this.hueScopeNode.focus());a.preventDefault();document.addEventListener("mousemove",this.globalMouseMoveHandler);document.addEventListener("mouseup",this.globalMouseUpHandler,{once:!0});this.activeColorFieldAndSliderRect=this.fieldAndSliderRenderingContext.canvas.getBoundingClientRect()};this.globalMouseUpHandler=()=>{const a="drag"===this.sliderThumbState||"drag"===this.hueThumbState;this.sliderThumbState=
this.hueThumbState="idle";this.activeColorFieldAndSliderRect=null;this.drawColorFieldAndSlider();a&&this.calciteColorPickerChange.emit()};this.globalMouseMoveHandler=a=>{const {el:b,dimensions:c}=this;var d="drag"===this.sliderThumbState;const e="drag"===this.hueThumbState;if(b.isConnected&&(d||e)){d=this.activeColorFieldAndSliderRect;var {clientX:f,clientY:h}=a;if(this.colorFieldAndSliderHovered)a=f-d.x,d=h-d.y;else{a=c.colorField.width;const k=c.colorField.height,l=c.slider.height;a=f<d.x+a&&f>
d.x?f-d.x:f<d.x?0:a;d=h<d.y+k+l&&h>d.y?h-d.y:h<d.y?0:k+l}e?this.captureColorFieldColor(a,d,!1):this.captureHueSliderColor(a)}};this.handleColorFieldAndSliderMouseEnterOrMove=({offsetX:a,offsetY:b})=>{const {dimensions:{colorField:c,slider:d,thumb:e}}=this;this.colorFieldAndSliderInteractive=b<=c.height+d.height;this.colorFieldAndSliderHovered=!0;var f=this.getCanvasRegion(b);if("color-field"===f){f=this.hueThumbState;var h=this.baseColorFieldColor.hsv(),k=Math.round(h.saturationv()/(n.s/c.width));
h=Math.round(c.height-h.value()/(n.v/c.height));a=this.containsPoint(a,b,k,h,e.radius);b=!1;"idle"===f&&a?(this.hueThumbState="hover",b=!0):"hover"!==f||a||(this.hueThumbState="idle",b=!0);"drag"!==this.hueThumbState&&b&&this.drawColorFieldAndSlider()}else"slider"===f&&(k=this.baseColorFieldColor.hsv().saturationv(100).value(100),f=this.sliderThumbState,k=Math.round(k.hue()/(360/d.width)),h=Math.round((d.height+this.getSliderCapSpacing())/2)+c.height,a=this.containsPoint(a,b,k,h,e.radius),b=!1,"idle"===
f&&a?(this.sliderThumbState="hover",b=!0):"hover"!==f||a||(this.sliderThumbState="idle",b=!0),"drag"!==this.sliderThumbState&&b&&this.drawColorFieldAndSlider())};this.storeColorFieldScope=a=>{this.colorFieldScopeNode=a};this.storeHueScope=a=>{this.hueScopeNode=a};this.renderChannelsTabTitle=a=>{const {channelMode:b,intlRgb:c,intlHsv:d}=this;return g.h("calcite-tab-title",{active:a===b,class:"color-mode","data-color-mode":a,key:a,onCalciteTabsActivate:this.handleTabActivate},"rgb"===a?c:d)};this.renderChannelsTab=
a=>{const {channelMode:b,channels:c,intlB:d,intlBlue:e,intlG:f,intlGreen:h,intlH:k,intlHue:l,intlR:v,intlRed:B,intlS:C,intlSaturation:w,intlV:F,intlValue:G}=this,H=a===b,x="rgb"===a,y=x?[v,f,d]:[k,C,F],I=x?[B,h,e]:[l,w,G],J=E.getElementDir(this.el);return g.h("calcite-tab",{active:H,class:"control",key:a},g.h("div",{class:"channels",dir:"ltr"},c.map((K,z)=>this.renderChannel(K,z,y[z],I[z],J))))};this.renderChannel=(a,b,c,d,e)=>g.h("calcite-input",{class:"channel","data-channel-index":b,dir:e,label:d,
numberButtonType:"none",onCalciteInputChange:this.handleChannelChange,onCalciteInputInput:this.handleChannelInput,onKeyDown:this.handleKeyDown,prefixText:c,scale:"l"===this.scale?"m":"s",type:"number",value:null===a||void 0===a?void 0:a.toString()});this.deleteColor=()=>{const a=this.color.hex();if(-1<this.savedColors.indexOf(a)){var b=this.savedColors.filter(d=>d!==a);this.savedColors=b;var c=`${"calcite-color-"}${this.storageId}`;this.storageId&&localStorage.setItem(c,JSON.stringify(b))}};this.saveColor=
()=>{var a=this.color.hex();if(!(-1<this.savedColors.indexOf(a))){this.savedColors=a=[...this.savedColors,a];var b=`${"calcite-color-"}${this.storageId}`;this.storageId&&localStorage.setItem(b,JSON.stringify(a))}};this.drawColorFieldAndSlider=oa(()=>{this.fieldAndSliderRenderingContext&&(this.drawColorField(),this.drawHueSlider())},16);this.captureColorFieldColor=(a,b,c=!0)=>{const {dimensions:{colorField:{height:d,width:e}}}=this;a=Math.round(n.s/e*a);b=Math.round(n.v/d*(d-b));this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(a).value(b),
c)};this.initColorFieldAndSlider=a=>{this.fieldAndSliderRenderingContext=a.getContext("2d");this.setCanvasContextSize(a,{width:this.dimensions.colorField.width,height:this.dimensions.colorField.height+this.dimensions.slider.height+2*this.getSliderCapSpacing()});this.drawColorFieldAndSlider()}}handleColorChange(a,b){this.drawColorFieldAndSlider();this.updateChannelsFromColor(a);this.previousColor=b}handleFormatChange(a){this.setMode(a);this.internalColorSet(this.color,!1,"internal")}handleScaleChange(a=
"m"){this.updateDimensions(a)}handleValueChange(a,b){const {allowEmpty:c,format:d}=this;let e=!1;if(!c||a){const f=U(a);if(!f||"auto"!==d&&f!==d){this.showIncompatibleColorWarning(a,d);this.value=b;return}e=this.mode!==f;this.setMode(f)}b="drag"===this.sliderThumbState||"drag"===this.hueThumbState;"initial"!==this.internalColorUpdateContext&&("user-interaction"===this.internalColorUpdateContext?(this.calciteColorPickerInput.emit(),b||this.calciteColorPickerChange.emit()):(a=c&&!a?null:m.color(a),
b=!V(a,this.color),(e||b)&&this.internalColorSet(a,!0,"internal")))}get baseColorFieldColor(){return this.color||this.previousColor||u}handleChannelKeyUpOrDown(a){this.shiftKeyChannelAdjustment=0;const b=a.key;if(("ArrowUp"===b||"ArrowDown"===b)&&a.composedPath().some(d=>{var e;return null===(e=d.classList)||void 0===e?void 0:e.contains("channel")})){var {shiftKey:c}=a;a.preventDefault();this.color?this.shiftKeyChannelAdjustment="ArrowUp"===b&&c?9:"ArrowDown"===b&&c?-9:0:(this.internalColorSet(this.previousColor),
a.stopPropagation())}}async setFocus(){return E.focusElement(this.colorFieldScopeNode)}componentWillLoad(){const {allowEmpty:a,color:b,format:c,value:d}=this;var e=a&&!d,f=U(d);f=e||"auto"===c&&f||c===f;e=e?null:f?m.color(d):b;f||this.showIncompatibleColorWarning(d,c);this.setMode(c);this.internalColorSet(e,!1,"initial");this.updateDimensions(this.scale);e=`${"calcite-color-"}${this.storageId}`;this.storageId&&localStorage.getItem(e)&&(this.savedColors=JSON.parse(localStorage.getItem(e)))}disconnectedCallback(){document.removeEventListener("mousemove",
this.globalMouseMoveHandler);document.removeEventListener("mouseup",this.globalMouseUpHandler)}componentDidRender(){ea.updateHostInteraction(this)}render(){const {allowEmpty:a,color:b,intlDeleteColor:c,hideHex:d,hideChannels:e,hideSaved:f,intlHex:h,intlSaved:k,intlSaveColor:l,savedColors:v,scale:B}=this,C=b?b.hex():null,w="l"===B?"m":"s",{colorFieldAndSliderInteractive:F,colorFieldScopeTop:G,colorFieldScopeLeft:H,hueScopeLeft:x,hueScopeTop:y,scopeOrientation:I,dimensions:{colorField:{height:J,width:K},
slider:{height:z}}}=this,ra=null!==y&&void 0!==y?y:z/2+J,sa=null!==x&&void 0!==x?x:K*u.hue()/n.h,ca=null===b,L="vertical"===I;return g.h("div",{class:"container"},g.h("div",{class:"color-field-and-slider-wrap"},g.h("canvas",{class:{["color-field-and-slider"]:!0,["color-field-and-slider--interactive"]:F},onMouseDown:this.handleColorFieldAndSliderMouseDown,onMouseEnter:this.handleColorFieldAndSliderMouseEnterOrMove,onMouseLeave:this.handleColorFieldAndSliderMouseLeave,onMouseMove:this.handleColorFieldAndSliderMouseEnterOrMove,
ref:this.initColorFieldAndSlider}),g.h("div",{"aria-label":L?this.intlValue:this.intlSaturation,"aria-valuemax":L?n.v:n.s,"aria-valuemin":"0","aria-valuenow":(L?null===b||void 0===b?void 0:b.saturationv():null===b||void 0===b?void 0:b.value())||"0",class:{["scope"]:!0,["scope--color-field"]:!0},onKeyDown:this.handleColorFieldScopeKeyDown,ref:this.storeColorFieldScope,role:"slider",style:{top:`${G||0}px`,left:`${H||0}px`},tabindex:"0"}),g.h("div",{"aria-label":this.intlHue,"aria-valuemax":n.h,"aria-valuemin":"0",
"aria-valuenow":(null===b||void 0===b?void 0:b.round().hue())||u.round().hue(),class:{["scope"]:!0,["scope--hue"]:!0},onKeyDown:this.handleHueScopeKeyDown,ref:this.storeHueScope,role:"slider",style:{top:`${ra}px`,left:`${sa}px`},tabindex:"0"})),d&&e?null:g.h("div",{class:{["control-section"]:!0,["section"]:!0}},d?null:g.h("div",{class:"color-hex-options"},g.h("span",{class:{["header"]:!0,["header--hex"]:!0}},h),g.h("calcite-color-picker-hex-input",{allowEmpty:a,class:"control",onCalciteColorPickerHexInputChange:this.handleHexInputChange,
scale:w,value:C})),e?null:g.h("calcite-tabs",{class:{["color-mode-container"]:!0,["section--split"]:!0},scale:w},g.h("calcite-tab-nav",{slot:"tab-nav"},this.renderChannelsTabTitle("rgb"),this.renderChannelsTabTitle("hsv")),this.renderChannelsTab("rgb"),this.renderChannelsTab("hsv"))),f?null:g.h("div",{class:{["saved-colors-section"]:!0,["section"]:!0}},g.h("div",{class:"header"},g.h("label",null,k),g.h("div",{class:"saved-colors-buttons"},g.h("calcite-button",{appearance:"transparent",class:"delete-color",
color:"neutral",disabled:ca,iconStart:"minus",label:c,onClick:this.deleteColor,scale:w,type:"button"}),g.h("calcite-button",{appearance:"transparent",class:"save-color",color:"neutral",disabled:ca,iconStart:"plus",label:l,onClick:this.saveColor,scale:w,type:"button"}))),0<v.length?g.h("div",{class:"saved-colors"},[...v.map(M=>g.h("calcite-color-picker-swatch",{active:C===M,class:"saved-color",color:M,key:M,onClick:this.handleSavedColorSelect,onKeyDown:this.handleSavedColorKeyDown,scale:B,tabIndex:0}))]):
null))}handleKeyDown(a){"Enter"===a.key&&a.preventDefault()}showIncompatibleColorWarning(a,b){console.warn(`ignoring color value (${a}) as it is not compatible with the current format (${b})`)}setMode(a){this.mode="auto"===a?this.mode:a}captureHueSliderColor(a){const {dimensions:{slider:{width:b}}}=this;this.internalColorSet(this.baseColorFieldColor.hue(360/b*a),!1)}getCanvasRegion(a){const {dimensions:{colorField:{height:b},slider:{height:c}}}=this;return a<=b?"color-field":a<=b+c?"slider":"none"}internalColorSet(a,
b=!0,c="user-interaction"){b&&V(a,this.color)||(this.internalColorUpdateContext=c,this.color=a,this.value=this.toValue(a),this.internalColorUpdateContext=null)}toValue(a,b=this.mode){if(!a)return null;if(b.includes("hex"))return p(a.round().hex());if(b.includes("-css"))return a[b.replace("-css","").replace("a","")]().round().string();a=a[b]().round().object();b.endsWith("a")&&(a.a=a.alpha,delete a.alpha);return a}getSliderCapSpacing(){const {dimensions:{slider:{height:a},thumb:{radius:b}}}=this;return 2*
b-a}updateDimensions(a="m"){this.dimensions=aa[a]}drawColorField(){const a=this.fieldAndSliderRenderingContext,{dimensions:{colorField:{height:b,width:c}}}=this;a.fillStyle=this.baseColorFieldColor.hsv().saturationv(100).value(100).string();a.fillRect(0,0,c,b);var d=a.createLinearGradient(0,0,c,0);d.addColorStop(0,"rgba(255,255,255,1)");d.addColorStop(1,"rgba(255,255,255,0)");a.fillStyle=d;a.fillRect(0,0,c,b);d=a.createLinearGradient(0,0,0,b);d.addColorStop(0,"rgba(0,0,0,0)");d.addColorStop(1,"rgba(0,0,0,1)");
a.fillStyle=d;a.fillRect(0,0,c,b);this.drawActiveColorFieldColor()}setCanvasContextSize(a,{height:b,width:c}){const d=window.devicePixelRatio||1;a.width=c*d;a.height=b*d;a.style.height=`${b}px`;a.style.width=`${c}px`;a.getContext("2d").scale(d,d)}containsPoint(a,b,c,d,e){return Math.pow(a-c,2)+Math.pow(b-d,2)<=Math.pow(e,2)}drawActiveColorFieldColor(){var {color:a}=this;if(a){a=a.hsv();var {dimensions:{colorField:{height:b,width:c},thumb:{radius:d}}}=this,e=a.saturationv()/(n.s/c),f=b-a.value()/(n.v/
b);requestAnimationFrame(()=>{this.colorFieldScopeLeft=e;this.colorFieldScopeTop=f});this.drawThumb(this.fieldAndSliderRenderingContext,d,e,f,a,this.hueThumbState)}}drawThumb(a,b,c,d,e,f){const h=2*Math.PI;a.beginPath();a.arc(c,d,b,0,h);a.shadowBlur="hover"===f?32:16;a.shadowColor=`rgba(0, 0, 0, ${"drag"===f?.32:.16})`;a.fillStyle="#fff";a.fill();a.beginPath();a.arc(c,d,b-3,0,h);a.shadowBlur=0;a.shadowColor="transparent";a.fillStyle=e.rgb().string();a.fill()}drawActiveHueSliderColor(){var {color:a}=
this;if(a){a=a.hsv().saturationv(100).value(100);var {dimensions:{colorField:{height:b},slider:{height:c,width:d},thumb:{radius:e}}}=this,f=a.hue()/(360/d),h=c/2+b;requestAnimationFrame(()=>{this.hueScopeLeft=f;this.hueScopeTop=h});this.drawThumb(this.fieldAndSliderRenderingContext,e,f,h,a,this.sliderThumbState)}}drawHueSlider(){const a=this.fieldAndSliderRenderingContext,{dimensions:{colorField:{height:b},slider:{height:c,width:d}}}=this,e=a.createLinearGradient(0,0,d,0),f="red yellow lime cyan blue magenta red".split(" "),
h=1/(f.length-1);let k=0;f.forEach(l=>{e.addColorStop(k,m.color(l).string());k+=h});a.fillStyle=e;a.clearRect(0,b,d,c+2*this.getSliderCapSpacing());a.fillRect(0,b,d,c);this.drawActiveHueSliderColor()}updateColorFromChannels(a){this.internalColorSet(m.color(a,this.channelMode))}updateChannelsFromColor(a){this.channels=a?this.toChannels(a):[null,null,null]}toChannels(a){const {channelMode:b}=this;return a[b]().array().map(c=>Math.floor(c))}get el(){return this}static get watchers(){return{color:["handleColorChange"],
format:["handleFormatChange"],scale:["handleScaleChange"],value:["handleValueChange"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale\x3ds]) .container{width:160px}:host([scale\x3ds]) .saved-colors{grid-template-columns:repeat(auto-fill, minmax(20px, 1fr))}:host([scale\x3ds]) .channels{-ms-flex-direction:column;flex-direction:column}:host([scale\x3ds]) .channel{width:100%;margin-bottom:4px}:host([scale\x3ds]) .channel:last-child{margin-bottom:0}:host([scale\x3dm]) .container{width:272px}:host([scale\x3dl]) .header{padding-bottom:0px}:host([scale\x3dl]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale\x3dl]) .container{width:464px}:host([scale\x3dl]) .color-field-and-slider{margin-bottom:-20px}:host([scale\x3dl]) .section{padding:0 16px 16px}:host([scale\x3dl]) .section:first-of-type{padding-top:16px}:host([scale\x3dl]) .saved-colors{grid-template-columns:repeat(auto-fill, minmax(28px, 1fr));grid-gap:12px;padding-top:16px}:host([scale\x3dl]) .control-section{-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:baseline;align-items:baseline}:host([scale\x3dl]) .control-section\x3e:nth-child(2){-webkit-margin-start:12px;margin-inline-start:12px}:host([scale\x3dl]) .color-hex-options{display:-ms-flexbox;display:flex;-ms-flex-negative:1;flex-shrink:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;min-height:98px;width:160px}:host([scale\x3dl]) .color-mode-container{-ms-flex-negative:3;flex-shrink:3}:host([appearance\x3dminimal]) .container{border:none}.container{background-color:var(--calcite-ui-foreground-1);display:inline-block;border:1px solid var(--calcite-ui-border-1)}.color-field-and-slider-wrap{position:relative}.scope{pointer-events:none;position:absolute;font-size:var(--calcite-font-size--1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;outline-offset:14px}.scope:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:16px}.color-field-and-slider{margin-bottom:-16px}.color-field-and-slider--interactive{cursor:pointer}.control-section{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.section{padding:0 12px 12px}.section:first-of-type{padding-top:12px}.color-hex-options,.section--split{-ms-flex-positive:1;flex-grow:1}.header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:0.25rem;color:var(--calcite-ui-text-1)}.header--hex,.color-mode-container{padding-top:12px}.channels{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.channel{width:31%}.saved-colors{padding-top:12px;display:grid;grid-template-columns:repeat(auto-fill, minmax(24px, 1fr));grid-gap:8px;width:100%}.saved-colors-buttons{display:-ms-flexbox;display:flex}.saved-color{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.saved-color:hover{-webkit-transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}"}},
[1,"calcite-color-picker",{allowEmpty:[4,"allow-empty"],appearance:[513],color:[1040],disabled:[516],format:[1],hideHex:[4,"hide-hex"],hideChannels:[4,"hide-channels"],hideSaved:[4,"hide-saved"],intlB:[1,"intl-b"],intlBlue:[1,"intl-blue"],intlDeleteColor:[1,"intl-delete-color"],intlG:[1,"intl-g"],intlGreen:[1,"intl-green"],intlH:[1,"intl-h"],intlHsv:[1,"intl-hsv"],intlHex:[1,"intl-hex"],intlHue:[1,"intl-hue"],intlNoColor:[1,"intl-no-color"],intlR:[1,"intl-r"],intlRed:[1,"intl-red"],intlRgb:[1,"intl-rgb"],
intlS:[1,"intl-s"],intlSaturation:[1,"intl-saturation"],intlSaveColor:[1,"intl-save-color"],intlSaved:[1,"intl-saved"],intlV:[1,"intl-v"],intlValue:[1,"intl-value"],scale:[513],storageId:[1,"storage-id"],value:[1025],colorFieldAndSliderInteractive:[32],channelMode:[32],channels:[32],dimensions:[32],savedColors:[32],colorFieldScopeTop:[32],colorFieldScopeLeft:[32],scopeOrientation:[32],hueScopeLeft:[32],hueScopeTop:[32],setFocus:[64]},[[2,"keydown","handleChannelKeyUpOrDown"],[2,"keyup","handleChannelKeyUpOrDown"]]]);
X();D.CalciteColorPicker=Y;D.defineCustomElement=X;Object.defineProperty(D,Symbol.toStringTag,{value:"Module"})});