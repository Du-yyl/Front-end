module.exports = (function () {
	var __MODS__ = {}
	var __DEFINE__ = function (modId, func, req) {
		var m = { exports: {}, _tempexports: {} }
		__MODS__[modId] = { status: 0, func: func, req: req, m: m }
	}
	var __REQUIRE__ = function (modId, source) {
		if ( !__MODS__[modId] ) return require (source)
		if ( !__MODS__[modId].status ) {
			var m = __MODS__[modId].m
			m._exports = m._tempexports
			var desp = Object.getOwnPropertyDescriptor (m, 'exports')
			if ( desp && desp.configurable ) Object.defineProperty (m, 'exports', {
				set: function (val) {
					if ( typeof val === 'object' && val !== m._exports ) {
						m._exports.__proto__ = val.__proto__
						Object.keys (val).forEach (function (k) { m._exports[k] = val[k] })
					}
					m._tempexports = val
				}, get: function () { return m._tempexports },
			})
			__MODS__[modId].status = 1
			__MODS__[modId].func (__MODS__[modId].req, m, m.exports)
		}
		return __MODS__[modId].m.exports
	}
	var __REQUIRE_WILDCARD__ = function (obj) {
		if ( obj && obj.__esModule ) { return obj } else {
			var newObj = {}
			if ( obj != null ) {
				for ( var k in obj ) {
					if ( Object.prototype.hasOwnProperty.call (obj, k) ) newObj[k] = obj[k]
				}
			}
			newObj.default = obj
			return newObj
		}
	}
	var __REQUIRE_DEFAULT__ = function (obj) { return obj && obj.__esModule ? obj.default : obj }
	__DEFINE__ (1649750013674, function (require, module, exports) {
		var pSlice = Array.prototype.slice
		var Object_keys = typeof Object.keys === 'function'
				? Object.keys
				: function (obj) {
					var keys = []
					for ( var key in obj ) keys.push (key)
					return keys
				}
		
		
		var deepEqual = module.exports = function (actual, expected) {
			// enforce Object.is +0 !== -0
			if ( actual === 0 && expected === 0 ) {
				return areZerosEqual (actual, expected)
				
				// 7.1. All identical values are equivalent, as determined by ===.
			} else if ( actual === expected ) {
				return true
				
			} else if ( actual instanceof Date && expected instanceof Date ) {
				return actual.getTime () === expected.getTime ()
				
			} else if ( isNumberNaN (actual) ) {
				return isNumberNaN (expected)
				
				// 7.3. Other pairs that do not both pass typeof value == 'object',
				// equivalence is determined by ==.
			} else if ( typeof actual != 'object' && typeof expected != 'object' ) {
				return actual == expected
				
				// 7.4. For all other Object pairs, including Array objects, equivalence is
				// determined by having the same number of owned properties (as verified
				// with Object.prototype.hasOwnProperty.call), the same set of keys
				// (although not necessarily the same order), equivalent values for every
				// corresponding key, and an identical 'prototype' property. Note: this
				// accounts for both named and indexed properties on Arrays.
			} else {
				return objEquiv (actual, expected)
			}
		}
		
		function isUndefinedOrNull (value) {
			return value === null || value === undefined
		}
		
		function isArguments (object) {
			return Object.prototype.toString.call (object) == '[object Arguments]'
		}
		
		function isNumberNaN (value) {
			// NaN === NaN -> false
			return typeof value == 'number' && value !== value
		}
		
		function areZerosEqual (zeroA, zeroB) {
			// (1 / +0|0) -> Infinity, but (1 / -0) -> -Infinity and (Infinity !== -Infinity)
			return (1 / zeroA) === (1 / zeroB)
		}
		
		function objEquiv (a, b) {
			if ( isUndefinedOrNull (a) || isUndefinedOrNull (b) )
				return false
			
			// an identical 'prototype' property.
			if ( a.prototype !== b.prototype ) return false
			//~~~I've managed to break Object.keys through screwy arguments passing.
			//   Converting to array solves the problem.
			if ( isArguments (a) ) {
				if ( !isArguments (b) ) {
					return false
				}
				a = pSlice.call (a)
				b = pSlice.call (b)
				return deepEqual (a, b)
			}
			try {
				var ka = Object_keys (a),
						kb = Object_keys (b),
						key, i
			} catch (e) {//happens when one is a string literal and the other isn't
				return false
			}
			// having the same number of owned properties (keys incorporates
			// hasOwnProperty)
			if ( ka.length != kb.length )
				return false
			//the same set of keys (although not necessarily the same order),
			ka.sort ()
			kb.sort ()
			//~~~cheap key test
			for ( i = ka.length - 1; i >= 0; i-- ) {
				if ( ka[i] != kb[i] )
					return false
			}
			//equivalent values for every corresponding key, and
			//~~~possibly expensive deep test
			for ( i = ka.length - 1; i >= 0; i-- ) {
				key = ka[i]
				if ( !deepEqual (a[key], b[key]) ) return false
			}
			return true
		}
		
	}, function (modId) {
		var map = {}
		return __REQUIRE__ (map[modId], modId)
	})
	return __REQUIRE__ (1649750013674)
}) ()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map
