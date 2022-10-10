// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Color ../geometry ../Graphic ../symbols ../core/jsonMap ../core/JSONSupport ../core/lang ../core/maybe ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../geometry/support/normalizeUtils ../layers/support/rasterFunctions/vectorFieldUtils ./ClassBreaksRenderer ./mixins/VisualVariablesMixin ./support/ClassBreakInfo ./visualVariables/RotationVariable ./visualVariables/SizeVariable ./visualVariables/support/visualVariableUtils ../symbols/SimpleLineSymbol ../symbols/SimpleMarkerSymbol ../symbols/support/utils ../symbols/PictureMarkerSymbol ../geometry/Point".split(" "),
function(v,g,n,r,M,X,q,e,N,O,p,Y,P,C,Q,R,k,D,S,E,F,G,H,T,U,I,y,V){var z;const J=new Set(["esriMetersPerSecond","esriKilometersPerHour","esriKnots","esriFeetPerSecond","esriMilesPerHour"]);r=new q.JSONMap({beaufort_ft:"beaufort-ft",beaufort_km:"beaufort-km",beaufort_kn:"beaufort-kn",beaufort_m:"beaufort-m",beaufort_mi:"beaufort-mi",classified_arrow:"classified-arrow",ocean_current_kn:"ocean-current-kn",ocean_current_m:"ocean-current-m",simple_scalar:"simple-scalar",single_arrow:"single-arrow",wind_speed:"wind-barb"});
q=new q.JSONMap({flow_from:"flow-from",flow_to:"flow-to"});e=z=function(K){function w(b){b=K.call(this,b)||this;b.attributeField="Magnitude";b.flowRepresentation="flow-from";b.rotationType="arithmetic";b.style="single-arrow";b.symbolTileSize=50;b.type="vector-field";return b}v._inheritsLoose(w,K);var d=w.prototype;d.readInputUnit=function(b,a){return J.has(b)?k.unitKebabDict.fromJSON(b):null};d.readOutputUnit=function(b,a){return J.has(b)?k.unitKebabDict.fromJSON(b):null};d.clone=function(){return new z({attributeField:this.attributeField,
flowRepresentation:this.flowRepresentation,rotationType:this.rotationType,symbolTileSize:this.symbolTileSize,style:this.style,visualVariables:N.clone(this.visualVariables),inputUnit:this.inputUnit,outputUnit:this.outputUnit})};d.getGraphicsFromPixelData=function(){var b=v._asyncToGenerator(function*(a,c=!1,h=[]){var f;const m=[];var l=k.getUnitConversionFactor(this.inputUnit,this.outputUnit),x=(null==(f=this.rotationVariables[0])?void 0:f.rotationType)||this.rotationType;c=c?k.convertVectorFieldData(a.pixelBlock,
"vector-uv",x,l):k.convertVectorFieldUnit(a.pixelBlock,"vector-magdir",l);if(O.isNone(c))return m;a=a.extent;f=c.mask&&0<c.mask.length;l=0;x=(a.xmax-a.xmin)/c.width;const L=(a.ymax-a.ymin)/c.height;for(let A=0;A<c.height;A++)for(let B=0;B<c.width;B++,l++){let t=new V({x:a.xmin+B*x+x/2,y:a.ymax-A*L-L/2,spatialReference:a.spatialReference});t=(yield R.normalizeCentralMeridian(t))[0];var u=h.some(W=>W.intersects(t));f&&!c.mask[l]||u||(u=new M({geometry:{type:"point",x:t.x,y:t.y,spatialReference:a.spatialReference},
attributes:{Magnitude:c.pixels[0][l],Direction:c.pixels[1][l]}}),u.symbol=this._getVisualVariablesAppliedSymbol(u),m.push(u))}return m});return function(a){return b.apply(this,arguments)}}();d.getSymbol=function(b,a){};d.getSymbolAsync=function(){var b=v._asyncToGenerator(function*(a,c){});return function(a,c){return b.apply(this,arguments)}}();d.getSymbols=function(){return[]};d.getClassBreakInfos=function(){var b;return null==(b=this.styleRenderer)?void 0:b.classBreakInfos};d.getDefaultSymbol=function(){var b;
return null==(b=this.styleRenderer)?void 0:b.defaultSymbol};d._getDefaultSymbol=function(b){return new U({path:"M14,32 14,18 9,23 16,3 22,23 17,18 17,32 z",outline:new T({width:0}),size:20,color:b||new n([0,92,230])})};d._getVisualVariablesAppliedSymbol=function(b){if(b){var a=this.styleRenderer&&this.styleRenderer.getSymbol(b);a=a.clone();var c=this.sizeVariables,h=this.rotationVariables;c&&c.length&&this.sizeVariables.forEach(f=>I.applySizesToSymbol(a,H.getAllSizes([f],b)));h&&h.length&&(b.attributes.Direction+=
"flow-to"===this.flowRepresentation===("ocean-current-kn"===this.style||"ocean-current-m"===this.style)?0:180,this.rotationVariables.forEach(f=>I.applyRotationToSymbol(a,H.getRotationAngle(f,b),f.axis)));return a}};d._createStyleRenderer=function(b){let a={defaultSymbol:this._getDefaultSymbol(),classBreakInfos:[]};switch(b){case "single-arrow":a=this._createSingleArrowRenderer();break;case "beaufort-kn":a=this._createBeaufortKnotsRenderer();break;case "beaufort-m":a=this._createBeaufortMeterRenderer();
break;case "beaufort-ft":a=this._createBeaufortFeetRenderer();break;case "beaufort-mi":a=this._createBeaufortMilesRenderer();break;case "beaufort-km":a=this._createBeaufortKilometersRenderer();break;case "ocean-current-m":a=this._createCurrentMeterRenderer();break;case "ocean-current-kn":a=this._createCurrentKnotsRenderer();break;case "simple-scalar":a=this._createSimpleScalarRenderer();break;case "wind-barb":a=this._createWindBarbsRenderer();break;case "classified-arrow":a=this._createClassifiedArrowRenderer()}return new D(a)};
d._createSingleArrowRenderer=function(){return{defaultSymbol:this._getDefaultSymbol()}};d._createBeaufortKnotsRenderer=function(){const b=this._getDefaultSymbol(new n([214,47,39])),a=this._getClassBreaks([0,1,3,6,10,16,21,27,33,40,47,55,63],[[40,146,199],[89,162,186],[129,179,171],[160,194,155],[191,212,138],[218,230,119],[250,250,100],[252,213,83],[252,179,102],[250,141,52],[247,110,42],[240,71,29]]);return{defaultSymbol:b,classBreakInfos:a}};d._createBeaufortMeterRenderer=function(){const b=this._getDefaultSymbol(new n([214,
47,39])),a=this._getClassBreaks([0,.2,1.8,3.3,5.4,8.5,11,14.1,17.2,20.8,24.4,28.6,32.7],[[69,117,181],[101,137,184],[132,158,186],[162,180,189],[192,204,190],[222,227,191],[255,255,191],[255,220,161],[250,185,132],[245,152,105],[237,117,81],[232,21,21]]);return{defaultSymbol:b,classBreakInfos:a}};d._createBeaufortFeetRenderer=function(){const b=this._getDefaultSymbol(new n([214,47,39]));var a=[0,.2,1.8,3.3,5.4,8.5,11,14.1,17.2,20.8,24.4,28.6,32.7];a=a.map(c=>3.28084*c);a=this._getClassBreaks(a,[[69,
117,181],[101,137,184],[132,158,186],[162,180,189],[192,204,190],[222,227,191],[255,255,191],[255,220,161],[250,185,132],[245,152,105],[237,117,81],[232,21,21]]);return{defaultSymbol:b,classBreakInfos:a}};d._createBeaufortMilesRenderer=function(){const b=this._getDefaultSymbol(new n([214,47,39]));var a=[0,.2,1.8,3.3,5.4,8.5,11,14.1,17.2,20.8,24.4,28.6,32.7];a=a.map(c=>2.23694*c);a=this._getClassBreaks(a,[[69,117,181],[101,137,184],[132,158,186],[162,180,189],[192,204,190],[222,227,191],[255,255,191],
[255,220,161],[250,185,132],[245,152,105],[237,117,81],[232,21,21]]);return{defaultSymbol:b,classBreakInfos:a}};d._createBeaufortKilometersRenderer=function(){const b=this._getDefaultSymbol(new n([214,47,39]));var a=[0,.2,1.8,3.3,5.4,8.5,11,14.1,17.2,20.8,24.4,28.6,32.7];a=a.map(c=>3.6*c);a=this._getClassBreaks(a,[[69,117,181],[101,137,184],[132,158,186],[162,180,189],[192,204,190],[222,227,191],[255,255,191],[255,220,161],[250,185,132],[245,152,105],[237,117,81],[232,21,21]]);return{defaultSymbol:b,
classBreakInfos:a}};d._createCurrentMeterRenderer=function(){const b=this._getDefaultSymbol(new n([177,177,177])),a=this._getClassBreaks([0,.5,1,1.5,2],[[78,26,153],[179,27,26],[202,128,26],[177,177,177]]);return{defaultSymbol:b,classBreakInfos:a}};d._createCurrentKnotsRenderer=function(){const b=this._getDefaultSymbol(new n([177,177,177])),a=this._getClassBreaks([0,.25,.5,1,1.5,2,2.5,3,3.5,4],[[0,0,0],[0,37,100],[78,26,153],[151,0,100],[179,27,26],[177,78,26],[202,128,26],[177,179,52],[177,177,177]]);
return{defaultSymbol:b,classBreakInfos:a}};d._createClassifiedArrowRenderer=function(){var b;const a=this._getDefaultSymbol(new n([56,168,0]));var c=[0,1E-6,3.5,7,10.5,14];if(null!=(b=this.sizeVariables)&&b.length){const h=this.sizeVariables[0].minDataValue;b=this.sizeVariables[0].maxDataValue;if(h&&b){const f=(b-h)/5;c=Array.from(Array(6).keys()).map(m=>h+f*m)}}c=this._getClassBreaks(c,[[56,168,0],[139,309,0],[255,255,0],[255,128,0],[255,0,0]]);return{defaultSymbol:a,classBreakInfos:c}};d._createSimpleScalarRenderer=
function(){return{defaultSymbol:y.fromJSON({imageData:"iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAQAAABLVLlLAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAC3ElEQVRIx9XXvW4cVRQH8N982btpsIREJECyiCXsxX4DKh6AliqGKCBBE2SlwlHgAbBD/AKmyEYUeQ1KahPZSZQvBCkQLTHZ7KGY8Xodz4w3a1NwbzVzz/znfJ//zbStVC5q3icKak9GAs2QIdDx3PtW/S011NW3p+M5Eomh11ipTIKe6+4LQzHaQ+G+63pIZNJJQXMpljwTwj1brpgx5w1zZlyx5Z4QnllEIm2xeeSUHBf0hV0bejo1Uh09G3aFvgXk7cCJFBc9EdaRVuHJJaOdKyTV2TVhYLMduNR0Q9gxL5GaaTDw8GzejrDRBpxWoGsySRW0dttKuattwNkIlFw2YXgzOdYq4Ox49PlM+JrKd5OusjTWhBuVxUfMX/KXXZ3WEmkuqa67wspR4BTbwtKr/5u4fFgStse/T7EifFPnnYl9zPq4vmUOPrRndgoHjDti1gOPqlyXoifcRNGQzUd31lDyfHmob1Gp35vSr+P6vilcQ5Egtyd8YF/ySg9NhPM+9M/IOaHwp5+PSZayXTvCogEUwlatC3J8LLwYtcWB8EuDXQVuCkV5/B4eNHb7wGBs87LBDS+xjdVSn09wq1G8dFM+9tSUhIGneLvUdniKxKpTYljCpu3j7rVWlHj/P23v4NPGUEyeCQnexe9lJjzEQqMjJs+EzNAX6B98dBZVRmroJx95x/A/6gln18EyfCUsl+qdXb/tjvfbw+mwforpUOBz4XLVoBwAn3aWnfeH246NyBXhrq7TTN5lNSP9RkU+puUJm3W2Tsdq0nZWM07srk7MwQrZSRysjjGWBLRJNsNbfj2JMR4AbxpU1XLAb9Mxfpsq5EjMuuiR8L0JiHOOBX3hiUvOmavN0nMueSzcceFk0BK4pMqLo7vDD1Z0qrtDx7Itt4Xwm9UqbMmk8S0Dtuzb2pvOU99Z1nLTOfleNmvfZfP2pYZmPfajwosKdDBNpacNpVGGsWX9CyDI8Xq/Sj6QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTExLTEwVDAzOjE3OjU4LTA1OjAwF+tHyQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMS0xMFQwMzoxNzo1OC0wNTowMGa2/3UAAAAASUVORK5CYII\x3d",
height:20,width:20,type:"esriPMS",angle:0})}};d._createWindBarbsRenderer=function(){const b=Array.from(Array(31).keys()).map(f=>5*f),a=[{range:"0-5",path:"M20 20 M5 20 A15 15 0 1 0 35 20 A15 15 0 1 0 5 20 M20 20 M10 20 A10 10 0 1 0 30 20 A10 10 0 1 0 10 20",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTIwIDIwIE01IDIwIEExNSAxNSAwIDEgMCAzNSAyMCBBMTUgMTUgMCAxIDAgNSAyMCBNMjAgMjAgTTEwIDIwIEExMCAxMCAwIDEgMCAzMCAyMCBBMTAgMTAgMCAxIDAgMTAgMjAiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4\x3d"},
{range:"5-10",path:"M25 0 L25 40 M25 35 L17.5 37.5",imageData:"PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4\x3d"},{range:"10-15",path:"M25 0 L25 40 L10 45 L25 40",imageData:"PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg\x3d\x3d"},
{range:"15-20",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L17.5 37.5",imageData:"PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjEyIDAgMTUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4\x3d"},{range:"20-25",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L10 40",imageData:"PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"},
{range:"25-30",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L17.5 32.5",imageData:"PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIEwyNSAzNSBNMjUgMzAgTDE3LjUgMzIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg\x3d\x3d"},{range:"30-35",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg\x3d\x3d"},
{range:"35-40",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4\x3d"},{range:"40-45",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30",
imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg\x3d\x3d"},{range:"45-50",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4\x3d"},
{range:"50-55",path:"M25 0 L25 40 L10 40 L25 35",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4\x3d"},{range:"55-60",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L17.5 32.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxNy41IDMyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4\x3d"},
{range:"60-65",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg\x3d\x3d"},{range:"65-70",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4\x3d"},
{range:"70-75",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg\x3d\x3d"},{range:"75-80",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5",
imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4\x3d"},{range:"80-85",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg\x3d\x3d"},
{range:"85-90",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L17.5 17.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxNy41IDE3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4\x3d"},{range:"90-95",
path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg\x3d\x3d"},{range:"95-100",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20 L25 15 M25 10 L17.5 12.5",
imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCBMMjUgMTUgTTI1IDEwIEwxNy41IDEyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4\x3d"},{range:"100-105",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg\x3d\x3d"},
{range:"105-110",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L17.5 27.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDE3LjUgMjcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg\x3d\x3d"},{range:"110-115",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"},
{range:"115-120",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L17.5 22.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDE3LjUgMjIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg\x3d\x3d"},{range:"120-125",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25",
imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"},{range:"125-130",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L17.5 17.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDE3LjUgMTcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg\x3d\x3d"},
{range:"130-135",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"},{range:"135-140",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDE3LjUgMTIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg\x3d\x3d"},{range:"140-145",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"},{range:"145-150",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IE0yNSAxMCBNMjUgNSBMMTcuNSA3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4\x3d"}],c=y.fromJSON({imageData:"iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAQAAADtq6NDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEY0lEQVRIx5XXWWxWRRQH8N+d+31tUdGAVjGglYJABFEBY91jfDAg7piYaFTccA++uMQEFRcSXlATtxiXqMQt4G4iisYl0ai4sIQYtVFZ1KIFKdTS0l4f7vRCS5fPebozc+bM/2z/Mzcx0AgSiUxXnKfIdMn875FIhX53U2n/B/s+kKM4UINTjTBZImixxnrv+9a2iL6zEoUBXcoudrWj/OtHm3wt02lfU9Qao9OnHvIhgmww84MEl1qnxfNmGrqHxAizLdPpC6chGcAxKGGcL+30gOERf1BSpUqVslQSV8d5ReZFe8VQ9avufJn31cWwlJV7iafKStGOE/1qvfH9qUxxu8ydUdmuSKbGO8YUdT2inKLG69pM70tliktl5qIkCAJGmusDG7Vqsc0WjZa4UBlBiA5YZIcjYzB7qDtH5kaUJFLs7RGZTZ42W4PRRmtwvbdt1+wGiaS4drEtDttdZYIDNVuAclR3vA3+dI3qHqmVSy7U6Tv1MScCPvPR7nIpFlsdCy3FdTLPGhK92e2CUITjMJ9ocwKxnsZqc3O3JwMma3d6UVLnyVxB4aXemZqvPqLdpJhW3KVVbY4yYImPo6M5Urv50fj+0z/FG9YaEiENs8UtMfXUaTeTePNHlhXfA1UU+2lyD1Il3Gtt9+adfpNG7dNlpg2U/T3KYLZ2dUWFdTgp3/rQ4sK973qnInV5TIf40x3dhvrJPBiqyWUo4wAtLqhQYS71qK+QKOFRywmGK/kpikzV6WMKhh58vGWs4TIJNjiEYLIuP8Tt4/zmLyqk+AyrJSbF+Qq1DgqRUPMxyl+9q3IQhX/rMCJ6tEunriDs1oSyQZKlr9AkhT2ZIARbJfaJS1vtVbHB+Rgi0RK/y1q1BWsEEyLoz40xtGKcARPVWB1BTPO7f4LNtpkUl1aoMbViLyZo0GRjPD3BxnxjqXeLYlvhqYrzMMG3HoyJXa3JjfnGlbYYFlP7Jh3qKsKY4hQ7TY0nG+xwRL61n63mxHtqNHosigyMLmClNwvuecFnOZB88nNBDzNkzhxEZaKMBVoKapggMzvHHXBEpNSSFAvtcFRsVn0bW8LlMmcXs+c0Kne3gRR32+zg4uXwjC6zit6Wt4a8LXVfcp/MtQXHn2ynGbuCmb8GvvFeJLEE82ReU9/n6+dkq2x3buG9Wn94smcgAw631RPR7BTH+kbmHReZoEpOdEe7zWqZl40s0JWs9Hmv7hjBHqPDwsjGKVJnWWqjbdZp1KhJi0aPmxYZsIRhlttgeF+Jlke41QcOQKoqilSb6HJzSvNG3G/UoWnxwsmt+sVaYwd63dRbqdnMyCPVeyRPvpYgdavM22oGKoMUVRbJfOWMwidJ8Zzb1UvmWK/VVUXzHaTjjrVYh1897HT7xxYEVUaa5SWb/WO+YUWa9SrwvigzM8YlzlYv2GSdVCYxxlBtVnnFq5olwp5/BEk/OLsf5LUmG2+inRJdVvjZ97ZH9/zP34ug1O91pf4p+D+JYBpvrKxfbwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0xMS0xMFQwMzoxMjowOS0wNTowMB9ViV0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMTEtMTBUMDM6MTI6MDktMDU6MDBuCDHhAAAAAElFTkSuQmCC",
height:20,width:20,type:"esriPMS",angle:0}),h=b.map((f,m)=>{if(m!==b.length-1)if(0===m)var l={minValue:f,maxValue:b[m+1],symbol:c};else l=y.fromJSON({type:"esriPMS",imageData:a[m].imageData,contentType:"image/svg+xml",height:32,width:32,angle:0}),l={minValue:f,maxValue:b[m+1],symbol:l};return new E(l)});return{defaultSymbol:c,classBreakInfos:h}};d._getClassBreaks=function(b,a){return a.map((c,h)=>new E({minValue:b[h],maxValue:b[h+1],symbol:this._getDefaultSymbol(new n(c))}))};v._createClass(w,[{key:"styleRenderer",
get:function(){const b=this.attributeField,a=this._createStyleRenderer(this.style);a.field=b;return a}},{key:"sizeVariables",get:function(){const b=[];if(this.visualVariables)for(var a of this.visualVariables)"size"===a.type&&b.push(a);0===b.length&&(a=new G({field:"Magnitude",minSize:.2*this.symbolTileSize,maxSize:.8*this.symbolTileSize}),this.visualVariables?this.visualVariables.push(a):this._set("visualVariables",[a]),b.push(a));return b}},{key:"rotationVariables",get:function(){const b=[];if(this.visualVariables)for(var a of this.visualVariables)"rotation"===
a.type&&b.push(a);0===b.length&&(a=new F({field:"Direction",rotationType:this.rotationType}),this.visualVariables?this.visualVariables.push(a):this._set("visualVariables",[a]),b.push(a));return b}}]);return w}(S.VisualVariablesMixin(e.JSONSupport));g.__decorate([p.property({type:String,json:{write:!0}})],e.prototype,"attributeField",void 0);g.__decorate([p.property({type:q.apiValues,json:{type:q.jsonValues,read:{reader:q.read},write:{writer:q.write}}})],e.prototype,"flowRepresentation",void 0);g.__decorate([p.property({type:["geographic",
"arithmetic"],json:{write:!0}})],e.prototype,"rotationType",void 0);g.__decorate([p.property({type:r.apiValues,json:{type:r.jsonValues,read:{reader:r.read},write:{writer:r.write}}})],e.prototype,"style",void 0);g.__decorate([p.property({json:{write:!0}})],e.prototype,"symbolTileSize",void 0);g.__decorate([p.property({type:k.unitKebabDict.apiValues,json:{type:k.unitKebabDict.jsonValues,write:{writer:k.unitKebabDict.write}}})],e.prototype,"inputUnit",void 0);g.__decorate([C.reader("inputUnit")],e.prototype,
"readInputUnit",null);g.__decorate([p.property({type:k.unitKebabDict.apiValues,json:{type:k.unitKebabDict.jsonValues,read:{reader:k.unitKebabDict.read},write:{writer:k.unitKebabDict.write}}})],e.prototype,"outputUnit",void 0);g.__decorate([C.reader("outputUnit")],e.prototype,"readOutputUnit",null);g.__decorate([P.enumeration({vectorField:"vector-field"})],e.prototype,"type",void 0);g.__decorate([p.property({type:D})],e.prototype,"styleRenderer",null);g.__decorate([p.property({type:G})],e.prototype,
"sizeVariables",null);g.__decorate([p.property({type:F})],e.prototype,"rotationVariables",null);return e=z=g.__decorate([Q.subclass("esri.renderers.VectorFieldRenderer")],e)});