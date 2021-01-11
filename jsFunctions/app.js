function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

//accepts single array agrument, return the last element
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];

}

function longestString() {
    let longest = '';
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].length > longest.length) {
            longest = arguments[i];
        }
    }
    return longest;
}

function returnDay(num) {
    while (num > 0 && num < 8) {
        if (num === 1) {
            return "Monday";
        } else if (num === 2) {
            return "Tuesday";
        } else if (num === 3) {
            return "Wednesday";
        } else if (num === 4) {
            return "Thursday";
        } else if (num === 5) {
            return "Friday";
        } else if (num === 6) {
            return "Saturday";
        } else if (num === 7) {
            return "Sunday";
        }
    }
    return null;
}


function capitalize(str) {
    return str[0].charAt(0).toUpperCase() + str.slice(1);
}
function capitalizes(str) {
    let myStr = str[0].toUpperCase();
    let slice = str.slice(1);
    return myStr + slice;

}

function add(x, y) {

    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

function mult(x, y) {

    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x * y;
}

function rant(message) {
    let foo = message.toString().toUpperCase();
    for (let i = 0; i < 3; i++) {
        console.log(foo);
    }
}

function isSnakeEyes(num1, num2) {

    if (num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++
        return "EGG"
    }
}

// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

/* 1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223 */
function reverse(num) {
    num = num + "";
    // return num.toString().replace(/\D/g, '0').split('').reverse().join();
    return num.split("").reverse().join("");
}

function revers(str) {

    return str.split("").reverse().join("");
}


/* 2. Write a JavaScript function that checks wether a passed string is a palidrome or not
A palindrome is a word, phrase or sequence that reads the same backward as forward, e.g. madam or nurses run */
function isPalindrome(str) {
    //remove spaces, turn same case
    let newStr = str.toString().toLowerCase().replace(/\s+/g, '');
    console.log(newStr);
    //reverse strings
    let revers = newStr.split("").reverse().join('');
    console.log(revers);
    console.log(newStr + "=" + revers + "?");
    if (newStr === revers) {
        return `'${[str]}' is a palindrome :)`;
    }
    return `'${[str]}' is not a palindrome!`;

}

/* Write a JavaScript function that generates all combinations of a string
Examle string: 'dog'
Examle output: 'd,do,dog,o,og,g */

function generateAll(str) {
    //build an output
    //separate chars into 1 and 1, 2 and 2 and so on
    let myStr = [];
    //separated 1 and 1
    for (let i = 0, j = 1; i < str.length; i++, j++) {
        // myStr.push(str[i]);
        myStr[i] = str.substring(i, j);
    }
    let kosing = [];
    let temp = "";
    let sizes = Math.pow(2, myStr.length);

    for (let j = 0; j < sizes; j++) {
        temp = "";
        for (let k = 0; k < myStr.length; k++) {
            if ((j & Math.pow(2, k))) {
                temp += myStr[k];
            }

        }
        if (temp !== "") {
            kosing.push(temp);
        }
        // str[j];

    }
    kosing.join("\n");
    return kosing;
}

/* const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}; */

/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
 Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.*/

function alphabetize(str) {
    return str.split("").sort().join("");
}

/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' */

function uppercase(str) {

    let arr1 = str.split(' ');
    let arr2 = [];

    for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1));

    }
    return arr2.join(' ');
}

/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development' */

function longestWord(str) {


    let regex = /\w[a-z]{0,}/gi;
    let arr = str.match(regex);
    console.log(arr);
    let winner = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (winner.length < arr[i].length) {
            winner = arr[i];
        }
    }
    return winner;
}

/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
 */

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count += 1;
        }
    }

    return count;


}
// * This function returns true if 'c' is a vowel
function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c) !== -1
}

/* 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 */

// function isPrime(num) {
//     for (let i = 2; i < num; i++)
//         if (num % i === 0) return false;
//     return num > 1;
// }
const isPrime = num => {

    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

/* 9. Write a JavaScript function which accepts an argument and returns the type. 
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined. */
function whatType(thing) {
    return typeof (thing);
}

/* web dev bootcamp
Map practice
define a function called cleanNames. It should accept an array of strings that may contain additional space character before and after. Use the array map method to return a new array, full of trimmed names
ie: 
cleanNames([" timothee", "    darth_hater", "sassyfrassy  ", " elton john   "]);
        => ["timothee", "darth_hater", "sassyfrassy", "elton john"]
*/
// * Hint: use a string method to TRIM each string 
function cleanNames(arr) {

    const maps = arr.map(function (m) {
        return m.trim();
    });
    // console.log(maps)
    return maps;
}
// console.log(cleanNames([" timothee", "    darth_hater", "sassyfrassy  ", " elton john   "]));


//*arrow function with parens aound param
// const square = (x) => {
//     return x * x;
// }

//*arrow function no parens around param
// const square = x => {
//     return x * x;
// }
//*one-liner implicit return
const square = x => x * x

// *Normal arrow function notation
// const sum = (x, y) => {
//     return x + y;
// }

//  *arrow function one-liner implicit return
const sum = (x, y) => x + y


// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

//*arrow function implisit return

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

/* Write an arrow function expression called greet. It should accept a single string argrument, representing a person's name. I should return a greeting string as shown:
greet("Inge") - "Hey Inge!"
greet("Mathea") - "Hey Mathea!"
ARROW FUNCTION SYNTAX!!
*/
const greets = (str) => {
    return "Hey " + str + "!";
}

/* console.log("Heeeiiiii");

setTimeout(() => {
    console.log("er du der?")
}, 3000)

console.log("HADET") */

/* const id = setInterval(() => {
    console.log(Math.random())
}, 2000); */

//*clearInterval(id);

/* Filter method
Write a function called validUserNames that accepts an array of usernames (strings). It should return a new array, containing only the usernames that are less than 10 characters

validUserNames(["mark", "staceysmom1978", "q298321282238983", "carrie98", "MoanaFan"])
-> ["mark", "carrie98", "MoanaFan"]
*/

function validUserNames(arr) {

    return arr.filter(klipp => klipp.length < 10);

}
// console.log(validUserNames(["mark", "staceysmom1978", "q298321282238983", "carrie98", "MoanaFan"]));

