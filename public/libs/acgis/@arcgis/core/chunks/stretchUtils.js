/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as t,i as n,u as e}from"./maybe.js";const s={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767],u32:[0,4294967295],s32:[-2147483648,2147483647],f32:[-34e38,34e38],f64:[-Number.MAX_VALUE,Number.MAX_VALUE]},a=[.299,.587,.114];function i(t,n=256){n=Math.min(n,256);const{size:e,counts:s}=t,a=new Uint8Array(e),i=s.reduce(((t,e)=>t+e/n),0);let o=0,r=0,f=0,l=i;for(let t=0;t<e;t++)if(f+=s[t],!(t<e-1&&f+s[t+1]<l)){for(;o<n-1&&l<f;)o++,l+=i;for(let n=r;n<=t;n++)a[n]=o;r=t+1}for(let t=r;t<e;t++)a[t]=n-1;return a}function o(t){const{minCutOff:n,maxCutOff:e,gamma:s,pixelType:a}=t,i=t.outMin||0,o=t.outMax||255;if(!["u8","u16","s8","s16"].includes(a))return null;const r=n.length;let f,l,u=0;"s8"===a?u=-127:"s16"===a&&(u=-32767);let m=256;["u16","s16"].includes(a)&&(m=65536);const c=[],h=o-i;for(f=0;f<r;f++)c[f]=e[f]-n[f],e[f],n[f];const g=s&&s.length>=r,x=[];if(g)for(f=0;f<r;f++)s[f]>1?s[f]>2?x[f]=6.5+(s[f]-2)**2.5:x[f]=6.5+100*(2-s[f])**4:x[f]=1;let M;const p=[];let d,b,O;if(g)for(f=0;f<r;f++){for(O=[],l=0;l<m;l++)d=l+u,M=(d-n[f])/c[f],b=1,s[f]>1&&(b-=(1/h)**(M*x[f])),d<e[f]&&d>n[f]?O[l]=Math.floor(b*h*M**(1/s[f]))+i:d>=e[f]?O[l]=o:O[l]=i;p[f]=O}else for(f=0;f<r;f++){for(O=[],l=0;l<m;l++)d=l+u,d<=n[f]?O[l]=i:d>=e[f]?O[l]=o:O[l]=Math.floor((d-n[f])/c[f]*h)+i;p[f]=O}if(null!=t.contrastOffset){const n=function(t,n){const e=Math.min(Math.max(t,-100),100),s=Math.min(Math.max(n,-100),100);let a,i;const o=new Uint8Array(256);for(a=0;a<256;a++)e>0&&e<100?i=(200*a-25500+510*s)/(2*(100-e))+128:e<=0&&e>-100?i=(200*a-25500+510*s)*(100+e)/2e4+128:100===e?(i=200*a-25500+256*(100-e)+510*s,i=i>0?255:0):-100===e&&(i=128),o[a]=i>255?255:i<0?0:i;return o}(t.contrastOffset,t.brightnessOffset);for(f=0;f<r;f++)for(O=p[f],l=0;l<m;l++)O[l]=n[O[l]]}return{lut:p,offset:u}}function r(t,n,e){const s=[];for(let i=0;i<n.length;i++){let o=0,r=0,l=0;"min"in n[i]?({min:o,max:r,avg:l}=n[i]):[o,r,l]=n[i];let u=l;"u8"!==t&&(u=255*(u-o)/(r-o)),e&&(u*=a[i]),s.push(f(u))}return s}function f(t){if(t<=0||t>=255)return 1;let n=0;150!==t&&(n=t<=150?45*Math.cos(.01047*t):17*Math.sin(.021*t));const e=t+n,s=Math.log(t/255),a=Math.log(e/255);if(0===a)return 1;const i=s/a;return isNaN(i)?1:Math.min(9.9,Math.max(.01,i))}function l(n){if(t(n)||!n.pixels?.length)return null;n.statistics||n.updateStatistics();const{pixels:e,mask:s,pixelType:a,statistics:i}=n,o=n.width*n.height,r=e.length;let f,l,u,m,c;const h=[],g=[];let x,M,p,d,b,O,y,C,z,A;const k=256;for(m=0;m<r;m++){if(x=new Uint32Array(k),p=e[m],"u8"===a)if(f=-.5,l=255.5,s)for(c=0;c<o;c++)s[c]&&x[p[c]]++;else for(c=0;c<o;c++)x[p[c]]++;else{if(f=i[m].minValue,l=i[m].maxValue,u=(l-f)/k,M=new Uint32Array(257),s)for(c=0;c<o;c++)s[c]&&M[Math.floor((p[c]-f)/u)]++;else for(c=0;c<o;c++)M[Math.floor((p[c]-f)/u)]++;for(c=0;c<255;c++)x[c]=M[c];x[255]=M[255]+M[256]}for(h.push({min:f,max:l,size:k,counts:x}),d=0,b=0,C=0,c=0;c<k;c++)d+=x[c],b+=c*x[c];for(z=b/d,c=0;c<k;c++)C+=x[c]*(c-z)**2;A=Math.sqrt(C/(d-1)),u=(l-f)/k,O=(z+.5)*u+f,y=A*u,g.push({min:f,max:l,avg:O,stddev:y})}return{statistics:g,histograms:h}}function u(t){const n=[];for(let e=0;e<t.length;e++){const{min:s,max:a,size:i,counts:o}=t[e];let r=0,f=0;for(let t=0;t<i;t++)r+=o[t],f+=t*o[t];const l=f/r;let u=0;for(let t=0;t<i;t++)u+=o[t]*(t-l)**2;const m=(a-s)/i,c=(l+.5)*m+s,h=Math.sqrt(u/(r-1))*m;n.push({min:s,max:a,avg:c,stddev:h})}return n}function m(t,a){const{pixelBlock:o,bandIds:r,returnHistogramLut:f,rasterInfo:u}=a;let m,c,h=t.stretchType;if(t.dra)if("minMax"===h&&n(o)&&o.statistics)m=o.statistics.map((t=>[t.minValue,t.maxValue,0,0]));else{const t=l(o);m=n(t)?t.statistics:null,c=n(t)?t.histograms:null}else m=t.statistics?.length>0?t.statistics:e(u.statistics),c=t.histograms||e(u.histograms);"percentClip"!==h&&"histogramEqualization"!==h||c?.length||(h="minMax");const g=m?.length||c?.length||u.bandCount,x=[],M=[];let p,d,b,O,y,C,z,A,k,v,w,U;switch(m&&!Array.isArray(m[0])&&(m=m.map((t=>[t.min,t.max,t.avg,t.stddev]))),h){case"none":{const t=s[u.pixelType]||s.f32;for(A=0;A<g;A++)x[A]=t[0],M[A]=t[1]}break;case"minMax":for(A=0;A<g;A++)x[A]=m[A][0],M[A]=m[A][1];break;case"standardDeviation":for(A=0;A<g;A++)x[A]=m[A][2]-t.numberOfStandardDeviations*m[A][3],M[A]=m[A][2]+t.numberOfStandardDeviations*m[A][3],x[A]<m[A][0]&&(x[A]=m[A][0]),M[A]>m[A][1]&&(M[A]=m[A][1]);break;case"histogramEqualization":for(A=0;A<g;A++)x[A]=c[A].min,M[A]=c[A].max;break;case"percentClip":for(A=0;A<c.length;A++){for(p=c[A],y=new Uint32Array(p.size),O=[...p.counts],O.length>=20&&(O[0]=O[1]=O[2]=O[O.length-1]=O[O.length-2]=0),b=0,d=(p.max-p.min)/p.size,z=-.5===p.min&&1===d?.5:0,k=0;k<p.size;k++)b+=O[k],y[k]=b;for(C=(t.minPercent||0)*b/100,k=0;k<p.size;k++)if(y[k]>C){x[A]=p.min+d*(k+z);break}for(C=(1-(t.maxPercent||0)/100)*b,k=p.size-2;k>=0;k--)if(y[k]<C){M[A]=p.min+d*(k+2-z);break}}break;default:for(A=0;A<g;A++)x[A]=m[A][0],M[A]=m[A][1]}return"histogramEqualization"===h?(w=c[0].size||256,v=0,f&&(U=c.map((t=>i(t))))):(w=t.max||255,v=t.min||0),function(t,n){if(null==n||0===n.length)return t;const e=Math.max.apply(null,n),{minCutOff:s,maxCutOff:a,outMin:i,outMax:o,histogramLut:r}=t;return s.length===n.length||s.length<=e?t:{minCutOff:n.map((t=>s[t])),maxCutOff:n.map((t=>a[t])),histogramLut:r?n.map((t=>r[t])):null,outMin:i,outMax:o}}({minCutOff:x,maxCutOff:M,outMax:w,outMin:v,histogramLut:U},r)}function c(n,e){if(t(n)||!n.pixels?.length)return n;const s=n.clone(),{pixels:a,mask:i}=s,{minCutOff:o,maxCutOff:r,gamma:f}=e,l=e.outMin||0,u=e.outMax||255,m=s.width*s.height,c=a.length;let h,g,x,M,p;const d=u-l,b=[];for(h=0;h<c;h++)b[h]=r[h]-o[h],r[h],o[h];const O=f&&f.length>=c,y=[];if(O)for(h=0;h<c;h++)f[h]>1?f[h]>2?y[h]=6.5+(f[h]-2)**2.5:y[h]=6.5+100*(2-f[h])**4:y[h]=1;if(O)if(null!=i){for(g=0;g<m;g++)if(i[g])for(h=0;h<c;h++)x=a[h][g],p=(x-o[h])/b[h],M=1,f[h]>1&&(M-=(1/d)**(p*y[h])),x<r[h]&&x>o[h]?a[h][g]=Math.floor(M*d*p**(1/f[h]))+l:x>=r[h]?a[h][g]=u:a[h][g]=l}else for(g=0;g<m;g++)for(h=0;h<c;h++)x=a[h][g],p=(x-o[h])/b[h],M=1,f[h]>1&&(M-=(1/d)**(p*y[h])),x<r[h]&&x>o[h]?a[h][g]=Math.floor(M*d*p**(1/f[h]))+l:x>=r[h]?a[h][g]=u:a[h][g]=l;else if(null!=i){for(g=0;g<m;g++)if(i[g])for(h=0;h<c;h++)x=a[h][g],x<r[h]&&x>o[h]?a[h][g]=Math.floor((x-o[h])/b[h]*d)+l:x>=r[h]?a[h][g]=u:a[h][g]=l}else for(g=0;g<m;g++)for(h=0;h<c;h++)x=a[h][g],x<r[h]&&x>o[h]?a[h][g]=Math.floor((x-o[h])/b[h]*d)+l:x>=r[h]?a[h][g]=u:a[h][g]=l;return s.pixelType="u8",s.updateStatistics(),s}export{r as a,i as b,o as c,u as d,l as e,m as g,c as s};