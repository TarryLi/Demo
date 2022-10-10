// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(l){function q(a){function d(b){if(Object(b)!==b)return Promise.reject(new TypeError(b+" is not an object."));var c=b.done;return Promise.resolve(b.value).then(function(f){return{value:f,done:c}})}return q=function(b){this.s=b;this.n=b.next},q.prototype={s:null,n:null,next:function(){return d(this.n.apply(this.s,arguments))},return:function(b){var c=this.s.return;return void 0===c?Promise.resolve({value:b,done:!0}):d(c.apply(this.s,arguments))},throw:function(b){var c=this.s.return;
return void 0===c?Promise.reject(b):d(c.apply(this.s,arguments))}},new q(a)}function w(a){this.wrapped=a}function n(a){function d(g,e){try{var h=a[g](e),k=h.value,r=k instanceof w;Promise.resolve(r?k.wrapped:k).then(function(m){r?d("return"===g?"return":"next",m):b(h.done?"return":"normal",m)},function(m){d("throw",m)})}catch(m){b("throw",m)}}function b(g,e){switch(g){case "return":c.resolve({value:e,done:!0});break;case "throw":c.reject(e);break;default:c.resolve({value:e,done:!1})}(c=c.next)?d(c.key,
c.arg):f=null}var c,f;this._invoke=function(g,e){return new Promise(function(h,k){h={key:g,arg:e,resolve:h,reject:k,next:null};f?f=f.next=h:(c=f=h,d(g,e))})};"function"!==typeof a.return&&(this.return=void 0)}function x(a,d,b,c,f,g,e){try{var h=a[g](e),k=h.value}catch(r){b(r);return}h.done?d(k):Promise.resolve(k).then(c,f)}function y(a,d){for(var b=0;b<d.length;b++){var c=d[b];c.enumerable=c.enumerable||!1;c.configurable=!0;"value"in c&&(c.writable=!0);Object.defineProperty(a,c.key,c)}}function t(a){t=
Object.setPrototypeOf?Object.getPrototypeOf.bind():function(d){return d.__proto__||Object.getPrototypeOf(d)};return t(a)}function p(a,d){p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,c){b.__proto__=c;return b};return p(a,d)}function z(){if("undefined"===typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}function u(a,d,
b){u=z()?Reflect.construct.bind():function(c,f,g){var e=[null];e.push.apply(e,f);c=new (Function.bind.apply(c,e));g&&p(c,g.prototype);return c};return u.apply(null,arguments)}function v(a){var d="function"===typeof Map?new Map:void 0;v=function(b){function c(){return u(b,arguments,t(this).constructor)}if(null===b||-1===Function.toString.call(b).indexOf("[native code]"))return b;if("function"!==typeof b)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof d){if(d.has(b))return d.get(b);
d.set(b,c)}c.prototype=Object.create(b.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}});return p(c,b)};return v(a)}n.prototype["function"===typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this};n.prototype.next=function(a){return this._invoke("next",a)};n.prototype.throw=function(a){return this._invoke("throw",a)};n.prototype.return=function(a){return this._invoke("return",a)};l._assertThisInitialized=function(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return a};l._asyncIterator=function(a){var d,b,c,f=2;for("undefined"!=typeof Symbol&&(b=Symbol.asyncIterator,c=Symbol.iterator);f--;){if(b&&null!=(d=a[b]))return d.call(a);if(c&&null!=(d=a[c]))return new q(d.call(a));b="@@asyncIterator";c="@@iterator"}throw new TypeError("Object is not async iterable");};l._asyncToGenerator=function(a){return function(){var d=this,b=arguments;return new Promise(function(c,f){function g(k){x(h,c,f,g,e,"next",k)}function e(k){x(h,c,f,g,e,"throw",k)}var h=a.apply(d,
b);g(void 0)})}};l._awaitAsyncGenerator=function(a){return new w(a)};l._createClass=function(a,d,b){d&&y(a.prototype,d);b&&y(a,b);Object.defineProperty(a,"prototype",{writable:!1});return a};l._inheritsLoose=function(a,d){a.prototype=Object.create(d.prototype);a.prototype.constructor=a;p(a,d)};l._wrapAsyncGenerator=function(a){return function(){return new n(a.apply(this,arguments))}};l._wrapNativeSuper=v});