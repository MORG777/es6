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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./src/styles/styles.scss":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/Home1/Documents/node_modules/css-loader!C:/Users/Home1/Documents/node_modules/sass-loader/lib/loader.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n *\r\n */\n/* == Variables == */\n.TwoPositionsSwitcher {\n  line-height: 22px;\n  border-radius: 10px;\n  position: relative;\n  border: 1px #000 solid;\n  display: inline-block;\n  cursor: pointer;\n  height: 22px; }\n  .TwoPositionsSwitcher--position {\n    position: relative;\n    top: 0;\n    padding: 0 10px; }\n    .TwoPositionsSwitcher--position:nth-child(1) {\n      left: 0; }\n    .TwoPositionsSwitcher--position:nth-child(2) {\n      right: 0; }\n    .TwoPositionsSwitcher--position--active {\n      /* == selected position style ==*/ }\n  .TwoPositionsSwitcher--switcher {\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    background: #cecece;\n    border: 1px #000 solid;\n    width: 50%;\n    height: 22px;\n    border-radius: 10px;\n    transition-property: margin-left;\n    transition-duration: 1s; }\n    .TwoPositionsSwitcher--switcher--pos1 {\n      margin-left: 0; }\n    .TwoPositionsSwitcher--switcher--pos2 {\n      margin-left: 50%; }\n\n/* == Variables == */\n.calculatorWrapper {\n  position: relative;\n  width: 400px; }\n\n.calculator-main {\n  clear: both;\n  position: relative;\n  width: 90%; }\n  .calculator-main .calculator-formula {\n    text-align: right;\n    margin: 0 48px 0 0;\n    height: 20px; }\n  .calculator-main .calculator-result {\n    /* ==  == */\n    display: block;\n    height: 45px;\n    line-height: 45px;\n    font-size: 1.3em;\n    border-radius: 5px;\n    border: 1px #333 solid;\n    margin: 10px 48px 10px 0;\n    text-align: right;\n    padding: 0 5px;\n    text-overflow: ellipsis; }\n  .calculator-main .calculator-buttons {\n    display: flex;\n    flex-flow: row wrap; }\n    .calculator-main .calculator-buttons-main {\n      float: left;\n      width: %; }\n    .calculator-main .calculator-buttons-clear {\n      width: 100px;\n      height: 50px;\n      margin: 0 5px 5px 0px;\n      background-color: #efefef;\n      transition-property: background-color;\n      border: 1px #333 solid;\n      transition-duration: 0.5s; }\n      .calculator-main .calculator-buttons-clear:hover {\n        background-color: #333;\n        color: #cdcdcd;\n        border-color: #666; }\n\n.calculator-buttons-numbers-item-calculate {\n  width: 100px;\n  height: 100px;\n  margin: 0 5px 5px 0px;\n  background-color: #efefef;\n  transition-property: background-color;\n  border: 1px #333 solid;\n  transition-duration: 0.5s; }\n  .calculator-buttons-numbers-item-calculate:hover {\n    background-color: #333;\n    color: #cdcdcd;\n    border-color: #666; }\n\n/* == numeric pad block == */\n.calculator-buttons-numbers {\n  display: flex;\n  justify-content: center;\n  flex-flow: row wrap;\n  text-align: center; }\n  .calculator-buttons-numbers-item {\n    width: 100px;\n    height: 100px;\n    margin: 0 5px 5px 0px;\n    background-color: #efefef;\n    transition-property: background-color;\n    border: 1px #333 solid;\n    transition-duration: 0.5s; }\n    .calculator-buttons-numbers-item:hover {\n      background-color: #333;\n      color: #cdcdcd;\n      border-color: #666; }\n\n/* == Actions block ==*/\n.calculator-buttons-actions {\n  display: flex;\n  justify-content: center;\n  flex-flow: row wrap;\n  text-align: center; }\n  .calculator-buttons-actions--item {\n    width: 25%;\n    height: 50px;\n    margin: 0 5px 5px 0px;\n    background-color: #efefef;\n    transition-property: background-color;\n    border: 1px #333 solid;\n    transition-duration: 0.5s; }\n    .calculator-buttons-actions--item:hover {\n      background-color: #333;\n      color: #cdcdcd;\n      border-color: #666; }\n\n/*== Additional ==*/\n.calculator-additional {\n  position: absolute;\n  left: 200%;\n  top: 0; }\n\n.calculator-buttons-clear {\n  flex: 0 0 33.3333%;\n  height: 50px; }\n\n/**\r\n * blocks\r\n */\n/**\r\n * Themes\r\n */\n/**\r\n * variables\r\n */\n.Dark {\n  background: #999;\n  color: #333; }\n  .Dark .result {\n    background: #999;\n    border-color: #333; }\n\n/**\r\n * variables\r\n */\n/**\r\n * styles\r\n */\n.Lighter {\n  background: #ededed;\n  color: #333; }\n  .Lighter .result {\n    color: #333; }\n\n/**\r\n  * blocks\r\n  */\nheader {\n  margin-top: 80px; }\n\n#top-menu ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none; }\n\n#top-menu > ul > li {\n  float: left; }\n\n#top-menu > ul > li > ul {\n  top: 100%;\n  left: 0; }\n\n#top-menu li {\n  position: relative; }\n\n#top-menu a {\n  display: block;\n  white-space: nowrap; }\n\n#top-menu ul li li ul {\n  top: 0;\n  left: 100%; }\n\n#top-menu ul ul {\n  visibility: hidden;\n  position: absolute; }\n\n#top-menu li:hover > ul {\n  visibility: visible; }\n\n#top-menu {\n  padding: 0 5px; }\n\n#top-menu,\n#top-menu > ul {\n  background-color: #333;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px; }\n\n#top-menu:after {\n  content: \"\";\n  clear: both;\n  display: block; }\n\n#top-menu a {\n  text-decoration: none;\n  color: #FFFFFF;\n  padding: 5px 10px 5px 10px;\n  line-height: 1.2; }\n\n#top-menu > ul > li > a {\n  padding: 5px 10px;\n  margin: 2px 0;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px; }\n\n#top-menu > ul > li > ul + a {\n  padding-bottom: 7px;\n  margin-bottom: 0; }\n\n#top-menu > ul > li > ul + a:after {\n  content: \" \\25BC\"; }\n\n#top-menu > ul > li:hover > a {\n  background-color: #cdcdcd; }\n\n#top-menu > ul > li:hover > ul + a {\n  -webkit-border-radius: 5px 5px 0 0;\n  -moz-border-radius: 5px 5px 0 0;\n  border-radius: 5px 5px 0 0; }\n\n#top-menu > ul > li > ul {\n  min-width: 100%;\n  background-color: #333; }\n\n#top-menu > ul > li li > ul + a:after {\n  content: \" \\25B6\"; }\n\n#top-menu > ul > li > ul > li:last-child,\n#top-menu > ul > li > ul {\n  -webkit-border-radius: 0 0 5px 5px;\n  -moz-border-radius: 0 0 5px 5px;\n  border-radius: 0 0 5px 5px; }\n\n#top-menu ul li li:hover,\n#top-menu ul li li ul,\n#top-menu ul li li ul li:hover {\n  background-color: #cdcdcd; }\n\n#top-menu > ul > li > ul,\n#top-menu ul li li ul {\n  -webkit-transition: all 300ms;\n  -moz-transition: all 300ms;\n  -o-transition: all 300ms;\n  transition: all 300ms; }\n\n#top-menu > ul > li > ul {\n  top: 400%;\n  opacity: 0; }\n\n#top-menu > ul > li:hover > ul {\n  top: 100%;\n  opacity: 1; }\n\n#top-menu ul li ul li ul {\n  left: 400%;\n  opacity: 0; }\n\n#top-menu ul li ul li:hover ul {\n  left: 100%;\n  opacity: 1; }\n\nbody {\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; }\n\n.clear {\n  display: inline-block;\n  width: 100%;\n  height: 1px;\n  clear: both; }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/lib/css-base.js":
/*!************************************************************************!*\
  !*** C:/Users/Home1/Documents/node_modules/css-loader/lib/css-base.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/js/ThemeSwitcher.js":
/*!*********************************!*\
  !*** ./src/js/ThemeSwitcher.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ThemeSwitcher = function () {
    function ThemeSwitcher() {
        _classCallCheck(this, ThemeSwitcher);

        this.availableThemes = ['Lighter', 'Dark'];
        this.defaultTheme = 'Lighter';

        document.body.className = this.defaultTheme;
    }

    _createClass(ThemeSwitcher, [{
        key: 'switchTheme',
        value: function switchTheme(theme) {
            if (this.availableThemes.indexOf(theme) != -1) {
                document.body.className = theme;
            }
        }
    }]);

    return ThemeSwitcher;
}();

exports.default = ThemeSwitcher;

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Calculator = __webpack_require__(/*! ./calculator/Calculator */ "./src/js/calculator/Calculator.js");

var _Calculator2 = _interopRequireDefault(_Calculator);

var _TwoPositionsSwitcher = __webpack_require__(/*! ./switcher/TwoPositionsSwitcher */ "./src/js/switcher/TwoPositionsSwitcher.js");

var _TwoPositionsSwitcher2 = _interopRequireDefault(_TwoPositionsSwitcher);

var _ThemeSwitcher = __webpack_require__(/*! ./ThemeSwitcher */ "./src/js/ThemeSwitcher.js");

var _ThemeSwitcher2 = _interopRequireDefault(_ThemeSwitcher);

__webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calcE = new _Calculator2.default('Engineer', true);
calcE.init();

document.themeSwitcher = new _ThemeSwitcher2.default();

/**
 * create theme switcher interface
 * param1 - where to place switcher
 * param2 - possible values
 * param3 - firing event
 */

document.themeSwitcherInterface = new _TwoPositionsSwitcher2.default('#themeSwitcher', ['Lighter', 'Dark'], 'switchTheme');
// attach theme switcher event
document.addEventListener('switchTheme', function (e) {
  document.themeSwitcher.switchTheme(e.detail.value);
});

/***/ }),

/***/ "./src/js/calculator/CalcJournal.js":
/*!******************************************!*\
  !*** ./src/js/calculator/CalcJournal.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CalcJournalItem = __webpack_require__(/*! ./CalcJournalItem */ "./src/js/calculator/CalcJournalItem.js");

var _CalcJournalItem2 = _interopRequireDefault(_CalcJournalItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CalcJournal = function () {
    function CalcJournal(divId) {
        _classCallCheck(this, CalcJournal);

        /**
         * CalcJournalItem[]
         */
        this.journal = [];

        this.divId = divId;
    }

    _createClass(CalcJournal, [{
        key: 'push',
        value: function push(formula, result) {
            this.journal.push(new _CalcJournalItem2.default(formula, result));
            console.log('111');
        }
    }, {
        key: 'display',
        value: function display() {
            var result = '';
            for (var i = 0; i < this.journal.length; i++) {
                var item = this.journal[i];
                var itemResult = '\n            <div class="journalItem">\n                <div class="journalItem--result">' + item.result + '</div>\n                <div class="journalItem--formula">' + item.formulaString + '</div>\n            </div>\n            ';
                result += itemResult;
            }

            document.getElementById(this.divId).innerHTML = result;
        }
    }]);

    return CalcJournal;
}();

exports.default = CalcJournal;

/***/ }),

/***/ "./src/js/calculator/CalcJournalItem.js":
/*!**********************************************!*\
  !*** ./src/js/calculator/CalcJournalItem.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function CalcJournalItem(formulaString, result) {
    this.formulaString = formulaString;
    this.result = result;
}

exports.default = CalcJournalItem;

/***/ }),

/***/ "./src/js/calculator/Calculator.js":
/*!*****************************************!*\
  !*** ./src/js/calculator/Calculator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CalcJournal = __webpack_require__(/*! ./CalcJournal */ "./src/js/calculator/CalcJournal.js");

var _CalcJournal2 = _interopRequireDefault(_CalcJournal);

var _math = __webpack_require__(/*! ./math/math */ "./src/js/calculator/math/math.js");

var _CalculatorDisplay = __webpack_require__(/*! ./CalculatorDisplay */ "./src/js/calculator/CalculatorDisplay.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = function () {

    /**
     * Constructor method
     * @param {string} divId ID of container to build calculator
     * @param {boolean} engineerMode Add additional functionality
     */
    function Calculator(divId, engineerMode) {
        _classCallCheck(this, Calculator);

        //super();

        /**
         * @attribute {CalculatorDisplay} 
         */

        this.display = undefined;

        /**
         * @attribute Id of container to build application
         */
        this.divId = undefined;

        /**
         * @attribute {string} Id for Jounal DOM-element
         */
        this.journalContainerId = '';

        /**
         * @attribute {boolean} Switch between simple and engineer modes
         */
        this.engineerMode = false;

        /**
         * @attribute {DOM} Dom element to show result
         */
        this.resultDiv = undefined;

        /**
         * @attribute {DOM} DOM element to display formula
         */
        this.formulaDiv = undefined;

        /**
         * @attribute {DOM} DOM element to display operations history
         */
        this.historyDiv = undefined;

        /**
         * @attribute {string} Formula string 
         */
        this.formulaString = '';

        /**
         * @attribute {Array} History
         */
        this.actors = [];

        /**
         * @attribute {Number} result
         */
        this.result = null;

        /**
         * @attribute {String} Container for complex numbers 
         */
        this.numCell = '';

        /**
         * @attribute {object}
         */
        this.availableHandlers = {
            '+': _math.plus, // calc summ
            '-': _math.minus, // calc diff
            '*': _math.multiply, // multiply action
            '/': _math.delimiter, // delimiter action
            '√': _math.sqrt, // sqrt
            'ln': _math.ln, // ln
            'n!': _math.factorial, // factorial 
            'x^2': _math.pow, // pow    
            '+/-': _math.unaryMinus // unary minus
        };

        // actions, requires 2 parameters  
        this.twoActorsActions = {
            '+': '',
            '-': '',
            '*': '',
            '/': ''
        };

        this.this = this;
        /**
         * generate ID for journal
         */
        this.journalContainerId = "journalContainer-" + Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

        this.journal = new _CalcJournal2.default(this.journalContainerId);

        this.divId = divId;

        this.engineerMode = engineerMode !== undefined ? engineerMode : false;
    }

    /**
     * show results in field
     */


    _createClass(Calculator, [{
        key: 'displayResult',
        value: function displayResult() {

            this.formulaDiv.innerHTML = this.actors.join(' ');

            if (this.result != NaN && parseFloat(this.result)) {
                this.resultDiv.innerHTML = this.result;
            }
            //this.historyDiv.innerHTML = this.actors.join('<br/>');
        }

        /**
         * reset numCell
         */

    }, {
        key: 'clearNumCell',
        value: function clearNumCell() {
            this.numCell = '';
        }

        /**
         * if more than one digit in number
         */

    }, {
        key: 'updateNumCell',
        value: function updateNumCell(symbol) {

            symbol = typeof symbol === 'string' ? symbol : symbol.target.childNodes[0].data;

            this.numCell += symbol;
            this.displayResult();
            this.formulaDiv.innerHTML = this.formulaDiv.innerHTML + this.numCell;
        }

        /**
         * 
         */

    }, {
        key: 'pushNumCellToActors',
        value: function pushNumCellToActors() {
            if (this.numCell && parseFloat(this.numCell)) {
                this.actors.push(parseFloat(this.numCell));
                this.numCell = '';
            }
        }
    }, {
        key: 'pushToJournal',
        value: function pushToJournal() {
            this.journal.push(this.formulaDiv.innerHTML, this.resultDiv.innerHTML);
            this.journal.display();
        }

        /**
         * initiate calculator
         */

    }, {
        key: 'init',
        value: function init() {

            this.buildCalculator(this.divId, this.engineerMode);

            var numbers_btns = document.querySelectorAll('#' + this.divId + ' .calculator-buttons-numbers-item');
            // attach numbers buttons
            for (var i = 0; i < numbers_btns.length; i++) {
                numbers_btns[i].addEventListener('click', this.updateNumCell.bind(this));
            }

            // attach math actions
            var math_actions = document.querySelectorAll('#' + this.divId + ' .calculator-buttons-actions--item');
            for (var _i = 0; _i < math_actions.length; _i++) {
                math_actions[_i].addEventListener('click', this.mathAction.bind(this));
            }

            // attach equals handler
            document.querySelector('#' + this.divId + ' .calculator-buttons-numbers-item-calculate').addEventListener('click', this.calculate.bind(this));

            // attach clear action
            document.querySelector('#' + this.divId + ' .calculator-buttons-clear').addEventListener('click', this.reset.bind(this));

            this.formulaDiv = document.querySelector('#' + this.divId + ' .calculator-formula');
            this.resultDiv = document.querySelector('#' + this.divId + ' .calculator-result');
        }
        /**
         * @returns boolean true if last history record was math action
         */

    }, {
        key: 'checkLasthistoryIsAction',
        value: function checkLasthistoryIsAction() {
            if (!this.actors || !this.actors.length) {
                return false;
            } else {
                var lastAct = this.actors[this.actors - 1];
                return this.availableHandlers.hasOwnProperty(lastAct);
            }
        }

        /**
         * 
         */

    }, {
        key: 'mathAction',
        value: function mathAction(action) {

            action = typeof action === 'string' ? action : action.target.childNodes[0].data;

            this.pushNumCellToActors();

            if (this.checkLasthistoryIsAction()) {
                // rewrite last action with new one
                this.actors[this.actors.length - 1] = action;
            } else {
                this.actors.push(action);
            }
            this.calculate();
        }

        /**
         * 
         */

    }, {
        key: 'calculate',
        value: function calculate() {
            if (this.numCell && this.numCell != '') {
                this.pushNumCellToActors();
            }
            this.result = this.actors[0];

            // first actor is already in result
            for (var i = 1; i < this.actors.length; i++) {
                if (this.availableHandlers.hasOwnProperty(this.actors[i])) {
                    // call math handler
                    if (this.twoActorsActions.hasOwnProperty(this.actors[i])) {
                        // use 2 numbers and skip next stage
                        this.result = this.availableHandlers[this.actors[i]](this.result, this.actors[++i]);
                    } else {
                        this.result = this.availableHandlers[this.actors[i]](this.result);
                    }
                }
            }

            this.displayResult();
            this.pushToJournal();
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.actors = [];
            this.result = 0;
            this.numCell = '';
            this.displayResult();
            this.resultDiv.innerHTML = '';
            this.formulaDiv.innerHTML = '';
        }

        /**
         * some kind of Builder pattern
         */

    }, {
        key: 'buildCalculator',
        value: function buildCalculator(containerId, engineerMode) {

            this.display = new _CalculatorDisplay.CalculatorDisplay(this);

            /*
                    this.resultDiv = document.querySelectorAll('#' + this.divId + ' .result')[0];
                    this.formulaDiv = document.querySelectorAll('#' + this.divId + ' .formula')[0];
                    this.historyDiv = document.querySelectorAll('#' + this.divId + ' .history')[0];*/
        }
    }]);

    return Calculator;
}();

exports.default = Calculator;

/***/ }),

/***/ "./src/js/calculator/CalculatorDisplay.js":
/*!************************************************!*\
  !*** ./src/js/calculator/CalculatorDisplay.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalculatorDisplay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Calculator = __webpack_require__(/*! ./Calculator */ "./src/js/calculator/Calculator.js");

var _Calculator2 = _interopRequireDefault(_Calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CalculatorDisplay = function () {

    /**
     * 
     * @param {Calculator} calc 
     */
    function CalculatorDisplay(calc) {
        _classCallCheck(this, CalculatorDisplay);

        //super();
        this.container = document.getElementById(calc.divId);

        this.calc = calc;

        this.build(calc.availableHandlers);
    }

    _createClass(CalculatorDisplay, [{
        key: 'build',
        value: function build(availableActions) {
            var actionsHtml = '';
            if (availableActions) {
                for (var act in availableActions) {
                    actionsHtml += '<button class="calculator-buttons-actions--item">' + act + '</button>';
                }
            }

            /** TODO: move numbers pad to a separate module */
            var html = '\n            <div class="calculatorWrapper">\n                <div class="calculator-main">\n                    <div class="calculator-formula"></div>\n                    <div class="calculator-result"></div>\n                    <div class="calculator-buttons">\n                        <div class="calculator-buttons-main">\n                            <div class="calculator-buttons-row">\n                                <button class="calculator-buttons-clear">C</button>\n                            </div>\n                            <div class="calculator-buttons-numbers">\n                                <button class="calculator-buttons-numbers-item">7</button>\n                                <button class="calculator-buttons-numbers-item">8</button>\n                                <button class="calculator-buttons-numbers-item">9</button>\n                                <button class="calculator-buttons-numbers-item">6</button>\n                                <button class="calculator-buttons-numbers-item">5</button>\n                                <button class="calculator-buttons-numbers-item">4</button>\n                                <button class="calculator-buttons-numbers-item">1</button>\n                                <button class="calculator-buttons-numbers-item">2</button>\n                                <button class="calculator-buttons-numbers-item">3</button>\n                                <button class="calculator-buttons-numbers-item-calculate">=</button>\n                                <button class="calculator-buttons-numbers-item">0</button>\n                                <button class="calculator-buttons-numbers-item">.</button>\n                            </div>\n                        </div>\n                        \n                            ' + actionsHtml + '\n                        \n                    </div>\n                </div>\n                <div class="calculator-additional">\n                    <div class="journal-wrapper" id="' + this.calc.journalContainerId + '"></div>\n                </div>\n            </div>\n        ';

            if (this.container) {
                this.container.innerHTML = html;
            }
        }
    }]);

    return CalculatorDisplay;
}();

exports.CalculatorDisplay = CalculatorDisplay;

/***/ }),

/***/ "./src/js/calculator/math/math.js":
/*!****************************************!*\
  !*** ./src/js/calculator/math/math.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Plus
 * @param {Number} firstActor 
 * @param {Number} secondActor 
 */
function plus(firstActor, secondActor) {
    return firstActor + secondActor;
}

/**
 * Minus
 * @param {Number} firstActor 
 * @param {Number} secondActor 
 */
function minus(firstActor, secondActor) {
    return firstActor - secondActor;
}

/**
 * Delimiter
 * @param {Number} firstActor 
 * @param {Number} secondActor 
 */
function delimiter(firstActor, secondActor) {
    return firstActor / secondActor;
}

/**
 * Multiply
 * @param {Number} firstActor 
 * @param {Number} secondActor 
 */
function multiply(firstActor, secondActor) {
    return firstActor * secondActor;
}
/**
 * Sqrt
 * @param {Number} firstActor 
 * @param {Number} secondActor 
 */
function sqrt(firstActor, secondActor) {
    secondActor = secondActor ? secondActor : 2;
    return Math.pow(firstActor, 1 / secondActor);
}
/**
 * ln
 * @param {Number} firstActor 
 */
function ln(firstActor) {
    return Math.log(firstActor);
}
/**
 * Factorial
 * @param {Number} firstActor 
 */
function factorial(firstActor) {
    var res = 1;
    for (var i = 1; i <= firstActor; i++) {
        res = res * i;
    }
    return res;
}
/**
 * Pow
 * @param {Number} firstActor 
 * @param {Number} secondActor 
 */
function pow(firstActor) {
    var secondActor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    return Math.pow(firstActor, secondActor);
}
/**
 * UnaryMinus
 * @param {Number} firstActor 
 */
function unaryMinus(firstActor) {

    return firstActor * -1;
}
exports.plus = plus;
exports.minus = minus;
exports.delimiter = delimiter;
exports.multiply = multiply;
exports.sqrt = sqrt;
exports.ln = ln;
exports.factorial = factorial;
exports.pow = pow;
exports.unaryMinus = unaryMinus;

/***/ }),

/***/ "./src/js/switcher/TwoPositionsSwitcher.js":
/*!*************************************************!*\
  !*** ./src/js/switcher/TwoPositionsSwitcher.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TwoPositionsSwitcher = function () {

    /**
     * 
     * @param {String} container Container to input 
     * @param {Array} positionsNames Array of positions
     * @param {String} eventName Event to dispatch
     */
    function TwoPositionsSwitcher() {
        var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var positionsNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var eventName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        _classCallCheck(this, TwoPositionsSwitcher);

        // settings
        this.settings = {
            'positionClass': 'TwoPositionsSwitcher--position',
            'positionActiveClass': 'TwoPositionsSwitcher--position--active',
            'switcherActivePositionClass': ['TwoPositionsSwitcher--switcher--pos1', 'TwoPositionsSwitcher--switcher--pos2'],
            'switcherBaseClass': 'TwoPositionsSwitcher--switcher'
        };

        this.container = document.querySelector(container);
        this.switcherElement = undefined;

        this.positions = positionsNames;
        this.elementId = "TwoPositionsSwitcher-" + Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

        this.value = this.positions[0];

        this.init(container);
        this.createEvent(eventName);

        // set active first position
        this.setActivePosition(this.positions[0]);

        return this;
    }

    /**
     * Build switcher html
     * @param {DOM} container 
     */


    _createClass(TwoPositionsSwitcher, [{
        key: 'init',
        value: function init(container) {
            var positions = '';
            for (var i = 0; i < this.positions.length; i++) {
                positions += '<span class="' + this.settings.positionClass + '" data-value="' + this.positions[i] + '">\n                ' + this.positions[i] + '\n            </span>';
            }
            var html = '\n        <span class="TwoPositionsSwitcher" id="' + this.elementId + '">\n            ' + positions + '\n            <span class="' + this.settings.switcherBaseClass + '"></span>\n        </span>\n        ';
            this.container.innerHTML = html;

            this.switcherElement = document.querySelector('#' + this.elementId + ' .' + this.settings.switcherBaseClass);

            document.getElementById(this.elementId).addEventListener('click', this.switch.bind(this));
        }

        /**
         * switch active position
         * @param {Event} event
         */

    }, {
        key: 'switch',
        value: function _switch(event) {
            // TODO: we can use event.target if we need more than 2 positions
            var positionElements = document.querySelectorAll('#' + this.elementId + ' .' + this.settings.positionClass);

            // remove active classes from posision elements
            positionElements.forEach(function (element) {
                element.classList.remove(this.settings.positionActiveClass);
                element.className = element.className.replace(this.settings.positionActiveClass, '');
            }.bind(this));

            var currently_selected_item = document.querySelector('#' + this.elementId + ' [data-value="' + this.value + '"]');

            for (var i = 0; i < this.positions.length; i++) {
                if (this.positions[i].toLowerCase() === this.value.toLowerCase()) {} else {

                    this.setActivePosition(this.positions[i]);
                    // do not continue
                    break;
                }
            }
        }

        /**
         * Set active position
         * @param {String} position 
         */

    }, {
        key: 'setActivePosition',
        value: function setActivePosition() {
            var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


            var index = this.positions.indexOf(position);

            if (index !== -1) {

                this.value = position;
                document.querySelector('#' + this.elementId).dataset.value = position;
                document.querySelector('#' + this.elementId + ' [data-value="' + position + '"]').classList.add(this.settings.positionActiveClass);

                // remove switcher element active classes
                this.settings.switcherActivePositionClass.forEach(function (activeClass) {
                    this.switcherElement.classList.remove(activeClass);
                }.bind(this));

                this.switcherElement.classList.add(this.settings.switcherActivePositionClass[index]);

                // fire event
                document.dispatchEvent(this.event);
            }
        }

        /**
         * Creates a custom event
         * @param {String} eventName 
         */

    }, {
        key: 'createEvent',
        value: function createEvent(eventName) {
            this.event = new CustomEvent(eventName, { 'detail': this });
        }
    }]);

    return TwoPositionsSwitcher;
}();

exports.default = TwoPositionsSwitcher;

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./src/styles/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvSG9tZTEvRG9jdW1lbnRzL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVGhlbWVTd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYWxjdWxhdG9yL0NhbGNKb3VybmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYWxjdWxhdG9yL0NhbGNKb3VybmFsSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2FsY3VsYXRvci9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYWxjdWxhdG9yL0NhbGN1bGF0b3JEaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYWxjdWxhdG9yL21hdGgvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3dpdGNoZXIvVHdvUG9zaXRpb25zU3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzcz8wN2MxIl0sIm5hbWVzIjpbIlRoZW1lU3dpdGNoZXIiLCJhdmFpbGFibGVUaGVtZXMiLCJkZWZhdWx0VGhlbWUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc05hbWUiLCJ0aGVtZSIsImluZGV4T2YiLCJjYWxjRSIsIkNhbGN1bGF0b3IiLCJpbml0IiwidGhlbWVTd2l0Y2hlciIsInRoZW1lU3dpdGNoZXJJbnRlcmZhY2UiLCJUd29Qb3NpdGlvbnNTd2l0Y2hlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3dpdGNoVGhlbWUiLCJkZXRhaWwiLCJ2YWx1ZSIsIkNhbGNKb3VybmFsIiwiZGl2SWQiLCJqb3VybmFsIiwiZm9ybXVsYSIsInJlc3VsdCIsInB1c2giLCJDYWxjSm91cm5hbEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsIml0ZW0iLCJpdGVtUmVzdWx0IiwiZm9ybXVsYVN0cmluZyIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZW5naW5lZXJNb2RlIiwiZGlzcGxheSIsInVuZGVmaW5lZCIsImpvdXJuYWxDb250YWluZXJJZCIsInJlc3VsdERpdiIsImZvcm11bGFEaXYiLCJoaXN0b3J5RGl2IiwiYWN0b3JzIiwibnVtQ2VsbCIsImF2YWlsYWJsZUhhbmRsZXJzIiwicGx1cyIsIm1pbnVzIiwibXVsdGlwbHkiLCJkZWxpbWl0ZXIiLCJzcXJ0IiwibG4iLCJmYWN0b3JpYWwiLCJwb3ciLCJ1bmFyeU1pbnVzIiwidHdvQWN0b3JzQWN0aW9ucyIsInRoaXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJqb2luIiwiTmFOIiwicGFyc2VGbG9hdCIsInN5bWJvbCIsInRhcmdldCIsImNoaWxkTm9kZXMiLCJkYXRhIiwiZGlzcGxheVJlc3VsdCIsImJ1aWxkQ2FsY3VsYXRvciIsIm51bWJlcnNfYnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ1cGRhdGVOdW1DZWxsIiwiYmluZCIsIm1hdGhfYWN0aW9ucyIsIm1hdGhBY3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwiY2FsY3VsYXRlIiwicmVzZXQiLCJsYXN0QWN0IiwiaGFzT3duUHJvcGVydHkiLCJhY3Rpb24iLCJwdXNoTnVtQ2VsbFRvQWN0b3JzIiwiY2hlY2tMYXN0aGlzdG9yeUlzQWN0aW9uIiwicHVzaFRvSm91cm5hbCIsImNvbnRhaW5lcklkIiwiQ2FsY3VsYXRvckRpc3BsYXkiLCJjYWxjIiwiY29udGFpbmVyIiwiYnVpbGQiLCJhdmFpbGFibGVBY3Rpb25zIiwiYWN0aW9uc0h0bWwiLCJhY3QiLCJodG1sIiwiZmlyc3RBY3RvciIsInNlY29uZEFjdG9yIiwicmVzIiwicG9zaXRpb25zTmFtZXMiLCJldmVudE5hbWUiLCJzZXR0aW5ncyIsInN3aXRjaGVyRWxlbWVudCIsInBvc2l0aW9ucyIsImVsZW1lbnRJZCIsImNyZWF0ZUV2ZW50Iiwic2V0QWN0aXZlUG9zaXRpb24iLCJwb3NpdGlvbkNsYXNzIiwic3dpdGNoZXJCYXNlQ2xhc3MiLCJzd2l0Y2giLCJldmVudCIsInBvc2l0aW9uRWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInBvc2l0aW9uQWN0aXZlQ2xhc3MiLCJyZXBsYWNlIiwiY3VycmVudGx5X3NlbGVjdGVkX2l0ZW0iLCJ0b0xvd2VyQ2FzZSIsInBvc2l0aW9uIiwiaW5kZXgiLCJkYXRhc2V0IiwiYWRkIiwic3dpdGNoZXJBY3RpdmVQb3NpdGlvbkNsYXNzIiwiYWN0aXZlQ2xhc3MiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFF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QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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bEgseUJBQVN1SCxhQUFULENBQXVCLEtBQUtoQixLQUE1QjtBQUNIO0FBQ0o7O0FBRUQ7Ozs7Ozs7b0NBSVlWLFMsRUFBVztBQUNuQixpQkFBS1UsS0FBTCxHQUFhLElBQUlpQixXQUFKLENBQWdCM0IsU0FBaEIsRUFBMkIsRUFBRSxVQUFVLElBQVosRUFBM0IsQ0FBYjtBQUNIOzs7Ozs7a0JBR1VuRixvQjs7Ozs7Ozs7Ozs7O0FDaElmOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWSIsImZpbGUiOiJhcHAuYjI3YzBhNjgyODRjYzA1ZWE1MTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9hcHAuanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqXFxyXFxuICovXFxuLyogPT0gVmFyaWFibGVzID09ICovXFxuLlR3b1Bvc2l0aW9uc1N3aXRjaGVyIHtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMXB4ICMwMDAgc29saWQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDIycHg7IH1cXG4gIC5Ud29Qb3NpdGlvbnNTd2l0Y2hlci0tcG9zaXRpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgcGFkZGluZzogMCAxMHB4OyB9XFxuICAgIC5Ud29Qb3NpdGlvbnNTd2l0Y2hlci0tcG9zaXRpb246bnRoLWNoaWxkKDEpIHtcXG4gICAgICBsZWZ0OiAwOyB9XFxuICAgIC5Ud29Qb3NpdGlvbnNTd2l0Y2hlci0tcG9zaXRpb246bnRoLWNoaWxkKDIpIHtcXG4gICAgICByaWdodDogMDsgfVxcbiAgICAuVHdvUG9zaXRpb25zU3dpdGNoZXItLXBvc2l0aW9uLS1hY3RpdmUge1xcbiAgICAgIC8qID09IHNlbGVjdGVkIHBvc2l0aW9uIHN0eWxlID09Ki8gfVxcbiAgLlR3b1Bvc2l0aW9uc1N3aXRjaGVyLS1zd2l0Y2hlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMXB4O1xcbiAgICBsZWZ0OiAtMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjY2VjZWNlO1xcbiAgICBib3JkZXI6IDFweCAjMDAwIHNvbGlkO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbi1sZWZ0O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxczsgfVxcbiAgICAuVHdvUG9zaXRpb25zU3dpdGNoZXItLXN3aXRjaGVyLS1wb3MxIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMDsgfVxcbiAgICAuVHdvUG9zaXRpb25zU3dpdGNoZXItLXN3aXRjaGVyLS1wb3MyIHtcXG4gICAgICBtYXJnaW4tbGVmdDogNTAlOyB9XFxuXFxuLyogPT0gVmFyaWFibGVzID09ICovXFxuLmNhbGN1bGF0b3JXcmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA0MDBweDsgfVxcblxcbi5jYWxjdWxhdG9yLW1haW4ge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogOTAlOyB9XFxuICAuY2FsY3VsYXRvci1tYWluIC5jYWxjdWxhdG9yLWZvcm11bGEge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgbWFyZ2luOiAwIDQ4cHggMCAwO1xcbiAgICBoZWlnaHQ6IDIwcHg7IH1cXG4gIC5jYWxjdWxhdG9yLW1haW4gLmNhbGN1bGF0b3ItcmVzdWx0IHtcXG4gICAgLyogPT0gID09ICovXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4ICMzMzMgc29saWQ7XFxuICAgIG1hcmdpbjogMTBweCA0OHB4IDEwcHggMDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcbiAgLmNhbGN1bGF0b3ItbWFpbiAuY2FsY3VsYXRvci1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDsgfVxcbiAgICAuY2FsY3VsYXRvci1tYWluIC5jYWxjdWxhdG9yLWJ1dHRvbnMtbWFpbiB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgd2lkdGg6ICU7IH1cXG4gICAgLmNhbGN1bGF0b3ItbWFpbiAuY2FsY3VsYXRvci1idXR0b25zLWNsZWFyIHtcXG4gICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIG1hcmdpbjogMCA1cHggNXB4IDBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XFxuICAgICAgYm9yZGVyOiAxcHggIzMzMyBzb2xpZDtcXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzOyB9XFxuICAgICAgLmNhbGN1bGF0b3ItbWFpbiAuY2FsY3VsYXRvci1idXR0b25zLWNsZWFyOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgICAgICBjb2xvcjogI2NkY2RjZDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzY2NjsgfVxcblxcbi5jYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycy1pdGVtLWNhbGN1bGF0ZSB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luOiAwIDVweCA1cHggMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XFxuICBib3JkZXI6IDFweCAjMzMzIHNvbGlkO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41czsgfVxcbiAgLmNhbGN1bGF0b3ItYnV0dG9ucy1udW1iZXJzLWl0ZW0tY2FsY3VsYXRlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNjZGNkY2Q7XFxuICAgIGJvcmRlci1jb2xvcjogIzY2NjsgfVxcblxcbi8qID09IG51bWVyaWMgcGFkIGJsb2NrID09ICovXFxuLmNhbGN1bGF0b3ItYnV0dG9ucy1udW1iZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5jYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycy1pdGVtIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBtYXJnaW46IDAgNXB4IDVweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XFxuICAgIGJvcmRlcjogMXB4ICMzMzMgc29saWQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7IH1cXG4gICAgLmNhbGN1bGF0b3ItYnV0dG9ucy1udW1iZXJzLWl0ZW06aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgICAgY29sb3I6ICNjZGNkY2Q7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNjY2OyB9XFxuXFxuLyogPT0gQWN0aW9ucyBibG9jayA9PSovXFxuLmNhbGN1bGF0b3ItYnV0dG9ucy1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5jYWxjdWxhdG9yLWJ1dHRvbnMtYWN0aW9ucy0taXRlbSB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luOiAwIDVweCA1cHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgICBib3JkZXI6IDFweCAjMzMzIHNvbGlkO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzOyB9XFxuICAgIC5jYWxjdWxhdG9yLWJ1dHRvbnMtYWN0aW9ucy0taXRlbTpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgICBjb2xvcjogI2NkY2RjZDtcXG4gICAgICBib3JkZXItY29sb3I6ICM2NjY7IH1cXG5cXG4vKj09IEFkZGl0aW9uYWwgPT0qL1xcbi5jYWxjdWxhdG9yLWFkZGl0aW9uYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjAwJTtcXG4gIHRvcDogMDsgfVxcblxcbi5jYWxjdWxhdG9yLWJ1dHRvbnMtY2xlYXIge1xcbiAgZmxleDogMCAwIDMzLjMzMzMlO1xcbiAgaGVpZ2h0OiA1MHB4OyB9XFxuXFxuLyoqXFxyXFxuICogYmxvY2tzXFxyXFxuICovXFxuLyoqXFxyXFxuICogVGhlbWVzXFxyXFxuICovXFxuLyoqXFxyXFxuICogdmFyaWFibGVzXFxyXFxuICovXFxuLkRhcmsge1xcbiAgYmFja2dyb3VuZDogIzk5OTtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuICAuRGFyayAucmVzdWx0IHtcXG4gICAgYmFja2dyb3VuZDogIzk5OTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzMzOyB9XFxuXFxuLyoqXFxyXFxuICogdmFyaWFibGVzXFxyXFxuICovXFxuLyoqXFxyXFxuICogc3R5bGVzXFxyXFxuICovXFxuLkxpZ2h0ZXIge1xcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuICAuTGlnaHRlciAucmVzdWx0IHtcXG4gICAgY29sb3I6ICMzMzM7IH1cXG5cXG4vKipcXHJcXG4gICogYmxvY2tzXFxyXFxuICAqL1xcbmhlYWRlciB7XFxuICBtYXJnaW4tdG9wOiA4MHB4OyB9XFxuXFxuI3RvcC1tZW51IHVsIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbiN0b3AtbWVudSA+IHVsID4gbGkge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4jdG9wLW1lbnUgPiB1bCA+IGxpID4gdWwge1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDsgfVxcblxcbiN0b3AtbWVudSBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4jdG9wLW1lbnUgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4jdG9wLW1lbnUgdWwgbGkgbGkgdWwge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMTAwJTsgfVxcblxcbiN0b3AtbWVudSB1bCB1bCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG5cXG4jdG9wLW1lbnUgbGk6aG92ZXIgPiB1bCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuXFxuI3RvcC1tZW51IHtcXG4gIHBhZGRpbmc6IDAgNXB4OyB9XFxuXFxuI3RvcC1tZW51LFxcbiN0b3AtbWVudSA+IHVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuI3RvcC1tZW51OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbiN0b3AtbWVudSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMS4yOyB9XFxuXFxuI3RvcC1tZW51ID4gdWwgPiBsaSA+IGEge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBtYXJnaW46IDJweCAwO1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbiN0b3AtbWVudSA+IHVsID4gbGkgPiB1bCArIGEge1xcbiAgcGFkZGluZy1ib3R0b206IDdweDtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4jdG9wLW1lbnUgPiB1bCA+IGxpID4gdWwgKyBhOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcXDI1QkNcXFwiOyB9XFxuXFxuI3RvcC1tZW51ID4gdWwgPiBsaTpob3ZlciA+IGEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkY2RjZDsgfVxcblxcbiN0b3AtbWVudSA+IHVsID4gbGk6aG92ZXIgPiB1bCArIGEge1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDsgfVxcblxcbiN0b3AtbWVudSA+IHVsID4gbGkgPiB1bCB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyB9XFxuXFxuI3RvcC1tZW51ID4gdWwgPiBsaSBsaSA+IHVsICsgYTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXFwyNUI2XFxcIjsgfVxcblxcbiN0b3AtbWVudSA+IHVsID4gbGkgPiB1bCA+IGxpOmxhc3QtY2hpbGQsXFxuI3RvcC1tZW51ID4gdWwgPiBsaSA+IHVsIHtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7IH1cXG5cXG4jdG9wLW1lbnUgdWwgbGkgbGk6aG92ZXIsXFxuI3RvcC1tZW51IHVsIGxpIGxpIHVsLFxcbiN0b3AtbWVudSB1bCBsaSBsaSB1bCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjZGNkOyB9XFxuXFxuI3RvcC1tZW51ID4gdWwgPiBsaSA+IHVsLFxcbiN0b3AtbWVudSB1bCBsaSBsaSB1bCB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcztcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zOyB9XFxuXFxuI3RvcC1tZW51ID4gdWwgPiBsaSA+IHVsIHtcXG4gIHRvcDogNDAwJTtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4jdG9wLW1lbnUgPiB1bCA+IGxpOmhvdmVyID4gdWwge1xcbiAgdG9wOiAxMDAlO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbiN0b3AtbWVudSB1bCBsaSB1bCBsaSB1bCB7XFxuICBsZWZ0OiA0MDAlO1xcbiAgb3BhY2l0eTogMDsgfVxcblxcbiN0b3AtbWVudSB1bCBsaSB1bCBsaTpob3ZlciB1bCB7XFxuICBsZWZ0OiAxMDAlO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjsgfVxcblxcbi5jbGVhciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgY2xlYXI6IGJvdGg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiY2xhc3MgVGhlbWVTd2l0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlVGhlbWVzID0gWydMaWdodGVyJywgJ0RhcmsnXTtcbiAgICAgICAgdGhpcy5kZWZhdWx0VGhlbWUgPSAnTGlnaHRlcic7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSB0aGlzLmRlZmF1bHRUaGVtZTtcbiAgICB9XG5cbiAgICBzd2l0Y2hUaGVtZSh0aGVtZSkge1xuICAgICAgICBpZih0aGlzLmF2YWlsYWJsZVRoZW1lcy5pbmRleE9mKHRoZW1lKSAhPSAtMSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSB0aGVtZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVTd2l0Y2hlcjsiLCJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL2NhbGN1bGF0b3IvQ2FsY3VsYXRvcic7XG5pbXBvcnQgVHdvUG9zaXRpb25zU3dpdGNoZXIgZnJvbSAnLi9zd2l0Y2hlci9Ud29Qb3NpdGlvbnNTd2l0Y2hlcic7XG5cbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4vVGhlbWVTd2l0Y2hlcic7XG5cbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5zY3NzJztcblxuXG5cblxubGV0IGNhbGNFID0gbmV3IENhbGN1bGF0b3IoJ0VuZ2luZWVyJywgdHJ1ZSk7XG5jYWxjRS5pbml0KCk7XG5cblxuZG9jdW1lbnQudGhlbWVTd2l0Y2hlciA9IG5ldyBUaGVtZVN3aXRjaGVyKCk7XG5cblxuXG4vKipcbiAqIGNyZWF0ZSB0aGVtZSBzd2l0Y2hlciBpbnRlcmZhY2VcbiAqIHBhcmFtMSAtIHdoZXJlIHRvIHBsYWNlIHN3aXRjaGVyXG4gKiBwYXJhbTIgLSBwb3NzaWJsZSB2YWx1ZXNcbiAqIHBhcmFtMyAtIGZpcmluZyBldmVudFxuICovXG5cbmRvY3VtZW50LnRoZW1lU3dpdGNoZXJJbnRlcmZhY2UgPSBuZXcgVHdvUG9zaXRpb25zU3dpdGNoZXIoJyN0aGVtZVN3aXRjaGVyJywgWydMaWdodGVyJywgJ0RhcmsnXSwgJ3N3aXRjaFRoZW1lJyk7XG4vLyBhdHRhY2ggdGhlbWUgc3dpdGNoZXIgZXZlbnRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXRjaFRoZW1lJywgZnVuY3Rpb24oZSl7XG4gICAgZG9jdW1lbnQudGhlbWVTd2l0Y2hlci5zd2l0Y2hUaGVtZShlLmRldGFpbC52YWx1ZSk7XG59KVxuIiwiaW1wb3J0IENhbGNKb3VybmFsSXRlbSBmcm9tICcuL0NhbGNKb3VybmFsSXRlbSc7XG5cbmNsYXNzIENhbGNKb3VybmFsIHtcblxuICAgIGNvbnN0cnVjdG9yKGRpdklkKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxjSm91cm5hbEl0ZW1bXVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5qb3VybmFsID0gW107XG5cbiAgICAgICAgdGhpcy5kaXZJZCA9IGRpdklkO1xuICAgIH1cblxuICAgIHB1c2ggKGZvcm11bGEsIHJlc3VsdCkge1xuICAgICAgICB0aGlzLmpvdXJuYWwucHVzaCggbmV3IENhbGNKb3VybmFsSXRlbShmb3JtdWxhLCByZXN1bHQpICk7XG4gICAgICAgIGNvbnNvbGUubG9nKCcxMTEnKVxuICAgIH1cbiAgICBcblxuICAgIGRpc3BsYXkoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuam91cm5hbC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5qb3VybmFsW2ldO1xuICAgICAgICAgICAgbGV0IGl0ZW1SZXN1bHQgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiam91cm5hbEl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiam91cm5hbEl0ZW0tLXJlc3VsdFwiPiR7aXRlbS5yZXN1bHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpvdXJuYWxJdGVtLS1mb3JtdWxhXCI+JHtpdGVtLmZvcm11bGFTdHJpbmd9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICByZXN1bHQgKz0gaXRlbVJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kaXZJZCkuaW5uZXJIVE1MID0gcmVzdWx0O1xuXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FsY0pvdXJuYWw7IiwiZnVuY3Rpb24gQ2FsY0pvdXJuYWxJdGVtKGZvcm11bGFTdHJpbmcsIHJlc3VsdCkge1xuICAgIHRoaXMuZm9ybXVsYVN0cmluZyA9IGZvcm11bGFTdHJpbmc7XG4gICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGNKb3VybmFsSXRlbTsiLCJpbXBvcnQgQ2FsY0pvdXJuYWwgZnJvbSAnLi9DYWxjSm91cm5hbCc7XG5pbXBvcnQge3BsdXMsIG1pbnVzLCBkZWxpbWl0ZXIsIG11bHRpcGx5LHNxcnQsIGxuLCBmYWN0b3JpYWwsIHBvdywgdW5hcnlNaW51c30gZnJvbSAnLi9tYXRoL21hdGgnO1xuaW1wb3J0IHsgQ2FsY3VsYXRvckRpc3BsYXkgfSBmcm9tICcuL0NhbGN1bGF0b3JEaXNwbGF5JztcblxuY2xhc3MgQ2FsY3VsYXRvciB7XG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGl2SWQgSUQgb2YgY29udGFpbmVyIHRvIGJ1aWxkIGNhbGN1bGF0b3JcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuZ2luZWVyTW9kZSBBZGQgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGl2SWQsIGVuZ2luZWVyTW9kZSkge1xuICAgICAgICAvL3N1cGVyKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhdHRyaWJ1dGUge0NhbGN1bGF0b3JEaXNwbGF5fSBcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYXR0cmlidXRlIElkIG9mIGNvbnRhaW5lciB0byBidWlsZCBhcHBsaWNhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXZJZCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBcblxuICAgICAgICAvKipcbiAgICAgICAgICogQGF0dHJpYnV0ZSB7c3RyaW5nfSBJZCBmb3IgSm91bmFsIERPTS1lbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmpvdXJuYWxDb250YWluZXJJZCA9ICcnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYXR0cmlidXRlIHtib29sZWFufSBTd2l0Y2ggYmV0d2VlbiBzaW1wbGUgYW5kIGVuZ2luZWVyIG1vZGVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmVuZ2luZWVyTW9kZSA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYXR0cmlidXRlIHtET019IERvbSBlbGVtZW50IHRvIHNob3cgcmVzdWx0XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlc3VsdERpdiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQGF0dHJpYnV0ZSB7RE9NfSBET00gZWxlbWVudCB0byBkaXNwbGF5IGZvcm11bGFcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZm9ybXVsYURpdiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQGF0dHJpYnV0ZSB7RE9NfSBET00gZWxlbWVudCB0byBkaXNwbGF5IG9wZXJhdGlvbnMgaGlzdG9yeVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oaXN0b3J5RGl2ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYXR0cmlidXRlIHtzdHJpbmd9IEZvcm11bGEgc3RyaW5nIFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JtdWxhU3RyaW5nID0gJyc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhdHRyaWJ1dGUge0FycmF5fSBIaXN0b3J5XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFjdG9ycyA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYXR0cmlidXRlIHtOdW1iZXJ9IHJlc3VsdFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZXN1bHQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYXR0cmlidXRlIHtTdHJpbmd9IENvbnRhaW5lciBmb3IgY29tcGxleCBudW1iZXJzIFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5udW1DZWxsID0gJyc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhdHRyaWJ1dGUge29iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlSGFuZGxlcnMgPSB7XG4gICAgICAgICAgICAnKycgOiBwbHVzLCAgICAgIC8vIGNhbGMgc3VtbVxuICAgICAgICAgICAgJy0nIDogbWludXMsICAgICAvLyBjYWxjIGRpZmZcbiAgICAgICAgICAgICcqJyA6IG11bHRpcGx5LCAgICAgLy8gbXVsdGlwbHkgYWN0aW9uXG4gICAgICAgICAgICAnLycgOiBkZWxpbWl0ZXIsIC8vIGRlbGltaXRlciBhY3Rpb25cbiAgICAgICAgICAgICfiiJonIDogc3FydCwgICAgICAvLyBzcXJ0XG4gICAgICAgICAgICAnbG4nOiBsbiwgICAgICAgIC8vIGxuXG4gICAgICAgICAgICAnbiEnOiBmYWN0b3JpYWwsIC8vIGZhY3RvcmlhbCBcbiAgICAgICAgICAgICd4XjInIDogcG93LCAgICAgLy8gcG93ICAgIFxuICAgICAgICAgICAgJysvLScgOiB1bmFyeU1pbnVzLCAgIC8vIHVuYXJ5IG1pbnVzXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYWN0aW9ucywgcmVxdWlyZXMgMiBwYXJhbWV0ZXJzICBcbiAgICAgICAgdGhpcy50d29BY3RvcnNBY3Rpb25zID0ge1xuICAgICAgICAgICAgJysnOiAnJywgICAgXG4gICAgICAgICAgICAnLSc6ICcnLFxuICAgICAgICAgICAgJyonOiAnJyxcbiAgICAgICAgICAgICcvJzogJycsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50aGlzID0gdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGdlbmVyYXRlIElEIGZvciBqb3VybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmpvdXJuYWxDb250YWluZXJJZCA9IFwiam91cm5hbENvbnRhaW5lci1cIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwMCAtIDEgKyAxKSkgKyAxO1xuXG4gICAgICAgIHRoaXMuam91cm5hbCA9IG5ldyBDYWxjSm91cm5hbCh0aGlzLmpvdXJuYWxDb250YWluZXJJZCk7XG5cbiAgICAgICAgdGhpcy5kaXZJZCA9IGRpdklkO1xuXG4gICAgICAgIHRoaXMuZW5naW5lZXJNb2RlID0gZW5naW5lZXJNb2RlICE9PSB1bmRlZmluZWQgPyBlbmdpbmVlck1vZGUgOiBmYWxzZSA7XG5cblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogc2hvdyByZXN1bHRzIGluIGZpZWxkXG4gICAgICovXG4gICAgZGlzcGxheVJlc3VsdCgpIHtcblxuICAgICAgICB0aGlzLmZvcm11bGFEaXYuaW5uZXJIVE1MID0gdGhpcy5hY3RvcnMuam9pbignICcpO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5yZXN1bHQgIT0gTmFOICYmIHBhcnNlRmxvYXQodGhpcy5yZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdERpdi5pbm5lckhUTUwgPSB0aGlzLnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMuaGlzdG9yeURpdi5pbm5lckhUTUwgPSB0aGlzLmFjdG9ycy5qb2luKCc8YnIvPicpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVzZXQgbnVtQ2VsbFxuICAgICAqL1xuICAgIGNsZWFyTnVtQ2VsbCgpIHtcbiAgICAgICAgdGhpcy5udW1DZWxsID0gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaWYgbW9yZSB0aGFuIG9uZSBkaWdpdCBpbiBudW1iZXJcbiAgICAgKi9cbiAgICB1cGRhdGVOdW1DZWxsKHN5bWJvbCkge1xuXG4gICAgICAgIHN5bWJvbCA9IHR5cGVvZiBzeW1ib2wgPT09ICdzdHJpbmcnID8gc3ltYm9sIDogc3ltYm9sLnRhcmdldC5jaGlsZE5vZGVzWzBdLmRhdGEgO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5udW1DZWxsICs9IHN5bWJvbDtcbiAgICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KCk7XG4gICAgICAgIHRoaXMuZm9ybXVsYURpdi5pbm5lckhUTUwgPSB0aGlzLmZvcm11bGFEaXYuaW5uZXJIVE1MICsgdGhpcy5udW1DZWxsO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBwdXNoTnVtQ2VsbFRvQWN0b3JzKCkge1xuICAgICAgICBpZih0aGlzLm51bUNlbGwgJiYgcGFyc2VGbG9hdCh0aGlzLm51bUNlbGwpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdG9ycy5wdXNoKCBwYXJzZUZsb2F0KHRoaXMubnVtQ2VsbCkgKTtcbiAgICAgICAgICAgIHRoaXMubnVtQ2VsbCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVzaFRvSm91cm5hbCgpIHtcbiAgICAgICAgdGhpcy5qb3VybmFsLnB1c2goIHRoaXMuZm9ybXVsYURpdi5pbm5lckhUTUwsIHRoaXMucmVzdWx0RGl2LmlubmVySFRNTCApO1xuICAgICAgICB0aGlzLmpvdXJuYWwuZGlzcGxheSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluaXRpYXRlIGNhbGN1bGF0b3JcbiAgICAgKi9cbiAgICBpbml0KCkge1xuXG4gICAgICAgIHRoaXMuYnVpbGRDYWxjdWxhdG9yKHRoaXMuZGl2SWQsIHRoaXMuZW5naW5lZXJNb2RlKTtcblxuICAgICAgICBsZXQgbnVtYmVyc19idG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyB0aGlzLmRpdklkICsgJyAuY2FsY3VsYXRvci1idXR0b25zLW51bWJlcnMtaXRlbScpO1xuICAgICAgICAvLyBhdHRhY2ggbnVtYmVycyBidXR0b25zXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1iZXJzX2J0bnMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICBudW1iZXJzX2J0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZU51bUNlbGwuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhdHRhY2ggbWF0aCBhY3Rpb25zXG4gICAgICAgIGxldCBtYXRoX2FjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIHRoaXMuZGl2SWQgKyAnIC5jYWxjdWxhdG9yLWJ1dHRvbnMtYWN0aW9ucy0taXRlbScpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaSA8IG1hdGhfYWN0aW9ucy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBtYXRoX2FjdGlvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1hdGhBY3Rpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGF0dGFjaCBlcXVhbHMgaGFuZGxlclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZGl2SWQgKyAnIC5jYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycy1pdGVtLWNhbGN1bGF0ZScpLlxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNhbGN1bGF0ZS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBhdHRhY2ggY2xlYXIgYWN0aW9uXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5kaXZJZCArICcgLmNhbGN1bGF0b3ItYnV0dG9ucy1jbGVhcicpLlxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc2V0LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHRoaXMuZm9ybXVsYURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5kaXZJZCArICcgLmNhbGN1bGF0b3ItZm9ybXVsYScpO1xuICAgICAgICB0aGlzLnJlc3VsdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5kaXZJZCArICcgLmNhbGN1bGF0b3ItcmVzdWx0Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW4gdHJ1ZSBpZiBsYXN0IGhpc3RvcnkgcmVjb3JkIHdhcyBtYXRoIGFjdGlvblxuICAgICAqL1xuICAgIGNoZWNrTGFzdGhpc3RvcnlJc0FjdGlvbigpIHtcbiAgICAgICAgaWYoIXRoaXMuYWN0b3JzIHx8ICF0aGlzLmFjdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsYXN0QWN0ID0gdGhpcy5hY3RvcnNbIHRoaXMuYWN0b3JzIC0gMSBdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXZhaWxhYmxlSGFuZGxlcnMuaGFzT3duUHJvcGVydHkoIGxhc3RBY3QgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqL1xuICAgIG1hdGhBY3Rpb24oIGFjdGlvbiApIHtcbiAgICAgICAgXG4gICAgICAgIGFjdGlvbiA9IHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnID8gYWN0aW9uIDogYWN0aW9uLnRhcmdldC5jaGlsZE5vZGVzWzBdLmRhdGE7XG5cbiAgICAgICAgdGhpcy5wdXNoTnVtQ2VsbFRvQWN0b3JzKCk7XG5cbiAgICAgICAgaWYodGhpcy5jaGVja0xhc3RoaXN0b3J5SXNBY3Rpb24oKSkge1xuICAgICAgICAgICAgLy8gcmV3cml0ZSBsYXN0IGFjdGlvbiB3aXRoIG5ldyBvbmVcbiAgICAgICAgICAgIHRoaXMuYWN0b3JzWyB0aGlzLmFjdG9ycy5sZW5ndGggLSAxIF0gPSBhY3Rpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjdG9ycy5wdXNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxjdWxhdGUoKTtcbiAgICB9XG5cbiAgIFxuICAgIFxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBjYWxjdWxhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm51bUNlbGwgJiYgdGhpcy5udW1DZWxsICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hOdW1DZWxsVG9BY3RvcnMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuYWN0b3JzWzBdO1xuICAgICAgICBcbiAgICAgICAgLy8gZmlyc3QgYWN0b3IgaXMgYWxyZWFkeSBpbiByZXN1bHRcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IHRoaXMuYWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLmF2YWlsYWJsZUhhbmRsZXJzLmhhc093blByb3BlcnR5KHRoaXMuYWN0b3JzW2ldKSkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgbWF0aCBoYW5kbGVyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50d29BY3RvcnNBY3Rpb25zLmhhc093blByb3BlcnR5KHRoaXMuYWN0b3JzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgMiBudW1iZXJzIGFuZCBza2lwIG5leHQgc3RhZ2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLmF2YWlsYWJsZUhhbmRsZXJzWyB0aGlzLmFjdG9yc1tpXSBdKHRoaXMucmVzdWx0LCB0aGlzLmFjdG9yc1srK2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuYXZhaWxhYmxlSGFuZGxlcnNbIHRoaXMuYWN0b3JzW2ldIF0odGhpcy5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KCk7XG4gICAgICAgIHRoaXMucHVzaFRvSm91cm5hbCgpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmFjdG9ycyA9IFtdO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IDA7XG4gICAgICAgIHRoaXMubnVtQ2VsbCA9ICcnO1xuICAgICAgICB0aGlzLmRpc3BsYXlSZXN1bHQoKTtcbiAgICAgICAgdGhpcy5yZXN1bHREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMuZm9ybXVsYURpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc29tZSBraW5kIG9mIEJ1aWxkZXIgcGF0dGVyblxuICAgICAqL1xuICAgIGJ1aWxkQ2FsY3VsYXRvcihjb250YWluZXJJZCwgZW5naW5lZXJNb2RlKSB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gbmV3IENhbGN1bGF0b3JEaXNwbGF5KHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgXG4vKlxuICAgICAgICB0aGlzLnJlc3VsdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgdGhpcy5kaXZJZCArICcgLnJlc3VsdCcpWzBdO1xuICAgICAgICB0aGlzLmZvcm11bGFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIHRoaXMuZGl2SWQgKyAnIC5mb3JtdWxhJylbMF07XG4gICAgICAgIHRoaXMuaGlzdG9yeURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgdGhpcy5kaXZJZCArICcgLmhpc3RvcnknKVswXTsqL1xuICAgICAgICBcblxuICAgIH1cblxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjtcbiIsImltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vQ2FsY3VsYXRvcic7XG5cbmNsYXNzIENhbGN1bGF0b3JEaXNwbGF5IHtcblxuICAgIFxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Q2FsY3VsYXRvcn0gY2FsYyBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYWxjKSB7XG4gICAgICAgIC8vc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYWxjLmRpdklkKTtcblxuXG4gICAgICAgIHRoaXMuY2FsYyA9IGNhbGM7XG5cbiAgICAgICAgdGhpcy5idWlsZChjYWxjLmF2YWlsYWJsZUhhbmRsZXJzKTtcbiAgICB9XG5cbiAgICBidWlsZChhdmFpbGFibGVBY3Rpb25zKSB7XG4gICAgICAgIGxldCBhY3Rpb25zSHRtbCA9ICcnO1xuICAgICAgICBpZihhdmFpbGFibGVBY3Rpb25zKSB7XG4gICAgICAgICAgICBmb3IobGV0IGFjdCBpbiBhdmFpbGFibGVBY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc0h0bWwgKz0gYDxidXR0b24gY2xhc3M9XCJjYWxjdWxhdG9yLWJ1dHRvbnMtYWN0aW9ucy0taXRlbVwiPmAgKyBhY3QgKyBgPC9idXR0b24+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvKiogVE9ETzogbW92ZSBudW1iZXJzIHBhZCB0byBhIHNlcGFyYXRlIG1vZHVsZSAqL1xuICAgICAgICBsZXQgaHRtbCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxjdWxhdG9yV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxjdWxhdG9yLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGN1bGF0b3ItZm9ybXVsYVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsY3VsYXRvci1yZXN1bHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGN1bGF0b3ItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGN1bGF0b3ItYnV0dG9ucy1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGN1bGF0b3ItYnV0dG9ucy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbGN1bGF0b3ItYnV0dG9ucy1jbGVhclwiPkM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbGN1bGF0b3ItYnV0dG9ucy1udW1iZXJzLWl0ZW1cIj43PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycy1pdGVtXCI+ODwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zLW51bWJlcnMtaXRlbVwiPjk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbGN1bGF0b3ItYnV0dG9ucy1udW1iZXJzLWl0ZW1cIj42PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycy1pdGVtXCI+NTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zLW51bWJlcnMtaXRlbVwiPjQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbGN1bGF0b3ItYnV0dG9ucy1udW1iZXJzLWl0ZW1cIj4xPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycy1pdGVtXCI+MjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zLW51bWJlcnMtaXRlbVwiPjM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbGN1bGF0b3ItYnV0dG9ucy1udW1iZXJzLWl0ZW0tY2FsY3VsYXRlXCI+PTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zLW51bWJlcnMtaXRlbVwiPjA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbGN1bGF0b3ItYnV0dG9ucy1udW1iZXJzLWl0ZW1cIj4uPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgKyBhY3Rpb25zSHRtbCArIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsY3VsYXRvci1hZGRpdGlvbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqb3VybmFsLXdyYXBwZXJcIiBpZD1cImAgKyB0aGlzLmNhbGMuam91cm5hbENvbnRhaW5lcklkICsgYFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgeyBDYWxjdWxhdG9yRGlzcGxheSB9OyIsIi8qKlxuICogUGx1c1xuICogQHBhcmFtIHtOdW1iZXJ9IGZpcnN0QWN0b3IgXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kQWN0b3IgXG4gKi9cbmZ1bmN0aW9uIHBsdXMoIGZpcnN0QWN0b3IsIHNlY29uZEFjdG9yICkge1xuICAgIHJldHVybiBmaXJzdEFjdG9yICsgc2Vjb25kQWN0b3I7XG59XG5cbi8qKlxuICogTWludXNcbiAqIEBwYXJhbSB7TnVtYmVyfSBmaXJzdEFjdG9yIFxuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZEFjdG9yIFxuICovXG5mdW5jdGlvbiBtaW51cyggZmlyc3RBY3Rvciwgc2Vjb25kQWN0b3IgKSB7XG4gICAgcmV0dXJuIGZpcnN0QWN0b3IgLSBzZWNvbmRBY3Rvcjtcbn1cblxuLyoqXG4gKiBEZWxpbWl0ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBmaXJzdEFjdG9yIFxuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZEFjdG9yIFxuICovXG5mdW5jdGlvbiBkZWxpbWl0ZXIoIGZpcnN0QWN0b3IsIHNlY29uZEFjdG9yICkge1xuICAgIHJldHVybiBmaXJzdEFjdG9yIC8gc2Vjb25kQWN0b3I7XG59XG5cbi8qKlxuICogTXVsdGlwbHlcbiAqIEBwYXJhbSB7TnVtYmVyfSBmaXJzdEFjdG9yIFxuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZEFjdG9yIFxuICovXG5mdW5jdGlvbiBtdWx0aXBseSggZmlyc3RBY3Rvciwgc2Vjb25kQWN0b3IgKSB7XG4gICAgcmV0dXJuIGZpcnN0QWN0b3IgKiBzZWNvbmRBY3Rvcjtcbn1cbi8qKlxuICogU3FydFxuICogQHBhcmFtIHtOdW1iZXJ9IGZpcnN0QWN0b3IgXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kQWN0b3IgXG4gKi9cbmZ1bmN0aW9uIHNxcnQgKGZpcnN0QWN0b3IsIHNlY29uZEFjdG9yKSB7XG4gICAgc2Vjb25kQWN0b3IgPSBzZWNvbmRBY3RvciA/IHNlY29uZEFjdG9yIDogMiA7XG4gICAgcmV0dXJuIE1hdGgucG93KGZpcnN0QWN0b3IsIDEvc2Vjb25kQWN0b3IpO1xufVxuLyoqXG4gKiBsblxuICogQHBhcmFtIHtOdW1iZXJ9IGZpcnN0QWN0b3IgXG4gKi9cbmZ1bmN0aW9uIGxuIChmaXJzdEFjdG9yKSB7XG4gICAgcmV0dXJuIE1hdGgubG9nKGZpcnN0QWN0b3IpO1xufVxuLyoqXG4gKiBGYWN0b3JpYWxcbiAqIEBwYXJhbSB7TnVtYmVyfSBmaXJzdEFjdG9yIFxuICovXG5mdW5jdGlvbiBmYWN0b3JpYWwgKGZpcnN0QWN0b3IpIHtcbiAgICBsZXQgcmVzID0gMTtcbiAgICBmb3IobGV0IGkgPSAxOyBpIDw9IGZpcnN0QWN0b3I7IGkrKykge1xuICAgICAgICByZXMgPSByZXMgKiBpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuLyoqXG4gKiBQb3dcbiAqIEBwYXJhbSB7TnVtYmVyfSBmaXJzdEFjdG9yIFxuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZEFjdG9yIFxuICovXG5mdW5jdGlvbiBwb3cgKGZpcnN0QWN0b3IsIHNlY29uZEFjdG9yID0gMil7XG4gICAgcmV0dXJuIE1hdGgucG93KGZpcnN0QWN0b3IsIHNlY29uZEFjdG9yKTtcbn1cbi8qKlxuICogVW5hcnlNaW51c1xuICogQHBhcmFtIHtOdW1iZXJ9IGZpcnN0QWN0b3IgXG4gKi9cbmZ1bmN0aW9uIHVuYXJ5TWludXMgKGZpcnN0QWN0b3IpIHtcbiAgICAgICAgXG4gICAgcmV0dXJuIGZpcnN0QWN0b3IgKiAtMTsgXG59XG5leHBvcnQge3BsdXMsIG1pbnVzLCBkZWxpbWl0ZXIsIG11bHRpcGx5LCBzcXJ0LCBsbiwgZmFjdG9yaWFsLCBwb3csIHVuYXJ5TWludXN9OyIsImNsYXNzIFR3b1Bvc2l0aW9uc1N3aXRjaGVyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbnRhaW5lciBDb250YWluZXIgdG8gaW5wdXQgXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwb3NpdGlvbnNOYW1lcyBBcnJheSBvZiBwb3NpdGlvbnNcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgRXZlbnQgdG8gZGlzcGF0Y2hcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyID0gJycsIHBvc2l0aW9uc05hbWVzID0gW10sIGV2ZW50TmFtZSA9ICcnKSB7XHJcbiAgICAgICAgLy8gc2V0dGluZ3NcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICAncG9zaXRpb25DbGFzcycgOiAnVHdvUG9zaXRpb25zU3dpdGNoZXItLXBvc2l0aW9uJyxcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uQWN0aXZlQ2xhc3MnIDogJ1R3b1Bvc2l0aW9uc1N3aXRjaGVyLS1wb3NpdGlvbi0tYWN0aXZlJyxcclxuICAgICAgICAgICAgJ3N3aXRjaGVyQWN0aXZlUG9zaXRpb25DbGFzcycgOiBbXHJcbiAgICAgICAgICAgICAgICAnVHdvUG9zaXRpb25zU3dpdGNoZXItLXN3aXRjaGVyLS1wb3MxJyxcclxuICAgICAgICAgICAgICAgICdUd29Qb3NpdGlvbnNTd2l0Y2hlci0tc3dpdGNoZXItLXBvczInLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAnc3dpdGNoZXJCYXNlQ2xhc3MnIDogJ1R3b1Bvc2l0aW9uc1N3aXRjaGVyLS1zd2l0Y2hlcidcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hlckVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gcG9zaXRpb25zTmFtZXM7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50SWQgPSBcIlR3b1Bvc2l0aW9uc1N3aXRjaGVyLVwiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAwIC0gMSArIDEpKSArIDE7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnBvc2l0aW9uc1swXTtcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLmluaXQoY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50KGV2ZW50TmFtZSk7XHJcblxyXG5cclxuICAgICAgICAvLyBzZXQgYWN0aXZlIGZpcnN0IHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVQb3NpdGlvbih0aGlzLnBvc2l0aW9uc1swXSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnVpbGQgc3dpdGNoZXIgaHRtbFxyXG4gICAgICogQHBhcmFtIHtET019IGNvbnRhaW5lciBcclxuICAgICAqL1xyXG4gICAgaW5pdChjb250YWluZXIpIHtcclxuICAgICAgICBsZXQgcG9zaXRpb25zID0gYGA7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9ucyArPSBcclxuICAgICAgICAgICAgYDxzcGFuIGNsYXNzPVwiYCArIHRoaXMuc2V0dGluZ3MucG9zaXRpb25DbGFzcyArIGBcIiBkYXRhLXZhbHVlPVwiYCArIHRoaXMucG9zaXRpb25zW2ldICsgYFwiPlxyXG4gICAgICAgICAgICAgICAgYCArIHRoaXMucG9zaXRpb25zW2ldICsgYFxyXG4gICAgICAgICAgICA8L3NwYW4+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJUd29Qb3NpdGlvbnNTd2l0Y2hlclwiIGlkPVwiYCArIHRoaXMuZWxlbWVudElkICsgYFwiPlxyXG4gICAgICAgICAgICBgICsgcG9zaXRpb25zICsgYFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImAgKyB0aGlzLnNldHRpbmdzLnN3aXRjaGVyQmFzZUNsYXNzICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgICAgICB0aGlzLnN3aXRjaGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5lbGVtZW50SWQgKyAnIC4nICsgdGhpcy5zZXR0aW5ncy5zd2l0Y2hlckJhc2VDbGFzcyk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc3dpdGNoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc3dpdGNoIGFjdGl2ZSBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgc3dpdGNoKCBldmVudCApIHtcclxuICAgICAgICAvLyBUT0RPOiB3ZSBjYW4gdXNlIGV2ZW50LnRhcmdldCBpZiB3ZSBuZWVkIG1vcmUgdGhhbiAyIHBvc2l0aW9uc1xyXG4gICAgICAgIGxldCBwb3NpdGlvbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyB0aGlzLmVsZW1lbnRJZCArICcgLicgKyB0aGlzLnNldHRpbmdzLnBvc2l0aW9uQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzc2VzIGZyb20gcG9zaXNpb24gZWxlbWVudHNcclxuICAgICAgICBwb3NpdGlvbkVsZW1lbnRzLmZvckVhY2goKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2V0dGluZ3MucG9zaXRpb25BY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZSh0aGlzLnNldHRpbmdzLnBvc2l0aW9uQWN0aXZlQ2xhc3MsICcnKTtcclxuICAgICAgICB9KS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRseV9zZWxlY3RlZF9pdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmVsZW1lbnRJZCArICcgW2RhdGEtdmFsdWU9XCInICsgdGhpcy52YWx1ZSArICdcIl0nKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucG9zaXRpb25zW2ldLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMudmFsdWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVQb3NpdGlvbih0aGlzLnBvc2l0aW9uc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgY29udGludWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGFjdGl2ZSBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBvc2l0aW9uIFxyXG4gICAgICovXHJcbiAgICBzZXRBY3RpdmVQb3NpdGlvbihwb3NpdGlvbiA9ICcnKSB7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMucG9zaXRpb25zLmluZGV4T2YocG9zaXRpb24pXHJcblxyXG4gICAgICAgIGlmKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZWxlbWVudElkKS5kYXRhc2V0LnZhbHVlID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5lbGVtZW50SWQgKyAnIFtkYXRhLXZhbHVlPVwiJyArIHBvc2l0aW9uICsgJ1wiXScpLmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy5wb3NpdGlvbkFjdGl2ZUNsYXNzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBzd2l0Y2hlciBlbGVtZW50IGFjdGl2ZSBjbGFzc2VzXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Muc3dpdGNoZXJBY3RpdmVQb3NpdGlvbkNsYXNzLmZvckVhY2goIChmdW5jdGlvbihhY3RpdmVDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgIH0pLmJpbmQodGhpcykgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy5zd2l0Y2hlckFjdGl2ZVBvc2l0aW9uQ2xhc3NbaW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZpcmUgZXZlbnRcclxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCh0aGlzLmV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgY3VzdG9tIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVFdmVudChldmVudE5hbWUpIHtcclxuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgeyAnZGV0YWlsJzogdGhpc30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUd29Qb3NpdGlvbnNTd2l0Y2hlcjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9