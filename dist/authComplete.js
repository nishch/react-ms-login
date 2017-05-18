/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 185);
/******/ })
/************************************************************************/
/******/ ({

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(82);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi ./src/authComplete.js\n// module id = 185\n// module chunks = 1\n\n//# sourceURL=webpack:///multi_./src/authComplete.js?");

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

eval("window.ReactLoginMS = {\n    authComplete: authComplete\n};\n\nfunction authComplete() {\n    function getFragment() {\n        if (window.location.hash.indexOf(\"#\") === 0) {\n            return parseQueryString(window.location.hash.substr(1));\n        } else {\n            return {};\n        }\n    };\n\n    function parseQueryString(queryString) {\n        var data = {},\n            pairs,\n            pair,\n            separatorIndex,\n            escapedKey,\n            escapedValue,\n            key,\n            value;\n\n        if (queryString === null) {\n            return data;\n        }\n\n        pairs = queryString.split(\"&\");\n\n        for (var i = 0; i < pairs.length; i++) {\n            pair = pairs[i];\n            separatorIndex = pair.indexOf(\"=\");\n\n            if (separatorIndex === -1) {\n                escapedKey = pair;\n                escapedValue = null;\n            } else {\n                escapedKey = pair.substr(0, separatorIndex);\n                escapedValue = pair.substr(separatorIndex + 1);\n            }\n\n            key = decodeURIComponent(escapedKey);\n            value = decodeURIComponent(escapedValue);\n\n            data[key] = value;\n        }\n\n        return data;\n    }\n\n    var fragment = getFragment();\n\n    window.location.hash = fragment.state || '';\n\n    window.opener.authScope.authCompletedCB(fragment);\n\n    window.close();\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/authComplete.js\n// module id = 82\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/authComplete.js?");

/***/ })

/******/ });