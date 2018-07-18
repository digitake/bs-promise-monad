# bs-promise-monad
Monadic syntax to work with promise in ReasonML

This project is a minimal syntax extension that help you to be more happy, and keep every promise in a way.

# status
This module is simple and self-completed. It means that you can use it with confidence that it won't bring any breaking changes in a subsequent update.

# installation

`npm install bs-promise-monad --save`

and add

`bs-promise-monad` into bsconfig.json.

You also need to install bs-webapi.

# Usage

simply 

`open BsPromiseMonad.PromiseMonad;`

and enjoy life.

# Example

```
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
>>| (err => {
    Js.log2("Failure!!", err);
    return(-2);
  });

```

Reject the promise

```
exception Sorry;

error(Sorry)
>>= (x => Js.log("do it " ++ x) |> return)
>>| (err => return(Js.log2("I handled this", err)));
```

```
exception Sorry;
let breakPromise = return("I'm trying...");

breakPromise 
>>= ( x => Js.log("Program: " ++ x) |> return )
>>= ( y => error(Sorry) )   /* Reject here */
>>= ( z => Js.log("this is skipped")|>return)
>>| ( err => Js.log2("Handled error!!", err)|>return); /* Error handling here */
```


# Change

- v0.2.6 : update example on error handling
- v0.2.5 : add error handling (>>|)
- v0.2.0 : add Promise.reject by `error`
