/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ThemeSwitcher.js":
/*!******************************!*\
  !*** ./src/ThemeSwitcher.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = (switchTheme);

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculator_engeener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator/engeener */ "./src/calculator/engeener.js");
/* harmony import */ var _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeSwitcher */ "./src/ThemeSwitcher.js");



let calcE = new _calculator_engeener__WEBPACK_IMPORTED_MODULE_0__["default"]('Engineer', true);
calcE.init();


let calcS = new _calculator_engeener__WEBPACK_IMPORTED_MODULE_0__["default"]('Simple', false);
calcS.init();


/***/ }),

/***/ "./src/calculator/CalcJournal.js":
/*!***************************************!*\
  !*** ./src/calculator/CalcJournal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalcJournalItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalcJournalItem */ "./src/calculator/CalcJournalItem.js");


function CalcJournal(divId) {
    /**
     * CalcJournalItem[]
     */
    this.journal = [];

    this.container = document.getElementById(divId);

    this.push = function(formula, result) {
        this.journal.push( new _CalcJournalItem__WEBPACK_IMPORTED_MODULE_0__["default"](formula, result) )
    }

    this.display = function() {
        let result = '';
        for(let i = 0; i < this.journal.length; i ++) {
            let item = this.journal[i];
            let itemResult = `
            <div class="journalItem">
                <div class="journalItem--result">${item.result}</div>
                <div class="journalItem--formula">${item.formulaString}</div>
            </div>
            `;
            result += itemResult;
        }
        this.container.innerHTML = result;

    }
}
/* harmony default export */ __webpack_exports__["default"] = (CalcJournal);

/***/ }),

/***/ "./src/calculator/CalcJournalItem.js":
/*!*******************************************!*\
  !*** ./src/calculator/CalcJournalItem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function CalcJournalItem(formulaString, result) {
    this.formulaString = formulaString;
    this.result = result;
}

/* harmony default export */ __webpack_exports__["default"] = (CalcJournalItem);

/***/ }),

/***/ "./src/calculator/engeener.js":
/*!************************************!*\
  !*** ./src/calculator/engeener.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalcJournal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalcJournal */ "./src/calculator/CalcJournal.js");


function ECalculator(divId, engineerMode){


    let _this = this;

    _this.journalContainerId = "journalContainer-" + Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

    _this.journal = undefined;

    _this.divId = divId;
    _this.engineerMode = engineerMode !== undefined ? engineerMode : false ;

    _this.resultDiv = undefined;
    _this.formulaDiv = undefined;
    _this.historyDiv = undefined;

    
    /**
     * formula string
     */
    _this.formulaString = '';



    /**
     * some kind of history
     */
    _this.actors = [];


    /**
     * 
     */
    _this.result = null;

    /**
     * just container for complex numbers
     */
    _this.numCell = '';

    /**
     * add number to result
     */
    _this.plusAction = function(firstActor, secondActor) {
        return firstActor + secondActor;
    }

    /**
     * 
     */
    _this.minusAction = function(firstActor, secondActor) {
        return firstActor - secondActor;
    }

    /**
     * 
     */
    _this.multiAction = function(firstActor, secondActor) {
        return firstActor * secondActor;
    }

    /**
     * 
     */
    _this.delimiterAction = function(firstActor, secondActor) {
        return firstActor / secondActor;
    } 
    
    /**
     * 
     */
    _this.sqrtAction = function(firstActor, secondActor) {
        secondActor = secondActor ? secondActor : 2 ;
        return Math.pow(firstActor, 1/secondActor);
    }

    /**
     * 
     */
    _this.lnAction = function(firstActor) {
        return Math.log(firstActor);
    }

    /**
     * 
     */
    _this.factorialAction = function(firstActor) {
        let res = 1;
        for(let i = 1; i <= firstActor; i++) {
            res = res * i;
        }
        return res;
    }

    /**
     * 
     */
    _this.powAction = function(firstActor, secondActor){
        secondActor = secondActor ? secondActor : 2 ;
        return Math.pow(firstActor, secondActor);
    }

    /**
     * Unarny minus action
     */
    _this.unarnyMinus = function(firstActor, secondActor) {
        
        return firstActor * -1; 
    }

    /**
     * show results in field
     */
    _this.displayResult = function() {

        _this.formulaDiv.innerHTML = _this.actors.join(' ');
        
        if(_this.result != NaN && parseFloat(_this.result)) {
            _this.resultDiv.innerHTML = _this.result;
        }
        _this.historyDiv.innerHTML = _this.actors.join('<br/>');

    }

    /**
     * reset numCell
     */
    _this.clearNumCell = function() {
        _this.numCell = '';
    }

    /**
     * if more than one digit in number
     */
    _this.updateNumCell = function(symbol) {

        symbol = typeof symbol === 'string' ? symbol : symbol.target.childNodes[0].data ;
        

        _this.numCell += symbol;
        _this.displayResult();
        _this.formulaDiv.innerHTML = _this.formulaDiv.innerHTML + _this.numCell;
        
    }

    /**
     * 
     */
    _this.pushNumCellToActors = function() {
        if(_this.numCell && parseFloat(_this.numCell)) {
            _this.actors.push( parseFloat(_this.numCell) );
            _this.numCell = '';
        }
    }

    _this.pushToJournal = function() {
        _this.journal.push( _this.formulaDiv.innerHTML, _this.resultDiv.innerHTML );
        console.log(_this.journal);
        _this.journal.display();
    }

    /**
     * initiate calculator
     */
    _this.init = function() {

        _this.buildCalculator(_this.divId, _this.engineerMode);

        _this.journal = new _CalcJournal__WEBPACK_IMPORTED_MODULE_0__["default"](_this.journalContainerId);

        /**
         * attach number button click
         */
        let num_btns = document.querySelectorAll('#' + _this.divId + ' .number');
        if(num_btns && num_btns.length) {
            for(let i = 0; i < num_btns.length; i++) {
                num_btns[i].addEventListener('click', _this.updateNumCell);
            }
        }

        /**
         * attach math actions button click
         */
        let act_btns = document.querySelectorAll('#' + _this.divId + ' .m_action');
        if(act_btns && act_btns.length) {
            for(let i=0; i < act_btns.length; i++) {
                act_btns[i].addEventListener('click',  _this.mathAction);
            }
        }

        /**
         * attach events for equal and clear btns
         */
        let eq_btn = document.querySelectorAll('#' + _this.divId + ' .showResult')[0];
        eq_btn.addEventListener('click', _this.calculate);
        eq_btn.addEventListener('click', _this.pushToJournal);

        let clear_btn = document.querySelectorAll('#' + _this.divId + ' .clear')[0];
        clear_btn.addEventListener('click', _this.reset)
    }
    /**
     * @returns boolean true if last history record was math action
     */
    _this.checkLas_thistoryIsAction = function() {
        if(!_this.actors || !_this.actors.length) {
            return false;
        } else {
            let lastAct = _this.actors[ _this.actors - 1 ];
            return _this.availableHandlers.hasOwnProperty( lastAct );
        }
    }

    /**
     * 
     */
    _this.mathAction = function( action ) {
        
        action = typeof action === 'string' ? action : action.target.childNodes[0].data;

        _this.pushNumCellToActors();

        if(_this.checkLas_thistoryIsAction()) {
            // rewrite last action with new one
            _this.actors[ _this.actors.length - 1 ] = action;
        } else {
            _this.actors.push(action);
        }
        _this.calculate();
    }

    /**
     * 
     */
    _this.availableHandlers = {
        '+' : _this.plusAction,      // calc summ
        '-' : _this.minusAction,     // calc diff
        '*' : _this.multiAction,     // multiply action
        '/' : _this.delimiterAction, // delimiter action
        '√' : _this.sqrtAction,      // sqrt
        'ln': _this.lnAction,        // ln
        'n!': _this.factorialAction, // factorial 
        'x^2' : _this.powAction,     // pow    
        '+/-' : _this.unarnyMinus,
    };
    // actions, requires 2 parameters  
    _this.twoActorsActions = {
        '+': '',    
        '-': '',
        '*': '',
        '/': '',
    };


    /**
     * 
     */
    _this.calculate = function () {
        if (_this.numCell && _this.numCell != '') {
            _this.pushNumCellToActors();
        }
        /** == Simple calculator
        try {
            _this.result = eval(_this.actors.join(''));
        } catch (e) {

        }
        */
        _this.result = _this.actors[0];
        
        // first actor is already in result
        for(let i = 1; i < _this.actors.length; i++) {
            if(_this.availableHandlers.hasOwnProperty(_this.actors[i])) {
                // call math handler
                if(_this.twoActorsActions.hasOwnProperty(_this.actors[i])) {
                    // use 2 numbers and skip next stage
                    _this.result = _this.availableHandlers[ _this.actors[i] ](_this.result, _this.actors[++i]);
                } else {
                    _this.result = _this.availableHandlers[ _this.actors[i] ](_this.result);
                }
                
            }
        }


        _this.displayResult();
    }

    _this.reset = function() {
        _this.actors = [];
        _this.result = 0;
        _this.numCell = '';
        _this.displayResult();
        _this.resultDiv.innerHTML = '';
        _this.formulaDiv.innerHTML = '';
        
    }

    /**
     * some kind of Builder pattern
     */
    _this.buildCalculator = function(containerId, engineerMode) {
        


        
        let html = `
        <div class="calcWrapper">
            <div class="history"></div>
            <div class="journalContainer" id="` + this.journalContainerId + `"></div>
            <div class="formula"></div>
            <div class="result"></div>
            <div class="buttons">
                <div class="btn_row">
                    <button class="clear">C</button>
                </div>` +
                ( engineerMode === true ?
                `<div class="ing_mode btn_row">
                    <button class="m_action">√</button>
                    <button class="m_action">ln</button>
                    <button class="m_action">n!</button>
                    <button class="m_action">x^2</button>
                    <button class="m_action">+/-</button>
                </div>` : '' ) +
                `<div class="btn_row">
                    <button class="number">7</button>
                    <button class="number">8</button>
                    <button class="number">9</button>
                    <button class="m_action action_plus">+</button><br/>
                </div>
                <div class="btn_row">
                    <button class="number">4</button>
                    <button class="number">5</button>
                    <button class="number">6</button>
                    <button class="m_action action_minus">-</button><br/>
                </div>
                <div class="btn_row">
                    <button class="number">1</button>
                    <button class="number">2</button>
                    <button class="number">3</button>
                    <button class="m_action action_multiply">*</button><br/>
                </div>
                <div class="btn_row">
                    <button class="number">0</button>
                    <button class="number">.</button>
                    <button class="m_action action_ceil">/</button>

                    <input type="button" value="=" class="showResult" /><br/>
                </div>
            </div>
        </div>`;

        document.getElementById(containerId).innerHTML = html;

        _this.resultDiv = document.querySelectorAll('#' + _this.divId + ' .result')[0];
        _this.formulaDiv = document.querySelectorAll('#' + _this.divId + ' .formula')[0];
        _this.historyDiv = document.querySelectorAll('#' + _this.divId + ' .history')[0];
        

    }

  
}

/* harmony default export */ __webpack_exports__["default"] = (ECalculator);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RoZW1lU3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsY3VsYXRvci9DYWxjSm91cm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsY3VsYXRvci9DYWxjSm91cm5hbEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGN1bGF0b3IvZW5nZWVuZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQSw0RTs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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Ozs7QUFHQTs7QUFFQSIsImZpbGUiOiJhcHAuNjM4YzY1ZWUxODg1ZTA1MTcyM2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN3aXRjaFRoZW1lOyIsImltcG9ydCBFQ2FsY3VsYXRvciBmcm9tICcuL2NhbGN1bGF0b3IvZW5nZWVuZXInO1xyXG5pbXBvcnQgc3dpdGNoVGhlbWUgZnJvbSAnLi9UaGVtZVN3aXRjaGVyJztcclxuXHJcbmxldCBjYWxjRSA9IG5ldyBFQ2FsY3VsYXRvcignRW5naW5lZXInLCB0cnVlKTtcclxuY2FsY0UuaW5pdCgpO1xyXG5cclxuXHJcbmxldCBjYWxjUyA9IG5ldyBFQ2FsY3VsYXRvcignU2ltcGxlJywgZmFsc2UpO1xyXG5jYWxjUy5pbml0KCk7XHJcbiIsImltcG9ydCBDYWxjSm91cm5hbEl0ZW0gZnJvbSAnLi9DYWxjSm91cm5hbEl0ZW0nO1xyXG5cclxuZnVuY3Rpb24gQ2FsY0pvdXJuYWwoZGl2SWQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsY0pvdXJuYWxJdGVtW11cclxuICAgICAqL1xyXG4gICAgdGhpcy5qb3VybmFsID0gW107XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCk7XHJcblxyXG4gICAgdGhpcy5wdXNoID0gZnVuY3Rpb24oZm9ybXVsYSwgcmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5qb3VybmFsLnB1c2goIG5ldyBDYWxjSm91cm5hbEl0ZW0oZm9ybXVsYSwgcmVzdWx0KSApXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmpvdXJuYWwubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5qb3VybmFsW2ldO1xyXG4gICAgICAgICAgICBsZXQgaXRlbVJlc3VsdCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpvdXJuYWxJdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiam91cm5hbEl0ZW0tLXJlc3VsdFwiPiR7aXRlbS5yZXN1bHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiam91cm5hbEl0ZW0tLWZvcm11bGFcIj4ke2l0ZW0uZm9ybXVsYVN0cmluZ308L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBpdGVtUmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSByZXN1bHQ7XHJcblxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhbGNKb3VybmFsOyIsImZ1bmN0aW9uIENhbGNKb3VybmFsSXRlbShmb3JtdWxhU3RyaW5nLCByZXN1bHQpIHtcclxuICAgIHRoaXMuZm9ybXVsYVN0cmluZyA9IGZvcm11bGFTdHJpbmc7XHJcbiAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY0pvdXJuYWxJdGVtOyIsImltcG9ydCBDYWxjSm91cm5hbCBmcm9tICcuL0NhbGNKb3VybmFsJztcclxuXHJcbmZ1bmN0aW9uIEVDYWxjdWxhdG9yKGRpdklkLCBlbmdpbmVlck1vZGUpe1xyXG5cclxuXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLmpvdXJuYWxDb250YWluZXJJZCA9IFwiam91cm5hbENvbnRhaW5lci1cIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwMCAtIDEgKyAxKSkgKyAxO1xyXG5cclxuICAgIF90aGlzLmpvdXJuYWwgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgX3RoaXMuZGl2SWQgPSBkaXZJZDtcclxuICAgIF90aGlzLmVuZ2luZWVyTW9kZSA9IGVuZ2luZWVyTW9kZSAhPT0gdW5kZWZpbmVkID8gZW5naW5lZXJNb2RlIDogZmFsc2UgO1xyXG5cclxuICAgIF90aGlzLnJlc3VsdERpdiA9IHVuZGVmaW5lZDtcclxuICAgIF90aGlzLmZvcm11bGFEaXYgPSB1bmRlZmluZWQ7XHJcbiAgICBfdGhpcy5oaXN0b3J5RGl2ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBmb3JtdWxhIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBfdGhpcy5mb3JtdWxhU3RyaW5nID0gJyc7XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNvbWUga2luZCBvZiBoaXN0b3J5XHJcbiAgICAgKi9cclxuICAgIF90aGlzLmFjdG9ycyA9IFtdO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBfdGhpcy5yZXN1bHQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICoganVzdCBjb250YWluZXIgZm9yIGNvbXBsZXggbnVtYmVyc1xyXG4gICAgICovXHJcbiAgICBfdGhpcy5udW1DZWxsID0gJyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgbnVtYmVyIHRvIHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBfdGhpcy5wbHVzQWN0aW9uID0gZnVuY3Rpb24oZmlyc3RBY3Rvciwgc2Vjb25kQWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gZmlyc3RBY3RvciArIHNlY29uZEFjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIF90aGlzLm1pbnVzQWN0aW9uID0gZnVuY3Rpb24oZmlyc3RBY3Rvciwgc2Vjb25kQWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gZmlyc3RBY3RvciAtIHNlY29uZEFjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIF90aGlzLm11bHRpQWN0aW9uID0gZnVuY3Rpb24oZmlyc3RBY3Rvciwgc2Vjb25kQWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gZmlyc3RBY3RvciAqIHNlY29uZEFjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIF90aGlzLmRlbGltaXRlckFjdGlvbiA9IGZ1bmN0aW9uKGZpcnN0QWN0b3IsIHNlY29uZEFjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpcnN0QWN0b3IgLyBzZWNvbmRBY3RvcjtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIF90aGlzLnNxcnRBY3Rpb24gPSBmdW5jdGlvbihmaXJzdEFjdG9yLCBzZWNvbmRBY3Rvcikge1xyXG4gICAgICAgIHNlY29uZEFjdG9yID0gc2Vjb25kQWN0b3IgPyBzZWNvbmRBY3RvciA6IDIgO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhmaXJzdEFjdG9yLCAxL3NlY29uZEFjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBfdGhpcy5sbkFjdGlvbiA9IGZ1bmN0aW9uKGZpcnN0QWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5sb2coZmlyc3RBY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgX3RoaXMuZmFjdG9yaWFsQWN0aW9uID0gZnVuY3Rpb24oZmlyc3RBY3Rvcikge1xyXG4gICAgICAgIGxldCByZXMgPSAxO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gZmlyc3RBY3RvcjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IHJlcyAqIGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgX3RoaXMucG93QWN0aW9uID0gZnVuY3Rpb24oZmlyc3RBY3Rvciwgc2Vjb25kQWN0b3Ipe1xyXG4gICAgICAgIHNlY29uZEFjdG9yID0gc2Vjb25kQWN0b3IgPyBzZWNvbmRBY3RvciA6IDIgO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhmaXJzdEFjdG9yLCBzZWNvbmRBY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbmFybnkgbWludXMgYWN0aW9uXHJcbiAgICAgKi9cclxuICAgIF90aGlzLnVuYXJueU1pbnVzID0gZnVuY3Rpb24oZmlyc3RBY3Rvciwgc2Vjb25kQWN0b3IpIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZmlyc3RBY3RvciAqIC0xOyBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNob3cgcmVzdWx0cyBpbiBmaWVsZFxyXG4gICAgICovXHJcbiAgICBfdGhpcy5kaXNwbGF5UmVzdWx0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIF90aGlzLmZvcm11bGFEaXYuaW5uZXJIVE1MID0gX3RoaXMuYWN0b3JzLmpvaW4oJyAnKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihfdGhpcy5yZXN1bHQgIT0gTmFOICYmIHBhcnNlRmxvYXQoX3RoaXMucmVzdWx0KSkge1xyXG4gICAgICAgICAgICBfdGhpcy5yZXN1bHREaXYuaW5uZXJIVE1MID0gX3RoaXMucmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcy5oaXN0b3J5RGl2LmlubmVySFRNTCA9IF90aGlzLmFjdG9ycy5qb2luKCc8YnIvPicpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlc2V0IG51bUNlbGxcclxuICAgICAqL1xyXG4gICAgX3RoaXMuY2xlYXJOdW1DZWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgX3RoaXMubnVtQ2VsbCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaWYgbW9yZSB0aGFuIG9uZSBkaWdpdCBpbiBudW1iZXJcclxuICAgICAqL1xyXG4gICAgX3RoaXMudXBkYXRlTnVtQ2VsbCA9IGZ1bmN0aW9uKHN5bWJvbCkge1xyXG5cclxuICAgICAgICBzeW1ib2wgPSB0eXBlb2Ygc3ltYm9sID09PSAnc3RyaW5nJyA/IHN5bWJvbCA6IHN5bWJvbC50YXJnZXQuY2hpbGROb2Rlc1swXS5kYXRhIDtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgX3RoaXMubnVtQ2VsbCArPSBzeW1ib2w7XHJcbiAgICAgICAgX3RoaXMuZGlzcGxheVJlc3VsdCgpO1xyXG4gICAgICAgIF90aGlzLmZvcm11bGFEaXYuaW5uZXJIVE1MID0gX3RoaXMuZm9ybXVsYURpdi5pbm5lckhUTUwgKyBfdGhpcy5udW1DZWxsO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIF90aGlzLnB1c2hOdW1DZWxsVG9BY3RvcnMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihfdGhpcy5udW1DZWxsICYmIHBhcnNlRmxvYXQoX3RoaXMubnVtQ2VsbCkpIHtcclxuICAgICAgICAgICAgX3RoaXMuYWN0b3JzLnB1c2goIHBhcnNlRmxvYXQoX3RoaXMubnVtQ2VsbCkgKTtcclxuICAgICAgICAgICAgX3RoaXMubnVtQ2VsbCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdGhpcy5wdXNoVG9Kb3VybmFsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgX3RoaXMuam91cm5hbC5wdXNoKCBfdGhpcy5mb3JtdWxhRGl2LmlubmVySFRNTCwgX3RoaXMucmVzdWx0RGl2LmlubmVySFRNTCApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKF90aGlzLmpvdXJuYWwpO1xyXG4gICAgICAgIF90aGlzLmpvdXJuYWwuZGlzcGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaW5pdGlhdGUgY2FsY3VsYXRvclxyXG4gICAgICovXHJcbiAgICBfdGhpcy5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIF90aGlzLmJ1aWxkQ2FsY3VsYXRvcihfdGhpcy5kaXZJZCwgX3RoaXMuZW5naW5lZXJNb2RlKTtcclxuXHJcbiAgICAgICAgX3RoaXMuam91cm5hbCA9IG5ldyBDYWxjSm91cm5hbChfdGhpcy5qb3VybmFsQ29udGFpbmVySWQpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhdHRhY2ggbnVtYmVyIGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBudW1fYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgX3RoaXMuZGl2SWQgKyAnIC5udW1iZXInKTtcclxuICAgICAgICBpZihudW1fYnRucyAmJiBudW1fYnRucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG51bV9idG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBudW1fYnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzLnVwZGF0ZU51bUNlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhdHRhY2ggbWF0aCBhY3Rpb25zIGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBhY3RfYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgX3RoaXMuZGl2SWQgKyAnIC5tX2FjdGlvbicpO1xyXG4gICAgICAgIGlmKGFjdF9idG5zICYmIGFjdF9idG5zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaSA8IGFjdF9idG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RfYnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICBfdGhpcy5tYXRoQWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogYXR0YWNoIGV2ZW50cyBmb3IgZXF1YWwgYW5kIGNsZWFyIGJ0bnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgZXFfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBfdGhpcy5kaXZJZCArICcgLnNob3dSZXN1bHQnKVswXTtcclxuICAgICAgICBlcV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpcy5jYWxjdWxhdGUpO1xyXG4gICAgICAgIGVxX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzLnB1c2hUb0pvdXJuYWwpO1xyXG5cclxuICAgICAgICBsZXQgY2xlYXJfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBfdGhpcy5kaXZJZCArICcgLmNsZWFyJylbMF07XHJcbiAgICAgICAgY2xlYXJfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXMucmVzZXQpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGJvb2xlYW4gdHJ1ZSBpZiBsYXN0IGhpc3RvcnkgcmVjb3JkIHdhcyBtYXRoIGFjdGlvblxyXG4gICAgICovXHJcbiAgICBfdGhpcy5jaGVja0xhc190aGlzdG9yeUlzQWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoIV90aGlzLmFjdG9ycyB8fCAhX3RoaXMuYWN0b3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGxhc3RBY3QgPSBfdGhpcy5hY3RvcnNbIF90aGlzLmFjdG9ycyAtIDEgXTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmF2YWlsYWJsZUhhbmRsZXJzLmhhc093blByb3BlcnR5KCBsYXN0QWN0ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIF90aGlzLm1hdGhBY3Rpb24gPSBmdW5jdGlvbiggYWN0aW9uICkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFjdGlvbiA9IHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnID8gYWN0aW9uIDogYWN0aW9uLnRhcmdldC5jaGlsZE5vZGVzWzBdLmRhdGE7XHJcblxyXG4gICAgICAgIF90aGlzLnB1c2hOdW1DZWxsVG9BY3RvcnMoKTtcclxuXHJcbiAgICAgICAgaWYoX3RoaXMuY2hlY2tMYXNfdGhpc3RvcnlJc0FjdGlvbigpKSB7XHJcbiAgICAgICAgICAgIC8vIHJld3JpdGUgbGFzdCBhY3Rpb24gd2l0aCBuZXcgb25lXHJcbiAgICAgICAgICAgIF90aGlzLmFjdG9yc1sgX3RoaXMuYWN0b3JzLmxlbmd0aCAtIDEgXSA9IGFjdGlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfdGhpcy5hY3RvcnMucHVzaChhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcy5jYWxjdWxhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBfdGhpcy5hdmFpbGFibGVIYW5kbGVycyA9IHtcclxuICAgICAgICAnKycgOiBfdGhpcy5wbHVzQWN0aW9uLCAgICAgIC8vIGNhbGMgc3VtbVxyXG4gICAgICAgICctJyA6IF90aGlzLm1pbnVzQWN0aW9uLCAgICAgLy8gY2FsYyBkaWZmXHJcbiAgICAgICAgJyonIDogX3RoaXMubXVsdGlBY3Rpb24sICAgICAvLyBtdWx0aXBseSBhY3Rpb25cclxuICAgICAgICAnLycgOiBfdGhpcy5kZWxpbWl0ZXJBY3Rpb24sIC8vIGRlbGltaXRlciBhY3Rpb25cclxuICAgICAgICAn4oiaJyA6IF90aGlzLnNxcnRBY3Rpb24sICAgICAgLy8gc3FydFxyXG4gICAgICAgICdsbic6IF90aGlzLmxuQWN0aW9uLCAgICAgICAgLy8gbG5cclxuICAgICAgICAnbiEnOiBfdGhpcy5mYWN0b3JpYWxBY3Rpb24sIC8vIGZhY3RvcmlhbCBcclxuICAgICAgICAneF4yJyA6IF90aGlzLnBvd0FjdGlvbiwgICAgIC8vIHBvdyAgICBcclxuICAgICAgICAnKy8tJyA6IF90aGlzLnVuYXJueU1pbnVzLFxyXG4gICAgfTtcclxuICAgIC8vIGFjdGlvbnMsIHJlcXVpcmVzIDIgcGFyYW1ldGVycyAgXHJcbiAgICBfdGhpcy50d29BY3RvcnNBY3Rpb25zID0ge1xyXG4gICAgICAgICcrJzogJycsICAgIFxyXG4gICAgICAgICctJzogJycsXHJcbiAgICAgICAgJyonOiAnJyxcclxuICAgICAgICAnLyc6ICcnLFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgX3RoaXMuY2FsY3VsYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChfdGhpcy5udW1DZWxsICYmIF90aGlzLm51bUNlbGwgIT0gJycpIHtcclxuICAgICAgICAgICAgX3RoaXMucHVzaE51bUNlbGxUb0FjdG9ycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiogPT0gU2ltcGxlIGNhbGN1bGF0b3JcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBfdGhpcy5yZXN1bHQgPSBldmFsKF90aGlzLmFjdG9ycy5qb2luKCcnKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuICAgICAgICBfdGhpcy5yZXN1bHQgPSBfdGhpcy5hY3RvcnNbMF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZmlyc3QgYWN0b3IgaXMgYWxyZWFkeSBpbiByZXN1bHRcclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgX3RoaXMuYWN0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKF90aGlzLmF2YWlsYWJsZUhhbmRsZXJzLmhhc093blByb3BlcnR5KF90aGlzLmFjdG9yc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNhbGwgbWF0aCBoYW5kbGVyXHJcbiAgICAgICAgICAgICAgICBpZihfdGhpcy50d29BY3RvcnNBY3Rpb25zLmhhc093blByb3BlcnR5KF90aGlzLmFjdG9yc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgMiBudW1iZXJzIGFuZCBza2lwIG5leHQgc3RhZ2VcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXN1bHQgPSBfdGhpcy5hdmFpbGFibGVIYW5kbGVyc1sgX3RoaXMuYWN0b3JzW2ldIF0oX3RoaXMucmVzdWx0LCBfdGhpcy5hY3RvcnNbKytpXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc3VsdCA9IF90aGlzLmF2YWlsYWJsZUhhbmRsZXJzWyBfdGhpcy5hY3RvcnNbaV0gXShfdGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBfdGhpcy5kaXNwbGF5UmVzdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3RoaXMucmVzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBfdGhpcy5hY3RvcnMgPSBbXTtcclxuICAgICAgICBfdGhpcy5yZXN1bHQgPSAwO1xyXG4gICAgICAgIF90aGlzLm51bUNlbGwgPSAnJztcclxuICAgICAgICBfdGhpcy5kaXNwbGF5UmVzdWx0KCk7XHJcbiAgICAgICAgX3RoaXMucmVzdWx0RGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIF90aGlzLmZvcm11bGFEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzb21lIGtpbmQgb2YgQnVpbGRlciBwYXR0ZXJuXHJcbiAgICAgKi9cclxuICAgIF90aGlzLmJ1aWxkQ2FsY3VsYXRvciA9IGZ1bmN0aW9uKGNvbnRhaW5lcklkLCBlbmdpbmVlck1vZGUpIHtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxjV3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGlzdG9yeVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiam91cm5hbENvbnRhaW5lclwiIGlkPVwiYCArIHRoaXMuam91cm5hbENvbnRhaW5lcklkICsgYFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybXVsYVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuX3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbGVhclwiPkM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmAgK1xyXG4gICAgICAgICAgICAgICAgKCBlbmdpbmVlck1vZGUgPT09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJpbmdfbW9kZSBidG5fcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1fYWN0aW9uXCI+4oiaPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1fYWN0aW9uXCI+bG48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibV9hY3Rpb25cIj5uITwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtX2FjdGlvblwiPnheMjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtX2FjdGlvblwiPisvLTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnICkgK1xyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJidG5fcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm51bWJlclwiPjc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibnVtYmVyXCI+ODwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJudW1iZXJcIj45PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1fYWN0aW9uIGFjdGlvbl9wbHVzXCI+KzwvYnV0dG9uPjxici8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG5fcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm51bWJlclwiPjQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibnVtYmVyXCI+NTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJudW1iZXJcIj42PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1fYWN0aW9uIGFjdGlvbl9taW51c1wiPi08L2J1dHRvbj48YnIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuX3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJudW1iZXJcIj4xPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm51bWJlclwiPjI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibnVtYmVyXCI+MzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtX2FjdGlvbiBhY3Rpb25fbXVsdGlwbHlcIj4qPC9idXR0b24+PGJyLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bl9yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibnVtYmVyXCI+MDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJudW1iZXJcIj4uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1fYWN0aW9uIGFjdGlvbl9jZWlsXCI+LzwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiPVwiIGNsYXNzPVwic2hvd1Jlc3VsdFwiIC8+PGJyLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCkuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICAgICAgX3RoaXMucmVzdWx0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBfdGhpcy5kaXZJZCArICcgLnJlc3VsdCcpWzBdO1xyXG4gICAgICAgIF90aGlzLmZvcm11bGFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIF90aGlzLmRpdklkICsgJyAuZm9ybXVsYScpWzBdO1xyXG4gICAgICAgIF90aGlzLmhpc3RvcnlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIF90aGlzLmRpdklkICsgJyAuaGlzdG9yeScpWzBdO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVDYWxjdWxhdG9yO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9