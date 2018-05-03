'use strict';

var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var PromiseMonad$BsPromiseMonad = require("../src/PromiseMonad.bs.js");

var myPromise = new Promise((function (resolve, _) {
        return resolve(2);
      }));

myPromise.then((function (value) {
            return Promise.resolve(value + 2 | 0);
          })).then((function (value) {
          return Promise.resolve(value + 3 | 0);
        })).catch((function () {
        return Promise.resolve(-2);
      }));

var mySweetenPromise = PromiseMonad$BsPromiseMonad.$$return(2);

PromiseMonad$BsPromiseMonad.$great$great$eq(PromiseMonad$BsPromiseMonad.$great$great$eq(PromiseMonad$BsPromiseMonad.$great$great$eq(mySweetenPromise, (function (value) {
                return PromiseMonad$BsPromiseMonad.$$return(value + 2 | 0);
              })), (function (value) {
            return PromiseMonad$BsPromiseMonad.$$return(value + 3 | 0);
          })), (function () {
        return PromiseMonad$BsPromiseMonad.$$return(-2);
      }));

var Sorry = Caml_exceptions.create("Basic-BsPromiseMonad.Sorry");

var breakPromise = PromiseMonad$BsPromiseMonad.$$return("I'm trying...");

PromiseMonad$BsPromiseMonad.$great$great$pipe(PromiseMonad$BsPromiseMonad.$great$great$eq(PromiseMonad$BsPromiseMonad.$great$great$eq(PromiseMonad$BsPromiseMonad.$great$great$eq(breakPromise, (function (x) {
                    return PromiseMonad$BsPromiseMonad.$$return((console.log("Program: " + x), /* () */0));
                  })), (function () {
                return PromiseMonad$BsPromiseMonad.error(Sorry);
              })), (function () {
            return PromiseMonad$BsPromiseMonad.$$return((console.log("this is skipped"), /* () */0));
          })), (function (err) {
        return PromiseMonad$BsPromiseMonad.$$return((console.log("Handled error!!", err), /* () */0));
      }));

exports.myPromise = myPromise;
exports.mySweetenPromise = mySweetenPromise;
exports.Sorry = Sorry;
exports.breakPromise = breakPromise;
/* myPromise Not a pure module */
