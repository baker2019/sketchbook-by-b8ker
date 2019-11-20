/* !
 * Material Design for Bootstrap 4
 * Version: MDB Lite 4.8.11
 *
 *
 * Copyright: Material Design for Bootstrap
 * https://mdbootstrap.com/
 *
 * Read the license: https://mdbootstrap.com/license/
 *
 *
 * Documentation: https://mdbootstrap.com/
 *
 * Getting started: https://mdbootstrap.com/getting-started/
 *
 * Tutorials: https://mdbootstrap.com/bootstrap-tutorial/
 *
 * Templates: https://mdbootstrap.com/templates/
 *
 * Support: https://mdbootstrap.com/forums/forum/support/
 *
 * Contact: office@mdbootstrap.com
 *
 * Attribution: Animate CSS, Twitter Bootstrap, Materialize CSS, Normalize CSS, Waves JS, WOW JS, Toastr, Chart.js
 *
 */


/*

  jquery.easing.js
  velocity.js
  wow.js
  scrolling-navbar.js
  waves.js
  forms-free.js
  preloading.js
  cards.js
  character-counter.js
  toastr.js
  smooth-scroll.js
  dropdown.js
  buttons.js
  sidenav.js
  collapsible.js
  range-input.js
  file-input.js
  material-select.js
  jquery.sticky.js
  scrollbar.js
  mdb-autocomplete.js
  enhanced-modals.js
  treeview.js

*/

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,a=r.type(e);return"function"===a||r.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(t in e);return void 0===t||o.call(e,t)},r.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},r.data=function(e,t,n){if(void 0===n){var o=e[r.expando],i=o&&a[o];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var o=e[r.expando]||(e[r.expando]=++r.uuid);return a[o]=a[o]||{},a[o][t]=n,n}},r.removeData=function(e,t){var n=e[r.expando],o=n&&a[n];o&&r.each(t,function(e,t){delete o[t]})},r.extend=function(){var e,t,a,n,o,i,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(o=arguments[l]))for(n in o)e=s[n],a=o[n],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,i=e&&r.isArray(e)?e:[]):i=e&&r.isPlainObject(e)?e:{},s[n]=r.extend(c,i,a)):void 0!==a&&(s[n]=a));return s},r.queue=function(e,a,n){function o(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return n?(!i||r.isArray(n)?i=r.data(e,a,o(n)):i.push(n),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var n=r.queue(a,t),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),o.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-n.top,left:a.left-n.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var n={},o=n.hasOwnProperty,i=n.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)n["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function i(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return m.isString(e)?b.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e){var t=(new Date).getTime(),r=b.State.calls.length;r>1e4&&(b.State.calls=n(b.State.calls));for(var o=0;r>o;o++)if(b.State.calls[o]){var s=b.State.calls[o],l=s[0],u=s[2],d=s[3],g=!!d,y=null;d||(d=b.State.calls[o][3]=t-16);for(var h=Math.min((t-d)/u.duration,1),v=0,x=l.length;x>v;v++){var P=l[v],V=P.element;if(i(V)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){S.setPropertyValue(V,"display",t)})}S.setPropertyValue(V,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&S.setPropertyValue(V,"visibility",u.visibility);for(var k in P)if("element"!==k){var A,F=P[k],j=m.isString(F.easing)?b.Easings[F.easing]:F.easing;if(1===h)A=F.endValue;else{var E=F.endValue-F.startValue;if(A=F.startValue+E*j(h,u,E),!g&&A===F.currentValue)continue}if(F.currentValue=A,"tween"===k)y=A;else{if(S.Hooks.registered[k]){var H=S.Hooks.getRoot(k),N=i(V).rootPropertyValueCache[H];N&&(F.rootPropertyValue=N)}var L=S.setPropertyValue(V,k,F.currentValue+(0===parseFloat(A)?"":F.unitType),F.rootPropertyValue,F.scrollData);S.Hooks.registered[k]&&(i(V).rootPropertyValueCache[H]=S.Normalizations.registered[H]?S.Normalizations.registered[H]("extract",null,L[1]):L[1]),"transform"===L[0]&&(C=!0)}}u.mobileHA&&i(V).transformCache.translate3d===a&&(i(V).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&S.flushTransformCache(V)}}u.display!==a&&"none"!==u.display&&(b.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(b.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],h,Math.max(0,d+u.duration-t),d,y),1===h&&p(o)}}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],n=b.State.calls[e][1],o=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&S.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&S.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(d=!0,delete i(p).transformCache[t])}),o.mobileHA&&(d=!0,delete i(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(g){setTimeout(function(){throw g},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&(f.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&f.dequeue(p,o.queue)}b.State.calls[e]=!1;for(var m=0,y=b.State.calls.length;y>m;m++)if(b.State.calls[m]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(f=e,y=!0):f=t.Velocity.Utilities,8>=d&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var h=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,f=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,l.tension=e,l.friction=t,o=null!==n,o?(c=a(e,t),i=c/n*f):i=f;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++){var t="color"===S.Lists.colors[e]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(d)for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(S.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),S.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;S.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var n,o,i=a[0],s=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(S.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":b.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(S.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:S.RegEx.isHex.test(n)?i="rgb("+S.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=d?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=d?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[n]))return b.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var m=s(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);n===a&&(n=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(n=S.Normalizations.registered[c]("extract",e,n)),l=S.Hooks.extractValue(u,n)}else if(S.Normalizations.registered[r]){var p,g;p=S.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(m){l=0}else l=e.getAttribute(r);else l=s(e,S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);n=n||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,n),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;f.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var n=a;return e=o(e),f.each(e,function(e,o){if(i(o)===a&&b.init(o),r===a)n===a&&(n=b.CSS.getPropertyValue(o,t));else{var s=b.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(o),n=s}}),n};var P=function(){function e(){return s?k.promise||null:l}function n(){function e(e){function p(e,t){var r=a,n=a,i=a;return m.isArray(e)?(r=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||S.RegEx.isHex.test(e[1])?i=e[1]:(m.isString(e[1])&&!S.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),m.isFunction(r)&&(r=r.call(o,V,w)),m.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function h(){var e={myParent:o.parentNode||r.body,position:S.getPropertyValue(o,"position"),fontSize:S.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(g,g)}catch(x){setTimeout(function(){throw x},1)}if("scroll"===A){var P,C,T,F=/^x$/i.test(s.axis)?"Left":"Top",j=parseFloat(s.offset)||0;s.container?m.isWrapped(s.container)||m.isNode(s.container)?(s.container=s.container[0]||s.container,P=s.container["scroll"+F],T=P+f(o).position()[F.toLowerCase()]+j):s.container=null:(P=b.State.scrollAnchor[b.State["scrollProperty"+F]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===F?"Top":"Left")]],T=f(o).offset()[F.toLowerCase()]+j),l={scroll:{rootPropertyValue:!1,startValue:P,currentValue:P,endValue:T,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:F,alternateValue:C}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=f.extend({},i(o).opts,s);var E=f.extend(!0,{},i(o).tweensContainer);for(var H in E)if("element"!==H){var N=E[H].startValue;E[H].startValue=E[H].currentValue=E[H].endValue,E[H].endValue=N,m.isEmptyObject(v)||(E[H].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(E[H]),o)}l=E}else if("start"===A){var E;i(o).tweensContainer&&i(o).isAnimating===!0&&(E=i(o).tweensContainer),f.each(y,function(e,t){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(S.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=S.Values.hexToRgb(n),u=i?S.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),y[e+s[c]]=f}delete y[e]}}});for(var z in y){var O=p(y[z]),q=O[0],$=O[1],M=O[2];z=S.Names.camelCase(z);var I=S.Hooks.getRoot(z),B=!1;if(i(o).isSVG||"tween"===I||S.Names.prefixCheck(I)[1]!==!1||S.Normalizations.registered[I]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!M&&0!==q&&(M=0),s._cacheValues&&E&&E[z]?(M===a&&(M=E[z].endValue+E[z].unitType),B=i(o).rootPropertyValueCache[I]):S.Hooks.registered[z]?M===a?(B=S.getPropertyValue(o,I),M=S.getPropertyValue(o,z,B)):B=S.Hooks.templates[I][1]:M===a&&(M=S.getPropertyValue(o,z));var W,G,Y,D=!1;if(W=d(z,M),M=W[0],Y=W[1],W=d(z,q),q=W[0].replace(/^([+-\/*])=/,function(e,t){return D=t,""}),G=W[1],M=parseFloat(M)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,G="em"):/^scale/.test(z)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,G="")),/[\/*]/.test(D))G=Y;else if(Y!==G&&0!==M)if(0===q)G=Y;else{n=n||h();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)||"x"===z?"x":"y";switch(Y){case"%":M*="x"===Q?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:M*=n[Y+"ToPx"]}switch(G){case"%":M*=1/("x"===Q?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:M*=1/n[G+"ToPx"]}}switch(D){case"+":q=M+q;break;case"-":q=M-q;break;case"*":q=M*q;break;case"/":q=M/q}l[z]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:q,unitType:G,easing:$},b.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(l[z]),o)}else b.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}l.element=o}l.element&&(S.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(b.State.calls.push([R,g,s,null,k.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):V++)}var n,o=this,s=f.extend({},b.defaults,v),l={};switch(i(o)===a&&b.init(o),parseFloat(s.delay)&&s.queue!==!1&&f.queue(o,s.queue,function(e){b.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=h;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!m.isFunction(s.begin)&&(s.begin=null),s.progress&&!m.isFunction(s.progress)&&(s.progress=null),s.complete&&!m.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():f.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var s,l,d,g,y,v,x=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(s=!1,d=0,g=this,l=this):(s=!0,d=1,g=x?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){x?(y=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(y=arguments[d],v=arguments[d+1]);var w=g.length,V=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(v)){var C=d+1;v={};for(var T=C;T<arguments.length;T++)m.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?m.isString(arguments[T])||m.isArray(arguments[T])?v.easing=arguments[T]:m.isFunction(arguments[T])&&(v.complete=arguments[T]):v.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(k.promise=new b.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":f.each(g,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,n){var o=v===a?"":v;return o===!0||t[2].queue===o||v===a&&t[2].queue===!1?void f.each(g,function(r,a){a===n&&((v===!0||m.isString(v))&&(f.each(f.queue(a,m.isString(v)?v:""),function(e,t){
m.isFunction(t)&&t(null,!0)}),f.queue(a,m.isString(v)?v:"",[])),"stop"===y?(i(a)&&i(a).tweensContainer&&o!==!1&&f.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e)):"finish"===y&&(t[2].duration=1))}):!0})}),"stop"===y&&(f.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(g)),e();default:if(!f.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var j=f.extend({},v),E=j.duration,H=j.delay||0;return j.backwards===!0&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(j.stagger)?j.delay=H+parseFloat(j.stagger)*e:m.isFunction(j.stagger)&&(j.delay=H+j.stagger.call(t,e,w)),j.drag&&(j.duration=parseFloat(E)||(/^(callout|transition)/.test(y)?1e3:h),j.duration=Math.max(j.duration*(j.backwards?1-e/w:(e+1)/w),.75*j.duration,200)),b.Redirects[y].call(t,t,j||{},e,w,g,k.promise?k:a)}),e()}var N="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];f.each(g,function(e,t){m.isNode(t)&&n.call(t)});var z,j=f.extend({},b.defaults,v);if(j.loop=parseInt(j.loop),z=2*j.loop-1,j.loop)for(var O=0;z>O;O++){var q={delay:j.delay,progress:j.progress};O===z-1&&(q.display=j.display,q.visibility=j.visibility,q.complete=j.complete),P(g,"reverse",q)}return e()}};b=f.extend(P,b),b.animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(i,i),s&&s.resolver(i)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}));

/*!
 * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.bsCustomFileInput = factory());
}(this, function () {
  'use strict';

  var Selector = {
    CUSTOMFILE: '.custom-file input[type="file"]',
    CUSTOMFILELABEL: '.custom-file-label',
    FORM: 'form',
    INPUT: 'input'
  };

  var textNodeType = 3;

  var getDefaultText = function getDefaultText(input) {
    var defaultText = '';
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      defaultText = label.innerHTML;
    }

    return defaultText;
  };

  var findFirstChildNode = function findFirstChildNode(element) {
    if (element.childNodes.length > 0) {
      var childNodes = [].slice.call(element.childNodes);

      for (var i = 0; i < childNodes.length; i++) {
        var node = childNodes[i];

        if (node.nodeType !== textNodeType) {
          return node;
        }
      }
    }

    return element;
  };

  var restoreDefaultText = function restoreDefaultText(input) {
    var defaultText = input.bsCustomFileInput.defaultText;
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      element.innerHTML = defaultText;
    }
  };

  var fileApi = !!window.File;
  var FAKE_PATH = 'fakepath';
  var FAKE_PATH_SEPARATOR = '\\';

  var getSelectedFiles = function getSelectedFiles(input) {
    if (input.hasAttribute('multiple') && fileApi) {
      return [].slice.call(input.files).map(function (file) {
        return file.name;
      }).join(', ');
    }

    if (input.value.indexOf(FAKE_PATH) !== -1) {
      var splittedValue = input.value.split(FAKE_PATH_SEPARATOR);
      return splittedValue[splittedValue.length - 1];
    }

    return input.value;
  };

  function handleInputChange() {
    var label = this.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      var inputValue = getSelectedFiles(this);

      if (inputValue.length) {
        element.innerHTML = inputValue;
      } else {
        restoreDefaultText(this);
      }
    }
  }

  function handleFormReset() {
    var customFileList = [].slice.call(this.querySelectorAll(Selector.INPUT)).filter(function (input) {
      return !!input.bsCustomFileInput;
    });

    for (var i = 0, len = customFileList.length; i < len; i++) {
      restoreDefaultText(customFileList[i]);
    }
  }

  var customProperty = 'bsCustomFileInput';
  var Event = {
    FORMRESET: 'reset',
    INPUTCHANGE: 'change'
  };
  var bsCustomFileInput = {
    init: function init(inputSelector, formSelector) {
      if (inputSelector === void 0) {
        inputSelector = Selector.CUSTOMFILE;
      }

      if (formSelector === void 0) {
        formSelector = Selector.FORM;
      }

      var customFileInputList = [].slice.call(document.querySelectorAll(inputSelector));
      var formList = [].slice.call(document.querySelectorAll(formSelector));

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        Object.defineProperty(input, customProperty, {
          value: {
            defaultText: getDefaultText(input)
          },
          writable: true
        });
        handleInputChange.call(input);
        input.addEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i = 0, _len = formList.length; _i < _len; _i++) {
        formList[_i].addEventListener(Event.FORMRESET, handleFormReset);

        Object.defineProperty(formList[_i], customProperty, {
          value: true,
          writable: true
        });
      }
    },
    destroy: function destroy() {
      var formList = [].slice.call(document.querySelectorAll(Selector.FORM)).filter(function (form) {
        return !!form.bsCustomFileInput;
      });
      var customFileInputList = [].slice.call(document.querySelectorAll(Selector.INPUT)).filter(function (input) {
        return !!input.bsCustomFileInput;
      });

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        restoreDefaultText(input);
        input[customProperty] = undefined;
        input.removeEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i2 = 0, _len2 = formList.length; _i2 < _len2; _i2++) {
        formList[_i2].removeEventListener(Event.FORMRESET, handleFormReset);

        formList[_i2][customProperty] = undefined;
      }
    }
  };

  return bsCustomFileInput;

}));
//# sourceMappingURL=bs-custom-file-input.js.map

document.addEventListener("DOMContentLoaded", function () {

  bsCustomFileInput.init()
});

'use strict';

var WOW;

(function ($) {
  WOW = function WOW() {
    return {
      init: function init() {
        var animationName = [];
        var once = 1;

        function mdbWow() {
          var windowHeight = window.innerHeight;
          var scroll = window.scrollY;
          $('.wow').each(function () {
            if ($(this).css('visibility') == 'visible') {
              return;
            }

            if (windowHeight + scroll - 100 > getOffset(this) && scroll < getOffset(this) || windowHeight + scroll - 100 > getOffset(this) + $(this).height() && scroll < getOffset(this) + $(this).height() || windowHeight + scroll == $(document).height() && getOffset(this) + 100 > $(document).height()) {
              var index = $(this).index('.wow');
              var delay = $(this).attr('data-wow-delay');

              if (delay) {
                delay = $(this).attr('data-wow-delay').slice(0, -1);
                var self = this;
                var timeout = parseFloat(delay) * 1000;
                $(self).addClass('animated');
                $(self).css({
                  'visibility': 'visible'
                });
                $(self).css({
                  'animation-delay': delay
                });
                $(self).css({
                  'animation-name': animationName[index]
                });
                var removeTime = $(this).css('animation-duration').slice(0, -1) * 1000;

                if ($(this).attr('data-wow-delay')) {
                  removeTime += $(this).attr('data-wow-delay').slice(0, -1) * 1000;
                }

                var self = this;
                setTimeout(function () {
                  $(self).removeClass('animated');
                }, removeTime);
              } else {
                $(this).addClass('animated');
                $(this).css({
                  'visibility': 'visible'
                });
                $(this).css({
                  'animation-name': animationName[index]
                });
                var removeTime = $(this).css('animation-duration').slice(0, -1) * 1000;
                var self = this;
                setTimeout(function () {
                  $(self).removeClass('animated');
                }, removeTime);
              }
            }
          });
        }

        function appear() {
          $('.wow').each(function () {
            var index = $(this).index('.wow');
            var delay = $(this).attr('data-wow-delay');

            if (delay) {
              delay = $(this).attr('data-wow-delay').slice(0, -1);
              var timeout = parseFloat(delay) * 1000;
              $(this).addClass('animated');
              $(this).css({
                'visibility': 'visible'
              });
              $(this).css({
                'animation-delay': delay + 's'
              });
              $(this).css({
                'animation-name': animationName[index]
              });
            } else {
              $(this).addClass('animated');
              $(this).css({
                'visibility': 'visible'
              });
              $(this).css({
                'animation-name': animationName[index]
              });
            }
          });
        }

        function hide() {
          var windowHeight = window.innerHeight;
          var scroll = window.scrollY;
          $('.wow.animated').each(function () {
            if (windowHeight + scroll - 100 > getOffset(this) && scroll > getOffset(this) + 100 || windowHeight + scroll - 100 < getOffset(this) && scroll < getOffset(this) + 100 || getOffset(this) + $(this).height > $(document).height() - 100) {
              $(this).removeClass('animated');
              $(this).css({
                'animation-name': 'none'
              });
              $(this).css({
                'visibility': 'hidden'
              });
            } else {
              var removeTime = $(this).css('animation-duration').slice(0, -1) * 1000;

              if ($(this).attr('data-wow-delay')) {
                removeTime += $(this).attr('data-wow-delay').slice(0, -1) * 1000;
              }

              var self = this;
              setTimeout(function () {
                $(self).removeClass('animated');
              }, removeTime);
            }
          });
          mdbWow();
          once--;
        }

        function getOffset(elem) {
          var box = elem.getBoundingClientRect();
          var body = document.body;
          var docEl = document.documentElement;
          var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
          var clientTop = docEl.clientTop || body.clientTop || 0;
          var top = box.top + scrollTop - clientTop;
          return Math.round(top);
        }

        $('.wow').each(function () {
          $(this).css({
            'visibility': 'hidden'
          });
          animationName[$(this).index('.wow')] = $(this).css('animation-name');
          $(this).css({
            'animation-name': 'none'
          });
        });
        $(window).scroll(function () {
          if (once) {
            hide();
          } else {
            mdbWow();
          }
        });
        appear();
      }
    };
  };
})(jQuery);
($ => {
  const SCROLLING_NAVBAR_OFFSET_TOP = 50;
  $(window).on('scroll', () => {
    const $navbar = $('.navbar');

    if ($navbar.length) {
      if ($navbar.offset().top > SCROLLING_NAVBAR_OFFSET_TOP) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    }
  });
})(jQuery);
/*!
 * Waves v0.7.6
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */


(function (window, factory) {
  'use strict';

  // AMD. Register as an anonymous module.  Wrap in function so we have access
  // to root via `this`.
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      window.Waves = factory.call(window);
      return window.Waves;
    });
  }

  // Node. Does not work with strict CommonJS, but only CommonJS-like
  // environments that support module.exports, like Node.
  else if (typeof exports === 'object') {
    module.exports = factory.call(window);
  }

  // Browser globals.
  else {
    window.Waves = factory.call(window);
  }
})(typeof window === 'object' ? window : this, function () {
  'use strict';

  var Waves = Waves || {};
  var $$ = document.querySelectorAll.bind(document);
  var toString = Object.prototype.toString;
  var isTouchAvailable = 'ontouchstart' in window;


  // Find exact position of element
  function isWindow(obj) {
    return obj !== null && obj === obj.window;
  }

  function getWindow(elem) {
    return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }

  function isObject(value) {
    var type = typeof value;
    return type === 'function' || type === 'object' && !!value;
  }

  function isDOMNode(obj) {
    return isObject(obj) && obj.nodeType > 0;
  }

  function getWavesElements(nodes) {
    var stringRepr = toString.call(nodes);

    if (stringRepr === '[object String]') {
      return $$(nodes);
    } else if (isObject(nodes) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(stringRepr) && nodes.hasOwnProperty('length')) {
      return nodes;
    } else if (isDOMNode(nodes)) {
      return [nodes];
    }

    return [];
  }

  function offset(elem) {
    var docElem, win,
      box = {
        top: 0,
        left: 0
      },
      doc = elem && elem.ownerDocument;

    docElem = doc.documentElement;

    if (typeof elem.getBoundingClientRect !== typeof undefined) {
      box = elem.getBoundingClientRect();
    }
    win = getWindow(doc);
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft
    };
  }

  function convertStyle(styleObj) {
    var style = '';

    for (var prop in styleObj) {
      if (styleObj.hasOwnProperty(prop)) {
        style += (prop + ':' + styleObj[prop] + ';');
      }
    }

    return style;
  }

  var Effect = {

    // Effect duration
    duration: 750,

    // Effect delay (check for scroll before showing effect)
    delay: 200,

    show: function (e, element, velocity) {

      // Disable right click
      if (e.button === 2) {
        return false;
      }

      element = element || this;

      // Create ripple
      var ripple = document.createElement('div');
      ripple.className = 'waves-ripple waves-rippling';
      element.appendChild(ripple);

      // Get click coordinate and element width
      var pos = offset(element);
      var relativeY = 0;
      var relativeX = 0;
      // Support for touch devices
      if ('touches' in e && e.touches.length) {
        relativeY = (e.touches[0].pageY - pos.top);
        relativeX = (e.touches[0].pageX - pos.left);
      }
      //Normal case
      else {
        relativeY = (e.pageY - pos.top);
        relativeX = (e.pageX - pos.left);
      }
      // Support for synthetic events
      relativeX = relativeX >= 0 ? relativeX : 0;
      relativeY = relativeY >= 0 ? relativeY : 0;

      var scale = 'scale(' + ((element.clientWidth / 100) * 3) + ')';
      var translate = 'translate(0,0)';

      if (velocity) {
        translate = 'translate(' + (velocity.x) + 'px, ' + (velocity.y) + 'px)';
      }

      // Attach data to element
      ripple.setAttribute('data-hold', Date.now());
      ripple.setAttribute('data-x', relativeX);
      ripple.setAttribute('data-y', relativeY);
      ripple.setAttribute('data-scale', scale);
      ripple.setAttribute('data-translate', translate);

      // Set ripple position
      var rippleStyle = {
        top: relativeY + 'px',
        left: relativeX + 'px'
      };

      ripple.classList.add('waves-notransition');
      ripple.setAttribute('style', convertStyle(rippleStyle));
      ripple.classList.remove('waves-notransition');

      // Scale the ripple
      rippleStyle['-webkit-transform'] = scale + ' ' + translate;
      rippleStyle['-moz-transform'] = scale + ' ' + translate;
      rippleStyle['-ms-transform'] = scale + ' ' + translate;
      rippleStyle['-o-transform'] = scale + ' ' + translate;
      rippleStyle.transform = scale + ' ' + translate;
      rippleStyle.opacity = '1';

      var duration = e.type === 'mousemove' ? 2500 : Effect.duration;
      rippleStyle['-webkit-transition-duration'] = duration + 'ms';
      rippleStyle['-moz-transition-duration'] = duration + 'ms';
      rippleStyle['-o-transition-duration'] = duration + 'ms';
      rippleStyle['transition-duration'] = duration + 'ms';

      ripple.setAttribute('style', convertStyle(rippleStyle));
    },

    hide: function (e, element) {
      element = element || this;

      var ripples = element.getElementsByClassName('waves-rippling');

      for (var i = 0, len = ripples.length; i < len; i++) {
        removeRipple(e, element, ripples[i]);
      }

      if (isTouchAvailable) {
        element.removeEventListener('touchend', Effect.hide);
        element.removeEventListener('touchcancel', Effect.hide);
      }

      element.removeEventListener('mouseup', Effect.hide);
      element.removeEventListener('mouseleave', Effect.hide);
    }
  };

  /**
   * Collection of wrapper for HTML element that only have single tag
   * like <input> and <img>
   */
  var TagWrapper = {

    // Wrap <input> tag so it can perform the effect
    input: function (element) {

      var parent = element.parentNode;

      // If input already have parent just pass through
      if (parent.tagName.toLowerCase() === 'span' && parent.classList.contains('waves-effect')) {
        return;
      }

      // Put element class and style to the specified parent
      var wrapper = document.createElement('span');
      wrapper.className = 'waves-input-wrapper';
      // element.className = 'waves-button-input';

      // Put element as child
      parent.replaceChild(wrapper, element);
      wrapper.appendChild(element);

    },

    // Wrap <img> tag so it can perform the effect
    img: function (element) {

      var parent = element.parentNode;

      // If input already have parent just pass through
      if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
        return;
      }

      // Put element as child
      var wrapper = document.createElement('i');
      parent.replaceChild(wrapper, element);
      wrapper.appendChild(element);

    }
  };

  /**
   * Hide the effect and remove the ripple. Must be
   * a separate function to pass the JSLint...
   */
  function removeRipple(e, el, ripple) {

    // Check if the ripple still exist
    if (!ripple) {
      return;
    }

    ripple.classList.remove('waves-rippling');

    var relativeX = ripple.getAttribute('data-x');
    var relativeY = ripple.getAttribute('data-y');
    var scale = ripple.getAttribute('data-scale');
    var translate = ripple.getAttribute('data-translate');

    // Get delay beetween mousedown and mouse leave
    var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
    var delay = 350 - diff;

    if (delay < 0) {
      delay = 0;
    }

    if (e.type === 'mousemove') {
      delay = 150;
    }

    // Fade out ripple after delay
    var duration = e.type === 'mousemove' ? 2500 : Effect.duration;

    setTimeout(function () {

      var style = {
        top: relativeY + 'px',
        left: relativeX + 'px',
        opacity: '0',

        // Duration
        '-webkit-transition-duration': duration + 'ms',
        '-moz-transition-duration': duration + 'ms',
        '-o-transition-duration': duration + 'ms',
        'transition-duration': duration + 'ms',
        '-webkit-transform': scale + ' ' + translate,
        '-moz-transform': scale + ' ' + translate,
        '-ms-transform': scale + ' ' + translate,
        '-o-transform': scale + ' ' + translate,
        'transform': scale + ' ' + translate
      };

      ripple.setAttribute('style', convertStyle(style));

      setTimeout(function () {
        try {
          el.removeChild(ripple);
        } catch (e) {
          return false;
        }
      }, duration);

    }, delay);
  }


  /**
   * Disable mousedown event for 500ms during and after touch
   */
  var TouchHandler = {

    /* uses an integer rather than bool so there's no issues with
     * needing to clear timeouts if another touch event occurred
     * within the 500ms. Cannot mouseup between touchstart and
     * touchend, nor in the 500ms after touchend. */
    touches: 0,

    allowEvent: function (e) {

      var allow = true;

      if (/^(mousedown|mousemove)$/.test(e.type) && TouchHandler.touches) {
        allow = false;
      }

      return allow;
    },
    registerEvent: function (e) {
      var eType = e.type;

      if (eType === 'touchstart') {

        TouchHandler.touches += 1; // push

      } else if (/^(touchend|touchcancel)$/.test(eType)) {

        setTimeout(function () {
          if (TouchHandler.touches) {
            TouchHandler.touches -= 1; // pop after 500ms
          }
        }, 500);

      }
    }
  };


  /**
   * Delegated click handler for .waves-effect element.
   * returns null when .waves-effect element not in "click tree"
   */
  function getWavesEffectElement(e) {

    if (TouchHandler.allowEvent(e) === false) {
      return null;
    }

    var element = null;
    var target = e.target || e.srcElement;

    while (target.parentElement) {
      if ((!(target instanceof SVGElement)) && target.classList.contains('waves-effect')) {
        element = target;
        break;
      }
      target = target.parentElement;
    }

    return element;
  }

  /**
   * Bubble the click and show effect if .waves-effect elem was found
   */
  function showEffect(e) {

    // Disable effect if element has "disabled" property on it
    // In some cases, the event is not triggered by the current element
    // if (e.target.getAttribute('disabled') !== null) {
    //     return;
    // }

    var element = getWavesEffectElement(e);

    if (element !== null) {

      // Make it sure the element has either disabled property, disabled attribute or 'disabled' class
      if (element.disabled || element.getAttribute('disabled') || element.classList.contains('disabled')) {
        return;
      }

      TouchHandler.registerEvent(e);

      if (e.type === 'touchstart' && Effect.delay) {

        var hidden = false;

        var timer = setTimeout(function () {
          timer = null;
          Effect.show(e, element);
        }, Effect.delay);

        var hideEffect = function (hideEvent) {

          // if touch hasn't moved, and effect not yet started: start effect now
          if (timer) {
            clearTimeout(timer);
            timer = null;
            Effect.show(e, element);
          }
          if (!hidden) {
            hidden = true;
            Effect.hide(hideEvent, element);
          }

          removeListeners();
        };

        var touchMove = function (moveEvent) {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          hideEffect(moveEvent);

          removeListeners();
        };

        element.addEventListener('touchmove', touchMove, false);
        element.addEventListener('touchend', hideEffect, false);
        element.addEventListener('touchcancel', hideEffect, false);

        var removeListeners = function () {
          element.removeEventListener('touchmove', touchMove);
          element.removeEventListener('touchend', hideEffect);
          element.removeEventListener('touchcancel', hideEffect);
        };
      } else {

        Effect.show(e, element);

        if (isTouchAvailable) {
          element.addEventListener('touchend', Effect.hide, false);
          element.addEventListener('touchcancel', Effect.hide, false);
        }

        element.addEventListener('mouseup', Effect.hide, false);
        element.addEventListener('mouseleave', Effect.hide, false);
      }
    }
  }

  Waves.init = function (options) {
    var body = document.body;

    options = options || {};

    if ('duration' in options) {
      Effect.duration = options.duration;
    }

    if ('delay' in options) {
      Effect.delay = options.delay;
    }

    if (isTouchAvailable) {
      body.addEventListener('touchstart', showEffect, false);
      body.addEventListener('touchcancel', TouchHandler.registerEvent, false);
      body.addEventListener('touchend', TouchHandler.registerEvent, false);
    }

    body.addEventListener('mousedown', showEffect, false);
  };


  /**
   * Attach Waves to dynamically loaded inputs, or add .waves-effect and other
   * waves classes to a set of elements. Set drag to true if the ripple mouseover
   * or skimming effect should be applied to the elements.
   */
  Waves.attach = function (elements, classes) {

    elements = getWavesElements(elements);

    if (toString.call(classes) === '[object Array]') {
      classes = classes.join(' ');
    }

    classes = classes ? ' ' + classes : '';

    var element, tagName;

    for (var i = 0, len = elements.length; i < len; i++) {

      element = elements[i];
      tagName = element.tagName.toLowerCase();

      if (['input', 'img'].indexOf(tagName) !== -1) {
        TagWrapper[tagName](element);
        element = element.parentElement;
      }

      if (element.className.indexOf('waves-effect') === -1) {
        element.className += ' waves-effect' + classes;
      }
    }
  };


  /**
   * Cause a ripple to appear in an element via code.
   */
  Waves.ripple = function (elements, options) {
    elements = getWavesElements(elements);
    var elementsLen = elements.length;

    options = options || {};
    options.wait = options.wait || 0;
    options.position = options.position || null; // default = centre of element


    if (elementsLen) {
      var element, pos, off, centre = {},
        i = 0;
      var mousedown = {
        type: 'mousedown',
        button: 1
      };
      var hideRipple = function (mouseup, element) {
        return function () {
          Effect.hide(mouseup, element);
        };
      };

      for (; i < elementsLen; i++) {
        element = elements[i];
        pos = options.position || {
          x: element.clientWidth / 2,
          y: element.clientHeight / 2
        };

        off = offset(element);
        centre.x = off.left + pos.x;
        centre.y = off.top + pos.y;

        mousedown.pageX = centre.x;
        mousedown.pageY = centre.y;

        Effect.show(mousedown, element);

        if (options.wait >= 0 && options.wait !== null) {
          var mouseup = {
            type: 'mouseup',
            button: 1
          };

          setTimeout(hideRipple(mouseup, element), options.wait);
        }
      }
    }
  };

  /**
   * Remove all ripples from an element.
   */
  Waves.calm = function (elements) {
    elements = getWavesElements(elements);
    var mouseup = {
      type: 'mouseup',
      button: 1
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      Effect.hide(mouseup, elements[i]);
    }
  };

  /**
   * Deprecated API fallback
   */
  Waves.displayEffect = function (options) {
    console.error('Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect');
    Waves.init(options);
  };

  return Waves;
});
$(document).ready(function () {
  //Initialization
  Waves.attach('.btn:not(.btn-flat), .btn-floating', ['waves-light']);
  Waves.attach('.btn-flat', ['waves-effect']);
  Waves.attach('.chip', ['waves-effect']);
  Waves.attach('.view a .mask', ['waves-light']);
  Waves.attach('.waves-light', ['waves-light']);
  Waves.attach('.navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)', ['waves-light']);
  Waves.attach('.pager li a', ['waves-light']);
  Waves.attach('.pagination .page-item .page-link', ['waves-effect']);
  Waves.init();
});

($ => {
  const inputSelector = `${['text', 'password', 'email', 'url', 'tel', 'number', 'search', 'search-md'].map(selector => `input[type=${selector}]`).join(', ')}, textarea`;
  const textAreaSelector = '.materialize-textarea';

  const updateTextFields = $input => {
    const $labelAndIcon = $input.siblings('label, i');
    const hasValue = $input.val().length;
    const hasPlaceholder = $input.attr('placeholder');
    const addOrRemove = `${hasValue || hasPlaceholder ? 'add' : 'remove'}Class`;
    $labelAndIcon[addOrRemove]('active');
  };

  const validateField = $input => {
    if ($input.hasClass('validate')) {
      const value = $input.val();
      const noValue = !value.length;
      const isValid = !$input[0].validity.badInput;

      if (noValue && isValid) {
        $input.removeClass('valid').removeClass('invalid');
      } else {
        const valid = $input.is(':valid');
        const length = Number($input.attr('length')) || 0;

        if (valid && (!length || length > value.length)) {
          $input.removeClass('invalid').addClass('valid');
        } else {
          $input.removeClass('valid').addClass('invalid');
        }
      }
    }
  };

  const textAreaAutoResize = () => {
    const $textarea = $(this);

    if ($textarea.val().length) {
      const $hiddenDiv = $('.hiddendiv');
      const fontFamily = $textarea.css('font-family');
      const fontSize = $textarea.css('font-size');

      if (fontSize) {
        $hiddenDiv.css('font-size', fontSize);
      }

      if (fontFamily) {
        $hiddenDiv.css('font-family', fontFamily);
      }

      if ($textarea.attr('wrap') === 'off') {
        $hiddenDiv.css('overflow-wrap', 'normal').css('white-space', 'pre');
      }

      $hiddenDiv.text(`${$textarea.val()}\n`);
      const content = $hiddenDiv.html().replace(/\n/g, '<br>');
      $hiddenDiv.html(content); // When textarea is hidden, width goes crazy.
      // Approximate with half of window size

      $hiddenDiv.css('width', $textarea.is(':visible') ? $textarea.width() : $(window).width() / 2);
      $textarea.css('height', $hiddenDiv.height());
    }
  };

  $(inputSelector).each((index, input) => {
    const $this = $(input);
    const $labelAndIcon = $this.siblings('label, i');
    updateTextFields($this);
    const isValid = input.validity.badInput;

    if (isValid) {
      $labelAndIcon.addClass('active');
    }
  });
  $(document).on('focus', inputSelector, e => {
    $(e.target).siblings('label, i').addClass('active');
  });
  $(document).on('blur', inputSelector, e => {
    const $this = $(e.target);
    const noValue = !$this.val();
    const invalid = !e.target.validity.badInput;
    const noPlaceholder = $this.attr('placeholder') === undefined;

    if (noValue && invalid && noPlaceholder) {
      $this.siblings('label, i').removeClass('active');
    }

    validateField($this);
  });
  $(document).on('change', inputSelector, e => {
    const $this = $(e.target);
    updateTextFields($this);
    validateField($this);
  });
  $('input[autofocus]').siblings('label, i').addClass('active');
  $(document).on('reset', e => {
    const $formReset = $(e.target);

    if ($formReset.is('form')) {
      const $formInputs = $formReset.find(inputSelector);
      $formInputs.removeClass('valid').removeClass('invalid').each((index, input) => {
        const $this = $(input);
        const noDefaultValue = !$this.val();
        const noPlaceholder = !$this.attr('placeholder');

        if (noDefaultValue && noPlaceholder) {
          $this.siblings('label, i').removeClass('active');
        }
      });
      $formReset.find('select.initialized').each((index, select) => {
        const $select = $(select);
        const $visibleInput = $select.siblings('input.select-dropdown');
        const defaultValue = $select.children('[selected]').val();
        $select.val(defaultValue);
        $visibleInput.val(defaultValue);
      });
    }
  });

  function init() {
    const $text = $('.md-textarea-auto');

    if ($text.length) {
      let observe;

      if (window.attachEvent) {
        observe = function (element, event, handler) {
          element.attachEvent(`on${event}`, handler);
        };
      } else {
        observe = function (element, event, handler) {
          element.addEventListener(event, handler, false);
        };
      }

      $text.each(function () {
        const self = this;

        function resize() {
          self.style.height = 'auto';
          self.style.height = `${self.scrollHeight}px`;
        }

        function delayedResize() {
          window.setTimeout(resize, 0);
        }

        observe(self, 'change', resize);
        observe(self, 'cut', delayedResize);
        observe(self, 'paste', delayedResize);
        observe(self, 'drop', delayedResize);
        observe(self, 'keydown', delayedResize);
        resize();
      });
    }
  }

  init();
  const $body = $('body');

  if (!$('.hiddendiv').first().length) {
    const $hiddenDiv = $('<div class="hiddendiv common"></div>');
    $body.append($hiddenDiv);
  }

  $(textAreaSelector).each(textAreaAutoResize);
  $body.on('keyup keydown', textAreaSelector, textAreaAutoResize);
})(jQuery);
// 'use strict';
let loader_path = '../dev/dist/mdb-addons/preloader.html';
let windowLoaded = false;
$(window).on('load', function () {
  windowLoaded = true;
});
$(document).ready(function () {
  $('body').attr('aria-busy', true);
  $('#preloader-markup').load(loader_path, function () {
    if (windowLoaded) {
      $('#mdb-preloader').fadeOut('slow');
      $('body').removeAttr('aria-busy');
    } else {
      $(window).on('load', function () {
        $('#mdb-preloader').fadeOut('slow');
        $('body').removeAttr('aria-busy');
      });
    }
  });
});
(function ($) {
  $(document).on('click.card', '.card', function (e) {
    const $reveal = $(this).find('.card-reveal');

    if ($reveal.length) {
      const $clicked = $(e.target);
      const isTitle = $clicked.is('.card-reveal .card-title');
      const isTitleIcon = $clicked.is('.card-reveal .card-title i');
      const isActivator = $clicked.is('.card .activator');
      const isActivatorIcon = $clicked.is('.card .activator i');

      if (isTitle || isTitleIcon) {
        // down
        $(this).find('.card-reveal').velocity({
          translateY: 0
        }, {
          duration: 225,
          queue: false,
          easing: 'easeInOutQuad',
          complete: function complete() {
            $(this).css({
              display: 'none'
            });
          }
        });
      } else if (isActivator || isActivatorIcon) {
        // up
        $(this).find('.card-reveal').css({
          display: 'block'
        }).velocity('stop', false).velocity({
          translateY: '-100%'
        }, {
          duration: 300,
          queue: false,
          easing: 'easeInOutQuad'
        });
      }
    }
  });
  $('.rotate-btn').on('click', function () {
    const cardId = $(this).attr('data-card');
    $(`#${cardId}`).toggleClass('flipped');
  });
  $(window).on('load', function () {
    const frontHeight = $('.front').outerHeight();
    const backHeight = $('.back').outerHeight();

    if (frontHeight > backHeight) {
      $('.card-wrapper, .back').height(frontHeight);
    } else if (frontHeight > backHeight) {
      $('.card-wrapper, .front').height(backHeight);
    } else {
      $('.card-wrapper').height(backHeight);
    }
  });
  $('.card-share > a').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('share-expanded').parent().find('div').toggleClass('social-reveal-active');
  });
})(jQuery);

$('.map-card').click(function () {
  $('.card-body').toggleClass('closed');
});
(function ($) {
  $.fn.characterCounter = function () {
    return this.each(function () {
      const itHasLengthAttribute = $(this).attr('length') !== undefined;

      if (itHasLengthAttribute) {
        $(this).on('input', updateCounter);
        $(this).on('focus', updateCounter);
        $(this).on('blur', removeCounterElement);
        addCounterElement($(this));
      }
    });
  };

  function updateCounter() {
    const maxLength = Number($(this).attr('length'));
    const actualLength = Number($(this).val().length);
    const isValidLength = actualLength <= maxLength;
    $(this).parent().find('span[class="character-counter"]').html(`${actualLength}/${maxLength}`);
    addInputStyle(isValidLength, $(this));
  }

  function addCounterElement($input) {
    const $counterElement = $('<span/>').addClass('character-counter').css('float', 'right').css('font-size', '12px').css('height', 1);
    $input.parent().append($counterElement);
  }

  function removeCounterElement() {
    $(this).parent().find('span[class="character-counter"]').html('');
  }

  function addInputStyle(isValidLength, $input) {
    const inputHasInvalidClass = $input.hasClass('invalid');

    if (isValidLength && inputHasInvalidClass) {
      $input.removeClass('invalid');
    } else if (!isValidLength && !inputHasInvalidClass) {
      $input.removeClass('valid');
      $input.addClass('invalid');
    }
  }

  $(document).ready(() => {
    $('input, textarea').characterCounter();
  });
})(jQuery);
/*
 * Toastr
 * Copyright 2012-2015
 * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */
/* global define */
; (function (define) {
    define(['jquery'], function ($) {
        return (function () {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
            };

            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                subscribe: subscribe,
                success: success,
                version: '2.1.1',
                warning: warning
            };

            var previousToast;

            return toastr;

            ////////////////

            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function getContainer(options, create) {
                if (!options) { options = getOptions(); }
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
                }
                if (create) {
                    $container = createContainer(options);
                }
                return $container;
            }

            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function subscribe(callback) {
                listener = callback;
            }

            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function clear($toastElement, clearOptions) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if (!clearToast($toastElement, options, clearOptions)) {
                    clearContainer(options);
                }
            }

            function remove($toastElement) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
                }
                if ($container.children().length) {
                    $container.remove();
                }
            }

            // internal functions

            function clearContainer (options) {
                var toastsToClear = $container.children();
                for (var i = toastsToClear.length - 1; i >= 0; i--) {
                    clearToast($(toastsToClear[i]), options);
                }
            }

            function clearToast ($toastElement, options, clearOptions) {
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () { removeToast($toastElement); }
                    });
                    return true;
                }
                return false;
            }

            function createContainer(options) {
                $container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass)
                    .attr('aria-live', 'polite')
                    .attr('role', 'alert');

                $container.appendTo($(options.target));
                return $container;
            }

            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'md-toast',
                    containerId: 'toast-container',
                    debug: false,

                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 300,
                    showEasing: 'swing', //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: 'swing',
                    onHidden: undefined,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'md-toast-error',
                        info: 'md-toast-info',
                        success: 'md-toast-success',
                        warning: 'md-toast-warning'
                    },
                    iconClass: 'md-toast-info',
                    positionClass: 'md-toast-top-right',
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: 'md-toast-title',
                    messageClass: 'md-toast-message',
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false
                };
            }

            function publish(args) {
                if (!listener) { return; }
                listener(args);
            }

            function notify(map) {
                var options = getOptions();
                var iconClass = map.iconClass || options.iconClass;

                if (typeof (map.optionsOverride) !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }

                if (shouldExit(options, map)) { return; }

                toastId++;

                $container = getContainer(options, true);

                var intervalId = null;
                var $toastElement = $('<div/>');
                var $titleElement = $('<div/>');
                var $messageElement = $('<div/>');
                var $progressElement = $('<div/>');
                var $closeElement = $(options.closeHtml);
                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: toastId,
                    state: 'visible',
                    startTime: new Date(),
                    options: options,
                    map: map
                };

                personalizeToast();

                displayToast();

                handleEvents();

                publish(response);

                if (options.debug && console) {
                    console.log(response);
                }

                return $toastElement;

                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setSequence();
                }

                function handleEvents() {
                    $toastElement.hover(stickAround, delayedHideToast);
                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(hideToast);
                    }

                    if (options.closeButton && $closeElement) {
                        $closeElement.click(function (event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }
                            hideToast(true);
                        });
                    }

                    if (options.onclick) {
                        $toastElement.click(function () {
                            options.onclick();
                            hideToast();
                        });
                    }
                }

                function displayToast() {
                    $toastElement.hide();

                    $toastElement[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}
                    );

                    if (options.timeOut > 0) {
                        intervalId = setTimeout(hideToast, options.timeOut);
                        progressBar.maxHideTime = parseFloat(options.timeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                        if (options.progressBar) {
                            progressBar.intervalId = setInterval(updateProgress, 10);
                        }
                    }
                }

                function setIcon() {
                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }
                }

                function setSequence() {
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }
                }

                function setTitle() {
                    if (map.title) {
                        $titleElement.append(map.title).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
                }

                function setMessage() {
                    if (map.message) {
                        $messageElement.append(map.message).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }
                }

                function setCloseButton() {
                    if (options.closeButton) {
                        $closeElement.addClass('md-toast-close-button').attr('role', 'button');
                        $toastElement.prepend($closeElement);
                    }
                }

                function setProgressBar() {
                    if (options.progressBar) {
                        $progressElement.addClass('md-toast-progress');
                        $toastElement.prepend($progressElement);
                    }
                }

                function shouldExit(options, map) {
                    if (options.preventDuplicates) {
                        if (map.message === previousToast) {
                            return true;
                        } else {
                            previousToast = map.message;
                        }
                    }
                    return false;
                }

                function hideToast(override) {
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                    }
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () {
                            removeToast($toastElement);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                            }
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                        }
                    });
                }

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing}
                    );
                }

                function updateProgress() {
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
                    $progressElement.width(percentage + '%');
                }
            }

            function getOptions() {
                return $.extend({}, getDefaults(), toastr.options);
            }

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
                }
            }

        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require('jquery'));
    } else {
        window['toastr'] = factory(window['jQuery']);
    }
}));

const SMOOTH_SCROLL_DURATION = 700;
$('.smooth-scroll').on('click', 'a', function () {
  const elAttr = $(this).attr('href');

  if (typeof elAttr !== typeof undefined && elAttr.indexOf('#') === 0) {
    const offset = $(this).attr('data-offset') ? $(this).attr('data-offset') : 0;
    const setHash = $(this).parentsUntil('.smooth-scroll').last().parent().attr('data-allow-hashes');
    $('body,html').animate({
      scrollTop: $(elAttr).offset().top - offset
    }, SMOOTH_SCROLL_DURATION);

    if (typeof setHash !== typeof undefined && setHash !== false) {
      history.replaceState(null, null, elAttr);
    }

    return false;
  }
});
(function ($) {
  $.fn.scrollTo = function (elem) {
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
    return this;
  };

  $.fn.dropdown = function (option) {
    const options = $.extend({}, $.fn.dropdown.defaults, option);

    function updatePosition(origin, activates) {
      // Offscreen detection
      const windowHeight = window.innerHeight;
      const originHeight = origin.innerHeight();
      const offsetLeft = origin.offset().left;
      const offsetTop = origin.offset().top - $(window).scrollTop();
      let currAlignment = options.alignment;
      let gutterSpacing = 0;
      let leftPosition = 0; // Below Origin

      let verticalOffset = 0;

      if (options.belowOrigin === true) {
        verticalOffset = originHeight;
      } // Check for scrolling positioned container.


      let scrollOffset = 0;
      const wrapper = origin.parent();

      if (!wrapper.is('body') && wrapper[0].scrollHeight > wrapper[0].clientHeight) {
        scrollOffset = wrapper[0].scrollTop;
      }

      if (offsetLeft + activates.innerWidth() > $(window).width()) {
        // Dropdown goes past screen on right, force right alignment
        currAlignment = 'right';
      } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
        // Dropdown goes past screen on left, force left alignment
        currAlignment = 'left';
      } // Vertical bottom offscreen detection


      if (offsetTop + activates.innerHeight() > windowHeight) {
        // If going upwards still goes offscreen, just crop height of dropdown.
        if (offsetTop + originHeight - activates.innerHeight() < 0) {
          const adjustedHeight = windowHeight - offsetTop - verticalOffset;
          activates.css('max-height', adjustedHeight);
        } else {
          // Flow upwards.
          if (!verticalOffset) {
            verticalOffset += originHeight;
          }

          verticalOffset -= activates.innerHeight();
        }
      } // Handle edge alignment


      if (currAlignment === 'left') {
        gutterSpacing = options.gutter;
        leftPosition = origin.position().left + gutterSpacing;
      } else if (currAlignment === 'right') {
        const offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();
        gutterSpacing = -options.gutter;
        leftPosition = offsetRight + gutterSpacing;
      } // Position dropdown


      activates.css({
        position: 'absolute',
        top: origin.position().top + verticalOffset + scrollOffset,
        left: leftPosition
      });
    }

    this.each(function () {
      const origin = $(this);
      let isFocused = false; // Dropdown menu

      const activates = $(`#${origin.attr('data-activates')}`);

      function updateOptions() {
        if (origin.data('induration') !== undefined) {
          options.inDuration = origin.data('inDuration');
        }

        if (origin.data('outduration') !== undefined) {
          options.outDuration = origin.data('outDuration');
        }

        if (origin.data('constrainwidth') !== undefined) {
          options.constrain_width = origin.data('constrainwidth');
        }

        if (origin.data('hover') !== undefined) {
          options.hover = origin.data('hover');
        }

        if (origin.data('gutter') !== undefined) {
          options.gutter = origin.data('gutter');
        }

        if (origin.data('beloworigin') !== undefined) {
          options.belowOrigin = origin.data('beloworigin');
        }

        if (origin.data('alignment') !== undefined) {
          options.alignment = origin.data('alignment');
        }

        if (origin.data('maxheight') !== undefined) {
          options.maxHeight = origin.data('maxheight');
        }

        if (origin.data('resetscroll') !== undefined) {
          options.resetScroll = origin.data('resetscroll') === 'true';
        }
      }

      updateOptions(); // Attach dropdown to its activator

      origin.after(activates);
      /*
        Helper function to position and resize dropdown.
        Used in hover and click handler.
      */

      function placeDropdown(eventType) {
        // Check for simultaneous focus and click events.
        if (eventType === 'focus') {
          isFocused = true;
        } // Check html data attributes


        updateOptions(); // Set Dropdown state

        activates.addClass('active');
        origin.addClass('active'); // Constrain width

        if (options.constrain_width === true) {
          activates.css('width', origin.outerWidth());
        } else {
          activates.css('white-space', 'nowrap');
        }

        updatePosition(origin, activates); // Show dropdown

        activates.stop(true, true).css('opacity', 0).slideDown({
          queue: false,
          duration: options.inDuration,
          easing: 'easeOutCubic',

          complete() {
            $(this).css('height', '');
          }

        }).animate({
          opacity: 1,
          ...(options.resetScroll && {
            scrollTop: 0
          })
        }, {
          queue: false,
          duration: options.inDuration,
          easing: 'easeOutSine'
        });
      }

      function hideDropdown() {
        // Check for simultaneous focus and click events.
        isFocused = false;
        activates.fadeOut(options.outDuration);
        activates.removeClass('active');
        origin.removeClass('active');
        setTimeout(() => {
          activates.css('max-height', options.maxHeight);
        }, options.outDuration);
      } // Hover


      if (options.hover) {
        let open = false;
        origin.unbind(`click.${origin.attr('id')}`); // Hover handler to show dropdown

        origin.on('mouseenter', () => {
          // Mouse over
          if (open === false) {
            placeDropdown();
            open = true;
          }
        });
        origin.on('mouseleave', e => {
          // If hover on origin then to something other than dropdown content, then close
          const toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element

          if (!$(toEl).closest('.dropdown-content').is(activates)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });
        activates.on('mouseleave', e => {
          // Mouse out
          const toEl = e.toElement || e.relatedTarget;

          if (!$(toEl).closest('.dropdown-button').is(origin)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        }); // Click
      } else {
        // Click handler to show dropdown
        origin.unbind(`click.${origin.attr('id')}`);
        origin.bind(`click.${origin.attr('id')}`, e => {
          if (!isFocused) {
            if (origin[0] === e.currentTarget && !origin.hasClass('active') && $(e.target).closest('.dropdown-content').length === 0) {
              e.preventDefault(); // Prevents button click from moving window

              placeDropdown('click');
            } else if (origin.hasClass('active')) {
              // If origin is clicked and menu is open, close menu
              hideDropdown();
              $(document).unbind(`click.${activates.attr('id')} touchstart.${activates.attr('id')}`);
            } // If menu open, add click close handler to document


            if (activates.hasClass('active')) {
              $(document).bind(`click.${activates.attr('id')} touchstart.${activates.attr('id')}`, e => {
                if (!activates.is(e.target) && !origin.is(e.target) && !origin.find(e.target).length) {
                  hideDropdown();
                  $(document).unbind(`click.${activates.attr('id')} touchstart.${activates.attr('id')}`);
                }
              });
            }
          }
        });
      }

      origin.on('open', (e, eventType) => {
        placeDropdown(eventType);
      });
      origin.on('close', hideDropdown);
    });
    return {
      updatePosition
    };
  };

  $.fn.dropdown.defaults = {
    inDuration: 300,
    outDuration: 225,
    constrain_width: true,
    hover: false,
    gutter: 0,
    belowOrigin: false,
    alignment: 'left',
    maxHeight: '',
    resetScroll: true
  };
  $('.dropdown-button').dropdown();

  $.fn.mdbDropSearch = function (options) {
    let $mdbInput = $(this).find('input');
    this.filter((value, index) => {
      $(index).on('keyup', () => {
        let $linksInDropMenu = $mdbInput.closest('div[id]').find('a, li');

        for (let i = 0; i < $linksInDropMenu.length; i++) {
          if ($linksInDropMenu.eq(i).html().toUpperCase().indexOf($mdbInput.val().toUpperCase()) > -1) {
            $linksInDropMenu.eq(i).css({
              display: ''
            });
          } else {
            $linksInDropMenu.eq(i).css({
              display: 'none'
            });
          }
        }
      });
    });
    let settings = $.extend({
      color: '#000',
      backgroundColor: '',
      fontSize: '.9rem',
      fontWeight: '400',
      borderRadius: '',
      borderColor: ''
    }, options);
    return this.css({
      color: settings.color,
      backgroundColor: settings.backgroundColor,
      fontSize: settings.fontSize,
      fontWeight: settings.fontWeight,
      borderRadius: settings.borderRadius,
      border: settings.border,
      margin: settings.margin
    });
  };
})(jQuery);

const dropdownSelectors = $('.dropdown, .dropup'); // Custom function to read dropdown data

function dropdownEffectData(target) {
  // TODO - page level global?
  let effectInDefault = 'fadeIn';
  let effectOutDefault = 'fadeOut';
  const dropdown = $(target);
  const dropdownMenu = $('.dropdown-menu', target);
  const parentUl = dropdown.parents('ul.nav'); // If parent is ul.nav allow global effect settings

  if (parentUl.height > 0) {
    effectInDefault = parentUl.data('dropdown-in') || null;
    effectOutDefault = parentUl.data('dropdown-out') || null;
  }

  return {
    target,
    dropdown,
    dropdownMenu,
    effectIn: dropdownMenu.data('dropdown-in') || effectInDefault,
    effectOut: dropdownMenu.data('dropdown-out') || effectOutDefault
  };
} // Custom function to start effect (in or out)


function dropdownEffectStart(data, effectToStart) {
  if (effectToStart) {
    data.dropdown.addClass('dropdown-animating');
    data.dropdownMenu.addClass(['animated', effectToStart].join(' '));
  }
} // Custom function to read when animation is over


function dropdownEffectEnd(data, callbackFunc) {
  const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  data.dropdown.one(animationEnd, () => {
    data.dropdown.removeClass('dropdown-animating');
    data.dropdownMenu.removeClass(['animated', data.effectIn, data.effectOut].join(' ')); // Custom callback option, used to remove open class in out effect

    if (typeof callbackFunc === 'function') {
      callbackFunc();
    }
  });
} // Bootstrap API hooks


dropdownSelectors.on({
  'show.bs.dropdown'() {
    // On show, start in effect
    const dropdown = dropdownEffectData(this);
    dropdownEffectStart(dropdown, dropdown.effectIn);
  },

  'shown.bs.dropdown'() {
    // On shown, remove in effect once complete
    const dropdown = dropdownEffectData(this);

    if (dropdown.effectIn && dropdown.effectOut) {
      dropdownEffectEnd(dropdown);
    }
  },

  'hide.bs.dropdown'(e) {
    // On hide, start out effect
    const dropdown = dropdownEffectData(this);

    if (dropdown.effectOut) {
      e.preventDefault();
      dropdownEffectStart(dropdown, dropdown.effectOut);
      dropdownEffectEnd(dropdown, () => {
        dropdown.dropdown.removeClass('show');
        dropdown.dropdownMenu.removeClass('show');
      });
    }
  }

});
$('.multi-level-dropdown .dropdown-submenu > a').on("mouseenter", function (e) {
  var submenu = $(this);
  $('.multi-level-dropdown .dropdown-submenu .dropdown-menu').removeClass('show');
  submenu.next('.dropdown-menu').addClass('show');
  e.stopPropagation();
});
$('.multi-level-dropdown .dropdown').on("hidden.bs.dropdown", function () {
  // hide any open menus when parent closes
  $('.multi-level-dropdown .dropdown-menu.show').removeClass('show');
});
(function ($) {
  $(document).ready(() => {
    $(document).on('mouseenter', '.fixed-action-btn', function () {
      const $this = $(this);
      openFABMenu($this);
    });
    $(document).on('mouseleave', '.fixed-action-btn', function () {
      const $this = $(this);
      closeFABMenu($this);
    });
    $(document).on('click', '.fixed-action-btn > a', function () {
      const $this = $(this);
      const $menu = $this.parent();
      $menu.hasClass('active') ? openFABMenu($menu) : closeFABMenu($menu);

      if ($menu.hasClass('active')) {
        closeFABMenu($menu);
      } else {
        openFABMenu($menu);
      }
    });
  });
  $.fn.extend({
    openFAB() {
      openFABMenu($(this));
    },

    closeFAB() {
      closeFABMenu($(this));
    }

  });

  const openFABMenu = btn => {
    const fab = btn;

    if (!fab.hasClass('active')) {
      fab.addClass('active');
      const btnList = document.querySelectorAll('ul .btn-floating');
      btnList.forEach(el => {
        el.classList.add('shown');
      });
    }
  };

  const closeFABMenu = btn => {
    const fab = btn;
    fab.removeClass('active');
    const btnList = document.querySelectorAll('ul .btn-floating');
    btnList.forEach(el => {
      el.classList.remove('shown');
    });
  };

  $('.fixed-action-btn:not(.smooth-scroll) > .btn-floating').on('click', e => {
    if (!$(this).hasClass('smooth-scroll')) {
      e.preventDefault();
      toggleFABMenu($('.fixed-action-btn'));
      return false;
    }
  });

  function toggleFABMenu(btn) {
    const elem = btn;

    if (elem.hasClass('active')) {
      closeFABMenu(elem);
    } else {
      openFABMenu(elem);
    }
  }
})(jQuery);
($ => {
  const MENU_WIDTH = 240;
  const SN_BREAKPOINT = 1440;
  const MENU_WIDTH_HALF = 2;
  const MENU_LEFT_MIN_BORDER = 0.3;
  const MENU_LEFT_MAX_BORDER = -0.5;
  const MENU_RIGHT_MIN_BORDER = -0.3;
  const MENU_RIGHT_MAX_BORDER = 0.5;
  const MENU_VELOCITY_OFFSET = 10;
  const MENU_TIME_DURATION_OPEN = 300;
  const MENU_TIME_DURATION_CLOSE = 200;
  const MENU_TIME_DURATION_OVERLAY_OPEN = 50;
  const MENU_TIME_DURATION_OVERLAY_CLOSE = 200;
  const MENU_EASING_OPEN = 'easeOutQuad';
  const MENU_EASING_CLOSE = 'easeOutCubic';
  const SHOW_OVERLAY = true;
  const SHOW_CLOSE_BUTTON = false;

  class SideNav {
    constructor(element, options) {
      this.defaults = {
        MENU_WIDTH,
        edge: 'left',
        closeOnClick: false,
        breakpoint: SN_BREAKPOINT,
        timeDurationOpen: MENU_TIME_DURATION_OPEN,
        timeDurationClose: MENU_TIME_DURATION_CLOSE,
        timeDurationOverlayOpen: MENU_TIME_DURATION_OVERLAY_OPEN,
        timeDurationOverlayClose: MENU_TIME_DURATION_OVERLAY_CLOSE,
        easingOpen: MENU_EASING_OPEN,
        easingClose: MENU_EASING_CLOSE,
        showOverlay: SHOW_OVERLAY,
        showCloseButton: SHOW_CLOSE_BUTTON
      };
      this.$element = element;
      this.$elementCloned = element.clone().css({
        display: 'inline-block',
        lineHeight: '24px'
      });
      this.options = this.assignOptions(options);
      this.menuOut = false;
      this.lastTouchVelocity = {
        x: {
          startPosition: 0,
          startTime: 0,
          endPosition: 0,
          endTime: 0
        }
      };
      this.$body = $('body');
      this.$menu = $(`#${this.$element.attr('data-activates')}`);
      this.$sidenavOverlay = $('#sidenav-overlay');
      this.$dragTarget = $('<div class="drag-target"></div>');
      this.$body.append(this.$dragTarget);
      this.init();
    }

    init() {
      this.setMenuWidth();
      this.setMenuTranslation();
      this.closeOnClick();
      this.openOnClick();
      this.bindTouchEvents();
      this.showCloseButton();
      this.inputOnClick();
    }

    bindTouchEvents() {
      this.$dragTarget.on('click', () => this.removeMenu());
      this.$elementCloned.on('click', () => this.removeMenu());
      this.$dragTarget.on('touchstart', e => {
        this.lastTouchVelocity.x.startPosition = e.touches[0].clientX;
        this.lastTouchVelocity.x.startTime = Date.now();
      });
      this.$dragTarget.on('touchmove', this.touchmoveEventHandler.bind(this));
      this.$dragTarget.on('touchend', this.touchendEventHandler.bind(this));
    }

    touchmoveEventHandler(e) {
      if (e.type !== 'touchmove') {
        return;
      }

      const touch = e.touches[0];
      let touchX = touch.clientX; // calculate velocity every 20ms

      if (Date.now() - this.lastTouchVelocity.x.startTime > 20) {
        this.lastTouchVelocity.x.startPosition = touch.clientX;
        this.lastTouchVelocity.x.startTime = Date.now();
      }

      this.disableScrolling();
      const overlayExists = this.$sidenavOverlay.length !== 0;

      if (!overlayExists) {
        this.buildSidenavOverlay();
      } // Keep within boundaries


      if (this.options.edge === 'left') {
        if (touchX > this.options.MENU_WIDTH) {
          touchX = this.options.MENU_WIDTH;
        } else if (touchX < 0) {
          touchX = 0;
        }
      }

      this.translateSidenavX(touchX);
      this.updateOverlayOpacity(touchX);
    }

    panEventHandler(e) {
      if (e.gesture.pointerType !== 'touch') {
        return;
      }

      let touchX = e.gesture.center.x;
      this.disableScrolling();
      const overlayExists = this.$sidenavOverlay.length !== 0;

      if (!overlayExists) {
        this.buildSidenavOverlay();
      } // Keep within boundaries


      if (this.options.edge === 'left') {
        if (touchX > this.options.MENU_WIDTH) {
          touchX = this.options.MENU_WIDTH;
        } else if (touchX < 0) {
          touchX = 0;
        }
      }

      this.translateSidenavX(touchX);
      this.updateOverlayOpacity(touchX);
    }

    translateSidenavX(touchX) {
      if (this.options.edge === 'left') {
        const isRightDirection = touchX >= this.options.MENU_WIDTH / MENU_WIDTH_HALF;
        this.menuOut = isRightDirection;
        this.$menu.css('transform', `translateX(${touchX - this.options.MENU_WIDTH}px)`);
      } else {
        const isLeftDirection = touchX < window.innerWidth - this.options.MENU_WIDTH / MENU_WIDTH_HALF;
        this.menuOut = isLeftDirection;
        let rightPos = touchX - this.options.MENU_WIDTH / MENU_WIDTH_HALF;

        if (rightPos < 0) {
          rightPos = 0;
        }

        this.$menu.css('transform', `translateX(${rightPos}px)`);
      }
    }

    updateOverlayOpacity(touchX) {
      let overlayPercentage;

      if (this.options.edge === 'left') {
        overlayPercentage = touchX / this.options.MENU_WIDTH;
      } else {
        overlayPercentage = Math.abs((touchX - window.innerWidth) / this.options.MENU_WIDTH);
      }

      this.$sidenavOverlay.velocity({
        opacity: overlayPercentage
      }, {
        duration: 10,
        queue: false,
        easing: this.options.easingOpen
      });
    }

    buildSidenavOverlay() {
      if (this.options.showOverlay === true) {
        this.$sidenavOverlay = $('<div id="sidenav-overlay"></div>');
        this.$sidenavOverlay.css('opacity', 0).on('click', () => this.removeMenu());
        this.$body.append(this.$sidenavOverlay);
      }
    }

    disableScrolling() {
      const oldWidth = this.$body.innerWidth();
      this.$body.css('overflow', 'hidden');
      this.$body.width(oldWidth);
    }

    touchendEventHandler(e) {
      if (e.type !== 'touchend') {
        return;
      }

      const touch = e.changedTouches[0];
      this.lastTouchVelocity.x.endTime = Date.now();
      this.lastTouchVelocity.x.endPosition = touch.clientX;
      const velocityX = this.calculateTouchVelocityX();
      const touchX = touch.clientX;
      let leftPos = touchX - this.options.MENU_WIDTH;
      let rightPos = touchX - this.options.MENU_WIDTH / MENU_WIDTH_HALF;

      if (leftPos > 0) {
        leftPos = 0;
      }

      if (rightPos < 0) {
        rightPos = 0;
      }

      if (this.options.edge === 'left') {
        // If velocityX <= 0.3 then the user is flinging the menu closed so ignore this.menuOut
        if (this.menuOut && velocityX <= MENU_LEFT_MIN_BORDER || velocityX < MENU_LEFT_MAX_BORDER) {
          if (leftPos !== 0) {
            this.translateMenuX([0, leftPos], '300');
          }

          this.showSidenavOverlay();
        } else if (!this.menuOut || velocityX > MENU_LEFT_MIN_BORDER) {
          this.enableScrolling();
          this.translateMenuX([-1 * this.options.MENU_WIDTH - MENU_VELOCITY_OFFSET, leftPos], '200');
          this.hideSidenavOverlay();
        }

        this.$dragTarget.css({
          width: '10px',
          right: '',
          left: 0
        });
      } else if (this.menuOut && velocityX >= MENU_RIGHT_MIN_BORDER || velocityX > MENU_RIGHT_MAX_BORDER) {
        this.translateMenuX([0, rightPos], '300');
        this.showSidenavOverlay();
        this.$dragTarget.css({
          width: '50%',
          right: '',
          left: 0
        });
      } else if (!this.menuOut || velocityX < MENU_RIGHT_MIN_BORDER) {
        this.enableScrolling();
        this.translateMenuX([this.options.MENU_WIDTH + MENU_VELOCITY_OFFSET, rightPos], '200');
        this.hideSidenavOverlay();
        this.$dragTarget.css({
          width: '10px',
          right: 0,
          left: ''
        });
      }
    }

    calculateTouchVelocityX() {
      const distance = Math.abs(this.lastTouchVelocity.x.endPosition - this.lastTouchVelocity.x.startPosition);
      const time = Math.abs(this.lastTouchVelocity.x.endTime - this.lastTouchVelocity.x.startTime);
      return distance / time;
    }

    panendEventHandler(e) {
      if (e.gesture.pointerType !== 'touch') {
        return;
      }

      const velocityX = e.gesture.velocityX;
      const touchX = e.gesture.center.x;
      let leftPos = touchX - this.options.MENU_WIDTH;
      let rightPos = touchX - this.options.MENU_WIDTH / MENU_WIDTH_HALF;

      if (leftPos > 0) {
        leftPos = 0;
      }

      if (rightPos < 0) {
        rightPos = 0;
      }

      if (this.options.edge === 'left') {
        // If velocityX <= 0.3 then the user is flinging the menu closed so ignore this.menuOut
        if (this.menuOut && velocityX <= MENU_LEFT_MIN_BORDER || velocityX < MENU_LEFT_MAX_BORDER) {
          if (leftPos !== 0) {
            this.translateMenuX([0, leftPos], '300');
          }

          this.showSidenavOverlay();
        } else if (!this.menuOut || velocityX > MENU_LEFT_MIN_BORDER) {
          this.enableScrolling();
          this.translateMenuX([-1 * this.options.MENU_WIDTH - MENU_VELOCITY_OFFSET, leftPos], '200');
          this.hideSidenavOverlay();
        }

        this.$dragTarget.css({
          width: '10px',
          right: '',
          left: 0
        });
      } else if (this.menuOut && velocityX >= MENU_RIGHT_MIN_BORDER || velocityX > MENU_RIGHT_MAX_BORDER) {
        this.translateMenuX([0, rightPos], '300');
        this.showSidenavOverlay();
        this.$dragTarget.css({
          width: '50%',
          right: '',
          left: 0
        });
      } else if (!this.menuOut || velocityX < MENU_RIGHT_MIN_BORDER) {
        this.enableScrolling();
        this.translateMenuX([this.options.MENU_WIDTH + MENU_VELOCITY_OFFSET, rightPos], '200');
        this.hideSidenavOverlay();
        this.$dragTarget.css({
          width: '10px',
          right: 0,
          left: ''
        });
      }
    }

    translateMenuX(fromTo, duration) {
      this.$menu.velocity({
        translateX: fromTo
      }, {
        duration: typeof duration === 'string' ? Number(duration) : duration,
        queue: false,
        easing: this.options.easingOpen
      });
    }

    hideSidenavOverlay() {
      this.$sidenavOverlay.velocity({
        opacity: 0
      }, {
        duration: this.options.timeDurationOverlayClose,
        queue: false,
        easing: this.options.easingOpen,

        complete() {
          $(this).remove();
        }

      });
    }

    showSidenavOverlay() {
      this.$sidenavOverlay.velocity({
        opacity: 1
      }, {
        duration: this.options.timeDurationOverlayOpen,
        queue: false,
        easing: this.options.easingOpen
      });
    }

    enableScrolling() {
      this.$body.css({
        overflow: '',
        width: ''
      });
    }

    openOnClick() {
      this.$element.on('click', e => {
        e.preventDefault();

        if (this.menuOut === true) {
          this.removeMenu();
        } else {
          this.menuOut = true;

          if (this.options.showOverlay === true) {
            if (!$('#sidenav-overlay').length) {
              this.$sidenavOverlay = $('<div id="sidenav-overlay"></div>');
              this.$body.append(this.$sidenavOverlay);
            }
          } else {
            this.showCloseButton();
          }

          let translateX = [];

          if (this.options.edge === 'left') {
            translateX = [0, -1 * this.options.MENU_WIDTH];
          } else {
            translateX = [0, this.options.MENU_WIDTH];
          }

          if (this.$menu.css('transform') !== 'matrix(1, 0, 0, 1, 0, 0)') {
            this.$menu.velocity({
              translateX
            }, {
              duration: this.options.timeDurationOpen,
              queue: false,
              easing: this.options.easingOpen
            });
          }

          this.$sidenavOverlay.on('click', () => this.removeMenu());
          this.$sidenavOverlay.on('touchmove', this.touchmoveEventHandler.bind(this));
          this.$menu.on('touchmove', e => {
            e.preventDefault();
            this.$menu.find('.custom-scrollbar').css('padding-bottom', '30px');
          });
          this.menuOut = true;
        }
      });
    }

    closeOnClick() {
      if (this.options.closeOnClick === true) {
        this.$menu.on('click', 'a:not(.collapsible-header)', () => this.removeMenu());

        if (this.$menu.css('transform') === 'translateX(0)') {
          this.click(() => this.removeMenu());
        }
      }
    }

    showCloseButton() {
      if (this.options.showCloseButton === true) {
        this.$menu.prepend(this.$elementCloned);
        this.$menu.find('.logo-wrapper').css({
          borderTop: '1px solid rgba(153,153,153,.3)'
        });
      }
    }

    setMenuTranslation() {
      if (this.options.edge === 'left') {
        this.$menu.css('transform', 'translateX(-100%)');
        this.$dragTarget.css({
          left: 0
        });
      } else {
        this.$menu.addClass('right-aligned').css('transform', 'translateX(100%)');
        this.$dragTarget.css({
          right: 0
        });
      }

      if (this.$menu.hasClass('fixed')) {
        if (window.innerWidth > this.options.breakpoint) {
          this.$menu.css('transform', 'translateX(0)');
        }

        this.$menu.find('input[type=text]').on('touchstart', () => {
          this.$menu.addClass('transform-fix-input');
        });
        $(window).resize(() => {
          if (window.innerWidth > this.options.breakpoint) {
            if (this.$sidenavOverlay.length) {
              this.removeMenu(true);
            } else {
              this.$menu.css('transform', 'translateX(0%)');
            }
          } else if (this.menuOut === false) {
            const xValue = this.options.edge === 'left' ? '-100' : '100';
            this.$menu.css('transform', `translateX(${xValue}%)`);
          }
        });
      }
    }

    setMenuWidth() {
      const $sidenavBg = $(`#${this.$menu.attr('id')}`).find('> .sidenav-bg');

      if (this.options.MENU_WIDTH !== MENU_WIDTH) {
        this.$menu.css('width', this.options.MENU_WIDTH);
        $sidenavBg.css('width', this.options.MENU_WIDTH);
      }
    }

    inputOnClick() {
      this.$menu.find('input[type=text]').on('touchstart', () => this.$menu.css('transform', 'translateX(0)'));
    }

    assignOptions(newOptions) {
      return $.extend({}, this.defaults, newOptions);
    }

    removeMenu(restoreMenu) {
      this.$body.css({
        overflow: '',
        width: ''
      });
      this.$menu.velocity({
        translateX: this.options.edge === 'left' ? '-100%' : '100%'
      }, {
        duration: this.options.timeDurationClose,
        queue: false,
        easing: this.options.easingClose,
        complete: () => {
          if (restoreMenu === true) {
            this.$menu.removeAttr('style');
            this.$menu.css('width', this.options.MENU_WIDTH);
          }
        }
      });

      if (this.$menu.hasClass('transform-fix-input')) {
        this.$menu.removeClass('transform-fix-input');
      }

      this.hideSidenavOverlay();
      this.menuOut = false;
    }

  }

  $.fn.sideNav = function (options) {
    return this.each(function () {
      new SideNav($(this), options);
    });
  };
})(jQuery);

$($ => {
  $('#toggle').click(() => {
    if ($('#slide-out').hasClass('slim')) {
      $('#slide-out').removeClass('slim');
      $('.sv-slim-icon').removeClass('fa-angle-double-right').addClass('fa-angle-double-left');
      $('.fixed-sn .double-nav').css({
        'transition': 'all .3s ease-in-out',
        'padding-left': '15.9rem'
      });
      $('.fixed-sn main').css({
        'transition': 'all .3s ease-in-out',
        'padding-left': '15rem'
      });
      $('.fixed-sn footer').css({
        'transition': 'all .3s ease-in-out',
        'padding-left': '15rem'
      });
    } else {
      $('#slide-out').addClass('slim');
      $('.sv-slim-icon').removeClass('fa-angle-double-left').addClass('fa-angle-double-right');
      $('.fixed-sn .double-nav').css('padding-left', '4.6rem');
      $('.fixed-sn main').css('padding-left', '3.7rem');
      $('.fixed-sn footer').css('padding-left', '3.7rem');
    }
  });
});
(function ($) {
  $.fn.collapsible = function (options) {
    const defaults = {
      accordion: undefined
    };
    options = $.extend(defaults, options);

    function accordionOpen($collapsible, object) {
      $panelHeaders = $collapsible.find('> li > .collapsible-header');

      if (object.hasClass('active')) {
        object.parent().addClass('active');
      } else {
        object.parent().removeClass('active');
      }

      if (object.parent().hasClass('active')) {
        object.siblings('.collapsible-body').stop(true, false).slideDown({
          duration: 350,
          easing: 'easeOutQuart',
          queue: false,

          complete() {
            $(this).css('height', '');
          }

        });
      } else {
        object.siblings('.collapsible-body').stop(true, false).slideUp({
          duration: 350,
          easing: 'easeOutQuart',
          queue: false,

          complete() {
            $(this).css('height', '');
          }

        });
      }

      $panelHeaders.not(object).removeClass('active').parent().removeClass('active');
      $panelHeaders.not(object).parent().children('.collapsible-body').stop(true, false).slideUp({
        duration: 350,
        easing: 'easeOutQuart',
        queue: false,

        complete() {
          $(this).css('height', '');
        }

      });
    }

    function expandableOpen(object) {
      if (object.hasClass('active')) {
        object.parent().addClass('active');
      } else {
        object.parent().removeClass('active');
      }

      if (object.parent().hasClass('active')) {
        object.siblings('.collapsible-body').stop(true, false).slideDown({
          duration: 350,
          easing: 'easeOutQuart',
          queue: false,

          complete() {
            $(this).css('height', '');
          }

        });
      } else {
        object.siblings('.collapsible-body').stop(true, false).slideUp({
          duration: 350,
          easing: 'easeOutQuart',
          queue: false,

          complete() {
            $(this).css('height', '');
          }

        });
      }
    }

    function isChildrenOfPanelHeader(object) {
      const panelHeader = getPanelHeader(object);
      return panelHeader.length > 0;
    }

    function getPanelHeader(object) {
      return object.closest('li > .collapsible-header');
    }

    return this.each(function () {
      const $this = $(this);
      let $panelHeaders = $(this).find('> li > .collapsible-header');
      const collapsibleType = $this.data('collapsible'); // Turn off any existing event handlers

      $this.off('click.collapse', '.collapsible-header');
      $panelHeaders.off('click.collapse');

      if (options.accordion || collapsibleType === 'accordion' || collapsibleType === undefined) {
        $panelHeaders = $this.find('> li > .collapsible-header');
        $panelHeaders.on('click.collapse', e => {
          let element = $(e.target);

          if (isChildrenOfPanelHeader(element)) {
            element = getPanelHeader(element);
          }

          element.toggleClass('active');
          accordionOpen($this, element);
        });
        accordionOpen($this, $panelHeaders.filter('.active').first());
      } else {
        $panelHeaders.each(function () {
          $(this).on('click.collapse', e => {
            let element = $(e.target);

            if (isChildrenOfPanelHeader(element)) {
              element = getPanelHeader(element);
            }

            element.toggleClass('active');
            expandableOpen(element);
          });

          if ($(this).hasClass('active')) {
            expandableOpen($(this));
          }
        });
      }
    });
  };

  $('.collapsible').collapsible();
})(jQuery);
(function ($) {
  const rangeWrapper = '.range-field';
  const rangeType = 'input[type=range]:not(.custom-range):not(.multi-range)';
  const thumbHtml = '<span class="thumb"><span class="value"></span></span>';
  let rangeMousedown = false;
  let left;

  function addThumb() {
    const $thumb = $(thumbHtml);
    $(rangeType).after($thumb);
  }

  $(document).on('change', rangeType, function () {
    const $thumb = $(this);
    const $thumbValue = $thumb.siblings('.thumb').find('.value');
    $thumbValue.html($thumb.val());
  });
  $(document).on('input mousedown touchstart', rangeType, function (e) {
    const $this = $(this);
    const $thumb = $this.siblings('.thumb');
    const width = $this.outerWidth();
    const noThumb = !$thumb.length;

    if (noThumb) {
      addThumb();
    } // Set indicator value


    $thumb.find('.value').html($this.val());
    rangeMousedown = true;
    $this.addClass('active');

    if (!$thumb.hasClass('active')) {
      $thumb.velocity({
        height: '30px',
        width: '30px',
        top: '-20px',
        marginLeft: '-15px'
      }, {
        duration: 300,
        easing: 'easeOutExpo'
      });
    }

    if (e.type !== 'input') {
      const isMobile = e.pageX === undefined || e.pageX === null;

      if (isMobile) {
        left = e.originalEvent.touches[0].pageX - $(this).offset().left;
      } else {
        left = e.pageX - $(this).offset().left;
      }

      if (left < 0) {
        left = 0;
      } else if (left > width) {
        left = width;
      }

      $thumb.addClass('active').css('left', left);
    }

    $thumb.find('.value').html($this.val());
  });
  $(document).on('mouseup touchend', rangeWrapper, function () {
    rangeMousedown = false;
    $(this).removeClass('active');
  });
  $(document).on('mousemove touchmove', rangeWrapper, function (e) {
    const $thumb = $(this).children('.thumb');
    let left;

    if (rangeMousedown) {
      if (!$thumb.hasClass('active')) {
        $thumb.velocity({
          height: '30px',
          width: '30px',
          top: '-20px',
          marginLeft: '-15px'
        }, {
          duration: 300,
          easing: 'easeOutExpo'
        });
      }

      const isMobile = e.pageX === undefined || e.pageX === null;

      if (isMobile) {
        left = e.originalEvent.touches[0].pageX - $(this).offset().left;
      } else {
        left = e.pageX - $(this).offset().left;
      }

      const width = $(this).outerWidth();

      if (left < 0) {
        left = 0;
      } else if (left > width) {
        left = width;
      }

      $thumb.addClass('active').css('left', left);
      $thumb.find('.value').html($thumb.siblings(rangeType).val());
    }
  });
  $(document).on('mouseout touchleave', rangeWrapper, function () {
    if (!rangeMousedown) {
      const $thumb = $(this).children('.thumb');

      if ($thumb.hasClass('active')) {
        $thumb.velocity({
          height: '0',
          width: '0',
          top: '10px',
          marginLeft: '-6px'
        }, {
          duration: 100
        });
      }

      $thumb.removeClass('active');
    }
  });
})(jQuery);
(function ($) {
  $(document).on('change', '.file-field input[type="file"]', e => {
    const $this = $(e.target);
    const $fileField = $this.closest('.file-field');
    const $pathInput = $fileField.find('input.file-path');
    const files = $this[0].files;
    const fileNames = []; // files.forEach((file) => fileNames.push(file.name));

    if (Array.isArray(files)) {
      files.forEach(function (file) {
        return fileNames.push(file.name);
      });
    } else {
      Object.keys(files).forEach(key => {
        fileNames.push(files[key].name);
      });
    }

    $pathInput.val(fileNames.join(', '));
    $pathInput.trigger('change');
  });
})(jQuery);
// eslint-disable-next-line no-unused-vars
class MaterialSelectViewRenderer {
  constructor(view) {
    this.view = view;
  }

  get shouldValidate() {
    return this.view.options.validate;
  }

  get shouldInheritTabindex() {
    return this.view.$nativeSelect.data('inherit-tabindex') !== false;
  }

  get isMultiple() {
    return this.view.isMultiple;
  }

  get isSearchable() {
    return this.view.isSearchable;
  }

  get isRequired() {
    return this.view.isRequired;
  }

  get isEditable() {
    return this.view.isEditable;
  }

  get isDisabled() {
    return this.view.isDisabled;
  }

  get isDefaultMaterialInput() {
    return this.view.options.defaultMaterialInput;
  }

  get isCustomSelect() {
    return this.view.$materialSelect.hasClass('custom-select') && this.view.$materialSelect.hasClass('select-dropdown');
  }

  destroy() {
    const currentUuid = this.view.$nativeSelect.data('select-id');
    this.view.$nativeSelect.data('select-id', null).removeClass('initialized');
    this.view.$nativeSelect.parent().find('span.caret').remove();
    this.view.$nativeSelect.parent().find('input').remove();
    this.view.$nativeSelect.unwrap();
    $(`ul#select-options-${currentUuid}`).remove();
  }

  render() {
    this.setWrapperClasses();
    this.setMaterialSelectInitialValue();
    this.view.$nativeSelect.data('select-id', this.view.properties.id);
    this.view.$nativeSelect.before(this.view.$selectWrapper);
    this.appendDropdownIcon();
    this.appendMaterialSelect();
    this.appendMaterialOptionsList();
    this.appendNativeSelect();
    this.appendSelectLabel();
    this.appendCustomTemplateParts();

    if (this.shouldValidate) {
      this.appendValidationFeedbackElements();
    }

    if (this.isRequired) {
      this.enableValidation();
    }

    if (!this.isDisabled) {
      this.setMaterialOptionsListMaxHeight();
      this.view.dropdown = this.view.$materialSelect.dropdown({
        hover: false,
        closeOnClick: false,
        resetScroll: false
      });
    }

    if (this.shouldInheritTabindex) {
      this.view.$materialSelect.attr('tabindex', this.view.$nativeSelect.attr('tabindex'));
    }

    if (this.isDefaultMaterialInput) {
      this.view.$mainLabel.css('top', '-7px');
    }

    if (this.isCustomSelect) {
      this.view.$materialSelect.css({
        display: 'inline-block',
        width: '100%',
        height: 'calc(1.5em + .75rem + 2px)',
        padding: '.375rem 1.75rem .375rem .75rem',
        fontSize: '1rem',
        lineHeight: '1.5',
        backgroundColor: '#fff',
        border: '1px solid #ced4da'
      });
    }

    this.addAccessibilityAttributes();
    this.markInitialized();
  }

  setWrapperClasses() {
    if (this.isDefaultMaterialInput) {
      this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr('class').split(' ').filter(el => el !== 'md-form').join(' ')).css({
        marginTop: '1.5rem',
        marginBottom: '1.5rem'
      });
    } else {
      this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr('class'));
    }
  }

  setMaterialSelectInitialValue() {
    if (!this.view.options.placeholder) {
      const sanitizedLabelHtml = this.view.$materialSelectInitialOption.replace(/"/g, '&quot;').replace(/  +/g, ' ').trim();
      this.view.$materialSelect.val(sanitizedLabelHtml);
    } else {
      this.view.$materialSelect.attr('placeholder', this.view.options.placeholder);

      if (!this.view.$nativeSelect.find('option[value=""][selected][disabled][data-mdb-placeholder]').length) {
        this.view.$nativeSelect.prepend('<option value="" selected disabled data-mdb-placeholder></option>');
      }
    }
  }

  appendDropdownIcon() {
    if (this.isDisabled) {
      this.view.$dropdownIcon.addClass('disabled');
    }

    this.view.$selectWrapper.append(this.view.$dropdownIcon);
  }

  appendMaterialSelect() {
    this.view.$selectWrapper.append(this.view.$materialSelect);
  }

  appendMaterialOptionsList() {
    if (this.isSearchable) {
      this.appendSearchInputOption();
    }

    if (this.isEditable && this.isSearchable) {
      this.appendAddOptionBtn();
    }

    this.buildMaterialOptions();

    if (this.isMultiple) {
      this.appendToggleAllCheckbox();
    }

    this.view.$selectWrapper.append(this.view.$materialOptionsList);
  }

  appendNativeSelect() {
    this.view.$nativeSelect.appendTo(this.view.$selectWrapper);
  }

  appendSelectLabel() {
    if (this.view.$materialSelect.val() || this.view.options.placeholder) {
      this.view.$mainLabel.addClass('active');
    }

    this.view.$mainLabel[this.isDisabled ? 'addClass' : 'removeClass']('disabled');
    this.view.$mainLabel.appendTo(this.view.$selectWrapper);
  }

  appendCustomTemplateParts() {
    this.view.$customTemplateParts.each((_, element) => {
      const $templatePart = $(element);
      $templatePart.appendTo(this.view.$materialOptionsList).wrap('<li></li>');
    });
    this.view.$btnSave.appendTo(this.view.$materialOptionsList); // @Depreciated
  }

  appendValidationFeedbackElements() {
    this.view.$validFeedback.insertAfter(this.view.$selectWrapper);
    this.view.$invalidFeedback.insertAfter(this.view.$selectWrapper);
  }

  enableValidation() {
    this.view.$nativeSelect.css({
      position: 'absolute',
      top: '1rem',
      left: '0',
      height: '0',
      width: '0',
      opacity: '0',
      padding: '0',
      'pointer-events': 'none'
    });

    if (this.view.$nativeSelect.attr('style').indexOf('inline!important') === -1) {
      this.view.$nativeSelect.attr('style', `${this.view.$nativeSelect.attr('style')} display: inline!important;`);
    }

    this.view.$nativeSelect.attr('tabindex', -1);
    this.view.$nativeSelect.data('inherit-tabindex', false);
  }

  setMaterialOptionsListMaxHeight() {
    const multiplier = this.view.options.visibleOptions;
    let additionalHeight = 0;
    this.view.$materialOptionsList.show();
    const $materialOptions = this.view.$materialOptionsList.find('li').not('.disabled');
    const optionHeight = $materialOptions.first().height();
    const optionsCount = $materialOptions.length;

    if (this.isSearchable) {
      additionalHeight += this.view.$searchInput.height();
    }

    if (this.isMultiple) {
      additionalHeight += this.view.$toggleAll.height();
    }

    this.view.$materialOptionsList.hide();

    if (multiplier >= 0 && multiplier < optionsCount) {
      const maxHeight = optionHeight * multiplier + additionalHeight;
      this.view.$materialOptionsList.css('max-height', maxHeight);
      this.view.$materialSelect.data('maxheight', maxHeight);
    }
  }

  addAccessibilityAttributes() {
    this.view.$materialSelect.attr({
      role: this.isSearchable ? 'combobox' : 'listbox',
      'aria-multiselectable': this.isMultiple,
      'aria-disabled': this.isDisabled,
      'aria-required': this.isRequired,
      'aria-labelledby': this.view.$mainLabel.attr('id'),
      'aria-haspopup': true,
      'aria-expanded': false
    });

    if (this.view.$searchInput) {
      this.view.$searchInput.attr('role', 'searchbox');
    }

    this.view.$materialOptionsList.find('li').each(function () {
      const $this = $(this);
      $this.attr({
        role: 'option',
        'aria-selected': $this.hasClass('active'),
        'aria-disabled': $this.hasClass('disabled')
      });
    });
  }

  markInitialized() {
    this.view.$nativeSelect.addClass('initialized');
  }

  appendSearchInputOption() {
    const placeholder = this.view.$nativeSelect.attr('searchable');
    const divClass = this.isDefaultMaterialInput ? '' : 'md-form';
    const inputClass = this.isDefaultMaterialInput ? 'select-default mb-2' : '';
    this.view.$searchInput = $(`<span class="search-wrap ml-2"><div class="${divClass} mt-0"><input type="text" class="search w-100 d-block ${inputClass}" tabindex="-1" placeholder="${placeholder}"></div></span>`);
    this.view.$materialOptionsList.append(this.view.$searchInput);
    this.view.$searchInput.on('click', e => e.stopPropagation());
  }

  appendAddOptionBtn() {
    this.view.$searchInput.append(this.view.$addOptionBtn);
    this.view.$addOptionBtn.on('click', this.addNewOption.bind(this));
  }

  buildMaterialOptions() {
    this.view.$nativeSelectChildren.each((index, option) => {
      const $this = $(option);

      if ($this.is('option')) {
        this.buildSingleOption($this, this.isMultiple ? 'multiple' : '');
      } else if ($this.is('optgroup')) {
        const $materialOptgroup = $(`<li class="optgroup"><span>${$this.attr('label')}</span></li>`);
        this.view.$materialOptionsList.append($materialOptgroup);
        const $optgroupOptions = $this.children('option');
        $optgroupOptions.each((index, optgroupOption) => {
          this.buildSingleOption($(optgroupOption), 'optgroup-option');
        });
      }
    });
  }

  appendToggleAllCheckbox() {
    const firstOption = this.view.$materialOptionsList.find('li').first();

    if (firstOption.hasClass('disabled') && firstOption.find('input').prop('disabled')) {
      firstOption.after(this.view.$toggleAll);
    } else {
      this.view.$materialOptionsList.find('li').first().before(this.view.$toggleAll);
    }
  }

  addNewOption() {
    const val = this.view.$searchInput.find('input').val();
    const $newOption = $(`<option value="${val.toLowerCase()}" selected>${val}</option>`).prop('selected', true);

    if (!this.isMultiple) {
      this.view.$nativeSelectChildren.each((index, option) => {
        $(option).attr('selected', false);
      });
    }

    this.view.$nativeSelect.append($newOption);
  }

  buildSingleOption($nativeSelectChild, type) {
    const disabled = $nativeSelectChild.is(':disabled') ? 'disabled' : '';
    const active = $nativeSelectChild.is(':selected') ? 'active' : '';
    const optgroupClass = type === 'optgroup-option' ? 'optgroup-option' : '';
    const iconUrl = $nativeSelectChild.data('icon');
    const fas = $nativeSelectChild.data('fas') ? `<i class="fa-pull-right m-2 fas fa-${$nativeSelectChild.data('fas')} ${this.view.options.fasClasses}"></i> ` : '';
    const far = $nativeSelectChild.data('far') ? `<i class="fa-pull-right m-2 far fa-${$nativeSelectChild.data('far')} ${this.view.options.farClasses}"></i> ` : '';
    const fab = $nativeSelectChild.data('fab') ? `<i class="fa-pull-right m-2 fab fa-${$nativeSelectChild.data('fab')} ${this.view.options.fabClasses}"></i> ` : '';
    const classes = $nativeSelectChild.attr('class');
    const iconHtml = iconUrl ? `<img alt="" src="${iconUrl}" class="${classes}">` : '';
    const checkboxHtml = this.isMultiple ? `<input type="checkbox" class="form-check-input" ${disabled}/><label></label>` : '';
    this.view.$materialOptionsList.append($(`<li class="${disabled} ${active} ${optgroupClass} ${this.view.options.copyClassesOption ? classes : ''} ">${iconHtml}<span class="filtrable">${checkboxHtml} ${$nativeSelectChild.html()} ${fas} ${far} ${fab}</span></li>`));
  }

}
// eslint-disable-next-line no-unused-vars
class MaterialSelectView {
  // eslint-disable-next-line object-curly-newline
  constructor($nativeSelect, {
    options,
    properties: {
      id
    }
  }) {
    this.properties = {
      id,
      isMultiple: Boolean($nativeSelect.attr('multiple')),
      isSearchable: Boolean($nativeSelect.attr('searchable')),
      isRequired: Boolean($nativeSelect.attr('required')),
      isEditable: Boolean($nativeSelect.attr('editable'))
    };
    this.options = this._copyOptions(options);
    this.$nativeSelect = $nativeSelect;
    this.$selectWrapper = $('<div class="select-wrapper"></div>');
    this.$materialOptionsList = $(`<ul id="select-options-${this.properties.id}" class="dropdown-content select-dropdown w-100 ${this.properties.isMultiple ? 'multiple-select-dropdown' : ''}"></ul>`);
    this.$materialSelectInitialOption = $nativeSelect.find('option:selected').text() || $nativeSelect.find('option:first').text() || '';
    this.$nativeSelectChildren = this.$nativeSelect.children('option, optgroup');
    this.$materialSelect = $(`<input type="text" class="${this.options.defaultMaterialInput ? 'browser-default custom-select multi-bs-select select-dropdown form-control' : 'select-dropdown form-control'}" ${!this.options.validate && 'readonly="true"'} required="${this.options.validate ? 'true' : 'false'}" ${this.$nativeSelect.is(' :disabled') ? 'disabled' : ''} data-activates="select-options-${this.properties.id}" value=""/>`);
    this.$dropdownIcon = this.options.defaultMaterialInput ? '' : $('<span class="caret">&#9660;</span>');
    this.$searchInput = null;
    this.$noSearchResultsInfo = $(`<li><span><i>${this.options.labels.noSearchResults}</i></span></li>`);
    this.$toggleAll = $(`<li class="select-toggle-all"><span><input type="checkbox" class="form-check-input"><label>${this.options.labels.selectAll}</label></span></li>`);
    this.$addOptionBtn = $('<i class="select-add-option fas fa-plus"></i>');
    this.$mainLabel = this._jQueryFallback(this.$nativeSelect.next('label.mdb-main-label'), $(`label[for='${this.properties.id}']`));
    this.$customTemplateParts = this._jQueryFallback(this.$nativeSelect.nextUntil('select', '.mdb-select-template-part'), $(`[data-mdb-select-template-part-for='${this.properties.id}']`));
    this.$btnSave = this.$nativeSelect.nextUntil('select', '.btn-save'); // @Depreciated

    this.$validFeedback = $(`<div class="valid-feedback">${this.options.labels.validFeedback}</div>`);
    this.$invalidFeedback = $(`<div class="invalid-feedback">${this.options.labels.invalidFeedback}</div>`);
    this.keyCodes = {
      tab: 9,
      esc: 27,
      enter: 13,
      arrowUp: 38,
      arrowDown: 40
    }; // eslint-disable-next-line no-undef

    this.renderer = new MaterialSelectViewRenderer(this);
    this.dropdown = null;
  }

  static get isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  get isMultiple() {
    return this.properties.isMultiple;
  }

  get isSearchable() {
    return this.properties.isSearchable;
  }

  get isRequired() {
    return this.properties.isRequired;
  }

  get isEditable() {
    return this.properties.isEditable;
  }

  get isDisabled() {
    return this.$nativeSelect.is(':disabled');
  }

  destroy() {
    this.renderer.destroy();
  }

  render() {
    this.renderer.render();
  }

  selectPreselectedOptions(handler) {
    if (this.isMultiple) {
      this.$nativeSelect.find('option:selected:not(:disabled)').each((i, element) => {
        const index = element.index;
        this.$materialOptionsList.find('li:not(.optgroup):not(.select-toggle-all)').eq(index).addClass('selected active').find(':checkbox').prop('checked', true);
        handler(index);
      });
    } else {
      const $preselectedOption = this.$nativeSelect.find('option:selected').first();
      const indexOfPreselectedOption = this.$nativeSelect.find('option').index($preselectedOption.get(0));

      if ($preselectedOption.get(0) && $preselectedOption.attr('disabled') !== 'disabled') {
        handler(indexOfPreselectedOption);
      }
    }
  }

  bindMaterialSelectFocus() {
    this.$materialSelect.on('focus', e => {
      const $this = $(e.target);

      if ($('ul.select-dropdown').not(this.$materialOptionsList.get(0)).is(':visible')) {
        $('input.select-dropdown').trigger('close');
      }

      this.$mainLabel.addClass('active');

      if (!this.$materialOptionsList.is(':visible')) {
        $this.trigger('open', ['focus']);
        const label = $this.val();
        const $selectedOption = this.$materialOptionsList.find('li').filter(function () {
          return $(this).text().toLowerCase() === label.toLowerCase();
        }).get(0);

        this._selectSingleOption($selectedOption);

        this._updateDropdownScrollTop();
      }

      if (!this.isMultiple) {
        this.$mainLabel.addClass('active');
      }
    });
  }

  bindMaterialSelectClick() {
    this.$materialSelect.on('mousedown', e => {
      if (e.which === 3) {
        e.preventDefault();
      }
    });
    this.$materialSelect.on('click', e => {
      this.$mainLabel.addClass('active');
      e.stopPropagation();
    });
  }

  bindMaterialSelectBlur() {
    this.$materialSelect.on('blur', e => {
      const $this = $(e);

      if (!this.isMultiple && !this.isSearchable) {
        $this.trigger('close');
      }

      this.$materialOptionsList.find('li.selected').removeClass('selected');
    });
  }

  bindMaterialSelectKeydown() {
    this.$materialSelect.on('keydown', e => {
      const $this = $(e.target);
      const isTab = e.which === this.keyCodes.tab;
      const isEsc = e.which === this.keyCodes.esc;
      const isEnter = e.which === this.keyCodes.enter;
      const isEnterWithShift = isEnter && e.shiftKey;
      const isArrowUp = e.which === this.keyCodes.arrowUp;
      const isArrowDown = e.which === this.keyCodes.arrowDown;
      const isMaterialSelectVisible = this.$materialOptionsList.is(':visible');

      if (isTab) {
        this._handleTabKey($this);

        return;
      } else if (isArrowDown && !isMaterialSelectVisible) {
        $this.trigger('open');
        return;
      } else if (isEnter && !isMaterialSelectVisible) {
        return;
      }

      e.preventDefault();
      /* eslint-disable consistent-return */

      switch (true) {
        case isEnterWithShift:
          return this._handleEnterWithShiftKey($this);

        case isEnter:
          return this._handleEnterKey($this);

        case isArrowDown || isArrowUp:
          return this._handleArrowUpDownKey(e.which);

        case isEsc:
          return this._handleEscKey($this);

        default:
          return this._handleLetterKey(e);
      }
      /* eslint-disable consistent-return */

    });
  }

  bindMaterialSelectDropdownToggle() {
    this.$materialSelect.on('open', () => this.$materialSelect.attr('aria-expanded', 'true'));
    this.$materialSelect.on('close', () => this.$materialSelect.attr('aria-expanded', 'false'));
  }

  bindToggleAllClick(handler) {
    this.$toggleAll.on('click', e => {
      const checkbox = $(this.$toggleAll).find('input[type="checkbox"]').first();
      const currentState = Boolean($(checkbox).prop('checked'));
      const isToggleChecked = !currentState;
      $(checkbox).prop('checked', !currentState);
      this.$materialOptionsList.find('li:not(.optgroup):not(.select-toggle-all)').each((materialOptionIndex, materialOption) => {
        const $materialOption = $(materialOption);
        const $optionCheckbox = $materialOption.find('input[type="checkbox"]');
        $materialOption.attr('aria-selected', isToggleChecked);

        if (isToggleChecked && $optionCheckbox.is(':checked') || !isToggleChecked && !$optionCheckbox.is(':checked') || $(materialOption).is(':hidden') || $(materialOption).is('.disabled')) {
          return;
        }

        $optionCheckbox.prop('checked', isToggleChecked);
        this.$nativeSelect.find('option').eq(materialOptionIndex).prop('selected', isToggleChecked);
        $materialOption.toggleClass('active');

        this._selectOption(materialOption);

        handler(materialOptionIndex);
      });
      this.$nativeSelect.data('stop-refresh', true);

      this._triggerChangeOnNativeSelect();

      this.$nativeSelect.removeData('stop-refresh');
      e.stopPropagation();
    });
  }

  bindMaterialOptionMousedown() {
    this.$materialOptionsList.on('mousedown', e => {
      const option = e.target;
      const inModal = $('.modal-content').find(this.$materialOptionsList).length;

      if (inModal && option.scrollHeight > option.offsetHeight) {
        e.preventDefault();
      }
    });
  }

  bindMaterialOptionClick(handler) {
    this.$materialOptionsList.find('li:not(.optgroup)').not(this.$toggleAll).each((materialOptionIndex, materialOption) => {
      $(materialOption).on('click', e => {
        e.stopPropagation();
        const $this = $(materialOption);

        if ($this.hasClass('disabled') || $this.hasClass('optgroup')) {
          return;
        }

        let selected = true;

        if (this.isMultiple) {
          $this.find('input[type="checkbox"]').prop('checked', (index, oldPropertyValue) => !oldPropertyValue);
          const hasOptgroup = Boolean(this.$nativeSelect.find('optgroup').length);
          const thisIndex = this._isToggleAllPresent() ? $this.index() - 1 : $this.index();
          /* eslint-disable max-statements-per-line */

          switch (true) {
            case this.isSearchable && hasOptgroup:
              selected = handler(thisIndex - $this.prevAll('.optgroup').length - 1);
              break;

            case this.isSearchable:
              selected = handler(thisIndex - 1);
              break;

            case hasOptgroup:
              selected = handler(thisIndex - $this.prevAll('.optgroup').length);
              break;

            default:
              selected = handler(thisIndex);
              break;
          }
          /* eslint-disable max-statements-per-line */


          if (this._isToggleAllPresent()) {
            this._updateToggleAllOption();
          }

          this.$materialSelect.trigger('focus');
        } else {
          this.$materialOptionsList.find('li').removeClass('active').attr('aria-selected', 'false');
          this.$materialSelect.val($this.text().replace(/  +/g, ' ').trim());
          this.$materialSelect.trigger('close');
        }

        $this.toggleClass('active');
        const ariaSelected = $this.attr('aria-selected');
        $this.attr('aria-selected', ariaSelected === 'true' ? 'false' : 'true');

        this._selectSingleOption($this);

        this.$nativeSelect.data('stop-refresh', true);
        this.$nativeSelect.find('option').eq(materialOptionIndex).prop('selected', selected);
        this.$nativeSelect.removeData('stop-refresh');

        this._triggerChangeOnNativeSelect();

        if (this.$materialSelect.val()) {
          this.$mainLabel.addClass('active');
        }

        if ($this.hasClass('li-added')) {
          this.renderer.buildSingleOption($this, '');
        }
      });
    });
  }

  bindSingleMaterialOptionClick() {
    this.$materialOptionsList.find('li').on('click', () => {
      this.$materialSelect.trigger('close');
    });
  }

  bindSearchInputKeyup() {
    this.$searchInput.find('.search').on('keyup', e => {
      const $this = $(e.target);
      const isTab = e.which === this.keyCodes.tab;
      const isEsc = e.which === this.keyCodes.esc;
      const isEnter = e.which === this.keyCodes.enter;
      const isEnterWithShift = isEnter && e.shiftKey;
      const isArrowUp = e.which === this.keyCodes.arrowUp;
      const isArrowDown = e.which === this.keyCodes.arrowDown;

      if (isArrowDown || isTab || isEsc || isArrowUp) {
        this.$materialSelect.focus();

        this._handleArrowUpDownKey(e.which);

        return;
      }

      const $ul = $this.closest('ul');
      const searchValue = $this.val();
      const $options = $ul.find('li span.filtrable');
      let isOptionInList = false;
      $options.each(function () {
        const $option = $(this);

        if (typeof this.outerHTML === 'string') {
          const liValue = this.textContent.toLowerCase();

          if (liValue.includes(searchValue.toLowerCase())) {
            $option.show().parent().show();
          } else {
            $option.hide().parent().hide();
          }

          if (liValue.trim() === searchValue.toLowerCase()) {
            isOptionInList = true;
          }
        }
      });

      if (isEnter) {
        if (this.isEditable && !isOptionInList) {
          this.renderer.addNewOption();
          return;
        }

        if (isEnterWithShift) {
          this._handleEnterWithShiftKey($this);
        }

        this.$materialSelect.trigger('open');
        return;
      }

      this.$addOptionBtn[searchValue && this.isEditable && !isOptionInList ? 'show' : 'hide']();
      const anyOptionMatch = $options.filter((_, e) => $(e).is(':visible') && !$(e).parent().hasClass('disabled')).length !== 0;

      if (!anyOptionMatch) {
        this.$toggleAll.hide();
        this.$materialOptionsList.append(this.$noSearchResultsInfo);
      } else {
        this.$toggleAll.show();
        this.$materialOptionsList.find(this.$noSearchResultsInfo).remove();

        this._updateToggleAllOption();
      }

      this.dropdown.updatePosition(this.$materialSelect, this.$materialOptionsList);
    });
  }

  bindHtmlClick() {
    $('html').on('click', e => {
      if (!$(e.target).closest(`#select-options-${this.properties.id}`).length && !$(e.target).hasClass('mdb-select') && $(`#select-options-${this.properties.id}`).hasClass('active')) {
        this.$materialSelect.trigger('close');

        if (!this.$materialSelect.val() && !this.options.placeholder) {
          this.$mainLabel.removeClass('active');
        }
      }

      if (this.isSearchable && this.$searchInput !== null && this.$materialOptionsList.hasClass('active')) {
        this.$materialOptionsList.find('.search-wrap input.search').focus();
      }
    });
  }

  bindMobileDevicesMousedown() {
    $('select').siblings('input.select-dropdown', 'input.multi-bs-select').on('mousedown', e => {
      if (MaterialSelectView.isMobileDevice && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight)) {
        e.preventDefault();
      }
    });
  }

  bindSaveBtnClick() {
    // @Depreciated
    this.$btnSave.on('click', () => {
      this.$materialSelect.trigger('close');
    });
  }

  _isToggleAllPresent() {
    return this.$materialOptionsList.find(this.$toggleAll).length;
  }

  _updateToggleAllOption() {
    const $allOptionsButToggleAll = this.$materialOptionsList.find('li').not('.select-toggle-all, .disabled, :hidden').find('[type=checkbox]');
    const $checkedOptionsButToggleAll = $allOptionsButToggleAll.filter(':checked');
    const isToggleAllChecked = this.$toggleAll.find('[type=checkbox]').is(':checked');

    if ($checkedOptionsButToggleAll.length === $allOptionsButToggleAll.length && !isToggleAllChecked) {
      this.$toggleAll.find('[type=checkbox]').prop('checked', true);
    } else if ($checkedOptionsButToggleAll.length < $allOptionsButToggleAll.length && isToggleAllChecked) {
      this.$toggleAll.find('[type=checkbox]').prop('checked', false);
    }
  }

  _handleTabKey($materialSelect) {
    this._handleEscKey($materialSelect);
  }

  _handleEnterWithShiftKey($materialSelect) {
    if (!this.isMultiple) {
      this._handleEnterKey($materialSelect);
    } else {
      this.$toggleAll.trigger('click');
    }
  }

  _handleEnterKey($materialSelect) {
    const $activeOption = this.$materialOptionsList.find('li.selected:not(.disabled)');
    $activeOption.trigger('click').addClass('active');

    if (!this.isMultiple) {
      $materialSelect.trigger('close');
    }
  }

  _handleArrowUpDownKey(keyCode) {
    const $availableOptions = this.$materialOptionsList.find('li:visible').not('.disabled, .select-toggle-all');
    const $firstOption = $availableOptions.first();
    const $lastOption = $availableOptions.last();
    const anySelected = this.$materialOptionsList.find('li.selected').length > 0;
    let $matchedMaterialOption = null;
    let $activeOption = null;
    const isArrowUp = keyCode === this.keyCodes.arrowUp;

    if (isArrowUp) {
      const $currentOption = anySelected ? this.$materialOptionsList.find('li.selected').first() : $lastOption;
      let $prevOption = $currentOption.prev('li:visible:not(.disabled, .select-toggle-all)');
      $activeOption = $prevOption;
      $availableOptions.each((key, el) => {
        if ($(el).hasClass(this.options.keyboardActiveClass)) {
          $prevOption = $availableOptions.eq(key - 1);
          $activeOption = $availableOptions.eq(key);
        }
      });
      $matchedMaterialOption = $currentOption.is($firstOption) || !anySelected ? $currentOption : $prevOption;
    } else {
      const $currentOption = anySelected ? this.$materialOptionsList.find('li.selected').first() : $firstOption;
      let $nextOption = $currentOption.next('li:visible:not(.disabled, .select-toggle-all)');
      $activeOption = $nextOption;
      $availableOptions.each((key, el) => {
        if ($(el).hasClass(this.options.keyboardActiveClass)) {
          $nextOption = $availableOptions.eq(key + 1);
          $activeOption = $availableOptions.eq(key);
        }
      });
      $matchedMaterialOption = $currentOption.is($lastOption) || !anySelected ? $currentOption : $nextOption;
    }

    this._selectSingleOption($matchedMaterialOption);

    this._removeKeyboardActiveClass();

    if (!$matchedMaterialOption.find('input').is(':checked')) {
      $matchedMaterialOption.removeClass(this.options.keyboardActiveClass);
    }

    if (!$activeOption.hasClass('selected') && !$activeOption.find('input').is(':checked') && this.isMultiple) {
      $activeOption.removeClass('active', this.options.keyboardActiveClass);
    }

    $matchedMaterialOption.addClass(this.options.keyboardActiveClass);

    if ($matchedMaterialOption.position()) {
      this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop() + $matchedMaterialOption.position().top);
    }
  }

  _handleEscKey($materialSelect) {
    this._removeKeyboardActiveClass();

    $materialSelect.trigger('close');
  }

  _handleLetterKey(e) {
    this._removeKeyboardActiveClass();

    if (this.isSearchable) {
      const isLetter = e.which > 46 && e.which < 91;
      const isNumber = e.which > 93 && e.which < 106;
      const isBackspace = e.which === 8;

      if (isLetter || isNumber) {
        this.$searchInput.find('input').val(e.key).focus();
      }

      if (isBackspace) {
        this.$searchInput.find('input').val('').focus();
      }
    } else {
      let filterQueryString = '';
      const letter = String.fromCharCode(e.which).toLowerCase();
      const nonLetters = Object.keys(this.keyCodes).map(key => this.keyCodes[key]);
      const isLetterSearchable = letter && nonLetters.indexOf(e.which) === -1;

      if (isLetterSearchable) {
        filterQueryString += letter;
        const $matchedMaterialOption = this.$materialOptionsList.find('li').filter((index, element) => $(element).text().toLowerCase().includes(filterQueryString)).first();

        if (!this.isMultiple) {
          this.$materialOptionsList.find('li').removeClass('active');
        }

        $matchedMaterialOption.addClass('active');

        this._selectSingleOption($matchedMaterialOption);
      }
    }
  }

  _removeKeyboardActiveClass() {
    this.$materialOptionsList.find('li').removeClass(this.options.keyboardActiveClass);
  }

  _triggerChangeOnNativeSelect() {
    const keyboardEvt = new KeyboardEvent('change', {
      bubbles: true,
      cancelable: true
    });
    this.$nativeSelect.get(0).dispatchEvent(keyboardEvt);
  }

  _selectSingleOption(newOption) {
    this.$materialOptionsList.find('li.selected').removeClass('selected');

    this._selectOption(newOption);
  }

  _updateDropdownScrollTop() {
    const $preselected = this.$materialOptionsList.find('li.active').first();

    if ($preselected.length) {
      this.$materialOptionsList.scrollTo($preselected);
    } else {
      this.$materialOptionsList.scrollTop(0);
    }
  }

  _selectOption(newOption) {
    const option = $(newOption);
    option.addClass('selected');
  }

  _copyOptions(options) {
    return $.extend({}, options);
  }

  _jQueryFallback(...$elements) {
    let $lastElem = null;

    for (let i = 0; i < $elements.length; i++) {
      $lastElem = $elements[i];

      if ($lastElem.length) {
        return $lastElem;
      }
    }

    return $lastElem;
  }

}
jQuery($ => {
  class MaterialSelect {
    constructor($nativeSelect, options = {}) {
      this.options = {
        destroy: this.fallback().or(options.destroy).or(false).value(),
        validate: this.fallback().or($nativeSelect.attr('data-validate')).or(options.validate).or(false).value(),
        selectId: this.fallback().or($nativeSelect.attr('data-select-id')).or(options.selectId).or(null).value(),
        defaultMaterialInput: this.fallback().or($nativeSelect.attr('data-default-material-input')).or(options.defaultMaterialInput).or(false).value(),
        fasClasses: this.fallback().or($nativeSelect.attr('data-fas-classes')).or(options.fasClasses).or('').value(),
        farClasses: this.fallback().or($nativeSelect.attr('data-far-classes')).or(options.farClasses).or('').value(),
        fabClasses: this.fallback().or($nativeSelect.attr('data-fab-classes')).or(options.fabClasses).or('').value(),
        copyClassesOption: this.fallback().or($nativeSelect.attr('data-copy-classes-option')).or(options.copyClassesOption).or(false).value(),
        labels: {
          selectAll: this.fallback().or($nativeSelect.attr('data-label-select-all')).or((options.labels || {}).selectAll).or('Select all').value(),
          optionsSelected: this.fallback().or($nativeSelect.attr('data-label-options-selected')).or((options.labels || {}).optionsSelected).or('options selected').value(),
          validFeedback: this.fallback().or($nativeSelect.attr('data-label-valid-feedback')).or((options.labels || {}).validFeedback).or('Ok').value(),
          invalidFeedback: this.fallback().or($nativeSelect.attr('data-label-invalid-feedback')).or((options.labels || {}).invalidFeedback).or('Incorrect value').value(),
          noSearchResults: this.fallback().or($nativeSelect.attr('data-label-no-search-results')).or((options.labels || {}).noSearchResults).or('No results').value()
        },
        keyboardActiveClass: this.fallback().or($nativeSelect.attr('data-keyboard-active-class')).or(options.keyboardActiveClass).or('heavy-rain-gradient').value(),
        placeholder: this.fallback().or($nativeSelect.attr('data-placeholder')).or(options.placeholder).or(null).value(),
        visibleOptions: this.fallback().or($nativeSelect.attr('data-visible-options')).or(options.visibleOptions).or(5).value(),
        maxSelectedOptions: this.fallback().or($nativeSelect.attr('data-max-selected-options')).or(options.maxSelectedOptions).or(5).value()
      };
      this.uuid = $nativeSelect.attr('id') || this.options.selectId || this._randomUUID(); // eslint-disable-next-line no-undef

      this.view = new MaterialSelectView($nativeSelect, {
        options: this.options,
        properties: {
          id: this.uuid
        }
      });
      this.selectedOptionsIndexes = []; // jQuery indexes; `.eq()` is operating on these

      MaterialSelect.mutationObservers = [];
    }

    get isInitialized() {
      return Boolean(this.view.$nativeSelect.data('select-id')) && this.view.$nativeSelect.hasClass('initialized');
    }

    static clearMutationObservers() {
      MaterialSelect.mutationObservers.forEach(observer => {
        observer.disconnect();
        observer.customStatus = 'stopped';
      });
    }

    init() {
      if (this.options.destroy) {
        this.view.destroy();
        return;
      }

      if (this.isInitialized) {
        this.view.destroy();
      }

      this.view.render();
      this.view.selectPreselectedOptions(optionIndex => this._toggleSelectedValue(optionIndex));
      this.bindEvents();
    }

    bindEvents() {
      this.bindMutationObserverChange();
      this.view.bindMaterialSelectFocus();
      this.view.bindMaterialSelectClick();
      this.view.bindMaterialSelectBlur();
      this.view.bindMaterialSelectKeydown();
      this.view.bindMaterialSelectDropdownToggle();
      this.view.bindToggleAllClick(materialOptionIndex => this._toggleSelectedValue(materialOptionIndex));
      this.view.bindMaterialOptionMousedown();
      this.view.bindMaterialOptionClick(optionIndex => this._toggleSelectedValue(optionIndex));

      if (!this.view.isMultiple && this.view.isSearchable) {
        this.view.bindSingleMaterialOptionClick();
      }

      if (this.view.isSearchable) {
        this.view.bindSearchInputKeyup();
      }

      this.view.bindHtmlClick();
      this.view.bindMobileDevicesMousedown();
      this.view.bindSaveBtnClick(); // @Depreciated
    }

    bindMutationObserverChange() {
      const config = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      };
      const observer = new MutationObserver(this._onMutationObserverChange.bind(this));
      observer.observe(this.view.$nativeSelect.get(0), config);
      observer.customId = this.uuid;
      observer.customStatus = 'observing';
      MaterialSelect.clearMutationObservers();
      MaterialSelect.mutationObservers.push(observer);
    }

    _onMutationObserverChange(mutationsList) {
      mutationsList.forEach(mutation => {
        const $select = $(mutation.target).closest('select');

        if ($select.data('stop-refresh') !== true && (mutation.type === 'childList' || mutation.type === 'attributes' && $(mutation.target).is('option'))) {
          MaterialSelect.clearMutationObservers(); // eslint-disable-next-line object-curly-newline

          $select.materialSelect({
            destroy: true
          });
          $select.materialSelect();
        }
      });
    }

    _toggleSelectedValue(optionIndex) {
      const selectedValueIndex = this.selectedOptionsIndexes.indexOf(optionIndex);
      const isSelected = selectedValueIndex !== -1;

      if (!isSelected) {
        this.selectedOptionsIndexes.push(optionIndex);
      } else {
        this.selectedOptionsIndexes.splice(selectedValueIndex, 1);
      }

      this.view.$nativeSelect.find('option').eq(optionIndex).prop('selected', !isSelected);

      this._setValueToMaterialSelect();

      return !isSelected;
    }

    _setValueToMaterialSelect() {
      let value = '';
      const selectedValuesCount = this.selectedOptionsIndexes.length;
      this.selectedOptionsIndexes.forEach(index => value += `, ${this.view.$nativeSelect.find('option').eq(index).text().replace(/  +/g, ' ').trim()}`);

      if (this.options.maxSelectedOptions >= 0 && selectedValuesCount > this.options.maxSelectedOptions) {
        value = `${selectedValuesCount} ${this.options.labels.optionsSelected}`;
      } else {
        value = value.substring(2);
      }

      if (value.length === 0) {
        value = this.view.$nativeSelect.find('option:disabled').eq(0).text();
      }

      this.view.$nativeSelect.siblings(`${this.options.defaultMaterialInput ? 'input.multi-bs-select' : 'input.select-dropdown'}`).val(value);
    }

    _randomUUID() {
      let d = new Date().getTime();
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        // eslint-disable-next-line no-bitwise
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16); // eslint-disable-next-line no-bitwise

        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
    }

    fallback() {
      return {
        _value: undefined,

        or(value) {
          if (typeof value !== 'undefined' && typeof this._value === 'undefined') {
            this._value = value;
          }

          return this;
        },

        value() {
          return this._value;
        }

      };
    }

  }

  $.fn.materialSelect = function (options) {
    $(this).not('.browser-default').not('.custom-select').each(function () {
      const materialSelect = new MaterialSelect($(this), options);
      materialSelect.init();
    });
  };

  (function (originalVal) {
    $.fn.val = function (value) {
      if (!arguments.length) {
        return originalVal.call(this);
      }

      if (this.data('stop-refresh') !== true && this.hasClass('mdb-select') && this.hasClass('initialized')) {
        MaterialSelect.clearMutationObservers();
        this.materialSelect({
          destroy: true
        });
        const ret = originalVal.call(this, value);
        this.materialSelect();
        return ret;
      }

      return originalVal.call(this, value);
    };
  })($.fn.val);
});
($ => {
  const DEFAULT_TOP_SPACING = 0;

  class Sticky {
    constructor(element, options) {
      this.defaults = {
        topSpacing: DEFAULT_TOP_SPACING,
        zIndex: false,
        stopper: '#footer',
        stickyClass: false,
        startScrolling: 'top',
        minWidth: false
      };
      this.$element = element;
      this.options = this.assignOptions(options);
      this.$window = $(window);
      this.stopper = this.options.stopper;
      this.elementWidth = this.$element.outerWidth();
      this.elementHeight = this.$element.outerHeight(true);
      this.$placeholder = $('<div class="sticky-placeholder"></div>');
      this.scrollTop = 0;
      this.setPushPoint();
      this.setStopperPosition();
      this.bindEvents();
    }

    assignOptions(options) {
      return $.extend({}, this.defaults, options);
    }

    bindEvents() {
      this.$window.on('resize', this.handleResize.bind(this));
      this.$window.on('scroll', this.init.bind(this));
    }

    hasZIndex() {
      return typeof this.options.zIndex === 'number';
    }

    hasStopper() {
      return $(this.options.stopper).length || typeof this.options.stopper === 'number';
    }

    isScreenHeightEnough() {
      return this.$element.outerHeight() + this.options.topSpacing < this.$window.height();
    }

    setStopperPosition() {
      if (typeof this.options.stopper === 'string') {
        this.stopPoint = $(this.stopper).offset().top - this.options.topSpacing;
      } else if (typeof this.options.stopper === 'number') {
        this.stopPoint = this.options.stopper;
      }
    }

    setPushPoint() {
      if (this.options.startScrolling === 'bottom' && !this.isScreenHeightEnough()) {
        this.$pushPoint = this.$element.offset().top + this.$element.outerHeight(true) - this.$window.height();
      } else {
        this.$pushPoint = this.$element.offset().top - this.options.topSpacing;
      }
    }

    handleResize() {
      this.elementWidth = this.$element.outerWidth();
      this.elementHeight = this.$element.outerHeight(true);
      this.setPushPoint();
      this.setStopperPosition();
      this.init();
    }

    init() {
      if (this.options.minWidth && this.options.minWidth > this.$window.innerWidth()) {
        return false;
      }

      if (this.options.startScrolling === 'bottom' && !this.isScreenHeightEnough()) {
        this.scrollTop = this.$window.scrollTop() + this.$window.height();
      } else {
        this.scrollTop = this.$window.scrollTop();
      }

      if (this.$pushPoint < this.scrollTop) {
        this.appendPlaceholder();
        this.stickyStart();
      } else {
        this.stickyEnd();
      }

      if (this.$window.scrollTop() > this.$pushPoint) {
        this.stop();
      } else {
        this.stickyEnd();
      }
    }

    appendPlaceholder() {
      this.$element.after(this.$placeholder);
      this.$placeholder.css({
        width: this.elementWidth,
        height: this.elementHeight
      });
    }

    stickyStart() {
      if (this.options.stickyClass) {
        this.$element.addClass(this.options.stickyClass);
      } // @see: https://stackoverflow.com/a/4370047


      this.$element.get(0).style.overflow = 'scroll';
      const scrollHeight = this.$element.get(0).scrollHeight;
      this.$element.get(0).style.overflow = '';
      this.$element.css({
        'position': 'fixed',
        'width': this.elementWidth,
        'height': scrollHeight
      });

      if (this.options.startScrolling === 'bottom' && !this.isScreenHeightEnough()) {
        this.$element.css({
          bottom: 0,
          top: ''
        });
      } else {
        this.$element.css({
          top: this.options.topSpacing
        });
      }

      if (this.hasZIndex()) {
        this.$element.css({
          zIndex: this.options.zIndex
        });
      }
    }

    stickyEnd() {
      if (this.options.stickyClass) {
        this.$element.removeClass(this.options.stickyClass);
      }

      this.$placeholder.remove();
      this.$element.css({
        position: 'static',
        top: DEFAULT_TOP_SPACING
      });
    }

    stop() {
      if (this.stopPoint < $(this.$element).offset().top + this.$element.outerHeight(true)) {
        this.$element.css({
          position: 'absolute',
          bottom: 0,
          top: ''
        });
      }
    }

  }

  $.fn.sticky = function (options) {
    return this.each(function () {
      const $self = $(this);
      $(window).on('load', function () {
        const sticky = new Sticky($self, options);
        sticky.init();
      });
    });
  };
})(jQuery);
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.PerfectScrollbar=e()}(this,function(){"use strict";function t(t){return getComputedStyle(t)}function e(t,e){for(var i in e){var r=e[i];"number"==typeof r&&(r+="px"),t.style[i]=r}return t}function i(t){var e=document.createElement("div");return e.className=t,e}function r(t,e){if(!v)throw new Error("No element matching method supported");return v.call(t,e)}function l(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function n(t,e){return Array.prototype.filter.call(t.children,function(t){return r(t,e)})}function o(t,e){var i=t.element.classList,r=m.state.scrolling(e);i.contains(r)?clearTimeout(Y[e]):i.add(r)}function s(t,e){Y[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(m.state.scrolling(e))},t.settings.scrollingThreshold)}function a(t,e){o(t,e),s(t,e)}function c(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function h(t,e,i,r,l){var n=i[0],o=i[1],s=i[2],h=i[3],u=i[4],d=i[5];void 0===r&&(r=!0),void 0===l&&(l=!1);var f=t.element;t.reach[h]=null,f[s]<1&&(t.reach[h]="start"),f[s]>t[n]-t[o]-1&&(t.reach[h]="end"),e&&(f.dispatchEvent(c("ps-scroll-"+h)),e<0?f.dispatchEvent(c("ps-scroll-"+u)):e>0&&f.dispatchEvent(c("ps-scroll-"+d)),r&&a(t,h)),t.reach[h]&&(e||l)&&f.dispatchEvent(c("ps-"+h+"-reach-"+t.reach[h]))}function u(t){return parseInt(t,10)||0}function d(t){return r(t,"input,[contenteditable]")||r(t,"select,[contenteditable]")||r(t,"textarea,[contenteditable]")||r(t,"button,[contenteditable]")}function f(e){var i=t(e);return u(i.width)+u(i.paddingLeft)+u(i.paddingRight)+u(i.borderLeftWidth)+u(i.borderRightWidth)}function p(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function b(t,i){var r={width:i.railXWidth},l=Math.floor(t.scrollTop);i.isRtl?r.left=i.negativeScrollAdjustment+t.scrollLeft+i.containerWidth-i.contentWidth:r.left=t.scrollLeft,i.isScrollbarXUsingBottom?r.bottom=i.scrollbarXBottom-l:r.top=i.scrollbarXTop+l,e(i.scrollbarXRail,r);var n={top:l,height:i.railYHeight};i.isScrollbarYUsingRight?i.isRtl?n.right=i.contentWidth-(i.negativeScrollAdjustment+t.scrollLeft)-i.scrollbarYRight-i.scrollbarYOuterWidth:n.right=i.scrollbarYRight-t.scrollLeft:i.isRtl?n.left=i.negativeScrollAdjustment+t.scrollLeft+2*i.containerWidth-i.contentWidth-i.scrollbarYLeft-i.scrollbarYOuterWidth:n.left=i.scrollbarYLeft+t.scrollLeft,e(i.scrollbarYRail,n),e(i.scrollbarX,{left:i.scrollbarXLeft,width:i.scrollbarXWidth-i.railBorderXWidth}),e(i.scrollbarY,{top:i.scrollbarYTop,height:i.scrollbarYHeight-i.railBorderYWidth})}function g(t,e){function i(e){b[d]=g+Y*(e[a]-v),o(t,f),R(t),e.stopPropagation(),e.preventDefault()}function r(){s(t,f),t[p].classList.remove(m.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",i)}var l=e[0],n=e[1],a=e[2],c=e[3],h=e[4],u=e[5],d=e[6],f=e[7],p=e[8],b=t.element,g=null,v=null,Y=null;t.event.bind(t[h],"mousedown",function(e){g=b[d],v=e[a],Y=(t[n]-t[l])/(t[c]-t[u]),t.event.bind(t.ownerDocument,"mousemove",i),t.event.once(t.ownerDocument,"mouseup",r),t[p].classList.add(m.state.clicking),e.stopPropagation(),e.preventDefault()})}var v="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),m={main:"ps",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},Y={x:null,y:null},X=function(t){this.element=t,this.handlers={}},w={isEmpty:{configurable:!0}};X.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},X.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter(function(r){return!(!e||r===e)||(i.element.removeEventListener(t,r,!1),!1)})},X.prototype.unbindAll=function(){var t=this;for(var e in t.handlers)t.unbind(e)},w.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return 0===t.handlers[e].length})},Object.defineProperties(X.prototype,w);var y=function(){this.eventElements=[]};y.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return e||(e=new X(t),this.eventElements.push(e)),e},y.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},y.prototype.unbind=function(t,e,i){var r=this.eventElement(t);r.unbind(e,i),r.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(r),1)},y.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]},y.prototype.once=function(t,e,i){var r=this.eventElement(t),l=function(t){r.unbind(e,l),i(t)};r.bind(e,l)};var W=function(t,e,i,r,l){void 0===r&&(r=!0),void 0===l&&(l=!1);var n;if("top"===e)n=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");n=["contentWidth","containerWidth","scrollLeft","x","left","right"]}h(t,i,n,r,l)},L={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)},R=function(t){var e=t.element,i=Math.floor(e.scrollTop);t.containerWidth=e.clientWidth,t.containerHeight=e.clientHeight,t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(n(e,m.element.rail("x")).forEach(function(t){return l(t)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(n(e,m.element.rail("y")).forEach(function(t){return l(t)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=p(t,u(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=u((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=p(t,u(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=u(i*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),b(e,t),t.scrollbarXActive?e.classList.add(m.state.active("x")):(e.classList.remove(m.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=0),t.scrollbarYActive?e.classList.add(m.state.active("y")):(e.classList.remove(m.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)},T={"click-rail":function(t){t.event.bind(t.scrollbarY,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,R(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,R(t),e.stopPropagation()})},"drag-thumb":function(t){g(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),g(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(t){function e(e,r){var l=Math.floor(i.scrollTop);if(0===e){if(!t.scrollbarYActive)return!1;if(0===l&&r>0||l>=t.contentHeight-t.containerHeight&&r<0)return!t.settings.wheelPropagation}var n=i.scrollLeft;if(0===r){if(!t.scrollbarXActive)return!1;if(0===n&&e<0||n>=t.contentWidth-t.containerWidth&&e>0)return!t.settings.wheelPropagation}return!0}var i=t.element,l=function(){return r(i,":hover")},n=function(){return r(t.scrollbarX,":focus")||r(t.scrollbarY,":focus")};t.event.bind(t.ownerDocument,"keydown",function(r){if(!(r.isDefaultPrevented&&r.isDefaultPrevented()||r.defaultPrevented)&&(l()||n())){var o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if("IFRAME"===o.tagName)o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(d(o))return}var s=0,a=0;switch(r.which){case 37:s=r.metaKey?-t.contentWidth:r.altKey?-t.containerWidth:-30;break;case 38:a=r.metaKey?t.contentHeight:r.altKey?t.containerHeight:30;break;case 39:s=r.metaKey?t.contentWidth:r.altKey?t.containerWidth:30;break;case 40:a=r.metaKey?-t.contentHeight:r.altKey?-t.containerHeight:-30;break;case 32:a=r.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:a=t.containerHeight;break;case 34:a=-t.containerHeight;break;case 36:a=t.contentHeight;break;case 35:a=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==s||t.settings.suppressScrollY&&0!==a||(i.scrollTop-=a,i.scrollLeft+=s,R(t),e(s,a)&&r.preventDefault())}})},wheel:function(e){function i(t,i){var r=Math.floor(o.scrollTop),l=0===o.scrollTop,n=r+o.offsetHeight===o.scrollHeight,s=0===o.scrollLeft,a=o.scrollLeft+o.offsetWidth===o.scrollWidth;return!(Math.abs(i)>Math.abs(t)?l||n:s||a)||!e.settings.wheelPropagation}function r(t){var e=t.deltaX,i=-1*t.deltaY;return void 0!==e&&void 0!==i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!==e&&i!==i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}function l(e,i,r){if(!L.isWebKit&&o.querySelector("select:focus"))return!0;if(!o.contains(e))return!1;for(var l=e;l&&l!==o;){if(l.classList.contains(m.element.consuming))return!0;var n=t(l);if([n.overflow,n.overflowX,n.overflowY].join("").match(/(scroll|auto)/)){var s=l.scrollHeight-l.clientHeight;if(s>0&&!(0===l.scrollTop&&r>0||l.scrollTop===s&&r<0))return!0;var a=l.scrollWidth-l.clientWidth;if(a>0&&!(0===l.scrollLeft&&i<0||l.scrollLeft===a&&i>0))return!0}l=l.parentNode}return!1}function n(t){var n=r(t),s=n[0],a=n[1];if(!l(t.target,s,a)){var c=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(a?o.scrollTop-=a*e.settings.wheelSpeed:o.scrollTop+=s*e.settings.wheelSpeed,c=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(s?o.scrollLeft+=s*e.settings.wheelSpeed:o.scrollLeft-=a*e.settings.wheelSpeed,c=!0):(o.scrollTop-=a*e.settings.wheelSpeed,o.scrollLeft+=s*e.settings.wheelSpeed),R(e),(c=c||i(s,a))&&!t.ctrlKey&&(t.stopPropagation(),t.preventDefault())}}var o=e.element;void 0!==window.onwheel?e.event.bind(o,"wheel",n):void 0!==window.onmousewheel&&e.event.bind(o,"mousewheel",n)},touch:function(e){function i(t,i){var r=Math.floor(h.scrollTop),l=h.scrollLeft,n=Math.abs(t),o=Math.abs(i);if(o>n){if(i<0&&r===e.contentHeight-e.containerHeight||i>0&&0===r)return 0===window.scrollY&&i>0&&L.isChrome}else if(n>o&&(t<0&&l===e.contentWidth-e.containerWidth||t>0&&0===l))return!0;return!0}function r(t,i){h.scrollTop-=i,h.scrollLeft-=t,R(e)}function l(t){return t.targetTouches?t.targetTouches[0]:t}function n(t){return!(t.pointerType&&"pen"===t.pointerType&&0===t.buttons||(!t.targetTouches||1!==t.targetTouches.length)&&(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function o(t){if(n(t)){var e=l(t);u.pageX=e.pageX,u.pageY=e.pageY,d=(new Date).getTime(),null!==p&&clearInterval(p)}}function s(e,i,r){if(!h.contains(e))return!1;for(var l=e;l&&l!==h;){if(l.classList.contains(m.element.consuming))return!0;var n=t(l);if([n.overflow,n.overflowX,n.overflowY].join("").match(/(scroll|auto)/)){var o=l.scrollHeight-l.clientHeight;if(o>0&&!(0===l.scrollTop&&r>0||l.scrollTop===o&&r<0))return!0;var s=l.scrollLeft-l.clientWidth;if(s>0&&!(0===l.scrollLeft&&i<0||l.scrollLeft===s&&i>0))return!0}l=l.parentNode}return!1}function a(t){if(n(t)){var e=l(t),o={pageX:e.pageX,pageY:e.pageY},a=o.pageX-u.pageX,c=o.pageY-u.pageY;if(s(t.target,a,c))return;r(a,c),u=o;var h=(new Date).getTime(),p=h-d;p>0&&(f.x=a/p,f.y=c/p,d=h),i(a,c)&&t.preventDefault()}}function c(){e.settings.swipeEasing&&(clearInterval(p),p=setInterval(function(){e.isInitialized?clearInterval(p):f.x||f.y?Math.abs(f.x)<.01&&Math.abs(f.y)<.01?clearInterval(p):(r(30*f.x,30*f.y),f.x*=.8,f.y*=.8):clearInterval(p)},10))}if(L.supportsTouch||L.supportsIePointer){var h=e.element,u={},d=0,f={},p=null;L.supportsTouch?(e.event.bind(h,"touchstart",o),e.event.bind(h,"touchmove",a),e.event.bind(h,"touchend",c)):L.supportsIePointer&&(window.PointerEvent?(e.event.bind(h,"pointerdown",o),e.event.bind(h,"pointermove",a),e.event.bind(h,"pointerup",c)):window.MSPointerEvent&&(e.event.bind(h,"MSPointerDown",o),e.event.bind(h,"MSPointerMove",a),e.event.bind(h,"MSPointerUp",c)))}}},H=function(r,l){var n=this;if(void 0===l&&(l={}),"string"==typeof r&&(r=document.querySelector(r)),!r||!r.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=r,r.classList.add(m.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1};for(var o in l)n.settings[o]=l[o];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return r.classList.add(m.state.focus)},a=function(){return r.classList.remove(m.state.focus)};this.isRtl="rtl"===t(r).direction,this.isNegativeScroll=function(){var t=r.scrollLeft,e=null;return r.scrollLeft=-1,e=r.scrollLeft<0,r.scrollLeft=t,e}(),this.negativeScrollAdjustment=this.isNegativeScroll?r.scrollWidth-r.clientWidth:0,this.event=new y,this.ownerDocument=r.ownerDocument||document,this.scrollbarXRail=i(m.element.rail("x")),r.appendChild(this.scrollbarXRail),this.scrollbarX=i(m.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",s),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var c=t(this.scrollbarXRail);this.scrollbarXBottom=parseInt(c.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=u(c.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=u(c.borderLeftWidth)+u(c.borderRightWidth),e(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=u(c.marginLeft)+u(c.marginRight),e(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=i(m.element.rail("y")),r.appendChild(this.scrollbarYRail),this.scrollbarY=i(m.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",s),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var h=t(this.scrollbarYRail);this.scrollbarYRight=parseInt(h.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=u(h.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?f(this.scrollbarY):null,this.railBorderYWidth=u(h.borderTopWidth)+u(h.borderBottomWidth),e(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=u(h.marginTop)+u(h.marginBottom),e(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:r.scrollLeft<=0?"start":r.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:r.scrollTop<=0?"start":r.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(t){return T[t](n)}),this.lastScrollTop=Math.floor(r.scrollTop),this.lastScrollLeft=r.scrollLeft,this.event.bind(this.element,"scroll",function(t){return n.onScroll(t)}),R(this)};return H.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,e(this.scrollbarXRail,{display:"block"}),e(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=u(t(this.scrollbarXRail).marginLeft)+u(t(this.scrollbarXRail).marginRight),this.railYMarginHeight=u(t(this.scrollbarYRail).marginTop)+u(t(this.scrollbarYRail).marginBottom),e(this.scrollbarXRail,{display:"none"}),e(this.scrollbarYRail,{display:"none"}),R(this),W(this,"top",0,!1,!0),W(this,"left",0,!1,!0),e(this.scrollbarXRail,{display:""}),e(this.scrollbarYRail,{display:""}))},H.prototype.onScroll=function(t){this.isAlive&&(R(this),W(this,"top",this.element.scrollTop-this.lastScrollTop),W(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},H.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),l(this.scrollbarX),l(this.scrollbarY),l(this.scrollbarXRail),l(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},H.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")},H});
($ => {
  const inputData = {};
  const dataColor = '';
  const buttonCloseColor = '';
  const buttonCloseBlurColor = '#ced4da';
  const inputFocus = '1px solid #4285f4';
  const inputBlur = '1px solid #ced4da';
  const inputFocusShadow = '0 1px 0 0 #4285f4';
  const inputBlurShadow = '';
  const enterCharCode = 13;
  const arrowUpCharCode = 38;
  const arrowDownCharCode = 40;
  let count = -1;
  let nextScrollHeight = -45;

  class mdbAutocomplete {
    constructor(input, options) {
      this.defaults = {
        data: inputData,
        dataColor: dataColor,
        closeColor: buttonCloseColor,
        closeBlurColor: buttonCloseBlurColor,
        inputFocus: inputFocus,
        inputBlur: inputBlur,
        inputFocusShadow: inputFocusShadow,
        inputBlurShadow: inputBlurShadow
      };
      this.$input = input;
      this.options = this.assignOptions(options);
      this.$clearButton = $('.mdb-autocomplete-clear');
      this.$autocompleteWrap = $('<ul class="mdb-autocomplete-wrap"></ul>');
      this.init();
    }

    init() {
      this.setData();
      this.inputFocus();
      this.inputBlur();
      this.inputKeyupData();
      this.inputLiClick();
      this.clearAutocomplete();
    }

    assignOptions(options) {
      return $.extend({}, this.defaults, options);
    }

    setData() {
      if (Object.keys(this.options.data).length) {
        this.$autocompleteWrap.insertAfter(this.$input);
      }
    }

    inputFocus() {
      this.$input.on('focus', () => {
        this.$input.css('border-bottom', this.options.inputFocus);
        this.$input.css('box-shadow', this.options.inputFocusShadow);
      });
    }

    inputBlur() {
      this.$input.on('blur', () => {
        this.$input.css('border-bottom', this.options.inputBlur);
        this.$input.css('box-shadow', this.options.inputBlurShadow);
      });
    }

    inputKeyupData() {
      this.$input.on('keyup', e => {
        if (e.which === enterCharCode) {
          if (!this.options.data.includes(this.$input.val())) {
            this.options.data.push(this.$input.val());
          }

          this.$autocompleteWrap.find('.selected').trigger('click');
          this.$autocompleteWrap.empty();
          this.inputBlur();
          count = -1;
          nextScrollHeight = -45;
          return count;
        }

        const $inputValue = this.$input.val();
        this.$autocompleteWrap.empty();

        if ($inputValue.length) {
          for (const item in this.options.data) {
            if (this.options.data[item].toLowerCase().indexOf($inputValue.toLowerCase()) !== -1) {
              const option = $(`<li>${this.options.data[item]}</li>`);
              this.$autocompleteWrap.append(option);
            }
          }

          const $ulList = this.$autocompleteWrap;
          const $ulItems = this.$autocompleteWrap.find('li');
          const nextItemHeight = $ulItems.eq(count).outerHeight();
          const previousItemHeight = $ulItems.eq(count - 1).outerHeight();

          if (e.which === arrowDownCharCode) {
            if (count > $ulItems.length - 2) {
              count = -1;
              $ulItems.scrollTop(0);
              nextScrollHeight = -45;
              return;
            } else {
              count++;
            }

            nextScrollHeight += nextItemHeight;
            $ulList.scrollTop(nextScrollHeight);
            $ulItems.eq(count).addClass('selected');
          } else if (e.which === arrowUpCharCode) {
            if (count < 1) {
              count = $ulItems.length;
              $ulList.scrollTop($ulList.prop('scrollHeight'));
              nextScrollHeight = $ulList.prop('scrollHeight') - nextItemHeight;
            } else {
              count--;
            }

            nextScrollHeight -= previousItemHeight;
            $ulList.scrollTop(nextScrollHeight);
            $ulItems.eq(count).addClass('selected');
          }

          if ($inputValue.length === 0) {
            this.$clearButton.css('visibility', 'hidden');
          } else {
            this.$clearButton.css('visibility', 'visible');
          }

          this.$autocompleteWrap.children().css('color', this.options.dataColor);
        } else {
          this.$clearButton.css('visibility', 'hidden');
        }
      });
    }

    inputLiClick() {
      this.$autocompleteWrap.on('click', 'li', e => {
        e.preventDefault();
        this.$input.val($(e.target).text());
        this.$autocompleteWrap.empty();
      });
    }

    clearAutocomplete() {
      this.$clearButton.on('click', e => {
        count = -1;
        nextScrollHeight = -45;
        e.preventDefault();
        const $this = $(e.currentTarget);
        $this.parent().find('.mdb-autocomplete').val('');
        $this.css('visibility', 'hidden');
        this.$autocompleteWrap.empty();
        $this.parent().find('label').removeClass('active');
      });
    }

    changeSVGcolors() {
      if (this.$input.hasClass('mdb-autocomplete')) {
        this.$input.on('click keyup', e => {
          e.preventDefault();
          $(e.target).parent().find('.mdb-autocomplete-clear').find('svg').css('fill', this.options.closeColor);
        });
        this.$input.on('blur', e => {
          e.preventDefault();
          $(e.target).parent().find('.mdb-autocomplete-clear').find('svg').css('fill', this.options.closeBlurColor);
        });
      }
    }

  }

  $.fn.mdbAutocomplete = function (options) {
    return this.each(function () {
      new mdbAutocomplete($(this), options);
    });
  };
})(jQuery);
/*
    Enhanced Bootstrap Modals
    https://mdbootstrap.com
    office@mdbootstrap.com
*/

(function($){
  $('body').on('shown.bs.modal', '.modal', function() {
    if(!$('.modal-backdrop').length) {

      $modal_dialog = $(this).children('.modal-dialog')

      if($modal_dialog.hasClass('modal-side')) {
        $(this).addClass('modal-scrolling');
        $('body').addClass('scrollable');
      }

      if($modal_dialog.hasClass('modal-frame')) {
        $(this).addClass('modal-content-clickable');
        $('body').addClass('scrollable');
      }
    }
  });
  $('body').on('hidden.bs.modal', '.modal', function() {
    $('body').removeClass('scrollable');
  });
})(jQuery);

(function ($) {
  $.fn.mdbTreeview = function () {
    const $this = $(this);

    if ($this.hasClass('treeview')) {
      const $toggler = $this.find('.rotate');
      $.each($toggler, e => {
        $($toggler[e]).off('click');
        $($toggler[e]).on('click', function () {
          const $this = $(this);
          $this.siblings('.nested').toggleClass('active');
          $this.toggleClass('down');
        });
      });
    }

    if ($this.hasClass('treeview-animated')) {
      const $elements = $this.find('.treeview-animated-element');
      const $closed = $this.find('.closed');
      $this.find('.nested').hide();
      $closed.off('click');
      $closed.on('click', function () {
        const $this = $(this);
        const $target = $this.siblings('.nested');
        const $pointer = $this.children('.fa-angle-right');
        $this.toggleClass('open');
        $pointer.toggleClass('down');
        !$target.hasClass('active') ? $target.addClass('active').slideDown() : $target.removeClass('active').slideUp();
        return false;
      });
      $elements.off('click');
      $elements.on('click', function () {
        const $this = $(this);
        $this.hasClass('opened') ? $this.removeClass('opened') : ($elements.removeClass('opened'), $this.addClass('opened'));
      });
    }

    if ($this.hasClass('treeview-colorful')) {
      const $elements = $this.find('.treeview-colorful-element');
      const $header = $this.find('.treeview-colorful-items-header');
      $this.find('.nested').hide();
      $header.off('click');
      $header.on('click', function () {
        const $this = $(this);
        const $target = $this.siblings('.nested');
        const $pointerPlus = $this.children('.fa-plus-circle');
        const $pointerMinus = $this.children('.fa-minus-circle');
        $this.toggleClass('open');
        $pointerPlus.removeClass('fa-plus-circle');
        $pointerPlus.addClass('fa-minus-circle');
        $pointerMinus.removeClass('fa-minus-circle');
        $pointerMinus.addClass('fa-plus-circle');
        !$target.hasClass('active') ? $target.addClass('active').slideDown() : $target.removeClass('active').slideUp();
      });
      $elements.off('click');
      $elements.on('click', function () {
        const $this = $(this);
        $this.hasClass('opened') ? $elements.removeClass('opened') : ($elements.removeClass('opened'), $this.addClass('opened'));
      });
    }
  };
})(jQuery);