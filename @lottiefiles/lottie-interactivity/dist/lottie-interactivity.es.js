function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function o(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}var r={player:"lottie-player"},a=function(){function a(){var n=this,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,u=c.actions,f=c.container,m=c.mode,v=c.player,d=i(c,["actions","container","mode","player"]);if(t(this,a),s.set(this,{writable:!0,value:function(e){o(n,y).call(n,e.clientX,e.clientY)}}),l.set(this,{writable:!0,value:function(){o(n,y).call(n,-1,-1)}}),y.set(this,{writable:!0,value:function(e,t){if(-1!==e&&-1!==t){var i=n.getContainerCursorPosition(e,t);e=i.x,t=i.y}var o=n.actions.find((function(n){var i=n.position;return Array.isArray(i.x)&&Array.isArray(i.y)?e>=i.x[0]&&e<=i.x[1]&&t>=i.y[0]&&t<=i.y[1]:!Number.isNaN(i.x)&&!Number.isNaN(i.y)&&(e===i.x&&t===i.y)}));if(o)if("seek"===o.type){var r=(e-o.position.x[0])/(o.position.x[1]-o.position.x[0]),a=(t-o.position.y[0])/(o.position.y[1]-o.position.y[0]);n.player.playSegments(o.frames,!0),n.player.goToAndStop(Math.ceil((r+a)/2*n.player.totalFrames),!0)}else"loop"===o.type?n.player.playSegments(o.frames,!0):"play"===o.type?(!0===n.player.isPaused&&n.player.resetSegments(),n.player.playSegments(o.frames)):"stop"===o.type&&n.player.goToAndStop(o.frames[0],!0)}}),p.set(this,{writable:!0,value:function(){var e=n.getContainerVisibility(),t=n.actions.find((function(t){var n=t.visibility;return e>=n[0]&&e<=n[1]}));t&&("seek"===t.type?(n.player.playSegments(t.frames,!0),n.player.goToAndStop(Math.ceil((e-t.visibility[0])/(t.visibility[1]-t.visibility[0])*n.player.totalFrames),!0)):"loop"===t.type?n.player.playSegments(t.frames,!0):"play"===t.type?!0===n.player.isPaused&&(n.player.resetSegments(),n.player.play()):"stop"===t.type&&n.player.goToAndStop(t.frames[0],!0))}}),"object"!==e(v)||"AnimationItem"!==v.constructor.name){if("string"==typeof v){var h=document.querySelector(v);h&&"LOTTIE-PLAYER"===h.nodeName&&(v=h.getLottie())}else v instanceof HTMLElement&&"LOTTIE-PLAYER"===v.nodeName&&(v=v.getLottie());if(!v)throw new Error("".concat("[lottieInteractivity]:"," Specified player is invalid."),v)}"string"==typeof f&&(f=document.querySelector(f)),f||(f=v.wrapper),this.player=v,this.container=f,this.mode=m,this.actions=u,this.options=d}var c,u,f;return c=a,(u=[{key:"getContainerVisibility",value:function(){var e=this.container.getBoundingClientRect(),t=e.top,n=e.height;return(window.innerHeight-t)/(window.innerHeight+n)}},{key:"getContainerCursorPosition",value:function(e,t){var n=this.container.getBoundingClientRect(),i=n.top;return{x:(e-n.left)/n.width,y:(t-i)/n.height}}},{key:"start",value:function(){this.player.loop=!0,this.player.stop(),"scroll"===this.mode&&window.addEventListener("scroll",o(this,p)),"cursor"===this.mode&&(this.container.addEventListener("mousemove",o(this,s)),this.container.addEventListener("mouseout",o(this,l)))}},{key:"stop",value:function(){"scroll"===this.mode&&window.removeEventListener("scroll",o(this,p)),"cursor"===this.mode&&(this.container.addEventListener("mousemove",o(this,s)),this.container.addEventListener("mouseout",o(this,l)))}}])&&n(c.prototype,u),f&&n(c,f),a}(),s=new WeakMap,l=new WeakMap,y=new WeakMap,p=new WeakMap,c=function(e){var t=new a(e);return t.start(),t};export default c;export{a as LottieInteractivity,c as create};
//# sourceMappingURL=lottie-interactivity.es.js.map
