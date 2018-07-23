!function(t){var n={};function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(i,r,function(n){return t[n]}.bind(null,r));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=5)}([function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}();var r=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=document.getElementById(n),this.journalContainerId="journalContainer-"+Math.floor(1e4*Math.random())+1,this.build(e)}return i(t,[{key:"build",value:function(){this.container&&(container.innerHTML='\n            <div class="calculatorWrapper">\n                <div class="calculator-main">\n                    <div class="calculator-formula"></div>\n                    <div class="calculator-result"></div>\n                    <div class="calculator-buttons">\n                        <div class="calculator-buttons-main">\n                            <div class="calculator-buttons-row">\n                                <button>C</button>\n                            </div>\n                            <div class="calculator-buttons-numbers">\n                                <button class="calculator-buttons-numbers-item">7</button>\n                                <button class="calculator-buttons-numbers-item">8</button>\n                                <button class="calculator-buttons-numbers-item">9</button>\n                                <button class="calculator-buttons-numbers-item">6</button>\n                                <button class="calculator-buttons-numbers-item">5</button>\n                                <button class="calculator-buttons-numbers-item">4</button>\n                                <button class="calculator-buttons-numbers-item">3</button>\n                                <button class="calculator-buttons-numbers-item">2</button>\n                                <button class="calculator-buttons-numbers-item">1</button>\n                                <button class="calculator-buttons-numbers-item">0</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="calculator-additional">\n                </div>\n            </div>\n        ')}}]),t}();n.default=r},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.plus=function(t,n){return t+n},n.minus=function(t,n){return t-n},n.delimiter=function(t,n){return t/n},n.multiply=function(t,n){return t*n},n.sqrt=function(t,n){return n=n||2,Math.pow(t,1/n)},n.ln=function(t){return Math.log(t)},n.factorial=function(t){for(var n=1,e=1;e<=t;e++)n*=e;return n},n.pow=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.pow(t,n)},n.unaryMinus=function(t){return-1*t}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,n){this.formulaString=t,this.result=n}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(e(2));n.default=function(t){this.journal=[],this.container=document.getElementById(t),this.push=function(t,n){this.journal.push(new i.default(t,n))},this.display=function(){for(var t="",n=0;n<this.journal.length;n++){var e=this.journal[n];t+='\n            <div class="journalItem">\n                <div class="journalItem--result">'+e.result+'</div>\n                <div class="journalItem--formula">'+e.formulaString+"</div>\n            </div>\n            "}this.container.innerHTML=t}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),r=function(t){return t&&t.__esModule?t:{default:t}}(e(3)),u=e(1),s=e(0);var l=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._this=void 0,this.display=void 0,this.divId=void 0,this.journalContainerId="",this.engineerMode=!1,this.resultDiv=void 0,this.formulaDiv=void 0,this.historyDiv=void 0,this.formulaString="",this.actors=[],this.result=null,this.numCell="",this.availableHandlers={"+":u.plus,"-":u.minus,"*":u.multiply,"/":u.delimiter,"√":u.sqrt,ln:u.ln,"n!":u.factorial,"x^2":u.pow,"+/-":u.unaryMinus},this.twoActorsActions={"+":"","-":"","*":"","/":""},this._this=this,this.journalContainerId="journalContainer-"+Math.floor(1e4*Math.random())+1,this.divId=n,this.engineerMode=void 0!==e&&e}return i(t,[{key:"displayResul",value:function(){_this.formulaDiv.innerHTML=_this.actors.join(" "),NaN!=_this.result&&parseFloat(_this.result)&&(_this.resultDiv.innerHTML=_this.result),_this.historyDiv.innerHTML=_this.actors.join("<br/>")}},{key:"clearNumCell",value:function(){_this.numCell=""}},{key:"updateNumCell",value:function(t){t="string"==typeof t?t:t.target.childNodes[0].data,_this.numCell+=t,_this.displayResult(),_this.formulaDiv.innerHTML=_this.formulaDiv.innerHTML+_this.numCell}},{key:"pushNumCellToActors",value:function(){_this.numCell&&parseFloat(_this.numCell)&&(_this.actors.push(parseFloat(_this.numCell)),_this.numCell="")}},{key:"pushToJournal",value:function(){_this.journal.push(_this.formulaDiv.innerHTML,_this.resultDiv.innerHTML),console.log(_this.journal),_this.journal.display()}},{key:"init",value:function(){_this.buildCalculator(_this.divId,_this.engineerMode),_this.journal=new r.default(_this.journalContainerId);var t=document.querySelectorAll("#"+_this.divId+" .number");if(t&&t.length)for(var n=0;n<t.length;n++)t[n].addEventListener("click",_this.updateNumCell);var e=document.querySelectorAll("#"+_this.divId+" .m_action");if(e&&e.length)for(var i=0;i<e.length;i++)e[i].addEventListener("click",_this.mathAction);var u=document.querySelectorAll("#"+_this.divId+" .showResult")[0];u.addEventListener("click",_this.calculate),u.addEventListener("click",_this.pushToJournal),document.querySelectorAll("#"+_this.divId+" .clear")[0].addEventListener("click",_this.reset)}},{key:"checkLas_thistoryIsAction",value:function(){if(_this.actors&&_this.actors.length){var t=_this.actors[_this.actors-1];return _this.availableHandlers.hasOwnProperty(t)}return!1}},{key:"mathAction",value:function(t){t="string"==typeof t?t:t.target.childNodes[0].data,_this.pushNumCellToActors(),_this.checkLas_thistoryIsAction()?_this.actors[_this.actors.length-1]=t:_this.actors.push(t),_this.calculate()}},{key:"calculate",value:function(){_this.numCell&&""!=_this.numCell&&_this.pushNumCellToActors(),_this.result=_this.actors[0];for(var t=1;t<_this.actors.length;t++)_this.availableHandlers.hasOwnProperty(_this.actors[t])&&(_this.twoActorsActions.hasOwnProperty(_this.actors[t])?_this.result=_this.availableHandlers[_this.actors[t]](_this.result,_this.actors[++t]):_this.result=_this.availableHandlers[_this.actors[t]](_this.result));_this.displayResult()}},{key:"reset",value:function(){_this.actors=[],_this.result=0,_this.numCell="",_this.displayResult(),_this.resultDiv.innerHTML="",_this.formulaDiv.innerHTML=""}},{key:"buildCalculator",value:function(t,n){this.display=new s.CalculatorDisplay(t),_this.resultDiv=document.querySelectorAll("#"+_this.divId+" .result")[0],_this.formulaDiv=document.querySelectorAll("#"+_this.divId+" .formula")[0],_this.historyDiv=document.querySelectorAll("#"+_this.divId+" .history")[0]}}]),t}();n.default=l},function(t,n,e){"use strict";new(function(t){return t&&t.__esModule?t:{default:t}}(e(4)).default)("Engineer",!0).init()}]);