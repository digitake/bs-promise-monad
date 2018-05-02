# bs-promise-monad
Monadic syntax to work with promise in ReasonML

This project is a minimal syntax extension that help you to be more happy, and keep every promise in a way.

# installation

`npm install bs-promise-monad --save`

# Usage

simply 

`open BsPromiseMonad.PromiseMonad;`

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
>>= (err => {
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


and enjoy life.

# Change

- v0.2.0 : add Promise.reject by `error`