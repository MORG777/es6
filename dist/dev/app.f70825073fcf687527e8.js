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

var _SimpleCalculator = __webpack_require__(/*! ./calculator/SimpleCalculator */ "./src/js/calculator/SimpleCalculator.js");

var _SimpleCalculator2 = _interopRequireDefault(_SimpleCalculator);

var _TwoPositionsSwitcher = __webpack_require__(/*! ./switcher/TwoPositionsSwitcher */ "./src/js/switcher/TwoPositionsSwitcher.js");

var _TwoPositionsSwitcher2 = _interopRequireDefault(_TwoPositionsSwitcher);

var _ThemeSwitcher = __webpack_require__(/*! ./ThemeSwitcher */ "./src/js/ThemeSwitcher.js");

var _ThemeSwitcher2 = _interopRequireDefault(_ThemeSwitcher);

__webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calcE = new _Calculator2.default('Engineer', true);
calcE.init();

var calcSimple = new _SimpleCalculator2.default('Simple', false);
calcSimple.init();

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

/***/ "./src/js/calculator/SimpleCalculator.js":
/*!***********************************************!*\
  !*** ./src/js/calculator/SimpleCalculator.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Calculator2 = __webpack_require__(/*! ./Calculator */ "./src/js/calculator/Calculator.js");

var _Calculator3 = _interopRequireDefault(_Calculator2);

var _math = __webpack_require__(/*! ./math/math */ "./src/js/calculator/math/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleCalculator = function (_Calculator) {
    _inherits(SimpleCalculator, _Calculator);

    function SimpleCalculator(divId, engineerMode) {
        _classCallCheck(this, SimpleCalculator);

        var _this = _possibleConstructorReturn(this, (SimpleCalculator.__proto__ || Object.getPrototypeOf(SimpleCalculator)).call(this, divId, engineerMode));

        _this.availableHandlers = {
            '+': _math.plus, // calc summ
            '-': _math.minus, // calc diff
            '*': _math.multiply, // multiply action
            '/': _math.delimiter // delimiter action
        };
        return _this;
    }

    return SimpleCalculator;
}(_Calculator3.default);

exports.default = SimpleCalculator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvSG9tZTEvRG9jdW1lbnRzL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVGhlbWVTd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYWxjdWxhdG9yL0NhbGNKb3VybmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYWxjdWxhdG9yL0NhbGNKb3VybmFsSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2FsY3VsYXRvci9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYWxjdWxhdG9yL0NhbGN1bGF0b3JEaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYWxjdWxhdG9yL1NpbXBsZUNhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NhbGN1bGF0b3IvbWF0aC9tYXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zd2l0Y2hlci9Ud29Qb3NpdGlvbnNTd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzPzA3YzEiXSwibmFtZXMiOlsiVGhlbWVTd2l0Y2hlciIsImF2YWlsYWJsZVRoZW1lcyIsImRlZmF1bHRUaGVtZSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTmFtZSIsInRoZW1lIiwiaW5kZXhPZiIsImNhbGNFIiwiQ2FsY3VsYXRvciIsImluaXQiLCJjYWxjU2ltcGxlIiwiU2ltcGxlQ2FsY3VsYXRvciIsInRoZW1lU3dpdGNoZXIiLCJ0aGVtZVN3aXRjaGVySW50ZXJmYWNlIiwiVHdvUG9zaXRpb25zU3dpdGNoZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN3aXRjaFRoZW1lIiwiZGV0YWlsIiwidmFsdWUiLCJDYWxjSm91cm5hbCIsImRpdklkIiwiam91cm5hbCIsImZvcm11bGEiLCJyZXN1bHQiLCJwdXNoIiwiQ2FsY0pvdXJuYWxJdGVtIiwiY29uc29sZSIsImxvZyIsImkiLCJsZW5ndGgiLCJpdGVtIiwiaXRlbVJlc3VsdCIsImZvcm11bGFTdHJpbmciLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImVuZ2luZWVyTW9kZSIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJqb3VybmFsQ29udGFpbmVySWQiLCJyZXN1bHREaXYiLCJmb3JtdWxhRGl2IiwiaGlzdG9yeURpdiIsImFjdG9ycyIsIm51bUNlbGwiLCJhdmFpbGFibGVIYW5kbGVycyIsInBsdXMiLCJtaW51cyIsIm11bHRpcGx5IiwiZGVsaW1pdGVyIiwic3FydCIsImxuIiwiZmFjdG9yaWFsIiwicG93IiwidW5hcnlNaW51cyIsInR3b0FjdG9yc0FjdGlvbnMiLCJ0aGlzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiam9pbiIsIk5hTiIsInBhcnNlRmxvYXQiLCJzeW1ib2wiLCJ0YXJnZXQiLCJjaGlsZE5vZGVzIiwiZGF0YSIsImRpc3BsYXlSZXN1bHQiLCJidWlsZENhbGN1bGF0b3IiLCJudW1iZXJzX2J0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidXBkYXRlTnVtQ2VsbCIsImJpbmQiLCJtYXRoX2FjdGlvbnMiLCJtYXRoQWN0aW9uIiwicXVlcnlTZWxlY3RvciIsImNhbGN1bGF0ZSIsInJlc2V0IiwibGFzdEFjdCIsImhhc093blByb3BlcnR5IiwiYWN0aW9uIiwicHVzaE51bUNlbGxUb0FjdG9ycyIsImNoZWNrTGFzdGhpc3RvcnlJc0FjdGlvbiIsInB1c2hUb0pvdXJuYWwiLCJjb250YWluZXJJZCIsIkNhbGN1bGF0b3JEaXNwbGF5IiwiY2FsYyIsImNvbnRhaW5lciIsImJ1aWxkIiwiYXZhaWxhYmxlQWN0aW9ucyIsImFjdGlvbnNIdG1sIiwiYWN0IiwiaHRtbCIsImZpcnN0QWN0b3IiLCJzZWNvbmRBY3RvciIsInJlcyIsInBvc2l0aW9uc05hbWVzIiwiZXZlbnROYW1lIiwic2V0dGluZ3MiLCJzd2l0Y2hlckVsZW1lbnQiLCJwb3NpdGlvbnMiLCJlbGVtZW50SWQiLCJjcmVhdGVFdmVudCIsInNldEFjdGl2ZVBvc2l0aW9uIiwicG9zaXRpb25DbGFzcyIsInN3aXRjaGVyQmFzZUNsYXNzIiwic3dpdGNoIiwiZXZlbnQiLCJwb3NpdGlvbkVsZW1lbnRzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwb3NpdGlvbkFjdGl2ZUNsYXNzIiwicmVwbGFjZSIsImN1cnJlbnRseV9zZWxlY3RlZF9pdGVtIiwidG9Mb3dlckNhc2UiLCJwb3NpdGlvbiIsImluZGV4IiwiZGF0YXNldCIsImFkZCIsInN3aXRjaGVyQWN0aXZlUG9zaXRpb25DbGFzcyIsImFjdGl2ZUNsYXNzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNy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O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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RUFBNkNrQixPQUE3QyxDQUFxRHBHLEtBQXJELEdBQTZEa0csUUFBN0Q7QUFDQW5ILHlCQUFTeUUsYUFBVCxDQUF1QixNQUFNLEtBQUswQixTQUFYLEdBQXVCLGdCQUF2QixHQUEwQ2dCLFFBQTFDLEdBQXFELElBQTVFLEVBQWtGTixTQUFsRixDQUE0RlMsR0FBNUYsQ0FBZ0csS0FBS3RCLFFBQUwsQ0FBY2UsbUJBQTlHOztBQUVBO0FBQ0EscUJBQUtmLFFBQUwsQ0FBY3VCLDJCQUFkLENBQTBDWixPQUExQyxDQUFvRCxVQUFTYSxXQUFULEVBQXNCO0FBQ3RFLHlCQUFLdkIsZUFBTCxDQUFxQlksU0FBckIsQ0FBK0JDLE1BQS9CLENBQXNDVSxXQUF0QztBQUNILGlCQUZrRCxDQUVoRGxELElBRmdELENBRTNDLElBRjJDLENBQW5EOztBQUlBLHFCQUFLMkIsZUFBTCxDQUFxQlksU0FBckIsQ0FBK0JTLEdBQS9CLENBQW1DLEtBQUt0QixRQUFMLENBQWN1QiwyQkFBZCxDQUEwQ0gsS0FBMUMsQ0FBbkM7O0FBRUE7QUFDQXBILHlCQUFTeUgsYUFBVCxDQUF1QixLQUFLaEIsS0FBNUI7QUFDSDtBQUNKOztBQUVEOzs7Ozs7O29DQUlZVixTLEVBQVc7QUFDbkIsaUJBQUtVLEtBQUwsR0FBYSxJQUFJaUIsV0FBSixDQUFnQjNCLFNBQWhCLEVBQTJCLEVBQUUsVUFBVSxJQUFaLEVBQTNCLENBQWI7QUFDSDs7Ozs7O2tCQUdVbkYsb0I7Ozs7Ozs7Ozs7OztBQ2hJZjs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFkiLCJmaWxlIjoiYXBwLmY3MDgyNTA3M2ZjZjY4NzUyN2U4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYXBwLmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKlxcclxcbiAqL1xcbi8qID09IFZhcmlhYmxlcyA9PSAqL1xcbi5Ud29Qb3NpdGlvbnNTd2l0Y2hlciB7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDFweCAjMDAwIHNvbGlkO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAyMnB4OyB9XFxuICAuVHdvUG9zaXRpb25zU3dpdGNoZXItLXBvc2l0aW9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIHBhZGRpbmc6IDAgMTBweDsgfVxcbiAgICAuVHdvUG9zaXRpb25zU3dpdGNoZXItLXBvc2l0aW9uOm50aC1jaGlsZCgxKSB7XFxuICAgICAgbGVmdDogMDsgfVxcbiAgICAuVHdvUG9zaXRpb25zU3dpdGNoZXItLXBvc2l0aW9uOm50aC1jaGlsZCgyKSB7XFxuICAgICAgcmlnaHQ6IDA7IH1cXG4gICAgLlR3b1Bvc2l0aW9uc1N3aXRjaGVyLS1wb3NpdGlvbi0tYWN0aXZlIHtcXG4gICAgICAvKiA9PSBzZWxlY3RlZCBwb3NpdGlvbiBzdHlsZSA9PSovIH1cXG4gIC5Ud29Qb3NpdGlvbnNTd2l0Y2hlci0tc3dpdGNoZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTFweDtcXG4gICAgbGVmdDogLTFweDtcXG4gICAgYmFja2dyb3VuZDogI2NlY2VjZTtcXG4gICAgYm9yZGVyOiAxcHggIzAwMCBzb2xpZDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4tbGVmdDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7IH1cXG4gICAgLlR3b1Bvc2l0aW9uc1N3aXRjaGVyLS1zd2l0Y2hlci0tcG9zMSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG4gICAgLlR3b1Bvc2l0aW9uc1N3aXRjaGVyLS1zd2l0Y2hlci0tcG9zMiB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDUwJTsgfVxcblxcbi8qID09IFZhcmlhYmxlcyA9PSAqL1xcbi5jYWxjdWxhdG9yV3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNDAwcHg7IH1cXG5cXG4uY2FsY3VsYXRvci1tYWluIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDkwJTsgfVxcbiAgLmNhbGN1bGF0b3ItbWFpbiAuY2FsY3VsYXRvci1mb3JtdWxhIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIG1hcmdpbjogMCA0OHB4IDAgMDtcXG4gICAgaGVpZ2h0OiAyMHB4OyB9XFxuICAuY2FsY3VsYXRvci1tYWluIC5jYWxjdWxhdG9yLXJlc3VsdCB7XFxuICAgIC8qID09ICA9PSAqL1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBsaW5lLWhlaWdodDogNDVweDtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCAjMzMzIHNvbGlkO1xcbiAgICBtYXJnaW46IDEwcHggNDhweCAxMHB4IDA7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXG4gIC5jYWxjdWxhdG9yLW1haW4gLmNhbGN1bGF0b3ItYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7IH1cXG4gICAgLmNhbGN1bGF0b3ItbWFpbiAuY2FsY3VsYXRvci1idXR0b25zLW1haW4ge1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIHdpZHRoOiAlOyB9XFxuICAgIC5jYWxjdWxhdG9yLW1haW4gLmNhbGN1bGF0b3ItYnV0dG9ucy1jbGVhciB7XFxuICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICBtYXJnaW46IDAgNXB4IDVweCAwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgICAgIGJvcmRlcjogMXB4ICMzMzMgc29saWQ7XFxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41czsgfVxcbiAgICAgIC5jYWxjdWxhdG9yLW1haW4gLmNhbGN1bGF0b3ItYnV0dG9ucy1jbGVhcjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICAgICAgY29sb3I6ICNjZGNkY2Q7XFxuICAgICAgICBib3JkZXItY29sb3I6ICM2NjY7IH1cXG5cXG4uY2FsY3VsYXRvci1idXR0b25zLW51bWJlcnMtaXRlbS1jYWxjdWxhdGUge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbjogMCA1cHggNXB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgYm9yZGVyOiAxcHggIzMzMyBzb2xpZDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7IH1cXG4gIC5jYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycy1pdGVtLWNhbGN1bGF0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiAjY2RjZGNkO1xcbiAgICBib3JkZXItY29sb3I6ICM2NjY7IH1cXG5cXG4vKiA9PSBudW1lcmljIHBhZCBibG9jayA9PSAqL1xcbi5jYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuY2FsY3VsYXRvci1idXR0b25zLW51bWJlcnMtaXRlbSB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgbWFyZ2luOiAwIDVweCA1cHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgICBib3JkZXI6IDFweCAjMzMzIHNvbGlkO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzOyB9XFxuICAgIC5jYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycy1pdGVtOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICAgIGNvbG9yOiAjY2RjZGNkO1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzY2NjsgfVxcblxcbi8qID09IEFjdGlvbnMgYmxvY2sgPT0qL1xcbi5jYWxjdWxhdG9yLWJ1dHRvbnMtYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuY2FsY3VsYXRvci1idXR0b25zLWFjdGlvbnMtLWl0ZW0ge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbjogMCA1cHggNXB4IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcjtcXG4gICAgYm9yZGVyOiAxcHggIzMzMyBzb2xpZDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41czsgfVxcbiAgICAuY2FsY3VsYXRvci1idXR0b25zLWFjdGlvbnMtLWl0ZW06aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgICAgY29sb3I6ICNjZGNkY2Q7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNjY2OyB9XFxuXFxuLyo9PSBBZGRpdGlvbmFsID09Ki9cXG4uY2FsY3VsYXRvci1hZGRpdGlvbmFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDIwMCU7XFxuICB0b3A6IDA7IH1cXG5cXG4uY2FsY3VsYXRvci1idXR0b25zLWNsZWFyIHtcXG4gIGZsZXg6IDAgMCAzMy4zMzMzJTtcXG4gIGhlaWdodDogNTBweDsgfVxcblxcbi8qKlxcclxcbiAqIGJsb2Nrc1xcclxcbiAqL1xcbi8qKlxcclxcbiAqIFRoZW1lc1xcclxcbiAqL1xcbi8qKlxcclxcbiAqIHZhcmlhYmxlc1xcclxcbiAqL1xcbi5EYXJrIHtcXG4gIGJhY2tncm91bmQ6ICM5OTk7XFxuICBjb2xvcjogIzMzMzsgfVxcbiAgLkRhcmsgLnJlc3VsdCB7XFxuICAgIGJhY2tncm91bmQ6ICM5OTk7XFxuICAgIGJvcmRlci1jb2xvcjogIzMzMzsgfVxcblxcbi8qKlxcclxcbiAqIHZhcmlhYmxlc1xcclxcbiAqL1xcbi8qKlxcclxcbiAqIHN0eWxlc1xcclxcbiAqL1xcbi5MaWdodGVyIHtcXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XFxuICBjb2xvcjogIzMzMzsgfVxcbiAgLkxpZ2h0ZXIgLnJlc3VsdCB7XFxuICAgIGNvbG9yOiAjMzMzOyB9XFxuXFxuLyoqXFxyXFxuICAqIGJsb2Nrc1xcclxcbiAgKi9cXG5oZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogODBweDsgfVxcblxcbiN0b3AtbWVudSB1bCB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG4jdG9wLW1lbnUgPiB1bCA+IGxpIHtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxuI3RvcC1tZW51ID4gdWwgPiBsaSA+IHVsIHtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4jdG9wLW1lbnUgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuI3RvcC1tZW51IGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuI3RvcC1tZW51IHVsIGxpIGxpIHVsIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDEwMCU7IH1cXG5cXG4jdG9wLW1lbnUgdWwgdWwge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuXFxuI3RvcC1tZW51IGxpOmhvdmVyID4gdWwge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcblxcbiN0b3AtbWVudSB7XFxuICBwYWRkaW5nOiAwIDVweDsgfVxcblxcbiN0b3AtbWVudSxcXG4jdG9wLW1lbnUgPiB1bCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbiN0b3AtbWVudTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNsZWFyOiBib3RoO1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4jdG9wLW1lbnUgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjsgfVxcblxcbiN0b3AtbWVudSA+IHVsID4gbGkgPiBhIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgbWFyZ2luOiAycHggMDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4jdG9wLW1lbnUgPiB1bCA+IGxpID4gdWwgKyBhIHtcXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuI3RvcC1tZW51ID4gdWwgPiBsaSA+IHVsICsgYTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXFwyNUJDXFxcIjsgfVxcblxcbiN0b3AtbWVudSA+IHVsID4gbGk6aG92ZXIgPiBhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGNkY2Q7IH1cXG5cXG4jdG9wLW1lbnUgPiB1bCA+IGxpOmhvdmVyID4gdWwgKyBhIHtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7IH1cXG5cXG4jdG9wLW1lbnUgPiB1bCA+IGxpID4gdWwge1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzsgfVxcblxcbiN0b3AtbWVudSA+IHVsID4gbGkgbGkgPiB1bCArIGE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFxcMjVCNlxcXCI7IH1cXG5cXG4jdG9wLW1lbnUgPiB1bCA+IGxpID4gdWwgPiBsaTpsYXN0LWNoaWxkLFxcbiN0b3AtbWVudSA+IHVsID4gbGkgPiB1bCB7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4OyB9XFxuXFxuI3RvcC1tZW51IHVsIGxpIGxpOmhvdmVyLFxcbiN0b3AtbWVudSB1bCBsaSBsaSB1bCxcXG4jdG9wLW1lbnUgdWwgbGkgbGkgdWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkY2RjZDsgfVxcblxcbiN0b3AtbWVudSA+IHVsID4gbGkgPiB1bCxcXG4jdG9wLW1lbnUgdWwgbGkgbGkgdWwge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcztcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcztcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtczsgfVxcblxcbiN0b3AtbWVudSA+IHVsID4gbGkgPiB1bCB7XFxuICB0b3A6IDQwMCU7XFxuICBvcGFjaXR5OiAwOyB9XFxuXFxuI3RvcC1tZW51ID4gdWwgPiBsaTpob3ZlciA+IHVsIHtcXG4gIHRvcDogMTAwJTtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4jdG9wLW1lbnUgdWwgbGkgdWwgbGkgdWwge1xcbiAgbGVmdDogNDAwJTtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4jdG9wLW1lbnUgdWwgbGkgdWwgbGk6aG92ZXIgdWwge1xcbiAgbGVmdDogMTAwJTtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7IH1cXG5cXG4uY2xlYXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGNsZWFyOiBib3RoOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImNsYXNzIFRoZW1lU3dpdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmF2YWlsYWJsZVRoZW1lcyA9IFsnTGlnaHRlcicsICdEYXJrJ107XG4gICAgICAgIHRoaXMuZGVmYXVsdFRoZW1lID0gJ0xpZ2h0ZXInO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gdGhpcy5kZWZhdWx0VGhlbWU7XG4gICAgfVxuXG4gICAgc3dpdGNoVGhlbWUodGhlbWUpIHtcbiAgICAgICAgaWYodGhpcy5hdmFpbGFibGVUaGVtZXMuaW5kZXhPZih0aGVtZSkgIT0gLTEpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gdGhlbWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lU3dpdGNoZXI7IiwiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9jYWxjdWxhdG9yL0NhbGN1bGF0b3InO1xuaW1wb3J0IFNpbXBsZUNhbGN1bGF0b3IgZnJvbSAnLi9jYWxjdWxhdG9yL1NpbXBsZUNhbGN1bGF0b3InO1xuaW1wb3J0IFR3b1Bvc2l0aW9uc1N3aXRjaGVyIGZyb20gJy4vc3dpdGNoZXIvVHdvUG9zaXRpb25zU3dpdGNoZXInO1xuXG5pbXBvcnQgVGhlbWVTd2l0Y2hlciBmcm9tICcuL1RoZW1lU3dpdGNoZXInO1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XG5cblxuXG5cblxubGV0IGNhbGNFID0gbmV3IENhbGN1bGF0b3IoJ0VuZ2luZWVyJywgdHJ1ZSk7XG5jYWxjRS5pbml0KCk7XG5cbmxldCBjYWxjU2ltcGxlID0gbmV3IFNpbXBsZUNhbGN1bGF0b3IoJ1NpbXBsZScsIGZhbHNlKTtcbmNhbGNTaW1wbGUuaW5pdCgpO1xuXG5cbmRvY3VtZW50LnRoZW1lU3dpdGNoZXIgPSBuZXcgVGhlbWVTd2l0Y2hlcigpO1xuXG5cblxuLyoqXG4gKiBjcmVhdGUgdGhlbWUgc3dpdGNoZXIgaW50ZXJmYWNlXG4gKiBwYXJhbTEgLSB3aGVyZSB0byBwbGFjZSBzd2l0Y2hlclxuICogcGFyYW0yIC0gcG9zc2libGUgdmFsdWVzXG4gKiBwYXJhbTMgLSBmaXJpbmcgZXZlbnRcbiAqL1xuXG5kb2N1bWVudC50aGVtZVN3aXRjaGVySW50ZXJmYWNlID0gbmV3IFR3b1Bvc2l0aW9uc1N3aXRjaGVyKCcjdGhlbWVTd2l0Y2hlcicsIFsnTGlnaHRlcicsICdEYXJrJ10sICdzd2l0Y2hUaGVtZScpO1xuLy8gYXR0YWNoIHRoZW1lIHN3aXRjaGVyIGV2ZW50XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzd2l0Y2hUaGVtZScsIGZ1bmN0aW9uKGUpe1xuICAgIGRvY3VtZW50LnRoZW1lU3dpdGNoZXIuc3dpdGNoVGhlbWUoZS5kZXRhaWwudmFsdWUpO1xufSkiLCJpbXBvcnQgQ2FsY0pvdXJuYWxJdGVtIGZyb20gJy4vQ2FsY0pvdXJuYWxJdGVtJztcblxuY2xhc3MgQ2FsY0pvdXJuYWwge1xuXG4gICAgY29uc3RydWN0b3IoZGl2SWQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGNKb3VybmFsSXRlbVtdXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmpvdXJuYWwgPSBbXTtcblxuICAgICAgICB0aGlzLmRpdklkID0gZGl2SWQ7XG4gICAgfVxuXG4gICAgcHVzaCAoZm9ybXVsYSwgcmVzdWx0KSB7XG4gICAgICAgIHRoaXMuam91cm5hbC5wdXNoKCBuZXcgQ2FsY0pvdXJuYWxJdGVtKGZvcm11bGEsIHJlc3VsdCkgKTtcbiAgICAgICAgY29uc29sZS5sb2coJzExMScpXG4gICAgfVxuICAgIFxuXG4gICAgZGlzcGxheSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5qb3VybmFsLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmpvdXJuYWxbaV07XG4gICAgICAgICAgICBsZXQgaXRlbVJlc3VsdCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqb3VybmFsSXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqb3VybmFsSXRlbS0tcmVzdWx0XCI+JHtpdGVtLnJlc3VsdH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiam91cm5hbEl0ZW0tLWZvcm11bGFcIj4ke2l0ZW0uZm9ybXVsYVN0cmluZ308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIHJlc3VsdCArPSBpdGVtUmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRpdklkKS5pbm5lckhUTUwgPSByZXN1bHQ7XG5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYWxjSm91cm5hbDsiLCJmdW5jdGlvbiBDYWxjSm91cm5hbEl0ZW0oZm9ybXVsYVN0cmluZywgcmVzdWx0KSB7XG4gICAgdGhpcy5mb3JtdWxhU3RyaW5nID0gZm9ybXVsYVN0cmluZztcbiAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsY0pvdXJuYWxJdGVtOyIsImltcG9ydCBDYWxjSm91cm5hbCBmcm9tICcuL0NhbGNKb3VybmFsJztcbmltcG9ydCB7cGx1cywgbWludXMsIGRlbGltaXRlciwgbXVsdGlwbHksc3FydCwgbG4sIGZhY3RvcmlhbCwgcG93LCB1bmFyeU1pbnVzfSBmcm9tICcuL21hdGgvbWF0aCc7XG5pbXBvcnQgeyBDYWxjdWxhdG9yRGlzcGxheSB9IGZyb20gJy4vQ2FsY3VsYXRvckRpc3BsYXknO1xuXG5jbGFzcyBDYWxjdWxhdG9yIHtcblxuICAgIFxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkaXZJZCBJRCBvZiBjb250YWluZXIgdG8gYnVpbGQgY2FsY3VsYXRvclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5naW5lZXJNb2RlIEFkZCBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkaXZJZCwgZW5naW5lZXJNb2RlKSB7XG4gICAgICAgIC8vc3VwZXIoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQGF0dHJpYnV0ZSB7Q2FsY3VsYXRvckRpc3BsYXl9IFxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmRpc3BsYXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhdHRyaWJ1dGUgSWQgb2YgY29udGFpbmVyIHRvIGJ1aWxkIGFwcGxpY2F0aW9uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpdklkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYXR0cmlidXRlIHtzdHJpbmd9IElkIGZvciBKb3VuYWwgRE9NLWVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuam91cm5hbENvbnRhaW5lcklkID0gJyc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhdHRyaWJ1dGUge2Jvb2xlYW59IFN3aXRjaCBiZXR3ZWVuIHNpbXBsZSBhbmQgZW5naW5lZXIgbW9kZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZW5naW5lZXJNb2RlID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhdHRyaWJ1dGUge0RPTX0gRG9tIGVsZW1lbnQgdG8gc2hvdyByZXN1bHRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVzdWx0RGl2ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYXR0cmlidXRlIHtET019IERPTSBlbGVtZW50IHRvIGRpc3BsYXkgZm9ybXVsYVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JtdWxhRGl2ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYXR0cmlidXRlIHtET019IERPTSBlbGVtZW50IHRvIGRpc3BsYXkgb3BlcmF0aW9ucyBoaXN0b3J5XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhpc3RvcnlEaXYgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhdHRyaWJ1dGUge3N0cmluZ30gRm9ybXVsYSBzdHJpbmcgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcm11bGFTdHJpbmcgPSAnJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQGF0dHJpYnV0ZSB7QXJyYXl9IEhpc3RvcnlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0b3JzID0gW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhdHRyaWJ1dGUge051bWJlcn0gcmVzdWx0XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhdHRyaWJ1dGUge1N0cmluZ30gQ29udGFpbmVyIGZvciBjb21wbGV4IG51bWJlcnMgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm51bUNlbGwgPSAnJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQGF0dHJpYnV0ZSB7b2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdmFpbGFibGVIYW5kbGVycyA9IHtcbiAgICAgICAgICAgICcrJyA6IHBsdXMsICAgICAgLy8gY2FsYyBzdW1tXG4gICAgICAgICAgICAnLScgOiBtaW51cywgICAgIC8vIGNhbGMgZGlmZlxuICAgICAgICAgICAgJyonIDogbXVsdGlwbHksICAgICAvLyBtdWx0aXBseSBhY3Rpb25cbiAgICAgICAgICAgICcvJyA6IGRlbGltaXRlciwgLy8gZGVsaW1pdGVyIGFjdGlvblxuICAgICAgICAgICAgJ+KImicgOiBzcXJ0LCAgICAgIC8vIHNxcnRcbiAgICAgICAgICAgICdsbic6IGxuLCAgICAgICAgLy8gbG5cbiAgICAgICAgICAgICduISc6IGZhY3RvcmlhbCwgLy8gZmFjdG9yaWFsIFxuICAgICAgICAgICAgJ3heMicgOiBwb3csICAgICAvLyBwb3cgICAgXG4gICAgICAgICAgICAnKy8tJyA6IHVuYXJ5TWludXMsICAgLy8gdW5hcnkgbWludXNcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBhY3Rpb25zLCByZXF1aXJlcyAyIHBhcmFtZXRlcnMgIFxuICAgICAgICB0aGlzLnR3b0FjdG9yc0FjdGlvbnMgPSB7XG4gICAgICAgICAgICAnKyc6ICcnLCAgICBcbiAgICAgICAgICAgICctJzogJycsXG4gICAgICAgICAgICAnKic6ICcnLFxuICAgICAgICAgICAgJy8nOiAnJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRoaXMgPSB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogZ2VuZXJhdGUgSUQgZm9yIGpvdXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuam91cm5hbENvbnRhaW5lcklkID0gXCJqb3VybmFsQ29udGFpbmVyLVwiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAwIC0gMSArIDEpKSArIDE7XG5cbiAgICAgICAgdGhpcy5qb3VybmFsID0gbmV3IENhbGNKb3VybmFsKHRoaXMuam91cm5hbENvbnRhaW5lcklkKTtcblxuICAgICAgICB0aGlzLmRpdklkID0gZGl2SWQ7XG5cbiAgICAgICAgdGhpcy5lbmdpbmVlck1vZGUgPSBlbmdpbmVlck1vZGUgIT09IHVuZGVmaW5lZCA/IGVuZ2luZWVyTW9kZSA6IGZhbHNlIDtcblxuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBzaG93IHJlc3VsdHMgaW4gZmllbGRcbiAgICAgKi9cbiAgICBkaXNwbGF5UmVzdWx0KCkge1xuXG4gICAgICAgIHRoaXMuZm9ybXVsYURpdi5pbm5lckhUTUwgPSB0aGlzLmFjdG9ycy5qb2luKCcgJyk7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnJlc3VsdCAhPSBOYU4gJiYgcGFyc2VGbG9hdCh0aGlzLnJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0RGl2LmlubmVySFRNTCA9IHRoaXMucmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5oaXN0b3J5RGl2LmlubmVySFRNTCA9IHRoaXMuYWN0b3JzLmpvaW4oJzxici8+Jyk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXNldCBudW1DZWxsXG4gICAgICovXG4gICAgY2xlYXJOdW1DZWxsKCkge1xuICAgICAgICB0aGlzLm51bUNlbGwgPSAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpZiBtb3JlIHRoYW4gb25lIGRpZ2l0IGluIG51bWJlclxuICAgICAqL1xuICAgIHVwZGF0ZU51bUNlbGwoc3ltYm9sKSB7XG5cbiAgICAgICAgc3ltYm9sID0gdHlwZW9mIHN5bWJvbCA9PT0gJ3N0cmluZycgPyBzeW1ib2wgOiBzeW1ib2wudGFyZ2V0LmNoaWxkTm9kZXNbMF0uZGF0YSA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm51bUNlbGwgKz0gc3ltYm9sO1xuICAgICAgICB0aGlzLmRpc3BsYXlSZXN1bHQoKTtcbiAgICAgICAgdGhpcy5mb3JtdWxhRGl2LmlubmVySFRNTCA9IHRoaXMuZm9ybXVsYURpdi5pbm5lckhUTUwgKyB0aGlzLm51bUNlbGw7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqL1xuICAgIHB1c2hOdW1DZWxsVG9BY3RvcnMoKSB7XG4gICAgICAgIGlmKHRoaXMubnVtQ2VsbCAmJiBwYXJzZUZsb2F0KHRoaXMubnVtQ2VsbCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0b3JzLnB1c2goIHBhcnNlRmxvYXQodGhpcy5udW1DZWxsKSApO1xuICAgICAgICAgICAgdGhpcy5udW1DZWxsID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXNoVG9Kb3VybmFsKCkge1xuICAgICAgICB0aGlzLmpvdXJuYWwucHVzaCggdGhpcy5mb3JtdWxhRGl2LmlubmVySFRNTCwgdGhpcy5yZXN1bHREaXYuaW5uZXJIVE1MICk7XG4gICAgICAgIHRoaXMuam91cm5hbC5kaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5pdGlhdGUgY2FsY3VsYXRvclxuICAgICAqL1xuICAgIGluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5idWlsZENhbGN1bGF0b3IodGhpcy5kaXZJZCwgdGhpcy5lbmdpbmVlck1vZGUpO1xuXG4gICAgICAgIGxldCBudW1iZXJzX2J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIHRoaXMuZGl2SWQgKyAnIC5jYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycy1pdGVtJyk7XG4gICAgICAgIC8vIGF0dGFjaCBudW1iZXJzIGJ1dHRvbnNcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG51bWJlcnNfYnRucy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIG51bWJlcnNfYnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlTnVtQ2VsbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF0dGFjaCBtYXRoIGFjdGlvbnNcbiAgICAgICAgbGV0IG1hdGhfYWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgdGhpcy5kaXZJZCArICcgLmNhbGN1bGF0b3ItYnV0dG9ucy1hY3Rpb25zLS1pdGVtJyk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgbWF0aF9hY3Rpb25zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIG1hdGhfYWN0aW9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWF0aEFjdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gYXR0YWNoIGVxdWFscyBoYW5kbGVyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5kaXZJZCArICcgLmNhbGN1bGF0b3ItYnV0dG9ucy1udW1iZXJzLWl0ZW0tY2FsY3VsYXRlJykuXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2FsY3VsYXRlLmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIGF0dGFjaCBjbGVhciBhY3Rpb25cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmRpdklkICsgJyAuY2FsY3VsYXRvci1idXR0b25zLWNsZWFyJykuXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVzZXQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5mb3JtdWxhRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmRpdklkICsgJyAuY2FsY3VsYXRvci1mb3JtdWxhJyk7XG4gICAgICAgIHRoaXMucmVzdWx0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmRpdklkICsgJyAuY2FsY3VsYXRvci1yZXN1bHQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgYm9vbGVhbiB0cnVlIGlmIGxhc3QgaGlzdG9yeSByZWNvcmQgd2FzIG1hdGggYWN0aW9uXG4gICAgICovXG4gICAgY2hlY2tMYXN0aGlzdG9yeUlzQWN0aW9uKCkge1xuICAgICAgICBpZighdGhpcy5hY3RvcnMgfHwgIXRoaXMuYWN0b3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxhc3RBY3QgPSB0aGlzLmFjdG9yc1sgdGhpcy5hY3RvcnMgLSAxIF07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdmFpbGFibGVIYW5kbGVycy5oYXNPd25Qcm9wZXJ0eSggbGFzdEFjdCApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICovXG4gICAgbWF0aEFjdGlvbiggYWN0aW9uICkge1xuICAgICAgICBcbiAgICAgICAgYWN0aW9uID0gdHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycgPyBhY3Rpb24gOiBhY3Rpb24udGFyZ2V0LmNoaWxkTm9kZXNbMF0uZGF0YTtcblxuICAgICAgICB0aGlzLnB1c2hOdW1DZWxsVG9BY3RvcnMoKTtcblxuICAgICAgICBpZih0aGlzLmNoZWNrTGFzdGhpc3RvcnlJc0FjdGlvbigpKSB7XG4gICAgICAgICAgICAvLyByZXdyaXRlIGxhc3QgYWN0aW9uIHdpdGggbmV3IG9uZVxuICAgICAgICAgICAgdGhpcy5hY3RvcnNbIHRoaXMuYWN0b3JzLmxlbmd0aCAtIDEgXSA9IGFjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWN0b3JzLnB1c2goYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuICAgIH1cblxuICAgXG4gICAgXG5cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqL1xuICAgIGNhbGN1bGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubnVtQ2VsbCAmJiB0aGlzLm51bUNlbGwgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaE51bUNlbGxUb0FjdG9ycygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5hY3RvcnNbMF07XG4gICAgICAgIFxuICAgICAgICAvLyBmaXJzdCBhY3RvciBpcyBhbHJlYWR5IGluIHJlc3VsdFxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgdGhpcy5hY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMuYXZhaWxhYmxlSGFuZGxlcnMuaGFzT3duUHJvcGVydHkodGhpcy5hY3RvcnNbaV0pKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FsbCBtYXRoIGhhbmRsZXJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnR3b0FjdG9yc0FjdGlvbnMuaGFzT3duUHJvcGVydHkodGhpcy5hY3RvcnNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZSAyIG51bWJlcnMgYW5kIHNraXAgbmV4dCBzdGFnZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuYXZhaWxhYmxlSGFuZGxlcnNbIHRoaXMuYWN0b3JzW2ldIF0odGhpcy5yZXN1bHQsIHRoaXMuYWN0b3JzWysraV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5hdmFpbGFibGVIYW5kbGVyc1sgdGhpcy5hY3RvcnNbaV0gXSh0aGlzLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmRpc3BsYXlSZXN1bHQoKTtcbiAgICAgICAgdGhpcy5wdXNoVG9Kb3VybmFsKCk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuYWN0b3JzID0gW107XG4gICAgICAgIHRoaXMucmVzdWx0ID0gMDtcbiAgICAgICAgdGhpcy5udW1DZWxsID0gJyc7XG4gICAgICAgIHRoaXMuZGlzcGxheVJlc3VsdCgpO1xuICAgICAgICB0aGlzLnJlc3VsdERpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5mb3JtdWxhRGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzb21lIGtpbmQgb2YgQnVpbGRlciBwYXR0ZXJuXG4gICAgICovXG4gICAgYnVpbGRDYWxjdWxhdG9yKGNvbnRhaW5lcklkLCBlbmdpbmVlck1vZGUpIHtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLmRpc3BsYXkgPSBuZXcgQ2FsY3VsYXRvckRpc3BsYXkodGhpcyk7XG4gICAgICAgIFxuICAgICAgICBcbi8qXG4gICAgICAgIHRoaXMucmVzdWx0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyB0aGlzLmRpdklkICsgJyAucmVzdWx0JylbMF07XG4gICAgICAgIHRoaXMuZm9ybXVsYURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgdGhpcy5kaXZJZCArICcgLmZvcm11bGEnKVswXTtcbiAgICAgICAgdGhpcy5oaXN0b3J5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyB0aGlzLmRpdklkICsgJyAuaGlzdG9yeScpWzBdOyovXG4gICAgICAgIFxuXG4gICAgfVxuXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yO1xuIiwiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9DYWxjdWxhdG9yJztcblxuY2xhc3MgQ2FsY3VsYXRvckRpc3BsYXkge1xuXG4gICAgXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtDYWxjdWxhdG9yfSBjYWxjIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhbGMpIHtcbiAgICAgICAgLy9zdXBlcigpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbGMuZGl2SWQpO1xuXG5cbiAgICAgICAgdGhpcy5jYWxjID0gY2FsYztcblxuICAgICAgICB0aGlzLmJ1aWxkKGNhbGMuYXZhaWxhYmxlSGFuZGxlcnMpO1xuICAgIH1cblxuICAgIGJ1aWxkKGF2YWlsYWJsZUFjdGlvbnMpIHtcbiAgICAgICAgbGV0IGFjdGlvbnNIdG1sID0gJyc7XG4gICAgICAgIGlmKGF2YWlsYWJsZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGZvcihsZXQgYWN0IGluIGF2YWlsYWJsZUFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zSHRtbCArPSBgPGJ1dHRvbiBjbGFzcz1cImNhbGN1bGF0b3ItYnV0dG9ucy1hY3Rpb25zLS1pdGVtXCI+YCArIGFjdCArIGA8L2J1dHRvbj5gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8qKiBUT0RPOiBtb3ZlIG51bWJlcnMgcGFkIHRvIGEgc2VwYXJhdGUgbW9kdWxlICovXG4gICAgICAgIGxldCBodG1sID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGN1bGF0b3JXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGN1bGF0b3ItbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsY3VsYXRvci1mb3JtdWxhXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxjdWxhdG9yLXJlc3VsdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zLWNsZWFyXCI+QzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zLW51bWJlcnMtaXRlbVwiPjc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbGN1bGF0b3ItYnV0dG9ucy1udW1iZXJzLWl0ZW1cIj44PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycy1pdGVtXCI+OTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zLW51bWJlcnMtaXRlbVwiPjY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbGN1bGF0b3ItYnV0dG9ucy1udW1iZXJzLWl0ZW1cIj41PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycy1pdGVtXCI+NDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zLW51bWJlcnMtaXRlbVwiPjE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbGN1bGF0b3ItYnV0dG9ucy1udW1iZXJzLWl0ZW1cIj4yPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycy1pdGVtXCI+MzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zLW51bWJlcnMtaXRlbS1jYWxjdWxhdGVcIj49PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYWxjdWxhdG9yLWJ1dHRvbnMtbnVtYmVycy1pdGVtXCI+MDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FsY3VsYXRvci1idXR0b25zLW51bWJlcnMtaXRlbVwiPi48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCArIGFjdGlvbnNIdG1sICsgYFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxjdWxhdG9yLWFkZGl0aW9uYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpvdXJuYWwtd3JhcHBlclwiIGlkPVwiYCArIHRoaXMuY2FsYy5qb3VybmFsQ29udGFpbmVySWQgKyBgXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7IENhbGN1bGF0b3JEaXNwbGF5IH07IiwiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9DYWxjdWxhdG9yJztcclxuaW1wb3J0IHtwbHVzLCBtaW51cywgZGVsaW1pdGVyLCBtdWx0aXBseSxzcXJ0LCBsbiwgZmFjdG9yaWFsLCBwb3csIHVuYXJ5TWludXN9IGZyb20gJy4vbWF0aC9tYXRoJztcclxuXHJcbmNsYXNzIFNpbXBsZUNhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpdklkLCBlbmdpbmVlck1vZGUpIHtcclxuICAgICAgICBzdXBlcihkaXZJZCwgZW5naW5lZXJNb2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVIYW5kbGVycyA9IHtcclxuICAgICAgICAgICAgJysnIDogcGx1cywgICAgICAvLyBjYWxjIHN1bW1cclxuICAgICAgICAgICAgJy0nIDogbWludXMsICAgICAvLyBjYWxjIGRpZmZcclxuICAgICAgICAgICAgJyonIDogbXVsdGlwbHksICAgICAvLyBtdWx0aXBseSBhY3Rpb25cclxuICAgICAgICAgICAgJy8nIDogZGVsaW1pdGVyLCAvLyBkZWxpbWl0ZXIgYWN0aW9uXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlQ2FsY3VsYXRvcjsiLCIvKipcbiAqIFBsdXNcbiAqIEBwYXJhbSB7TnVtYmVyfSBmaXJzdEFjdG9yIFxuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZEFjdG9yIFxuICovXG5mdW5jdGlvbiBwbHVzKCBmaXJzdEFjdG9yLCBzZWNvbmRBY3RvciApIHtcbiAgICByZXR1cm4gZmlyc3RBY3RvciArIHNlY29uZEFjdG9yO1xufVxuXG4vKipcbiAqIE1pbnVzXG4gKiBAcGFyYW0ge051bWJlcn0gZmlyc3RBY3RvciBcbiAqIEBwYXJhbSB7TnVtYmVyfSBzZWNvbmRBY3RvciBcbiAqL1xuZnVuY3Rpb24gbWludXMoIGZpcnN0QWN0b3IsIHNlY29uZEFjdG9yICkge1xuICAgIHJldHVybiBmaXJzdEFjdG9yIC0gc2Vjb25kQWN0b3I7XG59XG5cbi8qKlxuICogRGVsaW1pdGVyXG4gKiBAcGFyYW0ge051bWJlcn0gZmlyc3RBY3RvciBcbiAqIEBwYXJhbSB7TnVtYmVyfSBzZWNvbmRBY3RvciBcbiAqL1xuZnVuY3Rpb24gZGVsaW1pdGVyKCBmaXJzdEFjdG9yLCBzZWNvbmRBY3RvciApIHtcbiAgICByZXR1cm4gZmlyc3RBY3RvciAvIHNlY29uZEFjdG9yO1xufVxuXG4vKipcbiAqIE11bHRpcGx5XG4gKiBAcGFyYW0ge051bWJlcn0gZmlyc3RBY3RvciBcbiAqIEBwYXJhbSB7TnVtYmVyfSBzZWNvbmRBY3RvciBcbiAqL1xuZnVuY3Rpb24gbXVsdGlwbHkoIGZpcnN0QWN0b3IsIHNlY29uZEFjdG9yICkge1xuICAgIHJldHVybiBmaXJzdEFjdG9yICogc2Vjb25kQWN0b3I7XG59XG4vKipcbiAqIFNxcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBmaXJzdEFjdG9yIFxuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZEFjdG9yIFxuICovXG5mdW5jdGlvbiBzcXJ0IChmaXJzdEFjdG9yLCBzZWNvbmRBY3Rvcikge1xuICAgIHNlY29uZEFjdG9yID0gc2Vjb25kQWN0b3IgPyBzZWNvbmRBY3RvciA6IDIgO1xuICAgIHJldHVybiBNYXRoLnBvdyhmaXJzdEFjdG9yLCAxL3NlY29uZEFjdG9yKTtcbn1cbi8qKlxuICogbG5cbiAqIEBwYXJhbSB7TnVtYmVyfSBmaXJzdEFjdG9yIFxuICovXG5mdW5jdGlvbiBsbiAoZmlyc3RBY3Rvcikge1xuICAgIHJldHVybiBNYXRoLmxvZyhmaXJzdEFjdG9yKTtcbn1cbi8qKlxuICogRmFjdG9yaWFsXG4gKiBAcGFyYW0ge051bWJlcn0gZmlyc3RBY3RvciBcbiAqL1xuZnVuY3Rpb24gZmFjdG9yaWFsIChmaXJzdEFjdG9yKSB7XG4gICAgbGV0IHJlcyA9IDE7XG4gICAgZm9yKGxldCBpID0gMTsgaSA8PSBmaXJzdEFjdG9yOyBpKyspIHtcbiAgICAgICAgcmVzID0gcmVzICogaTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbi8qKlxuICogUG93XG4gKiBAcGFyYW0ge051bWJlcn0gZmlyc3RBY3RvciBcbiAqIEBwYXJhbSB7TnVtYmVyfSBzZWNvbmRBY3RvciBcbiAqL1xuZnVuY3Rpb24gcG93IChmaXJzdEFjdG9yLCBzZWNvbmRBY3RvciA9IDIpe1xuICAgIHJldHVybiBNYXRoLnBvdyhmaXJzdEFjdG9yLCBzZWNvbmRBY3Rvcik7XG59XG4vKipcbiAqIFVuYXJ5TWludXNcbiAqIEBwYXJhbSB7TnVtYmVyfSBmaXJzdEFjdG9yIFxuICovXG5mdW5jdGlvbiB1bmFyeU1pbnVzIChmaXJzdEFjdG9yKSB7XG4gICAgICAgIFxuICAgIHJldHVybiBmaXJzdEFjdG9yICogLTE7IFxufVxuZXhwb3J0IHtwbHVzLCBtaW51cywgZGVsaW1pdGVyLCBtdWx0aXBseSwgc3FydCwgbG4sIGZhY3RvcmlhbCwgcG93LCB1bmFyeU1pbnVzfTsiLCJjbGFzcyBUd29Qb3NpdGlvbnNTd2l0Y2hlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb250YWluZXIgQ29udGFpbmVyIHRvIGlucHV0IFxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gcG9zaXRpb25zTmFtZXMgQXJyYXkgb2YgcG9zaXRpb25zXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIEV2ZW50IHRvIGRpc3BhdGNoXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lciA9ICcnLCBwb3NpdGlvbnNOYW1lcyA9IFtdLCBldmVudE5hbWUgPSAnJykge1xyXG4gICAgICAgIC8vIHNldHRpbmdzXHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uQ2xhc3MnIDogJ1R3b1Bvc2l0aW9uc1N3aXRjaGVyLS1wb3NpdGlvbicsXHJcbiAgICAgICAgICAgICdwb3NpdGlvbkFjdGl2ZUNsYXNzJyA6ICdUd29Qb3NpdGlvbnNTd2l0Y2hlci0tcG9zaXRpb24tLWFjdGl2ZScsXHJcbiAgICAgICAgICAgICdzd2l0Y2hlckFjdGl2ZVBvc2l0aW9uQ2xhc3MnIDogW1xyXG4gICAgICAgICAgICAgICAgJ1R3b1Bvc2l0aW9uc1N3aXRjaGVyLS1zd2l0Y2hlci0tcG9zMScsXHJcbiAgICAgICAgICAgICAgICAnVHdvUG9zaXRpb25zU3dpdGNoZXItLXN3aXRjaGVyLS1wb3MyJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgJ3N3aXRjaGVyQmFzZUNsYXNzJyA6ICdUd29Qb3NpdGlvbnNTd2l0Y2hlci0tc3dpdGNoZXInXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoZXJFbGVtZW50ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IHBvc2l0aW9uc05hbWVzO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gXCJUd29Qb3NpdGlvbnNTd2l0Y2hlci1cIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwMCAtIDEgKyAxKSkgKyAxO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5wb3NpdGlvbnNbMF07XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5pbml0KGNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVFdmVudChldmVudE5hbWUpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gc2V0IGFjdGl2ZSBmaXJzdCBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlUG9zaXRpb24odGhpcy5wb3NpdGlvbnNbMF0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkIHN3aXRjaGVyIGh0bWxcclxuICAgICAqIEBwYXJhbSB7RE9NfSBjb250YWluZXIgXHJcbiAgICAgKi9cclxuICAgIGluaXQoY29udGFpbmVyKSB7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IGBgO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwb3NpdGlvbnMgKz0gXHJcbiAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cImAgKyB0aGlzLnNldHRpbmdzLnBvc2l0aW9uQ2xhc3MgKyBgXCIgZGF0YS12YWx1ZT1cImAgKyB0aGlzLnBvc2l0aW9uc1tpXSArIGBcIj5cclxuICAgICAgICAgICAgICAgIGAgKyB0aGlzLnBvc2l0aW9uc1tpXSArIGBcclxuICAgICAgICAgICAgPC9zcGFuPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiVHdvUG9zaXRpb25zU3dpdGNoZXJcIiBpZD1cImAgKyB0aGlzLmVsZW1lbnRJZCArIGBcIj5cclxuICAgICAgICAgICAgYCArIHBvc2l0aW9ucyArIGBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJgICsgdGhpcy5zZXR0aW5ncy5zd2l0Y2hlckJhc2VDbGFzcyArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICAgICAgdGhpcy5zd2l0Y2hlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZWxlbWVudElkICsgJyAuJyArIHRoaXMuc2V0dGluZ3Muc3dpdGNoZXJCYXNlQ2xhc3MpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnN3aXRjaC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHN3aXRjaCBhY3RpdmUgcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHN3aXRjaCggZXZlbnQgKSB7XHJcbiAgICAgICAgLy8gVE9ETzogd2UgY2FuIHVzZSBldmVudC50YXJnZXQgaWYgd2UgbmVlZCBtb3JlIHRoYW4gMiBwb3NpdGlvbnNcclxuICAgICAgICBsZXQgcG9zaXRpb25FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgdGhpcy5lbGVtZW50SWQgKyAnIC4nICsgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbkNsYXNzICk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3NlcyBmcm9tIHBvc2lzaW9uIGVsZW1lbnRzXHJcbiAgICAgICAgcG9zaXRpb25FbGVtZW50cy5mb3JFYWNoKChmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNldHRpbmdzLnBvc2l0aW9uQWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UodGhpcy5zZXR0aW5ncy5wb3NpdGlvbkFjdGl2ZUNsYXNzLCAnJyk7XHJcbiAgICAgICAgfSkuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50bHlfc2VsZWN0ZWRfaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5lbGVtZW50SWQgKyAnIFtkYXRhLXZhbHVlPVwiJyArIHRoaXMudmFsdWUgKyAnXCJdJyk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBvc2l0aW9uc1tpXS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLnZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlUG9zaXRpb24odGhpcy5wb3NpdGlvbnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBhY3RpdmUgcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwb3NpdGlvbiBcclxuICAgICAqL1xyXG4gICAgc2V0QWN0aXZlUG9zaXRpb24ocG9zaXRpb24gPSAnJykge1xyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnBvc2l0aW9ucy5pbmRleE9mKHBvc2l0aW9uKVxyXG5cclxuICAgICAgICBpZihpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmVsZW1lbnRJZCkuZGF0YXNldC52YWx1ZSA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZWxlbWVudElkICsgJyBbZGF0YS12YWx1ZT1cIicgKyBwb3NpdGlvbiArICdcIl0nKS5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3MucG9zaXRpb25BY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyByZW1vdmUgc3dpdGNoZXIgZWxlbWVudCBhY3RpdmUgY2xhc3Nlc1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnN3aXRjaGVyQWN0aXZlUG9zaXRpb25DbGFzcy5mb3JFYWNoKCAoZnVuY3Rpb24oYWN0aXZlQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICB9KS5iaW5kKHRoaXMpICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3Muc3dpdGNoZXJBY3RpdmVQb3NpdGlvbkNsYXNzW2luZGV4XSk7XHJcblxyXG4gICAgICAgICAgICAvLyBmaXJlIGV2ZW50XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQodGhpcy5ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGN1c3RvbSBldmVudFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBcclxuICAgICAqL1xyXG4gICAgY3JlYXRlRXZlbnQoZXZlbnROYW1lKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHsgJ2RldGFpbCc6IHRoaXN9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHdvUG9zaXRpb25zU3dpdGNoZXI7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==