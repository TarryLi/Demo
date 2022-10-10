/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{n as t,u as n,j as s,k as a,h as o,s as r,e as c,o as u,b as i,G as f,d as h}from"./mathUtils.js";function e(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],s=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],a=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,s,a))}function M(t,n){const s=Math.sqrt(n[0]*n[0]+n[4]*n[4]+n[8]*n[8]),a=Math.sqrt(n[1]*n[1]+n[5]*n[5]+n[9]*n[9]),o=Math.sqrt(n[2]*n[2]+n[6]*n[6]+n[10]*n[10]);return r(t,s,a,o),t}function m(n,a,o){o=o||n;const c=s(n,a);r(o,n[0]-c*a[0],n[1]-c*a[1],n[2]-c*a[2]),t(o,o)}function b(n,s,o){Math.abs(n[0])>Math.abs(n[1])?r(s,0,1,0):r(s,1,0,0),a(o,n,s),t(s,s),a(s,o,n),t(o,o)}function q(t,n){return(t%n+n)%n}function l(t,n,s,a,o,r){const c=t+(n-t)*o;return c+(s+(a-s)*o-c)*r}function p(t,n,a,r=o()){const h=c(t),e=c(n),M=s(t,n)/(h*e);if(M<.9999999999999999){const s=Math.acos(M),o=((1-a)*h+a*e)/Math.sin(s),c=o/h*Math.sin((1-a)*s),f=o/e*Math.sin(a*s);return u(v,t,c),u(w,n,f),i(r,v,w)}return f(r,t,n,a)}function d(n,a,r,e=o(),M=o()){const m=c(n),b=c(a),q=s(n,a)/(m*b);if(q<.9999999999999999){const t=Math.acos(q),s=Math.sin(t),o=Math.sin(r*t),c=Math.sin((1-r)*t),f=(1-r)*m+r*b;{const t=f/s,r=t/b*o;u(v,n,t/m*c),u(w,a,r),i(e,v,w)}{const h=1/m*(-Math.cos((1-r)*t)*t*f+c*(-m+b));u(v,n,h);const e=1/b*(Math.cos(r*t)*t*f+o*(-m+b));u(w,a,e),i(M,v,w),u(M,M,1/s)}return M}return f(e,n,a,r),h(M,a,n),t(M,M),M}function g(o,r,c){o=t(v,o),r=t(w,r);const u=n(s(o,r));if(c){const t=a(U,o,r);if(s(t,c)<0)return-u}return u}function j(t){const n=t.length;return s=>{if(s<=t[0][0])return t[0][1];if(s>=t[n-1][0])return t[n-1][1];let a=1;for(;s>t[a][0];)a++;const o=t[a-1][0],r=t[a][0],c=(r-s)/(r-o);return c*t[a-1][1]+(1-c)*t[a][1]}}function x(n,o,r,c){h(k,o,n),h(G,r,n),a(c,k,G),t(c,c),c[3]=-s(n,c)}const k=o(),G=o(),U=o(),v=o(),w=o();export{m as a,p as b,j as c,g as d,l as e,M as f,q as g,e as m,x as p,d as s,b as t};
