function diffArray(arr1, arr2) {
    let newArr = [];

    const diff = (arr1, arr2) => { //runs through arr1 and arr2 using arrow functions
        return arr1.filter(x => { //uses filter method on arr1 to find x value
            return arr2.indexOf(x) === -1; //finds x's id in arr2 until its end
        });                                 //am I correct?
    };
    function findUnique() {
        newArr = diff(arr1, arr2).concat(diff(arr2, arr1));    
    }
    findUnique();    
    console.log(newArr);
    return newArr;
}

diffArray([1, 2, 3, 4, true, 5],[1, 2, 3,true, false, 5]);
/*Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Note
You can return the array with its elements in any order. */

