module.exports = (function () {
    var __MODS__ = {}
    var __DEFINE__ = function (modId, func, req) {
        var m = { exports: {}, _tempexports: {} }
        __MODS__[modId] = { status: 0, func: func, req: req, m: m }
    }
    var __REQUIRE__ = function (modId, source) {
        if (!__MODS__[modId]) return require(source)
        if (!__MODS__[modId].status) {
            var m = __MODS__[modId].m
            m._exports = m._tempexports
            var desp = Object.getOwnPropertyDescriptor(m, 'exports')
            if (desp && desp.configurable) Object.defineProperty(m, 'exports', {
                set: function (val) {
                    if (typeof val === 'object' && val !== m._exports) {
                        m._exports.__proto__ = val.__proto__
                        Object.keys(val).forEach(function (k) { m._exports[k] = val[k] })
                    }
                    m._tempexports = val
                }, get: function () { return m._tempexports },
            })
            __MODS__[modId].status = 1
            __MODS__[modId].func(__MODS__[modId].req, m, m.exports)
        }
        return __MODS__[modId].m.exports
    }
    var __REQUIRE_WILDCARD__ = function (obj) {
        if (obj && obj.__esModule) { return obj } else {
            var newObj = {}
            if (obj != null) {
                for (var k in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]
                }
            }
            newObj.default = obj
            return newObj
        }
    }
    var __REQUIRE_DEFAULT__ = function (obj) { return obj && obj.__esModule ? obj.default : obj }
    __DEFINE__(1649750014014, function (require, module, exports) {
        /*!
         * word-wrap <https://github.com/jonschlinkert/word-wrap>
         *
         * Copyright (c) 2014-2017, Jon Schlinkert.
         * Released under the MIT License.
         */
        
        module.exports = function (str, options) {
            options = options || {}
            if (str == null) {
                return str
            }
            
            var width = options.width || 50
            var indent = (typeof options.indent === 'string')
                ? options.indent
                : '  '
            
            var newline = options.newline || '\n' + indent
            var escape = typeof options.escape === 'function'
                ? options.escape
                : identity
            
            var regexString = '.{1,' + width + '}'
            if (options.cut !== true) {
                regexString += '([\\s\u200B]+|$)|[^\\s\u200B]+?([\\s\u200B]+|$)'
            }
            
            var re = new RegExp(regexString, 'g')
            var lines = str.match(re) || []
            var result = indent + lines.map(function (line) {
                if (line.slice(-1) === '\n') {
                    line = line.slice(0, line.length - 1)
                }
                return escape(line)
            }).join(newline)
            
            if (options.trim === true) {
                result = result.replace(/[ \t]*$/gm, '')
            }
            return result
        }
        
        function identity (str) {
            return str
        }
        
    }, function (modId) {
        var map = {}
        return __REQUIRE__(map[modId], modId)
    })
    return __REQUIRE__(1649750014014)
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map
