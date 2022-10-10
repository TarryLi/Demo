// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function e(a,c){switch(a.type){case "range":{const d="range"in a?a.range[1]:a.maxValue;if(+c<("range"in a?a.range[0]:a.minValue)||+c>d)return b.DomainValidationError.VALUE_OUT_OF_RANGE;break}case "coded-value":case "codedValue":if(null==a.codedValues||a.codedValues.every(d=>null==d||d.code!==c))return b.DomainValidationError.INVALID_CODED_VALUE}return null}b.DomainValidationError=void 0;(function(a){a.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range";
a.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"})(b.DomainValidationError||(b.DomainValidationError={}));b.getDomainRange=function(a){if(a&&"range"===a.type)return{min:"range"in a?a.range[0]:a.minValue,max:"range"in a?a.range[1]:a.maxValue}};b.isValidDomainValue=function(a,c){return null===e(a,c)};b.validateDomainValue=e;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});