// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./shared","../../../core/sql/WhereClause","../../../chunks/datetime"],function(k,h,t,u){function r(b,a){return f(b.parseTree,a,b.parameters)}function f(b,a,c,d=null,e=null){switch(b.type){case "interval":return v(f(b.value,a,c,d,e),b.qualifier,b.op);case "case-expression":var g=" CASE ";"simple"===b.format&&(g+=f(b.operand,a,c,d,e));for(var l=0;l<b.clauses.length;l++)g+=" WHEN "+f(b.clauses[l].operand,a,c,d,e)+" THEN "+f(b.clauses[l].value,a,c,d,e);null!==b.else&&(g+=" ELSE "+f(b.else,
a,c,d,e));return g+=" END ";case "parameter":d=c[b.value.toLowerCase()];if("string"===typeof d)return"'"+c[b.value.toLowerCase()].toString().replace(/'/g,"''")+"'";if(d instanceof Date)return p(d,a);if(d instanceof Array){b=[];for(c=0;c<d.length;c++)"string"===typeof d[c]?b.push("'"+d[c].toString().replace(/'/g,"''")+"'"):d[c]instanceof Date?b.push(p(d[c],a)):b.push(d[c].toString());return b}return d.toString();case "expression-list":g=[];for(l of b.value)g.push(f(l,a,c,d,e));return g;case "unary-expression":return" ( NOT "+
f(b.expr,a,c,d,e)+" ) ";case "binary-expression":switch(b.operator){case "AND":return" ("+f(b.left,a,c,d,e)+" AND "+f(b.right,a,c,d,e)+") ";case "OR":return" ("+f(b.left,a,c,d,e)+" OR "+f(b.right,a,c,d,e)+") ";case "IS":if("null"!==b.right.type)throw Error("Unsupported RHS for IS");return" ("+f(b.left,a,c,d,e)+" IS NULL )";case "ISNOT":if("null"!==b.right.type)throw Error("Unsupported RHS for IS");return" ("+f(b.left,a,c,d,e)+" IS NOT NULL )";case "IN":g=[];if("expression-list"===b.right.type)return g=
f(b.right,a,c,d,e)," ("+f(b.left,a,c,d,e)+" IN ("+g.join(",")+")) ";g=f(b.right,a,c,d,e);return g instanceof Array?" ("+f(b.left,a,c,d,e)+" IN ("+g.join(",")+")) ":" ("+f(b.left,a,c,d,e)+" IN ("+g+")) ";case "NOT IN":g=[];if("expression-list"===b.right.type)return g=f(b.right,a,c,d,e)," ("+f(b.left,a,c,d,e)+" NOT IN ("+g.join(",")+")) ";g=f(b.right,a,c,d,e);return g instanceof Array?" ("+f(b.left,a,c,d,e)+" NOT IN ("+g.join(",")+")) ":" ("+f(b.left,a,c,d,e)+" NOT IN ("+g+")) ";case "BETWEEN":return g=
f(b.right,a,c,d,e)," ("+f(b.left,a,c,d,e)+" BETWEEN "+g[0]+" AND "+g[1]+" ) ";case "NOTBETWEEN":return g=f(b.right,a,c,d,e)," ("+f(b.left,a,c,d,e)+" NOT BETWEEN "+g[0]+" AND "+g[1]+" ) ";case "LIKE":return""!==b.escape?" ("+f(b.left,a,c,d,e)+" LIKE "+f(b.right,a,c,d,e)+" ESCAPE '"+b.escape+"') ":" ("+f(b.left,a,c,d,e)+" LIKE "+f(b.right,a,c,d,e)+") ";case "NOT LIKE":return""!==b.escape?" ("+f(b.left,a,c,d,e)+" NOT LIKE "+f(b.right,a,c,d,e)+" ESCAPE '"+b.escape+"') ":" ("+f(b.left,a,c,d,e)+" NOT LIKE "+
f(b.right,a,c,d,e)+") ";case "\x3c\x3e":case "\x3c":case "\x3e":case "\x3e\x3d":case "\x3c\x3d":case "\x3d":case "*":case "-":case "+":case "/":return" ("+f(b.left,a,c,d,e)+" "+b.operator+" "+f(b.right,a,c,d,e)+") "}throw Error("Not Supported Operator "+b.operator);case "null":return"null";case "boolean":return!0===b.value?"1":"0";case "string":return"'"+b.value.toString().replace(/'/g,"''")+"'";case "timestamp":return p(b.value,a);case "date":return p(b.value,a);case "number":return b.value.toString();
case "current-time":return w("date"===b.mode,a);case "column-reference":return d&&d.toLowerCase()===b.column.toLowerCase()?"("+e+")":b.column;case "function":return c=f(b.args,a,c,d,e),x(b.name,c,a)}throw Error("Unsupported sql syntax "+b.type);}function x(b,a,c){switch(b.toLowerCase().trim()){case "abs":if(1!==a.length)throw Error("Invalid Parameter for call to ABS");return"abs("+a[0]+")";case "ceiling":case "ceil":if(1!==a.length)throw Error("Invalid Parameter for call to CEILING");switch(c){case h.FeatureServiceDatabaseType.Standardised:case h.FeatureServiceDatabaseType.StandardisedNoInterval:return"CEILING("+
a[0]+")";default:return"CEILING("+a[0]+")"}case "floor":if(1!==a.length)throw Error("Invalid Parameter for call to Floor");return"FLOOR("+a[0]+")";case "log":if(1!==a.length)throw Error("Invalid Parameter for call to LOG");return"LOG("+a[0]+")";case "log10":if(1!==a.length)throw Error("Invalid Parameter for call to LOG10");return"LOG10("+a[0]+")";case "power":if(2!==a.length)throw Error("Invalid Parameter for call to POWER");return"POWER("+a[0]+","+a[1]+")";case "round":if(2===a.length)return"ROUND("+
a[0]+","+a[1]+")";if(1===a.length)return"ROUND("+a[0]+")";throw Error("Invalid Parameter for call to ROUND");case "truncate":if(1>a.length||2<a.length)throw Error("Invalid Parameter for TRUNCATE function");switch(c){case h.FeatureServiceDatabaseType.SqlServer:return"ROUND("+a[0]+(1===a.length?"0":","+a[1])+",1)";default:return"TRUNCATE("+a[0]+(1===a.length?")":","+a[1]+")")}case "char_length":case "len":if(1!==a.length)throw Error("Invalid Parameter for CHAR_LENGTH function");switch(c){case h.FeatureServiceDatabaseType.SqlServer:return"LEN("+
a[0]+")";case h.FeatureServiceDatabaseType.Oracle:return"LENGTH("+a[0]+")";default:return"CHAR_LENGTH("+a[0]+")"}case "concat":if(1>a.length)throw Error("Invalid Parameter for CONCAT function");c="CONCAT(";for(b=0;b<a.length;b++)0!==b&&(c+=","),c+=a[b];return c+=")";case "lower":case "lcase":if(1!==a.length)throw Error("Invalid Parameter for Lower function");return"LOWER("+a[0]+")";case "upper":case "ucase":if(1!==a.length)throw Error("Invalid Parameter for Upper function");return"UPPER("+a[0]+")";
case "substring":switch(b="",c){case h.FeatureServiceDatabaseType.Oracle:return b="SUBSTR("+a[0]+","+a[1],3===a.length&&(b+=","+a[2]),b+=")";case h.FeatureServiceDatabaseType.SqlServer:return b=3===a.length?"SUBSTRING("+a[0]+","+a[1]+","+a[2]+")":"SUBSTRING("+a[0]+",  "+a[1]+", LEN("+a[0]+") - "+a[1]+")";default:return b="SUBSTRING("+a[0]+" FROM "+a[1],3===a.length&&(b+=" FOR "+a[2]),b+=")"}case "extract":return"EXTRACT("+a[0].replace(/'/g,"")+" FROM "+a[1]+")"}throw Error("Function Not Recognised");
}function p(b,a){b=b instanceof Date?u.DateTime.fromJSDate(b):u.DateTime.fromSQL(b);const c=0===b.hour&&0===b.minute&&0===b.second&&0===b.millisecond;switch(a){case h.FeatureServiceDatabaseType.FILEGDB:case h.FeatureServiceDatabaseType.Standardised:case h.FeatureServiceDatabaseType.StandardisedNoInterval:return c?`date '${b.toFormat("yyyy-LL-dd")}'`:`date '${b.toFormat("yyyy-LL-dd HH:mm:ss")}'`;case h.FeatureServiceDatabaseType.Oracle:return c?`TO_DATE('${b.toFormat("yyyy-LL-dd")}','YYYY-MM-DD')`:
`TO_DATE('${b.toFormat("yyyy-LL-dd HH:mm:ss")}','YYYY-MM-DD HH24:MI:SS')`;case h.FeatureServiceDatabaseType.SqlServer:return`'${b.toFormat(c?"yyyy-LL-dd":"yyyy-LL-dd HH:mm:ss")}'`;case h.FeatureServiceDatabaseType.PGDB:return`#${b.toFormat(c?"LL-dd-yyyy":"LL-dd-yyyy HH:mm:ss")}#`;case h.FeatureServiceDatabaseType.Postgres:return`TIMESTAMP '${b.toFormat(c?"yyyy-LL-dd":"yyyy-LL-dd HH:mm:ss")}'`;default:return`date '${b.toFormat("yyyy-LL-dd HH:mm:ss")}'`}}function w(b,a){switch(a){case h.FeatureServiceDatabaseType.FILEGDB:case h.FeatureServiceDatabaseType.Standardised:case h.FeatureServiceDatabaseType.StandardisedNoInterval:return b?
"CURRENT_DATE":"CURRENT_TIMESTAMP";case h.FeatureServiceDatabaseType.Oracle:return b?"CURRENT_DATE":"CURRENT_TIMESTAMP";case h.FeatureServiceDatabaseType.SqlServer:return b?"CAST(GETDATE() AS DATE)":"GETDATE()";case h.FeatureServiceDatabaseType.PGDB:return b?"CURRENT_DATE":"CURRENT_TIMESTAMP";case h.FeatureServiceDatabaseType.Postgres:return b?"CURRENT_DATE":"CURRENT_TIMESTAMP";default:return b?"CURRENT_DATE":"CURRENT_TIMESTAMP"}}function n(b,a,c,d){switch(a.type){case "interval":return"integer";
case "case-expression":var e=[];if("simple"===a.format)for(var g=0;g<a.clauses.length;g++)e.push(n(b,a.clauses[g].value,c,d));else for(g=0;g<a.clauses.length;g++)e.push(n(b,a.else,c,d));null!==a.else&&e.push(n(b,a.else,c,d));return q(e);case "parameter":b=d[a.value.toLowerCase()];if(void 0===b&&c){a=c[a.value.toLowerCase()];if(void 0===a||null===a)return"";if("string"===typeof a||a instanceof String)return"string";if("boolean"===typeof a)return"boolean";if(a instanceof Date)return"date";if("number"===
typeof a)return 0===a%1?"integer":"double"}return void 0===b?"":b;case "expression-list":e=[];for(g of a.value)e.push(n(b,g,c,d));return e;case "unary-expression":return"boolean";case "binary-expression":switch(a.operator){case "AND":return"boolean";case "OR":return"boolean";case "IS":if("null"!==a.right.type)throw Error("Unsupported RHS for IS");return"boolean";case "ISNOT":if("null"!==a.right.type)throw Error("Unsupported RHS for IS");return"boolean";case "IN":return"boolean";case "NOT IN":return"boolean";
case "BETWEEN":return"boolean";case "NOTBETWEEN":return"boolean";case "LIKE":return"boolean";case "NOT LIKE":return"boolean";case "\x3c\x3e":case "\x3c":case "\x3e":case "\x3e\x3d":case "\x3c\x3d":case "\x3d":return"boolean";case "*":case "-":case "+":case "/":return q([n(b,a.left,c,d),n(b,a.right,c,d)]);default:throw Error("Not Supported Operator "+a.operator);}case "null":return"";case "boolean":return"boolean";case "string":return"string";case "number":return null===a.value?"":0===a.value%1?"integer":
"double";case "date":return"date";case "timestamp":return"date";case "current-time":return"date";case "column-reference":return a=b[a.column.toLowerCase()],void 0===a?"":a;case "function":switch(a.name.toLowerCase()){case "position":case "extract":case "char_length":return"integer";case "round":a=n(b,a.args,c,d);if(a instanceof Array){if(0<a.length)return a[0];break}return a;case "sign":return a=n(b,a.args,c,d),a instanceof Array&&(a=q(a)),"integer"===a||"double"===a?a:"double";case "ceiling":case "floor":case "abs":return a=
n(b,a.args,c,d),a instanceof Array?q(a):a;case "area":case "length":case "log":case "log10":case "sin":case "cos":case "tan":case "asin":case "acos":case "atan":case "power":return"double";case "substring":case "trim":case "concat":case "lower":case "upper":return"string";case "truncate":return"double"}return""}throw Error("Unsupported sql syntax "+a.type);}function q(b){if(b){let a="";for(const c of b)""!==c&&(a=""===a?c:y[a]<y[c]?c:a);return a}return""}function m(b,a){if(null===b||void 0===b)return!1;
switch(b.type){case "when-clause":return m(b.operand,a)||m(b.value,a);case "case-expression":for(const c of b.clauses)if(m(c,a))return!0;if("simple"===b.format&&m(b.operand,a)||null!==b.else&&m(b.else,a))return!0;break;case "expression-list":for(const c of b.value)if(m(c,a))return!0;break;case "unary-expression":return m(b.expr,a);case "binary-expression":return m(b.left,a)||m(b.right,a);case "column-reference":return a.toLowerCase()===b.column.toLowerCase();case "function":return m(b.args,a)}return!1}
function v(b,a,c){let d="";d="interval-period"===a.type?""+a.period.toUpperCase():""+a.start.period.toUpperCase()+" TO "+a.end.period.toUpperCase();return"INTERVAL "+c+" "+b+" "+d}const y={boolean:1,string:2,integer:3,double:4,date:5};k.combine=function(b,a,c="AND"){return t.WhereClause.create("(("+r(b,h.FeatureServiceDatabaseType.Standardised)+")"+c+"("+r(a,h.FeatureServiceDatabaseType.Standardised)+"))",b.fieldsIndex)};k.convertIntervalToSql=v;k.isSingleField=function(b){return"column-reference"===
b.parseTree.type?!0:!1};k.makeDateString=p;k.makeToday=w;k.predictType=function(b,a,c={}){const d={},e={},g={esriFieldTypeSmallInteger:"integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"double",esriFieldTypeDouble:"double",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"integer",oid:"integer",long:"integer","small-integer":"integer",integer:"integer",single:"double",double:"double",date:"date",string:"string"};for(var l of a)a=g[l.type],d[l.name.toLowerCase()]=void 0===
a?"":a;for(const z in c)l=g[c[z]],e[z.toLowerCase()]=void 0===l?"":l;switch(n(d,b.parseTree,b.parameters,e)){case "double":return"double";case "integer":return"integer";case "date":return"date";case "string":return"string"}return""};k.reformulateWithoutField=function(b,a,c,d){return t.WhereClause.create(f(b.parseTree,h.FeatureServiceDatabaseType.Standardised,b.parameters,a,c),d)};k.scanForField=function(b,a){return m(b.parseTree,a)};k.toWhereClause=r;k.toWhereClauseFromTree=function(b,a,c){return f(b,
a,c)};k.translateFunctionToDatabaseSpecific=x;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});