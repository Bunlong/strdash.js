/* @license
strdash
v0.1.0
https://github.com/bunlong/strdash
License: MIT
*/

(function(root, factory) {
  /* globals define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && typeof exports !== 'undefined') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.str = factory();
  }
})(this, function() {
  'use strict';

  function initialize (object, str) {
    var str__ = str;
    if (str__ !== null && str__ !== undefined) {
      if (typeof str__ === 'string')
        object.str__ = str__;
      else
        object.str__ = str__toString();
    } else {
      // null or undefined
      object.str__ = str__;
    }

    // original object, currently only used by toCSV() and toBoolean()
    object.orig__ = str__;

    if (str__ !== null && str__ !== undefined) {
      if (object.__defineGetter__) {
        object.__defineGetter__('length', function() {
          return object.str__.length;
        })
      } else {
        object.length__ = str__.length;
      }
    } else {
      object.length__ = -1;
    }
  }

  function str(str) {
    initialize(this, str);
  }

  str.prototype = {
    isAlpha: isAlpha,
  };

  function isAlpha() {
    return !/[^0-9a-z\xDF-\xFF]/.test(this.str__.toLowerCase());
  }

  function Export(s) {
    return new str(s);
  };

  return Export;
});
