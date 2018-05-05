/**
 * Digitake<digitake@gmail.com>
 * MIT License
 * Thanks.
 */
let defer = f : Js.Promise.t('a) =>
  Js.Promise.make((~resolve, ~reject as _) => ignore(f(resolve)));

let return = (a: 'a) : Js.Promise.t('a) => Js.Promise.resolve(a);

let error = (a: exn) : Js.Promise.t('a) => Js.Promise.reject(a);

let (>>=) = (m: Js.Promise.t('a), f: 'a => Js.Promise.t('b)) =>
  Js.Promise.then_(f, m);

let (>>|) = (m: Js.Promise.t('a), f: Js.Promise.error => Js.Promise.t('a)) =>
  Js.Promise.catch(f, m);
