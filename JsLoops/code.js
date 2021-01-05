// Here come arrays
// To make an empty array
let students = [];
// console.log(students);
// An array of strings
let colors = ['red', 'orange', 'yellow'];
// console.log(colors);
// An array of numbers
let lottonums = [19, 22, 56, 12, 51];
// console.log(lottonums);
// A mixed array
let stuff = [true, 79, 'cat', null];
// console.log(stuff);
//on an array: add to end
stuff.push('yo'); //stuff=[true, 79, 'cat', null, 'yo']
// console.log(stuff);
//on an array: remove from end
lottonums.pop(); //lottonums = [19,22,56,12]
// console.log(lottonums);
//on an array: remove from start
stuff.shift() // stuff = [79, 'cat', null]
// console.log(stuff);
//on an array: add to start
stuff.unshift('red'); //stuff = ['red', 79, 'cat', null];
// console.log(stuff);
//on an array: copy a portion on an array
lottonums.slice(2) //lottonums = [56,12]
// console.log(lottonums);

const months = ['Jan', 'Mar', 'Apr', 'Jun'];
// console.log(months);
months.splice(1, 0, 'Feb'); //insert 'Feb' at index 1, but removes 0 (none)
// console.log(months);
months.splice(4, 1, 'May') // insert 'May' at index 4, removing the one (1) at that position
// console.log(months);

// sort(), this method only sort strings, everything is converted to strings

// let scores = [1, 80, 100, 2450, 9, -12, 0, 42];
// scores.sort();
// console.log(scores); //scores = [-12, 0, 1, 100, 2450, 42, 80, 9]

// console.log(1);
// console.log(2);
// console.log(3);

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

//uppercase and console.log them

// for (let i = 0; i < people.length; i++) {
//     // console.log(people[i].toUpperCase());
//     console.log(people[i]);
// }
// for (const navn of people) {
//     console.log(navn);
// }

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// //write out all the ones to be seated
// //regular for loop
// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }

// }

// //for...of loop (will not work in IE)
// for (const row of seatingChart) {
//     for (const student of row) {
//         console.log(student);
//     }
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//square each using for...of loop
for (const num of numbers) {
    // console.log(num * num);
}

//iterating over Objects 
const testScores = {
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    mathea: 56,
    eline: 69,
    diedre: 81,
    elvira: 97,
    vonnie: 60,
    inge: 99
}
//Objects are not iterable
let total = 0;
let scores = Object.values(testScores); //this IS an array, not Object literal
for (let score of scores) {
    // console.log(total);
    total = total + score;
    // console.log(person);
    // console.log(`${person} scored ${testScores[person]}`);
}
// console.log(total / scores.length);