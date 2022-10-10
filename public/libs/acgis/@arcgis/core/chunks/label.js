/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{q as e,c as t}from"./dom.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const n="calciteInternalLabelConnected",l="calciteInternaLabelDisconnected",a=new WeakMap,c=new WeakMap,i=new WeakMap,o=new Set;function s(n){const l=(n=>{const{id:l}=n,a=l&&e(n,{selector:`calcite-label[for="${l}"]`});if(a)return a;const c=t(n,"calcite-label");return!c||function(e,t){let n;const l="custom-element-ancestor-check",a=l=>{l.stopImmediatePropagation();const a=l.composedPath();n=a.slice(a.indexOf(t),a.indexOf(e))};return e.addEventListener(l,a,{once:!0}),t.dispatchEvent(new CustomEvent(l,{composed:!0,bubbles:!0})),e.removeEventListener(l,a),n.filter((n=>n!==t&&n!==e)).filter((e=>{var t;return null===(t=e.tagName)||void 0===t?void 0:t.includes("-")})).length>0}(c,n)?null:c})(n.el);if(a.has(l)||!l&&o.has(n))return;const s=v.bind(n);if(l){n.labelEl=l;const e=b.bind(n);a.set(n.labelEl,e),n.labelEl.addEventListener("calciteInternalLabelClick",e),o.delete(n),document.removeEventListener("calciteInternalLabelConnected",c.get(n)),i.set(n,s),document.addEventListener("calciteInternaLabelDisconnected",s)}else o.has(n)||(s(),document.removeEventListener("calciteInternaLabelDisconnected",i.get(n)))}function r(e){if(o.delete(e),document.removeEventListener("calciteInternalLabelConnected",c.get(e)),document.removeEventListener("calciteInternaLabelDisconnected",i.get(e)),c.delete(e),i.delete(e),!e.labelEl)return;const t=a.get(e.labelEl);e.labelEl.removeEventListener("calciteInternalLabelClick",t),a.delete(e.labelEl)}function d(e){var t,n;return e.label||(null===(n=null===(t=e.labelEl)||void 0===t?void 0:t.textContent)||void 0===n?void 0:n.trim())||""}function b(e){this.disabled||this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e)}function u(){o.has(this)&&s(this)}function v(){o.add(this);const e=c.get(this)||u.bind(this);c.set(this,e),document.addEventListener("calciteInternalLabelConnected",e)}export{l as a,s as c,r as d,d as g,n as l};
