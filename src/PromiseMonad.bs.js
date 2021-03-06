'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");

function defer(f) {
  return new Promise((function (resolve, param) {
                Curry._1(f, resolve);
                
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

function $great$great$neg(m, f) {
  return m.then((function (a) {
                return Promise.resolve(Curry._1(f, a));
              }));
}

function $great$great$pipe(m, f) {
  return m.catch(Curry.__1(f));
}

function $great$great$slash(m, f) {
  return m.catch((function (e) {
                return Promise.resolve(Curry._1(f, e));
              }));
}

function $great$great$star(m, flist) {
  return List.fold_left($great$great$neg, m, flist);
}

exports.defer = defer;
exports.$$return = $$return;
exports.error = error;
exports.$great$great$eq = $great$great$eq;
exports.$great$great$neg = $great$great$neg;
exports.$great$great$pipe = $great$great$pipe;
exports.$great$great$slash = $great$great$slash;
exports.$great$great$star = $great$great$star;
/* No side effect */
