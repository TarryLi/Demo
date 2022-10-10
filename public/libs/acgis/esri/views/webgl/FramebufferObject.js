// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/Logger ../../core/maybe ./BufferObject ./checkWebGLError ./context-util ./enums ./Renderbuffer ./Texture ./Util".split(" "),function(A,B,v,w,G,y,H,c,t,q,C){function p(k){return"type"in k&&"texture"===k.type}function D(k){return p(k)||"pixelFormat"in k}function x(k,f){k.target!==c.TextureType.TEXTURE_2D&&k.target!==c.TextureType.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!");void 0!==f.width&&
0<=f.width&&void 0!==f.height&&0<=f.height?f.width===k.width&&f.height===k.height||console.error("Color attachment texture must match the framebuffer's!"):(f.width=k.width,f.height=k.height)}function z(k,f){void 0!==f.width&&0<=f.width&&void 0!==f.height&&0<=f.height?f.width===k.width&&f.height===k.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(f.width=k.width,f.height=k.height)}function E(k){return k.descriptor.target===c.TextureType.TEXTURE_CUBE_MAP?c.TextureType.TEXTURE_CUBE_MAP_POSITIVE_X:
c.TextureType.TEXTURE_2D}const I=v.getLogger("esri.views.webgl.FrameBufferObject");v=function(){function k(a,b,d=null,e=null){this._context=a;this._stencilAttachment=this._depthAttachment=this._glName=null;this._colorAttachments=new Map;this._initialized=!1;this._desc={...b};a.instanceCounter.increment(c.ResourceType.FramebufferObject,this);if(w.isSome(d))for(Array.isArray(d)||(d=[d]),a=0;a<d.length;++a){b=d[a];const g=c.ColorAttachment.COLOR_ATTACHMENT0+a;let h;D(b)?(p(b)?(h=b.descriptor,this._colorAttachments.set(g,
b)):(h=b,this._colorAttachments.set(g,new q.Texture(this._context,h))),x(h,this._desc)):("type"in b&&"renderbuffer"===b.type?(h=b.descriptor,this._colorAttachments.set(g,b)):(h=b,this._colorAttachments.set(g,new t.Renderbuffer(this._context,h))),z(h,this._desc));this._validateColorAttachmentPoint(g)}if(w.isSome(e))if(D(e))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),p(e)?(d=e.descriptor,this._depthStencilTexture=
e):(d=e,this._depthStencilTexture=new q.Texture(this._context,d)),x(d,this._desc);else{var l;"type"in e&&"renderbuffer"===e.type?d=e.descriptor:(d=e,e=new t.Renderbuffer(this._context,d));a=null!=(l=this._desc.depthStencilTarget)?l:c.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER;a===c.DepthStencilTargetType.STENCIL_RENDER_BUFFER?this._stencilAttachment=e:a===c.DepthStencilTargetType.DEPTH_RENDER_BUFFER||a===c.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=e:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER');
z(d,this._desc)}}var f=k.prototype;f.dispose=function(){if(this._desc){var a=this._context.getBoundFramebufferObject();this._disposeColorAttachments();this._disposeDepthStencilAttachments();this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null);this._context.bindFramebuffer(a);this._context.instanceCounter.decrement(c.ResourceType.FramebufferObject,this);this._desc=null}};f.getColorTexture=function(a){return(a=this._colorAttachments.get(a))&&p(a)?a:null};f.attachColorTexture=
function(a,b=c.ColorAttachment.COLOR_ATTACHMENT0){a&&(this._validateColorAttachmentPoint(b),x(a.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(a.glName,b)),this._colorAttachments.set(b,a))};f.detachColorTexture=function(a=c.ColorAttachment.COLOR_ATTACHMENT0){const b=this._colorAttachments.get(a);if(p(b))return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,a)),this._colorAttachments.delete(a),
b};f.setColorTextureTarget=function(a,b=c.ColorAttachment.COLOR_ATTACHMENT0){const d=this._colorAttachments.get(b);p(d)&&this._framebufferTexture2D(d.glName,b,a)};f.attachDepthStencilTexture=function(a){if(!w.isNone(a)){var b=a.descriptor;b.pixelFormat!==c.PixelFormat.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!");b.dataType!==c.PixelType.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!");this._context.capabilities.depthTexture||
console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!");x(b,this._desc);this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==c.DepthStencilTargetType.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=c.DepthStencilTargetType.DEPTH_STENCIL_TEXTURE);this._disposeDepthStencilAttachments();this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(a.glName,c.DepthStencilAttachment));this._depthStencilTexture=
a}};f.detachDepthStencilTexture=function(){const a=this._depthStencilTexture;a&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,c.DepthStencilAttachment));this._depthStencilTexture=null;return a};f.attachDepthStencilBuffer=function(a){if(!w.isNone(a)){var b=a.descriptor;b.internalFormat!==c.RenderbufferFormat.DEPTH_STENCIL&&b.internalFormat!==c.RenderbufferFormat.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat");z(b,this._desc);
this._disposeDepthStencilAttachments();this._desc.depthStencilTarget=b.internalFormat===c.RenderbufferFormat.DEPTH_STENCIL?c.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER:c.DepthStencilTargetType.DEPTH_RENDER_BUFFER;this._initialized&&(this._context.bindFramebuffer(this),b=this._context.gl,b.framebufferRenderbuffer(c.FramebufferTarget.FRAMEBUFFER,this._desc.depthStencilTarget===c.DepthStencilTargetType.DEPTH_RENDER_BUFFER?b.DEPTH_ATTACHMENT:b.DEPTH_STENCIL_ATTACHMENT,b.RENDERBUFFER,a.glName));
this._depthAttachment=a}};f.detachDepthStencilBuffer=function(){const a=this._context.gl,b=this._depthAttachment;b&&this._initialized&&(this._context.bindFramebuffer(this),a.framebufferRenderbuffer(c.FramebufferTarget.FRAMEBUFFER,this._desc.depthStencilTarget===c.DepthStencilTargetType.DEPTH_RENDER_BUFFER?a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,null));this._depthAttachment=null;return b};f.detachAll=function(){this._colorAttachments.forEach((a,b)=>this._detachColorAttachment(b));
this.detachDepthStencilBuffer();this.detachDepthStencilTexture()};f.copyToTexture=function(a,b,d,e,l,g,h){(0>a||0>b||0>l||0>g)&&console.error("Offsets cannot be negative!");(0>=d||0>=e)&&console.error("Copy width and height must be greater than zero!");var m=this._desc;const n=h.descriptor;h.descriptor.target!==c.TextureType.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!");(a+d>m.width||b+e>m.height||l+d>n.width||g+e>n.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");
m=this._context;h=m.bindTexture(h,q.Texture.TEXTURE_UNIT_FOR_UPDATES);m.setActiveTexture(q.Texture.TEXTURE_UNIT_FOR_UPDATES);m.bindFramebuffer(this);m.gl.copyTexSubImage2D(c.TextureType.TEXTURE_2D,0,l,g,a,b,d,e);m.bindTexture(h,q.Texture.TEXTURE_UNIT_FOR_UPDATES)};f.readPixels=function(a,b,d,e,l,g,h){(0>=d||0>=e)&&console.error("Copy width and height must be greater than zero!");h||console.error("Target memory is not initialized!");this._context.bindFramebuffer(this);this._context.gl.readPixels(a,
b,d,e,l,g,h)};f.readPixelsAsync=function(){var a=B._asyncToGenerator(function*(b,d,e,l,g,h,m){if(this._context.type!==H.ContextType.WEBGL2)y.webglDebugEnabled()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),this.readPixels(b,d,e,l,g,h,m);else{var n=this._context.gl,r=G.BufferObject.createPixelPack(this._context,c.Usage.STREAM_READ,m.byteLength);this._context.bindBuffer(r);this._context.bindFramebuffer(this);n.readPixels(b,d,e,l,g,h,0);this._context.unbindBuffer(c.BufferType.PIXEL_PACK_BUFFER);
yield r.getSubDataAsync(m);r.dispose()}});return function(b,d,e,l,g,h,m){return a.apply(this,arguments)}}();f.resize=function(a,b){const d=this._desc;if(d.width!==a||d.height!==b)if(this._initialized){d.width=a;d.height=b;this._colorAttachments.forEach(e=>{e&&e.resize(a,b)});if(null!=this._depthStencilTexture)this._depthStencilTexture.resize(a,b);else if(this._depthAttachment||this._stencilAttachment)this._depthAttachment&&this._depthAttachment.resize(a,b),this._stencilAttachment&&this._stencilAttachment.resize(a,
b);this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null);this._initialized=!1}else d.width=a,d.height=b,this._colorAttachments.forEach(e=>{e&&e.resize(a,b)}),this._depthStencilTexture&&this._depthStencilTexture.resize(a,b)};f.initializeAndBind=function(a=c.FramebufferTarget.FRAMEBUFFER){var b,d,e,l;const g=this._context.gl;if(this._initialized)g.bindFramebuffer(a,this.glName);else{this._glName&&g.deleteFramebuffer(this._glName);var h=this._context,m=g.createFramebuffer(),
n=this._desc,r=null!=(b=n.colorTarget)?b:c.TargetType.RENDER_BUFFER;b=null!=(d=n.width)?d:1;d=null!=(e=n.height)?e:1;g.bindFramebuffer(a,m);0===this._colorAttachments.size&&(r===c.TargetType.TEXTURE||r===c.TargetType.CUBEMAP?this._colorAttachments.set(c.ColorAttachment.COLOR_ATTACHMENT0,new q.Texture(h,{target:this.descriptor.colorTarget===c.TargetType.CUBEMAP?c.TextureType.TEXTURE_CUBE_MAP:c.TextureType.TEXTURE_2D,pixelFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,samplingMode:c.TextureSamplingMode.NEAREST,
wrapMode:c.TextureWrapMode.CLAMP_TO_EDGE,width:n.width,height:n.height})):(e=new t.Renderbuffer(h,{internalFormat:c.SizedPixelFormat.RGBA4,width:b,height:d}),this._colorAttachments.set(c.ColorAttachment.COLOR_ATTACHMENT0,e)));this._colorAttachments.forEach((u,F)=>{u&&(p(u)?this._framebufferTexture2D(u.glName,F,E(u),a):g.framebufferRenderbuffer(a,F,g.RENDERBUFFER,u.glName))});e=null!=(l=n.depthStencilTarget)?l:c.DepthStencilTargetType.NONE;switch(e){case c.DepthStencilTargetType.DEPTH_RENDER_BUFFER:case c.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER:this._depthAttachment||
(this._depthAttachment=new t.Renderbuffer(h,{internalFormat:n.depthStencilTarget===c.DepthStencilTargetType.DEPTH_RENDER_BUFFER?c.RenderbufferFormat.DEPTH_COMPONENT16:c.RenderbufferFormat.DEPTH_STENCIL,width:b,height:d}));g.framebufferRenderbuffer(a,e===c.DepthStencilTargetType.DEPTH_RENDER_BUFFER?g.DEPTH_ATTACHMENT:g.DEPTH_STENCIL_ATTACHMENT,g.RENDERBUFFER,this._depthAttachment.glName);break;case c.DepthStencilTargetType.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new t.Renderbuffer(h,
{internalFormat:c.RenderbufferFormat.STENCIL_INDEX8,width:b,height:d}));g.framebufferRenderbuffer(a,g.STENCIL_ATTACHMENT,g.RENDERBUFFER,this._stencilAttachment.glName);break;case c.DepthStencilTargetType.DEPTH_STENCIL_TEXTURE:this._depthStencilTexture||(h.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),this._depthStencilTexture=new q.Texture(h,{target:c.TextureType.TEXTURE_2D,pixelFormat:c.PixelFormat.DEPTH_STENCIL,
dataType:c.PixelType.UNSIGNED_INT_24_8,samplingMode:c.TextureSamplingMode.NEAREST,wrapMode:c.TextureWrapMode.CLAMP_TO_EDGE,width:b,height:d})),this._framebufferTexture2D(this._depthStencilTexture.glName,g.DEPTH_STENCIL_ATTACHMENT,E(this._depthStencilTexture),a)}y.webglValidateShadersEnabled()&&g.checkFramebufferStatus(a)!==g.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!");this._glName=m;this._initialized=!0}};f._framebufferTexture2D=function(a,b=c.ColorAttachment.COLOR_ATTACHMENT0,
d=c.TextureType.TEXTURE_2D,e=c.FramebufferTarget.FRAMEBUFFER,l=0){this._context.gl.framebufferTexture2D(e,b,d,a,l)};f._detachColorAttachment=function(a){y.webglDebugEnabled()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const b=this._context.gl,d=this._colorAttachments.get(a);p(d)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,a)):this._initialized&&(this._context.bindFramebuffer(this),b.framebufferRenderbuffer(c.FramebufferTarget.FRAMEBUFFER,
a,b.RENDERBUFFER,null));this._colorAttachments.delete(a);return d};f._disposeColorAttachments=function(){this._colorAttachments.forEach((a,b)=>{this._detachColorAttachment(b);a.dispose()});this._colorAttachments.clear()};f._disposeDepthStencilAttachments=function(){const a=this._context.gl;this._depthAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),a.framebufferRenderbuffer(c.FramebufferTarget.FRAMEBUFFER,this._desc.depthStencilTarget===c.DepthStencilTargetType.DEPTH_RENDER_BUFFER?
a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,null)),this._depthAttachment.dispose(),this._depthAttachment=null);this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),a.framebufferRenderbuffer(c.FramebufferTarget.FRAMEBUFFER,a.STENCIL_ATTACHMENT,a.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null);this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,a.DEPTH_STENCIL_ATTACHMENT)),
this._depthStencilTexture.dispose(),this._depthStencilTexture=null)};f._validateColorAttachmentPoint=function(a){if(-1===k._MAX_COLOR_ATTACHMENTS){const b=this._context.capabilities.drawBuffers;k._MAX_COLOR_ATTACHMENTS=b?this._context.gl.getParameter(b.MAX_COLOR_ATTACHMENTS):1}a-=c.ColorAttachment.COLOR_ATTACHMENT0;a+1>k._MAX_COLOR_ATTACHMENTS&&I.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${a+1}. Implementation supports up to ${k._MAX_COLOR_ATTACHMENTS} color attachments`)};
B._createClass(k,[{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._desc}},{key:"colorTexture",get:function(){const a=this._colorAttachments.get(c.ColorAttachment.COLOR_ATTACHMENT0);return a&&p(a)?a:null}},{key:"colorAttachment",get:function(){return this._colorAttachments.get(c.ColorAttachment.COLOR_ATTACHMENT0)}},{key:"depthStencilAttachment",get:function(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}},{key:"depthStencilTexture",
get:function(){return this._depthStencilTexture}},{key:"width",get:function(){return this._desc.width}},{key:"height",get:function(){return this._desc.height}},{key:"gpuMemoryUsage",get:function(){return[...this._colorAttachments].reduce((a,[,b])=>a+C.getGpuMemoryUsage(b),0)+C.getGpuMemoryUsage(this.depthStencilAttachment)}}]);return k}();v._MAX_COLOR_ATTACHMENTS=-1;A.FramebufferObject=v;Object.defineProperties(A,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});