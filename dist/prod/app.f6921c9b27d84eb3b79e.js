!function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=12)}([function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),o=function(t){return t&&t.__esModule?t:{default:t}}(e(11)),r=e(9),s=e(8);var a=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.display=void 0,this.divId=void 0,this.journalContainerId="",this.engineerMode=!1,this.resultDiv=void 0,this.formulaDiv=void 0,this.historyDiv=void 0,this.formulaString="",this.actors=[],this.result=null,this.numCell="",this.availableHandlers={"+":r.plus,"-":r.minus,"*":r.multiply,"/":r.delimiter,"√":r.sqrt,ln:r.ln,"n!":r.factorial,"x^2":r.pow,"+/-":r.unaryMinus},this.twoActorsActions={"+":"","-":"","*":"","/":""},this.this=this,this.journalContainerId="journalContainer-"+Math.floor(1e4*Math.random())+1,this.journal=new o.default(this.journalContainerId),this.divId=n,this.engineerMode=void 0!==e&&e}return i(t,[{key:"displayResult",value:function(){this.formulaDiv.innerHTML=this.actors.join(" "),NaN!=this.result&&parseFloat(this.result)&&(this.resultDiv.innerHTML=this.result)}},{key:"clearNumCell",value:function(){this.numCell=""}},{key:"updateNumCell",value:function(t){t="string"==typeof t?t:t.target.childNodes[0].data,this.numCell+=t,this.displayResult(),this.formulaDiv.innerHTML=this.formulaDiv.innerHTML+this.numCell}},{key:"pushNumCellToActors",value:function(){this.numCell&&parseFloat(this.numCell)&&(this.actors.push(parseFloat(this.numCell)),this.numCell="")}},{key:"pushToJournal",value:function(){this.journal.push(this.formulaDiv.innerHTML,this.resultDiv.innerHTML),this.journal.display()}},{key:"init",value:function(){this.buildCalculator(this.divId,this.engineerMode);for(var t=document.querySelectorAll("#"+this.divId+" .calculator-buttons-numbers-item"),n=0;n<t.length;n++)t[n].addEventListener("click",this.updateNumCell.bind(this));for(var e=document.querySelectorAll("#"+this.divId+" .calculator-buttons-actions--item"),i=0;i<e.length;i++)e[i].addEventListener("click",this.mathAction.bind(this));document.querySelector("#"+this.divId+" .calculator-buttons-numbers-item-calculate").addEventListener("click",this.calculate.bind(this)),document.querySelector("#"+this.divId+" .calculator-buttons-clear").addEventListener("click",this.reset.bind(this)),this.formulaDiv=document.querySelector("#"+this.divId+" .calculator-formula"),this.resultDiv=document.querySelector("#"+this.divId+" .calculator-result")}},{key:"checkLasthistoryIsAction",value:function(){if(this.actors&&this.actors.length){var t=this.actors[this.actors-1];return this.availableHandlers.hasOwnProperty(t)}return!1}},{key:"mathAction",value:function(t){t="string"==typeof t?t:t.target.childNodes[0].data,this.pushNumCellToActors(),this.checkLasthistoryIsAction()?this.actors[this.actors.length-1]=t:this.actors.push(t),this.calculate()}},{key:"calculate",value:function(){this.numCell&&""!=this.numCell&&this.pushNumCellToActors(),this.result=this.actors[0];for(var t=1;t<this.actors.length;t++)this.availableHandlers.hasOwnProperty(this.actors[t])&&(this.twoActorsActions.hasOwnProperty(this.actors[t])?this.result=this.availableHandlers[this.actors[t]](this.result,this.actors[++t]):this.result=this.availableHandlers[this.actors[t]](this.result));this.displayResult(),this.pushToJournal()}},{key:"reset",value:function(){this.actors=[],this.result=0,this.numCell="",this.displayResult(),this.resultDiv.innerHTML="",this.formulaDiv.innerHTML=""}},{key:"buildCalculator",value:function(t,n){this.display=new s.CalculatorDisplay(this)}}]),t}();n.default=a},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,i=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,r=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?e+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,n,e){var i={},o=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),r=function(t){var n={};return function(t){if("function"==typeof t)return t();if(void 0===n[t]){var e=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}}(),s=null,a=0,l=[],u=e(1);function c(t,n){for(var e=0;e<t.length;e++){var o=t[e],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(m(o.parts[s],n))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(m(o.parts[s],n));i[o.id]={id:o.id,refs:1,parts:a}}}}function d(t,n){for(var e=[],i={},o=0;o<t.length;o++){var r=t[o],s=n.base?r[0]+n.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):e.push(i[s]={id:s,parts:[a]})}return e}function h(t,n){var e=r(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===t.insertAt)i?i.nextSibling?e.insertBefore(n,i.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),l.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=r(t.insertInto+" "+t.insertAt.before);e.insertBefore(n,o)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=l.indexOf(t);n>=0&&l.splice(n,1)}function f(t){var n=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),b(n,t.attrs),h(t,n),n}function b(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function m(t,n){var e,i,o,r;if(n.transform&&t.css){if(!(r=n.transform(t.css)))return function(){};t.css=r}if(n.singleton){var l=a++;e=s||(s=f(n)),i=y.bind(null,e,l,!1),o=y.bind(null,e,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(n,t.attrs),h(t,n),n}(n),i=function(t,n,e){var i=e.css,o=e.sourceMap,r=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||r)&&(i=u(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,e,n),o=function(){p(e),e.href&&URL.revokeObjectURL(e.href)}):(e=f(n),i=function(t,n){var e=n.css,i=n.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){p(e)});return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=d(t,n);return c(e,n),function(t){for(var o=[],r=0;r<e.length;r++){var s=e[r];(a=i[s.id]).refs--,o.push(a)}t&&c(d(t,n),n);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var v=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}();function y(t,n,e,i){var o=e?"":i.css;if(t.styleSheet)t.styleSheet.cssText=v(n,o);else{var r=document.createTextNode(o),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(r,s[n]):t.appendChild(r)}}},function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(i),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[e].concat(r).concat([o]).join("\n")}return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),n.push(s))}},n}},function(t,n,e){(t.exports=e(3)(!1)).push([t.i,"/**\r\n *\r\n */\n/* == Variables == */\n.TwoPositionsSwitcher {\n  line-height: 22px;\n  border-radius: 10px;\n  position: relative;\n  border: 1px #000 solid;\n  display: inline-block;\n  cursor: pointer;\n  height: 22px; }\n  .TwoPositionsSwitcher--position {\n    position: relative;\n    top: 0;\n    padding: 0 10px; }\n    .TwoPositionsSwitcher--position:nth-child(1) {\n      left: 0; }\n    .TwoPositionsSwitcher--position:nth-child(2) {\n      right: 0; }\n    .TwoPositionsSwitcher--position--active {\n      /* == selected position style ==*/ }\n  .TwoPositionsSwitcher--switcher {\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    background: #cecece;\n    border: 1px #000 solid;\n    width: 50%;\n    height: 22px;\n    border-radius: 10px;\n    transition-property: margin-left;\n    transition-duration: 1s; }\n    .TwoPositionsSwitcher--switcher--pos1 {\n      margin-left: 0; }\n    .TwoPositionsSwitcher--switcher--pos2 {\n      margin-left: 50%; }\n\n/* == Variables == */\n.calculatorWrapper {\n  position: relative;\n  width: 400px; }\n\n.calculator-main {\n  clear: both;\n  position: relative;\n  width: 90%; }\n  .calculator-main .calculator-formula {\n    text-align: right;\n    margin: 0 48px 0 0;\n    height: 20px; }\n  .calculator-main .calculator-result {\n    /* ==  == */\n    display: block;\n    height: 45px;\n    line-height: 45px;\n    font-size: 1.3em;\n    border-radius: 5px;\n    border: 1px #333 solid;\n    margin: 10px 48px 10px 0;\n    text-align: right;\n    padding: 0 5px;\n    text-overflow: ellipsis; }\n  .calculator-main .calculator-buttons {\n    display: flex;\n    flex-flow: row wrap; }\n    .calculator-main .calculator-buttons-main {\n      float: left;\n      width: %; }\n    .calculator-main .calculator-buttons-clear {\n      width: 100px;\n      height: 50px;\n      margin: 0 5px 5px 0px;\n      background-color: #efefef;\n      transition-property: background-color;\n      border: 1px #333 solid;\n      transition-duration: 0.5s; }\n      .calculator-main .calculator-buttons-clear:hover {\n        background-color: #333;\n        color: #cdcdcd;\n        border-color: #666; }\n\n.calculator-buttons-numbers-item-calculate {\n  width: 100px;\n  height: 100px;\n  margin: 0 5px 5px 0px;\n  background-color: #efefef;\n  transition-property: background-color;\n  border: 1px #333 solid;\n  transition-duration: 0.5s; }\n  .calculator-buttons-numbers-item-calculate:hover {\n    background-color: #333;\n    color: #cdcdcd;\n    border-color: #666; }\n\n/* == numeric pad block == */\n.calculator-buttons-numbers {\n  display: flex;\n  justify-content: center;\n  flex-flow: row wrap;\n  text-align: center; }\n  .calculator-buttons-numbers-item {\n    width: 100px;\n    height: 100px;\n    margin: 0 5px 5px 0px;\n    background-color: #efefef;\n    transition-property: background-color;\n    border: 1px #333 solid;\n    transition-duration: 0.5s; }\n    .calculator-buttons-numbers-item:hover {\n      background-color: #333;\n      color: #cdcdcd;\n      border-color: #666; }\n\n/* == Actions block ==*/\n.calculator-buttons-actions {\n  display: flex;\n  justify-content: center;\n  flex-flow: row wrap;\n  text-align: center; }\n  .calculator-buttons-actions--item {\n    width: 25%;\n    height: 50px;\n    margin: 0 5px 5px 0px;\n    background-color: #efefef;\n    transition-property: background-color;\n    border: 1px #333 solid;\n    transition-duration: 0.5s; }\n    .calculator-buttons-actions--item:hover {\n      background-color: #333;\n      color: #cdcdcd;\n      border-color: #666; }\n\n/*== Additional ==*/\n.calculator-additional {\n  position: absolute;\n  left: 200%;\n  top: 0; }\n\n.calculator-buttons-clear {\n  flex: 0 0 33.3333%;\n  height: 50px; }\n\n/**\r\n * blocks\r\n */\n/**\r\n * Themes\r\n */\n/**\r\n * variables\r\n */\n.Dark {\n  background: #999;\n  color: #333; }\n  .Dark .result {\n    background: #999;\n    border-color: #333; }\n\n/**\r\n * variables\r\n */\n/**\r\n * styles\r\n */\n.Lighter {\n  background: #ededed;\n  color: #333; }\n  .Lighter .result {\n    color: #333; }\n\n/**\r\n  * blocks\r\n  */\nheader {\n  margin-top: 80px; }\n\n#top-menu ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none; }\n\n#top-menu > ul > li {\n  float: left; }\n\n#top-menu > ul > li > ul {\n  top: 100%;\n  left: 0; }\n\n#top-menu li {\n  position: relative; }\n\n#top-menu a {\n  display: block;\n  white-space: nowrap; }\n\n#top-menu ul li li ul {\n  top: 0;\n  left: 100%; }\n\n#top-menu ul ul {\n  visibility: hidden;\n  position: absolute; }\n\n#top-menu li:hover > ul {\n  visibility: visible; }\n\n#top-menu {\n  padding: 0 5px; }\n\n#top-menu,\n#top-menu > ul {\n  background-color: #333;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px; }\n\n#top-menu:after {\n  content: \"\";\n  clear: both;\n  display: block; }\n\n#top-menu a {\n  text-decoration: none;\n  color: #FFFFFF;\n  padding: 5px 10px 5px 10px;\n  line-height: 1.2; }\n\n#top-menu > ul > li > a {\n  padding: 5px 10px;\n  margin: 2px 0;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px; }\n\n#top-menu > ul > li > ul + a {\n  padding-bottom: 7px;\n  margin-bottom: 0; }\n\n#top-menu > ul > li > ul + a:after {\n  content: \" \\25BC\"; }\n\n#top-menu > ul > li:hover > a {\n  background-color: #cdcdcd; }\n\n#top-menu > ul > li:hover > ul + a {\n  -webkit-border-radius: 5px 5px 0 0;\n  -moz-border-radius: 5px 5px 0 0;\n  border-radius: 5px 5px 0 0; }\n\n#top-menu > ul > li > ul {\n  min-width: 100%;\n  background-color: #333; }\n\n#top-menu > ul > li li > ul + a:after {\n  content: \" \\25B6\"; }\n\n#top-menu > ul > li > ul > li:last-child,\n#top-menu > ul > li > ul {\n  -webkit-border-radius: 0 0 5px 5px;\n  -moz-border-radius: 0 0 5px 5px;\n  border-radius: 0 0 5px 5px; }\n\n#top-menu ul li li:hover,\n#top-menu ul li li ul,\n#top-menu ul li li ul li:hover {\n  background-color: #cdcdcd; }\n\n#top-menu > ul > li > ul,\n#top-menu ul li li ul {\n  -webkit-transition: all 300ms;\n  -moz-transition: all 300ms;\n  -o-transition: all 300ms;\n  transition: all 300ms; }\n\n#top-menu > ul > li > ul {\n  top: 400%;\n  opacity: 0; }\n\n#top-menu > ul > li:hover > ul {\n  top: 100%;\n  opacity: 1; }\n\n#top-menu ul li ul li ul {\n  left: 400%;\n  opacity: 0; }\n\n#top-menu ul li ul li:hover ul {\n  left: 100%;\n  opacity: 1; }\n\nbody {\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; }\n\n.clear {\n  display: inline-block;\n  width: 100%;\n  height: 1px;\n  clear: both; }\n",""])},function(t,n,e){var i=e(4);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(2)(i,o);i.locals&&(t.exports=i.locals)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}();var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.availableThemes=["Lighter","Dark"],this.defaultTheme="Lighter",document.body.className=this.defaultTheme}return i(t,[{key:"switchTheme",value:function(t){-1!=this.availableThemes.indexOf(t)&&(document.body.className=t)}}]),t}();n.default=o},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}();var o=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.settings={positionClass:"TwoPositionsSwitcher--position",positionActiveClass:"TwoPositionsSwitcher--position--active",switcherActivePositionClass:["TwoPositionsSwitcher--switcher--pos1","TwoPositionsSwitcher--switcher--pos2"],switcherBaseClass:"TwoPositionsSwitcher--switcher"},this.container=document.querySelector(n),this.switcherElement=void 0,this.positions=e,this.elementId="TwoPositionsSwitcher-"+Math.floor(1e4*Math.random())+1,this.value=this.positions[0],this.init(n),this.createEvent(i),this.setActivePosition(this.positions[0]),this}return i(t,[{key:"init",value:function(t){for(var n="",e=0;e<this.positions.length;e++)n+='<span class="'+this.settings.positionClass+'" data-value="'+this.positions[e]+'">\n                '+this.positions[e]+"\n            </span>";var i='\n        <span class="TwoPositionsSwitcher" id="'+this.elementId+'">\n            '+n+'\n            <span class="'+this.settings.switcherBaseClass+'"></span>\n        </span>\n        ';this.container.innerHTML=i,this.switcherElement=document.querySelector("#"+this.elementId+" ."+this.settings.switcherBaseClass),document.getElementById(this.elementId).addEventListener("click",this.switch.bind(this))}},{key:"switch",value:function(t){document.querySelectorAll("#"+this.elementId+" ."+this.settings.positionClass).forEach(function(t){t.classList.remove(this.settings.positionActiveClass),t.className=t.className.replace(this.settings.positionActiveClass,"")}.bind(this));document.querySelector("#"+this.elementId+' [data-value="'+this.value+'"]');for(var n=0;n<this.positions.length;n++)if(this.positions[n].toLowerCase()!==this.value.toLowerCase()){this.setActivePosition(this.positions[n]);break}}},{key:"setActivePosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=this.positions.indexOf(t);-1!==n&&(this.value=t,document.querySelector("#"+this.elementId).dataset.value=t,document.querySelector("#"+this.elementId+' [data-value="'+t+'"]').classList.add(this.settings.positionActiveClass),this.settings.switcherActivePositionClass.forEach(function(t){this.switcherElement.classList.remove(t)}.bind(this)),this.switcherElement.classList.add(this.settings.switcherActivePositionClass[n]),document.dispatchEvent(this.event))}},{key:"createEvent",value:function(t){this.event=new CustomEvent(t,{detail:this})}}]),t}();n.default=o},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.CalculatorDisplay=void 0;var i=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}();!function(t){t&&t.__esModule}(e(0));var o=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=document.getElementById(n.divId),this.calc=n,this.build(n.availableHandlers)}return i(t,[{key:"build",value:function(t){var n="";if(t)for(var e in t)n+='<button class="calculator-buttons-actions--item">'+e+"</button>";var i='\n            <div class="calculatorWrapper">\n                <div class="calculator-main">\n                    <div class="calculator-formula"></div>\n                    <div class="calculator-result"></div>\n                    <div class="calculator-buttons">\n                        <div class="calculator-buttons-main">\n                            <div class="calculator-buttons-row">\n                                <button class="calculator-buttons-clear">C</button>\n                            </div>\n                            <div class="calculator-buttons-numbers">\n                                <button class="calculator-buttons-numbers-item">7</button>\n                                <button class="calculator-buttons-numbers-item">8</button>\n                                <button class="calculator-buttons-numbers-item">9</button>\n                                <button class="calculator-buttons-numbers-item">6</button>\n                                <button class="calculator-buttons-numbers-item">5</button>\n                                <button class="calculator-buttons-numbers-item">4</button>\n                                <button class="calculator-buttons-numbers-item">1</button>\n                                <button class="calculator-buttons-numbers-item">2</button>\n                                <button class="calculator-buttons-numbers-item">3</button>\n                                <button class="calculator-buttons-numbers-item-calculate">=</button>\n                                <button class="calculator-buttons-numbers-item">0</button>\n                                <button class="calculator-buttons-numbers-item">.</button>\n                            </div>\n                        </div>\n                        \n                            '+n+'\n                        \n                    </div>\n                </div>\n                <div class="calculator-additional">\n                    <div class="journal-wrapper" id="'+this.calc.journalContainerId+'"></div>\n                </div>\n            </div>\n        ';this.container&&(this.container.innerHTML=i)}}]),t}();n.CalculatorDisplay=o},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.plus=function(t,n){return t+n},n.minus=function(t,n){return t-n},n.delimiter=function(t,n){return t/n},n.multiply=function(t,n){return t*n},n.sqrt=function(t,n){return n=n||2,Math.pow(t,1/n)},n.ln=function(t){return Math.log(t)},n.factorial=function(t){for(var n=1,e=1;e<=t;e++)n*=e;return n},n.pow=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.pow(t,n)},n.unaryMinus=function(t){return-1*t}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,n){this.formulaString=t,this.result=n}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),o=function(t){return t&&t.__esModule?t:{default:t}}(e(10));var r=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.journal=[],this.divId=n}return i(t,[{key:"push",value:function(t,n){this.journal.push(new o.default(t,n)),console.log("111")}},{key:"display",value:function(){for(var t="",n=0;n<this.journal.length;n++){var e=this.journal[n];t+='\n            <div class="journalItem">\n                <div class="journalItem--result">'+e.result+'</div>\n                <div class="journalItem--formula">'+e.formulaString+"</div>\n            </div>\n            "}document.getElementById(this.divId).innerHTML=t}}]),t}();n.default=r},function(t,n,e){"use strict";var i=s(e(0)),o=s(e(7)),r=s(e(6));function s(t){return t&&t.__esModule?t:{default:t}}e(5),new i.default("Engineer",!0).init(),document.themeSwitcher=new r.default,document.themeSwitcherInterface=new o.default("#themeSwitcher",["Lighter","Dark"],"switchTheme"),document.addEventListener("switchTheme",function(t){document.themeSwitcher.switchTheme(t.detail.value)})}]);