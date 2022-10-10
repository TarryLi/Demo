/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{HandleOwner as t}from"../core/HandleOwner.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";let r=class extends t{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};e([s()],r.prototype,"layer",void 0),e([s()],r.prototype,"layerView",void 0),e([s()],r.prototype,"tileInfoView",void 0),e([s()],r.prototype,"updating",null),r=e([i("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],r);const o=r;export{o as B};
