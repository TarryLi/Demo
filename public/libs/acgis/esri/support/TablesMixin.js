// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/collectionUtils ../core/Logger ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass".split(" "),function(l,h,m,n,p,q,r,v,w,x,t){function k(e,g,f){if(e)for(let b=0,d=e.length;b<d;b++){var c=e.getItemAt(b);if(c[g]===f||"group"===(null==c?void 0:c.type)&&(c=k(c.tables,g,f)))return c}}const u=q.getLogger("esri.support.TablesMixin");
l.TablesMixin=e=>{e=function(g){function f(...b){var d=g.call(this,...b)||this;d.tables=new n;d.tables.on("after-add",a=>{a=a.item;a.parent&&a.parent!==h._assertThisInitialized(d)&&"tables"in a.parent&&a.parent.tables.remove(a);a.parent=h._assertThisInitialized(d);"feature"!==a.type&&u.error(`Layer 'title:${a.title}, id:${a.id}' of type '${a.type}' is not supported as a table and will therefore be ignored.`)});d.tables.on("after-remove",a=>{a.item.parent=null});return d}h._inheritsLoose(f,g);var c=
f.prototype;c.destroy=function(){const b=this.tables.removeAll();for(const d of b)d.destroy();this.tables.destroy()};c.findTableById=function(b){return k(this.tables,"id",b)};c.findTableByUid=function(b){return k(this.tables,"uid",b)};h._createClass(f,[{key:"tables",set:function(b){this._set("tables",p.referenceSetter(b,this._get("tables")))}}]);return f}(e);m.__decorate([r.property()],e.prototype,"tables",null);return e=m.__decorate([t.subclass("esri.support.TablesMixin")],e)};Object.defineProperties(l,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});