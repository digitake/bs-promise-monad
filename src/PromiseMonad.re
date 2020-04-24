/**
 * Digitake<digitake@gmail.com>
 * MIT License
 * Thanks.
 */
/* create an alias to improve readabiity */
open Js.Promise;
type promise('a) = Js.Promise.t('a);

let defer = f : promise('a) => make((~resolve, ~reject as _) => ignore(f(resolve)));

let return = (a: 'a) : promise('a) => resolve(a);

let error = (a: exn) : promise('a) => reject(a);

let (>>=) = (m: promise('a), f: 'a => promise('b)) => then_(f, m);

/** Same as >>= with auto return */
let (>>-) = (m: promise('a), f: 'a => 'b) => then_(a => return(f(a)), m);

let (>>|) = (m: promise('a), f: error => promise('a)) => catch(f, m);

let (>>/) = (m: promise('a), f: error => 'a) => catch(e => return(f(e)), m);

let (>>*) = (m: promise('x), flist: list('a => 'b)) => List.fold_left((>>-), m, flist);
