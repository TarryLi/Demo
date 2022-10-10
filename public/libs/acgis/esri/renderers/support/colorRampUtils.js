// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../Color","../../core/colorUtils"],function(u,E,v){function D(a,b){if(!a||!b||a.length!==b.length)return!1;for(let g=0;g<a.length;g++)if(a[g]>b[g]+2||a[g]<b[g]-2)return!1;return!0}function F(a,b){if(a){b=b?b:G;var g=null,l;"algorithmic"===a.type?b.some(e=>{if(D(a.fromColor.toRgb(),e.fromColor)&&D(a.toColor.toRgb(),e.toColor))return g=e.id,!0}):"multipart"===a.type&&b.some(e=>{if(a.colorRamps&&e.colorRamps&&a.colorRamps.length===e.colorRamps.length&&(l=a.colorRamps,!e.colorRamps.some((m,
d)=>{if(!D(l[d].fromColor.toRgb(),(new E(m.fromColor)).toRgb())||!D(l[d].toColor.toRgb(),(new E(m.toColor)).toRgb()))return!0}))){if(g)return!0;g=e.id}});return g}}function H(a){return(a=F(a))?I[a]:null}function z(a){a=a||{};const b=a.numColors||256;return{...a,numColors:b,distanceOffset:a.distanceOffset||0,interpolateAlpha:!!a.interpolateAlpha,distanceInterval:a.distanceInterval||1/(b-1),isCustomInterval:null!=a.isCustomInterval?a.isCustomInterval:null!==a.distanceInterval&&a.distanceInterval!==
1/(b-1),weights:a.weights}}function J(a,b){var g,l;let {fromColor:e,toColor:m}=a;3===e.length&&(e=e.concat([255]));3===m.length&&(m=m.concat([255]));var d=a.algorithm||"esriCIELabAlgorithm";const {numColors:w,distanceOffset:A,isCustomInterval:x,interpolateAlpha:q}=z(b);if(1===w&&0===A)return[e];if(2===w&&0===A&&!x)return[e,m];var c={r:e[0],g:e[1],b:e[2]};a={r:m[0],g:m[1],b:m[2]};if("esriCIELabAlgorithm"===d){{d=v.toLAB(c);a=v.toLAB(a);const {numColors:y,distanceOffset:t,distanceInterval:k,isCustomInterval:B}=
z(b);let {l:n,a:p,b:r}=d;d=(a.l-n)*k;c=(a.a-p)*k;b=(a.b-r)*k;var f=[];if(t){var h=t/k;n+=h*d;p+=h*c;r+=h*b}for(h=0;h<y-1;h++)f.push({l:n,a:p,b:r}),n+=d,p+=c,r+=b;f.push(B?{l:n,a:p,b:r}:a);a=f}}else if("esriHSVAlgorithm"===d){{d=v.toHSV(c);a=v.toHSV(a);const {numColors:y,distanceOffset:t,distanceInterval:k,isCustomInterval:B}=z(b);f=0===d.s;h=0===a.s;c=d.h;b=a.h;f&&!h?c=b:h&&!f&&(a={...a,h:c},b=c);f=Math.abs(b-c);180>f?b=(b-c)*k:(f=360-f,b=c>b?f*k:-f*k);f=(a.s-d.s)*k;h=(a.v-d.v)*k;let {s:n,v:p}=d;
d=c;t&&(c=t/k,d=(d+c*b+360)%360,n+=c*f,p+=c*h);c=[];for(var C=0;C<y-1;C++)c.push({h:d,s:n,v:p}),d=(d+b+360)%360,n+=f,p+=h;c.push(B?{h:d,s:n,v:p}:a);a=c}}else{{c=v.toLCH(c);a=v.toLCH(a);const {numColors:y,distanceOffset:t,distanceInterval:k,isCustomInterval:B}=z(b);b=c.h;f=a.h;d=2*Math.PI;b<=f?(h=f-b,b=f-b-d,b=Math.abs(b)<Math.abs(h)?b:h):(h=f+d-b,b=f-b,b=Math.abs(b)<Math.abs(h)?b:h);b*=k;f=(a.l-c.l)*k;h=(a.c-c.c)*k;let {l:n,c:p,h:r}=c;t&&(c=t/k,n+=c*f,p+=c*h,r=(r+c*b+d)%d);c=[];for(C=0;C<y-1;C++)c.push({l:n,
c:p,h:r}),n+=f,p+=h,r=(r+b+d)%d;c.push(B?{l:n,c:p,h:r}:a);a=c}}d=[];c=null!=(g=e[3])?g:255;g=((null!=(l=m[3])?l:255)-c)/(w-1);for(l=0;l<w;l++){const {r:y,g:t,b:k}=v.toRGB(a[l]);d.push([y,t,k,q?Math.round(c+g*l):255])}return d}function N(a,b){const {numColors:g,interpolateAlpha:l}=z(b);b=null==b?void 0:b.weights;({colorRamps:a}=a);if(b){const q=b.reduce((c,f)=>c+f);b=b.map(c=>c/q)}else{b=[];for(var e=0;e<a.length;e++)b[e]=1/a.length}e=[];let m=0,d=0;const w=1/(g-1);let A=!1;for(let q=0;q<a.length;q++){var x=
A?0:m*w-d;let c=q===a.length-1?g-1-m:(b[q]-x)/w;A=Math.ceil(c)===c;c=Math.ceil(c);0!==c&&(x/=b[q],x=J(a[q],{numColors:c,interpolateAlpha:l,distanceOffset:x,distanceInterval:w/b[q]}),m+=x.length,e.push(...x),d+=b[q])}b=[...a[a.length-1].toColor];3===b.length&&b.push(255);e.push(b);return e}function K(a,b=256,g=!1){a="toJSON"in a?a.toJSON():a;b={numColors:b,interpolateAlpha:g};return"multipart"===a.type?N(a,b):J(a,b)}function L(a){if(a){var b=a.toJSON();return{Algorithm:(null==b?void 0:b.Algorithm)||
"esriHSVAlgorithm",type:"AlgorithmicColorRamp",FromColor:M(a.fromColor),ToColor:M(a.toColor)}}}function M(a){a=v.toHSV(a);return{type:"HsvColor",Hue:a.h,Saturation:a.s,Value:a.v,AlphaValue:255}}const G=[{id:"aspect_predefined",type:"multipart",colorRamps:[{fromColor:[190,190,190],toColor:[255,45,8]},{fromColor:[255,45,8],toColor:[255,181,61]},{fromColor:[255,181,61],toColor:[255,254,52]},{fromColor:[255,254,52],toColor:[0,251,50]},{fromColor:[0,251,50],toColor:[255,254,52]},{fromColor:[0,253,255],
toColor:[0,181,255]},{fromColor:[0,181,255],toColor:[26,35,253]},{fromColor:[26,35,253],toColor:[255,57,251]},{fromColor:[255,57,251],toColor:[255,45,8]}]},{id:"blackToWhite_predefined",fromColor:[0,0,0],toColor:[255,255,255]},{id:"blueBright_predefined",fromColor:[204,204,255],toColor:[0,0,224]},{id:"blueLightToDark_predefined",fromColor:[211,229,232],toColor:[46,100,140]},{id:"blueGreenBright_predefined",fromColor:[203,245,234],toColor:[48,207,146]},{id:"blueGreenLightToDark_predefined",fromColor:[216,
242,237],toColor:[21,79,74]},{id:"brownLightToDark_predefined",fromColor:[240,236,170],toColor:[102,72,48]},{id:"brownToBlueGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[156,85,31],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[33,130,145]}]},{id:"brownToBlueGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[110,70,45],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[48,100,102]}]},{id:"coefficientBias_predefined",fromColor:[214,214,
255],toColor:[0,57,148]},{id:"coldToHotDiverging_predefined",type:"multipart",colorRamps:[{fromColor:[69,117,181],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[214,47,39]}]},{id:"conditionNumber_predefined",type:"multipart",colorRamps:[{fromColor:[0,97,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,34,0]}]},{id:"cyanToPurple_predefined",type:"multipart",colorRamps:[{fromColor:[0,245,245],toColor:[0,0,245]},{fromColor:[0,0,245],toColor:[245,0,245]}]},{id:"cyanLightToBlueDark_predefined",
type:"multipart",colorRamps:[{fromColor:[182,237,240],toColor:[31,131,224]},{fromColor:[31,131,224],toColor:[9,9,145]}]},{id:"distance_predefined",fromColor:[255,200,0],toColor:[0,0,255]},{id:"elevation1_predefined",type:"multipart",colorRamps:[{fromColor:[175,240,233],toColor:[255,255,179]},{fromColor:[255,255,179],toColor:[0,128,64]},{fromColor:[0,128,64],toColor:[252,186,3]},{fromColor:[252,186,3],toColor:[128,0,0]},{fromColor:[120,0,0],toColor:[105,48,13]},{fromColor:[105,48,13],toColor:[171,
171,171]},{fromColor:[171,171,171],toColor:[255,252,255]}]},{id:"elevation2_predefined",type:"multipart",colorRamps:[{fromColor:[118,219,211],toColor:[255,255,199]},{fromColor:[255,255,199],toColor:[255,255,128]},{fromColor:[255,255,128],toColor:[217,194,121]},{fromColor:[217,194,121],toColor:[135,96,38]},{fromColor:[135,96,38],toColor:[150,150,181]},{fromColor:[150,150,181],toColor:[181,150,181]},{fromColor:[181,150,181],toColor:[255,252,255]}]},{id:"errors_predefined",fromColor:[255,235,214],toColor:[196,
10,10]},{id:"grayLightToDark_predefined",fromColor:[219,219,219],toColor:[69,69,69]},{id:"greenBright_predefined",fromColor:[204,255,204],toColor:[14,204,14]},{id:"greenLightToDark_predefined",fromColor:[220,245,233],toColor:[34,102,51]},{id:"greenToBlue_predefined",type:"multipart",colorRamps:[{fromColor:[32,204,16],toColor:[0,242,242]},{fromColor:[0,242,242],toColor:[2,33,227]}]},{id:"orangeBright_predefined",fromColor:[255,235,204],toColor:[240,118,5]},{id:"orangeLightToDark_predefined",fromColor:[250,
233,212],toColor:[171,65,36]},{id:"partialSpectrum_predefined",type:"multipart",colorRamps:[{fromColor:[242,241,162],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]},{fromColor:[252,3,69],toColor:[176,7,237]},{fromColor:[176,7,237],toColor:[2,29,173]}]},{id:"partialSpectrum1Diverging_predefined",type:"multipart",colorRamps:[{fromColor:[135,38,38],toColor:[240,149,12]},{fromColor:[240,149,12],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[74,80,181]},{fromColor:[74,80,181],
toColor:[39,32,122]}]},{id:"partialSpectrum2Diverging_predefined",type:"multipart",colorRamps:[{fromColor:[115,77,42],toColor:[201,137,52]},{fromColor:[201,137,52],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[91,63,176]},{fromColor:[91,63,176],toColor:[81,13,97]}]},{id:"pinkToYellowGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[158,30,113],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[99,110,45]}]},{id:"pinkToYellowGreenDivergingDark_predefined",type:"multipart",
colorRamps:[{fromColor:[97,47,73],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[22,59,15]}]},{id:"precipitation_predefined",type:"multipart",colorRamps:[{fromColor:[194,82,60],toColor:[237,161,19]},{fromColor:[237,161,19],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,219,0]},{fromColor:[0,219,0],toColor:[32,153,143]},{fromColor:[32,153,143],toColor:[11,44,122]}]},{id:"prediction_predefined",type:"multipart",colorRamps:[{fromColor:[40,146,199],toColor:[250,250,100]},{fromColor:[250,
250,100],toColor:[232,16,20]}]},{id:"purpleBright_predefined",fromColor:[255,204,255],toColor:[199,0,199]},{id:"purpleToGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[77,32,150],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[20,122,11]}]},{id:"purpleToGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[67,14,89],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[24,79,15]}]},{id:"purpleBlueBright_predefined",fromColor:[223,184,230],toColor:[112,
12,242]},{id:"purpleBlueLightToDark_predefined",fromColor:[229,213,242],toColor:[93,44,112]},{id:"purpleRedBright_predefined",fromColor:[255,204,225],toColor:[199,0,99]},{id:"purpleRedLightToDark_predefined",fromColor:[250,215,246],toColor:[143,17,57]},{id:"redBright_predefined",fromColor:[255,204,204],toColor:[219,0,0]},{id:"redLightToDark_predefined",fromColor:[255,224,224],toColor:[143,10,10]},{id:"redToBlueDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[196,69,57],toColor:[255,
255,191]},{fromColor:[255,255,191],toColor:[48,95,207]}]},{id:"redToBlueDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[107,13,13],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[13,53,97]}]},{id:"redToGreen_predefined",type:"multipart",colorRamps:[{fromColor:[245,0,0],toColor:[245,245,0]},{fromColor:[245,245,0],toColor:[0,245,0]}]},{id:"redToGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[186,20,20],toColor:[255,255,191]},{fromColor:[255,255,
191],toColor:[54,145,33]}]},{id:"redToGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[97,21,13],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[16,69,16]}]},{id:"slope_predefined",type:"multipart",colorRamps:[{fromColor:[56,168,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]}]},{id:"spectrumFullBright_predefined",type:"multipart",colorRamps:[{fromColor:[255,0,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,255,255]},{fromColor:[0,255,255],
toColor:[0,0,255]}]},{id:"spectrumFullDark_predefined",type:"multipart",colorRamps:[{fromColor:[153,0,0],toColor:[153,153,0]},{fromColor:[153,153,0],toColor:[0,153,153]},{fromColor:[0,153,153],toColor:[0,0,153]}]},{id:"spectrumFullLight_predefined",type:"multipart",colorRamps:[{fromColor:[255,153,153],toColor:[255,255,153]},{fromColor:[255,255,153],toColor:[153,255,255]},{fromColor:[153,255,255],toColor:[153,153,255]}]},{id:"surface_predefined",type:"multipart",colorRamps:[{fromColor:[112,153,89],
toColor:[242,238,162]},{fromColor:[242,238,162],toColor:[242,206,133]},{fromColor:[242,206,133],toColor:[194,140,124]},{fromColor:[194,140,124],toColor:[255,242,255]}]},{id:"temperature_predefined",type:"multipart",colorRamps:[{fromColor:[255,252,255],toColor:[255,0,255]},{fromColor:[255,0,255],toColor:[0,0,255]},{fromColor:[0,0,255],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,255,0]},{fromColor:[0,255,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,128,0]},{fromColor:[255,
128,0],toColor:[128,0,0]}]},{id:"whiteToBlack_predefined",fromColor:[255,255,255],toColor:[0,0,0]},{id:"yellowToDarkRed_predefined",type:"multipart",colorRamps:[{fromColor:[255,255,128],toColor:[242,167,46]},{fromColor:[242,167,46],toColor:[107,0,0]}]},{id:"yellowToGreenToDarkBlue_predefined",type:"multipart",colorRamps:[{fromColor:[255,255,128],toColor:[56,224,9]},{fromColor:[56,224,9],toColor:[26,147,171]},{fromColor:[26,147,171],toColor:[12,16,120]}]},{id:"yellowToRed_predefined",fromColor:[245,
245,0],toColor:[255,0,0]},{id:"yellowGreenBright_predefined",fromColor:[236,252,204],toColor:[157,204,16]},{id:"yellowGreenLightToDark_predefined",fromColor:[215,240,175],toColor:[96,107,45]}],I={aspect_predefined:"Aspect",blackToWhite_predefined:"Black to White",blueBright_predefined:"Blue Bright",blueLightToDark_predefined:"Blue Light to Dark",blueGreenBright_predefined:"Blue-Green Bright",blueGreenLightToDark_predefined:"Blue-Green Light to Dark",brownLightToDark_predefined:"Brown Light to Dark",
brownToBlueGreenDivergingBright_predefined:"Brown to Blue Green Diverging, Bright",brownToBlueGreenDivergingDark_predefined:"Brown to Blue Green Diverging, Dark",coefficientBias_predefined:"Coefficient Bias",coldToHotDiverging_predefined:"Cold to Hot Diverging",conditionNumber_predefined:"Condition Number",cyanToPurple_predefined:"Cyan to Purple",cyanLightToBlueDark_predefined:"Cyan-Light to Blue-Dark",distance_predefined:"Distance",elevation1_predefined:"Elevation #1",elevation2_predefined:"Elevation #2",
errors_predefined:"Errors",grayLightToDark_predefined:"Gray Light to Dark",greenBright_predefined:"Green Bright",greenLightToDark_predefined:"Green Light to Dark",greenToBlue_predefined:"Green to Blue",orangeBright_predefined:"Orange Bright",orangeLightToDark_predefined:"Orange Light to Dark",partialSpectrum_predefined:"Partial Spectrum",partialSpectrum1Diverging_predefined:"Partial Spectrum 1 Diverging",partialSpectrum2Diverging_predefined:"Partial Spectrum 2 Diverging",pinkToYellowGreenDivergingBright_predefined:"Pink to YellowGreen Diverging, Bright",
pinkToYellowGreenDivergingDark_predefined:"Pink to YellowGreen Diverging, Dark",precipitation_predefined:"Precipitation",prediction_predefined:"Prediction",purpleBright_predefined:"Purple Bright",purpleToGreenDivergingBright_predefined:"Purple to Green Diverging, Bright",purpleToGreenDivergingDark_predefined:"Purple to Green Diverging, Dark",purpleBlueBright_predefined:"Purple-Blue Bright",purpleBlueLightToDark_predefined:"Purple-Blue Light to Dark",purpleRedBright_predefined:"Purple-Red Bright",
purpleRedLightToDark_predefined:"Purple-Red Light to Dark",redBright_predefined:"Red Bright",redLightToDark_predefined:"Red Light to Dark",redToBlueDivergingBright_predefined:"Red to Blue Diverging, Bright",redToBlueDivergingDark_predefined:"Red to Blue Diverging, Dark",redToGreen_predefined:"Red to Green",redToGreenDivergingBright_predefined:"Red to Green Diverging, Bright",redToGreenDivergingDark_predefined:"Red to Green Diverging, Dark",slope_predefined:"Slope",spectrumFullBright_predefined:"Spectrum-Full Bright",
spectrumFullDark_predefined:"Spectrum-Full Dark",spectrumFullLight_predefined:"Spectrum-Full Light",surface_predefined:"Surface",temperature_predefined:"Temperature",whiteToBlack_predefined:"White to Black",yellowToDarkRed_predefined:"Yellow to Dark Red",yellowToGreenToDarkBlue_predefined:"Yellow to Green to Dark Blue",yellowToRed_predefined:"Yellow to Red",yellowGreenBright_predefined:"Yellow-Green Bright",yellowGreenLightToDark_predefined:"Yellow-Green Light to Dark"};u.PREDEFINED_COLOR_RAMP_NAME_MAP=
I;u.PREDEFINED_JSON_COLOR_RAMPS=G;u.convertColorRampToColormap=function(a,b=256,g=!1){a=K(a,b,g);a.forEach((l,e)=>{l.unshift(e);g||l.pop()});return a};u.convertColorRampToColors=K;u.getColorRampId=F;u.getColorRampName=H;u.getRFxArgColorRampValue=function(a){const b=H(a);if(a){if("algorithmic"===a.type)return{...L(a),Name:b};if(a.colorRamps)return a=a.colorRamps.map(L),{type:"MultiPartColorRamp",NumColorRamps:a.length,ArrayOfColorRamp:a,Name:b}}};u.rgbaConvertTo32Bit=function(a){a=a.reverse().map(b=>
{b=b.toString(16);return 2>b.length?"0"+b:b});return 4294967295&Number.parseInt(a.join(""),16)};Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});