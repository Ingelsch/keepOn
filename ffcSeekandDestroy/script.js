function destroyer(arr) {

    // Remove all the values
    for(let i = 0; i < arguments[i].length; i++){
       //arguments er av typen object
       //convert arguments to array
       let args = Array.prototype.slice.call(arguments);
       console.log(args);
       for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if( arr[i] === args[j]) {
                delete arr[i];
            }
       }
       return arr.filter(Boolean);
    }
}
destroyer(["tree", "hamburger", 53], "tree", 53);

  /*Intermediate Algorithm Scripting: Seek and Destroy
    You will be provided with an initial array (the first argument in 
    the destroyer function), followed by one or more arguments. Remove all elements 
    from the initial array that are of the same value as these arguments.

Note
You have to use the argumentsobject.

Remember to use Read-Search-Ask if you get stuck. Write your own code. */