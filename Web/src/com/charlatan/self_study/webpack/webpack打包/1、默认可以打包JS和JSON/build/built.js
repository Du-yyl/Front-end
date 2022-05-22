/******/
(function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {}
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__ (moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {},
            /******/
        }
        /******/
        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
        /******/
        /******/ 		// Flag the module as loaded
        /******/
        module.l = true
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports
        /******/
    }
    
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, { enumerable: true, get: getter })
            /******/
        }
        /******/
    }
    /******/
    /******/ 	// define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', { value: true })
        /******/
    }
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value)
        /******/
        if (mode & 8) return value
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value
        /******/
        var ns = Object.create(null)
        /******/
        __webpack_require__.r(ns)
        /******/
        Object.defineProperty(ns, 'default', { enumerable: true, value: value })
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key,
            function (key) { return value[key] }.bind(null, key))
        /******/
        return ns
        /******/
    }
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault () { return module['default'] } :
            /******/            function getModuleExports () { return module }
        /******/
        __webpack_require__.d(getter, 'a', getter)
        /******/
        return getter
        /******/
    }
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    }
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = ''
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = './src/index.js')
    /******/
})
    /************************************************************************/
    /******/ ({
    
    /***/ './src/data.json':
    /*!***********************!*\
     !*** ./src/data.json ***!
     \***********************/
    /*! exports provided: name, age, default */
    /***/ (function (module) {
        
        eval(
            'module.exports = JSON.parse("{\\"name\\":\\"测试\\",\\"age\\":20}");\n\n//# sourceURL=webpack:///./src/data.json?')
        
        /***/
    }),
    
    /***/ './src/index.css':
    /*!***********************!*\
     !*** ./src/index.css ***!
     \***********************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        
        eval(
            'throw new Error("Module parse failed: Unexpected token (10:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|   *  Il n\'ya qu\'un héroïsme au monde : c\'est de voir le monde tel qu\'il est et de l\'aimer.\\n|   */\\n> * {\\n| \\tmargin: 0;\\n| \\tpadding: 0;");\n\n//# sourceURL=webpack:///./src/index.css?')
        
        /***/
    }),
    
    /***/ './src/index.js':
    /*!**********************!*\
     !*** ./src/index.js ***!
     \**********************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        
        'use strict'
        eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./src/data.json");\nvar _data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./src/data.json", 1);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/**\r\n * Time:2022/3/17 19:34 37\r\n * Name:index.js\r\n * Path:Web/src/com/charlatan/self_study/webpack/webpack体验/src\r\n * ProjectName:WWW\r\n * Author:charlatan\r\n *\r\n *  Il n\'ya qu\'un héroïsme au monde : c\'est de voir le monde tel qu\'il est et de l\'aimer.\r\n */\r\n\r\n/**\r\n  这个 index 文件是整个项目的入口文件，项目的打包由此开始\r\n  \r\n  1.\r\n  开发环境：  webpack ./src/index.js -o ./build/built.js --mode=development\r\n    webpack 会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js\r\n    整体打包环境是开发环境\r\n  \r\n  2.\r\n  生产环境： webpack ./src/index.js -o ./build/builts.js --mode=production\r\n    整体和开发环境相似，不过这个模式是生产环境\r\n \r\n  3. 当将指定的内容进行打包后，会指定的目录下生成新的文件，并且这个生成的文件可以在node环境下直接运行\r\n */\r\n// 引入JSON文件\r\n\r\nconsole.log(_data_json__WEBPACK_IMPORTED_MODULE_0__);\r\n// 引入CSS文件\r\n\r\n\r\nfunction add (x, y) {\r\n  return x + y\r\n}\r\n\r\nconsole.log(add(1, 2))\r\n\n\n//# sourceURL=webpack:///./src/index.js?')
        
        /***/
    }),
    
    /******/
})
