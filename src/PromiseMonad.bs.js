'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function defer(f) {
  return new Promise((function (resolve, _) {
                Curry._1(f, resolve);
                return /* () */0;
              }));
}

function $$return(a) {
  return Promise.resolve(a);
}

function error(a) {
  return Promise.reject(a);
}

function $great$great$eq(m, f) {
  return m.then(Curry.__1(f));
}

function $great$great$pipe(m, f) {
  return m.catch(Curry.__1(f));
}

exports.defer = defer;
exports.$$return = $$return;
exports.error = error;
exports.$great$great$eq = $great$great$eq;
exports.$great$great$pipe = $great$great$pipe;
/* No side effect */
