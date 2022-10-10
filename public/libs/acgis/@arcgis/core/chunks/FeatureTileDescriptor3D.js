/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as i,a as e}from"./aaBoundingRect.js";class s{constructor(e,s,h,l=null){this.lij=[0,0,0],this.extent=i(),this.resolution=0,this.loadPriority=0,this.measures={visibility:t.VISIBLE_ON_SURFACE,screenRect:i(),distance:0,shouldSplit:!1},this.used=!1,l&&this.acquire(e,s,h,l)}acquire(i,e,t,h){this.tilingScheme=h,this.id=s.id(i,e,t),this.lij[0]=i,this.lij[1]=e,this.lij[2]=t,h.getExtent(i,e,t,this.extent),this.resolution=h.resolutionAtLevel(i)}release(){this.tilingScheme=null}getChildren(i){const e=this.lij[0]+1,t=2*this.lij[1],h=2*this.lij[2];return i?(i[0].acquire(e,t,h,this.tilingScheme),i[1].acquire(e,t+1,h,this.tilingScheme),i[2].acquire(e,t,h+1,this.tilingScheme),i[3].acquire(e,t+1,h+1,this.tilingScheme),i):[new s(e,t,h,this.tilingScheme),new s(e,t+1,h,this.tilingScheme),new s(e,t,h+1,this.tilingScheme),new s(e,t+1,h+1,this.tilingScheme)]}copyMeasurementsFrom(i){this.measures.visibility=i.measures.visibility,this.measures.shouldSplit=i.measures.shouldSplit,this.measures.distance=i.measures.distance,e(i.measures.screenRect,this.measures.screenRect)}static id(i,e,s){return`${i}/${e}/${s}`}}var t;!function(i){i[i.INVISIBLE=0]="INVISIBLE",i[i.VISIBLE_WHEN_EXTENDED=1]="VISIBLE_WHEN_EXTENDED",i[i.VISIBLE_ON_SURFACE=2]="VISIBLE_ON_SURFACE"}(t||(t={}));export{s as F,t as V};