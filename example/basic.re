let myPromise = Js.Promise.make((~resolve, ~reject) => resolve(. 2));

myPromise
|> Js.Promise.then_(value => {
     Js.log(value);
     Js.Promise.resolve(value + 2);
   })
|> Js.Promise.then_(value => {
     Js.log(value);
     Js.Promise.resolve(value + 3);
   })
|> Js.Promise.catch(err => {
     Js.log2("Failure!!", err);
     Js.Promise.resolve(-2);
   });

open PromiseMonad;

let mySweetenPromise = return(2);

mySweetenPromise
>>= (value => {
    Js.log(value);
    return(value + 2);
  })
>>= (value => {
    Js.log(value);
    return(value + 3);
  })
>>= (err => {
    Js.log2("Failure!!", err);
    return(-2);
  });

mySweetenPromise
>>- (value => {Js.log2("from first promise:",value); value+2})
>>- (value => {Js.log2("from second promise:", value); value+3})
>>- (err => {Js.log2("Handled error", err); err})

exception Sorry;
let breakPromise = return("I'm trying...");

breakPromise 
>>= ( x => Js.log("Program: " ++ x) |> return )
>>= ( y => error(Sorry) )
>>= ( z => Js.log("this is skipped")|>return)
>>| ( err => Js.log2("Handled error!!", err)|>return);