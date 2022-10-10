// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Logger ../core/maybe ../core/reactiveUtils ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./Daylight/css ./Daylight/DaylightViewModel ./Daylight/VisibleElements ./Daylight/support/daylightUtils ./Daylight/support/SliderWithDropdown ./support/DatePicker ./support/Heading ./support/timeWidgetUtils ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),
function(t,q,g,f,x,l,u,K,L,M,m,D,E,e,y,z,F,G,H,I,v,N,A,h){const B=/(.*)\s(.*)/,J=f.getLogger("esri.widgets.Daylight");f=function(n){function r(a,b){var d;var c=n.call(this,a,b)||this;c.headingLevel=3;c.iconClass=e.CSS.widgetIcon;c.label=void 0;c.playSpeedMultiplier=1;c.timeSliderSteps=5;c.view=null;c.viewModel=new y;c.visibleElements=new z;c.dateOrSeason="date";c._timeSlider=new G({viewModel:c.viewModel.timeSliderViewModel,labelFormatFunction:v.formatSliderLabel,inputFormatFunction:v.formatSliderLabel,
min:0,max:1439,steps:null!=(d=c.timeSliderSteps)?d:5,values:[0],labelInputsEnabled:!1,visibleElements:{labels:!0},tickConfigs:[{mode:"position",values:[0,360,720,1080,1439],labelsVisible:!0,tickCreatedFunction:c._onPrimaryTickCreated.bind(q._assertThisInitialized(c))},{mode:"position",values:[120,240,480,600,840,960,1200,1320],tickCreatedFunction:c._onSecondaryTickCreated.bind(q._assertThisInitialized(c))}],items:[]});c._datePicker=new H({viewModel:c.viewModel.datePickerViewModel,commitOnMonthChange:!0});
c._onPlayDayClick=()=>{c.viewModel.toggleDayPlaying()};c._onYearPlayClick=()=>{c.viewModel.toggleYearPlaying()};c._onSeasonChange=p=>{c.viewModel.currentSeason=p.target.value};c._onSunLightingCheckboxChange=()=>{c.viewModel.toggleSunLightingEnabled()};c._onShadowCheckboxChange=()=>{c.viewModel.toggleDirectShadowsEnabled()};return c}q._inheritsLoose(r,n);var k=r.prototype;k.postInitialize=function(){this.viewModel.isSupported&&this.own([l.watch(()=>this.viewModel.datePickerViewModel,a=>this._datePicker.viewModel=
a,l.syncAndInitial),l.watch(()=>this.viewModel.timeSliderViewModel,a=>this._timeSlider.viewModel=a,l.syncAndInitial),l.watch(()=>{var a;return null==(a=this.timezoneMessages)?void 0:a.chooseTimezone},a=>this._timeSlider.buttonTooltip=a,l.syncAndInitial),l.watch(()=>{var a;return null==(a=this.visibleElements)?void 0:a.timezone},a=>this._timeSlider.showDropDown=a,l.syncAndInitial),l.watch(()=>!this.viewModel.sunLightingEnabled,a=>{this._datePicker.disabled=a;this._timeSlider.disabled=a},l.syncAndInitial),
l.when(()=>this.gmtOffsets,a=>{this._timeSlider.items=a.map(b=>({utcOffset:b.utcOffset,name:b.short,label:[b.shortWithUTC,b.long]}))},l.syncAndInitial),l.watch(()=>[this.viewModel.utcOffset,this.gmtOffsets],()=>this._onUTCOffsetChange(),l.syncAndInitial)])};k.destroy=function(){this._datePicker.destroy();this._timeSlider.destroy()};k.render=function(){const {messages:a,viewModel:b,visibleElements:d}=this,c=b.isSupported;return h.tsx("div",{class:this.classes(e.CSS.base,e.CSS.widget)},c?h.tsx(h.tsxFragment,
null,d.header&&h.tsx(I.Heading,{level:this.headingLevel},a.title),this._renderTimeOptions(),d.datePicker&&this._renderDateOrSeason(),d.sunLightingToggle&&this._renderSunLightingToggle(),d.shadowsToggle&&this._renderShadowsToggle()):h.tsx("div",{key:"unsupported",class:e.CSS.panelError},h.tsx("p",null,a.unsupported)))};k.loadDependencies=function(){var a=q._asyncToGenerator(function*(){yield Promise.all([new Promise((b,d)=>t(["../chunks/calcite-button"],b,d)),new Promise((b,d)=>t(["../chunks/calcite-checkbox"],
b,d)),new Promise((b,d)=>t(["../chunks/calcite-label"],b,d))])});return function(){return a.apply(this,arguments)}}();k._renderTimeOptions=function(){const {viewModel:a,visibleElements:b,messages:d}=this,{directShadowsEnabled:c,dayPlaying:p}=a,C=!a.sunLightingEnabled;return h.tsx("div",{class:this.classes(e.CSS.dayContainer,this._labelAlignmentClass,{[e.CSS.shadowOn]:c,[e.CSS.shadowOff]:!c,[e.CSS.sliderDateOn]:b.datePicker,[e.CSS.sliderDateOff]:!b.datePicker,[e.CSS.sliderAmPmOn]:this._useAmPm,[e.CSS.containerDisabled]:C}),
key:"daylight-time-options"},this._timeSlider.render(),b.playButtons&&this._renderPlayPauseButton({playing:p,disabled:C,label:null==d?void 0:d.playDay,onClick:this._onPlayDayClick}))};k._renderDateOptions=function(){const {viewModel:a,visibleElements:b,messages:d}=this,{yearPlaying:c}=a,p=!a.sunLightingEnabled;return h.tsx("div",{key:"daylight-date-options",class:this.classes(e.CSS.dateContainer,p&&e.CSS.containerDisabled)},this._datePicker.render(),b.playButtons&&this._renderPlayPauseButton({playing:c,
disabled:p,label:null==d?void 0:d.playYear,onClick:this._onYearPlayClick}))};k._renderPlayPauseButton=function({playing:a,disabled:b,label:d,onClick:c}){return h.tsx("calcite-button",{appearance:"solid",class:e.CSS.playPauseButton,disabled:b,"icon-start":a?"pause-f":"play-f",label:d,round:!0,title:d,type:"button",onclick:c})};k._renderSeasonOptions=function(){const {messages:a,viewModel:b}=this,d=!b.sunLightingEnabled;return h.tsx("select",{class:this.classes(e.CSS.select,e.CSS.seasonPicker,d&&e.CSS.seasonPickerDisabled),
disabled:d,value:b.currentSeason,"aria-label":a.season,onchange:this._onSeasonChange},F.ORDERED_SEASONS.map(c=>h.tsx("option",{value:c},a[c])))};k._renderDateOrSeason=function(){return"date"===this.dateOrSeason?this._renderDateOptions():this._renderSeasonOptions()};k._renderSunLightingToggle=function(){var a;const b=null==(a=this.messages)?void 0:a.sunLightingToggle;return h.tsx("calcite-label",{key:"date-time-toggle",layout:"inline",title:null==b?void 0:b.tooltip,scale:"s"},h.tsx("calcite-checkbox",
{class:e.CSS.sunLightingCheckbox,checked:this.viewModel.sunLightingEnabled,onCalciteCheckboxChange:this._onSunLightingCheckboxChange}),null==b?void 0:b.label)};k._renderShadowsToggle=function(){var a;const b=null==(a=this.messages)?void 0:a.shadowsToggle;return h.tsx("calcite-label",{key:"shadow-toggle",layout:"inline",title:null==b?void 0:b.tooltip,scale:"s"},h.tsx("calcite-checkbox",{class:e.CSS.shadowsCheckbox,checked:this.viewModel.directShadowsEnabled,onCalciteCheckboxChange:this._onShadowCheckboxChange}),
b.label)};k._onUTCOffsetChange=function(){var a;const b=this.viewModel.utcOffset;var d=null==(a=this._timeSlider.currentItem)?void 0:a.utcOffset;a=this.gmtOffsets;x.isNone(a)||d===b||(d=a.findIndex(({utcOffset:c})=>c===b),-1<d&&(this._timeSlider.currentIndex=d))};k._onPrimaryTickCreated=function(a,b,d){b.classList.add(...w,e.CSS.primaryTick);d.classList.add(...w,e.CSS.primaryTickLabel);d.onclick=b.onclick=this._makeGoToTime(a);if(a=d.textContent.match(B))d.innerHTML=`${a[1]}<br><div class=${e.CSS.primaryTickAmPm}>${a[2]}</div>`};
k._onSecondaryTickCreated=function(a,b){b.classList.add(...w,e.CSS.secondaryTick);b.onclick=this._makeGoToTime(a)};k._makeGoToTime=function(a){return()=>{this.viewModel.timeSliderPosition=a}};q._createClass(r,[{key:"gmtOffsets",get:function(){return x.applySome(this.timezoneMessages,v.getTimezoneInfos)}},{key:"_useAmPm",get:function(){const a=this._timeSlider.viewModel.getLabelForValue(0,"tick");return B.test(a)}},{key:"_labelAlignmentClass",get:function(){var a,b;const d=null!=(a=null==(b=this.viewModel.timeSliderViewModel.values)?
void 0:b[0])?a:0;a=60*(this._useAmPm?21:21.5);return d<60*(this._useAmPm?4:3)?e.CSS.sliderAlignLeft:d>a?e.CSS.sliderAlignRight:null}}]);return r}(E);g.__decorate([m.property({readOnly:!0})],f.prototype,"gmtOffsets",null);g.__decorate([m.property(),A.messageBundle("esri/widgets/Daylight/t9n/Daylight")],f.prototype,"messages",void 0);g.__decorate([m.property(),A.messageBundle("esri/widgets/support/t9n/timezone")],f.prototype,"timezoneMessages",void 0);g.__decorate([m.property()],f.prototype,"headingLevel",
void 0);g.__decorate([m.property()],f.prototype,"iconClass",void 0);g.__decorate([m.property({aliasOf:{source:"messages.title",overridable:!0}})],f.prototype,"label",void 0);g.__decorate([u.aliasOf("viewModel.playSpeedMultiplier")],f.prototype,"playSpeedMultiplier",void 0);g.__decorate([u.aliasOf("_timeSlider.steps")],f.prototype,"timeSliderSteps",void 0);g.__decorate([u.aliasOf("viewModel.view")],f.prototype,"view",void 0);g.__decorate([m.property({type:y})],f.prototype,"viewModel",void 0);g.__decorate([m.property({type:z,
nonNullable:!0})],f.prototype,"visibleElements",void 0);g.__decorate([m.property({cast:n=>{if("season"===n||"date"===n)return n;J.warn(`"${n}" is not a valid option. Acceptable values are only "date" or "season". Defaulting to "${"date"}".`);return"date"}})],f.prototype,"dateOrSeason",void 0);g.__decorate([m.property()],f.prototype,"_timeSlider",void 0);g.__decorate([m.property()],f.prototype,"_useAmPm",null);g.__decorate([m.property()],f.prototype,"_labelAlignmentClass",null);g.__decorate([m.property()],
f.prototype,"_datePicker",void 0);f=g.__decorate([D.subclass("esri.widgets.Daylight")],f);const w=["esri-interactive","esri-widget__anchor"];return f});