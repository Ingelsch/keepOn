/*

Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name 
and value pairs (second argument). Each name and value pair of 
the source object has to be present in the object from the collection 
if it is to be included in the returned array.

*/
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keysToCheck = Object.keys(source);
  var valuesToCheck = Object.values(source);
  // console.log(valuesToCheck);
  
  // console.log(keysToCheck);

  // For alle indexer i collection
  for (var i = 0; i < collection.length; i++) {
    // lagre nøkler fra collection index[i]
    var keysFromData = Object.keys(collection[i]);
    var valuesFromData = Object.values(collection[i]);
    var validAnswer = true;

    // console.log(keysFromData)

    // Sammenlign nøkler fra source mot nøkler i collection index[i]
    for (var j = 0; j < keysToCheck.length; j++) {
      if (!keysFromData.includes(keysToCheck[j]) || !valuesFromData.includes(valuesToCheck[j])) {
          validAnswer = false;
        }        
    }

    if (validAnswer) {
      arr.push(collection[i]);
      // console.log(arr);
    }
  }

  // Only change code above this line
  console.log(arr);
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//console.log(arr, source);