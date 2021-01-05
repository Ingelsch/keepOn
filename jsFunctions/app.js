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

const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
};