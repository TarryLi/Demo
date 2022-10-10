// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Logger","./interfaces"],function(c,f,e){const g=f.getLogger("esri.views.interactive.interactiveToolUtils");c.areToolManipulatorsEditable=function(b){return b.visible&&b.getEditableFlag(e.EditableFlag.USER)&&b.getEditableFlag(e.EditableFlag.MANAGER)};c.getToolCollectionHandles=function(b){return[b.on("before-add",a=>{const d=a.item;if(null==d||b.includes(d))g.warn("Tool is either already in the list of tools or tool is `null`. Not adding tool."),a.preventDefault();else d.onAdd()}),
b.on("after-remove",a=>{a=a.item;a.visible=!1;a.active&&(a.view.activeTool=null);a.destroy()})]};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});