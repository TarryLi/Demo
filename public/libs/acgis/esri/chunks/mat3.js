// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./common"],function(n,w){function H(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[4];a[4]=b[5];a[5]=b[6];a[6]=b[8];a[7]=b[9];a[8]=b[10];return a}function I(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];return a}function J(a,b,c,d,e,f,h,k,l,m){a[0]=b;a[1]=c;a[2]=d;a[3]=e;a[4]=f;a[5]=h;a[6]=k;a[7]=l;a[8]=m;return a}function K(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a}function L(a,b){if(a===b){const c=b[1],
d=b[2],e=b[5];a[1]=b[3];a[2]=b[6];a[3]=c;a[5]=b[7];a[6]=d;a[7]=e}else a[0]=b[0],a[1]=b[3],a[2]=b[6],a[3]=b[1],a[4]=b[4],a[5]=b[7],a[6]=b[2],a[7]=b[5],a[8]=b[8];return a}function M(a,b){const c=b[0],d=b[1],e=b[2],f=b[3],h=b[4],k=b[5],l=b[6],m=b[7];b=b[8];const q=b*h-k*m,p=-b*f+k*l,r=m*f-h*l;let g=c*q+d*p+e*r;if(!g)return null;g=1/g;a[0]=q*g;a[1]=(-b*d+e*m)*g;a[2]=(k*d-e*h)*g;a[3]=p*g;a[4]=(b*c-e*l)*g;a[5]=(-k*c+e*f)*g;a[6]=r*g;a[7]=(-m*c+d*l)*g;a[8]=(h*c-d*f)*g;return a}function N(a,b){const c=b[0],
d=b[1],e=b[2],f=b[3],h=b[4],k=b[5],l=b[6],m=b[7];b=b[8];a[0]=h*b-k*m;a[1]=e*m-d*b;a[2]=d*k-e*h;a[3]=k*l-f*b;a[4]=c*b-e*l;a[5]=e*f-c*k;a[6]=f*m-h*l;a[7]=d*l-c*m;a[8]=c*h-d*f;return a}function O(a){const b=a[3],c=a[4],d=a[5],e=a[6],f=a[7],h=a[8];return a[0]*(h*c-d*f)+a[1]*(-h*b+d*e)+a[2]*(f*b-c*e)}function z(a,b,c){const d=b[0],e=b[1],f=b[2],h=b[3],k=b[4],l=b[5],m=b[6],q=b[7];b=b[8];const p=c[0],r=c[1],g=c[2],t=c[3],u=c[4],v=c[5],x=c[6],y=c[7];c=c[8];a[0]=p*d+r*h+g*m;a[1]=p*e+r*k+g*q;a[2]=p*f+r*l+g*
b;a[3]=t*d+u*h+v*m;a[4]=t*e+u*k+v*q;a[5]=t*f+u*l+v*b;a[6]=x*d+y*h+c*m;a[7]=x*e+y*k+c*q;a[8]=x*f+y*l+c*b;return a}function P(a,b,c){const d=b[0],e=b[1],f=b[2],h=b[3],k=b[4],l=b[5],m=b[6],q=b[7];b=b[8];const p=c[0];c=c[1];a[0]=d;a[1]=e;a[2]=f;a[3]=h;a[4]=k;a[5]=l;a[6]=p*d+c*h+m;a[7]=p*e+c*k+q;a[8]=p*f+c*l+b;return a}function Q(a,b,c){const d=b[0],e=b[1],f=b[2],h=b[3],k=b[4],l=b[5],m=b[6],q=b[7];b=b[8];const p=Math.sin(c);c=Math.cos(c);a[0]=c*d+p*h;a[1]=c*e+p*k;a[2]=c*f+p*l;a[3]=c*h-p*d;a[4]=c*k-p*e;
a[5]=c*l-p*f;a[6]=m;a[7]=q;a[8]=b;return a}function R(a,b,c){const d=c[0],e=c[1];c=c[2];a[0]=d*b[0];a[1]=d*b[1];a[2]=d*b[2];a[3]=e*b[3];a[4]=e*b[4];a[5]=e*b[5];a[6]=c*b[6];a[7]=c*b[7];a[8]=c*b[8];return a}function S(a,b,c){const d=c[0];c=c[1];a[0]=d*b[0];a[1]=d*b[1];a[2]=d*b[2];a[3]=c*b[3];a[4]=c*b[4];a[5]=c*b[5];return a}function T(a,b){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=b[0];a[7]=b[1];a[8]=1;return a}function U(a,b){const c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=c;a[2]=0;a[3]=-c;a[4]=
b;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a}function V(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=0;a[4]=b[1];a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a}function W(a,b){a[0]=b[0];a[1]=b[1];a[2]=0;a[3]=b[2];a[4]=b[3];a[5]=0;a[6]=b[4];a[7]=b[5];a[8]=1;return a}function X(a,b){var c=b[0],d=b[1],e=b[2];b=b[3];var f=c+c,h=d+d;const k=e+e;c*=f;const l=d*f;d*=h;const m=e*f,q=e*h;e*=k;f*=b;h*=b;b*=k;a[0]=1-d-e;a[3]=l-b;a[6]=m+h;a[1]=l+b;a[4]=1-c-e;a[7]=q-f;a[2]=m-h;a[5]=q+f;a[8]=1-c-d;return a}function Y(a,b){const c=b[0],d=
b[1],e=b[2],f=b[4],h=b[5],k=b[6],l=b[8],m=b[9];b=b[10];const q=b*h-k*m,p=-b*f+k*l,r=m*f-h*l;var g=c*q+d*p+e*r;if(!g)return null;g=1/g;a[0]=q*g;a[1]=(-b*d+e*m)*g;a[2]=(k*d-e*h)*g;a[3]=p*g;a[4]=(b*c-e*l)*g;a[5]=(-k*c+e*f)*g;a[6]=r*g;a[7]=(-m*c+d*l)*g;a[8]=(h*c-d*f)*g;return a}function Z(a,b){const c=b[0],d=b[1],e=b[2],f=b[3],h=b[4],k=b[5],l=b[6],m=b[7];var q=b[8],p=b[9],r=b[10],g=b[11];const t=b[12],u=b[13],v=b[14];b=b[15];const x=c*k-d*h,y=c*l-e*h,B=c*m-f*h,aa=d*l-e*k,C=d*m-f*k,D=e*m-f*l,E=q*u-p*t,
F=q*v-r*t;q=q*b-g*t;const G=p*v-r*u;p=p*b-g*u;r=r*b-g*v;g=x*r-y*p+B*G+aa*q-C*F+D*E;if(!g)return null;g=1/g;a[0]=(k*r-l*p+m*G)*g;a[1]=(l*q-h*r-m*F)*g;a[2]=(h*p-k*q+m*E)*g;a[3]=(e*p-d*r-f*G)*g;a[4]=(c*r-e*q+f*F)*g;a[5]=(d*q-c*p-f*E)*g;a[6]=(u*D-v*C+b*aa)*g;a[7]=(v*B-t*D-b*y)*g;a[8]=(t*C-u*B+b*x)*g;return a}function ba(a,b,c){a[0]=2/b;a[1]=0;a[2]=0;a[3]=0;a[4]=-2/c;a[5]=0;a[6]=-1;a[7]=1;a[8]=1;return a}function ca(a){return"mat3("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+
a[7]+", "+a[8]+")"}function da(a){return Math.sqrt(a[0]**2+a[1]**2+a[2]**2+a[3]**2+a[4]**2+a[5]**2+a[6]**2+a[7]**2+a[8]**2)}function ea(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];a[4]=b[4]+c[4];a[5]=b[5]+c[5];a[6]=b[6]+c[6];a[7]=b[7]+c[7];a[8]=b[8]+c[8];return a}function A(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];a[4]=b[4]-c[4];a[5]=b[5]-c[5];a[6]=b[6]-c[6];a[7]=b[7]-c[7];a[8]=b[8]-c[8];return a}function fa(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*
c;a[3]=b[3]*c;a[4]=b[4]*c;a[5]=b[5]*c;a[6]=b[6]*c;a[7]=b[7]*c;a[8]=b[8]*c;return a}function ha(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;a[4]=b[4]+c[4]*d;a[5]=b[5]+c[5]*d;a[6]=b[6]+c[6]*d;a[7]=b[7]+c[7]*d;a[8]=b[8]+c[8]*d;return a}function ia(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]}function ja(a,b){const c=a[0],d=a[1],e=a[2],f=a[3],h=a[4],k=a[5],l=a[6],m=a[7];a=a[8];const q=b[0],
p=b[1],r=b[2],g=b[3],t=b[4],u=b[5],v=b[6],x=b[7];b=b[8];return Math.abs(c-q)<=w.EPSILON*Math.max(1,Math.abs(c),Math.abs(q))&&Math.abs(d-p)<=w.EPSILON*Math.max(1,Math.abs(d),Math.abs(p))&&Math.abs(e-r)<=w.EPSILON*Math.max(1,Math.abs(e),Math.abs(r))&&Math.abs(f-g)<=w.EPSILON*Math.max(1,Math.abs(f),Math.abs(g))&&Math.abs(h-t)<=w.EPSILON*Math.max(1,Math.abs(h),Math.abs(t))&&Math.abs(k-u)<=w.EPSILON*Math.max(1,Math.abs(k),Math.abs(u))&&Math.abs(l-v)<=w.EPSILON*Math.max(1,Math.abs(l),Math.abs(v))&&Math.abs(m-
x)<=w.EPSILON*Math.max(1,Math.abs(m),Math.abs(x))&&Math.abs(a-b)<=w.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))}function ka(a){const b=w.EPSILON,c=a[0],d=a[1],e=a[2],f=a[3],h=a[4],k=a[5],l=a[6],m=a[7];a=a[8];return Math.abs(1-(c*c+f*f+l*l))<=b&&Math.abs(1-(d*d+h*h+m*m))<=b&&Math.abs(1-(e*e+k*k+a*a))<=b}const la=Object.freeze(Object.defineProperty({__proto__:null,fromMat4:H,copy:I,set:J,identity:K,transpose:L,invert:M,adjoint:N,determinant:O,multiply:z,translate:P,rotate:Q,scale:R,scaleByVec2:S,fromTranslation:T,
fromRotation:U,fromScaling:V,fromMat2d:W,fromQuat:X,normalFromMat4Legacy:Y,normalFromMat4:Z,projection:ba,str:ca,frob:da,add:ea,subtract:A,multiplyScalar:fa,multiplyScalarAndAdd:ha,exactEquals:ia,equals:ja,isOrthoNormal:ka,mul:z,sub:A},Symbol.toStringTag,{value:"Module"}));n.add=ea;n.adjoint=N;n.copy=I;n.determinant=O;n.equals=ja;n.exactEquals=ia;n.frob=da;n.fromMat2d=W;n.fromMat4=H;n.fromQuat=X;n.fromRotation=U;n.fromScaling=V;n.fromTranslation=T;n.identity=K;n.invert=M;n.isOrthoNormal=ka;n.mat3=
la;n.mul=z;n.multiply=z;n.multiplyScalar=fa;n.multiplyScalarAndAdd=ha;n.normalFromMat4=Z;n.normalFromMat4Legacy=Y;n.projection=ba;n.rotate=Q;n.scale=R;n.scaleByVec2=S;n.set=J;n.str=ca;n.sub=A;n.subtract=A;n.translate=P;n.transpose=L});