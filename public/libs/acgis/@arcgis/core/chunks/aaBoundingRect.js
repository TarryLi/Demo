/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../core/lang.js";import{c as n}from"./mathUtils.js";import{a as t}from"./maybe.js";import a from"../geometry/Extent.js";function r(n=U){return[n[0],n[1],n[2],n[3]]}function i(n){return[n[0],n[1],n[2],n[3]]}function e(n,t){return n!==t&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3]),n}function u(n,t,a,i,e=r()){return e[0]=n,e[1]=t,e[2]=a,e[3]=i,e}function s(n,t=r()){return t[0]=n.xmin,t[1]=n.ymin,t[2]=n.xmax,t[3]=n.ymax,t}function o(n,t){return new a({xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:t})}function m(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1])}function c(n,a,r){if(t(a))e(r,n);else if("length"in a)C(a)?(r[0]=Math.min(n[0],a[0]),r[1]=Math.min(n[1],a[1]),r[2]=Math.max(n[2],a[2]),r[3]=Math.max(n[3],a[3])):2!==a.length&&3!==a.length||(r[0]=Math.min(n[0],a[0]),r[1]=Math.min(n[1],a[1]),r[2]=Math.max(n[2],a[0]),r[3]=Math.max(n[3],a[1]));else switch(a.type){case"extent":r[0]=Math.min(n[0],a.xmin),r[1]=Math.min(n[1],a.ymin),r[2]=Math.max(n[2],a.xmax),r[3]=Math.max(n[3],a.ymax);break;case"point":r[0]=Math.min(n[0],a.x),r[1]=Math.min(n[1],a.y),r[2]=Math.max(n[2],a.x),r[3]=Math.max(n[3],a.y)}}function f(n,t,a=n){const r=t.length;let i=n[0],e=n[1],u=n[2],s=n[3];for(let n=0;n<r;n++){const a=t[n];i=Math.min(i,a[0]),e=Math.min(e,a[1]),u=Math.max(u,a[0]),s=Math.max(s,a[1])}return a[0]=i,a[1]=e,a[2]=u,a[3]=s,a}function h(n){for(let t=0;t<4;t++)if(!isFinite(n[t]))return!1;return!0}function x(n){return t(n)||n[0]>=n[2]?0:n[2]-n[0]}function M(n){return n[1]>=n[3]?0:n[3]-n[1]}function l(n){return x(n)*M(n)}function y(n,t=[0,0]){return t[0]=(n[0]+n[2])/2,t[1]=(n[1]+n[3])/2,t}function p(n,t){return w(n,t[0],t[1])}function g(n,t){const a=t[3],r=.5*(n[0]+n[2]),i=Math.abs(t[0]-r),e=.5*(n[2]-n[0]);if(i>a+e)return!1;const u=.5*(n[1]+n[3]),s=.5*(n[3]-n[1]),o=Math.abs(t[1]-u);if(o>a+s)return!1;if(i<e||o<s)return!0;const m=i-e,c=o-s;return m*m+c*c<=a*a}function b(n,t,a){const r=n[0],i=n[1],e=n[2],u=n[3],{x:s,y:o}=t,{x:m,y:c}=a,f=(n,t)=>(c-o)*n+(s-m)*t+(m*o-s*c)<0,h=f(r,u),x=f(e,u),M=f(e,i),l=f(r,i);return!(h===x&&x===M&&M===l&&l===h||s<r&&m<r||s>e&&m>e||o>u&&c>u||o<i&&c<i)}function j(n,t){return w(n,t.x,t.y)}function w(n,t,a){return t>=n[0]&&a>=n[1]&&t<=n[2]&&a<=n[3]}function F(n,t,a,r){return t>=n[0]-r&&a>=n[1]-r&&t<=n[2]+r&&a<=n[3]+r}function k(n,t,a){return t[0]>=n[0]-a&&t[1]>=n[1]-a&&t[0]<=n[2]+a&&t[1]<=n[3]+a}function q(n,t){return Math.max(t[0],n[0])<=Math.min(t[2],n[2])&&Math.max(t[1],n[1])<=Math.min(t[3],n[3])}function d(n,t){return t[0]>=n[0]&&t[2]<=n[2]&&t[1]>=n[1]&&t[3]<=n[3]}function v(a,r,i){if(t(r))return e(i,a);const u=r[0],s=r[1],o=r[2],m=r[3];return i[0]=n(a[0],u,o),i[1]=n(a[1],s,m),i[2]=n(a[2],u,o),i[3]=n(a[3],s,m),i}function z(n,t){const a=(n[0]+n[2])/2,r=(n[1]+n[3])/2,i=Math.max(Math.abs(t[0]-a)-x(n)/2,0),e=Math.max(Math.abs(t[1]-r)-M(n)/2,0);return Math.sqrt(i*i+e*e)}function A(n,t,a,r=n){return r[0]=n[0]+t,r[1]=n[1]+a,r[2]=n[2]+t,r[3]=n[3]+a,r}function B(n){return n?e(n,R):r(R)}function C(n){return null!=n&&4===n.length}function E(n){return!(0!==x(n)&&isFinite(n[0])||0!==M(n)&&isFinite(n[1]))}function N(n,t){return C(n)&&C(t)?n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]:n===t}const P=[-1/0,-1/0,1/0,1/0],R=[1/0,1/0,-1/0,-1/0],U=[0,0,0,0];export{g as A,E as B,i as C,R as N,P,U as Z,e as a,j as b,r as c,f as d,B as e,s as f,w as g,d as h,m as i,b as j,p as k,k as l,M as m,c as n,A as o,q as p,u as q,z as r,y as s,o as t,h as u,N as v,x as w,v as x,F as y,l as z};
