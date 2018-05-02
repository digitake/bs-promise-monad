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


  let breakPromise = error("Sorry");

  breakPromise >>= ( x => Js.log("I'm" ++ x));