"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9263],{9263:(n,t,e)=>{e.r(t),e.d(t,{registerFunctions:()=>o});var r=e(61146),u=e(1886),i=e(72274);async function a(n,t,e,a,o,s){if(1===a.length){if((0,r.l)(a[0]))return(0,u.m)(n,a[0],(0,r.n)(a[1],-1));if((0,r.o)(a[0]))return(0,u.m)(n,a[0].toArray(),(0,r.n)(a[1],-1))}else if(2===a.length){if((0,r.l)(a[0]))return(0,u.m)(n,a[0],(0,r.n)(a[1],-1));if((0,r.o)(a[0]))return(0,u.m)(n,a[0].toArray(),(0,r.n)(a[1],-1));if((0,r.R)(a[0])){const e=await a[0].load(),u=await c(i.WhereClause.create(a[1],e.getFieldsIndex()),s,o);return a[0].calculateStatistic(n,u,(0,r.n)(a[2],1e3),t.abortSignal)}}else if(3===a.length&&(0,r.R)(a[0])){const e=await a[0].load(),u=await c(i.WhereClause.create(a[1],e.getFieldsIndex()),s,o);return a[0].calculateStatistic(n,u,(0,r.n)(a[2],1e3),t.abortSignal)}return(0,u.m)(n,a,-1)}async function c(n,t,e){const r=n.getVariables();if(r.length>0){const u=[];for(let n=0;n<r.length;n++){const i={name:r[n]};u.push(await t.evaluateIdentifier(e,i))}const i={};for(let n=0;n<r.length;n++)i[r[n]]=u[n];return n.parameters=i,n}return n}function o(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("stdev",e,0,u,t,n)}))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("variance",e,0,u,t,n)}))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("mean",e,0,u,t,n)}))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("mean",e,0,u,t,n)}))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("sum",e,0,u,t,n)}))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("min",e,0,u,t,n)}))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("max",e,0,u,t,n)}))},n.functions.count=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if((0,r.p)(e,1,1),(0,r.R)(e[0]))return e[0].count(n.abortSignal);if((0,r.l)(e[0])||(0,r.b)(e[0]))return e[0].length;if((0,r.o)(e[0]))return e[0].length();throw new Error("Invalid Parameters for Count")}))})}e(91597),e(92143),e(31450),e(76506),e(71552),e(40642),e(34250),e(91306),e(60474),e(66396),e(86656),e(60991),e(86787),e(97714),e(17533),e(6540),e(2906),e(73796),e(12047),e(21972),e(91055),e(19657),e(6906),e(50406),e(60947),e(35132),e(89623),e(21801),e(84069),e(44567),e(98380),e(92896),e(36097),e(33921),e(3482),e(97546),e(57251),e(59465),e(9801),e(53523),e(42911),e(46826),e(45433),e(54732),e(74569),e(22781),e(32422),e(65949),e(40267),e(88762),e(32101),e(53785),e(95587),e(52228),e(5777)}}]);