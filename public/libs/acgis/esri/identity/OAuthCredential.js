// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(function(){let h=function(){function f(b,a){this.userId=this.token=this.stateUID=this.ssl=this.refreshToken=this.expires=this.codeVerifier=this.appId=this.storage=this.oAuthInfo=null;this.oAuthInfo=b;this.storage=a;this._init()}var e=f.prototype;e.isValid=function(){let b=!1;if(this.oAuthInfo&&this.userId&&(this.refreshToken||this.token))if(null==this.expires&&this.refreshToken)b=!0;else{const a=Date.now();this.expires>a&&(this.expires-a)/1E3>60*this.oAuthInfo.minTimeUntilExpiration&&(b=!0)}return b};
e.save=function(){if(!this.storage)return!1;const b=this._load(),a=this.oAuthInfo;if(a&&a.authNamespace&&a.portalUrl){let c=b[a.authNamespace];c||(c=b[a.authNamespace]={});this.appId||(this.appId=a.appId);c[a.portalUrl]={appId:this.appId,codeVerifier:this.codeVerifier,expires:this.expires,refreshToken:this.refreshToken,ssl:this.ssl,stateUID:this.stateUID,token:this.token,userId:this.userId};try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(b))}catch(d){return console.warn(d),!1}return!0}return!1};
e.destroy=function(){const b=this._load(),a=this.oAuthInfo;if(a&&a.appId&&a.portalUrl&&(null==this.expires||this.expires>Date.now())&&(this.refreshToken||this.token)){var c=a.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken";const d=new FormData;d.append("f","json");d.append("auth_token",this.refreshToken||this.token);d.append("client_id",a.appId);d.append("token_type_hint",this.refreshToken?"refresh_token":"access_token");if("function"===typeof navigator.sendBeacon)navigator.sendBeacon(c,
d);else{const g=new XMLHttpRequest;g.open("POST",c);g.send(d)}}if(a&&a.authNamespace&&a.portalUrl&&this.storage&&(c=b[a.authNamespace])){delete c[a.portalUrl];try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(b))}catch(d){console.log(d)}}a&&(this.oAuthInfo=a._oAuthCred=null)};e._init=function(){var b=this._load();const a=this.oAuthInfo;a&&a.authNamespace&&a.portalUrl&&(b=b[a.authNamespace])&&(b=b[a.portalUrl])&&(this.appId=b.appId,this.codeVerifier=b.codeVerifier,this.expires=b.expires,this.refreshToken=
b.refreshToken,this.ssl=b.ssl,this.stateUID=b.stateUID,this.token=b.token,this.userId=b.userId)};e._load=function(){let b={};if(this.storage){const a=this.storage.getItem("esriJSAPIOAuth");if(a)try{b=JSON.parse(a)}catch(c){console.warn(c)}}return b};return f}();h.prototype.declaredClass="esri.identity.OAuthCredential";return h});